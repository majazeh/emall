@extends($layouts->theme)
@section('form')
<form action="{{ route('auth.post') }}" method="POST">
    @csrf
    <input type="text" name="mobile" id="mobile" placeholder="موبایل" class="w-full h-10 px-4 text-left dir-ltr placeholder-right placeholder-gray-400 border border-gray-300 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 focus:ring-brand transition">
    <button type="submit" class="flex items-center justify-center w-full mb-2 sm:mb-0 h-10 px-4 text-sm bg-brand text-white rounded-full hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 focus:ring-brand transition mt-4">استمر</button>
</form>
@endsection
