@extends($layouts->theme)
@section('main')
<div class="p-4 pb-16">
    <form class="mb-4 search">
        <input class="border border-gray-300 h-10 px-2 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand lijax" id="global_search" name="q" placeholder="@lang('Search')" data-state='true' data-lijax='300 change' data-method='get' aria-label="@lang('Search')" data-xhrBase="search">
    </form>
    @include('client.products.search-base')
</div>
@endsection
