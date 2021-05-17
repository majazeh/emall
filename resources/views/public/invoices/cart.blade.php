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
        <section class="my-4 px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4">
                <div class="flex border border-gray-200 rounded overflow-hidden h-28">
                    <a href="https://emall.market/products/P966BZ" class="relative flex-shrink-0 w-28 h-28 overflow-hidden">
                        <img src="https://emall.market/storage/products/d379348ee2382fe6b1f38c46abbf3fc4-250.jpg" alt="دبس الرمان" width="128" height="128" class="w-full h-full">
                        {{-- <div style="background-image: url('{{ asset('images/offer.svg') }}');" class="absolute top-2 end-2 flex items-center justify-center w-7 h-7 text-white bg-no-repeat">
                            <span class="text-xs">12%</span>
                        </div> --}}
                    </a>
                    <div class="flex-1 flex flex-col justify-between py-2 px-2 h-28">
                        <div>
                            <div>
                                <a href="https://emall.market/products/P966BZ" class="text-sm font-bold line-clamp-1">دبس الرمان</a>
                            </div>
                            <div class="flex items-center justify-between mt-2 cursor-default">
                                <div class="text-sm text-green-700 font-bold">
                                    <span>750</span>
                                    <span>دینار</span>
                                </div>
                                <div class="text-sm text-gray-500 ms-2">
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
        </section>
        <section class="px-4 pb-14">
            <div class="border border-gray-300 cursor-default">
                <div class="flex justify-between items-center p-2 border-b border-gray-300">
                    <div class="text-sm text-gray-700">مبلغ الفاتوره</div>
                    <div>
                        <span>20,500</span>
                        <span>دینار</span>
                    </div>
                </div>
                <div class="flex justify-between items-center p-2 border-b border-gray-300">
                    <div class="text-sm text-gray-700">مقدار الخصم</div>
                    <div>
                        <span>15,000 دینار</span>
                    </div>
                </div>
                <div class="flex justify-between items-center p-2 border-b border-gray-300">
                    <div class="text-sm text-gray-700">تکلفه التوصیل</div>
                    <div>
                        <span>مجانا</span>
                    </div>
                </div>
                <div class="flex justify-between items-center p-2 bg-gray-200 font-bold">
                    <div class="text-sm text-gray-700">المبلغ النهائی</div>
                    <div>
                        <span>16,750</span>
                        <span>دینار</span>
                    </div>
                </div>
            </div>
            <button class="flex items-center justify-center text-sm text-center text-white h-10 w-full bg-brand rounded-full mt-2 mb-8" data-cart-close="" type="submit" href="https://emall.market/cart/close?I966666X">تاکید الطلب</button>
        </section>
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