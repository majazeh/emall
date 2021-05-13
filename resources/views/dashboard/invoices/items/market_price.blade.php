<div class="items-center cursor-default" data-xhr="items-{{ $item->id }}-market_price">
    <div class="text-sm font-bold text-gray-600">{{ number_format($item->sum_market_price) }}</div>
    <div class="text-xs text-gray-600">{{ number_format($item->market_price) }}</div>
</div>
