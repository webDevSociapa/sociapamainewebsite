<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\InfluencerRegistration;
use Illuminate\Http\Request;

class InfluencerController extends Controller
{
    public function index(Request $request)
    {
        $query = InfluencerRegistration::query();
        if ($request->filled('search')) {
            $query->where(function($q) use ($request) {
                $q->where('full_name', 'like', '%'.$request->search.'%')
                  ->orWhere('email', 'like', '%'.$request->search.'%')
                  ->orWhere('instagram_handle', 'like', '%'.$request->search.'%');
            });
        }
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }
        $influencers = $query->latest()->paginate(20)->withQueryString();
        $categories = InfluencerRegistration::distinct()->pluck('category')->filter();
        return view('admin.influencers.index', compact('influencers', 'categories'));
    }

    public function show(InfluencerRegistration $influencer)
    {
        return view('admin.influencers.show', compact('influencer'));
    }

    public function destroy(InfluencerRegistration $influencer)
    {
        $influencer->delete();
        return redirect()->route('admin.influencers.index')->with('success', 'Registration deleted.');
    }
}
