<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request){
        return $this->view($request, 'dashboard.categories.index');
    }
}
