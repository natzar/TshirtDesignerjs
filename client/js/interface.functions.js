/*

Product Customization Web Application v1.0
(c) 2011-2020 Beto López, Php Ninja Software http://www.phpninja.info

Licensed under the CC-GNU LGPL, version 2.1 or later:
http://creativecommons.org/licenses/LGPL/2.1/
This is distributed WITHOUT ANY WARRANTY; without even the implied
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.


Interface.Functions.js
	Load, animations, clicks, sets and dynamic css.
*/

/* ANIMATIONS, CLICKS AND SETS */

	$('#bold_btn').click(function(){
		if ($('.text',currentObject).css("font-weight") == 'bold') $('.text',currentObject).css("font-weight","normal");
		else {$('.text',currentObject).css("font-weight","bold");
		$('.text',currentObject).css("color","#000");
		}
	});
	$('#italic_btn').click(function(){
		if ($('.text',currentObject).css("font-style") == 'italic') $('.text',currentObject).css("font-style","normal");
		else $('.text',currentObject).css("font-style","italic");
	});
	
	$('#leftalign').click(function(){ 	$('.text',currentObject).css("text-align","left"); 	});
	$('#rightalign').click(function(){ 	$('.text',currentObject).css("text-align","right"); 	});	
	$('#centeralign').click(function(){ 	$('.text',currentObject).css("text-align","center"); 	});	
	
	
	$('#btn_comprar').click(function(){
	
		if (talla_selected != -1) saveAndSend();
		 else alert("selecciona la talla por favor");
	});
	
	$('#menu_productos').click(function(){ 
			$('#products').show();
		$('#designs').hide(function(){

		});


	});
	
	$('#makepdf-btn').click(function(){
		
		var content_html = escape($('#custom').html());
		window.location.href= 'customAPP/php/makepdf.php?html='+content_html;
	});
	
	
	$('#menu_foto').click(function(){
			$('#uploadImage').show();
		$('#textOptions').hide(function(){

			});
	});

	$('.color_box').click(function(){ 
		var aux = $(this).css("background-color");
		$('.text',currentObject).css("color", aux);
		});
/*
	$('.color_box').mouseenter(function(){
	
		$(this).css("cursor","hand");
		$(this).css("cursor","pointer");
	});
*/
	
	$('#menu_diseno').click(function(){
	$('#designs').show();
		$('#products').hide(function(){
			
		});
	});


	$('#front_img').click(function(){
		loadProductFrontImg();
	});
	$('#back_img').click(function(){
		loadProductBackImg();
	});
     	
     	

  	$('* > img').mousedown(function(event){
		if (event.preventDefault) event.preventDefault();
	});
