<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Models\Product;
use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->group(function () {
    Route::get('products', function(){
        return Product::apiGet('products');
    });
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard/home', function() {
    return view('dashboard.home.index');
});

Route::get('/auth', [AuthController::class, 'form'])->name('auth.form');

Route::get('/auth/SMScode', function() {
    return view('auth.SMScode');
});

Route::get('/dashboard/users', function() {
    return view('dashboard.users.index');
});

Route::resource('/dashboard/users', UserController::class);

Route::get('/dashboard/users/edit', function() {
    return view('dashboard.users.edit');
});
