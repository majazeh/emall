<form class="w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 mx-auto px-4 mt-8" action="{{ route('pr.store') }}" method="POST">
    @csrf
    <div class="border border-gray-200 rounded p-4 mt-8">
        <div>
            <label for="title" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">@lang('Product name')</label>
            <input type="text" name="title" id="title" class="w-full h-10 px-4 border border-gray-400 focus:border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand transition">
        </div>
        <div class="mt-4">
            <label for="description" class="block mb-2 text-sm text-gray-700 font-bold cursor-default">@lang('Description')</label>
            <textarea name="description" id="description" rows="4" class="resize-none w-full border border-gray-400 focus:border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand"></textarea>
        </div>
    </div>
    <button type="submit" class="flex items-center justify-center text-sm text-center text-white h-10 w-full bg-brand rounded-full mt-4 mb-8 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand">@lang('Request product')</button>
</form>
