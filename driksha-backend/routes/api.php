<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;

use App\Http\Controllers\Api\Admin\ProductController;
use App\Http\Controllers\Api\Admin\CategoryController;
use App\Http\Controllers\Api\Admin\OrderController;
use App\Http\Controllers\Api\Admin\AdminAuthController;

use App\Http\Controllers\Api\Customer\ProductController as CustomerProductController;


// Customer Auth Routes


Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);


//Customer Protected Routes


Route::middleware('auth:sanctum')->group(function () {

    Route::get('/profile', [AuthController::class, 'profile']);

    Route::post('/logout', [AuthController::class, 'logout']);

});


// Admin Auth Routes


Route::prefix('admin')->group(function () {

    Route::post('/login', [AdminAuthController::class, 'login']);

});


// Admin Protected Routes


Route::middleware(['auth:sanctum', 'admin'])
    ->prefix('admin')
    ->group(function () {

        Route::get('/profile', [AdminAuthController::class, 'profile']);

        Route::post('/logout', [AdminAuthController::class, 'logout']);

        Route::apiResource('products', ProductController::class);

        Route::apiResource('categories', CategoryController::class);

        Route::get('orders', [OrderController::class, 'index']);

        Route::get('orders/stats', [OrderController::class, 'stats']);

        Route::get('orders/{id}', [OrderController::class, 'show']);

        Route::put('orders/{id}', [OrderController::class, 'updateStatus']);

    });


// Customer Product Routes

Route::prefix('customer')->group(function () {

    Route::get('products', [CustomerProductController::class, 'index']);

    Route::get('products/featured', [CustomerProductController::class, 'featuredProducts']);

    Route::get('products/latest', [CustomerProductController::class, 'latestProducts']);

    Route::get('products/{id}', [CustomerProductController::class, 'show']);

});