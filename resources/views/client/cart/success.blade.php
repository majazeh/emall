@extends($layouts->theme)
@section('main')
<a href="{{ route('invoices.show', $invoice->id) }}" class="flex flex-col items-center justify-center mt-16">
    <img class="w-48" src="{{ asset('images/confirmed.svg') }}" alt="ایمول">
    <div class="mt-8 font-bold text-center">
        <div class="text-lg text-gray-600">تم قبول فاتوره برقم</div>
        <div class="text-xl mt-2 text-gray-800">{{ $invoice->id }}</div>
    </div>
</a>
@endsection
