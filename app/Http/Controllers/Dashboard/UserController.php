<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request){
        return $this->view($request, 'dashboard.users.index');
    }

    public function create(Request $request){
        return $this->view($request, 'dashboard.users.create');
    }
}
