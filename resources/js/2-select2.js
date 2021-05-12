(function(davat){
    var select2 = function(){
        var _self = this;
        var options = {
            width: '100%',
            amdLanguageBase: 'dist/vendors/select2-4.0.13/dist/js/i18n',
            language: 'fa',
            minimumInputLength: 0,
            dir: "rtl",
            templateResult : function(data){
                if(!$(_self).is('[data-url], [data-url-pattern]')){
                    return data.text;
                }
                if(!data.id) return data.text;
                if(!data.html){
                    var html =  $(data.element).parent().data('default-value');
                    if(html){
                        data.html = $('[data-id="'+data.id+'"]', $(html));
                    }else{
                        return data.text;
                    }
                }
                return data.html ? $('[data-selection]', data.html) : data.text;
            },
            templateSelection : function(data){
                if(!data.id) return data.text;
                if(!data.html){
                    var html =  $(data.element).parent().data('default-value');
                    if(html){
                        if(!$('[data-id="'+data.id+'"]', $(html)).length){
                            return data.text;
                        }
                        html = $('[data-id="'+data.id+'"]', $(html))[0].outerHTML;
                    }else{
                        return data.text;
                    }
                }
                html = html || data.html;
                $('[data-xhr]', html).each(function(){
                    var xhr = $(this).attr('data-xhr');
                    new Statio({
                        type: 'render',
                        fake: true,
                        response : $(html).html(),
                        context: $('[data-xhr="'+xhr+'"]').get(0)
                    });
                });
                return html ? $('[data-selection]', html) : data.text;
            },
        };
        if($('[data-for="'+$(this).attr('id')+'"]')[0]){
            $(this).data('default-value', $('[data-for="'+$(this).attr('id')+'"]')[0].outerHTML);
        }
        $('[data-for="'+$(this).attr('id')+'"]').remove();
        if ($(this).is('[data-url]')) {
            var _self = this;
            options.ajax = {
                delay: 250,
                url: $(this).attr('data-url'),
                quietMillis: 250,
                beforeSend: function(xhr){xhr.setRequestHeader('data-xhr-base', $(_self).attr('data-xhr-base') || 'select2');},
                data: function (params) {
                    return {
                        q: params.term || ''
                    };
                },
                processResults: function (data) {
                    data = data.data || data;
                    if(typeof data == 'string'){
                        var split = data.split(/\n/, 1);
                        var html = $('<div>' + data.substr(split[0].length)  + '</div>');
                        data = JSON.parse(split[0]);
                    }
                    var result = { results: [] };
                    for (var i = 0; i < data.length; i++) {
                        result.results.push({
                            id: data[i].id,
                            text: data[i].title,
                            html : html ? $('[data-id="'+ data[i].id +'"]', html).get(0).outerHTML : undefined
                        });
                    }
                    return result;
                },
                cache: false
            };
        }
        $(this).select2(options);
        if($(this).is('[data-relation]')){
            $(this).on('select2:select', function (e) {
                var relation_ids = $(this).attr('data-relation');
                var f_id = $(this).val();
                relation_ids.split(' ').forEach(function (relation_id){
                    var relation = $('#' + relation_id);
                    if (!relation.length) return;
                    var url = unescape(relation.attr('data-url-pattern')).replace('%%', f_id);
                    relation.attr('data-url', url);
                    relation.val(null).trigger("change");
                    relation.select2('destroy');
                    select2.call(relation[0]);
                });
            });
        }
    }
    davat.select2 = function(element){
        element.each(function(){
            select2.call(this);
        });
    }
})(window.davat);
