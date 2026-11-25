<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::orderBy('sort_order')->paginate(30);
        return view('admin.clients.index', compact('clients'));
    }

    public function create()
    {
        return view('admin.clients.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'alt_text'   => 'required|string|max:100',
            'sort_order' => 'nullable|integer',
            'logo'       => 'nullable|image|max:2048',
            'img_path'   => 'nullable|string|max:255',
        ]);

        $imgPath = $request->img_path;
        if ($request->hasFile('logo')) {
            $imgPath = $request->file('logo')->store('clients', 'public');
            $imgPath = '/storage/' . $imgPath;
        }

        Client::create([
            'img_path'   => $imgPath,
            'alt_text'   => $request->alt_text,
            'sort_order' => $request->sort_order ?? 0,
            'is_active'  => $request->boolean('is_active', true),
        ]);

        return redirect()->route('admin.clients.index')->with('success', 'Client added.');
    }

    public function edit(Client $client)
    {
        return view('admin.clients.edit', compact('client'));
    }

    public function update(Client $client, Request $request)
    {
        $request->validate([
            'alt_text'   => 'required|string|max:100',
            'sort_order' => 'nullable|integer',
            'logo'       => 'nullable|image|max:2048',
            'img_path'   => 'nullable|string|max:255',
        ]);

        $imgPath = $request->img_path ?? $client->img_path;
        if ($request->hasFile('logo')) {
            $imgPath = $request->file('logo')->store('clients', 'public');
            $imgPath = '/storage/' . $imgPath;
        }

        $client->update([
            'img_path'   => $imgPath,
            'alt_text'   => $request->alt_text,
            'sort_order' => $request->sort_order ?? $client->sort_order,
            'is_active'  => $request->boolean('is_active'),
        ]);

        return redirect()->route('admin.clients.index')->with('success', 'Client updated.');
    }

    public function destroy(Client $client)
    {
        $client->delete();
        return redirect()->route('admin.clients.index')->with('success', 'Client deleted.');
    }
}
