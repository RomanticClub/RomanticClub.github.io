(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"game\" *ngIf=\"isGameStarted\">\r\n  <div></div>\r\n  <app-question></app-question>\r\n</div>\r\n<div class=\"start-page\" *ngIf=\"!isGameStarted\">\r\n  <div class=\"start-page__title\">\r\n    <h1>Продолжение истории...</h1>\r\n  </div>\r\n  <div class=\"start-page__start-button\" (click)=\"isGameStarted = true\">\r\n    Начать\r\n  </div>\r\n  <div class=\"start-page__heart\">\r\n    <img src=\"../assets/img/heart.png\" alt=\"\">\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question/question.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/question.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"quest-answer\" [ngStyle]=\"{'background-image': 'url(' + currentBg + ')'}\">\n  <div class=\"quest-answer__text-block\" *ngIf=\"questionsService.currentStep.text && !questionsService.answersHidden\" [@inOutAnimation]>\n    <div class=\"text-block__text\">\n    </div>\n  </div>\n  <div class=\"question\" *ngIf=\"questionsService.currentStep.question && !questionsService.answersHidden\" [@inOutAnimation]>\n    <div class=\"question__text\">\n    </div>\n  </div>\n\n  <div class=\"answer__text__hidden-block\" *ngIf=\"!questionsService.currentStep.answer1\" (click)=\"nextStep(1)\"></div>\n\n  <div class=\"answers\" *ngIf=\"!questionsService.answersHidden\" [@inOutAnimation]>\n    <div class=\"answer__article\" (click)=\"nextStep(1)\" *ngIf=\"questionsService.currentStep.answer1\">\n      {{questionsService.currentStep.answer1}}\n    </div>\n    <div class=\"answer__article\" (click)=\"nextStep(2)\" *ngIf=\"questionsService.currentStep.answer2\">\n      {{questionsService.currentStep.answer2}}\n    </div>\n    <div class=\"answer__article\" (click)=\"nextStep(3)\" *ngIf=\"questionsService.currentStep.answer3\">\n      {{questionsService.currentStep.answer3}}\n    </div>\n    <div class=\"answer__article\" (click)=\"nextStep(4)\" *ngIf=\"questionsService.currentStep.answer4\">\n      {{questionsService.currentStep.answer4}}\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".game {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: black;\r\n  overflow: hidden;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  padding-bottom: 50px;\r\n  box-sizing: border-box;\r\n}\r\n.start-page {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-image: url('start-bg.png');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  font-family: Caveat;\r\n  color: #656b83;\r\n  padding: 20px 0 50px;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.start-page__title h1 {\r\n  margin: 0;\r\n  font-size: 36px;\r\n  text-align: center;\r\n}\r\n.start-page__start-button {\r\n  background-color: #656b83;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  font-size: 36px;\r\n  padding: 5px 65px;\r\n  border-radius: 15px;\r\n  color: #d2d8ee;\r\n}\r\n.start-page__heart {\r\n  width: 80px;\r\n  height: auto;\r\n  position: absolute;\r\n  right: 10%;\r\n  top: 120px;\r\n  -webkit-animation: pulse 2s infinite;\r\n          animation: pulse 2s infinite;\r\n}\r\n.start-page__heart img {\r\n  width: 100%;\r\n}\r\n@-webkit-keyframes pulse {\r\n  0% {\r\n    transform: scale(1) rotate(-10deg);\r\n  }\r\n  50% {\r\n    transform: scale(1.2) rotate(-10deg);\r\n  }\r\n  100% {\r\n    transform: scale(1) rotate(-10deg);\r\n  }\r\n}\r\n@keyframes pulse {\r\n  0% {\r\n    transform: scale(1) rotate(-10deg);\r\n  }\r\n  50% {\r\n    transform: scale(1.2) rotate(-10deg);\r\n  }\r\n  100% {\r\n    transform: scale(1) rotate(-10deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixxQ0FBbUQ7RUFDbkQsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixvQ0FBNEI7VUFBNUIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztBQUNGO0FBVkE7RUFDRTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5zdGFydC1wYWdlIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWcvc3RhcnQtYmcucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQ2F2ZWF0O1xyXG4gIGNvbG9yOiAjNjU2YjgzO1xyXG4gIHBhZGRpbmc6IDIwcHggMCA1MHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnN0YXJ0LXBhZ2VfX3RpdGxlIGgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3RhcnQtcGFnZV9fc3RhcnQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU2YjgzO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgcGFkZGluZzogNXB4IDY1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBjb2xvcjogI2QyZDhlZTtcclxufVxyXG4uc3RhcnQtcGFnZV9faGVhcnQge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwJTtcclxuICB0b3A6IDEyMHB4O1xyXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XHJcbn1cclxuLnN0YXJ0LXBhZ2VfX2hlYXJ0IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKC0xMGRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMikgcm90YXRlKC0xMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoLTEwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'romatic2';
        this.isGameStarted = false;
        this.images = new Array();
    }
    preload(array) {
        for (let i = 0; i < array.length; i++) {
            this.images[i] = new Image();
            this.images[i].src = array[i];
        }
    }
    ngOnInit() {
        this.preload(['../assets/img/question.png', '../assets/img/heart.png',
            '../assets/img/start-bg.png', '../assets/img/text.png',
            '../assets/img/home.png', '../assets/img/home-mom.png',
            '../assets/img/metro.png', '../assets/img/metro-bad.png', '../assets/img/metro-badoo-1.png', '../assets/img/metro-badoo-2.png', '../assets/img/metro-badoo-3.png', '../assets/img/metro-nasty.png',
            '../assets/img/office.png', '../assets/img/office-friend.png',
            '../assets/img/end-bad.png'
        ]);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _question_question_component__WEBPACK_IMPORTED_MODULE_4__["QuestionComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".quest-answer {\r\n  position: relative;\r\n  height: 100vh;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n.quest-answer__text-block {\r\n  width: 80%;\r\n  height: 80%;\r\n  background-image: url('text.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  position: absolute;\r\n  top: 20px;\r\n  left: 10%;\r\n}\r\n.text-block__text {\r\n  width: 70%;\r\n  height: 15%;\r\n  display: flex;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 68px;\r\n  left: 13%;\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n  font-family: Caveat;\r\n}\r\n.question {\r\n  width: 90%;\r\n  height: 80%;\r\n  background-image: url('question.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  position: absolute;\r\n  top: 35%;\r\n  left: 6%;\r\n}\r\n.question__text {\r\n  position: absolute;\r\n  top: 50px;\r\n  width: 80%;\r\n  left: 10%;\r\n  color: #ffffff;\r\n  font-size: 18px;\r\n  font-family: Caveat;\r\n}\r\n.answers {\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  width: 80%;\r\n  left: 10%;\r\n  font-family: Caveat;\r\n  position: absolute;\r\n  bottom: 60px;\r\n}\r\n.answer__article {\r\n  background-color: #d67575;\r\n  padding: 8px 5px;\r\n  border-radius: 10px;\r\n  margin-top: 15px;\r\n  text-align: center;\r\n  /*box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.7);*/\r\n}\r\n.answer__article:first-child {\r\n  margin-top: 30px;\r\n}\r\n.answer__text__hidden-block {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  position: absolute;\r\n}\r\n.typed-cursor {\r\n  opacity: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQ0FBa0Q7RUFDbEQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHFDQUFzRDtFQUN0RCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtBQUNWO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3QtYW5zd2VyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4ucXVlc3QtYW5zd2VyX190ZXh0LWJsb2NrIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy90ZXh0LnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgbGVmdDogMTAlO1xyXG59XHJcbi50ZXh0LWJsb2NrX190ZXh0IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogMTUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2OHB4O1xyXG4gIGxlZnQ6IDEzJTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6IENhdmVhdDtcclxufVxyXG4ucXVlc3Rpb24ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL3F1ZXN0aW9uLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM1JTtcclxuICBsZWZ0OiA2JTtcclxufVxyXG4ucXVlc3Rpb25fX3RleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBDYXZlYXQ7XHJcbn1cclxuLmFuc3dlcnMge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGxlZnQ6IDEwJTtcclxuICBmb250LWZhbWlseTogQ2F2ZWF0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDYwcHg7XHJcbn1cclxuLmFuc3dlcl9fYXJ0aWNsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NzU3NTtcclxuICBwYWRkaW5nOiA4cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLypib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMCwwLDAsMC43KTsqL1xyXG59XHJcbi5hbnN3ZXJfX2FydGljbGU6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmFuc3dlcl9fdGV4dF9faGlkZGVuLWJsb2NrIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnR5cGVkLWN1cnNvciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/questions.service */ "./src/app/service/questions.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_4__);





let QuestionComponent = class QuestionComponent {
    constructor(questionsService) {
        this.questionsService = questionsService;
        this.currentBg = '../../assets/img/home.png';
    }
    ngOnInit() {
        if (this.questionsService.currentStep.text) {
            setTimeout(() => {
                const typed = new typed_js__WEBPACK_IMPORTED_MODULE_4___default.a('.text-block__text', {
                    strings: [this.questionsService.currentStep.text],
                    typeSpeed: 30,
                    showCursor: false
                });
            }, 600);
        }
        else if (this.questionsService.currentStep.question) {
            setTimeout(() => {
                const typed = new typed_js__WEBPACK_IMPORTED_MODULE_4___default.a('.question__text', {
                    strings: [this.questionsService.currentStep.question],
                    typeSpeed: 30,
                    showCursor: false
                });
            }, 600);
        }
    }
    nextStep(answer) {
        if (!this.questionsService.currentStep['next' + answer].text && !this.questionsService.currentStep['next' + answer].question && !this.questionsService.currentStep['next' + answer].bg && this.questionsService.currentStep['next' + answer].includes('scene')) {
            this.questionsService.currentStep = this.questionsService[this.questionsService.currentStep['next' + answer]];
        }
        else {
            this.questionsService.currentStep = this.questionsService.currentStep['next' + answer];
        }
        if (this.questionsService.currentStep.text) {
            setTimeout(() => {
                const typed = new typed_js__WEBPACK_IMPORTED_MODULE_4___default.a('.text-block__text', {
                    strings: [this.questionsService.currentStep.text],
                    typeSpeed: 30,
                    showCursor: false
                });
            }, 600);
        }
        else if (this.questionsService.currentStep.question) {
            setTimeout(() => {
                const typed = new typed_js__WEBPACK_IMPORTED_MODULE_4___default.a('.question__text', {
                    strings: [this.questionsService.currentStep.question],
                    typeSpeed: 30,
                    showCursor: false
                });
            }, 600);
        }
        if (this.questionsService.currentStep.bg) {
            this.currentBg = this.questionsService.currentStep.bg;
        }
        this.questionsService.answersHidden = true;
        setTimeout(() => {
            this.questionsService.answersHidden = false;
        }, 500);
    }
};
QuestionComponent.ctorParameters = () => [
    { type: _service_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"] }
];
QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question/question.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('inOutAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")).default]
    })
], QuestionComponent);



/***/ }),

/***/ "./src/app/service/questions.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/questions.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuestionsService = class QuestionsService {
    constructor() {
        this.sceneMorning = {
            text: '- Ох, очередной рабочий день.',
            answer1: 'Полежать ещё немного',
            answer2: 'Встать',
            next1: {
                text: '*Спустя час*',
                next1: {
                    text: '*БЛ*ТЬ, опять опаздываю!!!!*',
                    next1: 'sceneMetroLate'
                }
            },
            next2: {
                text: '- Ого, сегодня даже вовремя!',
                next1: 'sceneMetroTime'
            }
        };
        this.sceneMetroLate = {
            bg: '../../assets/img/metro.png',
            text: '- Больше никогда не буду опаздывать!!!',
            answer1: 'Посидеть в баду',
            answer2: 'Послушать музыку',
            next1: {
                text: '*Оглядываюсь, чтобы убедиться, что никто не смотрит*',
                next1: 'sceneBadooMetroLate'
            },
            next2: {
                bg: '../../assets/img/metro-bad.png',
                text: '*Внутренний голос вновь начинает лекцию...*',
                next1: {
                    text: '- Так бездарно тратить жизнь - это целый талант...',
                    next1: {
                        text: '- Ну хоть один талант имеется...',
                        next1: {
                            text: '*Диктор прерывает внутренний спич*',
                            next1: {
                                bg: '../../assets/img/metro.png',
                                text: '"Станция метро Тургеневская!"',
                                next1: 'sceneWorkLate'
                            }
                        }
                    }
                }
            }
        };
        this.sceneMetroTime = {
            bg: '../../assets/img/metro.png',
            text: '- День обещает быть хотя бы не ужасным.',
            answer1: 'Посидеть в баду',
            answer2: 'Послушать музыку',
            next1: {
                text: '*Оглядываюсь, чтобы убедиться, что никто не смотрит*',
                next1: 'sceneBadooMetroTime'
            },
            next2: {
                bg: '../../assets/img/metro-bad.png',
                text: '*Внутренний голос вновь начинает лекцию...*',
                next1: {
                    text: '*Город засыпает, просыпаются тараканы*',
                    next1: {
                        text: '*Диктор прерывает внутренний спич*',
                        next1: {
                            bg: '../../assets/img/metro.png',
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkTime'
                        }
                    }
                }
            }
        };
        this.sceneWorkLate = {
            bg: '../../assets/img/office.png',
            text: '- Надеюсь никто не заметил, что я опять опоздал.',
            next1: {
                bg: '../../assets/img/office-friend.png',
                question: '- Олег, опять опоздал?',
                answer1: 'Это всё не я, честно',
                answer2: 'Кто такое сказал?',
                answer23: 'Дэээээээ',
                next1: {
                    bg: '../../assets/img/office.png',
                    text: '*Иду побыстрее к своему месту*',
                    next1: 'sceneWork'
                },
                next2: {
                    bg: '../../assets/img/office.png',
                    text: '*Иду побыстрее к своему месту*',
                    next1: 'sceneWork'
                },
                next3: {
                    bg: '../../assets/img/office.png',
                    text: '*Иду побыстрее к своему месту*',
                    next1: 'sceneWork'
                }
            }
        };
        this.sceneWorkTime = {
            bg: '../../assets/img/office.png',
            text: '- А я не опоздал!!!',
            next1: {
                bg: '../../assets/img/office-friend.png',
                question: '- Олег, моё уважение, сегодня пришёл даже раньше.',
                answer1: 'А кто-то во мне сомневался?',
                answer2: 'Я молодец, я знаю, спасибо)',
                answer23: 'Дэээээээ',
                next1: {
                    bg: '../../assets/img/office.png',
                    text: '*Иду вольяжно к своему месту*',
                    next1: 'sceneWork'
                },
                next2: {
                    bg: '../../assets/img/office.png',
                    text: '*Иду вольяжно к своему месту*',
                    next1: 'sceneWork'
                },
                next3: {
                    bg: '../../assets/img/office.png',
                    text: '*Иду вольяжно к своему месту*',
                    next1: 'sceneWork'
                }
            },
        };
        this.sceneWorkLateBadoo = {
            bg: '../../assets/img/office.png',
            text: '- Надеюсь никто не заметил, что я опять опоздал.',
            next1: {
                bg: '../../assets/img/office-friend.png',
                question: '- Олег, опять опоздал?',
                answer1: 'Это всё не я, честно',
                answer2: 'Кто такое сказал?',
                answer23: 'Дэээээээ',
                next1: {
                    bg: '../../assets/img/office.png',
                    text: '*Иду побыстрее к своему месту*',
                    next1: 'sceneWorkBadoo'
                },
                next2: {
                    bg: '../../assets/img/office.png',
                    text: '*Иду побыстрее к своему месту*',
                    next1: 'sceneWorkBadoo'
                },
                next3: {
                    bg: '../../assets/img/office.png',
                    text: '*Иду побыстрее к своему месту*',
                    next1: 'sceneWorkBadoo'
                }
            }
        };
        this.sceneWorkTimeBadoo = {
            bg: '../../assets/img/office.png',
            text: '- А я не опоздал!!!',
            next1: {
                bg: '../../assets/img/office-friend.png',
                question: '- Олег, моё уважение, сегодня пришёл даже раньше.',
                answer1: 'А кто-то во мне сомневался?',
                answer2: 'Я молодец, я знаю, спасибо)',
                answer23: 'Дэээээээ',
                next1: {
                    bg: '../../assets/img/office.png',
                    text: '*Иду вольяжно к своему месту*',
                    next1: 'sceneWorkBadoo'
                },
                next2: {
                    bg: '../../assets/img/office.png',
                    text: '*Иду вольяжно к своему месту*',
                    next1: 'sceneWorkBadoo'
                },
                next3: {
                    bg: '../../assets/img/office.png',
                    text: '*Иду вольяжно к своему месту*',
                    next1: 'sceneWorkBadoo'
                }
            },
        };
        this.sceneWork = {
            text: '*Пилик-пилик*',
            next1: {
                text: '*Пилик-пилик*',
                next1: {
                    text: '*Пилик-пилик*',
                    next1: {
                        text: '*Пилик-пилик*',
                        next1: 'sceneWorkComingHome'
                    }
                }
            }
        };
        this.sceneWorkComingHome = {
            bg: '../../assets/img/metro.png',
            text: '*Ненавижу метро...*',
            next1: 'sceneHome'
        };
        this.sceneWorkBadoo = {
            text: '*Пилик-пилик*',
            next1: {
                text: '*Пилик-пилик*',
                next1: {
                    text: '*Пилик-пилик*',
                    next1: {
                        text: '*Пилик-пилик*',
                        next1: 'sceneMetroMeetBadoo'
                    }
                }
            }
        };
        this.sceneHome = {
            bg: '../../assets/img/home-mom.png',
            question: '- Ой, сыночек уже вернулся. Что будешь на ужин?',
            answer1: 'Макароны',
            answer2: 'Я уже покушал, спасибо',
            answer3: 'Чай с печеньями',
            next1: {
                bg: '../../assets/img/home.png',
                text: '*Иду в комнату*',
                next1: {
                    bg: '../../assets/img/end-bad.png'
                }
            },
            next2: {
                bg: '../../assets/img/home.png',
                text: '*Иду в комнату*',
                next1: {
                    bg: '../../assets/img/end-bad.png'
                }
            },
            next3: {
                bg: '../../assets/img/home.png',
                text: '*Иду в комнату*',
                next1: {
                    bg: '../../assets/img/end-bad.png'
                }
            }
        };
        this.sceneBadooMetroLate = {
            bg: '../../assets/img/metro-badoo-1.png',
            question: 'Настя, 17 лет, увелкается литературой',
            answer1: 'Поставить лайк',
            answer2: 'Поставить дизлайк',
            next1: {
                bg: '../../assets/img/metro-badoo-2.png',
                question: 'Настя, 19 лет, технарь. Считает, что математика везде',
                answer1: 'Поставить лайк',
                answer2: 'Поставить дизлайк',
                next1: {
                    bg: '../../assets/img/metro-badoo-3.png',
                    question: 'Настя, 16 лет, любит тусоваться на кг',
                    answer1: 'Поставить лайк',
                    answer2: 'Поставить дизлайк',
                    next1: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkLateBadoo'
                        }
                    },
                    next2: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkLateBadoo'
                        }
                    }
                },
                next2: {
                    bg: '../../assets/img/metro-badoo-3.png',
                    question: 'Настя, 16 лет, любит тусоваться на кг',
                    answer1: 'Поставить лайк',
                    answer2: 'Поставить дизлайк',
                    next1: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkLateBadoo'
                        }
                    },
                    next2: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkLateBadoo'
                        }
                    }
                }
            },
            next2: {
                bg: '../../assets/img/metro-badoo-2.png',
                question: 'Настя, 19 лет, технарь. Считает, что математика везде',
                answer1: 'Поставить лайк',
                answer2: 'Поставить дизлайк',
                next1: {
                    bg: '../../assets/img/metro-badoo-3.png',
                    question: 'Настя, 16 лет, любит тусоваться на кг',
                    answer1: 'Поставить лайк',
                    answer2: 'Поставить дизлайк',
                    next1: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkLateBadoo'
                        }
                    },
                    next2: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkLateBadoo'
                        }
                    }
                },
                next2: {
                    bg: '../../assets/img/metro-badoo-3.png',
                    question: 'Настя, 16 лет, любит тусоваться на кг',
                    answer1: 'Поставить лайк',
                    answer2: 'Поставить дизлайк',
                    next1: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkLateBadoo'
                        }
                    },
                    next2: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkLateBadoo'
                        }
                    }
                }
            },
        };
        this.sceneBadooMetroTime = {
            bg: '../../assets/img/metro-badoo-1.png',
            question: 'Настя, 17 лет, увелкается литературой',
            answer1: 'Поставить лайк',
            answer2: 'Поставить дизлайк',
            next1: {
                bg: '../../assets/img/metro-badoo-2.png',
                question: 'Настя, 19 лет, технарь. Считает, что математика везде',
                answer1: 'Поставить лайк',
                answer2: 'Поставить дизлайк',
                next1: {
                    bg: '../../assets/img/metro-badoo-3.png',
                    question: 'Настя, 16 лет, любит тусоваться на кг',
                    answer1: 'Поставить лайк',
                    answer2: 'Поставить дизлайк',
                    next1: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkTimeBadoo'
                        }
                    },
                    next2: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkTimeBadoo'
                        }
                    }
                },
                next2: {
                    bg: '../../assets/img/metro-badoo-3.png',
                    question: 'Настя, 16 лет, любит тусоваться на кг',
                    answer1: 'Поставить лайк',
                    answer2: 'Поставить дизлайк',
                    next1: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkTimeBadoo'
                        }
                    },
                    next2: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkTimeBadoo'
                        }
                    }
                }
            },
            next2: {
                bg: '../../assets/img/metro-badoo-2.png',
                question: 'Настя, 19 лет, технарь. Считает, что математика везде',
                answer1: 'Поставить лайк',
                answer2: 'Поставить дизлайк',
                next1: {
                    bg: '../../assets/img/metro-badoo-3.png',
                    question: 'Настя, 16 лет, любит тусоваться на кг',
                    answer1: 'Поставить лайк',
                    answer2: 'Поставить дизлайк',
                    next1: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkTimeBadoo'
                        }
                    },
                    next2: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkTimeBadoo'
                        }
                    }
                },
                next2: {
                    bg: '../../assets/img/metro-badoo-3.png',
                    question: 'Настя, 16 лет, любит тусоваться на кг',
                    answer1: 'Поставить лайк',
                    answer2: 'Поставить дизлайк',
                    next1: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkTimeBadoo'
                        }
                    },
                    next2: {
                        bg: '../../assets/img/metro.png',
                        text: '*Диктор прерывает увлекательное занятие*',
                        next1: {
                            text: '"Станция метро Тургеневская!"',
                            next1: 'sceneWorkTimeBadoo'
                        }
                    }
                }
            },
        };
        this.sceneMetroMeetBadoo = {
            bg: '../../assets/img/metro.png',
            text: '- Ох уж это метро, ненавижу его...',
            next1: {
                bg: '../../assets/img/metro-nasty.png',
                text: '- Стоп... Я её же видел с утра в баду',
                answer1: 'Подойти',
                answer2: 'Дальше слушать музыку',
                next1: {
                    question: 'Привет)',
                    answer1: 'Привет)',
                    answer2: 'Кукусики)',
                    next1: {
                        question: 'Не против, если я нарисую тебя?',
                        answer1: 'Нет конечно',
                        answer2: 'Как можно отказать такой прекрасной даме)',
                    },
                    next2: {
                        question: 'Что-то случилось?',
                        answer1: 'Хотел сказать, что ты очень милая',
                        answer2: 'У тебя случайно нет парня?',
                    }
                },
                next2: {
                    text: '*Мило улыбается*',
                    answer1: 'Подойти',
                    answer2: 'Дальше слушать музыку',
                    next1: {
                        question: 'Привет)',
                        answer1: 'Привет)',
                        answer2: 'Кукусики)',
                        next1: {
                            question: 'Не против, если я нарисую тебя?',
                            answer1: 'Нет конечно',
                            answer2: 'Как можно отказать такой прекрасной даме)',
                        },
                        next2: {
                            question: 'Что-то случилось?',
                            answer1: 'Хотел сказать, что ты очень милая',
                            answer2: 'У тебя случайно нет парня?',
                        }
                    },
                    next2: 'sceneHome'
                },
            }
        };
        this.currentStep = this.sceneMorning;
        this.answersHidden = false;
    }
};
QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuestionsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mulfurion\WebstormProjects\romatic2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map