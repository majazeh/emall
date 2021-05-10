@extends('layouts.theme')
@section('body')
<div class="flex-1 bg-gray-50">
    <div class="flex items-center justify-center">
        <div class="rounded w-full sm:w-80 mx-4 sm:mx-auto relative top-20">
            <h1 class="text-center font-black text-xl text-brand mb-8">
                <a href="/" class="direct" title="ایمول" aria-label="ایمول">ایمول</a>
            </h1>

            @yield('form')
        </div>
    </div>
</div>
@endsection
