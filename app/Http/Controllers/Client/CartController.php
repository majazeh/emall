<?php

namespace App\Http\Controllers\Client;

use App\Models\InvoiceItem;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function store(Request $request, $product){
        $data = $request->all();
        $data['product_id'] = $product;
        $item = InvoiceItem::apiPost('cart/items', $data);
        $this->data->product = $product = $item->product;
        $product->setRelation('cart', $item);
        return $this->view($request, 'client.products.cart');
    }
}
