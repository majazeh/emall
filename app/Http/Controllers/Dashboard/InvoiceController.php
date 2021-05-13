<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Invoice;
use App\Models\InvoiceItem;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index(Request $request){
        $this->data->global->title = __('Invoices');
        $this->data->invoices = $invoices = Invoice::apiGet('invoices', $request->all());
        return $this->view($request, 'dashboard.invoices.index');
    }

    public function show(Request $request, $invoice){
        $this->data->invoice = $invoice = Invoice::apiGet("invoices/$invoice", $request->all());
        return $this->view($request, 'dashboard.invoices.show');
    }

    public function update(Request $request, $invoice){
        $this->data->invoice = $invoice = Invoice::apiPut("invoices/$invoice", $request->all());
        return $this->show($request, $invoice->id);
    }

    public function updateItem(Request $request, $item){
        $this->data->item = $item = InvoiceItem::apiPut("invoice-items/$item", $request->all());
        $this->data->invoice = $item->invoice;
        return $this->view($request, 'dashboard.invoices.itemShow');
    }
    public function storeItem(Request $request, $invoice){
        InvoiceItem::apiPost("invoice-items/$invoice", $request->all());
        return $this->show($request, $invoice);

    }
}
