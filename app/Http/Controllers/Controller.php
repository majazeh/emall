<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use stdClass;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $data;
    public function __construct()
    {
        $this->data = new stdClass();
        $this->data->global = new stdClass();

        $this->data->global->title = 'Emall';
    }

    public function view(Request $request, String $view, array $data = []){
        $this->data->global->page = $request->route()->getAction('as');
        return view($view, (array) $this->data, $data);
    }
}
