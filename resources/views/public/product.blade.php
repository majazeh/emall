<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ایمول">

    <link rel="stylesheet" href="{{ asset('css/app.css?v=' . filemtime(public_path('css/app.css'))) }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Emall | Product</title>
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
        <section class="w-full sm:w-2/3 md:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto pb-12">
            <img class="mx-auto" src="https://emall.market/storage/products/d379348ee2382fe6b1f38c46abbf3fc4-500.jpg" alt="دبس الرمان">
            <div class="relative mt-4 px-4">
                <a href="#" class="flex items-center">
                    <img class="w-6 h-6 rounded-full me-2" src="https://emall.market/storage/products/d379348ee2382fe6b1f38c46abbf3fc4-500.jpg" alt="">
                    <span>لمسا</span>
                </a>
                <h2 class="text-xl font-bold mt-2">دبس الرمان</h2>
                <div class="flex items-center mt-2 cursor-default">
                    <div style="background-image: url('{{ asset('images/offer.svg') }}');" class="flex items-center justify-center w-6 h-6 text-white bg-no-repeat">
                        <span class="text-xs">30%</span>
                    </div>
                    <div class="flex items-center font-bold text-green-700 ms-2">
                        <span>1,000</span>
                        <span class="ms-1">دینار</span>
                    </div>
                    <div class="flex items-center text-xs font-bold text-gray-500 ms-2">
                        <div>
                            <span>1,000</span>
                            <span class="ms-1">دینار</span>
                        </div>
                    </div>
                </div>
                <div class="absolute top-0 end-4">
                    <div class="flex justify-between items-center text-gray-500 leading-none cursor-default">
                        <span class="text-xs">عراق</span>
                        <span>.</span>
                    </div>
                    <div class="flex justify-between items-center text-gray-500 leading-none cursor-default mt-2">
                        <span class="text-xs me-2">صلصات</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div class="flex justify-between items-center text-gray-500 leading-none cursor-default mt-2">
                        <div class="text-xs me-2">
                            <span>1</span>
                            <span>لتر</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="mt-4 px-4">
                <a href="/login" class="flex items-center justify-center text-sm text-center text-white h-10 w-full bg-brand rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span class="ms-2">شراء</span>
                </a>
                {{-- <div class="flex justify-between items-center">
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
                </div> --}}
            </div>
            <div class="mt-4 px-4 pb-4 text-gray-600 font-light leading-relaxed">
                <p>ﻟﻜﻦ ﻟﺎ ﺑﺪ أن أوﺿﺢ ﻟﻚ أن ﻛﻞ ﻫﺬه اﻟﺄﻓﻜﺎر اﻟﻤﻐﻠﻮﻃﺔ ﺣﻮل اﺳﺘﻨﻜﺎر  اﻟﻨﺸﻮة وﺗﻤﺠﻴﺪ اﻟﺄﻟﻢ ﻧﺸﺄت ﺑﺎﻟﻔﻌﻞ، وﺳﺄﻋﺮض ﻟﻚ اﻟﺘﻔﺎﺻﻴﻞ ﻟﺘﻜﺘﺸﻒ ﺣﻘﻴﻘﺔ وأﺳﺎس ﺗﻠﻚ اﻟﺴﻌﺎدة اﻟﺒﺸﺮﻳﺔ، ﻓﻠﺎ أﺣﺪ ﻳﺮﻓﺾ أو ﻳﻜﺮه أو ﻳﺘﺠﻨﺐ اﻟﺸﻌﻮر ﺑﺎﻟﺴﻌﺎدة، وﻟﻜﻦ ﺑﻔﻀﻞ ﻫﺆﻟﺎء اﻟﺄﺷﺨﺎص اﻟﺬﻳﻦ ﻟﺎ ﻳﺪرﻛﻮن ﺑﺄن اﻟﺴﻌﺎدة ﻟﺎ ﺑﺪ أن ﻧﺴﺘﺸﻌﺮﻫﺎ ﺑﺼﻮرة أﻛﺜﺮ ﻋﻘﻠﺎﻧﻴﺔ وﻣﻨﻄﻘﻴﺔ ﻓﻴﻌﺮﺿﻬﻢ ﻫﺬا ﻟﻤﻮاﺟﻬﺔ اﻟﻈﺮوف اﻟﺄﻟﻴﻤﺔ، وأﻛﺮر ﺑﺄﻧﻪ ﻟﺎ ﻳﻮﺟﺪ ﻣﻦ ﻳﺮﻏﺐ ﻓﻲ اﻟﺤﺐ وﻧﻴﻞ اﻟﻤﻨﺎل وﻳﺘﻠﺬذ ﺑﺎﻟﺂﻟﺎم، اﻟﺄﻟﻢ ﻫﻮ اﻟﺄﻟﻢ وﻟﻜﻦ ﻧﺘﻴﺠﺔ ﻟﻈﺮوف ﻣﺎ ﻗﺪ ﺗﻜﻤﻦ اﻟﺴﻌﺎده ﻓﻴﻤﺎ ﻧﺘﺤﻤﻠﻪ ﻣﻦ ﻛﺪ وأﺳﻲ.</p>
            </div>
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