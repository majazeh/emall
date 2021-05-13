<div class="items-center cursor-default" data-xhr="items-{{ $item->id }}-emall_price">
    <div class="text-sm font-bold text-gray-600">{{ number_format($item->sum_emall_price) }}</div>
    <div class="text-xs text-gray-600">{{ number_format($item->emall_price) }}</div>
</div>
