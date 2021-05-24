<div data-xhr="main">
    @yield('main')
</div>
@isset($cart)
    @include('client.cart.price', ['cart' => $cart])
@endisset
