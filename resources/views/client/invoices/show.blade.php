@extends($layouts->theme)
@section('main')
<section class="my-4 px-4">
    <div class="flex border border-gray-300 rounded overflow-hidden h-24 mb-4">
        @foreach ($invoice->items as $item)
        @isset($item->product->image_url)
            <a href="{{ route('products.show', $item->product->id) }}" class="w-24 h-24 flex-shrink-0">
                <img src="{{ $item->product->image_url->medium }}" alt="ماكنة حلاقة شفرتين" width="96" height="96">
            </a>
        @endisset
            <div class="flex-1 flex flex-col justify-center px-2 cursor-default">
                <a href="#" class="text-sm font-bold">ماكنة حلاقة شفرتين</a>
                <div class="flex items-baseline mt-2">
                    <div class="flex items-baseline text-sm text-green-700 font-bold">
                        <span>{{ number_format($item->emall_price) }}</span>
                        <span class="ms-1">دینار</span>
                    </div>
                    <div class="flex items-baseline text-xs text-gray-500 line-through ms-2">
                        <span>{{ number_format($item->market_price) }}</span>
                        <span>دینار</span>
                    </div>
                </div>
                <div class="flex items-center mt-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span class="text-sm font-bold mx-2">{{ $item->quantity }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                    </svg>
                    <span class="text-sm font-bold ms-2">{{ number_format($item->price) }} دینار</span>
                </div>
            </div>
        @endforeach
    </div>
</section>
<section class="px-4 pb-14">
    <div class="border border-gray-300 cursor-default">
        <div class="flex justify-between items-center p-2 border-b border-gray-300">
            <div class="text-sm text-gray-700">الاجمالی</div>
            <div>
                <span>{{ number_format($invoice->market_price) }}</span>
                <span>دینار</span>
            </div>
        </div>
        <div class="flex justify-between items-center p-2 border-b border-gray-300">
            <div class="text-sm text-gray-700">عدد المنتجات</div>
            <div>
                <span>11</span>
            </div>
        </div>
        <div class="flex justify-between items-center p-2 border-b border-gray-300">
            <div class="text-sm text-gray-700">مقدار الخصم</div>
            <div>
                <span>{{ number_format($invoice->market_price - $invoice->emall_price + $invoice->discount ) }}</span>
                <span>دینار</span>
            </div>
        </div>
        <div class="flex justify-between items-center p-2 border-b border-gray-300">
            <div class="text-sm text-gray-700">مبلغ التوصیل</div>
            <div>
                <span>مجانا</span>
            </div>
        </div>
        <div class="flex justify-between items-center p-2 bg-gray-200">
            <div class="text-sm text-gray-700">المبلغ الکلي</div>
            <div>
                <span>{{ number_format($invoice->price) }}</span>
                <span>دینار</span>
            </div>
        </div>
    </div>
</section>
@endsection
