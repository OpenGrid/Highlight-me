/*!
 * jQuery Countdown plugin v0.5
 * http://plugins.jquery.com/project/Highlightme
 *
 * Copyright 2011, Lech Wilczyński http://opengrid.pl
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function( $ ){    
  $.fn.highlightme = function(options) { 
    var settings = {
        lexer:'js', 
        style:"colorful", 
        linenos:1, 
        divstyles:"color:black;background:white;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"
    };   
    
    return this.each(function() {
        var $code = $(this);        
        options = $.extend(settings, options);
        options.code = $code.text();        
        $.get("http://www.hilite.me/api", options, function(r, status){            
            var node = $("<div/>");            
            node.append(r.responseText);            
            $code.html(node.find("div"));            
        });
    });
  };
})( jQuery );