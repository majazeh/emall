@extends($layouts->theme)
@section('content')
<div>
    <h2 class="font-bold mb-4 text-gray-800 cursor-default">@lang($user->id ? 'Edit user' : 'Create new user')</h2>
</div>

<form class="m-auto w-full md:w-1/2" action="{{ $user->id ? route('dashboard.users.update', $user->id) : route('dashboard.users.create') }}" method="POST">
    @csrf
    @method($user->id ? 'PUT' : 'POST')
    <div class="border border-gray-200 rounded p-4 mt-8">
        <div>
            <label for="name" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">إسم</label>
            <input type="text" name="name" id="name" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition" value="{{ $user->name }}">
        </div>

        <div class="mt-4">
            <label for="mobile" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">موبایل</label>
            <input type="text" name="mobile" id="mobile" class="w-full h-10 px-4 rounded text-sm text-left ltr border border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition" value="{{ $user->mobile }}">
        </div>

        <div class="mt-4">
            <h3 class="block mb-4 text-gray-700 font-bold cursor-default">نوع</h3>
            <div>
                <label class="inline-flex items-center group">
                    <input type="radio" id="type-admin" name="type" value="admin" class="text-brand w-3.5 h-3.5 border border-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-brand" {{ $user->type == 'admin' ? 'checked' : '' }}>
                    <span class="text-sm text-gray-600 ms-2 group-hover:text-brand-600">مشرف</span>
                </label>
            </div>
            <div class="mt-2">
                <label class="inline-flex items-center group">
                    <input type="radio" id="type-user" name="type" value="user" class="text-brand w-3.5 h-3.5 border border-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-brand" {{ $user->type == 'user' ? 'checked' : '' }}>
                    <span class="text-sm text-gray-600 ms-2 group-hover:text-brand-600">المستخدم</span>
                </label>
            </div>
        </div>

        <div class="mt-4">
            <h3 class="block mb-4 text-gray-700 font-bold cursor-default">الحالة</h3>
            <div>
                <label class="inline-flex items-center group">
                    <input type="radio" id="status-active" name="status" value="active" class="text-brand w-3.5 h-3.5 border border-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-brand" {{ $user->status == 'active' ? 'checked' : '' }}>
                    <span class="text-sm text-gray-600 ms-2 group-hover:text-brand-600">نشيط</span>
                </label>
            </div>
            <div>
                <label class="inline-flex items-center group">
                    <input type="radio" id="status-awaiting" name="status" value="awaiting" class="text-brand w-3.5 h-3.5 border border-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-brand" {{ $user->status == 'awaiting' ? 'checked' : '' }}>
                    <span class="text-sm text-gray-600 ms-2 group-hover:text-brand-600">@lang('awaiting')</span>
                </label>
            </div>
            <div class="mt-2">
                <label class="inline-flex items-center group">
                    <input type="radio" id="status-banned" name="status" value="banned" class="text-brand w-3.5 h-3.5 border border-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-brand" {{ $user->status == 'banned' ? 'checked' : '' }}>
                    <span class="text-sm text-gray-600 ms-2 group-hover:text-brand-600">أغلق</span>
                </label>
            </div>
        </div>
    </div>
    <div class="mt-6">
        <button type="submit" class="inline-flex justify-center items-center h-9 px-8 bg-brand text-white text-sm rounded-full hover:bg-brand-600 transition me-4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" title="{{ $user->id ? 'Edit' : 'Create' }}" aria-label="{{ $user->id ? 'Edit' : 'Create' }}" role="button">
            {{ $user->id ? 'Edit' : 'Create' }}
        </button>
        <a href="{{ route('dashboard.users.index') }}" class="text-sm text-gray-500 hover:text-gray-700 transition" title="إلغاء" aria-label="إلغاء">إلغاء</a>
    </div>
</form>
@endsection
