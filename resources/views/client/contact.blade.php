@extends($layouts->theme)
@section('main')
<div class="mt-12 px-4">
    <img class="w-64 mx-auto" src="{{ asset('images/support.svg') }}" alt="@lang('Contact us')">
</div>
<div class="w-full sm:w-2/3 lg:w-3/4 2xl:w-4/5 mx-auto px-4 mt-12 pb-24">
    <h2 class="text-lg text-brand font-bold mb-8 text-center">@lang('Contact us')</h2>
    <div class="w-full sm:w-2/3 lg:w-1/2 2xl:w-1/3 mx-auto">
        <a href="tel:00000000000" class="flex items-center border border-brand text-brand hover:bg-brand hover:text-white transition h-12 px-4 w-full rounded dir-ltr mb-4 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-brand">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="text-lg ms-6">96 9876 543 2222</span>
        </a>
        <a href="tel:00000000000" class="flex items-center border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition h-12 px-4 w-full rounded dir-ltr focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <span class="leading-none ms-6">@lang('Send us message via Facebook')</span>
        </a>
    </div>
</div>
@endsection
