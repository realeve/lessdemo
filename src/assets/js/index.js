const setData = ((
	data,
	id = '#text1'
) => document.querySelector(id).innerText = data);

var ac = 'test';
var data = 211;
var b = {
	ac,
	data
};

setData(JSON.stringify(b));
const a = new Array(9).fill('🚀');
setData(JSON.stringify(a), '#text2');

var sum = (num1, num2) => {
	num1 = num1 * 2;
	return num1 + num2;
};

var target = {
	a: 1
};

var source1 = {
	b: 2
};
var source2 = {
	c: 3
};

Object.assign(target, source1, source2);

setData(JSON.stringify(target), '#text3');

let {
	keys,
	values,
	entries
} = Object;
let obj = {
	a: 1,
	b: 2,
	c: 3
};

for (let key of keys(obj)) {
	console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj)) {
	console.log(value); // 1, 2, 3
}

for (let [key, value] of entries(obj)) {
	console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}
let {
	x,
	y,
	...z
} = {
	x: 1,
	y: 2,
	a: 3,
	b: 4
};
var shapeType = {
	triangle: Symbol()
};

function getArea(shape, options) {
	var area = 0;
	switch (shape) {
		case shapeType.triangle:
			area = 0.5 * options.width * options.height;
			break;
	}
	return area;
}

getArea(shapeType.triangle, {
	width: 100,
	height: 100
});
var s = new Set();

[2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));

for (let i of s) {
	console.log(i);
}
var array = [2, 3, 5, 4, 5, 2, 2];
console.log([...new Set(array)]);

var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
	console.log(e);
}

var es6 = {
	edition: 6,
	committee: "TC39",
	standard: "ECMA-262"
};

for (let e in es6) {
	console.log(e);
}

//需使用browserify加载
// var myIterable = {};
// myIterable[Symbol.iterator] = function*() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// };
// console.log([...myIterable]);

var test = 3234;
console.log(test);

//Promise 实例
let promise = new Promise(function(resolve, reject) {
	console.log('Promise');
	resolve();
});

promise.then(function() {
	console.log('成功的回调函数');
});

console.log('Hi!');

var getJSON = function(url) {
	var promise = new Promise(function(resolve, reject) {
		var client = new XMLHttpRequest();
		client.open("GET", url);
		client.onreadystatechange = handler;
		client.responseType = "json";
		client.setRequestHeader("Accept", "application/json");
		client.send();

		function handler() {
			if (this.readyState !== 4) {
				return;
			}
			if (this.status == 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		}
	});
	return promise;
};

getJSON("./assets/package.json")
	.then(function(json) {
		console.log(json);
	}, function(error) {
		console.error(error);
	});

// var p1 = new Promise(function(resolve, reject) {
// 	setTimeout(() => reject(new Error('fail')), 2000);
// });

// var p2 = new Promise(function(resolve, reject) {
// 	setTimeout(() => resolve(p1), 1000);
// });

// p2.then(result => console.log(result))
// 	.catch(error => console.log(error));


getJSON('./assets/package.json')
	.then(post => {
		console.table(post);
		return getJSON('./assets/packages.json');
	})
	.then(
		comments => console.log(comments)
	).catch(
		err => console.error('错误:', err)
	);

var someAsyncThing = function() {
	return new Promise(function(resolve, reject) {
		// 下面一行会报错，因为x没有声明
		resolve(x + 2);
	});
};
someAsyncThing().then(function() {
	return someOtherAsyncThing();
}).catch(function(error) {
	console.error('oh no', error);
	// 下面一行会报错，因为y没有声明
	//yfd + 2;
}).catch(function(error) {
	console.error('carry on', error);
});

var p = Promise.race([
	fetch('./assets/package.json'),
	new Promise(function(resolve, reject) {
		setTimeout(() => reject(new Error('request timeout')), 5000);
	})
]);
p.then(response => console.log(response));
p.catch(error => console.log(error));

fetch('./assets/package.json').then(response => {
	return response.json();
}).then(function(data) {
	console.log(data);
}).catch(function(e) {
	console.error(e);
});

var p = Promise.resolve('Hello');

p.then(function(s) {
	console.log(s);
});

//产生一个随机数
var num = Math.random();
console.log(`your num is ${num}`);

//async异步处理
// async function f() {
// 	return 'hello world,this is async';
// }

// f().then(v => console.log(v));

// async function f() {
// 	throw new Error('出错了');
// }

// f().then(
// 	v => console.log(v),
// 	e => console.warn(e)
// )

// async function getTitle(url) {
// 	let response = await fetch(url);
// 	let html = await response.text();
// 	return html.match(/<title>([\s\S]+)<\/title>/i)[1];
// }
// getTitle('https://tc39.github.io/ecma262/').then(console.log);
// console.warn('这里会先执行');

// async function f() {
// 	return await 123;
// }

// f().then(v => console.log(v));

// async function f() {
// 	await Promise.reject('出错了1')
// 		.catch(e => console.log(e));
// 	return await Promise.resolve('hello world');
// }

// f()
// 	.then(v => console.log(v));

// async function chainAnimationsAsync(elem, animations) {
// 	var ret = null;
// 	try {
// 		for (var anim of animations) {
// 			ret = await anim(elem);
// 		}
// 	} catch (e) {

// 	}
// 	return ret;
// }

// function Point(x, y) {
// 	this.x = x;
// 	this.y = y;
// }

// Point.prototype.toString = function() {
// 	return '(' + this.x + ',' + this.y + ')';
// };

// var p = new Point(2, 3);
// console.log(p.toString());

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	// methods
	toString() {
		return '(' + this.x + ',' + this.y + ')';
	}

	toValue() {
		return this.x * this.y;
	}
}
var p = new Point(2, 3);
console.log(p.toString());

Object.assign(Point.prototype, {
	getArea() {
		return this.x * this.y * 0.5;
	}
});

class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y);
		this.color = color;
	}

	toString() {
		return this.color + ' ' + super.toString();
	}
}

let cp = new ColorPoint(2, 5, 'red');
console.log(cp.toString());

// import * as app from './index/main';

// console.log(app.firstName);
// console.log(app.lastName);