<?php

namespace App\Http\Controllers\Api\Customer;

use App\Models\Cart;
use App\Models\Product;
use App\Models\CartItem;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Http\Resources\CartResource;

class CartController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | View Cart
    |--------------------------------------------------------------------------
    */

    public function index(Request $request)
    {
        $cart = Cart::with([
            'items.product.mainImage'
        ])
        ->firstOrCreate([
            'user_id' => $request->user()->id
        ]);


        return response()->json([

            'success' => true,

            'data' => new CartResource($cart)

        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | Add To Cart
    |--------------------------------------------------------------------------
    */

    public function store(Request $request)
    {
        $request->validate([

            'product_id' => 'required|exists:products,id',

            'quantity' => 'required|integer|min:1',
        ]);


        $product = Product::find($request->product_id);


        /*
        |--------------------------------------------------------------------------
        | Stock Validation
        |--------------------------------------------------------------------------
        */

        if ($product->stock < $request->quantity) {

            return response()->json([

                'success' => false,

                'message' => 'Insufficient stock'

            ], 400);
        }


        /*
        |--------------------------------------------------------------------------
        | Create/Get Cart
        |--------------------------------------------------------------------------
        */

        $cart = Cart::firstOrCreate([

            'user_id' => $request->user()->id
        ]);


        /*
        |--------------------------------------------------------------------------
        | Check Existing Product
        |--------------------------------------------------------------------------
        */

        $cartItem = CartItem::where('cart_id', $cart->id)
            ->where('product_id', $product->id)
            ->first();


        if ($cartItem) {

            $newQuantity = $cartItem->quantity + $request->quantity;

            if ($product->stock < $newQuantity) {

                return response()->json([

                    'success' => false,

                    'message' => 'Insufficient stock'

                ], 400);
            }

            $cartItem->update([

                'quantity' => $newQuantity
            ]);

        } else {

            CartItem::create([

                'cart_id' => $cart->id,

                'product_id' => $product->id,

                'quantity' => $request->quantity,
            ]);
        }


        $cart->load([
            'items.product.mainImage'
        ]);


        return response()->json([

            'success' => true,

            'message' => 'Product added to cart',

            'data' => new CartResource($cart)

        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | Update Cart Item Quantity
    |--------------------------------------------------------------------------
    */

    public function update(Request $request, $id)
    {
        $request->validate([

            'quantity' => 'required|integer|min:1',
        ]);


        $cartItem = CartItem::with('product')
            ->find($id);


        if (!$cartItem) {

            return response()->json([

                'success' => false,

                'message' => 'Cart item not found'

            ], 404);
        }


        /*
        |--------------------------------------------------------------------------
        | Stock Validation
        |--------------------------------------------------------------------------
        */

        if ($cartItem->product->stock < $request->quantity) {

            return response()->json([

                'success' => false,

                'message' => 'Insufficient stock'

            ], 400);
        }


        $cartItem->update([

            'quantity' => $request->quantity
        ]);


        $cart = Cart::with([
            'items.product.mainImage'
        ])->find($cartItem->cart_id);


        return response()->json([

            'success' => true,

            'message' => 'Cart updated successfully',

            'data' => new CartResource($cart)

        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | Remove Cart Item
    |--------------------------------------------------------------------------
    */

    public function destroy($id)
    {
        $cartItem = CartItem::find($id);


        if (!$cartItem) {

            return response()->json([

                'success' => false,

                'message' => 'Cart item not found'

            ], 404);
        }


        $cart = Cart::with([
            'items.product.mainImage'
        ])->find($cartItem->cart_id);


        $cartItem->delete();


        return response()->json([

            'success' => true,

            'message' => 'Item removed from cart',

            'data' => new CartResource($cart)

        ]);
    }
}