# Watermalon<br>为轻松阅读而生
# 接口不完整了，所以选择放弃
## 声明
#### Watermalon所使用的接口均由 知乎（Zhihu.Inc） 提供，由他人获取并共享，同时该项目仅做个人学习用途，不做商业用途，若被告知需停止共享与使用，本人会及时删除此页面与整个项目。请您暸解相关情况，并遵守知乎协议。

### 1.为XMLHttpRequest写的`httpbingo.js`
<br>
#### `httpbingo.js`是为了更方便地使用XMLHttpRequest而写的JS函数，调用方法如下：

```js
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
```

#### Warning!!!

* `$.init()`必须在开头调用，否则无法返回一个正确的Object
* `start()`必须在最后调用，否则可能会忽略在start()之后的调用的函数设置的数据
* `setTarget(type, url)`用于设置连接方法与连接url地址，默认方法为GET
* `setAsync(isAsync)(未完善)`用于设置是否异步传输，默认为true
* `setData(data)`用于设置传输给连接的数据
* `success(callbackFun)`用于设置连接成功后的回调函数，如果如此写`callbackFun(data)`，那么data就是获取到的数据
* `error(callbackFun)(未完善)`用于设置连接出错后的回调函数
