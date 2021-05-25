<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function show(Request $request){
        $this->data->banners = Banner::apiGet('banners', $request->all());
        return $this->view($request, 'dashboard.banners.show');
    }

    public function store(Request $request){
        Banner::apiPost('banners', $request->all());
        return $this->show($request);
    }
}
