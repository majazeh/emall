@extends($layouts->theme)
@section('main')
<section class="mt-4 px-4 pb-12">
    <h2 class="font-bold mb-4">الفواتیر</h2>
    <div class="grid grid-cols-3 h-10 bg-gray-400 rounded cursor-default">
        <div class="flex items-center px-2 text-sm text-white font-bold">رقم الفاتورة</div>
        <div class="flex items-center px-2 text-sm text-white font-bold">المبلغ الکلی</div>
        <div class="flex items-center px-2 text-sm text-white font-bold">حالة</div>
    </div>
    @foreach ($invoices as $invoice)
        <a href="{{ route('invoices.show', $invoice->id) }}" class="grid grid-cols-3 h-12 border border-gray-300 mt-2 rounded hover:bg-gray-100 transition">
            <div class="flex flex-col justify-center px-2">
                <div class="text-sm font-bold">{{ $invoice->id }}</div>
                <div class="text-xs text-gray-500">{{ $invoice->created_at }}</div>
            </div>
            <div class="flex items-center px-2 text-sm text-gray-700 font-bold">
                <span>{{ number_format($invoice->price) }}</span>
                <span class="ms-1">د. ع</span>
            </div>
            @if ($invoice->status == 'draft')
                <div class="flex items-center px-2 text-sm text-gray-600 font-bold">سلتي</div>
            @elseif ($invoice->status == 'requested')
                <div class="flex items-center px-2 text-sm text-gray-600 font-bold">قيد الطلب</div>
            @elseif($invoice->status == 'rejected')
                <div class="flex items-center px-2 text-sm text-red-600 font-bold">مرفوض</div>
            @elseif($invoice->status == 'delivered')
                <div class="flex items-center px-2 text-sm text-green-600 font-bold">تم</div>
            @else
                <div class="flex items-center px-2 text-sm text-yellow-400 font-bold">جاری الطلب</div>
            @endif
        </a>
    @endforeach
</section>
    <div class="mb-16">
        {{ $invoices->links() }}
    </div>
</div>
@endsection
