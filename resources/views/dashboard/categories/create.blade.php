@extends($layouts->theme)
@section('content')
<div>
    {{-- <h2 class="font-bold mb-4 text-gray-800 cursor-default">@lang($category->id ? 'Edit category' : 'Create new category')</h2> --}}
    <h2 class="font-bold mb-4 text-gray-800 cursor-default">إنشاء فئة جديدة</h2>
</div>

<form class="m-auto w-full md:w-1/2" action="" method="POST">
    {{-- @csrf
    @method($categories->id ? 'PUT' : 'POST') --}}
    <div class="border border-gray-200 rounded p-4 mt-8">
        <div>
            <label for="name" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">إسم</label>
            {{-- <input type="text" name="name" id="name" value="{{ $categories->name }}" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition"> --}}
            <input type="text" name="name" id="name" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div>
            <label for="parent" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">والد</label>
            {{-- <input type="text" name="parent" id="parent" value="{{ $categories->parent }}" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition"> --}}
            <input type="text" name="parent" id="parent" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="mobile" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">صورة</label>
            <div class="flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                </span>
                <button type="button" class="h-10 px-4 text-sm border border-brand text-brand rounded-full hover:bg-brand-100 transition me-2">تحمیل</button>
            </div>
        </div>
    </div>

    <div class="mt-6">
        {{-- <button type="submit" class="inline-flex justify-center items-center h-9 px-8 bg-brand text-white text-sm rounded-full hover:bg-brand-600 transition me-4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" title="{{ $category->id ? 'Edit' : 'Create' }}" aria-label="{{ $category->id ? 'Edit' : 'Create' }}" role="button">
            {{ $category->id ? 'Edit' : 'Create' }}
        </button> --}}
        <button type="submit" class="inline-flex justify-center items-center h-9 px-8 bg-brand text-white text-sm rounded-full hover:bg-brand-600 transition me-4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" title="إنشاء" aria-label="إنشاء" role="button">
            إنشاء
        </button>
        {{-- <a href="{{ route('dashboard.categories.index') }}" class="text-sm text-gray-500 hover:text-gray-700 transition" title="إلغاء" aria-label="إلغاء">إلغاء</a> --}}
        <a href="#" class="text-sm text-gray-500 hover:text-gray-700 transition" title="إلغاء" aria-label="إلغاء">إلغاء</a>
    </div>
</form>
@endsection
