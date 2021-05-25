@extends($layouts->theme)
@section('main')
<div class="mt-12 px-4">
    <img class="w-64 mx-auto" src="{{ asset('images/profile.svg') }}" alt="@lang('Profile')">
</div>
<form class="w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 mx-auto px-4 mt-16" action="#" method="POST">
    <div class="border border-gray-200 rounded p-4 mt-8">
        <div>
            <label for="phone" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">@lang('Phone')</label>
            <input type="text" name="phone" id="phone" placeholder="+{{ auth()->user()->mobile }}" disabled class="w-full h-10 dir-ltr px-4 border placeholder-gray-400 border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition cursor-not-allowed">
        </div>
        <div class="mt-4">
            <label for="name" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">@lang('Name')</label>
            <input type="text" name="name" id="name" value="{{ auth()->user()->name }}" class="w-full h-10 px-4 text-gray-600 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>
    </div>
    <div class="mt-6">
        <button type="submit" class="inline-flex justify-center items-center h-9 px-8 bg-brand text-white text-sm rounded-full hover:bg-brand-600 transition me-4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" title="@lang('Edit')" aria-label="@lang('Edit')" role="button">
            @lang('Edit')
        </button>
        <a href="{{ route('home') }}" class="text-sm text-gray-500 hover:text-gray-700 transition" title="@lang('Cancel')" aria-label="@lang('Cancel')">@lang('Cancel')</a>
    </div>
</form>
@endsection
