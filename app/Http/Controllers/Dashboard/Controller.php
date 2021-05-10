<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller as Main;
use Illuminate\Http\Request;

class Controller extends Main
{
    public function __construct()
    {
        parent::__construct();
        $this->data->layouts->theme = 'dashboard.theme';

    }

        public function dashboard(Request $request){
            return $this->view($request, 'dashboard.home.index');
        }
}
