<?php

namespace App\Http\Controllers\Client;

use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CartController extends Controller
{
    public function show(Request $request){
        try{
            $this->data->cart = $cart = Invoice::apiGet('/cart');
        }catch(Exception $e){
        }
        return $this->view($request, 'client.cart.show');
    }
    public function requestForm(Request $request){
        try{
            $this->data->cart = $cart = Invoice::apiGet('/cart');
        }catch(Exception $e){
        }
        if($cart->status != 'draft'){
            if($request->ajax()){
                return ['redirect' => route('cart.show')];
            }
            return redirect()->route('cart.show');
        }
        return $this->view($request, 'client.cart.requestForm');
    }

    public function store(Request $request, $product){

        $data = $request->all();
        $data['product_id'] = $product;
        $item = InvoiceItem::apiPost('cart/items', $data);
        $this->data->cart = $cart = new Invoice((array) $item->response->cart);
        auth()->user()->cartCache($cart);
        $this->data->product = $product = $item->product;
        $product->setRelation('cart', $item);
        return $this->view($request, 'client.products.cartChange');
    }

    public function destroy(Request $request, $product){
        $this->data->cart = $cart = Invoice::apiDelete('cart/items/'. $product);
        auth()->user()->cartCache($cart);
        $this->data->product = (object) ['id' => $product];
        return $this->view($request, $request->isCart ? 'client.cart.cartChange' : 'client.products.cartChange');
    }

    public function request(Request $request){
        $this->data->invoice = Invoice::apiPost('/cart/request', $request->all());
        return $this->view($request, 'client.cart.success');
    }
}
