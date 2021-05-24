<div data-xhr="cart-item-panel-{{ $product->id }}" class="hidden">
</div>
@include('client.cart.detail')

@include('client.cart.price', ['cart' => $cart])
