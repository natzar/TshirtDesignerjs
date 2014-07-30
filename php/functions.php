<?
include "mysql.php";
include "JSON.php";
include_once "../config.php";
$link = new mysqlconn;
$link = $link->conectar();


/* GENERAL */

function gett($var){
	$retrieved = -1;	
	if (isset ($_GET[$var])) $retrieved = $_GET[$var];
	else if(isset ($_POST[$var])) $retrieved = $_POST[$var];
	$retrieved = str_replace("/","",$retrieved);
	$retrieved = preg_replace('[^a-zA-Z0-9]', '', $retrieved);
	if (trim($retrieved) == '') $retrieved = -1;
	return trim($retrieved);
}
function implod($ar){
	$res ="";for ($i=0;$i < count($ar);$i++){ if ($i > 0) $res .= ",";$res .= $ar[$i];}	return $res; }

function json_from_array($array){
	$json = new Services_JSON();
	$aux = $json->encode($array);
	echo $aux;
}
/* Functions */

function array_comboCategorys(){
	global $link;
	$queryCategorias = mysql_query("SELECT * from ".DB_PREFIX."categorys order by category ASC",$link);
	$rows = array();
	while($row = mysql_fetch_assoc($queryCategorias)) {
      $rows[] = $row;
  	}
  
	return $rows;
}

function array_comboSubCategorys($CAT_ID){
	global $link;
	$queryCategorias = mysql_query("SELECT * from ".DB_PREFIX."subcategorys where category='$CAT_ID' order by category ASC",$link);
	
	while ($row = mysql_fetch_assoc($queryCategorias)){
		$rows[] = $row;
	}
	
	return $rows;
}
function array_thumbsSubCategory($SUBCAT_ID){
	global $link;
	$query = mysql_query("SELECT id,front_img from ".DB_PREFIX."products where subcategory='$SUBCAT_ID'",$link);
	$rows = array();
	while ($row = mysql_fetch_assoc($query)){
		$rows[] = $row;
	}
	return $rows;

}

function array_help_texts(){
	global $link;
	$queryx = mysql_query("SELECT * from ".DB_PREFIX."ayuda order by orden ASC ",$link);

	$rows = array();
	while ($row = mysql_fetch_assoc($queryx)){
		$rows[] = $row;
	}
	return $rows;
}

function id_firstCategory(){

	global $link;
	$query = mysql_query("SELECT id from ".DB_PREFIX."categorys order by category ASC limit 1",$link);
	$row = mysql_fetch_array($query);
	return $row['id'];
}
function id_firstSubCategory($CAT_ID){
	global $link;
	$query = mysql_query("SELECT id from ".DB_PREFIX."subcategorys where category='$CAT_ID' limit 1",$link);
	$row = mysql_fetch_array($query);
	return $row['id'];
}
function id_firstProduct($SUBCAT_ID){
	global $link;
	$query = mysql_query("SELECT id from ".DB_PREFIX."products where subcategory='$SUBCAT_ID' limit 1",$link);
	$row = mysql_fetch_array($query);
	return $row['id'];
}
function array_productData($prod_id){
	global $link;
	$query = mysql_query("SELECT *  from ".DB_PREFIX."products where id='$prod_id' limit 1",$link);
	$row = mysql_fetch_assoc($query);
	return $row;

}
function array_generalOptions(){
	global $link;
	$query = mysql_query("SELECT * from ".DB_PREFIX."generaloptions",$link);
		$aux=array();
	while ($row = mysql_fetch_array($query)){
		$aux[$row['param']] = $row['value'];
	}
return $aux;


}

function array_designs(){
	global $link;
	$query = mysql_query("SELECT * from ".DB_PREFIX."designs",$link);
	$rows = array();
	while ($row = mysql_fetch_assoc($query)){
		$rows[] = $row;
	}
	return $rows;

}


function json_tshirtCustomAppStart(){
	
	$jsonreturn = array();
	$jsonreturn['help'] = array_help_texts();
	$jsonreturn['designs'] = array_designs();
	$jsonreturn['categorys'] = array_comboCategorys();
	$CAT_ID = id_firstCategory();
	$jsonreturn['subcategorys'] = array_comboSubcategorys($CAT_ID);
	$SUBCAT_ID = id_firstSubCategory($CAT_ID);
	$jsonreturn['product'] = array_productData(id_firstProduct($SUBCAT_ID));
	$jsonreturn['productsthumbs'] = array_thumbsSubCategory($SUBCAT_ID);
	$jsonreturn['options'] = array_generalOptions();

	$json = new Services_JSON();
	$jsontext = $json->encode($jsonreturn);	
	echo $jsontext;

}


function savePedido($json_direccion,$json_design){
	global $link;
		$JSON = new Services_JSON();
		$datosenvio = $JSON->decode($json_direccion);  //jsonb = envio
		$datosdesign = $JSON->decode($json_design); // jsona = design details

    

	mysql_query("INSERT INTO cpapp_pedidos (`fecha`, `hora`,  `producto`, `cantidad`, `custominfo`, `nombre`, `apellidos`, `tlf`, `direccion`, `cp`,`ciudad`,`provincia`, `pais`) VALUES ('".Date("Y-m-d")."', '".Date("H:i:s")."', 'productoid', '".$datosenvio->cantidad."', '".$json_design."', '".$datosenvio->nombre."', '".$datosenvio->apellidos."', '".$datosenvio->email."', '".$datosenvio->direccion." ".$datosenvio->direccion2."', '".$datosenvio->cp."', '".$datosenvio->ciudad."', '".$datosenvio->provincia."','".$datosenvio->pais."')",$link);
	//mail("contacto@phpninja.info","pedido custom tee", "Has recibido un pedido");


}