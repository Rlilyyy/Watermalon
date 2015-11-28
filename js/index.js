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

$.init()
	.setTarget("GET", "http://localhost/Watermalon/index.php")
		.setAsync(true)
			.setData("")
				.success(function(data) {

					data = JSON.parse(data);

					var elem = document.getElementById("start");

					elem.style.backgroundImage = "url('" + data.img + "')";

				})
				.start();