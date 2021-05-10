@extends('dashboard.theme')
@section('content')
<div>
    <h2 class="font-bold mb-4 text-gray-800 cursor-default">تحرير المستخدم</h2>
</div>

<form class="m-auto w-full md:w-1/2" action="" method="POST">
    <div class="border border-gray-200 rounded p-4 mt-8">
        <div>
            <label for="name" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">إسم</label>
            <input type="text" name="name" id="name" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>
    </div>
    <div class="mt-6">
        <button type="submit" class="inline-flex justify-center items-center h-9 px-8 bg-brand text-white text-sm rounded-full hover:bg-brand-600 transition me-4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" title="إنشاء" aria-label="إنشاء" role="button">
            تعديل
        </button>
        <a href="#" class="text-sm text-gray-500 hover:text-gray-700 transition" title="إلغاء" aria-label="إلغاء">إلغاء</a>
    </div>
</form>
@endsection
