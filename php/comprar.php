<?
error_reporting(E_ALL);
ini_set('display_errors', '1');

include "functions.php";
include_once "JSON.php";

savePedido($_POST['jsona']);

$return_url = $_POST['returnUrl'];

header("location: ".$return_url);