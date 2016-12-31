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
			area = .5 * options.width * options.height;
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

var p1 = new Promise(function(resolve, reject) {
	setTimeout(() => reject(new Error('fail')), 2000);
});

var p2 = new Promise(function(resolve, reject) {
	setTimeout(() => resolve(p1), 1000);
});

p2.then(result => console.log(result))
	.catch(error => console.log(error));