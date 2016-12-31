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