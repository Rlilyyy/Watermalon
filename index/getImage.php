<?php 
	$url = $_GET['id'];
	$data = file_get_contents($url);
	echo $data;
?>