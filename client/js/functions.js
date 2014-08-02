/*

Product Customization Web Application v1.0
(c) 2005-2006 Beto López, Php Ninja Software http://www.phpninja.info

Licensed under the CC-GNU LGPL, version 2.1 or later:
http://creativecommons.org/licenses/LGPL/2.1/
This is distributed WITHOUT ANY WARRANTY; without even the implied
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.


FUNCTIONS.JS 
Static Js Functions


*/

function loading(){
$('#loading').fadeOut();
if ($('#loading').css("display") == 'block') $('#loading').hide();
else{ $('#loading').fadeIn();

$('#custom img').load(function(){
	$('#loading').fadeOut();
});
}
}

function setCurrentObject(jqueryselector){
	currentObject = jqueryselector;
	if (currentObject.hasClass("objectText")) {
	
		displayTextProperties();
	
	}/*
else{
		$('#uploadImage').slideUp();
		$('#textOptions').slideUp();
		//displayImageProperties();
	}
*/
}

function displayTextProperties(){
		
	if ($('#uploadImage').css("display") != 'none'){
		$('#uploadImage').slideUp();
	}
		$('#textOptions').slideDown();
	
	
		currentFontSize = $('.text',currentObject).css("font-size");
		currentFontSize = currentFontSize.substr(0,currentFontSize.indexOf('p'));
		currentFontFamily = $('.text',currentObject).css("font-family");
		jQuery("select#fontfamily option[value='"+currentFontFamily+"']").attr("selected", "selected");
		jQuery("select#fontsize option[value='"+currentFontSize+"']").attr("selected", "selected");
		
}
function displayImageProperties(){
			$('#uploadImage').show();
		$('#textOptions').hide(function(){

		});
}
function getValue(element){
	switch(element.type){
		case 'select-one':
		case 'select':
			return element.options[element.selectedIndex].value;
		break;
		case 'checkbox':
			if (element.checked) return 1;
			else return 0;
		default:
			if (element.value) return element.value;
			else return '';
		break;
		
	}
	return 0;
}

function setTalla(T){
	talla_selected = T;
	$('.talla').css("background","transparent");
	$('#talla_'+T).css("background","#333");
	

}
function setFontSize (item){

	var aux = getValue(item);
	$('.text',currentObject).css("font-size",aux+'px');
	lineheightauto = (parseInt(aux)) + ((parseInt(aux) * 9) / 100);
	console.info(lineheightauto);
	$('.text',currentObject).css("line-height",lineheightauto+'px');
}

function setFontFamily(item){
	
	var aux = getValue(item);
	$('.text',currentObject).css("font-family",aux);
}

function delete_textbox(){
	currentObject.hide();
	if (productView='front'){
		
		for (i=0;i<frontTexts.length;i++){
			if (frontTexts[i].attr("id") == currentObject.attr("id")) frontTexts[i] = -1;
		}
	}else{
		for (i=0;i<backTexts.length;i++){
			if (backTexts[i].attr("id") == currentObject.attr("id")) backTexts[i] = -1;
		}
	
	}
currentObject = "";
	//currentObject.remove();
		decrementar_precio(precio_nuevo_texto);		
}
function delete_imgbox(){
	currentObject.hide();
	if (productView='front'){
		
		for (i=0;i<frontImgs.length;i++){
			if (frontImgs[i].attr("id") == currentObject.attr("id")) frontImgs[i] = -1;
		}
	}else{
		for (i=0;i<backImgs.length;i++){
			if (backImgs[i].attr("id") == currentObject.attr("id")) backImgs[i] = -1;
		}
	
	}
	currentObject = "";
	//currentObject.remove();
	decrementar_precio(precio_nuevo_img);
}


function incrementar_precio(aux){
	precio = precio + aux;
	refrescar_precio();
}
function decrementar_precio(aux){
	precio = precio - aux;
	refrescar_precio();
}
function refrescar_precio(){
	$('#precio').html(precio+' €');
}

function createTextBox(){
	var textBoxId = parseInt(frontTexts.length) + parseInt(backTexts.length);	
	
	var html = '<div id="custom_text_'+productView+'_'+textBoxId+'" style="top:100px;left:150px;" class="drsElement objectText">	<div class="drsMoveHandle handler"><i class="icon-move icon-sign"></i> &nbsp;</div><div class="drsTrashHandle handler"><i class="icon-remove icon-sign"></i> &nbsp;</div><div class="drsRotateHandle handler"><i class="icon-repeat icon-sign"></i></div><textarea  class="text"  >'+textDefault+'</textarea></div>';
		$('#custom').append(html);
		
		var idjquery = '#custom_text_'+productView+'_'+textBoxId;
		
		if (productView == 'front')frontTexts.push($(idjquery));
		else backTexts.push($(idjquery));				
		
		$(idjquery+' .text').css("font-size","40px");
		
		
		
			$(idjquery).resizable({
/* 		   aspectRatio:true, */ 
		   containment: "parent",
		   handles: "se",
		   autoHide: true,
		   gHost: true,
		   maxWidth:380,
/* 		   maxHeight:220, */
		   minWidth:70,
           stop: function(event, ui) {
        	/*
		        var w = $(this).width();
                var h = $(this).height();
                console.log('StopEvent fired')
                console.log('Width:'+w);
                console.log('Height:'+h)    
			*/
            }
	 }).draggable({
            containment: "parent",
/*             handle: idjquery+" .text", */
            drag: function(){
/*
                var offset = $(this).offset();
                var xPos = offset.left;
                var yPos = offset.top;
                console.log('x: ' + xPos);
                  console.log('y: ' + yPos);
*/
            },
            stop: function(){
/*
                var finalOffset = $(this).offset();
                var finalxPos = finalOffset.left;
                var finalyPos = finalOffset.top;
				console.log('Final X: ' + finalxPos);
	            console.log('Final X: ' + finalyPos);
*/
            }
      });


		
/* 		OBJECT CLICK */		
		$(idjquery).click(function(){
			setCurrentObject($(this));
		});
/* 		MOUSE LEAVE */
		$(idjquery).mouseleave(function(){ 
/* 			$(this).css("border-color","transparent"); */
			$(this).css("border-color","transparent");
			//$(this).parent().css("border","none"); 
			$('.drsMoveHandle',this).hide();
			$('.drsTrashHandle',this).hide();
			$('.drsRotateHandle',this).hide();
		});
/* 		MOUSE ENTER */
		$(idjquery).mouseenter(function(){ 	
			/* $(this).css("border","1px dotted black");	 */
			$(this).css("border","1px dashed cyan");
			$('.drsMoveHandle',this).show();
			$('.drsTrashHandle',this).show();
			$('.drsRotateHandle',this).show();
		});	
/* 		TRASH BUTTON */
		$('.drsTrashHandle',idjquery).click(function(){
			if(confirm("Seguro?")) delete_textbox();
		});

/* 		ROTATION */
		$('.drsRotateHandle',idjquery).draggable({
		    handle: '.drsRotateHandle',
		    opacity: 0.01, 
		    helper: 'clone',
		    drag: function(event, ui){
		        var rotateCSS = 'rotate(' + (parseInt(ui.position.left)+parseInt(ui.position.top)) + 'deg)';
		
		        $(this).parent().css({
		            '-moz-transform': rotateCSS,
		            '-webkit-transform': rotateCSS
		        });
		    }
		});

		 $(idjquery+' textarea').autosize();
		setCurrentObject($(idjquery));
		incrementar_precio(precio_nuevo_texto);
}


function createImageBox(imgSrc, isdesign){
	var imgBoxId = parseInt(frontImgs.length) + parseInt(backImgs.length);	
	var html = '<div id="custom_img_'+productView+'_'+imgBoxId+'" style="top:100px;left:150px;" class="drsElement objectImage">	<div class="drsTrashHandle handler"><i class="icon-remove icon-sign"></i>&nbsp;</div><div class="drsRotateHandle handler"><i class="icon-repeat icon-sign"></i>&nbsp;</div><img onmousedown="if (event.preventDefault) event.preventDefault();" class="customImage" src=';
	if (isdesign) html += '"customAPP/data/img/'+imgSrc+'"';
	else html += 'customAPP/data/tempx/'+imgSrc;
	html += '></div>';
	$('#custom').append(html);
	
	/* div Id del objeto creado */
	var idjquery = '#custom_img_'+productView+'_'+imgBoxId;

	/* Guardamos el objeto en la coleccion dentro del View */
	if (productView == 'front')frontImgs.push($(idjquery));
	else backImgs.push($(idjquery));				
	
	/* Resizable and Draggable */
	$(idjquery).resizable({
		   aspectRatio:true, 
		   containment: "parent",
		   handles: "se",
		   autoHide: true,
		   gHost: true,
		   maxWidth:200,
		   maxHeight:220,
		   minWidth:70,
           stop: function(event, ui) {
        	/*
		        var w = $(this).width();
                var h = $(this).height();
                console.log('StopEvent fired')
                console.log('Width:'+w);
                console.log('Height:'+h)    
			*/
            }
	 }).draggable({
            containment: "parent",
            drag: function(){
/*
                var offset = $(this).offset();
                var xPos = offset.left;
                var yPos = offset.top;
                console.log('x: ' + xPos);
                  console.log('y: ' + yPos);
*/
            },
            stop: function(){
/*
                var finalOffset = $(this).offset();
                var finalxPos = finalOffset.left;
                var finalyPos = finalOffset.top;
				console.log('Final X: ' + finalxPos);
	            console.log('Final X: ' + finalyPos);
*/
            }
      });


/* 		ROTATION */    
	$('.drsRotateHandle',idjquery).mouseenter(function(){
		$(this).css("cursor","default");
	});
	$('.drsRotateHandle',idjquery).draggable({
		    handle: '.drsRotateHandle',
		    opacity: 0.01, 
		    helper: 'clone',
		    drag: function(event, ui){
		    console.info(ui);
		    console.info(event);
		    //console.info(parseInt(ui.position.left)-parseInt(ui.position.top));
		        var rotateCSS = 'rotate(' + (parseInt(ui.position.left)+parseInt(ui.position.top)) + 'deg)';
		
		        $(this).parent().css({
		            '-moz-transform': rotateCSS,
		            '-webkit-transform': rotateCSS
		        });
		    }
		});
/* 		OBJECT CLICK */		
		$(idjquery).click(function(){
			setCurrentObject($(this));
		});
/* 		MOUSE LEAVE */
		$(idjquery).mouseleave(function(){ 
			$(this).css("border","none");
			$('.drsTrashHandle',this).hide();
			$('.drsRotateHandle',this).hide();

		});
/* 		MOUSE ENTER */
		$(idjquery).mouseenter(function(){ 	
			$(this).css("border","1px dashed cyan");
			$(this).css("cursor","move");
			$('.drsTrashHandle',this).show();
			$('.drsRotateHandle',this).show();
		});	
/* 		TRASH BUTTON */
		$('.drsTrashHandle',idjquery).click(function(){
			if(confirm("Seguro?")) delete_imgbox();
		});

/* init */
		setCurrentObject($(idjquery));
		incrementar_precio(precio_nuevo_img);
		
}



function ajaxFileUploadBut()	{
	//console.info("SI");
		$("#loading")
		.ajaxStart(function(){
			$(this).show();
		})
		.ajaxComplete(function(){
			$(this).hide();
		});

		$.ajaxFileUpload
		(
			{
				url:'js/AFU/doajaxfileupload.php',
				secureuri:false,
				fileElementId:'fileToUpload',
				dataType: 'json',
				data:{name:'logan', id:'id'},
				success: function (data, status)
				{
					
						if(data.error != '')
						{
							alert(data.error);
						}else
						{ 
							numCustomImages++;
						console.info("Image uploaded 100%");
						console.info(encodeURI(data.filename));
							createImageBox(encodeURI(data.filename),false);
							
								$('#uploadImage').hide(function(){
									$('#textOptions').show();
									});

							//console.info(data);
							//dragresize.apply(document);
						
						}
					
				},
				error: function (data, status, e)
				{
					alert(e);
				}
			}
		)
		
		return false;

	}

function renderProductInfo(){


					
	     			
	     			$('#td_imgProduct').html("<img src='../data/img/"+productData.imgProduct+"'>");
	     			$('#td_descriptionProduct').html(productData.descriptionProduct);
	     			
	     		//	$('#front_img').html("<img width='50' src='customAPP/data/img/thumbs/"+productData.front_img+"'>");
	     		//	$('#back_img').html("<img  width='50' src='customAPP/data/img/thumbs/"+productData.back_img+"'>"); 		
	     			
}

function loadProduct(id){
		loading();
		productView='front';
		switchBackFront();
		$.get("../php/controller.php", { "op": "loadproduct","prod_id":id },
   			function(data){
     			   			
     			$('#productImage').attr("src","customAPP/data/img/"+data.front_img); 

				console.log("precio producto actual: "+productData.price);
				console.log("precio producto que viene: "+data.price);

				precio = precio - parseInt(productData.price) + parseInt(data.price);
				console.log("lo que queda: "+precio);
				refrescar_precio();

     			productData = data;
     			//$('#front_img').html("<img width='50' src='customAPP/data/img/thumbs/"+data.front_img+"'>");
     			//$('#back_img').html("<img width='50' src='customAPP/data/img/thumbs/"+data.back_img+"'>"); 		
     			renderProductInfo();
     		
     		}, "json");


}


function productsNavigator(){
	if (numProducts > maxProductsPage){
		var number_pages = numProducts / 6;
		
		$('#productsNavigator').html("1 / "+number_pages+ " Next >>");
		
	} else 
	$('#productsNavigator').html(numProducts+' / '+numProducts);
}

function productsNavigatorNext(){


}
function productsNavigatorPrev(){


}
function loadProductBackImg(){
	loading();
	$('#productImage').attr("src","customAPP/data/img/"+productData.back_img);
	productView = 'back';
	switchBackFront();
	
}
function loadProductFrontImg(){
	loading();
	$('#productImage').attr("src","customAPP/data/img/"+productData.front_img);
	productView = 'front';
	switchBackFront();

}

function switchBackFront(){

	if (productView == 'back'){
		
		for (i=0;i<frontTexts.length;i++)		
			if (frontTexts[i] != -1) frontTexts[i].hide();
		for (i=0;i<backTexts.length;i++)		
			if (backTexts[i] != -1) backTexts[i].show();
		/* Imágenes */
		for (i=0;i<frontImgs.length;i++)		
			if (frontImgs[i] != -1) frontImgs[i].hide();
		for (i=0;i<backImgs.length;i++)		
			if (backImgs[i] != -1) backImgs[i].show();

	
		$('#front_img').show();
		$('#back_img').hide();


	} else {
		for (i=0;i<frontTexts.length;i++)		
			if (frontTexts[i] != -1)frontTexts[i].show();		
		for (i=0;i<backTexts.length;i++)		
			if (backTexts[i] != -1)	backTexts[i].hide();	
		/* Imágenes */
		for (i=0;i<frontImgs.length;i++)		
			if (frontImgs[i] != -1)frontImgs[i].show();		
		for (i=0;i<backImgs.length;i++)		
			if (backImgs[i] != -1)	backImgs[i].hide();
			
		$('#front_img').hide();
		$('#back_img').show();

	}
	
}

function loadcomboSubcategoria(item){
	loading();
		var aux = getValue(item);
		//console.info(aux);
		$.get("customAPP/php/controller.php", { "op": "loadComboSubcategorys","cat_id":aux },
   			function(data){
     			 $('#comboSubCategoria').html("");
     			//console.info(data); //  2pm
     			var i = 0;
     			for (i = 0;i < data.length;i++)				{
   				  	if (i == 0) $('#comboSubCategoria').append( $('<option selected="selected"></option>').val(data[i].id).html(data[i].subCategory));
					else $('#comboSubCategoria').append( $('<option></option>').val(data[i].id).html(data[i].subCategory));

   				  }
				  if (i >= data.length)refreshProducts(document.getElementById('comboSubCategoria')); 				  	

     		}, "json");     		 
}
		
function refreshProducts(item){
	
		loading();
	var id = getValue(item);

		$.get("customAPP/php/controller.php", { "op": "loadProductsSubCategory","subcat_id":id },
   			function(data){
     			
     			 //  2pm
     			
     			if (data == null || data == 'null'){
     				$('#productThumbs').html("").append("<b>No hay productos</b>");
     				numProducts = 0;
     			} else {
     			//console.info(data);
	     			$('#productThumbs').html("");
    				for (i = 0;i < data.length;i++)				
     				$('#productThumbs').append('<img src="customAPP/data/img/thumbs/'+data[i].front_img+'" productid="'+data[i].id+'">');
     			
	     			numProducts = data.length;
					
						$('#productThumbs img').click(function(){
					aux = $(this).attr('productid');
					loadProduct(aux);
				});
	
				$('#productThumbs img').mouseenter(function(){
					$(this).css("cursor","pointer");	
					$(this).css("cursor","hand");
				});
				
     			}
     			productsNavigator();
     				
          		}, "json");
}


function saveAndSend(){

	var jsonsenda = jsonsendb = new Object;
	jsonsenda['productImage_Front'] = "customAPP/data/img/thumbs/"+productData.front_img;
	jsonsenda['productImage_Back'] = "customAPP/data/img/thumbs/"+productData.back_img;	
	jsonsenda['talla'] = talla_selected;
	jsonsenda['precio'] = precio;

	var Texts =[];
	var Imgs = [];		
	
	for (i=0;i< frontTexts.length;i++){
		var aux = new Object;
		var texto = $('.text',frontTexts[i]);
		aux.id = texto.parent().attr("id");
		aux.text = texto.val();
		//aux.css = document.getElementById(aux.id).style.fontSize; 	
		aux.width = texto.parent().css("width");
		aux.height = texto.parent().css("height");			
		aux.top = texto.parent().css("top");
		aux.left = texto.parent().css("left");
		aux.fontsize = texto.css("font-size");	
		aux.lineheight = texto.css("line-height");	
		aux.color = texto.css("color");				
		aux.fontfamily = texto.css("font-family");				
		Texts.push(aux);
	}
	for (i=0;i< frontImgs.length;i++){
		var aux = new Object;
		aux.id = frontImgs[i].attr("id"); 
		aux.src = $('img',frontImgs[i]).attr("src"); 
		aux.width = frontImgs[i].css("width");
		aux.height = frontImgs[i].css("height");			
		aux.top = frontImgs[i].css("top");
		aux.left = frontImgs[i].css("left");
		Imgs.push(aux);
	}
	
	jsonsenda['frontTexts'] = Texts;
	jsonsenda['frontImgs'] = Imgs;
	jsonsenda['backTexts'] = [];
	jsonsenda['backImgs'] = [];
	
	var texta = JSON.stringify(jsonsenda,null);
	$('#jsona').attr("value",texta);
	
	open_checkout_div();
	
}

function open_checkout_div(){
	$('#tshirtTool').html();
	$('#tshirtTool').load('checkout.html');
	/*
$('#pago-pedido-container #precio_final').html($('#precio').html());
	$('#checkout,#products,#designs,#textOptions,#uploadImage,#descripcion-producto').slideUp();
	$('#menu_productos,#custom,#menu_diseno,#button_new_textbox,#menu_foto').fadeOut();
	$('#envio-pedido-container').slideDown();
	$('#pago-pedido-container').slideDown();
*/
}
function validateEmail(email){
	var regEx = /^[\w\.\+-]{1,}\@([\da-zA-Z-]{1,}\.){1,}[\da-zA-Z-]{2,6}$/;
	if (!regEx.test(email)) {
		return false;
	} 
	return true;
}

function validate_nosubmit(z){

	for (var x=0; x < z.length; x++) {

 		if (z[x].getAttribute('name') == 'email' && validateEmail(getValue(z[x])) || z[x].getAttribute('name') != 'email') {
	 		
	 		if (z[x].getAttribute('required')){
	 		
	 			if ( z[x].getAttribute('required') == 'required'  && getValue(z[x]) == "" || getValue(z[x]) == 0){
					var ncampo = z[x].getAttribute('name');
	 				alert("El campo "+ncampo+" es obligatorio ");
		 			z[x].style.background='#ffff55';
					z[x].focus();
	 				return false;	
	 			} else z[x].style.background='#ffffff';
	 		} 
 		} else {
 			alert("Email no valido");z[x].style.background='#ffff55';z[x].focus();
 			return false;
 		}
 	}
 	return true;
}

function confirmar_compra_contrarembolso(){
var z = document.formdatosenvio;
	var aux = validate_nosubmit(z);
	if (aux){
	 	var jsonsenda = new Object;
		for (var x=0; x < z.length; x++)
	 		jsonsenda[z[x].getAttribute('name')] = getValue(z[x]);
	 		jsonsenda['cantidad'] = getValue(document.getElementById('cantidad'));
	 	var textjson = JSON.stringify(jsonsenda,null);
	 	$('#jsonb').attr("value",textjson);
	 	$('#op').attr("value","rembolso");
		document.form1.submit();
	} else return false;
		
}

function confirmar_compra_tarjeta(){
var z = document.formdatosenvio;
	var aux = validate_nosubmit(z);
	if (aux){
	 	var jsonsenda = new Object;
		for (var x=0; x < z.length; x++)
	 		jsonsenda[z[x].getAttribute('name')] = getValue(z[x]);
	 	var textjson = JSON.stringify(jsonsenda,null);
	 	$('#jsonb').attr("value",textjson);
	 	$('#op').attr("value","tarjeta");
		document.form1.submit();
	} else return false;
}

function show_help(issue){
	
	$('#helper #title').html(help_titles[issue]);
	$('#helper #text').html(help_texts[issue]);
	$('#helper').modal('toggle')
	
}

function close_help(){
	var aux = $('#helper').css("display");
		if (aux != 'none'){
		$('#helper').fadeOut();
	}
}