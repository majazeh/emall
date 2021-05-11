<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index(Request $request){
        $this->data->global->title = __('Brands');
        $this->data->brands = $brands = Brand::apiGet('brands', $request->all());
        return $this->view($request, 'dashboard.brands.index');
    }

    public function create(Request $request){
        $this->data->brand = new Brand();
        return $this->view($request, 'dashboard.brands.create');
    }

    public function edit(Request $request, $brand){
        $this->data->brand = $brand = Brand::apiGet("brands/$brand", $request->all());
        return $this->view($request, 'dashboard.brands.create');
    }

    public function update(Request $request, $brand){
        $this->data->brand = $brand = Brand::apiPost("brands/$brand", $request->all());
        return $this->view($request, 'dashboard.brands.create');
    }

    public function store(Request $request){
        $this->data->brand = $brand = Brand::apiPost("brands", $request->all());
        return $this->view($request, 'dashboard.brands.create');
    }
}
