@foreach ($categories as $category)
    <h2 class="font-bold mb-4">{{ $category->title }}</h2>
    <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grdi-cols-6 2xl:grid-cols-8 gap-4 mb-8">
    @foreach ($category->subs ?: [] as $sub)
        <a href="{{ route('products.index', ['category' => $sub->id]) }}" class="flex flex-col justify-center items-center bg-gray-50 hover:bg-gray-100 group border border-gray-300 py-4 rounded overflow-hidden transition p-2">
            @if ($sub->image_url)
                <img class="w-12 h-12 mb-2" src="{{ $sub->image_url->medium }}" alt="">
            @endif
            <span class="text-sm font-bold group-hover:text-brand transition">{{ $sub->title }}</span>
        </a>
        @endforeach
    </div>
@endforeach
