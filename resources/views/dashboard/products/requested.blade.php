@extends($layouts->theme)
@section('content')
<div class="mb-4 flex items-center">
    <h2 class="font-bold text-gray-800 cursor-default">@lang('Requested Products')</h2>
    {{-- <span class="text-sm text-gray-400 ms-2">({{ $requested->total() }})</span> --}}
</div>

<div data-xhr="requested-items">
    <div class="overflow-x-auto">
        <div class="align-middle inline-block min-w-full">
            <div class="overflow-hidden border border-gray-200 rounded">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50 cursor-default">
                        <tr>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('Product name')</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('Description')</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('Name of applicant')</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">@lang('Mobile')</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        {{-- @foreach ($requestedProducts as $requested) --}}
                            <tr class="transition hover:bg-gray-50">
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">نام محصول</span>
                                    </div>
                                </td>
                                <td class="px-3 py-3 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">توضیحات مختصری از محصول که کاربر برای ما ارسال می‌کند.</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">نام درخواست کننده</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <a href="tel:+{{-- {{ $user->mobile }} --}}" class="block text-right dir-ltr text-sm text-gray-600 hover:text-brand" target="_blank" title="{{-- {{ $user->mobile }} --}}" aria-label="{{-- {{ $user->mobile }} --}}">
                                            <span class="hidden md:block">+969190589399{{-- {{ $user->mobile }} --}}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 block md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
    {{-- {{ $requested->links() }} --}}
</div>
@endsection
