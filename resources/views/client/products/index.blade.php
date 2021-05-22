@extends($layouts->theme)
@section('main')
<section class="p-4 pb-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4">
        @include('client.products.items')
    </div>
    <div class="mb-16">
        {{ $products->links() }}
    </div>
</div>
@endsection
