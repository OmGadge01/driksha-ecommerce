<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request) {
        $query = Order::with(['items', 'items_product']);

        if($request->status) {
            $query->where('status', $request->status);
        }

        if ($request->search) {
            $query->where(function($q) use ($request) {
                    $q->where('first_name', 'like', '%' . $request->search . '%')
                    ->where('last_name', 'like' , '%' . $request->search . '%')
                    ->where('email' , 'like' , '%' , $request->search . '%');
            });
        }

        $orders = $query->latest()->get();

        return response()->json([
            'success' => true,
            'data' => $orders
        ]);
    }

    public function show($id) {
        $order = Order::with(['items', 'items.product'])->find($id);

        if(!$order) {
            return response()->json([
                'success' => false,
                'message' => 'Order not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $order
        ]);
    }

    public function updateStatus(Request $request, $id) {
        $request->validate([
            'status' => 'required|in:Pending,Processing,Delivered,Cancelled'
        ]);

        $order = Order::find($id);

        if(!$order) {
            return response()->json([
                'success' => false,
                'message' => 'Order not found'
            ], 404);
        }

        $order->update([
            'status' => $request->status
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Order status updated successfully',
            'data' => $order
        ]);
    }

    public function stats()
    {
        return response()->json([
            'success' => true,
            'data' => [
                'total' => Order::count(),
                'pending' => Order::where('status', 'Pending')->count(),
                'processing' => Order::where('status', 'Processing')->count(),
                'delivered' => Order::where('status', 'Delivered')->count(),
                'cancelled' => Order::where('status', 'Cancelled')->count(),
            ]
        ]);
    }
}
