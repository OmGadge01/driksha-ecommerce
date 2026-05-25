<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\Admin\DashboardController;
use App\Http\Controllers\Api\Admin\ProductController;
use App\Http\Controllers\Api\Admin\CategoryController;
use App\Http\Controllers\Api\Admin\OrderController;
use App\Http\Controllers\Api\Admin\CustomerController;
use App\Http\COntrollers\Api\Admin\AdminAuthController;
use App\Http\Controllers\Api\Admin\BannerController;
use App\Http\Controllers\Api\Admin\FaqController;
use App\Http\Controllers\Api\Admin\NewsletterController;
use App\Http\Controllers\Api\Admin\SettingsController;
use App\Http\Controllers\Api\Customer\ProductController as CustomerProductController;
use App\Http\Controllers\Api\Customer\CategoryController as CustomerCategoryController;
use App\Http\Controllers\Api\Customer\CartController;
use App\Http\Controllers\Api\Customer\CheckoutController;
use App\Http\Controllers\Api\Customer\OrderController as CustomerOrderController;
use App\Http\Controllers\Api\Customer\AddressController;


// Public Auth Routes


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


// Authenticated User Routes


Route::middleware('auth:sanctum')->group(function () {

    Route::get('/profile', [AuthController::class, 'profile']);

    Route::post('/logout', [AuthController::class, 'logout']);

});


// Admin Routes

Route::prefix('admin')->group(function () {

    Route::post('/login', [AdminAuthController::class, 'login']);

});

Route::middleware(['auth:sanctum', 'admin'])
    ->prefix('admin')
    ->group(function () {

        Route::get('dashboard', [DashboardController::class, 'index']);

        Route::apiResource('products', ProductController::class);

        Route::apiResource('categories', CategoryController::class);

        Route::get('orders', [OrderController::class, 'index']);
        Route::get('orders/stats', [OrderController::class, 'stats']);
        Route::get('orders/{id}', [OrderController::class, 'show']);
        Route::put('orders/{id}/status', [OrderController::class, 'updateStatus']);

        Route::get('customers', [CustomerController::class, 'index']);
        Route::get('customers/{id}', [CustomerController::class, 'show']);

        Route::apiResource('banners', BannerController::class);

        Route::get('newsletter', [NewsletterController::class, 'index']);
        Route::get('newsletter/export', [NewsletterController::class, 'export']);
        Route::delete('newsletter/{id}', [NewsletterController::class, 'destroy']);

        Route::get('settings', [SettingsController::class, 'index']);
        Route::put('settings', [SettingsController::class, 'update']);



    });


//customer routes

Route::prefix('customer')->group(function () {

    Route::get('products', [CustomerProductController::class, 'index']);

    Route::get('products/featured', [CustomerProductController::class, 'featuredProducts']);

    Route::get('products/latest', [CustomerProductController::class, 'latestProducts']);

    Route::get('products/{slug}', [CustomerProductController::class, 'show']);

    Route::get('categories', [CustomerCategoryController::class, 'index']);

    Route::get(
        'categories/{slug}/products',
        [CustomerCategoryController::class, 'products']
    );

    //cart routes
    Route::middleware('auth:sanctum')->group(function () {

        Route::get('/cart', [CartController::class, 'index']);

        Route::post('/cart', [CartController::class, 'store']);

        Route::put('/cart/{id}', [CartController::class, 'update']);

        Route::delete('/cart/{id}', [CartController::class, 'destroy']);

        Route::post(
            '/checkout',
            [CheckoutController::class, 'store']
        );
        Route::get(
            '/orders',
            [CustomerOrderController::class, 'index']
        );

        Route::get(
            '/orders/{id}',
            [CustomerOrderController::class, 'show']
        );

        //addressed routes
        Route::get(
            '/customer/addresses',
            [AddressController::class, 'index']
        );

        Route::post(
            '/customer/addresses',
            [AddressController::class, 'store']
        );

        Route::put(
            '/customer/addresses/{id}',
            [AddressController::class, 'update']
        );

        Route::delete(
            '/customer/addresses/{id}',
            [AddressController::class, 'destroy']
        );

    });



});