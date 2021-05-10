<?php

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

Route::get('/dashboard/users', function() {
    return view('dashboard.users.index');
});

Route::get('/dashboard/home', function() {
    return view('dashboard.home.index');
});

Route::get('/auth', function() {
    return view('auth.index');
});

Route::get('/auth/SMScode', function() {
    return view('auth.SMScode');
});
