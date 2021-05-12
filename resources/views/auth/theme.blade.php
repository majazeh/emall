@extends('layouts.theme')
@section('body')
<div class="flex-1 bg-gray-50">
    <div class="flex items-center justify-center">
        <div class="rounded w-full sm:w-80 mx-4 sm:mx-auto relative top-20">
            <a href="/" class="direct block mx-auto w-40 mb-4" title="ایمول" aria-label="ایمول">
                <img src="{{ asset('images/emall.png') }}" alt="ایمول">
            </a>
            <div data-xhr="form">
                @yield('form')
            </div>
        </div>
    </div>
</div>
@endsection
