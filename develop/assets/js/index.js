(function (global) {
  var babelHelpers = global.babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers.extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  babelHelpers.get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  babelHelpers.slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  babelHelpers.toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };
})(typeof global === "undefined" ? self : global);
'use strict';

var setData = function setData(data) {
	var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#text1';
	return document.querySelector(id).innerText = data;
};

var ac = 'test';
var data = 211;
var b = {
	ac: ac,
	data: data
};

setData(JSON.stringify(b));
var a = new Array(9).fill('🚀');
setData(JSON.stringify(a), '#text2');

var sum = function sum(num1, num2) {
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

babelHelpers.extends(target, source1, source2);

setData(JSON.stringify(target), '#text3');

var keys = Object.keys,
    values = Object.values,
    entries = Object.entries;

var obj = {
	a: 1,
	b: 2,
	c: 3
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var key = _step.value;

		console.log(key); // 'a', 'b', 'c'
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = values(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var value = _step2.value;

		console.log(value); // 1, 2, 3
	}
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
	for (var _iterator3 = entries(obj)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		var _step3$value = babelHelpers.slicedToArray(_step3.value, 2),
		    _key = _step3$value[0],
		    _value = _step3$value[1];

		console.log([_key, _value]); // ['a', 1], ['b', 2], ['c', 3]
	}
} catch (err) {
	_didIteratorError3 = true;
	_iteratorError3 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion3 && _iterator3.return) {
			_iterator3.return();
		}
	} finally {
		if (_didIteratorError3) {
			throw _iteratorError3;
		}
	}
}

var _x$y$a$b = {
	x: 1,
	y: 2,
	a: 3,
	b: 4
},
    x = _x$y$a$b.x,
    y = _x$y$a$b.y,
    z = babelHelpers.objectWithoutProperties(_x$y$a$b, ['x', 'y']);

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

[2, 3, 5, 4, 5, 2, 2].map(function (x) {
	return s.add(x);
});

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
	for (var _iterator4 = s[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
		var i = _step4.value;

		console.log(i);
	}
} catch (err) {
	_didIteratorError4 = true;
	_iteratorError4 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion4 && _iterator4.return) {
			_iterator4.return();
		}
	} finally {
		if (_didIteratorError4) {
			throw _iteratorError4;
		}
	}
}

var array = [2, 3, 5, 4, 5, 2, 2];
console.log([].concat(babelHelpers.toConsumableArray(new Set(array))));

var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
	for (var _iterator5 = engines[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
		var e = _step5.value;

		console.log(e);
	}
} catch (err) {
	_didIteratorError5 = true;
	_iteratorError5 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion5 && _iterator5.return) {
			_iterator5.return();
		}
	} finally {
		if (_didIteratorError5) {
			throw _iteratorError5;
		}
	}
}

var es6 = {
	edition: 6,
	committee: "TC39",
	standard: "ECMA-262"
};

for (var _e in es6) {
	console.log(_e);
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
var promise = new Promise(function (resolve, reject) {
	console.log('Promise');
	resolve();
});

promise.then(function () {
	console.log('成功的回调函数');
});

console.log('Hi!');

var getJSON = function getJSON(url) {
	var promise = new Promise(function (resolve, reject) {
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

getJSON("./assets/package.json").then(function (json) {
	console.log(json);
}, function (error) {
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


getJSON('./assets/package.json').then(function (post) {
	console.table(post);
	return getJSON('./assets/packages.json');
}).then(function (comments) {
	return console.log(comments);
}).catch(function (err) {
	return console.error('错误:', err);
});

var someAsyncThing = function someAsyncThing() {
	return new Promise(function (resolve, reject) {
		// 下面一行会报错，因为x没有声明
		resolve(x + 2);
	});
};
someAsyncThing().then(function () {
	return someOtherAsyncThing();
}).catch(function (error) {
	console.error('oh no', error);
	// 下面一行会报错，因为y没有声明
	//yfd + 2;
}).catch(function (error) {
	console.error('carry on', error);
});

var p = Promise.race([fetch('./assets/package.json'), new Promise(function (resolve, reject) {
	setTimeout(function () {
		return reject(new Error('request timeout'));
	}, 5000);
})]);
p.then(function (response) {
	return console.log(response);
});
p.catch(function (error) {
	return console.log(error);
});

fetch('./assets/package.json').then(function (response) {
	return response.json();
}).then(function (data) {
	console.log(data);
}).catch(function (e) {
	console.error(e);
});

var p = Promise.resolve('Hello');

p.then(function (s) {
	console.log(s);
});

//产生一个随机数
var num = Math.random();
console.log('your num is ' + num);

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

var Point = function () {
	function Point(x, y) {
		babelHelpers.classCallCheck(this, Point);

		this.x = x;
		this.y = y;
	}

	// methods


	babelHelpers.createClass(Point, [{
		key: 'toString',
		value: function toString() {
			return '(' + this.x + ',' + this.y + ')';
		}
	}, {
		key: 'toValue',
		value: function toValue() {
			return this.x * this.y;
		}
	}]);
	return Point;
}();

var p = new Point(2, 3);
console.log(p.toString());

babelHelpers.extends(Point.prototype, {
	getArea: function getArea() {
		return this.x * this.y * 0.5;
	}
});

var ColorPoint = function (_Point) {
	babelHelpers.inherits(ColorPoint, _Point);

	function ColorPoint(x, y, color) {
		babelHelpers.classCallCheck(this, ColorPoint);

		var _this = babelHelpers.possibleConstructorReturn(this, (ColorPoint.__proto__ || Object.getPrototypeOf(ColorPoint)).call(this, x, y));

		_this.color = color;
		return _this;
	}

	babelHelpers.createClass(ColorPoint, [{
		key: 'toString',
		value: function toString() {
			return this.color + ' ' + babelHelpers.get(ColorPoint.prototype.__proto__ || Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this);
		}
	}]);
	return ColorPoint;
}(Point);

var cp = new ColorPoint(2, 5, 'red');
console.log(cp.toString());

// import * as app from './index/main';

// console.log(app.firstName);
// console.log(app.lastName);