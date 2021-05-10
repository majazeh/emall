<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function form(Request $request){
        return $this->view($request, 'auth.auth');
    }
}
