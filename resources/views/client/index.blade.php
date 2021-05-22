@extends($layouts->theme)
@section('main')
<section class="mt-4 mb-8 px-4">
    <a href="#" class="flex justify-center items-center h-24 bg-brand text-white rounded overflow-hidden">
        {{-- <img class="w-full h-full object-cover object-center" src="" alt="بنر"> --}}
        <span>بنر</span>
    </a>
</section>
<section class="mb-8">
    <h2 class="font-bold mb-4 px-4">الاقسام</h2>
    <div class="overflow-x-auto">
        <div class="flex">
            @foreach ($intro->categories as $parent)
                @foreach ($parent->subs ?: [] as $item)
                    <a href="#" class="flex flex-nowrap justify-center items-center h-16 px-4 bg-gray-50 border border-gray-300 rounded text-sm font-bold ms-4 whitespace-nowrap">
                        {{ $item->title }}
                    </a>
                @endforeach
            @endforeach
        </div>
    </div>
</section>
<section class="px-4 pb-12">
    <h2 class="font-bold mb-4 cursor-default">المضاف حدیثا</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4">
        @include('client.products.items', ['products' => $intro->products])
    </div>
    <div class="mb-14">
        {{ $intro->products->links() }}
    </div>
</section>
@endsection
