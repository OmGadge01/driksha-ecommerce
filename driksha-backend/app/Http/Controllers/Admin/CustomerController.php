<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Order;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index(Request $request) 
    {
        $query = User::query();

        if($request->search) {
            $query->where(function($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                ->orWhere('email', 'like' , '%' . $request->search . '%');
            });
        }

        $customers = $query->latest()->get()->map(function($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone ?? null,
                'total_orders' => Order::where('user_id' , $user->id)->count(),
                'total_spent' => Order::where('user_id' , $user->id)
                                      ->where('status' , 'Delivered')
                                    ->sum('total'),
                 'joined_date' => $user->created_at->format('d M Y'),
            ];
        });

        return response()->json([
            'success' => true,
            'data' => $customers
        ]);
    }

    public function show($id)
    {
        $user = User::find($id);

        if(!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Customer not found'
            ], 404);
        }

        $recentOrders = Order::where('user_id' , $id)
                            ->with('items')
                            ->latest()
                            ->take(5)
                            ->get();

         return response()->json([
            'success' => true,
            'data' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone ?? null,
                'joined_date' => $user->created_at->format('d M Y'),
                'total_orders' => Order::where('user_id' , $id)->count(),
                'total_spent' => Order::where('user_id' , $id)
                                ->where('status' , 'Delivered')
                                ->sum('total'),
                'delivered'  => Order::where('user_id' , $id)    
                                ->where('status' , 'Delivered')   
                                ->count(),
                'recent_orders' => $recentOrders,
            ]
         ]);                  
    }
}
