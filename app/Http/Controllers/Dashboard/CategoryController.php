<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request){
        $this->data->global->title = __('Categories');
        $this->data->categories = $categories = Category::apiGet('categories', $request->all());
        if($request->ajax() && $request->header('data-xhr-base') == 'select2'){
            return $categories;
        }
        return $this->view($request, 'dashboard.categories.index');
    }

    public function create(Request $request){
        $this->data->category = new Category();
        return $this->view($request, 'dashboard.categories.create');
    }

    public function edit(Request $request, $category){
        $this->data->category = $category = Category::apiGet("categories/$category", $request->all());
        return $this->view($request, 'dashboard.categories.create');
    }

    public function update(Request $request, $category){
        $this->data->category = $category = Category::apiPost("categories/$category", $request->all());
        return $this->view($request, 'dashboard.categories.create');
    }

    public function store(Request $request){
        $this->data->category = $category = Category::apiPost("categories", $request->all());
        return $this->view($request, 'dashboard.categories.create');
    }
}
