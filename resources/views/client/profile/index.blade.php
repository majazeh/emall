<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ایمول">

    <link rel="stylesheet" href="{{ asset('css/app.css?v=' . filemtime(public_path('css/app.css'))) }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Emall | Invoice</title>
</head>

<body class="min-h-screen flex flex-col text-gray-900">
    <header class="flex items-center justify-between bg-brand h-12 p-4">
        <div class="flex items-center text-white">
            <button class="rounded focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <h1 class="ms-2"><a href="https://emall.market">ایمول</a></h1>
        </div>
        <a href="#" class="flex items-center text-white">
            <span class="me-1 text-sm hidden sm:block">تسجيل الدخول / التسجيل</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
        </a>
        {{-- <div class="flex items-center text-white cursor-default">
            <div class="me-2 text-sm">حسین عبدالصمد محمد</div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="px-3">|</span>
            <a href="#" title="خروج">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            </a>
        </div> --}}
    </header>
    <div class="fixed inset-0 w-full h-full bg-gray-900 bg-opacity-50 z-40 hidden">
        <aside class="fixed inset-y-0 start-0 w-64 bg-white z-50">
            <div class="flex items-center justify-between p-4 border-b border-gray-300">
                <h1 class="text-xl text-brand text-center font-black">
                    <a href="https://emall.market">ایمول</a>
                </h1>
                <button class="rounded focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                </button>
            </div>
            <nav class="py-4">
                <div class="py-2 px-4">
                    <a href="#" class="text-base text-gray-700">
                        <i class="fal fa-info w-6 text-center"></i>
                        <span class="ms-2">من نحن</span>
                    </a>
                </div>
                <div class="py-2 px-4">
                    <a href="#" class="text-base text-gray-700">
                        <i class="fal fa-phone w-6 text-center"></i>
                        <span class="ms-2">اتصل بنا</span>
                    </a>
                </div>
                <div class="py-2 px-4">
                    <a href="#" class="text-base text-gray-700">
                        <i class="fal fa-hand-holding-box w-6 text-center"></i>
                        <span class="ms-2">طلب منتج</span>
                    </a>
                </div>
                <div class="py-2 px-4">
                    <a href="#" class="text-base text-gray-700">
                        <i class="fab fa-facebook-f w-6 text-center"></i>
                        <span class="ms-2">دعم اونلاین</span>
                    </a>
                </div>
            </nav>
        </aside>
    </div>

    <main data-xhr="main">
        <div class="mt-12 px-4">
            <img class="w-64 mx-auto" src="{{ asset('images/profile.svg') }}" alt="@lang('Profile')">
        </div>
        <form class="w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 mx-auto px-4 mt-16" action="#" method="POST">
            <div class="border border-gray-200 rounded p-4 mt-8">
                <div>
                    <label for="phone" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">@lang('Phone')</label>
                    <input type="text" name="phone" id="phone" placeholder="969190589399" disabled class="w-full h-10 dir-ltr px-4 border placeholder-gray-400 border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition cursor-not-allowed">
                </div>
                <div class="mt-4">
                    <label for="name" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">@lang('Name')</label>
                    <input type="text" name="name" id="name" value="مستخدم الجدید" class="w-full h-10 px-4 text-gray-600 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
                </div>
            </div>
            <div class="mt-6">
                <button type="submit" class="inline-flex justify-center items-center h-9 px-8 bg-brand text-white text-sm rounded-full hover:bg-brand-600 transition me-4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" title="@lang('Edit')" aria-label="@lang('Edit')" role="button">
                    @lang('Edit')
                </button>
                <a href="#" class="text-sm text-gray-500 hover:text-gray-700 transition" title="@lang('Cancel')" aria-label="@lang('Cancel')">@lang('Cancel')</a>
            </div>
        </form>
    </main>

    <nav class="grid grid-cols-5 fixed inset-x-0 bottom-0 w-full h-12 rounded-t-xl shadow-lg border-t border-gray-300 bg-white">
        <a href="/cart" class="flex flex-col justify-center items-center text-center text-gray-600 hover:text-brand transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div class="truncate text-xs mt-1">سلتی</div>
        </a>
        <a href="/invoices" class="flex flex-col justify-center items-center text-center text-gray-600 hover:text-brand transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <div class="truncate text-xs mt-1">الطلبات</div>
        </a>
        <a href="#" class="flex flex-col justify-center items-center text-center text-gray-600 hover:text-brand transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            <div class="truncate text-xs mt-1">البحث</div>
        </a>
        <a href="#" class="flex flex-col justify-center items-center text-center text-gray-600 hover:text-brand transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <div class="truncate text-xs mt-1">المنتجات</div>
        </a>
        <a href="https://emall.market" class="flex flex-col justify-center items-center text-center text-gray-600 hover:text-brand transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <div class="truncate text-xs mt-1">ایمول</div>
        </a>
    </nav>
</body>

</html>