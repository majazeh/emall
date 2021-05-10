<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->data->layouts->theme = 'auth.theme';
    }
    public function form(Request $request){
        return $this->view($request, 'auth.auth');
    }

    public function post(Request $request){
        $user = User::apiPost('auth', $request->all());
        if($user->mobile_token->token){
            $response = $user->toArray();
            $response['redirect'] = route('auth.verifyForm', $user->mobile_token->token);
            return $response;
        }
    }

    public function verifyForm(Request $request, $verify){
        $this->data->verify = $verify;
        return $this->view($request, 'auth.SMScode');
    }

    public function verify(Request $request, $verify){
        $user = User::apiPost("auth/$verify", $request->all());
        $request->session()->put('user', $user);
        return response()->json($user);
    }
}
