/*
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



dragresize.ondragfocus = function() { };
dragresize.ondragstart = function(isResize) { 

	if (isResize){
	
		
	}
};
dragresize.ondragmove = function(isResize) {};
dragresize.ondragblur = function() { };
*/

//dragresize.apply(document);



// GLOBAL VARS

/* MADE FOR 2 VIEWS Back/Front */
var frontTexts = []; // save front texts
var backTexts = []; // save back texts
var frontImgs = []; // save front imgs
var backImgs = []; // save back imgs

var productView = 'front'; // init view = front, front / back
var numCustomImages = 0; // ?
var lang = 'esp'; // ?
var numProducts = 0; // ?
var maxProductsPage = 6; // idem
var minFontSize = 0; // min Font Size
var productData;  // current product loaded on start or by loadproduct()
var talla_selected = -1; // save the selected TALLA
var currentObject; // current selected Object $() 
var precio = 0; // precio to count increments and decrements of price
var generaloptions;
var cantidad = 1;
var precio_nuevo_texto = 0;
var precio_nuevo_img = 0;
var textDefault = 'textDefault';

var help_titles = [];
var help_texts = [];


/* LOAD AND START FUNCTION */

$(document).ready(function(){
	
	loading();	
	
	$.get("customAPP/php/controller.php", { "op": "start" },
   			function(data){
     			
     			//console.log(data); //  2pm

     			
     			for (i = 0;i < data.categorys.length;i++)				
   				  	$('#comboCategoria').append( $('<option></option>').val(data.categorys[i].id).html(data.categorys[i].category));
     			
     			if (data.subcategorys.length > 0){
	     			for (i = 0;i < data.subcategorys.length;i++)				
   					  	$('#comboSubCategoria').append( $('<option></option>').val(data.subcategorys[i].id).html(data.subcategorys[i].subCategory));
     			}		
     			for (i = 0;i < data.productsthumbs.length;i++)
	     				$('#productThumbs').append('<img src="customAPP/data/img/thumbs/'+data.productsthumbs[i].front_img+'" productid="'+data.productsthumbs[i].id+'">');
     			
     			for (i=0;i<data.designs.length;i++){
     				$('#designs .subwindow_content').append('	<a href="javascript:createImageBox(\''+data.designs[i].img+'\',true);"><img src="customAPP/data/img/thumbs/'+data.designs[i].img+'" ></a>');
     			}

     			refreshProducts(document.getElementById('comboCategoria'));
     			
     			/* Options load */
					
				/* 					Tamaños letra */
     				generaloptions = data.options;			
     				console.log(generaloptions);		
	     			for (i = parseInt(generaloptions.minFontSize);i < parseInt(generaloptions.maxFontSize);i += 5)		
	   				  	$('#textOptions #fontsize').append( $('<option></option>').val(i).html(i));

				/* Cantidad volumen pedido */
	     			for (i = parseInt(generaloptions.minCantidadPedido);i < parseInt(generaloptions.maxCantidadPedido);i++)
	     			  	$('#cantidad').append( $('<option></option>').val(i).html(i));

				/* Precios por img o texto */
				
					precio_nuevo_texto = parseInt(generaloptions.precioTexto);
					precio_nuevo_img = parseInt(generaloptions.precioImagen);

				/* 					Textos Ayuda */

					$('#td_help').append("<b>Necesitas Ayuda?</b><br>");

					for (i = 0; i< data.help.length;i++){
						help_titles[i] = data.help[i].title;
						help_texts[i] = data.help[i].text;
						$('#td_help').append('<a href="javascript:show_help('+i+');">'+data.help[i].title+'</a><br>');
					}
					textDefault = generaloptions.textDefault;
					
				/* 				End OptionsLoad */
     		
     			/* Products and Product info */
     			
	     			numProducts = data.productsthumbs.length;
	       			productData = data.product;
	     			productsNavigator();
					$('#productImage').attr("src","customAPP/data/img/"+data.product.front_img);    
	     			renderProductInfo();
	     			precio = parseInt(data.product.price);
					refrescar_precio();	
	     			
	     			/* product thumbs clickable */
	     			
	     			$('#productThumbs img').click(function(){
						aux = $(this).attr('productid');
						loadProduct(aux);
					});
		
					$('#productThumbs img').mouseenter(function(){
						$(this).css("cursor","pointer");	
						$(this).css("cursor","hand");
					});
					
				
				/* Preload Fonts */
/*
				$('#tshirtTool').append("<div id='preload' style='display:none;'></div>");
				var comboFont = $('#fontFamily');
				$('#fontFamily > option').each(function(e,i){
					var aux = getValue(this);
					$('#preload').append("<p style=\"font-family:'"+aux+"';\">Preloading "+e+" </p>");
				});
*/

				createTextBox();
				
     		}, "json");
   
   

});
