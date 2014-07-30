<?
include "../config.php";
include "functions.php";

$op = gett('op'); 


switch($op){

	case 'loadComboSubcategorys':
		$id = gett('cat_id');
		json_from_array(array_comboSubCategorys($id));
		
	break;
	
	case 'loadProductsSubCategory':
		$id = gett('subcat_id');
		json_from_array(array_thumbsSubCategory($id));
	break;
	
	case 'start':
	
		json_tshirtCustomAppStart();
	break;

	case 'tarjeta':
		savePedido();
		// TPV
		// return URL
	break;
	
	case 'rembolso':
	$JSON = new Services_JSON();
	$custom2 = $JSON->decode($_POST['jsonb']);  //jsonb = envio
		$custom = $JSON->decode($_POST['jsona']); 


echo '<pre>';

		print_r ($_POST);
		echo '<hr>';
		print_r($custom2);
		echo '<hr>';
		print_r($custom);
		echo '</pre>';

		savePedido($_POST['jsonb'],$_POST['jsona']);
		//header("location: ".$_POST['returnUrl']);
	break;
	

	case 'loadproduct':
		$prod_id = gett('prod_id');
		json_from_array(array_productData($prod_id));
	
	break;
	
	default:
		echo "# NO OP SELECTED";
	break;



}




