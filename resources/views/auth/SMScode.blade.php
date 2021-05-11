@extends($layouts->theme)
@section('form')
<form action="{{ route('auth.verify', $verify) }}" method="POST">
    @csrf
    <input type="text" disabled value="{{ $user->mobile }}" class="w-full text-sm text-left dir-ltr text-gray-400 border border-gray-200 rounded h-10 px-3 mb-2 bg-gray-100" id="authorized_key" name="authorized_key">
    <input type="text" name="code" id="code" placeholder="رمز الرسائل القصيرة" class="w-full h-10 px-4 text-left dir-ltr placeholder-right placeholder-gray-400 border border-gray-300 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 focus:ring-brand transition" value="{{ isset($user->mobile_token->code) ? $user->mobile_token->code : null }}">
    <button type="submit" class="flex items-center justify-center w-full mb-2 sm:mb-0 h-10 px-4 text-sm bg-brand text-white rounded-full hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-60 focus:ring-brand transition mt-4">تسجيل الدخول</button>
</form>
@endsection
