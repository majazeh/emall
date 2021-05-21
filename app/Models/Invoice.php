<?php

namespace App\Models;

class Invoice extends API
{
    protected $with = [
        'user' => User::class,
        'items' => InvoiceItem::class
    ];

    public function getLocationAttribute(){
        $location = explode(',', str_replace(' ', '', $this->attributes['location']));
        if(count($location) == 2){
            return [
                $location[0], $location[1]
            ];
        }else{
            return [
                '31.9947581','44.3109016'
            ];
        }
    }
}
