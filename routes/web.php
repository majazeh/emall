<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Dashboard\UserController;
use App\Models\Product;
use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->group(function () {
    Route::get('products', function(){
        return Product::apiGet('products');
    });
    Route::resource('users', UserController::class, ['as' => 'dashboard']);
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', null)->name('dashboard');

Route::get('/auth', [AuthController::class, 'form'])->name('auth.form');

Route::get('/auth/SMScode', function() {
    return view('auth.SMScode');
});
