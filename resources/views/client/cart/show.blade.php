@extends($layouts->theme)
@section('main')
<form action="{{ route('cart.request') }}" method="POST">
    @csrf
    <section class="my-4 px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4">
            @foreach ($cart->items ?: [] as $item)
                <div class="relative">
                    <div class="flex border border-gray-200 rounded overflow-hidden h-28">
                        @if ($item->product->image_url)
                        <a href="{{ $item->product }}" class="relative flex-shrink-0 w-28 h-28 overflow-hidden">
                            <img src="{{ $item->product->image_url->medium }}" alt="{{ $item->product->title }}" width="128" height="128" class="w-full h-full">
                        </a>
                        @endif
                        <div class="flex-1 flex flex-col justify-between py-2 px-2 h-28">
                            <div>
                                <div class="flex">
                                    <a href="{{ $item->product }}" class="text-sm font-bold line-clamp-1">{{ $item->product->title }}</a>
                                </div>
                                <div class="flex items-center justify-between mt-2 cursor-default">
                                    <div class="text-sm text-green-700 font-bold">
                                        <span>{{ number_format($item->emall_price) }}</span>
                                        <span>دینار</span>
                                    </div>
                                    <div class="text-sm text-gray-500 ms-2">
                                        <span>{{ number_format($item->market_price) }}</span>
                                        <span>دینار</span>
                                    </div>
                                </div>
                            </div>
                            @include('client.products.cart', ['product' => $item->product])
                        </div>
                    </div>
                    <button class="absolute text-brand -end-2 -top-2 w-6 h-6 flex items-center justify-center rounded-full bg-white border border-brand">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            @endforeach
        </div>
    </section>
    @include('client.cart.detail')
</form>
@endsection
