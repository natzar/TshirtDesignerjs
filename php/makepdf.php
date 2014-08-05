<?php
//$tmpfile = tempnam("/home/utopic/phpninja.info/tshirts/customAPP/php/dompdf/tmp", "dompdf_");
//require '../vendor/autoload.php';
define('DOMPDF_ENABLE_AUTOLOAD', false);
require_once(dirname(__FILE__)."/dompdf/dompdf_config.inc.php");

$html = '<html>
<head>	<base href="http://www.phpninja.info/tshirts/"></base>			<link href="customAPP/css/master.css" rel="stylesheet" type="text/css" />			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><style></head><body><div id="custom">';

$html .= $_GET['html'];
$html .= '</div></body></html>';


$dompdf = new DOMPDF();
$dompdf->set_base_path (dirname(__FILE__).'/../temp/');
//$dompdf->set_paper('a4');
$dompdf->load_html($html);
$dompdf->render();
$dompdf->stream("sample.pdf");
?>