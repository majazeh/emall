<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class User extends API
{
    public function cartCache($cart){
        Cache::put('User-cart'. auth()->user()->id, $cart, 60 * 3);
    }
}
