<div data-xhr="cart-item-{{ $product->id }}">
    <div data-cart="{{ $product->id }}" data-quantity="{{ isset($product->cart->quantity) ? $product->cart->quantity : 0 }}">
        @if ($product->cart)
        <div class="flex justify-between items-center">
            <a href="{{ route('cart.items.store', $product->id) }}" class="direct flex justify-center items-center h-8 w-8 bg-brand text-white rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-brand" data-action="plus">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </a>
            <span class="text-sm font-bold mx-2" data-quantityLog>{{ $product->cart->quantity }}</span>
            <a href="{{ route('cart.items.store', $product->id) }}" class="direct flex justify-center items-center h-8 w-8 text-gray-600 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-600" data-action="minus">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                </svg>
            </a>
        </div>
        @else
            <a href="{{ auth()->check() ? route('cart.items.store', $product->id) : '/auth' }}" class="{{ auth()->check() ? 'lijax' : 'direct' }} flex items-center justify-center text-sm text-center text-white h-10 w-full bg-brand rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-brand" {!! auth()->check() ? 'data-name="quantity" data-value="1" data-method="POST"' : '' !!}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span class="ms-2">شراء</span>
            </a>
        @endif
</div>
</div>
