@extends($layouts->theme)
@section('content')
<div class="mb-4 flex items-center">
    <h2 class="font-bold text-gray-800 cursor-default">الفواتیر</h2>
    {{-- <span class="text-sm text-gray-400 ms-2">({{ $invoices->count() }})</span> --}}
</div>

<div data-xhr="user-items">
    <div class="overflow-x-auto">
        <div class="align-middle inline-block min-w-full">
            <div class="overflow-hidden border border-gray-200 rounded">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50 cursor-default">
                        <tr>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">التسلسل</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">الصانع</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">المشتري</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">السائق</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">الحالة</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">نوع</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">المنتج</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">الجمع الکلي</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">خريطة</th>
                            <th class="relative px-3 py-2" scope="col">
                                <span class="sr-only">عرض و طباعة</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        {{-- @foreach ($invoices as $invoice) --}}
                            <tr class="transition hover:bg-gray-50">
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600 text-right dir-ltr">I966666N</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">حیدر کرار</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">حیدر کرار</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">-</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">قيد الطلب</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">طلب</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">9</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">16</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex">
                                        <a href="#" title="map" aria-label="map">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap text-left dir-ltr">
                                    <div class="flex items-center">
                                        <div class="inline-flex me-4">
                                            <a href="#" title="print" aria-label="print">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                                  </svg>
                                            </a>
                                        </div>
                                        <div class="inline-flex">
                                            <a href="#" title="view" aria-label="view">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </a>

                                        </div>
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
