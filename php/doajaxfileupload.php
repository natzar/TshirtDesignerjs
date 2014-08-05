<?php
echo getcwd();
	$error = "";
	$msg = "";
	$filename = "";
	$fileElementName = 'fileToUpload';
	if(!empty($_FILES[$fileElementName]['error']))
	{
		switch($_FILES[$fileElementName]['error'])
		{

			case '1':
				$error = 'The uploaded file exceeds the upload_max_filesize directive in php.ini';
				break;
			case '2':
				$error = 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form';
				break;
			case '3':
				$error = 'The uploaded file was only partially uploaded';
				break;
			case '4':
				$error = 'No file was uploaded.';
				break;

			case '6':
				$error = 'Missing a temporary folder';
				break;
			case '7':
				$error = 'Failed to write file to disk';
				break;
			case '8':
				$error = 'File upload stopped by extension';
				break;
			case '999':
			default:
				$error = 'No error code avaiable';
		}
	}elseif(empty($_FILES['fileToUpload']['tmp_name']) || $_FILES['fileToUpload']['tmp_name'] == 'none')
	{
		$error = 'No file was uploaded..';
	}else if (copy($_FILES['fileToUpload']['tmp_name'],dirname(__FILE__)."/../../../data/tempx/".$_FILES['fileToUpload']['name']) )
	{
		//	$error = 0;
			$msg .= " File Name: " . $_FILES['fileToUpload']['name'] . ", ";
			$msg .= " File Size: " . @filesize($_FILES['fileToUpload']['tmp_name']);
			$filename =  $_FILES['fileToUpload']['name'];
			
			//for security reason, we force to remove all uploaded file
			@unlink($_FILES['fileToUpload']);		
	}		else {
	
		$error="no se puede copiar";
	}
	echo "{";
	echo				"error: '" . $error . "',";
	echo				"msg: '" . $msg . "',";
	echo				"filename: '" . trim($filename) . "'";
	echo "}";

?>