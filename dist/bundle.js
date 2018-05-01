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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");

__webpack_require__(/*! ./js/init.js */ "./src/js/init.js");

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
  function Canvas(elem) {
    _classCallCheck(this, Canvas);

    this.canvas = elem;
    this.ctx = elem.getContext('2d'); // context
    this.height = elem.height; // height
    this.width = elem.width; // width
    this.gravity = 0.4; // gravity
    this.factor = 0.5; // velocity reduction
    this.radius = 4; // ball radius
    this.color = "#000"; // ball colour
    this.balls = []; // array of the balls

    this._init();
  }

  _createClass(Canvas, [{
    key: '_init',
    value: function _init() {
      var _this = this;

      // timer
      setInterval(function () {
        return _this._update();
      }, 1000 / 60);
      this._clickHandler();
    }
  }, {
    key: 'ballInit',
    value: function ballInit(x, y) {
      this.addBall({
        x: x,
        y: y,
        vx: this._random(-4, 4),
        vy: this._random(-10, -4)
      });
    }
  }, {
    key: '_clickHandler',
    value: function _clickHandler() {
      var _this2 = this;

      this.canvas.addEventListener('click', function (event) {
        _this2.ballInit(event.offsetX, event.offsetY);
      }, false);
    }

    // calculate the next position of the ball

  }, {
    key: '_calc',
    value: function _calc(i) {
      var _balls$i = this.balls[i],
          x = _balls$i.x,
          y = _balls$i.y,
          vx = _balls$i.vx,
          vy = _balls$i.vy;


      vy += this.gravity;
      x += vx;
      y += vy;

      // top or bottom border
      if (y < 0 + this.radius) {
        vy *= -this.factor;
        y = 0 + this.radius;
      } else if (y > this.height - this.radius) {
        vy *= -this.factor;
        vx *= this.factor;
        y = this.height - this.radius;
      }

      // left or right border
      if (x < 0 + this.radius) {
        vx *= -this.factor;
        x = 0 + this.radius;
      } else if (x > this.width - this.radius) {
        vx *= -this.factor;
        x = this.width - this.radius;
      }

      this.balls[i] = { x: x, y: y, vx: vx, vy: vy };
      return { x: x, y: y };
    }
  }, {
    key: '_update',
    value: function _update() {
      var _this3 = this;

      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = this.color;
      this.balls.forEach(function (ball, i) {
        var _calc2 = _this3._calc(i),
            x = _calc2.x,
            y = _calc2.y;

        _this3.ctx.beginPath();
        _this3.ctx.arc(x, y, _this3.radius, 0, 2 * Math.PI, true);
        _this3.ctx.fill();
      });
    }
  }, {
    key: '_random',
    value: function _random(min, max) {
      return Math.random() * (max - min + 1) + min;
    }

    // clear balls array

  }, {
    key: 'removeBalls',
    value: function removeBalls() {
      this.balls = [];
    }

    // add a new ball

  }, {
    key: 'addBall',
    value: function addBall(data) {
      this.balls.push(data);
    }
  }]);

  return Canvas;
}();

exports.default = Canvas;

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _canvas = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");

var _canvas2 = _interopRequireDefault(_canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// add all the logic to the class
var random = function random(min, max) {
  return Math.random() * (max - min + 1) + min;
};

var ball = function ball(x, y) {
  var data = {
    x: x,
    y: y,
    vx: random(-4, 4),
    vy: random(-10, -4)
  };

  window.Canvas.addBall(data);
};

window.Canvas = new _canvas2.default(document.getElementById('canvas'));

// canvas.addEventListener('click', event => {
//   ball(event.offsetX, event.offsetY);
// }, false);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map