@extends($layouts->theme)
@section('content')
<div class="mb-4 flex items-center">
    <h2 class="font-bold text-gray-800 cursor-default">المستخدمين</h2>
    <span class="text-sm text-gray-400 ms-2">({{ $users->total() }})</span>
</div>

<div class="flex items-center mb-4">
    <div class="flex flex-1">
        <input type="search" id="search" placeholder="بحث" class="flex-1 text-sm placeholder-gray-400 border border-gray-200 rounded h-10 px-2 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 focus:ring-brand">
    </div>
    <a href="{{ route('dashboard.users.create') }}" class="flex items-center justify-center flex-shrink-0 w-10 sm:w-auto h-10 sm:px-4 text-sm text-brand border border-brand rounded-full hover:bg-brand-50 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 ring-brand ms-2" title="إنشاء مستخدم جديد" aria-label="إنشاء مستخدم جديد">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        <span class="hidden sm:inline">إنشاء مستخدم جديد</span>
    </a>
</div>

<div data-xhr="user-items">
    <div class="overflow-x-auto">
        <div class="align-middle inline-block min-w-full">
            <div class="overflow-hidden border border-gray-200 rounded">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50 cursor-default">
                        <tr>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">رقم‌الهوية</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">اسم</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500" scope="col">موبایل</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500 hidden sm:table-cell" scope="col">نوع</th>
                            <th class="px-3 py-2 text-right text-sm font-semibold text-gray-500 hidden sm:table-cell" scope="col">الحالة</th>
                            <th class="px-3 py-2" scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        @foreach ($users as $user)
                            <tr class="transition hover:bg-gray-50">
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600 block text-right dir-ltr">{{ $user->id }}</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">{{ $user->name }}</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <a href="tel:+{{ $user->mobile }}" class="block text-right dir-ltr text-sm text-gray-600 hover:text-brand" target="_blank" title="{{ $user->mobile }}" aria-label="{{ $user->mobile }}">
                                            <span class="hidden md:block">+{{ $user->mobile }}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 block md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">@lang($user->type)</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
                                    <div class="flex items-center cursor-default">
                                        <span class="text-sm text-gray-600">@lang($user->status)</span>
                                    </div>
                                </td>
                                <td class="px-3 py-2 whitespace-nowrap text-left dir-ltr">
                                    <div class="flex">
                                        @can('update', $user)
                                            <a href="{{ route('dashboard.users.edit', $user->id) }}" title="تعديل" aria-label="تعديل">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </a>
                                        @endcan
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    {{ $users->links() }}
</div>
@endsection
