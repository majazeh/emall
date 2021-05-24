<div data-xhr="cart-price">
    @if (auth()->check())
        @if ($cart->price)
            <div class="truncate text-xs mt-1 text-brand">{{ number_format($cart->price) }}</div>
        @else
            <div class="truncate text-xs mt-1">@lang('My basket')</div>
        @endif
    @endif
</div>
