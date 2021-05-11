<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request){
        return $this->view($request, 'dashboard.products.index');
    }

    public function create(Request $request){
        return $this->view($request, 'dashboard.products.create');
    }
}
