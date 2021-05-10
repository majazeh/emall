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
        $this->data->layouts = new stdClass();

        $this->data->layouts->theme = 'layouts.theme';

        $this->data->global->title = 'Emall';
    }

    public function view(Request $request, String $view, array $data = []){
        $this->data->global->page = str_replace('.', '-', $request->route()->getAction('as'));
        if($request->ajax()){
            if(view()->exists("$view-xhr")){
                $view = "$view-xhr" ;
            }elseif(view()->exists($this->data->layouts->theme . '-xhr')){
                $this->data->layouts->theme .= '-xhr';
            }
        }
        $view = response(view($view, (array) $this->data, $data));
        if($request->ajax()){
            $content = $view->getContent();
            $data = json_encode($this->data->global);
            $content = "$data\n$content";
            $view->setContent($content);
        }
        return $view;
    }
}
