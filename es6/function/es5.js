/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function log(x) {
	    var y = arguments.length <= 1 || arguments[1] === undefined ? 'world' : arguments[1];

	    console.log(x, y);
	}
	log('hello');

	function m1() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var _ref$x = _ref.x;
	    var x = _ref$x === undefined ? 0 : _ref$x;
	    var _ref$y = _ref.y;
	    var y = _ref$y === undefined ? 0 : _ref$y;

	    console.log(x, y);
	}

	function m2() {
	    var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? { x: 0, y: 0 } : arguments[0];

	    var x = _ref2.x;
	    var y = _ref2.y;

	    console.log(x, y);
	}
	m1();
	m2();
	m1({});
	m2({});

	function throwIfMissing() {
	    throw new Error('Missing parameter');
	}

	function foo() {
	    var mustBeProvided = arguments.length <= 0 || arguments[0] === undefined ? throwIfMissing() : arguments[0];

	    return mustBeProvided;
	}
	// foo();

	var sortNumbers = function sortNumbers() {
	    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
	        numbers[_key] = arguments[_key];
	    }

	    return numbers.sort();
	};
	console.log(sortNumbers(2, 5, 3, 1));

	console.log(Math.max.apply(Math, [1, 20, 90, 60]));

	function length(str) {
	    return [].concat(_toConsumableArray(str)).length;
	}

/***/ }
/******/ ]);