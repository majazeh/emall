@extends($layouts->theme)
@section('content')
@include('dashboard.invoices.showHeader')
<div class="mt-4">
    @can('updateDetail', $invoice)
        <form action="{{ route('dashboard.invoice-items.store', $invoice->id) }}" method="POST">
            @csrf

            <select name="product_id" id="product_id" class="select2-select border border-gray-400 focus:border-gray-400 h-10 rounded pl-4 pr-8 w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" data-url="{{ route('dashboard.products.index') }}"></select>
            <input type="number" name="quantity" id="quantity">
            <button type="submit">
                @lang('Insert')
            </button>
    </form>
    @endcan
</div>
<div class="mt-4">
    <div class="overflow-x-auto">
        <div class="align-middle inline-block min-w-full">
            <div class="overflow-hidden border border-gray-200 rounded">
                <table class="min-w-full divide-y divide-gray-200 table-auto">
                    <thead class="bg-gray-50 cursor-default">
                        <tr>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">#</th>
                            <th class="relative px-3 py-2" scope="col">
                                <span class="sr-only">صورة</span>
                            </th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">العنوان</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">عدد المنتجات</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('buy_price')</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">سعر الرف</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">سعر ايمول</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">الخصم</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('price')</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        @foreach ($invoice->items as $item)
                            @include('dashboard.invoices.item')
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
