<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller as Main;

class Controller extends Main
{
    public function __construct()
    {
        parent::__construct();
        $this->data->layouts->theme = 'dashboard.theme';

    }
}
