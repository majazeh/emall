<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
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

Route::get('/dashboard/users', function() {
    return view('dashboard.users.index');
});

Route::get('/dashboard/users/create', function() {
    return view('dashboard.users.create');
});

Route::get('/dashboard/users/edit', function() {
    return view('dashboard.users.edit');
});
