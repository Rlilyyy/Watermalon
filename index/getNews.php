<?php
	$id = $_GET['id'];
	$url = 'http://news-at.zhihu.com/api/4/news/' . $id;
	// 获取数据
	$data = file_get_contents($url);
	// 将获取到的数据转换为数组
	$arr = json_decode($data,true); //后面加true转换为数组

	$url2 = $arr['css'][0];
	// 获取css文件
	$css = file_get_contents($url2);
	// 为了让手机显示正常加的meta
	$meta = '<meta charset="utf-8"><meta name="format-detection" content="telephone=no,email=no"><meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"><meta name="full-screen" conten="yes">';
	// 将headline的div隐藏
	$headline = '.headline {' . 'display:none;}';
	// 将要显示的html文本
	$html = $meta . '<style>' . $headline . $css . '</style>' . '<body>' . $arr['body'] . '</body>';
	// 将所有图片的链接地址转换为经过后台处理的地址
	$reg = '/[\'"](http.*?)(jpg|png)[\'"]/';
	echo preg_replace($reg,"http://localhost/Watermalon/index/getImage.php?id=$1$2",$html);
?>