<?php

namespace App\Models;

use Illuminate\Support\Facades\Cache;

class Category extends API
{
    protected $with = [
        'parents' => Category::class,
        'subs' => Category::class,
    ];

    public static function apiCache(){
        $category = Cache::get('categories', null);
        if(!$category){
            $get = Category::apiGet('categories', ['pack' => 1]);
            $category = Category::hydrate($get);
            Cache::put('categories', $category, 60 * 5);
        }
        return $category;
    }
}
