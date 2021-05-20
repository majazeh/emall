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
        $result->products = Product::fakeModel($body->products);
        $result->brands = Brand::fakeModel($body->brands);
        return $result;
    }
}
