<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller as Main;
use Illuminate\Http\Request;

class Controller extends Main
{
    public function __construct()
    {
        parent::__construct();
        $this->data->layouts->theme = 'client.theme';

    }
}
