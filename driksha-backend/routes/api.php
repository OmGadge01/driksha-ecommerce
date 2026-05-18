<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProductController;

Route::prefix('admin')->group(function () {

    Route::apiResource('products', ProductController::class);


});