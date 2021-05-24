<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller as Main;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class Controller extends Main
{
    public function __construct()
    {
        parent::__construct();
        $this->data->layouts->theme = 'client.theme';

    }

    public function view(Request $request, string $view, array $data = [])
    {
        if(auth() && auth()->check()){
            $cart = Cache::get('User-cart'. auth()->user()->id, false);
            if(!isset($this->data->cart)){
                if(!$cart){
                    $this->data->cart = $cart = Invoice::apiGet('cart');
                    auth()->user()->cartCache();
                }else{
                    $this->data->cart = $cart;
                }
            }
        }
        return parent::view($request, $view, $data);
    }
}
