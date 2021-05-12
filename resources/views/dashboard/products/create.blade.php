@extends($layouts->theme)
@section('content')
<div>
    <h2 class="font-bold mb-4 text-gray-800 cursor-default">Add product{{--  @lang($product->id ? 'Edit product' : 'Add product') --}}</h2>
</div>

<form class="m-auto w-full md:w-1/2" action="{{-- {{ $product->id ? route('dashboard.products.update', $product->id) : route('dashboard.products.store') }} --}}" method="POST">
    {{-- @csrf --}}
    <div class="border border-gray-200 rounded p-4 mt-8">
        <div>
            <label for="title" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">العنوان</label>
            <input type="text" name="title" id="title" {{-- value="{{ $product->title }}" --}} class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="brand" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">علامة تجاریة</label>
            <input type="text" name="brand" id="brand" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="category" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">القسم</label>
            <input type="text" name="category" id="category" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="country" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">الدولة</label>
            <select name="country" id="country" class="border border-gray-400 focus:border-gray-400 h-10 rounded pl-4 pr-8 w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" placeholder="&nbsp;">
                <option value="1">ایران</option>
                <option value="2">عراق</option>
            </select>
        </div>

        <div class="mt-4">
            <label for="purchasing-price" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">سعر الشراء</label>
            <input type="number" name="purchasing-price" id="purchasing-price" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="shelf-price" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">سعر الرف</label>
            <input type="number" name="shelf-price" id="shelf-price" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="emall-price" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">سعر ایمول</label>
            <input type="number" name="emall-price" id="emall-price" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="quota" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">الحجم</label>
            <input type="number" name="quota" id="quota" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="unit-type" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">نوع الوحدة</label>
            <select name="unit-type" id="unit-type" class="border border-gray-400 focus:border-gray-400 h-10 rounded pl-4 pr-8 w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" placeholder="&nbsp;">
                <option value="1">غرام</option>
                <option value="2">لتر</option>
            </select>
        </div>

        <div class="mt-4">
            <label for="unit" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">الوحدة</label>
            <input type="number" name="unit" id="unit" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="barcode" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">الرمز الشريطي</label>
            <input type="text" name="barcode" id="barcode" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <h3 class="block mb-4 text-gray-700 font-bold cursor-default">الحالة</h3>
            <div>
                <label class="inline-flex items-center group">
                    <input type="radio" id="enable" name="status" value="enable" class="text-brand w-3.5 h-3.5 border border-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-brand">
                    <span class="text-sm text-gray-600 ms-2 group-hover:text-brand-600">ممكن</span>
                </label>
            </div>
            <div class="mt-2">
                <label class="inline-flex items-center group">
                    <input type="radio" id="disable" name="status" value="disable" class="text-brand w-3.5 h-3.5 border border-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-brand">
                    <span class="text-sm text-gray-600 ms-2 group-hover:text-brand-600">إبطال</span>
                </label>
            </div>
        </div>

        <div class="mt-4">
            <label for="image" class="block mb-4 text-sm text-gray-700 font-bold cursor-default">صورة</label>
            <div class="h-12 w-12 rounded-full overflow-hidden bg-gray-100 mb-2">
                <img class="h-full w-full text-gray-300" src="https://emall.market/storage/products/d379348ee2382fe6b1f38c46abbf3fc4-500.jpg" alt="">
            </div>
            <input type="file" name="image" id="image">
        </div>
    </div>

    <div class="mt-6">
        <button type="submit" class="inline-flex justify-center items-center h-9 px-8 bg-brand text-white text-sm rounded-full hover:bg-brand-600 transition me-4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" {{-- title=" {{ $product->id ? 'Edit' : 'Create' }}" aria-label="{{ $product->id ? 'Edit' : 'Create' }}" --}} role="button">
            {{-- {{ $product->id ? 'Edit' : 'Create' }} --}} Create
        </button>
        <a href="{{ route('dashboard.products.index') }}" class="text-sm text-gray-500 hover:text-gray-700 transition" title="إلغاء" aria-label="إلغاء">إلغاء</a>
    </div>
</form>
@endsection
