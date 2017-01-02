var index = (CSS_DIR, JS_DIR) => {
	//不使用*而手动定义资源加载顺序
	var css = [
			CSS_DIR + "/animate.min.css",
			CSS_DIR + "/style.css"
		],
		js = [
			//JS_DIR + "/main.js",
			JS_DIR + "/index.js"
		];
	return {
		css,
		js
	};
};
module.exports = index;