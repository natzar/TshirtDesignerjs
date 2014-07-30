function($){  
 $.fn.floatingTextArea = function(options) {  
      
  var defaults = {  
   length: 300,  
   minTrail: 20,  
   moreText: "more",  
   lessText: "less",  
   ellipsisText: "..."  
  };  
    
  var options = $.extend(defaults, options);  
      
      	var dragresize = new DragResize('dragresize',
 { minWidth: 50, minHeight: 50, minLeft: 20, minTop: 20, maxLeft: 450, maxTop: 450 });
		
		dragresize.isElement = function(elm)
{
 if (elm.className && elm.className.indexOf('drsElement') > -1) return true;
};
dragresize.isHandle = function(elm)
{
 if (elm.className && elm.className.indexOf('drsMoveHandle') > -1) return true;
};

// You can define optional functions that are called as elements are dragged/resized.
// Some are passed true if the source event was a resize, or false if it's a drag.
// The focus/blur events are called as handles are added/removed from an object,
// and the others are called as users drag, move and release the object's handles.
// You might use these to examine the properties of the DragResize object to sync
// other page elements, etc.

dragresize.ondragfocus = function() { };
dragresize.ondragstart = function(isResize) {  };
dragresize.ondragmove = function(isResize) { $('#text').css("width",parseInt($('#custom_text').css("width")));
	$('#text').css("height",parseInt($('#custom_text').css("height"))); };
dragresize.ondragend = function(isResize) { $('#text').css("width",parseInt($('#custom_text').css("width")));
	$('#text').css("height",parseInt($('#custom_text').css("height")));
};
dragresize.ondragblur = function() { };

// Finally, you must apply() your DragResize object to a DOM node; all children of this
// node will then be made draggable. Here, I'm applying to the entire document.
dragresize.apply(document);



  return this.each(function() {  
   	obj = $(this);  
   
   
   
   var body = obj.html();  
       

     
  });  
 };  
})(jQuery);  
