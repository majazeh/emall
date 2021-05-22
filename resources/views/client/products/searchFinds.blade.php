<div data-xhr="finds">
    @isset($products)
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4">
            @include('client.products.items')
        </div>
        <div class="mb-16">
            {{ $products->links() }}
        </div>
    @endisset
</div>
