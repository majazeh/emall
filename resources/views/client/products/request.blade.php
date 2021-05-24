@extends($layouts->theme)
@section('main')
<div class="mt-12 px-4">
    <img class="w-48 mx-auto" src="{{ asset('images/request.svg') }}" alt="ایمول">
</div>
@include('client.products.requestForm')
@endsection
