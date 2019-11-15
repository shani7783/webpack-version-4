/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/bigImg.jpg":
/*!***************************!*\
  !*** ./assets/bigImg.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d34974bd56db8ab0c5d0f7159531dbc2.jpg\";\n\n//# sourceURL=webpack:///./assets/bigImg.jpg?");

/***/ }),

/***/ "./assets/small.jpg":
/*!**************************!*\
  !*** ./assets/small.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/jpeg;base64,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\"\n\n//# sourceURL=webpack:///./assets/small.jpg?");

/***/ }),

/***/ "./src/img_dipslayer.css":
/*!*******************************!*\
  !*** ./src/img_dipslayer.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/img_dipslayer.css?");

/***/ }),

/***/ "./src/img_dipslayer.js":
/*!******************************!*\
  !*** ./src/img_dipslayer.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_bigImg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/bigImg.jpg */ \"./assets/bigImg.jpg\");\n/* harmony import */ var _assets_bigImg_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_bigImg_jpg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_small_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/small.jpg */ \"./assets/small.jpg\");\n/* harmony import */ var _assets_small_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_small_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_dipslayer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img_dipslayer.css */ \"./src/img_dipslayer.css\");\n/* harmony import */ var _img_dipslayer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_dipslayer_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst image = document.createElement(\"img\"); //img.src = \"https://picsum.photos/200/300\";\n\nimage.src = _assets_small_jpg__WEBPACK_IMPORTED_MODULE_1___default.a;\nconst img2 = document.createElement(\"img\");\nimg2.src = _assets_bigImg_jpg__WEBPACK_IMPORTED_MODULE_0___default.a;\ndocument.body.appendChild(image);\ndocument.body.appendChild(img2);\n\n//# sourceURL=webpack:///./src/img_dipslayer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sum */ \"./src/sum.js\");\n/* harmony import */ var _squre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squre */ \"./src/squre.js\");\n/* harmony import */ var _img_dipslayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img_dipslayer */ \"./src/img_dipslayer.js\");\n\n\n\nconsole.log(Object(_sum__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, 5));\nconsole.log(Object(_squre__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(5));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/squre.js":
/*!**********************!*\
  !*** ./src/squre.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sqrt = x => x * x;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sqrt);\n\n//# sourceURL=webpack:///./src/squre.js?");

/***/ }),

/***/ "./src/sum.js":
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sum = (x, y) => x + y;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sum);\n\n//# sourceURL=webpack:///./src/sum.js?");

/***/ })

/******/ });