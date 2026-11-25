<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function index(Request $request)
    {
        $query = NewsletterSubscriber::query();
        if ($request->filled('search')) {
            $query->where('email', 'like', '%'.$request->search.'%');
        }
        $subscribers = $query->latest('subscribed_at')->paginate(30)->withQueryString();
        return view('admin.newsletter.index', compact('subscribers'));
    }

    public function destroy(NewsletterSubscriber $subscriber)
    {
        $subscriber->delete();
        return redirect()->route('admin.newsletter.index')->with('success', 'Subscriber removed.');
    }

    public function exportCsv()
    {
        $subscribers = NewsletterSubscriber::where('is_active', true)->latest('subscribed_at')->get();
        $filename = 'newsletter_' . date('Y-m-d') . '.csv';
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename=\"$filename\"",
        ];
        $callback = function() use ($subscribers) {
            $file = fopen('php://output', 'w');
            fputcsv($file, ['ID', 'Email', 'Subscribed At']);
            foreach ($subscribers as $s) {
                fputcsv($file, [$s->id, $s->email, $s->subscribed_at]);
            }
            fclose($file);
        };
        return response()->stream($callback, 200, $headers);
    }
}
