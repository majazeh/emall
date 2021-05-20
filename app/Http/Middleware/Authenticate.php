<?php

namespace App\Http\Middleware;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    protected function unauthenticated($request, array $guards)
    {
        if(!in_array('auth:relative', $request->route()->getAction('middleware'))){
            throw new AuthenticationException(
                'Unauthenticated.', $guards, $this->redirectTo($request)
            );
        }
    }
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('auth.form');
        }
    }
}
