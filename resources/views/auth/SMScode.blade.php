<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="eMall Design System">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <title>Login</title>
</head>

<body class="min-h-screen flex flex-col text-gray-900">
    <div class="flex-1 bg-gray-50">
        <div class="flex items-center justify-center">
            <div class="rounded w-full sm:w-80 mx-4 sm:mx-auto relative top-20">
                <h1 class="text-center font-black text-xl text-brand mb-8">
                    <a href="/" class="direct" title="ایمول" aria-label="ایمول">ایمول</a>
                </h1>

                <form action="">
                    <input type="text" disabled value="989123456789" class="w-full text-sm text-left dir-ltr text-gray-400 border border-gray-200 rounded h-10 px-3 mb-2 bg-gray-100" id="authorized_key" name="authorized_key">
                    <input type="text" name="mobile" id="mobile" placeholder="رمز الرسائل القصيرة" class="w-full h-10 px-4 text-left dir-ltr placeholder-right placeholder-gray-400 border border-gray-300 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 focus:ring-brand transition">
                    <button type="button" class="flex items-center justify-center w-full mb-2 sm:mb-0 h-10 px-4 text-sm bg-brand text-white rounded-full hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 focus:ring-brand transition mt-4">تسجيل الدخول</button>
                </form>
            </div>
        </div>
    </div>
</body>

</html>