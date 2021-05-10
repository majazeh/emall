<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="eMall Design System">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <title>Users</title>
</head>

<body class="min-h-screen flex flex-col text-gray-900">
    <aside id="aside" class="hidden lg:block fixed inset-y-0 -start-64 lg:start-0 w-64 h-screen bg-gray-50 border-e border-gray-200 z-50 transition ease-in-out overflow-y-auto">
        <div class="flex items-center h-20 px-2">
            <h1 class="text-xl text-brand font-bold line-clamp-1">
                <a href="/" class="block">ایمول</a>
            </h1>

            <button id="aside-close" class="flex lg:hidden justify-center items-center w-10 h-10 bg-gray-100 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 rounded transition" aria-label="Close side nav">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
        </div>
        <ul class="px-2">
            <li class="mb-1">
                <a href="#" class="flex items-center py-4 px-6 rounded text-gray-900 hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span class="font-semibold">الصفحة الرئيسية</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="#" class="flex items-center py-4 px-6 rounded bg-brand text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    <span class="font-bold">المستخدمين</span>
                </a>
            </li>
        </ul>
    </aside>

    <main id="main" class="flex-1 lg:ms-64">
        <header id="header" class="flex justify-between items-center h-20 px-4">
            <div>
                <button class="flex lg:hidden justify-center items-center w-12 h-12 border border-gray-200 rounded transition" aria-label="Open side nav">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div class="flex">
                <a href="#" class="flex justify-center items-center w-12 h-12 border border-gray-200 rounded transition me-2" aria-label="Notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </a>

                <a href="#" class="flex justify-center items-center h-12 px-2 border border-gray-200 rounded transition" aria-label="My Profile">
                    <div class="flex justify-center items-center w-8 h-8 border border-gray-200 rounded overflow-hidden me-2 bg-brand text-white text-xs">
                        <span>حن</span>
                        <!-- <img src="" alt="" width="32" height="32" class="w-8 h-8 object-cover object-center"> -->
                    </div>
                    <div class="text-xs line-clamp-1" style="max-width: 128px;">حسین نخلی</div>
                </a>
            </div>
        </header>

        <div class="p-4">
            <div class="mb-4 flex items-center">
                <h2 class="font-bold text-gray-800 cursor-default">المستخدمين</h2>
                <span class="text-sm text-gray-400 ms-2">(74)</span>
            </div>

            <div class="flex items-center mb-4">
                <div class="flex flex-1">
                    <input type="search" id="search" placeholder="بحث" class="flex-1 text-sm placeholder-gray-400 border border-gray-200 rounded h-10 px-2 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 focus:ring-brand">
                </div>
                <a href="#" class="flex items-center justify-center flex-shrink-0 w-10 sm:w-auto h-10 sm:px-4 text-sm text-brand border border-brand rounded-full hover:bg-brand-50 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 ring-brand ms-2" title="إنشاء مستخدم جديد" aria-label="إنشاء مستخدم جديد">
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
                                    <tr class="transition hover:bg-gray-50">
                                        <td class="px-3 py-2 whitespace-nowrap">
                                            <div class="flex items-center cursor-default">
                                                <span class="text-sm text-gray-600 block text-right dir-ltr">AR966669</span>
                                            </div>
                                        </td>
                                        <td class="px-3 py-2 whitespace-nowrap">
                                            <div class="flex items-center cursor-default">
                                                <span class="text-sm text-gray-600">حسین نخلی</span>
                                            </div>
                                        </td>
                                        <td class="px-3 py-2 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <a href="tel:+989123456789" class="block text-right dir-ltr text-sm text-gray-600 hover:text-brand" target="_blank" title="989123456789" aria-label="989123456789">
                                                    <span class="hidden md:block">+989123456789</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 block md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                        <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
                                            <div class="flex items-center cursor-default">
                                                <span class="text-sm text-gray-600">المستخدم</span>
                                            </div>
                                        </td>
                                        <td class="px-3 py-2 whitespace-nowrap hidden sm:table-cell">
                                            <div class="flex items-center cursor-default">
                                                <span class="text-sm text-gray-600">فعال</span>
                                            </div>
                                        </td>
                                        <td class="px-3 py-2 whitespace-nowrap text-left dir-ltr">
                                            <div class="flex">
                                                <a href="#" title="تعديل" aria-label="تعديل">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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

                <nav class="flex justify-center items-center flex-wrap mt-8 text-sm">
                    <a href="#" class="flex justify-center items-center flex-shrink-0 h-7 text-gray-700 hover:text-brand transition me-2" title="السابق" aria-label="السابق">السابق</a>
                    <a href="#" class="flex justify-center items-center flex-shrink-0 w-7 h-7 me-2 text-gray-700 rounded-full hover:bg-gray-200 transition focus">1</a>
                    <a href="#" class="flex justify-center items-center flex-shrink-0 w-7 h-7 me-2 text-gray-700 rounded-full hover:bg-gray-200 transition focus">2</a>
                    <span class="flex justify-center items-center flex-shrink-0 w-7 h-7 me-2 bg-brand text-white rounded-full cursor-default">3</span>
                    <a href="#" class="flex justify-center items-center flex-shrink-0 w-7 h-7 me-2 text-gray-700 rounded-full hover:bg-gray-200 transition focus">4</a>
                    <a href="#" class="flex justify-center items-center flex-shrink-0 w-7 h-7 me-2 text-gray-700 rounded-full hover:bg-gray-200 transition focus">5</a>
                    <a href="#" class="flex justify-center items-center flex-shrink-0 h-7 text-gray-700 hover:text-brand transition ms-2" title="التالي" aria-label="التالي">التالي</a>
                </nav>
            </div>
        </div>
    </main>
</body>

</html>