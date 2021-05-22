@extends($layouts->theme)
@section('main')
    <section class="my-4 px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4">
            @foreach ($cart->items ?: [] as $item)
                <div class="relative" data-xhr="cart-item-panel-{{ $item->product->id }}">
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
                    @include('client.cart.removeItem')
                </div>
            @endforeach
        </div>
    </section>
    @include('client.cart.detail')
@endsection
