<div data-xhr="finds">
    @if (isset($products) && $products->count())
        @include('client.products.searchFinds')
    @elseif(auth()->check())
        @include('client.products.searchNoResult')
    @endif
</div>
