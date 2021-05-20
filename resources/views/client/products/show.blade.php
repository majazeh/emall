@extends($layouts->theme)
@section('main')
<section class="w-full sm:w-2/3 md:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto pb-12">
    @isset($product->image_url)
        <img class="mx-auto" src="{{ $product->image_url->large }}" alt="{{ $product->title }}">
    @endisset
    <div class="relative mt-4 px-4">
        <a href="#" class="flex items-center">
            @isset($product->brand->image_url)
                <img class="w-6 h-6 rounded-full me-2" src="{{ $product->brand->image_url->small }}" alt="">
            @endisset
            <span>{{ $product->brand->title }}</span>
        </a>
        <h2 class="text-xl font-bold mt-2">{{ $product->title }}</h2>
        <div class="flex items-center mt-2 cursor-default">
            <div style="background-image: url('{{ asset('images/offer.svg') }}');" class="flex items-center justify-center w-7 h-7 text-white bg-no-repeat">
                <span class="text-xs">{{ number_format((($product->market_price - $product->emall_price) * 100) / $product->market_price) }}%</span>
            </div>
            <div class="flex items-center font-bold text-green-700 ms-2">
                <span>{{ number_format($product->emall_price) }}</span>
                <span class="ms-1">دینار</span>
            </div>
            <div class="flex items-center text-xs font-bold text-gray-500 ms-2">
                <div>
                    <span>{{ number_format($product->market_price) }}</span>
                    <span class="ms-1">دینار</span>
                </div>
            </div>
        </div>
        <div class="absolute top-0 end-4">
            <div class="flex justify-between items-center text-gray-500 leading-none cursor-default">
                <span class="text-xs">{{ $product->country->title }}</span>
                <span>.</span>
            </div>
            <div class="flex justify-between items-center text-gray-500 leading-none cursor-default mt-2">
                <span class="text-xs me-2">{{ $product->category->title }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                </svg>
            </div>
            <div class="flex justify-between items-center text-gray-500 leading-none cursor-default mt-2">
                <div class="text-xs me-2">
                    <span>{{ $product->unit }}</span>
                    <span>{{ $product->unit_type }}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            </div>
        </div>
    </div>
    <div class="mt-4 px-4">
        @include('client.products.cart')
    </div>
    <div class="mt-4 px-4 pb-4 text-gray-600 font-light leading-relaxed">
        <p>{{ nl2br($product->description) }}</p>
    </div>
</section>
@endsection
