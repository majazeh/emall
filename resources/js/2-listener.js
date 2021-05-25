window.davat = {};
$(document).on('statio:global:renderResponse', function (event, base, context) {
    metarget();
    base.each(function () {
        davat.select2($('.select2-select', this));
        davat.cartItem($('[data-cart]', this));
        davat.map(this);
    });
    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
        initMap();
    }
    var slider = null;
    // if($('.emall_slider', this).length){
    //     slider = setTimeout(() => {

    //     }, 500);
    // }
});
function initMap() {
    $('[data-map]').trigger('map_maker');
}
