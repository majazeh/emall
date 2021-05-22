<section class="px-4 pb-14" data-xhr="cartDetail">
    <div class="border border-gray-300 cursor-default">
        <div class="flex justify-between items-center p-2 border-b border-gray-300">
            <div class="text-sm text-gray-700">مبلغ الفاتوره</div>
            <div>
                <span>{{ number_format($cart->market_price) }}</span>
                <span>دینار</span>
            </div>
        </div>
        <div class="flex justify-between items-center p-2 border-b border-gray-300">
            <div class="text-sm text-gray-700">مقدار الخصم</div>
            <div>
                <span>{{ number_format($cart->market_price - $cart->emall_price + $cart->discount) }}</span>
            </div>
        </div>
        <div class="flex justify-between items-center p-2 border-b border-gray-300">
            <div class="text-sm text-gray-700">تکلفه التوصیل</div>
            <div>
                <span>مجانا</span>
            </div>
        </div>
        <div class="flex justify-between items-center p-2 bg-gray-200 font-bold">
            <div class="text-sm text-gray-700">المبلغ النهائی</div>
            <div>
                <span>{{ number_format($cart->price) }}</span>
                <span>دینار</span>
            </div>
        </div>
    </div>
    <div class="w-full sm:w-1/2 2xl:w-1/4 mx-auto mt-4">
        <div class="mb-4">
            <label class="block mb-2 text-sm text-gray-700 font-bold cursor-default">حدد العنوان</label>
            <input type="hidden" name="location" id="location" value="" data-lat="{{  $cart->location[0]}}" data-lng="{{  $cart->location[1]}}" data-for="map">
            <div id="map" class="w-full h-72" data-map></div>
        </div>

        @isset($cart->address)
            <div class="cursor-default mb-4">
                <label class="text-sm text-gray-700 font-bold">العنوان:</label>
                <span class="text-sm text-gray-500">{{ $cart->address }}</span>
            </div>
        @endisset

        @if ($cart->status == 'draft')
            <div>
                <label for="address" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">العنوان:</label>
                <textarea name="address" id="address" row="2" class="resize-none w-full border border-gray-400 focus:border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand"></textarea>
            </div>
            <button type="submit" class="flex items-center justify-center text-sm text-center text-white h-10 w-full bg-brand rounded-full mt-2 mb-8" data-cart-close="" type="submit" >تاکید الطلب</button>
        @endif
    </div>
</section>
