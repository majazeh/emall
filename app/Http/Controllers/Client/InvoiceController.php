<?php

namespace App\Http\Controllers\Client;

use App\Models\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index(Request $request){
        $this->data->invoices = $invoices = Invoice::apiGet('invoices', $request->all());
        $this->data->global->title = __('invoices');
        $invoices->setPath(route('invoices.index'))->links();
        return $this->view($request, 'client.invoices.index');
    }

    public function show(Request $request, $invoice){
        $this->data->invoice = $invoice = Invoice::apiGet("invoices/$invoice", $request->all());
        return $this->view($request, 'client.invoices.show');
    }
}
