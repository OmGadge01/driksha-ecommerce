<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Admin\ProductController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\OrderController;
 use App\Http\Controllers\Api\Customer\ProductController as CustomerProductController;


// Public Auth Routes


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


// Authenticated User Routes


Route::middleware('auth:sanctum')->group(function () {

    Route::get('/profile', [AuthController::class, 'profile']);

    Route::post('/logout', [AuthController::class, 'logout']);

});


// Admin Routes


Route::middleware(['auth:sanctum', 'admin'])
    ->prefix('admin')
    ->group(function () {

        Route::apiResource('products', ProductController::class);

        Route::apiResource('categories', CategoryController::class);

        Route::get('orders', [OrderController::class, 'index']);

        Route::get('orders/stats', [OrderController::class, 'stats']);

        Route::get('orders/{id}', [OrderController::class, 'show']);

        Route::put('orders/{id}', [OrderController::class, 'updateStatus']);

    });


    //customer routes
   
    Route::prefix('customer')->group(function () {

    Route::get('products', [CustomerProductController::class, 'index']);

    Route::get('products/featured', [CustomerProductController::class, 'featuredProducts']);

    Route::get('products/latest', [CustomerProductController::class, 'latestProducts']);

    Route::get('products/{id}', [CustomerProductController::class, 'show']);

});