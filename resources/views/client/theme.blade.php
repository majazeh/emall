@extends('layouts.theme')
@section('body')
    <header class="flex items-center justify-between bg-brand h-12 p-4">
        <div class="flex items-center text-white">
            <button id="aside-open" class="rounded focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white" id="aside-open">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <h1 class="ms-2"><a href="https://emall.market">ایمول</a></h1>
        </div>
        @if (auth()->check())
        <div class="flex items-center text-white cursor-default">
            <a href="#" class="flex items-center">
                <div class="text-sm me-2">{{ auth()->user()->name }}</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </a>
            <span class="px-3">|</span>
            <a href="{{ route('logout') }}" title="خروج" class="lijax" data-method="POST">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            </a>
        </div>
        @else
            <a href="{{ route('auth.form') }}" class="direct flex items-center text-white">
                <span class="me-1 text-sm hidden sm:block">تسجيل الدخول / التسجيل</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            </a>
        @endif
    </header>

    <aside id="aside" class="aside-client bg-gray-50 border-e border-gray-200 z-50 transition ease-in-out overflow-y-auto">
        <div class="flex items-center h-20 px-2">
            <h1 class="text-xl text-brand font-bold line-clamp-1">
                <a href="{{ config('app.url') }}" class="block">ایمول</a>
            </h1>
        </div>
        <ul class="px-2">
            <li class="mb-1">
                <a href="{{ route('about') }}" {{-- data-metarget-default --}} class="flex items-center py-4 px-6 rounded text-gray-900 hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    <span class="font-semibold">@lang('About us')</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="{{ route('contact') }}" {{-- data-metarget="categories" data-metarget-pattern="/dashboard/categories.*" --}} class="flex items-center py-4 px-6 rounded text-gray-900 hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span class="font-semibold">@lang('Contact us')</span>
                </a>
            </li>
            @if (auth()->check())
                <li>
                    <a href="{{ route('request.show') }}" {{-- data-metarget="products" data-metarget-pattern="/dashboard/products.*" --}} class="flex items-center py-4 px-6 rounded text-gray-900 hover:bg-gray-200 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span class="font-semibold">@lang('Request product')</span>
                    </a>
                </li>
            @endif
        </ul>
    </aside>
    <div data-xhr="main">
        @yield('main')
    </div>
    <nav class="grid grid-cols-5 fixed inset-x-0 bottom-0 w-full pt-3 pb-6 sm:p-0 sm:h-12 rounded-t-xl shadow-lg border-t border-gray-300 bg-white">
        <a href="{{ auth()->check() ? route('cart.show') : route('auth.form') }}" class="{{ auth()->check() ? '' : 'direct' }} flex flex-col justify-center items-center text-center text-gray-600 hover:text-brand transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
                @include('client.cart.price', ['cart' => isset($cart) ? $cart : new \App\Models\Invoice])
        </a>
        <a href="{{ auth()->check() ? route('invoices.index') : route('auth.form') }}" class="flex flex-col justify-center items-center text-center text-gray-600 hover:text-brand transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <div class="truncate text-xs mt-1">@lang('Invoices')</div>
        </a>
        <a href="{{ route('products.search') }}" class="flex flex-col justify-center items-center text-center text-gray-600 hover:text-brand transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <div class="truncate text-xs mt-1">@lang('Search')</div>
        </a>
        <a href="{{ route('products.index') }}" class="flex flex-col justify-center items-center text-center text-gray-600 hover:text-brand transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <div class="truncate text-xs mt-1">@lang('Products')</div>
        </a>
        <a href="{{ config('app.url') }}" class="flex flex-col justify-center items-center text-center text-gray-600 hover:text-brand transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <div class="truncate text-xs mt-1">@lang('Emall')</div>
        </a>
    </nav>
@endsection
