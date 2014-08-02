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
