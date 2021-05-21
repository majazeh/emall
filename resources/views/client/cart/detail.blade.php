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
    <button class="flex items-center justify-center text-sm text-center text-white h-10 w-full bg-brand rounded-full mt-2 mb-8" data-cart-close="" type="submit" href="https://emall.market/cart/close?I966666X">تاکید الطلب</button>
</section>
