<div data-xhr="invoice-header">
    <div class="flex items-center justify-between mb-4">
        <h2 class="font-bold text-gray-800 cursor-default">الفاتورة</h2>
        @if ($invoice->status !='fail' || $invoice->status != 'delivered')
            <div>
                <select name="status" data-Lijax="change" data-method="PUT" data-action="{{ route('dashboard.invoices.update', $invoice->id) }}" name="status" class="border border-gray-400 focus:border-gray-400 h-10 rounded pl-4 pr-8 w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand">
                    @if (!in_array($invoice->status, ['accepted', 'sent', 'delivered', 'rejected']))
                        <option>@lang($invoice->status)</option>
                    @endif
                    @foreach (['accepted', 'sent', 'delivered', 'rejected'] as $item)
                        <option value="{{ $item }}" {{ $invoice->status == $item ? 'selected' : '' }}>@lang($item)</option>
                    @endforeach
                </select>
            </div>
        @endif
    </div>

    <div>
        <div class="overflow-x-auto">
            <div class="align-middle inline-block min-w-full">
                <div class="overflow-hidden border border-gray-200 rounded">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50 cursor-default">
                            <tr>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">التسلسل</th>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">المشتري</th>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">الحالة</th>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">خريطة</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600 text-right dir-ltr">{{ $invoice->id }}</span>
                                    </div>
                                </td>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="items-center cursor-default">
                                        <div class="text-sm text-gray-600">{{ $invoice->user->name }}</div>
                                        <div class="text-sm text-gray-600">+{{ $invoice->user->mobile }}</div>
                                    </div>
                                </td>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">@lang($invoice->status)</span>
                                    </div>
                                </td>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="flex">
                                        <a href="#" title="map" aria-label="map">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                            </svg>
                                        </a>
                                        {{ $invoice->address }}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-4">
        <div class="overflow-x-auto">
            <div class="align-middle inline-block min-w-full">
                <div class="overflow-hidden border border-gray-200 rounded">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50 cursor-default">
                            <tr>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('Products')</th>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('Quantity')</th>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('buy_price')</th>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">سعر السوق</th>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">سعر ايمول</th>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('Items Discount')</th>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('Invoice Discount')</th>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('Discount')</th>
                                <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('Price')</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">{{ $invoice->products }}</span>
                                    </div>
                                </td>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">{{ $invoice->quantity }}</span>
                                    </div>
                                </td>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">{{ number_format($invoice->buy_price) }}</span>
                                    </div>
                                </td>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">{{ number_format($invoice->market_price) }}</span>
                                    </div>
                                </td>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">{{ number_format($invoice->emall_price) }}</span>
                                    </div>
                                </td>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">{{ number_format($invoice->items_discount) }}</span>
                                    </div>
                                </td>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">
                                            @can('updateDetail', $invoice)
                                                <input type="number" value="{{ $invoice->invoice_discount }}" id="invoice-discount" name="invoice_discount" data-Lijax="change 500" data-method="PUT" data-action="{{ route('dashboard.invoices.update', $invoice->id) }}">
                                            @else
                                                {{ number_format($invoice->invoice_discount) }}
                                            @endcan
                                        </span>
                                    </div>
                                </td>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">
                                            {{ number_format($invoice->discount) }}
                                        </span>
                                    </div>
                                </td>
                                <td class="px-3 py-4 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">{{ number_format($invoice->price) }}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
