<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Dashboard\Controller;
use App\Http\Controllers\Dashboard\UserController;
use App\Models\Product;
use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->group(function () {
    Route::get('products', function(){
        return Product::apiGet('products');
    });
    Route::group(['middleware' => ['web', 'auth']], function(){
        Route::resource('users', UserController::class, ['as' => 'dashboard']);
    });
});

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/dashboard', [Controller::class, 'dashboard'])->name('dashboard');

Route::get('/auth', [AuthController::class, 'form'])->name('auth.form');
Route::post('/auth', [AuthController::class, 'post'])->name('auth.post');

Route::get('/auth/{verify}', [AuthController::class, 'verifyForm'])->name('auth.verifyForm');
Route::post('/auth/{verify}', [AuthController::class, 'verify'])->name('auth.verify');


Route::get('/auth/SMScode', function() {
    return view('auth.SMScode');
});
