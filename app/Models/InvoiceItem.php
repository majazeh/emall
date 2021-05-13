<?php

namespace App\Models;

class InvoiceItem extends API
{
    protected $with = [
        'product' => Product::class,
        'invoice' => Invoice::class
    ];
}
