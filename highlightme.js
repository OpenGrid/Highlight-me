(function( $ ){    
  $.fn.highlightme = function(options) {    
    return this.each(function() {
        var t = $(this);
        options.code = t.text();        
        $.get("http://www.hilite.me/api", options, function(r, status){           
            t.html(r.responseText);
            console.log("Status: " + status);
        }, 'html');
    });
  };
})( jQuery );