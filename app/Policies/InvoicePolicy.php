<?php

namespace App\Policies;

use App\Models\Invoice;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class InvoicePolicy
{
    use HandlesAuthorization;

    public function updateDetail(User $user, Invoice $invoice){
        return $invoice->status == 'accepted';
    }
}
