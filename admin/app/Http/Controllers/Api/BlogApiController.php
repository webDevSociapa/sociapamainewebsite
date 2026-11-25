<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;

class BlogApiController extends Controller
{
    public function index()
    {
        $blogs = Blog::where('status', 'published')
            ->select('id', 'title', 'slug', 'description', 'thumbnail', 'category', 'author', 'read_time', 'created_at')
            ->latest()
            ->get()
            ->map(function ($blog) {
                return [
                    'title'       => $blog->title,
                    'description' => $blog->description,
                    'link'        => $blog->slug,
                    'image'       => $blog->thumbnail,
                    'localImage'  => $blog->thumbnail,
                ];
            });
        return response()->json($blogs);
    }

    public function show(string $slug)
    {
        $blog = Blog::where('slug', $slug)->where('status', 'published')->with('detail')->firstOrFail();
        return response()->json([
            'title'       => $blog->title,
            'description' => $blog->description,
            'slug'        => $blog->slug,
            'thumbnail'   => $blog->thumbnail,
            'author'      => $blog->author,
            'read_time'   => $blog->read_time,
            'created_at'  => $blog->created_at,
            'html'        => $blog->detail?->content_html ?? '',
        ]);
    }
}
