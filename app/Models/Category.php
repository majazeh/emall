<?php

namespace App\Models;

class Category extends API
{
    protected $with = [
        'parents' => Category::class,
        'subs' => Category::class,
    ];
}
