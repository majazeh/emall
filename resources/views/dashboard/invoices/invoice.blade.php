@extends($layouts->theme)
@section('content')
<div class="flex items-center justify-between mb-4">
    <h2 class="font-bold text-gray-800 cursor-default">الفاتورة</h2>
    <div>
        <a href="#" class="inline-flex justify-center items-center h-8 px-4 text-gray-500 text-sm rounded-full border border-gray-500 hover:bg-gray-100 transition me-1 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-500" title="#" aria-label="#">
            رفض الفاتورة
        </a>
        <a href="#" class="inline-flex justify-center items-center h-8 px-4 text-green-600 text-sm rounded-full border border-green-600 hover:bg-green-50 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-600" title="#" aria-label="#">
            قبول الفاتورة
        </a>
    </div>
</div>

<div data-xhr="invoice-items">
    <div class="overflow-x-auto">
        <div class="align-middle inline-block min-w-full">
            <div class="overflow-hidden border border-gray-200 rounded">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50 cursor-default">
                        <tr>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">التسلسل</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">المشتري</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">السائق</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">نوع</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">الحالة</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">خريطة</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600 text-right dir-ltr">I966666N</span>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">حیدر کرار</span>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">-</span>
                                </div>
                                {{-- <div class="flex items-center">
                                    <select name="driver" id="driver" placeholder="تحديد" class="border border-gray-400 focus:border-gray-400 h-10 w-full rounded pl-4 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand">
                                        <option value="1">محمد قاسم جبار</option>
                                        <option value="2">علی حسین محمد</option>
                                    </select>
                                </div> --}}
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">طلب</span>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">قيد الطلب</span>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div class="flex">
                                    <a href="#" title="map" aria-label="map">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                        </svg>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<div class="mt-4" data-xhr="invoice-items">
    <div class="overflow-x-auto">
        <div class="align-middle inline-block min-w-full">
            <div class="overflow-hidden border border-gray-200 rounded">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50 cursor-default">
                        <tr>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">المنتج</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">الجمع الکلي</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">سعر السوق</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">سعر ايمول</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">9</span>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">16</span>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">16,100</span>
                                </div>
                            </td>
                            <td class="px-3 py-4 whitespace-nowrap">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">14,000</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<div class="mt-4" data-xhr="products-items">
    <div class="overflow-x-auto">
        <div class="align-middle inline-block min-w-full">
            <div class="overflow-hidden border border-gray-200 rounded">
                <table class="min-w-full divide-y divide-gray-200 table-auto">
                    <thead class="bg-gray-50 cursor-default">
                        <tr>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">#</th>
                            <th class="relative px-3 py-2" scope="col">
                                <span class="sr-only">صورة</span>
                            </th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">العنوان</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">عدد المنتجات</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">سعر الرف</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">سعر ايمول</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">الخصم</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">إجمالي سعر الرف</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">إجمالي سعر ایمول</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr class="bg-gray-50">
                            <td class="px-3 py-2 whitespace-nowrap">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">1</span>
                                </div>
                            </td>
                            <td class="px-3 py-2 whitespace-nowrap">
                                <div class="flex items-center">
                                    <a href="#" class="flex-shrink-0 h-10 w-10" target="_blank">
                                        <img class="h-10 w-10 rounded border border-gray-100" src="https://emall.market/storage/products/d379348ee2382fe6b1f38c46abbf3fc4-250.jpg" alt="" title="">
                                    </a>
                                </div>
                            </td>
                            <td class="px-3 py-2 whitespace-nowrap">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">دبس الرمان</span>
                                </div>
                            </td>
                            <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">1</span>
                                </div>
                            </td>
                            <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">1,250</span>
                                </div>
                            </td>
                            <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">1,200</span>
                                </div>
                            </td>
                            <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">4</span>
                                </div>
                            </td>
                            <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">1,250</span>
                                </div>
                            </td>
                            <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
                                <div class="flex items-center cursor-default">
                                    <span class="text-sm text-gray-600">1,200</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
