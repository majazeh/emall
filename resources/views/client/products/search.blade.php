@extends($layouts->theme)
@section('main')
<div class="p-4">
    <form class="mb-4 search">
        <input class="border border-gray-300 h-10 px-2 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand lijax" id="global_search" name="q" placeholder="البحث" data-state='true' data-lijax='300 change' data-method='get' aria-label="Search" data-xhrBase="search">
    </form>
</div>
@include('client.products.searchFinds')
@endsection
