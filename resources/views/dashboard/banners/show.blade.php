@extends($layouts->theme)
@section('content')
<div>
    <h2 class="font-bold mb-4 text-gray-800 cursor-default">@lang('Banners')</h2>
</div>

<form class="m-auto w-full md:w-1/2" action="{{ route('dashboard.banners.store') }}" method="POST">
    @csrf
    <div class="border border-gray-200 rounded p-4 mt-8">
        @for ($i = 0; $i < 3; $i++)
            <div class="mt-4 pt-4 border-t border-gray-200">
                <label for="banner{{ $i+1 }}" class="block mb-4 text-sm text-gray-700 font-bold cursor-default">لافتة {{ $i+1 }}</label>
                @isset($banners[$i]->image)
                    <div class="h-32 w-full rounded overflow-hidden mb-4">
                        <img class="h-full w-full" src="{{ $banners[$i]->image }}" alt="">
                    </div>
                @endisset
                <input type="file" name="banner{{ $i+1 }}" id="banner{{ $i+1 }}">
                <label>
                    @lang('delete') : <input type="checkbox" name="delete{{ $i+1 }}">
                </label>
                <input type="url" name="url{{ $i+1 }}" value="{{ isset($banners[$i]->url) ? $banners[$i]->url : '' }}" placeholder="@lang('Enter your link')" class="w-full h-10 px-4 rounded text-sm text-left ltr placeholder-gray-400 border border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition mt-4">
            </div>
        @endfor
    </div>

    <div class="mt-6">
        <button type="submit" class="inline-flex justify-center items-center h-9 px-8 bg-brand text-white text-sm rounded-full hover:bg-brand-600 transition me-4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" title="@lang('Submit')" aria-label="@lang('Submit')" role="button">
            @lang('Submit')
        </button>
        <a href="{{ route('dashboard') }}" class="text-sm text-gray-500 hover:text-gray-700 transition" title="@lang('Cancel')" aria-label="@lang('Cancel')">@lang('Cancel')</a>
    </div>
</form>
@endsection
