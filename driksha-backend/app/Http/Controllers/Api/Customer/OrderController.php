<?php

namespace App\Http\Controllers\Api\Customer;

use App\Models\Order;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Http\Resources\OrderResource;

class OrderController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | My Orders
    |--------------------------------------------------------------------------
    */

    public function index(Request $request)
    {
        $orders = Order::with([
            'items.product'
        ])
        ->where('user_id', $request->user()->id)
        ->latest()
        ->get();


        return response()->json([

            'success' => true,

            'data' => OrderResource::collection($orders)

        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | Order Details
    |--------------------------------------------------------------------------
    */

    public function show(Request $request, $id)
    {
        $order = Order::with([
            'items.product'
        ])
        ->where('user_id', $request->user()->id)
        ->find($id);


        if (!$order) {

            return response()->json([

                'success' => false,

                'message' => 'Order not found'

            ], 404);
        }


        return response()->json([

            'success' => true,

            'data' => new OrderResource($order)

        ]);
    }
}