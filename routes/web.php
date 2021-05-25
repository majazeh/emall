<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Client\CartController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\InvoiceController as ClientInvoiceController;
use App\Http\Controllers\Client\RequestController;
use App\Http\Controllers\Dashboard\BannerController;
use App\Http\Controllers\Dashboard\BrandController;
use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\Controller;
use App\Http\Controllers\Dashboard\InvoiceController;
use App\Http\Controllers\Dashboard\ProductController;
use App\Http\Controllers\Dashboard\UserController;
use App\Models\Product;
use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->group(function () {
    Route::group(['middleware' => ['auth']], function(){
        Route::get('products', function(){
            return Product::apiGet('products');
        });
        Route::get('/', [Controller::class, 'dashboard'])->name('dashboard');
        Route::resource('users', UserController::class, ['as' => 'dashboard']);
        Route::resource('categories', CategoryController::class, ['as' => 'dashboard']);
        Route::POST('categories/{category}', [CategoryController::class, 'update'])->name('dashboard.categories.update');
        Route::resource('brands', BrandController::class, ['as' => 'dashboard']);
        Route::POST('brands/{brand}', [BrandController::class, 'update'])->name('dashboard.brands.update');
        Route::resource('products', ProductController::class, ['as' => 'dashboard']);
        Route::POST('products/{product}', [ProductController::class, 'update'])->name('dashboard.products.update');

        Route::resource('invoices', InvoiceController::class, ['as' => 'dashboard']);
        Route::match(['put', 'patch'], 'invoice-items/{item}', [InvoiceController::class, 'updateItem'])->name('dashboard.invoice-items.update');
        Route::post('invoice-items/{invoice}', [InvoiceController::class, 'storeItem'])->name('dashboard.invoice-items.store');
        Route::get('banners', [BannerController::class, 'show'])->name('dashboard.banners.show');
        Route::post('banners', [BannerController::class, 'store'])->name('dashboard.banners.store');
    });
});

Route::group(['middleware' => ['auth']], function(){
    Route::match(['put', 'patch'], 'me', [AuthController::class, 'meUpdate'])->name('meUpdate');
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');
    Route::post('/cart/items/{product}', [CartController::class, 'store'])->name('cart.items.store');
    Route::get('/cart', [CartController::class, 'show'])->name('cart.show');
    Route::post('/cart/request', [CartController::class, 'request'])->name('cart.request');
    Route::get('/cart/request', [CartController::class, 'requestForm'])->name('cart.requestForm');
    Route::delete('/cart/items/{product}', [CartController::class, 'destroy'])->name('cart.items.destroy');

    Route::get('/invoices', [ClientInvoiceController::class, 'index'])->name('invoices.index');
    Route::get('/invoices/{invoice}', [ClientInvoiceController::class, 'show'])->name('invoices.show');
    Route::get('/request', [RequestController::class, 'show'])->name('request.show');

    Route::get('/profile', [AuthController::class, 'profile'])->name('profile');
});
Route::group(['middleware' => ['auth:relative']], function(){
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('products', [HomeController::class, 'products'])->name('products.index');
    Route::get('products/search', [HomeController::class, 'search'])->name('products.search');
    Route::get('products/{product}', [HomeController::class, 'show'])->name('products.show');
    Route::post('product-requests', [HomeController::class, 'prStore'])->name('pr.store');
});

Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');

Route::get('/auth', [AuthController::class, 'form'])->name('auth.form');
Route::post('/auth', [AuthController::class, 'post'])->name('auth.post');

// Route::get('/auth/{verify}', [AuthController::class, 'verifyForm'])->name('auth.verifyForm');
Route::post('/auth/{verify}', [AuthController::class, 'verify'])->name('auth.verify');


