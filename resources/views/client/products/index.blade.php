@extends($layouts->theme)
@section('main')
@include('client.products.items')
<div class="mb-20">
    {{ $products->links() }}
</div>
@endsection
