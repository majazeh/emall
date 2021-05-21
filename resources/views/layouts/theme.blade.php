<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="eMall Design System">

    <link rel="stylesheet" href="{{ asset('css/app.css?v=' . filemtime(public_path('css/app.css'))) }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $global->title }}</title>
</head>

<body class="min-h-screen flex flex-col text-gray-900" data-page="{{ $global->page }}">
    @yield('body')
    <script src="https://maps.googleapis.com/maps/api/js?key={{ config('services.google.map') }}&libraries=visualization" sync defer></script>
    <script src="{{ asset('js/app.js?v=' . filemtime(public_path('js/app.js'))) }}"></script>
</body>

</html>
