@extends($layouts->theme)
@section('main')
<form action="{{ route('cart.request') }}" method="POST">
    @csrf
    <section>
        <input type="hidden" name="location" id="location" value="" data-lat="{{ $cart->location[0] }}" data-lng="{{ $cart->location[1] }}" data-for="map">
        <div id="map" class="w-full h-96" data-map></div>
    </section>
    <div class="w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 mx-auto px-4 mt-4 pb-14">
            <label for="address" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">العنوان:</label>
            <textarea name="address" id="address" row="2" class="resize-none w-full border border-gray-400 focus:border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand">{{ $cart->address }}</textarea>
        <button class="flex items-center justify-center text-sm text-center text-white h-10 w-full bg-brand rounded-full mt-2 mb-8" data-cart-close="" type="submit" href="https://emall.market/cart/close?I966666X">تاکید العنوان</button>
    </div>
</form>
@endsection
