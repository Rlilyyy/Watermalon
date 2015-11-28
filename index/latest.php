<?php 
	$url = 'http://news-at.zhihu.com/api/4/news/latest';
	$data = file_get_contents($url);
	echo $data;
?>