<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request){
        $this->data->products = $products = Product::apiGet('products', $request->all());
        $this->data->global->title = __('Products');
        $products->setPath(route('dashboard.products.index'))->links();
        return $this->view($request, 'dashboard.products.index');
    }

    public function show(Request $request, $product){
        if($request->ajax){
            return [
                'redirect' => route('dashboard.products.show', $product)
            ];
        }
        return redirect()->route('dashboard.products.edit', $product);
    }

    public function create(Request $request){
        $this->data->product = new Product();
        return $this->view($request, 'dashboard.products.create');
    }

    public function edit(Request $request, $product){
        $this->data->product = $product = Product::apiGet("products/$product", $request->all());
        return $this->view($request, 'dashboard.products.create');
    }

    public function update(Request $request, $product){
        $this->data->product = $product = Product::apiPost("products/$product", $request->all());
        return $this->view($request, 'dashboard.products.create');
    }

    public function store(Request $request){
        $this->data->product = $product = Product::apiPost("products", $request->all());
        return $this->view($request, 'dashboard.products.create');
    }
}
