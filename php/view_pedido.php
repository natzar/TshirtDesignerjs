<?
error_reporting(E_ALL);
ini_set('display_errors', '1');

include "functions.php";
include_once "JSON.php";

//savePedido($_POST['jsona']);

$JSON = new Services_JSON();
$custom2 = $JSON->decode($_POST['jsonb']);
$custom = $JSON->decode($_POST['jsona']);




echo '<pre>';
//print_r($custom);
print_r($custom2);
echo '<hr>';
print_r($custom);
echo '</pre>';

	echo '<div id="resultado" style="text-align:center;position:relative;width: 480px;height: 440px;overflow:hidden;border:1px solid black;">';
	echo '<img id="background1" style="" src="/'.$custom->productImage_Front.'">';
	
	for ($i = 0; $i < count($custom->frontTexts);$i++){
		echo '<div style="position:absolute;top:'.$custom->frontTexts[$i]->top.'; left:'.$custom->frontTexts[$i]->left.' ;width:'.$custom->frontTexts[$i]->width.' ;height: '.$custom->frontTexts[$i]->height.';font-size:'.$custom->frontTexts[$i]->fontsize.' ;font-family:'.$custom->frontTexts[$i]->fontfamily.' ;color:'.$custom->frontTexts[$i]->color.' ;">';
		echo $custom->frontTexts[$i]->text;
		echo '</div>';
	}
	
	for ($i = 0; $i < count($custom->frontImgs);$i++){
		echo '<img style="position:absolute;top:'.$custom->frontImgs[$i]->top.';left:'.$custom->frontImgs[$i]->left.';width:'.$custom->frontImgs[$i]->width.';height:'.$custom->frontImgs[$i]->height.';" src="'.$custom->frontImgs[$i]->src.'">'; 
	}
	echo '</div>';



