<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $totalProducts = Product::count();
        $totalOrders = Order::count();
        $totalCustomers = User::count();
        $pendingOrders = Order::where('status', 'Pending')->count();
        $monthlyOrders = Order::selectRaw('
                        MONTH(created_at) as month,
                        YEAR(created_at) as year,
                        COUNT(*) as total_orders,
                        SUM(total) as total_revenue
            ')
            ->whereYear('created_at', now()->year)
            ->groupBy('year', 'month')
            ->orderBy('month')
            ->get()
            ->map(function ($item) {
                return [
                    'month' => date('F', mktime(0, 0, 0, $item->month, 1)),
                    'total_orders' => $item->total_orders,
                    'total_revenue' => $item->total_revenue,
                ];
            });

        $recentOrders = Order::with('items')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($order) {
                return [
                    'id' => $order->id,
                    'name' => $order->first_name . ' ' . $order->last_name,
                    'email' => $order->email,
                    'total' => $order->total,
                    'status' => $order->status,
                    'items' => $order->items->count(),
                    'created_at' => $order->created_at->format('d M Y'),
                ];
            });

        return response()->json([
            'success' => true,
            'data' => [
                'total_products' => $totalProducts,
                'total_orders' => $totalOrders,
                'total_customers' => $totalCustomers,
                'pending_orders' => $pendingOrders,
                'monthly_orders' => $monthlyOrders,
                'recent_orders' => $recentOrders,
            ]
        ]);
    }
}