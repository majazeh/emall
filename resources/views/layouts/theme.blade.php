<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="eMall Design System">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <title>{{ $global->title }}</title>
</head>

<body class="min-h-screen flex flex-col text-gray-900" data-page="{{ $global->page }}">
    @yield('body')
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
