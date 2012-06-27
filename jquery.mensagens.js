$.extend({
  mensagem : function(o){
    var defaults = { msg:'Efetuado com sucesso',tempo:3}
    var confs = $.extend(defaults,o);

    var div = $('#msg');
    var tmp = parseInt(confs.tempo) * 1000;
    div.html(confs.msg).slideDown(function(){
        setTimeout(function(){ div.slideUp(function(){ div.html('');})},tmp);
    });
  }
});