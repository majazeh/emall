<?php

namespace App\Models;


class Product extends API
{
    protected $with = [
        'category' => Category::class,
        'brand' => Brand::class
    ];

    public function countries(){
        return Country::all();
    }
}
