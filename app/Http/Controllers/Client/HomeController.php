<?php

namespace App\Http\Controllers\Client;

use App\Models\Intro;
use App\Models\Product;
use Illuminate\Http\Request;
use stdClass;

class HomeController extends Controller
{
    public function index(Request $request){
        $this->data->intro = $intro = Intro::apiGet('/intro');
        $intro->products->setPath(route('products.index'))->links();

        return $this->view($request, 'client.index');
    }

    public function products(Request $request){
        $this->data->products = $products = Product::apiGet('products', $request->all());
        $this->data->global->title = __('Products');
        $products->setPath(route('products.index'))->links();
        return $this->view($request, 'client.products.index');
    }

    public function show(Request $request, $product){
        $this->data->product = $product = Product::apiGet("products/$product", $request->all());
        $this->data->global->title = __('Products');
        return $this->view($request, 'client.products.show');
    }
}
