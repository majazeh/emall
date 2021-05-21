<div data-xhr="finds">
    @isset($products)
        @include('client.products.items')
        <div class="mb-20">
            {{ $products->links() }}
        </div>
    @endisset
</div>
