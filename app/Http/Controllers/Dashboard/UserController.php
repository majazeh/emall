<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request){
        $this->data->global->title = __('Users');
        $this->data->users = $users = User::apiGet('users', $request->all());
        $users->setPath(route('dashboard.users.index'))->links();

        return $this->view($request, 'dashboard.users.index');
    }

    public function create(Request $request){
        $this->data->global->title = __('Create new users');
        return $this->view($request, 'dashboard.users.create');
    }

    public function show(Request $request, $user){

    }

    public function edit(Request $request, $user){
        $this->data->user = User::apiGet("users/$user", $request->all());
        $this->authorize('update', $this->data->user);
        return $this->view($request, 'dashboard.users.create');
    }

    public function update(Request $request, $user){
        $this->data->user = User::apiPut("users/$user", $request->all());
        return $this->data->user->response([
            'redirect' => route('dashboard.users.edit', $user),
            'replace' => true
        ]);
    }
}
