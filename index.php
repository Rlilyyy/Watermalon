<?php
	$url = 'http://news-at.zhihu.com/api/4/start-image/1080*1776';
	$data = file_get_contents($url);
	echo $data;
?>