@if ($paginator->hasPages())
    <nav role="navigation" aria-label="{{ __('Pagination Navigation') }}" class="flex justify-center items-center flex-wrap mt-8 text-sm">
        <div class="flex justify-between flex-1 sm:hidden">
            @if ($paginator->onFirstPage())
                <span class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-white border border-gray-200 cursor-default rounded">
                    @lang('Previous')
                </span>
            @else
                <a href="{{ $paginator->previousPageUrl() }}" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand border border-gray-300 hover:border-brand rounded focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-brand transition">
                    @lang('Previous')
                </a>
            @endif

            @if ($paginator->hasMorePages())
                <a href="{{ $paginator->nextPageUrl() }}" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand border border-gray-300 hover:border-brand rounded focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-brand transition">
                    @lang('Next')
                </a>
            @else
                <span class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-white border border-gray-200 cursor-default rounded">
                    @lang('Next')
                </span>
            @endif
        </div>

        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
            <div>
                <span class="relative z-0 inline-flex">
                    {{-- Previous Page Link --}}
                    @if ($paginator->onFirstPage())

                    @else
                        <a href="{{ $paginator->previousPageUrl() }}" rel="prev" class="flex justify-center items-center flex-shrink-0 h-7 text-gray-700 hover:text-brand transition me-2" aria-label="@lang('Previous')">
                            @lang('Previous')
                        </a>
                    @endif

                    {{-- Pagination Elements --}}
                    @foreach ($elements as $element)
                        {{-- "Three Dots" Separator --}}
                        @if (is_string($element))
                            <span aria-disabled="true">
                                <span class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 cursor-default">{{ $element }}</span>
                            </span>
                        @endif

                        {{-- Array Of Links --}}
                        @if (is_array($element))
                            @foreach ($element as $page => $url)
                                @if ($page == $paginator->currentPage())
                                    <span aria-current="page">
                                        <span class="flex justify-center items-center flex-shrink-0 w-7 h-7 me-2 bg-brand text-white rounded-full cursor-default">{{ $page }}</span>
                                    </span>
                                @else
                                    <a href="{{ $url }}" class="flex justify-center items-center flex-shrink-0 w-7 h-7 me-2 text-gray-700 rounded-full hover:bg-gray-200 transition focus" aria-label="{{ __('Go to page :page', ['page' => $page]) }}">
                                        {{ $page }}
                                    </a>
                                @endif
                            @endforeach
                        @endif
                    @endforeach

                    {{-- Next Page Link --}}
                    @if ($paginator->hasMorePages())
                        <a href="{{ $paginator->nextPageUrl() }}" rel="next" class="flex justify-center items-center flex-shrink-0 h-7 text-gray-700 hover:text-brand transition ms-2" aria-label="@lang('Next')">
                            @lang('Next')
                        </a>
                    @else
                        <span aria-disabled="true" aria-label="@lang('Next')">
                            <span class="flex justify-center items-center flex-shrink-0 h-7 text-gray-700 transition ms-2" aria-hidden="true">
                                @lang('Next')
                            </span>
                        </span>
                    @endif
                </span>
            </div>
        </div>
    </nav>
@endif
