<?php

namespace App\Models;

use stdClass;

class Intro extends API
{

    public static function fakeModel(object $body){
        $result = new stdClass;
        $result->categories = Category::hydrate($body->categories->data);
        if(isset($body->auth)){
            $result->auth = new User((array) $body->auth);
        }
        if(isset($body->cart)){
            $result->cart = new Invoice((array) $body->cart->data);
        }
        $result->products = Product::fakeModel($body->products);
        $result->brands = Brand::fakeModel($body->brands);
        return $result;
    }
}
