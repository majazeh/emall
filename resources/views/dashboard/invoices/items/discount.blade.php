<div class="flex items-center cursor-default" data-xhr="items-{{ $item->id }}-discount">
    <span class="text-sm text-gray-600">
        @can('updateDetail', $invoice)
            <input type="number" value="{{ $item->discount }}" value="{{ $item->discount }}" name="discount" data-Lijax="change 500" data-method="PUT" data-action="{{ route('dashboard.invoice-items.update', $item->id) }}">
        @else
        {{ number_format($item->discount) }}
        @endcan
    </span>
</div>
