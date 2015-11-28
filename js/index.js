;(function() {
	// 2000ms后隐藏引导页
	(function hideGuide() {
		setTimeout(function() {
			var elem = document.getElementById("start");
			elem.className += " close";

			elem.addEventListener(
				"transitionend" || "webkitTransitionEnd" || "mozTransitionEnd" || "oTransitionEnd",
				function() {
					this.style.display = "none";
				},
				false
			);

			elem = null;
		}, 2000);
	})();
	
})();

// 接口地址命名空间
var Connection = {
	GUIDE: "http://localhost/Watermalon/index/guide.php",
	LATEST: "http://localhost/Watermalon/index/latest.php"
}