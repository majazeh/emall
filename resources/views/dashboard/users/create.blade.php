@extends($layouts->theme)
@section('content')
<div>
    <h2 class="font-bold mb-4 text-gray-800 cursor-default">إنشاء مستخدم جديد</h2>
</div>

<form class="m-auto w-full md:w-1/2" action="" method="POST">
    <div class="border border-gray-200 rounded p-4 mt-8">
        <div>
            <label for="name" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">إسم</label>
            <input type="text" name="name" id="name" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <label for="mobile" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">موبایل</label>
            <input type="text" name="mobile" id="mobile" class="w-full h-10 px-4 rounded text-sm text-left ltr border border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>

        <div class="mt-4">
            <h3 class="block mb-4 text-gray-700 font-bold cursor-default">نوع</h3>
            <div>
                <label class="inline-flex items-center group">
                    <input checked type="radio" id="1" name="a" value="1" class="text-brand w-3.5 h-3.5 border border-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-brand">
                    <span class="text-sm text-gray-600 ms-2 group-hover:text-brand-600">مشرف</span>
                </label>
            </div>
            <div class="mt-2">
                <label class="inline-flex items-center group">
                    <input type="radio" id="2" name="a" value="2" class="text-brand w-3.5 h-3.5 border border-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-brand">
                    <span class="text-sm text-gray-600 ms-2 group-hover:text-brand-600">المستخدم</span>
                </label>
            </div>
        </div>

        <div class="mt-4">
            <h3 class="block mb-4 text-gray-700 font-bold cursor-default">الحالة</h3>
            <div>
                <label class="inline-flex items-center group">
                    <input checked type="radio" id="1" name="b" value="1" class="text-brand w-3.5 h-3.5 border border-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-brand">
                    <span class="text-sm text-gray-600 ms-2 group-hover:text-brand-600">نشيط</span>
                </label>
            </div>
            <div class="mt-2">
                <label class="inline-flex items-center group">
                    <input type="radio" id="2" name="b" value="2" class="text-brand w-3.5 h-3.5 border border-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-brand">
                    <span class="text-sm text-gray-600 ms-2 group-hover:text-brand-600">أغلق</span>
                </label>
            </div>
        </div>
    </div>
    <div class="mt-6">
        <button type="submit" class="inline-flex justify-center items-center h-9 px-8 bg-brand text-white text-sm rounded-full hover:bg-brand-600 transition me-4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand" title="إنشاء" aria-label="إنشاء" role="button">
            إنشاء
        </button>
        <a href="#" class="text-sm text-gray-500 hover:text-gray-700 transition" title="إلغاء" aria-label="إلغاء">إلغاء</a>
    </div>
</form>
@endsection
