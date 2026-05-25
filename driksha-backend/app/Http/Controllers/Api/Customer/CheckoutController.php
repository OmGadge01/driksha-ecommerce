<?php

namespace App\Http\Controllers\Api\Customer;

use App\Models\Cart;
use App\Models\Order;
use App\Models\Product;
use App\Models\OrderItem;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use App\Http\Controllers\Controller;

use App\Http\Resources\OrderResource;

class CheckoutController extends Controller
{
    // Place Order
    

    public function store(Request $request)
    {
        $request->validate([

            'first_name' => 'required|string|max:255',

            'last_name' => 'required|string|max:255',

            'email' => 'required|email',

            'address' => 'required|string',

            'city' => 'required|string',

            'postal_code' => 'required|string',
        ]);


        // Load Cart
       

        $cart = Cart::with([
            'items.product'
        ])
        ->where('user_id', $request->user()->id)
        ->first();


        if (!$cart || $cart->items->count() === 0) {

            return response()->json([

                'success' => false,

                'message' => 'Cart is empty'

            ], 400);
        }


        // Start Transaction
        

        DB::beginTransaction();

        try {

            $subtotal = 0;

           // Validate Stock + Calculate Total
            

            foreach ($cart->items as $item) {

                if ($item->product->stock < $item->quantity) {

                    return response()->json([

                        'success' => false,

                        'message' => "{$item->product->name} out of stock"

                    ], 400);
                }

                $subtotal += (
                    $item->product->price * $item->quantity
                );
            }


           // Charges
            

            $shipping = 100;

            $tax = ($subtotal * 5) / 100;

            $total = $subtotal + $shipping + $tax;

         //create order items    

            $order = Order::create([

                'user_id' => $request->user()->id,

                'subtotal' => $subtotal,

                'shipping' => $shipping,

                'tax' => $tax,

                'total' => $total,

                'status' => 'pending',

                'first_name' => $request->first_name,

                'last_name' => $request->last_name,

                'email' => $request->email,

                'address' => $request->address,

                'city' => $request->city,

                'postal_code' => $request->postal_code,
            ]);


           //create order items

            foreach ($cart->items as $item) {

                OrderItem::create([

                    'order_id' => $order->id,

                    'product_id' => $item->product_id,

                    'name' => $item->product->name,

                    'price' => $item->product->price,

                    'quantity' => $item->quantity,
                ]);


               //reduce stock

                $item->product->decrement(
                    'stock',
                    $item->quantity
                );
            }


           // clear cart

            $cart->items()->delete();


            DB::commit();


            $order->load([
                'items.product'
            ]);


            return response()->json([

                'success' => true,

                'message' => 'Order placed successfully',

                'data' => new OrderResource($order)

            ], 201);

        } catch (\Exception $e) {

            DB::rollBack();

            return response()->json([

                'success' => false,

                'message' => $e->getMessage()

            ], 500);
        }
    }
}