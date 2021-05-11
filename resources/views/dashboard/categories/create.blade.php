@extends($layouts->theme)
@section('content')
<div>
    <h2 class="font-bold mb-4 text-gray-800 cursor-default">@lang($category->id ? 'Edit category' : 'Create new category')</h2>
</div>

<form class="m-auto w-full md:w-1/2" action="{{ $category->id ? route('dashboard.categories.update', $category->id) : route('dashboard.categories.store') }}" method="POST">
    @csrf
    <div class="border border-gray-200 rounded p-4 mt-8">
        <div>
            <label for="title" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">@lang('Title')</label>
            <input type="text" name="title" id="title" value="{{ $category->title }}" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="parent_id" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">والد</label>
            <input type="text" name="parent_id" id="parent_id" value="{{ $category->parents && $category->parents->last() ? $category->parents->last()->id : null }}" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="image" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">صورة</label>
            <input type="file" name="image" id="image">
        </div>
    </div>

    <div class="mt-6">
        <button type="submit" class="inline-flex justify-center items-center h-9 px-8 bg-brand text-white text-sm rounded-full hover:bg-brand-600 transition me-4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" title="{{ $category->id ? 'Edit' : 'Create' }}" aria-label="{{ $category->id ? 'Edit' : 'Create' }}" role="button">
            {{ $category->id ? 'Edit' : 'Create' }}
        </button>
        <a href="{{ route('dashboard.categories.index') }}" class="text-sm text-gray-500 hover:text-gray-700 transition" title="إلغاء" aria-label="إلغاء">إلغاء</a>
    </div>
</form>
@endsection
