<div class="flex items-center mb-4 bg-gray-100 border border-gray-300 rounded p-4">
    @isset($brand->image_url->small)
        <img class="w-10 h-10 me-4 flex-shrink-0" src="{{ $brand->image_url->small }}" alt="">
    @endisset
    <h2 class="font-bold">{{ $brand->title }}</h2>
</div>