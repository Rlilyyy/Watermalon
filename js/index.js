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

	// 
	(function() {
		var xhr = new XMLHttpRequest();
		xhr.onload = function(){
			alert(JSON.parse(xhr.responseText));
		};
		xhr.open('GET', 'http://localhost/Watermalon/index.php', true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send();
		
	})();
})();

function getData() {

}

getData.prototype = {
	constructor: getData,
	get: function(url, type, callback) {
		
	}
}