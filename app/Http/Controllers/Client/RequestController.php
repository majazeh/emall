<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;

class RequestController extends Controller
{
    public function show(Request $request){

        return $this->view($request, 'client.products.request');
    }
}
