<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index(Request $request){
        return $this->view($request, 'dashboard.brands.index');
    }

    public function create(Request $request){
        return $this->view($request, 'dashboard.brands.create');
    }
}
