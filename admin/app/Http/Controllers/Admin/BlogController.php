<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\BlogDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $query = Blog::query();
        if ($request->filled('search')) {
            $query->where('title', 'like', '%'.$request->search.'%');
        }
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }
        $blogs = $query->latest()->paginate(20)->withQueryString();
        return view('admin.blogs.index', compact('blogs'));
    }

    public function create()
    {
        return view('admin.blogs.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'        => 'required|string|max:255',
            'slug'         => 'nullable|string|max:255|unique:blogs,slug',
            'description'  => 'required|string',
            'thumbnail'    => 'nullable|string|max:255',
            'status'       => 'required|in:published,draft',
            'author'       => 'nullable|string|max:100',
            'read_time'    => 'nullable|string|max:50',
            'category'     => 'required|in:AI_TRENDS,ADS_PERFORMANCE,BRAND_SEO',
            'content_html' => 'nullable|string',
        ]);

        $validated['slug'] = $validated['slug'] ?: Str::slug($validated['title']);

        $blog = Blog::create($validated);

        if (!empty($validated['content_html'])) {
            BlogDetail::create([
                'blog_id'      => $blog->id,
                'content_html' => $validated['content_html'],
            ]);
        }

        return redirect()->route('admin.blogs.index')->with('success', 'Blog created successfully.');
    }

    public function edit(Blog $blog)
    {
        $blog->load('detail');
        return view('admin.blogs.edit', compact('blog'));
    }

    public function update(Blog $blog, Request $request)
    {
        $validated = $request->validate([
            'title'        => 'required|string|max:255',
            'slug'         => 'required|string|max:255|unique:blogs,slug,'.$blog->id,
            'description'  => 'required|string',
            'thumbnail'    => 'nullable|string|max:255',
            'status'       => 'required|in:published,draft',
            'author'       => 'nullable|string|max:100',
            'read_time'    => 'nullable|string|max:50',
            'category'     => 'required|in:AI_TRENDS,ADS_PERFORMANCE,BRAND_SEO',
            'content_html' => 'nullable|string',
        ]);

        $blog->update($validated);

        if ($blog->detail) {
            $blog->detail->update(['content_html' => $validated['content_html'] ?? '']);
        } elseif (!empty($validated['content_html'])) {
            BlogDetail::create(['blog_id' => $blog->id, 'content_html' => $validated['content_html']]);
        }

        return redirect()->route('admin.blogs.index')->with('success', 'Blog updated successfully.');
    }

    public function destroy(Blog $blog)
    {
        $blog->delete(); // cascades to blog_details
        return redirect()->route('admin.blogs.index')->with('success', 'Blog deleted.');
    }
}
