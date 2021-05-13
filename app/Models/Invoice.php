<?php

namespace App\Models;

class Invoice extends API
{
    protected $with = [
        'user' => User::class,
        'items' => InvoiceItem::class
    ];
}
