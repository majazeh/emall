<?php

use App\Http\Controllers\AuthController;
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
    Route::group(['middleware' => ['web', 'auth']], function(){
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

Route::get('/', function () {
    return view('welcome');
})->name('home');


Route::get('/auth', [AuthController::class, 'form'])->name('auth.form');
Route::post('/auth', [AuthController::class, 'post'])->name('auth.post');

// Route::get('/auth/{verify}', [AuthController::class, 'verifyForm'])->name('auth.verifyForm');
Route::post('/auth/{verify}', [AuthController::class, 'verify'])->name('auth.verify');
