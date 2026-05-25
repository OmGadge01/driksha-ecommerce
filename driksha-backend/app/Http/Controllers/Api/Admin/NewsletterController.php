<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function index(Request $request)
    {
        $query = NewsletterSubscriber::query();
        if ($request->search) {
            $query->where(function($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('email', 'like', '%' . $request->search . '%');
            });
        }

        $subscribers = $query->latest()->get();
        return response()->json([
            'success' => true,
            'total' => $subscribers->count(),
            'data' => $subscribers
        ]);
    }

    public function destroy($id)
    {
        $subscriber = NewsletterSubscriber::find($id);
        if (!$subscriber) {
            return response()->json([
                'success' => false,
                'message' => 'Subscriber not found'
            ], 404);
        }

        $subscriber->delete();
        return response()->json([
            'success' => true,
            'message' => 'Subscriber removed successfully'
        ]);
    }
    public function export()
    {
        $subscribers = NewsletterSubscriber::all();
        $csv = "Name,Email,Subscribed Date\n";

        foreach ($subscribers as $subscriber) {
            $csv .= "{$subscriber->name},{$subscriber->email},{$subscriber->created_at->format('d M Y')}\n";
        }

        return response($csv, 200, [
            'Content-Type'        => 'text/csv',
            'Content-Disposition' => 'attachment; filename="subscribers.csv"',
        ]);
    }
}