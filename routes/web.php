<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Client\CartController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Dashboard\BrandController;
use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\Controller;
use App\Http\Controllers\Dashboard\InvoiceController;
use App\Http\Controllers\Dashboard\ProductController;
use App\Http\Controllers\Dashboard\UserController;
use App\Models\Product;
use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->group(function () {
    Route::get('products', function(){
        return Product::apiGet('products');
    });
    Route::group(['middleware' => ['auth']], function(){
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
    });
});

Route::group(['middleware' => ['auth']], function(){
    Route::post('/cart/items/{product}', [CartController::class, 'store'])->name('cart.items.store');
});
Route::group(['middleware' => ['auth:relative']], function(){
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('products', [HomeController::class, 'products'])->name('products.index');
    Route::get('products/search', [HomeController::class, 'search'])->name('products.search');
    Route::get('products/{product}', [HomeController::class, 'show'])->name('products.show');
});


Route::get('/auth', [AuthController::class, 'form'])->name('auth.form');
Route::post('/auth', [AuthController::class, 'post'])->name('auth.post');

// Route::get('/auth/{verify}', [AuthController::class, 'verifyForm'])->name('auth.verifyForm');
Route::post('/auth/{verify}', [AuthController::class, 'verify'])->name('auth.verify');

Route::get('/public', function() {
    return view('public.index');
});

Route::get('/public/login', function() {
    return view('public.login.index');
});

Route::get('/public/login/SMScode', function() {
    return view('public.login.SMScode');
});

Route::get('/public/invoices', function() {
    return view('public.invoices.index');
});

Route::get('/public/invoices/invoice', function() {
    return view('public.invoices.invoice');
});

Route::get('/public/products/search', function() {
    return view('public.products.search');
});

Route::get('/public/products/product', function() {
    return view('public.products.product');
});

Route::get('/public/products/categories', function() {
    return view('public.products.categories');
});

Route::get('/public/products/categoryProducts', function() {
    return view('public.products.categoryProducts');
});

Route::get('/public/invoices/cart', function() {
    return view('public.invoices.cart');
});

Route::get('/public/invoices/location', function() {
    return view('public.invoices.location');
});

Route::get('/public/invoices/success', function() {
    return view('public.invoices.success');
});
