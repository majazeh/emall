<div class="flex flex-col items-center justify-center relative">
    <div class="w-full bg-white rounded overflow-x-hidden flex snap-x" style="height: 32vh">
        @foreach ($intro->banners ? $intro->banners : [] as $item)
            <{{ $item->url ? 'a' : 'span' }} href="{{ $item->url }}" class="direct emall_slider snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-brand" id="slide-{{ $loop->index +1 }}">
                <img class="w-full h-full object-cover object-center" src="{{ $item->image }}" alt="">
            </{{ $item->url ? 'a' : 'span' }}>
        @endforeach
    </div>
    <div id="banner-slider" class="w-full flex justify-between absolute p-4">
        <a href data-target="prev" class="slider_action direct flex justify-center items-center text-white rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </a>
        <a href data-target="next" class="slider_action direct flex justify-center items-center text-white rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </a>
    </div>
</div>
