<div class="flex border border-gray-200 rounded overflow-hidden h-32">
    <a href="{{ route('products.show', $product->id) }}" class="relative flex-shrink-0 w-32 h-32 overflow-hidden">
        @isset($product->image_url)
            <img src="{{ $product->image_url->medium }}" alt="{{ $product->title }}" width="128" height="128" class="w-full h-full">
        @endisset
        <div style="background-image: url('{{ asset('images/offer.svg') }}');" class="absolute top-2 end-2 flex items-center justify-center w-7 h-7 text-white bg-no-repeat">
            <span class="text-xs">{{ number_format((($product->market_price - $product->emall_price) * 100) / $product->market_price) }}%</span>
        </div>
    </a>
    <div class="flex-1 flex flex-col justify-between py-2 px-2 h-32">
        <div>
            <div>
                <a href="{{ route('products.show', $product->id) }}" class="text-sm font-bold line-clamp-1">{{ $product->title }}</a>
            </div>
            <div class="flex justify-between items-center text-xs font-medium text-gray-500 mt-1">
                <a href="#" class="flex items-center">
                    <img class="w-4 h-4 rounded-full me-1" src="https://emall.market/storage/products/d379348ee2382fe6b1f38c46abbf3fc4-500.jpg" alt="">
                    <span>{{ $product->brand->title }}</span>
                </a>
                <div class="cursor-default">@lang(':unit :type', ['unit' => $product->unit, 'type' => __($product->unit_type)])</div>
            </div>
            <div class="flex items-center mt-1 cursor-default">
                <div class="text-sm text-green-700 font-bold">
                    <span>{{ number_format($product->emall_price) }}</span>
                    <span>دینار</span>
                </div>
                <div class="text-sm text-gray-500 line-through ms-2">
                    <span>{{ number_format($product->market_price) }}</span>
                    <span>دینار</span>
                </div>
            </div>
        </div>
        @include('client.products.cart')
    </div>
</div>
