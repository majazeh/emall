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
        if(auth()->check()) return redirect()->route('dashboard');
        return $this->view($request, 'auth.auth');
    }

    public function post(Request $request){
        $user = User::apiPost('auth', $request->all());
        if($user->mobile_token->token){
            $this->data->user = $user;
            return $this->verifyForm($request, $user->mobile_token->token);
            $response = $user->toArray();
            $response['redirect'] = route('auth.verifyForm', $user->mobile_token->token);
            return $response;
        }
    }

    public function verifyForm(Request $request, $verify){
        if(auth()->check()) return redirect()->route('dashboard');
        $this->data->verify = $verify;
        return $this->view($request, 'auth.SMScode');
    }

    public function verify(Request $request, $verify){
        $user = User::apiPost("auth/$verify", $request->all());
        $request->session()->put('user', $user);
        return $user->response([
            'redirect' => $user->type == 'user' ? route('home') : route('dashboard'),
            'direct' => true
        ]);
    }

    public function logout(Request $request){
        User::apiPost('logout');
        $request->session()->remove('user');
        return [
            'redirect' => route('home'),
            'direct' => true
        ];
    }

    public function profile(Request $request){
        $this->data->layouts->theme = 'client.theme';
        return $this->view($request, 'client.profile.index');
    }

    public function meUpdate(Request $request){
        $token = auth()->user()->response->token;
        $user = User::apiPut('me', $request->all());
        $user->response->token = $token;
        $request->session()->put('user', $user);
    }
}
