(function (global) {
  var babelHelpers = global.babelHelpers = {};

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

  babelHelpers.objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
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
'use strict';

var getRootPath2 = function getRootPath2(t) {
  //获取当前网址
  var curWwwPath = window.document.location.href;
  //获取主机地址之后的目录，如： /ems/Pages/Basic/Person.jsp
  var pathName = window.document.location.pathname;
  var pos = curWwwPath.indexOf(pathName);
  //获取主机地址，如： http://localhost:8080
  var localhostPath = curWwwPath.substring(0, pos);
  //获取带"/"的项目名，如：/ems
  var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
  if (t === 0) {
    return localhostPath + projectName;
  } else {
    return localhostPath;
  }
};