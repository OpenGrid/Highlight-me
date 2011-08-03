(function( $ ){

  $.fn.highlightme = function(options) {
  
    return this.each(function() {
        var t = $(this);
        var data = {
            code:t.text(), 
            lexer:'js', 
            style:"colorful", 
            linenos:1, 
            divstyles:"color:black;background:white;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"
        };
        $.post("http://www.hilite.me/api", data, function(r, status){
            t.html(r);
            console.log("Status: " + status);
        }, 'html');
    });
  };
})( jQuery );