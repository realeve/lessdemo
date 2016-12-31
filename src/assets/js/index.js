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
setData(sum(3, 5), '#text3');