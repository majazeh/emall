<?php

namespace App\Http\Controllers\Client;

use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function show(Request $request){
        try{
            $this->data->cart = $cart = Invoice::apiGet('/cart');
        }catch(Exception $e){
            dd(10);
        }
        return $this->view($request, 'client.cart.show');
    }

    public function store(Request $request, $product){

        $data = $request->all();
        $data['product_id'] = $product;
        $item = InvoiceItem::apiPost('cart/items', $data);
        $this->data->cart = $cart = new Invoice((array) $item->response->cart);
        $this->data->product = $product = $item->product;
        $product->setRelation('cart', $item);
        return $this->view($request, 'client.products.cartChange');
    }
}
