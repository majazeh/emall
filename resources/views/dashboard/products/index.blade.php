@extends($layouts->theme)
@section('content')
<div class="mb-4 flex items-center">
    <h2 class="font-bold text-gray-800 cursor-default">المنتجات</h2>
    {{-- <span class="text-sm text-gray-400 ms-2">({{ $products->count() }})</span> --}}
</div>

<div class="flex items-center mb-4">
    <div class="flex flex-1">
        <input type="search" id="search" placeholder="بحث" class="flex-1 text-sm placeholder-gray-400 border border-gray-200 rounded h-10 px-2 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 focus:ring-brand">
    </div>
    <a href="{{ route('dashboard.products.create') }}" class="flex items-center justify-center flex-shrink-0 w-10 sm:w-auto h-10 sm:px-4 text-sm text-brand border border-brand rounded-full hover:bg-brand-50 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 ring-brand ms-2" title="أضف منتج" aria-label="أضف منتج">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        <span class="hidden sm:inline">أضف منتج</span>
    </a>
</div>

<div data-xhr="user-items">
    <div class="overflow-x-auto">
        <div class="align-middle inline-block min-w-full">
            <div class="overflow-hidden border border-gray-200 rounded">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50 cursor-default">
                        <tr>
                            <th class="relative px-3 py-2" scope="col">
                                <span class="sr-only">صورة</span>
                            </th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">العنوان</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">سعر</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500 hidden sm:table-cell" scope="col">القسم</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500 hidden sm:table-cell" scope="col">الوحدة</th>
                            <th class="relative px-3 py-2" scope="col">
                                <span class="sr-only">تعدیل</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        {{-- @foreach ($products as $product) --}}
                            <tr class="transition hover:bg-gray-50">
                                <td class="px-3 py-2 whitespace-nowrap">
                                    {{-- @if ($product->image_url) --}}
                                        <div class="flex items-center">
                                            {{-- <a href="{{ $product->image_url->large }}" class="flex-shrink-0 h-10 w-10" target="_blank"> --}}
                                            <a href="#" class="flex-shrink-0 h-10 w-10" target="_blank">
                                                {{-- <img class="h-10 w-10 rounded border border-gray-100" src="{{ $product->image_url->small }}" alt="{{ $product->title }}" title="{{ $product->title }}"> --}}
                                                <img class="h-10 w-10 rounded border border-gray-100" src="https://emall.market/storage/products/d379348ee2382fe6b1f38c46abbf3fc4-250.jpg" alt="" title="">
                                            </a>
                                        </div>
                                    {{-- @endif --}}
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        {{-- <span class="text-sm text-gray-600">{{ $product->title }}</span> --}}
                                        <span class="text-sm text-gray-600">دبس الرمان</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="cursor-default">
                                        <div class="text-sm font-bold text-gray-600">750</div>
                                        <div class="text-xs line-through text-gray-600">1,000</div>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">الحلويات و المعجنات</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">350</span>
                                    </div>
                                </td>
                                <td class="px-3 py-3 whitespace-nowrap text-left dir-ltr">
                                    <div class="flex">
                                        {{-- <a href="{{ route('dashboard.products.edit', $products->id) }}" title="تعديل" aria-label="تعديل"> --}}
                                        <a href="#" title="تعديل" aria-label="تعديل">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        {{-- @endforeach --}}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
