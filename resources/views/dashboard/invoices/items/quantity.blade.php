<div class="flex items-center cursor-default" data-xhr="items-{{ $item->id }}-quantity">
    <span class="text-sm text-gray-600">
        @can('updateDetail', $invoice)
            <input type="number" value="{{ $item->quantity }}" name="quantity" data-Lijax="change 500" data-method="PUT" data-action="{{ route('dashboard.invoice-items.update', $item->id) }}">
        @else
        {{ $item->quantity }}
        @endcan
    </span>
</div>
