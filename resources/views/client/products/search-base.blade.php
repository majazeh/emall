<div data-xhr="finds">
    @if (isset($products) && $products->count())
        @include('client.products.searchFinds')
    @else
        @include('client.products.searchNoResult')
    @endif
</div>
