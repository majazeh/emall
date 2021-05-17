<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ایمول">

    <link rel="stylesheet" href="{{ asset('css/app.css?v=' . filemtime(public_path('css/app.css'))) }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Emall | Invoices</title>
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
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
        </a>
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
        <div class="p-4">
            <form class="mb-4 search">
                <input class="border border-gray-300 h-10 px-2 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand lijax" id="global_search" name="q" placeholder="البحث" data-state='true' data-lijax='300 change' data-method='get' aria-label="Search">
            </form>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4">
                <div class="flex border border-gray-200 rounded overflow-hidden h-32">
                    <a href="https://emall.market/products/P966BZ" class="flex-shrink-0 w-32 h-32 overflow-hidden relative">
                        <img src="https://emall.market/storage/products/d379348ee2382fe6b1f38c46abbf3fc4-250.jpg" alt="دبس الرمان" width="128" height="128" class="w-32 h-32">
                    </a>
                    <div class="flex-1 flex flex-col justify-between py-2 px-2 h-32">
                        <div>
                            <div>
                                <a href="https://emall.market/products/P966BZ" class="text-sm font-bold line-clamp-1">دبس الرمان</a>
                            </div>
                            <div class="flex justify-between items-center text-xs font-medium text-gray-500 mt-1">
                                <a href="#" class="flex items-center">
                                    <img class="w-4 h-4 rounded-full me-1" src="https://emall.market/storage/products/d379348ee2382fe6b1f38c46abbf3fc4-500.jpg" alt="">
                                    <span>لمسا</span>
                                </a>
                                <div class="cursor-default">250 کیلوغرام</div>
                            </div>
                            <div class="flex items-center mt-1">
                                <div class="text-sm text-green-700 font-bold">
                                    <span>750</span>
                                    <span>دینار</span>
                                </div>
                                <div class="text-sm text-gray-500 line-through ms-2">
                                    <span>1,000</span>
                                    <span>دینار</span>
                                </div>
                            </div>
                        </div>
                        <a href="/cart" data-cart-product="P966BZ" data-count="0" class="direct flex-shrink-0 flex justify-center items-center bg-brand text-xs text-white font-bold h-8 px-2 rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-brand">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span class="ms-2">شراء</span>
                        </a>
                    </div>
                </div>
                <div class="flex border border-gray-200 rounded overflow-hidden h-32">
                    <a href="https://emall.market/products/P966BZ" class="flex-shrink-0 w-32 h-32 overflow-hidden relative">
                        <img src="https://emall.market/storage/products/d379348ee2382fe6b1f38c46abbf3fc4-250.jpg" alt="دبس الرمان" width="128" height="128" class="w-32 h-32">
                    </a>
                    <div class="flex-1 flex flex-col justify-between py-2 px-2 h-32">
                        <div>
                            <div>
                                <a href="https://emall.market/products/P966BZ" class="text-sm font-bold line-clamp-1">دبس الرمان</a>
                            </div>
                            <div class="flex justify-between items-center text-xs font-medium text-gray-500 mt-1">
                                <a href="#" class="flex items-center">
                                    <img class="w-4 h-4 rounded-full me-1" src="https://emall.market/storage/products/d379348ee2382fe6b1f38c46abbf3fc4-500.jpg" alt="">
                                    <span>لمسا</span>
                                </a>
                                <div class="cursor-default">250 کیلوغرام</div>
                            </div>
                            <div class="flex items-center mt-1">
                                <div class="text-sm text-green-700 font-bold">
                                    <span>750</span>
                                    <span>دینار</span>
                                </div>
                                <div class="text-sm text-gray-500 line-through ms-2">
                                    <span>1,000</span>
                                    <span>دینار</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <a href="#" class="flex justify-center items-center h-8 w-8 bg-brand text-white rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-brand">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </a>
                            <span class="text-sm font-bold mx-2">12</span>
                            <a href="#" class="flex justify-center items-center h-8 w-8 text-gray-600 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="flex justify-center items-center flex-wrap my-8 text-sm">
                <a href="#" class="flex justify-center items-center flex-shrink-0 h-7 text-gray-700 hover:text-brand transition me-2" title="السابق" aria-label="السابق">السابق</a>
                <a href="#" class="flex justify-center items-center flex-shrink-0 w-7 h-7 me-2 text-gray-700 rounded-full hover:bg-gray-200 transition focus">1</a>
                <a href="#" class="flex justify-center items-center flex-shrink-0 w-7 h-7 me-2 text-gray-700 rounded-full hover:bg-gray-200 transition focus">2</a>
                <span class="flex justify-center items-center flex-shrink-0 w-7 h-7 me-2 bg-brand text-white rounded-full cursor-default">3</span>
                <a href="#" class="flex justify-center items-center flex-shrink-0 w-7 h-7 me-2 text-gray-700 rounded-full hover:bg-gray-200 transition focus">4</a>
                <a href="#" class="flex justify-center items-center flex-shrink-0 w-7 h-7 me-2 text-gray-700 rounded-full hover:bg-gray-200 transition focus">5</a>
                <a href="#" class="flex justify-center items-center flex-shrink-0 h-7 text-gray-700 hover:text-brand transition ms-2" title="التالي" aria-label="التالي">التالي</a>
            </nav>
        </div>
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
    <script src="{{ asset('js/app.js?v=' . filemtime(public_path('js/app.js'))) }}"></script>
</body>

</html>