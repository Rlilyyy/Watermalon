(function() {

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