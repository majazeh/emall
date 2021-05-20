;(function(){
    var delay = undefined;
    function cartItem(){
        var _cart = this;
        $('[data-action]', this).each(function(){
            $(this).on('statio:done', function(e, data, xhr, response){
                if(response.status != 200 || response.status != 201){
                    $(_cart).attr('data-order', $(_cart).attr('data-quantity'));
                    $('[data-quantityLog]', _cart).text($(_cart).attr('data-quantity'));
                }
            });
        });
        $('[data-action]', this).on('click', function(){
            var trigger = this;
            var order = $(_cart).attr('data-order') || $(_cart).attr('data-quantity');
            var product = $(_cart).attr('data-cart') ;
            var quantity = parseInt(order) + ($(this).attr('data-action') == 'minus' ? -1 : 1);
            if(quantity < 1 && $(this).attr('data-action') == 'minus') quantity = 1;
            $(_cart).attr('data-order', quantity);
            $('[data-quantityLog]', _cart).text(quantity);
            if(delay) clearTimeout(delay);
            var _self = this;
            delay = setTimeout(function(){
                new Statio({
                    url: '/cart/items/'+product,
                    type : 'render',
                    context : _self,
                    ajax : {
                        data : {quantity : quantity, current : parseInt($(_cart).attr('data-quantity'))},
                        method : 'post'
                    }
                });
            }, 500);
            return false;
        });
    }
    davat.cartItem = function(base){
        base.each(function(){
            cartItem.call(this);
        });
    }
})(davat);
