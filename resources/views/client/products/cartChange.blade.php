@include('client.products.cart')
@include('client.cart.detail')
@include('client.cart.price', ['cart' => $cart])
