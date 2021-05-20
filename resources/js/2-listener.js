window.davat = {};
$(document).on('statio:global:renderResponse', function (event, base, context) {
    metarget();
    base.each(function () {
        davat.select2($('.select2-select', this));
        davat.cartItem($('[data-cart]', this));
    });
});
