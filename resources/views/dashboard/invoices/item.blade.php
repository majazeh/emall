<tr class="bg-gray-50">
    <td class="px-3 py-2 whitespace-nowrap">
        <div class="flex items-center cursor-default">
            <span class="text-sm text-gray-600">{{ isset($loop->index) ? $loop->index + 1 : '-' }}</span>
        </div>
    </td>
    <td class="px-3 py-2 whitespace-nowrap">
        @if ($item->product->image_url)
            <div class="flex items-center">
                <img class="h-10 w-10 rounded border border-gray-100" src="{{ $item->product->image_url->small }}" alt="" title="">
            </div>
        @endif
    </td>
    <td class="px-3 py-2 whitespace-nowrap">
        <div class="items-center cursor-default">
            <div class="text-sm font-bold text-gray-600">{{ $item->product->title }}</div>
            <div class="text-xs text-gray-600">{{ $item->product->unit }} @lang($item->product->unit_type)</div>
        </div>
    </td>
    <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
        @include('dashboard.invoices.items.quantity')
    </td>
    <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
        @include('dashboard.invoices.items.buy_price')

    </td>
    <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
        @include('dashboard.invoices.items.market_price')
    </td>
    <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
        @include('dashboard.invoices.items.emall_price')
    </td>
    <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
        @include('dashboard.invoices.items.discount')
    </td>
    <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
        @include('dashboard.invoices.items.price')
    </td>
</tr>
