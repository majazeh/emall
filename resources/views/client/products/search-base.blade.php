<div data-xhr="finds">
    @if (isset($products) && $products->count())
        @include('client.products.searchFinds')
    @elseif(auth()->check() && request()->q)
        @include('client.products.searchNoResult')
    @endif
</div>
