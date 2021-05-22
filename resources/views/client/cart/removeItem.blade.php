<a href="{{ route('cart.items.destroy', isset($item) && $item instanceof \App\Models\InvoiceItem ? ['product' => $item->product->id, 'isCart' => true] : $product->id) }}" data-method="delete" class="lijax absolute text-brand -end-2 -top-2 w-6 h-6 flex items-center justify-center rounded-full bg-white border border-brand">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
</a>
