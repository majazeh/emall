<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="eMall Design System">

    <link rel="stylesheet" href="http://127.0.0.1:7000/css/app.css?v=1621769358">
    <meta name="csrf-token" content="lBtvHCeYw4R2d0RGJpLwwGRG8teEea1lHzHBpRnf">

    <title>Emall</title>
</head>

<body class="min-h-screen flex flex-col text-gray-900" data-page="dashboard-products-create">
        <aside id="aside" class="bg-gray-50 border-e border-gray-200 z-50 transition ease-in-out overflow-y-auto">
        <div class="flex items-center h-20 px-2">
            <h1 class="text-xl text-brand font-bold line-clamp-1">
                <a href="http://localhost" class="block">ایمول</a>
            </h1>
        </div>
        <ul class="px-2">
            <li class="mb-1">
                <a href="http://127.0.0.1:7000/dashboard" data-metarget-default class="flex items-center py-4 px-6 rounded text-gray-900 hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span class="font-semibold">الصفحة الرئيسية</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="http://127.0.0.1:7000/dashboard/products" data-metarget="products" data-metarget-pattern="/dashboard/products.*" class="flex items-center py-4 px-6 rounded text-gray-900 hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span class="font-semibold">المنتجات</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="http://127.0.0.1:7000/dashboard/categories" data-metarget="categories" data-metarget-pattern="/dashboard/categories.*" class="flex items-center py-4 px-6 rounded text-gray-900 hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span class="font-semibold">الأقسام</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="http://127.0.0.1:7000/dashboard/brands" data-metarget="brands" data-metarget-pattern="/dashboard/brands.*" class="flex items-center py-4 px-6 rounded text-gray-900 hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span class="font-semibold">العلامات التجارية</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="http://127.0.0.1:7000/dashboard/invoices" data-metarget="invoices" data-metarget-pattern="/dashboard/invoices.*" class="flex items-center py-4 px-6 rounded text-gray-900 hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <span class="font-semibold">الفواتیر</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="http://127.0.0.1:7000/dashboard/users" data-metarget="users" data-metarget-pattern="/dashboard/users.*" class="flex items-center py-4 px-6 rounded text-gray-900 hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    <span class="font-semibold">المستخدمين</span>
                </a>
            </li>
        </ul>
    </aside>

    <main id="main" class="flex-1 lg:ms-64">
        <header id="header" class="flex justify-between items-center h-20 px-4">
            <div>
                <button id="aside-open" class="flex lg:hidden justify-center items-center w-12 h-12 border border-gray-200 rounded transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" aria-label="Open side nav">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div class="flex">
                <div class="flex justify-center items-center h-12 px-2 border border-gray-200 rounded transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" aria-label="My Profile">
                    <div class="flex justify-center items-center w-8 h-8 border border-gray-200 rounded overflow-hidden me-2 bg-brand text-white text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <div class="text-xs cursor-default line-clamp-1" style="max-width: 128px;">Admin</div>
                </div>
                <a href="http://127.0.0.1:7000/logout" data-method="POST" class="lijax flex justify-center items-center w-12 h-12 text-gray-600 hover:text-brand border border-gray-200 hover:border-brand rounded transition ms-2 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" aria-label="Notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </a>
            </div>
        </header>

        <div class="p-4" data-xhr="content">
            <div>
                <h2 class="font-bold mb-4 text-gray-800 cursor-default">@lang('Banners')</h2>
            </div>

            <form class="m-auto w-full md:w-1/2" action="#" method="POST">
                @csrf
                <div class="border border-gray-200 rounded p-4 mt-8">
                    <div>
                        <label for="banner1" class="block mb-4 text-sm text-gray-700 font-bold cursor-default">لافتة 1</label>
                            <div class="h-32 w-full rounded overflow-hidden mb-4">
                                <img class="h-full w-full" src="https://dev.emall.market/storage/products/0e31702717b0fdaf3ba812e0642dfb85-150.png" alt="">
                            </div>
                        <input type="file" name="banner1" id="banner1">
                        <input type="url" name="url" placeholder="@lang('Enter your link')" class="w-full h-10 px-4 rounded text-sm text-left ltr placeholder-gray-400 border border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition mt-4">
                    </div>
                    <div class="mt-4 pt-4 border-t border-gray-200">
                        <label for="banner2" class="block mb-4 text-sm text-gray-700 font-bold cursor-default">لافتة 2</label>
                            <div class="h-32 w-full rounded overflow-hidden mb-4">
                                <img class="h-full w-full" src="https://dev.emall.market/storage/products/df11e96f0bbc05ff2e60d9529fe53220-150.png" alt="">
                            </div>
                        <input type="file" name="banner2" id="banner2">
                        <input type="url" name="url" placeholder="@lang('Enter your link')" class="w-full h-10 px-4 rounded text-sm text-left ltr placeholder-gray-400 border border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition mt-4">
                    </div>
                    <div class="mt-4 pt-4 border-t border-gray-200">
                        <label for="banner3" class="block mb-4 text-sm text-gray-700 font-bold cursor-default">لافتة 3</label>
                            <div class="h-32 w-full rounded overflow-hidden mb-4">
                                <img class="h-full w-full" src="https://dev.emall.market/storage/products/bd3ea3e128c27d337dc3c598c8f3e78f-150.png" alt="">
                            </div>
                        <input type="file" name="banner3" id="banner3">
                        <input type="url" name="url" placeholder="@lang('Enter your link')" class="w-full h-10 px-4 rounded text-sm text-left ltr placeholder-gray-400 border border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition mt-4">
                    </div>
                </div>

                <div class="mt-6">
                    <button type="submit" class="inline-flex justify-center items-center h-9 px-8 bg-brand text-white text-sm rounded-full hover:bg-brand-600 transition me-4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" title="@lang('Submit')" aria-label="@lang('Submit')" role="button">
                        @lang('Submit')
                    </button>
                    <a href="#" class="text-sm text-gray-500 hover:text-gray-700 transition" title="@lang('Cancel')" aria-label="@lang('Cancel')">@lang('Cancel')</a>
                </div>
            </form>
        </div>
    </main>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDSIgLtkSGjdDEdmCa3IWfXxp_OGx_4Y80&libraries=visualization" sync defer></script>
<script src="http://127.0.0.1:7000/js/app.js?v=1621769358"></script>
</body>

</html>