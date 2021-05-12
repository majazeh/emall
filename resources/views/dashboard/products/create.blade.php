@extends($layouts->theme)
@section('content')
<div>
    <h2 class="font-bold mb-4 text-gray-800 cursor-default">@lang($product->id ? 'Edit product' : 'Add product')</h2>
</div>

<form class="m-auto w-full md:w-1/2" action="{{ $product->id ? route('dashboard.products.update', $product->id) : route('dashboard.products.store') }}" method="POST">
    @csrf
    <div class="border border-gray-200 rounded p-4 mt-8">
        <div>
            <input type="text" name="title" id="title" value="{{ $product->title }}" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="category" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">القسم</label>
            <select name="category_id" id="category_id" class="select2-select" data-url="{{ route('dashboard.categories.index') }}">
                @if ($product->category)
                    <option value="{{ $product->category->id }}">{{ $product->category->title }}</option>
                @endif
            </select>
        </div>

        <div class="mt-4">
            <label for="brand_id" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">علامة تجاریة</label>
            <select name="brand_id" id="brand_id" class="select2-select" data-url="{{ route('dashboard.brands.index') }}">
                @if ($product->brand)
                    <option value="{{ $product->brand->id }}">{{ $product->brand->title }}</option>
                @endif
            </select>
        </div>

        <div class="mt-4">
            <label for="buy_price" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">سعر الشراء</label>
            <input type="number" name="buy_price" id="buy_price" value="{{ $product->buy_price }}" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="market_price" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">سعر الرف</label>
            <input type="number" name="market_price" id="market_price" value="{{ $product->market_price }}"  class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="emall_price" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">سعر ایمول</label>
            <input type="number" name="emall_price" id="emall_price"  value="{{ $product->emall_price }}" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="unit_type" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">نوع الوحدة</label>
            <select name="unit_type" id="unit_type" class="border border-gray-400 focus:border-gray-400 h-10 rounded pl-4 pr-8 w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" placeholder="&nbsp;">
                @foreach (['liter','milliliter','gram','milligram','kilogram','meter','centimeter','mesghaal','number','other'] as $type)
                    <option value="{{ $type }}" {{ $product->unit_type == $type ? 'selected' : '' }}>@lang($type)</option>
                @endforeach
            </select>
        </div>

        <div class="mt-4">
            <label for="unit" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">الوحدة</label>
            <input type="number" name="unit" id="unit"  value="{{ $product->unit }}" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="status" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">@lang('status')</label>
            <select name="status" id="status" class="border border-gray-400 focus:border-gray-400 h-10 rounded pl-4 pr-8 w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" placeholder="&nbsp;">
                @foreach (['enable','disable','not_available'] as $status)
                    <option value="{{ $status }}" {{ $product->status == $status ? 'selected' : '' }}>@lang($status)</option>
                @endforeach
            </select>
        </div>

        <div class="mt-4">
            <label for="quota" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">الحجم</label>
            <input type="number" name="quota" id="quota"  value="{{ $product->quota }}" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>
        <div class="mt-4">
            <label for="inventory" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">@lang('inventory')</label>
            <input type="number" name="inventory" id="inventory"  value="{{ $product->inventory }}" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="barcode" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">الرمز الشريطي</label>
            <input type="text" name="barcode" id="barcode"  value="{{ $product->barcode }}" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>
        <div class="mt-4">
            <label for="country" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">الدولة</label>
            <select name="country" id="country" class="select2-select border border-gray-400 focus:border-gray-400 h-10 rounded pl-4 pr-8 w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" placeholder="&nbsp;">
                @foreach ($product->countries() as $id => $title)
                    <option value="{{ $id }}" {{ $product->country && strtoupper($product->country->id) == $id ? 'selected' : '' }}>{{ $title }}</option>
                @endforeach
            </select>
        </div>

        <div class="mt-4">
            <label for="description" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">@lang('description')</label>
            <textarea name="description" id="description" rows="10">{{ $product->description }}</textarea>
        </div>

        <div class="mt-4">
            <label for="tags" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">@lang('tags')</label>
            <textarea name="tags" id="tags" rows="10">{{ $product->tags }}</textarea>
        </div>

        <div class="mt-4">
            <label for="image" class="block mb-4 text-sm text-gray-700 font-bold cursor-default">صورة</label>
            @if ($product->image_url)
                <div class="h-12 w-12 rounded-full overflow-hidden bg-gray-100 mb-2">
                    <img class="h-full w-full text-gray-300" src="{{ $product->image_url->small }}" alt="">
                </div>
            @endif
            <input type="file" name="image" id="image">
        </div>
    </div>

    <div class="mt-6">
        <button type="submit" class="inline-flex justify-center items-center h-9 px-8 bg-brand text-white text-sm rounded-full hover:bg-brand-600 transition me-4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" title=" {{ $product->id ? 'Edit' : 'Create' }}" aria-label="{{ $product->id ? 'Edit' : 'Create' }}" role="button">
            {{ $product->id ? 'Edit' : 'Create' }}
        </button>
        <a href="{{ route('dashboard.products.index') }}" class="text-sm text-gray-500 hover:text-gray-700 transition" title="إلغاء" aria-label="إلغاء">إلغاء</a>
    </div>
</form>
@endsection
