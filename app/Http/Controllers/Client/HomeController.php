<?php

namespace App\Http\Controllers\Client;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Intro;
use App\Models\Product;
use Illuminate\Http\Request;
use stdClass;

class HomeController extends Controller
{
    public function index(Request $request){
        $this->data->intro = $intro = Intro::apiGet('/intro');
        $this->data->cart = isset($intro->cart) ? $intro->cart : null;
        $intro->products->setPath(route('products.index'))->links();

        return $this->view($request, 'client.index');
    }

    public function products(Request $request){
        if($request->category || $request->brand){
            $this->data->products = $products = Product::apiGet('products', $request->all());
            $this->data->global->title = __('Products');
            $products->setPath(route('products.index'))->links();
            $products->appends(['category' => $request->category]);
            $products->appends(['brand' => $request->brand]);
            if(isset($products->response->category)){
                $this->data->category = Category::fakeModel((object) ['data' => $products->response->category]);
            }
            if(isset($products->response->brand)){
                $this->data->brand = Brand::fakeModel((object) ['data' => $products->response->brand]);
            }
        }else{
            $this->data->categories = Category::apiCache();
        }
        return $this->view($request, 'client.products.index');
    }

    public function search(Request $request){
        if($request->q){
            $this->data->products = $products = Product::apiGet('products', $request->all());
            $this->data->global->title = __('Products');
            $products->appends(['q' => $request->q]);
            $products->setPath(route('products.search'))->links();
        }
        return $this->view($request, $request->header('data-xhr-base') ? 'client.products.search-base' : 'client.products.search');
    }

    public function show(Request $request, $product){
        $this->data->product = $product = Product::apiGet("products/$product", $request->all());
        $this->data->global->title = __('Products');
        return $this->view($request, 'client.products.show');
    }

    public function about(Request $request){
        return $this->view($request, 'client.about');
    }
    public function contact(Request $request){
        return $this->view($request, 'client.contact');
    }
}
