<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function update(User $user, User $model){
        if($model->type == 'supervisor') return false;
        if($model->type == 'admin' && $user->type != 'supervisor') return false;
        return true;
    }
}
