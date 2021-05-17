<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ایمول">

    <link rel="stylesheet" href="{{ asset('css/app.css?v=' . filemtime(public_path('css/app.css'))) }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>الصفحة الرئیسیة</title>
</head>

<body class="min-h-screen flex flex-col text-gray-900">
    <div class="flex-1 bg-gray-50">
        <div class="flex items-center justify-center">
            <div class="rounded w-full sm:w-80 mx-4 sm:mx-auto relative top-20">
                <a href="/" class="direct block mx-auto w-40 mb-4" title="ایمول" aria-label="ایمول">
                    <img src="{{ asset('images/emall.png') }}" alt="ایمول">
                </a>
                <div data-xhr="form">
                    <form action="#" method="POST">
                        <input type="text" name="mobile" id="mobile" placeholder="موبایل" class="w-full h-10 px-4 text-left dir-ltr placeholder-right placeholder-gray-400 border border-gray-300 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 focus:ring-brand transition">
                        <button type="submit" class="flex items-center justify-center w-full mb-2 sm:mb-0 h-10 px-4 text-sm bg-brand text-white rounded-full hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 focus:ring-brand transition mt-4">استمر</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/app.js?v=' . filemtime(public_path('js/app.js'))) }}"></script>
</body>