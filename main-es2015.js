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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title-wrapper\">\n  <div class=\"page-title\">Visualisation of COVID-19 in VIC, Australia</div>\n  <div class=\"time-updated\">Last Updated: {{ timeUpdated }}</div>\n</div>\n<app-case-number></app-case-number>\n\n<app-vic-details-table></app-vic-details-table>\n\n<app-vic-details-map></app-vic-details-map>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/case-number/case-number.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/case-number/case-number.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer-wrapper\">\n  <div class=\"box-wrapper confirmedVic\">\n    <div class=\"today red\">{{ confirmedVicToday }}</div>\n    <div class=\"delta\">\n      the day before\n      <span class=\"red\">{{\n        confirmedVicDelta ? \"+\" + confirmedVicDelta : \"-\"\n      }}</span>\n    </div>\n    <div class=\"label\">VIC Confirmed</div>\n    <div class=\"date\">{{ confirmedVicDate }}</div>\n  </div>\n\n  <div class=\"box-wrapper confirmedAu\">\n    <div class=\"today red\">{{ confirmedAuToday }}</div>\n    <div class=\"delta\">\n      the day before\n      <span class=\"red\">{{\n        confirmedAuDelta ? \"+\" + confirmedAuDelta : \"-\"\n      }}</span>\n    </div>\n    <div class=\"label\">AU Confirmed</div>\n    <div class=\"date\"></div>\n    {{ confirmedAuDate }}\n  </div>\n\n  <div class=\"box-wrapper recoveredAu \">\n    <div class=\"today green\">{{ recoveredAuToday }}</div>\n    <div class=\"delta\">\n      the day before\n      <span class=\"green\">{{\n        recoveredAuDelta ? \"+\" + recoveredAuDelta : \"-\"\n      }}</span>\n    </div>\n    <div class=\"label\">AU Recovered</div>\n    <div class=\"date\">{{ recoveredAuDate }}</div>\n  </div>\n\n  <div class=\"box-wrapper deathsAu\">\n    <div class=\"today grey\">{{ deathsAuToday }}</div>\n    <div class=\"delta\">\n      the day before\n      <span class=\"grey\">{{ deathsAuDelta ? \"+\" + deathsAuDelta : \"-\" }}</span>\n    </div>\n    <div class=\"label\">AU Deaths</div>\n    <div class=\"date\">{{ deathsAuDate }}</div>\n  </div>\n</div>\n\n<div class=\"echarts\">\n  <div echarts [options]=\"options\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vic-details-map/vic-details-map.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vic-details-map/vic-details-map.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map-wrapper\">\n  <div class=\"title\">Public Exposure Sites for Confirmed Cases in VIC</div>\n\n  <div #mapContainer id=\"map\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vic-details-table/vic-details-table.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vic-details-table/vic-details-table.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-wrapper\">\n  <div class=\"mat-elevation-z8\">\n    <div class=\"table-header\">\n      Confirmed Cases Details in VIC\n    </div>\n\n    <mat-form-field>\n      <mat-label>Filter</mat-label>\n      <input matInput (keyup)=\"applyFilter($event)\" />\n    </mat-form-field>\n\n    <table mat-table [dataSource]=\"dataSource\">\n      <!-- caseNumber Column -->\n      <ng-container matColumnDef=\"caseNumber\">\n        <th mat-header-cell *matHeaderCellDef>Case No.</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.caseNumber }}</td>\n      </ng-container>\n\n      <!-- dateConfirmed Column -->\n      <ng-container matColumnDef=\"dateConfirmed\">\n        <th mat-header-cell *matHeaderCellDef>Date Confirmed</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.dateConfirmed }}</td>\n      </ng-container>\n\n      <!-- age Column -->\n      <ng-container matColumnDef=\"age\">\n        <th mat-header-cell *matHeaderCellDef>Age</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.age }}</td>\n      </ng-container>\n\n      <!-- gender Column -->\n      <ng-container matColumnDef=\"gender\">\n        <th mat-header-cell *matHeaderCellDef>Gender</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.gender }}</td>\n      </ng-container>\n\n      <!-- description Column -->\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef>Description</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div *ngIf=\"element.description[0]?.length > 0\">\n            <div *ngFor=\"let n of element.description; let i = index\">\n              <span class=\"description-number\">{{ i + 1 }}.</span>{{ n }}\n            </div>\n          </div>\n        </td>\n      </ng-container>\n\n      <!-- sourceLink Column -->\n      <ng-container matColumnDef=\"sourceLink\">\n        <th mat-header-cell *matHeaderCellDef>Source</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div *ngFor=\"let n of element.sourceLink; let i = index\">\n            <a href=\"{{ n }}\" target=\"_blank\">Link {{ i + 1 }}</a>\n          </div>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n    </table>\n\n    <mat-paginator\n      [pageSizeOptions]=\"[5, 10, 20]\"\n      showFirstLastButtons\n    ></mat-paginator>\n  </div>\n</div>\n");

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-title {\n  font-size: 22px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.time-updated {\n  display: block;\n  font-size: 12px;\n  text-align: center;\n  color: #555;\n}\n\n.page-title-wrapper {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95aXlpL2dpdGh1Yi9DT1ZJRC0xOS1WSUNfMjAyMDAzMTAvQ09WSUQxOS1WSUMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udGltZS11cGRhdGVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLnBhZ2UtdGl0bGUtd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4iLCIucGFnZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50aW1lLXVwZGF0ZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4ucGFnZS10aXRsZS13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.timeUpdated = "Wed Mar 25 2020 00:04:57 GMT+1100 (Australian Eastern Daylight Time)";
    }
    ngOnInit() { }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var _case_number_case_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./case-number/case-number.component */ "./src/app/case-number/case-number.component.ts");
/* harmony import */ var _vic_details_table_vic_details_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vic-details-table/vic-details-table.component */ "./src/app/vic-details-table/vic-details-table.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tooltip.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
/* harmony import */ var _vic_details_map_vic_details_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vic-details-map/vic-details-map.component */ "./src/app/vic-details-map/vic-details-map.component.ts");
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _case_number_case_number_component__WEBPACK_IMPORTED_MODULE_6__["CaseNumberComponent"],
            _vic_details_table_vic_details_table_component__WEBPACK_IMPORTED_MODULE_7__["VicDetailsTableComponent"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"],
            _vic_details_map_vic_details_map_component__WEBPACK_IMPORTED_MODULE_15__["VicDetailsMapComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]
        ],
        exports: [
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/case-number/case-number.component.scss":
/*!********************************************************!*\
  !*** ./src/app/case-number/case-number.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-wrapper {\n  margin: 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 5px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.outer-wrapper .box-wrapper {\n  flex: 1 1 auto;\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.outer-wrapper .box-wrapper div {\n  margin: 5px 0;\n}\n.outer-wrapper .box-wrapper .today {\n  font-size: 20px;\n  font-weight: 500;\n}\n.outer-wrapper .box-wrapper .delta {\n  font-size: 11px;\n  color: #888;\n}\n.outer-wrapper .box-wrapper .red {\n  color: red;\n}\n.outer-wrapper .box-wrapper .green {\n  color: green;\n}\n.outer-wrapper .box-wrapper .grey {\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95aXlpL2dpdGh1Yi9DT1ZJRC0xOS1WSUNfMjAyMDAzMTAvQ09WSUQxOS1WSUMvc3JjL2FwcC9jYXNlLW51bWJlci9jYXNlLW51bWJlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FzZS1udW1iZXIvY2FzZS1udW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0FOO0FER0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0ROO0FESUk7RUFFRSxVQUFBO0FDSE47QURNSTtFQUNFLFlBQUE7QUNKTjtBRE9JO0VBQ0UsV0FBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvY2FzZS1udW1iZXIvY2FzZS1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItd3JhcHBlciB7XG4gIG1hcmdpbjogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIC5ib3gtd3JhcHBlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgZGl2IHtcbiAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgfVxuXG4gICAgLnRvZGF5IHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLmRlbHRhIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGNvbG9yOiAjODg4O1xuICAgIH1cblxuICAgIC5yZWQge1xuXG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cblxuICAgIC5ncmVlbiB7XG4gICAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuXG4gICAgLmdyZXkge1xuICAgICAgY29sb3I6IGdyZXk7XG4gICAgfVxuICB9XG59IiwiLm91dGVyLXdyYXBwZXIge1xuICBtYXJnaW46IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5vdXRlci13cmFwcGVyIC5ib3gtd3JhcHBlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5vdXRlci13cmFwcGVyIC5ib3gtd3JhcHBlciBkaXYge1xuICBtYXJnaW46IDVweCAwO1xufVxuLm91dGVyLXdyYXBwZXIgLmJveC13cmFwcGVyIC50b2RheSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5vdXRlci13cmFwcGVyIC5ib3gtd3JhcHBlciAuZGVsdGEge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjODg4O1xufVxuLm91dGVyLXdyYXBwZXIgLmJveC13cmFwcGVyIC5yZWQge1xuICBjb2xvcjogcmVkO1xufVxuLm91dGVyLXdyYXBwZXIgLmJveC13cmFwcGVyIC5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5vdXRlci13cmFwcGVyIC5ib3gtd3JhcHBlciAuZ3JleSB7XG4gIGNvbG9yOiBncmV5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/case-number/case-number.component.ts":
/*!******************************************************!*\
  !*** ./src/app/case-number/case-number.component.ts ***!
  \******************************************************/
/*! exports provided: CaseNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseNumberComponent", function() { return CaseNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_statistics_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/statistics.json */ "./src/assets/statistics.json");
var src_assets_statistics_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/statistics.json */ "./src/assets/statistics.json", 1);



let CaseNumberComponent = class CaseNumberComponent {
    constructor() {
        this.dateShownNumberInSmallScreen = 10;
        this.dateShownNumberInLargeScreen = 15;
        this.dateShownNumberInSuperLargeScreen = 20;
    }
    ngOnInit() {
        const dateLength = RAW_DATA.deaths_au_arr.length;
        if (window.innerWidth < 550) {
            this.xAxisInterval = Math.max(Math.floor(dateLength / this.dateShownNumberInSmallScreen) - 1, 0);
        }
        else if (window.innerWidth < 1000) {
            this.xAxisInterval = Math.max(Math.floor(dateLength / this.dateShownNumberInLargeScreen) - 1, 0);
        }
        else {
            this.xAxisInterval = Math.max(Math.floor(dateLength / this.dateShownNumberInSuperLargeScreen) - 1, 0);
        }
        this.options = {
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: {
                        show: true,
                        readOnly: true,
                        title: "Data View",
                        lang: ["Data View", "Close"]
                    },
                    saveAsImage: { show: true, title: "Save as Picture" }
                }
            },
            title: {
                text: "Case Statistics in VIC & AU",
                x: "center"
            },
            tooltip: {
                trigger: "axis"
            },
            grid: {
                top: "25%",
                containLabel: true
            },
            legend: {
                top: "6%",
                data: ["AU Deaths", "AU Recovered", "VIC Confirmed", "AU Confirmed"]
            },
            xAxis: [
                {
                    type: "category",
                    axisTick: {
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    axisLabel: {
                        interval: this.xAxisInterval,
                        rotate: 50
                    },
                    data: RAW_DATA.date_arr
                }
            ],
            yAxis: [
                {
                    type: "value",
                    name: "AU Deaths & Recovered",
                    min: 0,
                    position: "left",
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0
                    },
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                {
                    type: "value",
                    name: "VIC & AU Confirmed",
                    min: 0,
                    position: "right",
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0
                    },
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            dataZoom: [
                {
                    type: "slider",
                    xAxisIndex: 0,
                    filterMode: "empty",
                    start: this.setDataZoomStart(),
                    end: 100
                },
                {
                    type: "inside",
                    xAxisIndex: 0,
                    filterMode: "empty",
                    start: 0,
                    end: 100
                }
            ],
            series: [
                {
                    name: "AU Deaths",
                    type: "line",
                    label: {
                        normal: {
                            show: true,
                            position: "top"
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 3,
                            shadowColor: "rgba(0,0,0,0.4)",
                            shadowBlur: 10,
                            shadowOffsetY: 10
                        }
                    },
                    data: RAW_DATA.deaths_au_arr
                },
                {
                    name: "AU Recovered",
                    type: "line",
                    label: {
                        normal: {
                            show: true,
                            position: "top"
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 3,
                            shadowColor: "rgba(0,0,0,0.4)",
                            shadowBlur: 10,
                            shadowOffsetY: 10
                        }
                    },
                    data: RAW_DATA.recovered_au_arr
                },
                {
                    name: "VIC Confirmed",
                    type: "bar",
                    yAxisIndex: 1,
                    label: {
                        normal: {
                            show: true,
                            position: "top"
                        }
                    },
                    data: RAW_DATA.confirmed_vic_arr
                },
                {
                    name: "AU Confirmed",
                    type: "bar",
                    yAxisIndex: 1,
                    label: {
                        normal: {
                            show: true,
                            position: "top"
                        }
                    },
                    data: RAW_DATA.confirmed_au_arr
                }
            ]
        };
        this.processTodayNumber();
    }
    setDataZoomStart() {
        if (window.innerWidth >= 1000) {
            return 70;
        }
        else if (window.innerWidth >= 700) {
            return 85;
        }
        return 90;
    }
    processTodayNumber() {
        [
            this.confirmedVicDate,
            this.confirmedVicToday,
            this.confirmedVicDelta
        ] = this.getLastValidData("confirmed_vic_arr");
        [
            this.confirmedAuDate,
            this.confirmedAuToday,
            this.confirmedAuDelta
        ] = this.getLastValidData("confirmed_au_arr");
        [
            this.recoveredAuDate,
            this.recoveredAuToday,
            this.recoveredAuDelta
        ] = this.getLastValidData("recovered_au_arr");
        [
            this.deathsAuDate,
            this.deathsAuToday,
            this.deathsAuDelta
        ] = this.getLastValidData("deaths_au_arr");
    }
    getLastValidData(field) {
        const arr = RAW_DATA[field];
        for (let i = arr.length - 1; i >= 0; i--) {
            const arr = RAW_DATA[field];
            if (arr[i]) {
                return [
                    RAW_DATA["date_arr"][i],
                    RAW_DATA[field][i],
                    RAW_DATA[field][i] - RAW_DATA[field][i - 1]
                ];
            }
        }
    }
};
CaseNumberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-case-number",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./case-number.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/case-number/case-number.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./case-number.component.scss */ "./src/app/case-number/case-number.component.scss")).default]
    })
], CaseNumberComponent);

const RAW_DATA = src_assets_statistics_json__WEBPACK_IMPORTED_MODULE_2__;


/***/ }),

/***/ "./src/app/vic-details-map/vic-details-map.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/vic-details-map/vic-details-map.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n#map {\n  height: 600px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95aXlpL2dpdGh1Yi9DT1ZJRC0xOS1WSUNfMjAyMDAzMTAvQ09WSUQxOS1WSUMvc3JjL2FwcC92aWMtZGV0YWlscy1tYXAvdmljLWRldGFpbHMtbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWMtZGV0YWlscy1tYXAvdmljLWRldGFpbHMtbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpYy1kZXRhaWxzLW1hcC92aWMtZGV0YWlscy1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuI21hcCB7XG4gIGhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/vic-details-map/vic-details-map.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vic-details-map/vic-details-map.component.ts ***!
  \**************************************************************/
/*! exports provided: VicDetailsMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VicDetailsMapComponent", function() { return VicDetailsMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_public_exposure_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/public-exposure-data.json */ "./src/assets/public-exposure-data.json");
var src_assets_public_exposure_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/public-exposure-data.json */ "./src/assets/public-exposure-data.json", 1);



let VicDetailsMapComponent = class VicDetailsMapComponent {
    constructor() {
        this.lat = -37.811973;
        this.lng = 144.9599133;
        this.mapOptions = {
            center: new google.maps.LatLng(this.lat, this.lng),
            zoom: 8.5
        };
    }
    ngOnInit() {
        this.configureMarkers();
    }
    ngAfterViewInit() {
        this.mapInitializer();
    }
    configureMarkers() {
        const result = [];
        const vicDetailsMapData = RAW_DATA.filter(item => {
            return item.locationType !== "flight" && item.lat && item.lng;
        });
        const group = vicDetailsMapData.reduce((acc, item) => {
            if (!acc[item.lat + item.lng]) {
                acc[item.lat + item.lng] = [];
            }
            acc[item.lat + item.lng].push(item);
            return acc;
        }, {});
        Object.values(group).forEach((arr) => {
            const firstItem = arr[0];
            const tempDict = {};
            tempDict["position"] = new google.maps.LatLng(parseFloat(firstItem.lat), parseFloat(firstItem.lng));
            tempDict["map"] = this.map;
            if (arr.length === 1) {
                tempDict["title"] = this.buildSingleTitle(firstItem);
            }
            else {
                tempDict["title"] = arr.reduce((a, b) => this.buildSingleTitle(a) + "<hr>" + this.buildSingleTitle(b));
            }
            result.push(tempDict);
        });
        this.markers = result;
    }
    buildSingleTitle(item) {
        let info = "";
        if (item.caseNumber) {
            info += `<br/><b>Case No. in VIC: </b>${item.caseNumber}`;
        }
        if (item.dateConfirmed) {
            info += `<br/><b>Date Confirmed: </b>${item.dateConfirmed}`;
        }
        if (item.age) {
            info += `<br/><b>Age: </b>${item.age}`;
        }
        if (item.gender) {
            info += `<br/><b>Gender: </b>${item.gender}`;
        }
        if (item.description) {
            let descriptionList = "";
            item.description.forEach(d => {
                descriptionList += `<li>${d}</li>`;
            });
            info += `<br/><b>Description: </b><ol>${descriptionList}</ol>`;
        }
        if (item.location) {
            info += `<br/><b>Location: </b>${item.location}`;
        }
        if (item.dateAndTime) {
            info += `<br/><b>Time Visited here: </b>${item.dateAndTime}`;
        }
        if (item.onsetOfSymptomsUpTo) {
            info += `<br/><b>Onset of Symptoms up to: </b>${item.onsetOfSymptomsUpTo}`;
        }
        if (item.sourceLink) {
            item.sourceLink.forEach((link, index) => {
                info += `<br/><b>Source: </b><a href="${link}" target="_blank">Link ${index +
                    1}</a>`;
            });
        }
        return info;
    }
    mapInitializer() {
        this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
        this.loadAllMarkers();
        this.removeTooltip();
    }
    loadAllMarkers() {
        this.markers.forEach((markerInfo) => {
            const marker = new google.maps.Marker(Object.assign({}, markerInfo));
            const infoWindow = new google.maps.InfoWindow({
                content: marker.getTitle()
            });
            marker.addListener("click", () => {
                infoWindow.open(marker.getMap(), marker);
                if (this.previousInfoWindow) {
                    this.previousInfoWindow.close();
                }
                this.previousInfoWindow = infoWindow;
            });
            marker.addListener("mouseover", (e) => {
                infoWindow.open(marker.getMap(), marker);
                if (this.previousInfoWindow) {
                    this.previousInfoWindow.close();
                }
                this.previousInfoWindow = infoWindow;
            });
            marker.setMap(this.map);
        });
    }
    removeTooltip() {
        setTimeout(() => {
            document.querySelectorAll('[log="miw"]').forEach(ele => (ele.title = ""));
        }, 4000);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapContainer")
], VicDetailsMapComponent.prototype, "gmap", void 0);
VicDetailsMapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vic-details-map",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vic-details-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vic-details-map/vic-details-map.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vic-details-map.component.scss */ "./src/app/vic-details-map/vic-details-map.component.scss")).default]
    })
], VicDetailsMapComponent);

const RAW_DATA = src_assets_public_exposure_data_json__WEBPACK_IMPORTED_MODULE_2__;


/***/ }),

/***/ "./src/app/vic-details-table/vic-details-table.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/vic-details-table/vic-details-table.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\n.table-header {\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.mat-column-caseNumber {\n  width: 5%;\n  min-width: 50px;\n}\n\n.mat-column-dateConfirmed {\n  width: 7%;\n  min-width: 50px;\n}\n\n.mat-column-age {\n  width: 3%;\n  min-width: 50px;\n}\n\n.mat-column-gender {\n  width: 4%;\n  min-width: 50px;\n}\n\n.mat-column-description {\n  min-width: 300px;\n}\n\n.mat-column-sourceLink {\n  width: 10%;\n  min-width: 50px;\n  word-break: break-all;\n}\n\n.mat-table {\n  overflow-x: scroll;\n  display: block;\n  overflow-x: auto;\n}\n\n.mat-cell,\n.mat-header-cell {\n  padding: 2px 4px;\n}\n\nli {\n  list-style-position: inside;\n}\n\n.description-number {\n  padding-right: 10px;\n  font-weight: 500;\n}\n\ntd.mat-cell:first-of-type,\ntd.mat-footer-cell:first-of-type,\nth.mat-header-cell:first-of-type {\n  padding-left: 0 !important;\n}\n\ntd.mat-cell:last-of-type,\ntd.mat-footer-cell:last-of-type,\nth.mat-header-cell:last-of-type {\n  padding-right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95aXlpL2dpdGh1Yi9DT1ZJRC0xOS1WSUNfMjAyMDAzMTAvQ09WSUQxOS1WSUMvc3JjL2FwcC92aWMtZGV0YWlscy10YWJsZS92aWMtZGV0YWlscy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmljLWRldGFpbHMtdGFibGUvdmljLWRldGFpbHMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7O0VBR0UsMEJBQUE7QUNDRjs7QURFQTs7O0VBR0UsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpYy1kZXRhaWxzLXRhYmxlL3ZpYy1kZXRhaWxzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWNvbHVtbi1jYXNlTnVtYmVyIHtcbiAgd2lkdGg6IDUlO1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5cbi5tYXQtY29sdW1uLWRhdGVDb25maXJtZWQge1xuICB3aWR0aDogNyU7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cblxuLm1hdC1jb2x1bW4tYWdlIHtcbiAgd2lkdGg6IDMlO1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5cbi5tYXQtY29sdW1uLWdlbmRlciB7XG4gIHdpZHRoOiA0JTtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4ubWF0LWNvbHVtbi1kZXNjcmlwdGlvbiB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5tYXQtY29sdW1uLXNvdXJjZUxpbmsge1xuICB3aWR0aDogMTAlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5tYXQtY2VsbCxcbi5tYXQtaGVhZGVyLWNlbGwge1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbn1cblxuLmRlc2NyaXB0aW9uLW51bWJlciB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbnRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsXG50aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4vLyAubWF0LXBhZ2luYXRvci1yYW5nZS1hY3Rpb25zPmJ1dHRvbixcbi8vIGJ1dHRvbi5tYXQtcGFnaW5hdG9yLW5hdmlnYXRpb24tbGFzdCB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgb3V0bGluZTogbm9uZTtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgb3ZlcmZsb3c6IHZpc2libGU7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIG1pbi13aWR0aDogMDtcbi8vICAgd2lkdGg6IDQwcHg7XG4vLyAgIGhlaWdodDogNDBweDtcbi8vICAgZmxleC1zaHJpbms6IDA7XG4vLyAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyB9IiwiLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWNvbHVtbi1jYXNlTnVtYmVyIHtcbiAgd2lkdGg6IDUlO1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5cbi5tYXQtY29sdW1uLWRhdGVDb25maXJtZWQge1xuICB3aWR0aDogNyU7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cblxuLm1hdC1jb2x1bW4tYWdlIHtcbiAgd2lkdGg6IDMlO1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5cbi5tYXQtY29sdW1uLWdlbmRlciB7XG4gIHdpZHRoOiA0JTtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4ubWF0LWNvbHVtbi1kZXNjcmlwdGlvbiB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5tYXQtY29sdW1uLXNvdXJjZUxpbmsge1xuICB3aWR0aDogMTAlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5tYXQtY2VsbCxcbi5tYXQtaGVhZGVyLWNlbGwge1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbn1cblxuLmRlc2NyaXB0aW9uLW51bWJlciB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbnRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsXG50aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/vic-details-table/vic-details-table.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/vic-details-table/vic-details-table.component.ts ***!
  \******************************************************************/
/*! exports provided: VicDetailsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VicDetailsTableComponent", function() { return VicDetailsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var src_assets_vic_details_table_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/vic-details-table-data.json */ "./src/assets/vic-details-table-data.json");
var src_assets_vic_details_table_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/vic-details-table-data.json */ "./src/assets/vic-details-table-data.json", 1);





let VicDetailsTableComponent = class VicDetailsTableComponent {
    constructor() {
        this.displayedColumns = [
            "caseNumber",
            "dateConfirmed",
            "age",
            "gender",
            "description",
            "sourceLink"
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](RAW_DATA);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
    ngAfterViewInit() {
        this.setButtonStyle();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    setButtonStyle() {
        const cssText = `box-sizing: border-box;
    position: relative;
    user-select: none;
    cursor: pointer;
    outline: none;
    border: none;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    margin: 0;
    overflow: visible;
    padding: 0;
    min-width: 0;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    line-height: 40px;
    border-radius: 50%;`;
        const buttonClassNames = [
            "mat-paginator-navigation-first",
            "mat-paginator-navigation-previous",
            "mat-paginator-navigation-next",
            "mat-paginator-navigation-last"
        ];
        buttonClassNames.forEach(className => {
            document.querySelector("." + className).style.cssText = cssText;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], VicDetailsTableComponent.prototype, "paginator", void 0);
VicDetailsTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vic-details-table",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vic-details-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vic-details-table/vic-details-table.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vic-details-table.component.scss */ "./src/app/vic-details-table/vic-details-table.component.scss")).default]
    })
], VicDetailsTableComponent);

const RAW_DATA = src_assets_vic_details_table_data_json__WEBPACK_IMPORTED_MODULE_4__;


/***/ }),

/***/ "./src/assets/public-exposure-data.json":
/*!**********************************************!*\
  !*** ./src/assets/public-exposure-data.json ***!
  \**********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"caseNumber\":\"151 ~ 178\",\"dateAndTime\":\"Tuesday 17/03/2020\",\"location\":\"Ringwood police station\",\"locationType\":\"venue\",\"lat\":\"-37.813046\",\"lng\":\"145.2249438\",\"sourceLink\":[\"https://www.abc.net.au/news/2020-03-20/coronavirus-victoria-covid-19-cases-rise-to-178/12073486\",\"https://about.unimelb.edu.au/newsroom/news/2020/march/statement-on-second-confirmed-coronavirus-covid-19-case?utm_source=facebook&utm_medium=social&utm_content=story\"],\"dateConfirmed\":\"20/3/20\",\"age\":\"from mid-teens to late 60s\",\"gender\":\"male: 18, female: 10\",\"description\":[\"The majority of cases have been identified in and around metropolitan Melbourne, but yesterday authorities revealed cases in Ballarat, Geelong and the Latrobe Valley.\",\"An officer who worked at Ringwood police station in Melbourne's east on Tuesday was tested positive to the virus. The officer had only returned from annual leave on Tuesday when they learnt someone they had been in contact with while they were on leave had tested positive to COVID-19.\",\"A second staff member of the University of Melbourne has tested positive. The staff member arrived back from overseas prior to the Australian Government’s mandatory 14-day self-isolation period. On Tuesday 17 March, they visited the Peter Hall Building (Building 160) and the Australian Mathematical Sciences Institute (AMSI) Building 161. The staff member was not unwell when they attended campus and they are now at home self-isolating.\"]},{\"caseNumber\":\"151 ~ 178\",\"dateAndTime\":\"Tuesday 17/03/2020\",\"location\":\"Peter Hall Building (Building 160) & the Australian Mathematical Sciences Institute (Building 161) at the University of Melbourne\",\"locationType\":\"venue\",\"lat\":\"-37.7983722\",\"lng\":\"144.9593963\",\"sourceLink\":[\"https://www.abc.net.au/news/2020-03-20/coronavirus-victoria-covid-19-cases-rise-to-178/12073486\",\"https://about.unimelb.edu.au/newsroom/news/2020/march/statement-on-second-confirmed-coronavirus-covid-19-case?utm_source=facebook&utm_medium=social&utm_content=story\"],\"dateConfirmed\":\"20/3/20\",\"age\":\"from mid-teens to late 60s\",\"gender\":\"male: 18, female: 10\",\"description\":[\"The majority of cases have been identified in and around metropolitan Melbourne, but yesterday authorities revealed cases in Ballarat, Geelong and the Latrobe Valley.\",\"An officer who worked at Ringwood police station in Melbourne's east on Tuesday was tested positive to the virus. The officer had only returned from annual leave on Tuesday when they learnt someone they had been in contact with while they were on leave had tested positive to COVID-19.\",\"A second staff member of the University of Melbourne has tested positive. The staff member arrived back from overseas prior to the Australian Government’s mandatory 14-day self-isolation period. On Tuesday 17 March, they visited the Peter Hall Building (Building 160) and the Australian Mathematical Sciences Institute (AMSI) Building 161. The staff member was not unwell when they attended campus and they are now at home self-isolating.\"]},{\"caseNumber\":\"122 ~ 150\",\"dateAndTime\":\"Friday 13/03/2020\",\"location\":\"207-221 Bouverie Street, Carlton\",\"locationType\":\"venue\",\"lat\":\"-37.8013401\",\"lng\":\"144.9597262\",\"sourceLink\":[\"https://www.abc.net.au/news/2020-03-19/coronavirus-covid19-victoria-funding-boost-for-hospitals/12069612\",\"https://about.unimelb.edu.au/newsroom/news/2020/march/confirmed-case-of-COVID-19?utm_source=facebook&utm_medium=social&utm_content=story\"],\"dateConfirmed\":\"19/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"The University of Melbourne recorded its first case of the virus in a staff member who on Friday 13 March visited level 5 of the building located at 207-221 Bouverie Street, Carlton, as well as the associated common areas.\"]},{\"caseNumber\":\"50 ~ 57\",\"dateAndTime\":\"\",\"location\":\"Carey Baptist Grammar School\",\"locationType\":\"venue\",\"lat\":\"-37.818602\",\"lng\":\"144.9335489\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid19-cases-confirmed-victoria-15-march\"],\"dateConfirmed\":\"15/3/20\",\"age\":\"between teens to 60s\",\"gender\":\"male: 6, female: 2\",\"description\":[\"One is a student - a known contact of case 17, a teacher from Carey Grammar. The student was not at school during their infectious period. \"]},{\"caseNumber\":\"28 ~ 36\",\"dateAndTime\":\"Tuesday 10/03/2020, Arriving at 6:00am\",\"location\":\"Emirates flight EK0406 from Dubai to Melbourne\",\"onsetOfSymptomsUpTo\":\"24/3/20\",\"locationType\":\"flight\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria-13-march-2020\"],\"dateConfirmed\":\"13/3/20\",\"age\":\"between 20-70\",\"gender\":\"male: 6, female: 3\",\"description\":[\"Of the 9 new cases, 7 have a history of international travel.\",\"One case has no history of travel or contact with a confirmed case - the first case of community transmission.\",\"One case is a member of the McLaren Formula One team.\"]},{\"caseNumber\":\"28 ~ 36\",\"dateAndTime\":\"Tuesday 10/03/2020, 8:00am - 9:30am\",\"location\":\"No. 19, Ascot Vale\",\"onsetOfSymptomsUpTo\":\"24/3/20\",\"locationType\":\"venue\",\"lat\":\"-37.7732247\",\"lng\":\"144.9139323\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria-13-march-2020\"],\"dateConfirmed\":\"13/3/20\",\"age\":\"between 20-70\",\"gender\":\"male: 6, female: 3\",\"description\":[\"Of the 9 new cases, 7 have a history of international travel.\",\"One case has no history of travel or contact with a confirmed case - the first case of community transmission.\",\"One case is a member of the McLaren Formula One team.\"]},{\"caseNumber\":\"28 ~ 36\",\"dateAndTime\":\"Tuesday 10/03/2020, 12:30pm - 2:00pm\",\"location\":\"Mary Miller Café, Fitzroy North\",\"onsetOfSymptomsUpTo\":\"24/3/20\",\"locationType\":\"venue\",\"lat\":\"-37.7769846\",\"lng\":\"144.9848641\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria-13-march-2020\"],\"dateConfirmed\":\"13/3/20\",\"age\":\"between 20-70\",\"gender\":\"male: 6, female: 3\",\"description\":[\"Of the 9 new cases, 7 have a history of international travel.\",\"One case has no history of travel or contact with a confirmed case - the first case of community transmission.\",\"One case is a member of the McLaren Formula One team.\"]},{\"caseNumber\":\"28 ~ 36\",\"dateAndTime\":\"Monday 09/03/2020, Departing at 6:00pm\",\"location\":\"Qantas flight QF459 from Sydney to Melbourne\",\"onsetOfSymptomsUpTo\":\"23/3/20\",\"locationType\":\"flight\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria-13-march-2020\"],\"dateConfirmed\":\"13/3/20\",\"age\":\"between 20-70\",\"gender\":\"male: 6, female: 3\",\"description\":[\"Of the 9 new cases, 7 have a history of international travel.\",\"One case has no history of travel or contact with a confirmed case - the first case of community transmission.\",\"One case is a member of the McLaren Formula One team.\"]},{\"caseNumber\":\"28 ~ 36\",\"dateAndTime\":\"Monday 09/03/2020, Departing at 12:00pm\",\"location\":\"Qantas flight QF430 from Melbourne to Sydney\",\"onsetOfSymptomsUpTo\":\"23/3/20\",\"locationType\":\"flight\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria-13-march-2020\"],\"dateConfirmed\":\"13/3/20\",\"age\":\"between 20-70\",\"gender\":\"male: 6, female: 3\",\"description\":[\"Of the 9 new cases, 7 have a history of international travel.\",\"One case has no history of travel or contact with a confirmed case - the first case of community transmission.\",\"One case is a member of the McLaren Formula One team.\"]},{\"dateAndTime\":\"Sunday 08/03/2020, 5:15pm - 11:30pm\",\"location\":\"T20 Cricket World Cup Final, Melbourne Cricket Ground, MCC Members Level 2\",\"onsetOfSymptomsUpTo\":\"22/3/20\",\"locationType\":\"venue\",\"lat\":\"-37.8132788\",\"lng\":\"144.9535536\",\"sourceLink\":[\"\"]},{\"caseNumber\":\"21\",\"dateAndTime\":\"Monday 09/03/2020\",\"location\":\"Yeshiva-Beth Rivkah College\",\"locationType\":\"venue\",\"lat\":\"-37.8694007\",\"lng\":\"144.9990178\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/three-more-cases-covid-19-victoria\"],\"dateConfirmed\":\"11/3/20\",\"age\":\"50s\",\"gender\":\"male\",\"description\":[\"He returned from America.\",\"Both cases 20 and 21 were on flights from the USA which have had confirmed COVID-19 cases in passengers this week (UA60 and QF94). \",\"The man worked at Yeshiva-Beth Rivkah College for half a day whilst infectious on March 9. \"]},{\"caseNumber\":\"17\",\"dateAndTime\":\"Sunday 08/03/2020, 10:00am – 4:00pm\",\"location\":\"Myrtle Oval, Macleay Park, North Balwyn\",\"onsetOfSymptomsUpTo\":\"22/03/2020\",\"locationType\":\"venue\",\"lat\":\"-37.800963\",\"lng\":\"145.0729384\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/three-new-cases-covid-19-in-vic-10-march-2020\"],\"dateConfirmed\":\"10/3/20\",\"age\":\"50s\",\"gender\":\"female\",\"description\":[\"A household contact of a confirmed Victorian case of COVID-19 who returned on the February 29 flight UA60 from the United States.\",\"As the woman has not travelled overseas this is understood to be the first documented case of patient to patient transmission in Victoria.\",\"Prior to being diagnosed she attended the Under 16 final between Boroondara Cricket Club and Balwyn Cricket Club in Balwyn North on Sunday March 8 between 10 am and 4 pm.\"]},{\"dateAndTime\":\"Sunday 08/03/2020, Arrived 7:00AM\",\"location\":\"Virgin Australia flight VA24 from Los Angeles to Melbourne\",\"onsetOfSymptomsUpTo\":\"22/03/2020\",\"locationType\":\"flight\",\"sourceLink\":[\"\"]},{\"dateAndTime\":\"Sunday 08/03/2020, 8:30am - 5:00pm\",\"location\":\"Ramsden Street Oval, Clifton Hill\",\"onsetOfSymptomsUpTo\":\"22/03/2020\",\"locationType\":\"venue\",\"lat\":\"-37.79196\",\"lng\":\"145.0010454\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria\"]},{\"caseNumber\":\"16\",\"dateAndTime\":\"Saturday 07/03/2020, 6:00pm – 10:00pm\",\"location\":\"Albert Park Hotel\",\"onsetOfSymptomsUpTo\":\"21/03/2020\",\"locationType\":\"venue\",\"lat\":\"-37.8487164\",\"lng\":\"144.954973\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/three-new-cases-covid-19-in-vic-10-march-2020\"],\"dateConfirmed\":\"10/3/20\",\"age\":\"70s\",\"gender\":\"male\",\"description\":[\"He returned to Melbourne from Singapore on March 6 at 12.15 am on flight EK404.\",\"He had earlier travelled to Israel, Jordan, Egypt and Singapore.The man became unwell on February 27 in Egypt with a runny nose, cough and sore throat.\",\"Prior to being diagnosed he visited the South Melbourne Market on March 6 between 8.30 am and 10 am. \",\"He attended a function at The Albert Park Hotel on March 7 between 6 pm and 10 pm. \"]},{\"caseNumber\":\"19\",\"dateAndTime\":\"Saturday 07/03/2020, Evening\",\"location\":\"AAMI Park  (Rebels vs Lions rugby game)\",\"locationType\":\"venue\",\"lat\":\"-37.825132\",\"lng\":\"144.9815933\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/three-more-cases-covid-19-victoria\"],\"dateConfirmed\":\"11/3/20\",\"age\":\"50s\",\"gender\":\"male\",\"description\":[\"He returned to Melbourne from Seattle on March 7 at 7am on Virgin Australia flight VA24.\",\"Prior to being diagnosed he visited the Mussel and Jazz Festival at South Melbourne Market on March 7 between 2 pm and 3:30 pm. Later that day he attended a Rugby Union match between the Rebels and Lions at AAMI Park where he sat in section 9. \"]},{\"caseNumber\":\"19\",\"dateAndTime\":\"Saturday 07/03/2020, 2:00pm – 3:30pm\",\"location\":\"South Melbourne Market\",\"locationType\":\"venue\",\"lat\":\"-37.8320189\",\"lng\":\"144.9536325\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/three-more-cases-covid-19-victoria\"],\"dateConfirmed\":\"11/3/20\",\"age\":\"50s\",\"gender\":\"male\",\"description\":[\"He returned to Melbourne from Seattle on March 7 at 7am on Virgin Australia flight VA24.\",\"Prior to being diagnosed he visited the Mussel and Jazz Festival at South Melbourne Market on March 7 between 2 pm and 3:30 pm. Later that day he attended a Rugby Union match between the Rebels and Lions at AAMI Park where he sat in section 9. \"]},{\"dateAndTime\":\"Saturday 07/03/2020, 1:00pm - 6:00pm\",\"location\":\"Coles Waurn Ponds\",\"onsetOfSymptomsUpTo\":\"21/03/2020\",\"locationType\":\"venue\",\"lat\":\"-38.1992016\",\"lng\":\"144.3162507\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria\"]},{\"dateAndTime\":\"Saturday 07/03/2020, Unsure\",\"location\":\"Ashburton Park\",\"onsetOfSymptomsUpTo\":\"21/03/2020\",\"locationType\":\"venue\",\"lat\":\"-37.8633835\",\"lng\":\"145.0848216\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria\"]},{\"dateAndTime\":\"Friday 06/03/2020, 8:45am - 5:00pm\",\"location\":\"Coles Waurn Ponds\",\"onsetOfSymptomsUpTo\":\"20/3/20\",\"locationType\":\"venue\",\"lat\":\"-38.1992016\",\"lng\":\"144.3162507\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria\"]},{\"dateAndTime\":\"Friday 06/03/2020, Arrived 9am\",\"location\":\"Malaysia Airways flight MH0149 from Kuala Lumpur to Melbourne\",\"onsetOfSymptomsUpTo\":\"20/3/20\",\"locationType\":\"flight\",\"sourceLink\":[\"\"]},{\"caseNumber\":\"12\",\"dateAndTime\":\"Friday 06/03/2020, 6pm – 7pm\",\"location\":\"Pho Hung Vuong 2 Vietnamese Restaurant in Richmond\",\"onsetOfSymptomsUpTo\":\"20/3/20\",\"locationType\":\"venue\",\"lat\":\"-37.8101587\",\"lng\":\"144.9930193\",\"sourceLink\":[\"https://www.heraldsun.com.au/news/victoria/another-victorian-coronavirus-case-confirmed/news-story/3529e01c158f837eb48bc29203c92eeb\"],\"dateConfirmed\":\"7/3/20\",\"age\":\"50s\",\"gender\":\"female\",\"description\":[\"An Indonesian visitor\",\"She flew from Jakarta to Perth on 27 February. She was well on the international flight.\",\"She then travelled to Melbourne on Virgin flight VA682 on March 2.\",\"She also visited the Pho Hung Vuong 2 Vietnamese restaurant in Richmond on Friday, between 6pm and 7pm, before returning a positive test and being placed into self-isolation.\"]},{\"dateAndTime\":\"Friday 06/03/2020, Arrived 9:40am\",\"location\":\"Qantas flight QF94 from Los Angeles to Melbourne\",\"onsetOfSymptomsUpTo\":\"20/3/20\",\"locationType\":\"flight\",\"sourceLink\":[\"\"]},{\"caseNumber\":\"16\",\"dateAndTime\":\"Friday 06/03/2020, 8:30am – 10:00am\",\"location\":\"South Melbourne Market\",\"onsetOfSymptomsUpTo\":\"20/03/2020\",\"locationType\":\"venue\",\"lat\":\"-37.8320189\",\"lng\":\"144.9536325\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/three-new-cases-covid-19-in-vic-10-march-2020\"],\"dateConfirmed\":\"10/3/20\",\"age\":\"70s\",\"gender\":\"male\",\"description\":[\"He returned to Melbourne from Singapore on March 6 at 12.15 am on flight EK404.\",\"He had earlier travelled to Israel, Jordan, Egypt and Singapore.The man became unwell on February 27 in Egypt with a runny nose, cough and sore throat.\",\"Prior to being diagnosed he visited the South Melbourne Market on March 6 between 8.30 am and 10 am. \",\"He attended a function at The Albert Park Hotel on March 7 between 6 pm and 10 pm. \"]},{\"dateAndTime\":\"Friday 06/03/2020, Arrived 00:15am\",\"location\":\"Emirates flight EK404 from Singapore to Melbourne\",\"onsetOfSymptomsUpTo\":\"20/03/2020\",\"locationType\":\"flight\",\"sourceLink\":[\"\"]},{\"dateAndTime\":\"Tuesday 3/03/2020 - Thursday 5/03/2020, 3/03/2020: 9:00am - 12:00pm.\",\"sourceLink\":[\"\"]},{\"dateAndTime\":\"Tuesday 3/03/2020 - Thursday 5/03/2020, 3/03/2020: 9:00am - 12:00pm, 4/03/2020: 11:00am - 1:00pm, 5/03/2020: 1:00pm - 4:30pm\",\"location\":\"La Trobe University, Bundoora Campus\",\"onsetOfSymptomsUpTo\":\"17/03/2020 - 19/03/2020\",\"locationType\":\"venue\",\"lat\":\"-37.7206628\",\"lng\":\"145.0462253\",\"sourceLink\":[\"\"]},{\"dateAndTime\":\"Thursday 5/03/2020, Departing around 5:40pm\",\"location\":\"VLine train from Southern Cross to Geelong\",\"onsetOfSymptomsUpTo\":\"19/3/20\",\"locationType\":\"traffic\",\"lat\":\"-37.8183843\",\"lng\":\"144.9502967\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria\"]},{\"caseNumber\":\"13\",\"dateAndTime\":\"Thursday 5/03/2020, 7:30pm – 10:30pm\",\"location\":\"Cinema Nova, Carlton (Movie: The Amber Light)\",\"onsetOfSymptomsUpTo\":\"19/3/20\",\"locationType\":\"venue\",\"lat\":\"-37.7979877\",\"lng\":\"144.9657423\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/Three%20new%20cases%20of%20COVID-19%20in%20Victoria\"],\"dateConfirmed\":\"9/3/20\",\"age\":\"50s\",\"gender\":\"male\",\"description\":[\"A returned travaller from America.\",\"He was on the same flight – UA60 on February 29 - as the 11th case. He has a very mild illness and it is not clear if he picked up the virus on the flight or while overseas. He was not unwell on the flight but had mild symptoms the day after he arrived.\",\"Prior to his diagnosis he visited Wine by Sam in Seymour on March 3 – arriving at 12.30 pm and leaving at 3.30 pm. The visit included a winery tour and lunch.\",\"On March 5 he attended Cinema Nova in Carlton from 7.30 pm to 10.30 pm for a private screening of The Amber Light.\"]},{\"caseNumber\":\"13\",\"dateAndTime\":\"Tuesday 3/03/2020, 12:30–3:30pm\",\"location\":\"Wine by Sam - Seymour\",\"onsetOfSymptomsUpTo\":\"17/3/20\",\"locationType\":\"venue\",\"lat\":\"-37.0284337\",\"lng\":\"145.1412033\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/Three%20new%20cases%20of%20COVID-19%20in%20Victoria\"],\"dateConfirmed\":\"9/3/20\",\"age\":\"50s\",\"gender\":\"male\",\"description\":[\"A returned travaller from America.\",\"He was on the same flight – UA60 on February 29 - as the 11th case. He has a very mild illness and it is not clear if he picked up the virus on the flight or while overseas. He was not unwell on the flight but had mild symptoms the day after he arrived.\",\"Prior to his diagnosis he visited Wine by Sam in Seymour on March 3 – arriving at 12.30 pm and leaving at 3.30 pm. The visit included a winery tour and lunch.\",\"On March 5 he attended Cinema Nova in Carlton from 7.30 pm to 10.30 pm for a private screening of The Amber Light.\"]},{\"dateAndTime\":\"Monday 02/03/2020, Departing around 5:40pm\",\"location\":\"VLine train from Geelong to Southern Cross\",\"onsetOfSymptomsUpTo\":\"16/3/20\",\"locationType\":\"traffic\",\"lat\":\"-38.1444246\",\"lng\":\"144.3527677\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria\"]},{\"dateAndTime\":\"Monday 02/03/2020, Departing between 7:00 - 7:15pm\",\"location\":\"Metro train from Southern Cross to Camberwell\",\"onsetOfSymptomsUpTo\":\"16/3/20\",\"locationType\":\"traffic\",\"lat\":\"-37.8183843\",\"lng\":\"144.9502967\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria\"]},{\"dateAndTime\":\"Monday 02/03/2020, Arrived 4:20pm\",\"location\":\"Virgin Australia flight VA682 from Perth to Melbourne\",\"onsetOfSymptomsUpTo\":\"16/3/20\",\"locationType\":\"flight\",\"sourceLink\":[\"\"]},{\"caseNumber\":\"11\",\"dateAndTime\":\"Monday 02/03/2020 – Friday 06/03/2020, Patients and staff that attended the clinicany timebetween Monday 02/03/2020 – Friday 06/03/2020\",\"location\":\"Toorak Clinic, 575 Malvern Road, Toorak\",\"onsetOfSymptomsUpTo\":\"14 days from visiting the clinic (16 – 20 March 2020)\",\"locationType\":\"venue\",\"lat\":\"-37.8481568\",\"lng\":\"145.0033239\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/eleventh-case-coronavirus-victoria\"],\"dateConfirmed\":\"7/3/20\",\"age\":\"70s\",\"gender\":\"male\",\"description\":[\"A doctor from The Toorak Clinic in Malvern Road\",\"The doctor recently travelled to Denver and Vail (Colorado) via Los Angeles and was there for 12 days prior to illness onset. As such, he most likely acquired his infection in the United States.\",\"He became unwell with a runny nose on an internal flight from Denver to San Francisco on February 27 (US time) and then flew direct from San Francisco to Melbourne on flight UA0060 arriving at approximately 0930 on Saturday February 29.\",\"He consulted approximately 70 patients for five days between Monday March 2 and Friday March 6. He also attended two patients at the MECWA Malvern Centre nursing home, in Malvern Rd, Malvern, during that time.\"]},{\"caseNumber\":\"11\",\"dateAndTime\":\"Monday 02/03/2020 – Friday 06/03/2020\",\"location\":\"the MECWA Malvern Centre nursing home, in Malvern Rd, Malvern\",\"locationType\":\"venue\",\"lat\":\"-37.8292969\",\"lng\":\"144.9702899\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/eleventh-case-coronavirus-victoria\"],\"dateConfirmed\":\"7/3/20\",\"age\":\"70s\",\"gender\":\"male\",\"description\":[\"A doctor from The Toorak Clinic in Malvern Road\",\"The doctor recently travelled to Denver and Vail (Colorado) via Los Angeles and was there for 12 days prior to illness onset. As such, he most likely acquired his infection in the United States.\",\"He became unwell with a runny nose on an internal flight from Denver to San Francisco on February 27 (US time) and then flew direct from San Francisco to Melbourne on flight UA0060 arriving at approximately 0930 on Saturday February 29.\",\"He consulted approximately 70 patients for five days between Monday March 2 and Friday March 6. He also attended two patients at the MECWA Malvern Centre nursing home, in Malvern Rd, Malvern, during that time.\"]},{\"dateAndTime\":\"Saturday 29/02/2020, Arrived 9:30am\",\"location\":\"United Airlines flight UA0060 from San Francisco to Melbourne\",\"onsetOfSymptomsUpTo\":\"14/3/20\",\"locationType\":\"flight\",\"sourceLink\":[\"\"]},{\"dateAndTime\":\"Saturday 29/02/2020, Arrived 10:50am\",\"location\":\"Singapore Airlines flight SQ237 from Singapore to Melbourne\",\"onsetOfSymptomsUpTo\":\"14/3/20\",\"locationType\":\"flight\",\"sourceLink\":[\"\"]},{\"dateAndTime\":\"Friday 28/02/2020, 10:50am (Singapore time)\",\"location\":\"Molinda Air flight OD177 from Denpasar to Melbourne\",\"onsetOfSymptomsUpTo\":\"13/3/20\",\"locationType\":\"flight\",\"sourceLink\":[\"\"]},{\"caseNumber\":\"2\",\"dateAndTime\":\"Sunday 26/01/2020, 5.30pm - 7pm\",\"location\":\"The House of Delight\",\"locationType\":\"venue\",\"lat\":\"-37.8810316\",\"lng\":\"145.1604464\",\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/second-novel-coronavirus-case-victoria\"],\"dateConfirmed\":\"29/1/20\",\"age\":\"60s\",\"gender\":\"male\",\"description\":[\"A Victorian resident\",\"He travelled to Wuhan City, Hubei Province, China and first became unwell more than two days after returning from China.\",\"The man attended a restaurant called The House of Delight, at Level 1, 52 Montclair Avenue, Glen Waverley, between 5.30pm and 7pm on Sunday 26 January 2020.\"]}]");

/***/ }),

/***/ "./src/assets/statistics.json":
/*!************************************!*\
  !*** ./src/assets/statistics.json ***!
  \************************************/
/*! exports provided: date_arr, confirmed_vic_arr, confirmed_au_arr, recovered_au_arr, deaths_au_arr, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"date_arr\":[\"25/1/20\",\"26/1/20\",\"27/1/20\",\"28/1/20\",\"29/1/20\",\"30/1/20\",\"31/1/20\",\"1/2/20\",\"2/2/20\",\"3/2/20\",\"4/2/20\",\"5/2/20\",\"6/2/20\",\"7/2/20\",\"8/2/20\",\"9/2/20\",\"10/2/20\",\"11/2/20\",\"12/2/20\",\"13/2/20\",\"14/2/20\",\"15/2/20\",\"16/2/20\",\"17/2/20\",\"18/2/20\",\"19/2/20\",\"20/2/20\",\"21/2/20\",\"22/2/20\",\"23/2/20\",\"24/2/20\",\"25/2/20\",\"26/2/20\",\"27/2/20\",\"28/2/20\",\"29/2/20\",\"1/3/20\",\"2/3/20\",\"3/3/20\",\"4/3/20\",\"5/3/20\",\"6/3/20\",\"7/3/20\",\"8/3/20\",\"9/3/20\",\"10/3/20\",\"11/3/20\",\"12/3/20\",\"13/3/20\",\"14/3/20\",\"15/3/20\",\"16/3/20\",\"17/3/20\",\"18/3/20\",\"19/3/20\",\"20/3/20\",\"21/3/20\",\"22/3/20\",\"23/3/20\",\"24/3/20\"],\"confirmed_vic_arr\":[\"1\",\"1\",\"1\",\"1\",\"2\",\"3\",\"3\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"7\",\"7\",\"7\",\"7\",\"7\",\"9\",\"9\",\"9\",\"10\",\"10\",\"10\",\"12\",\"12\",\"15\",\"18\",\"21\",\"27\",\"36\",\"49\",\"57\",\"71\",\"94\",\"121\",\"150\",\"178\",\"229\",\"296\",\"355\",\"411\"],\"confirmed_au_arr\":[\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"126\",\"156\",\"197\",\"249\",\"298\",\"375\",\"454\",\"565\",\"709\",\"874\",\"1098\",\"1709\",\"2136\"],\"recovered_au_arr\":[\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"24\",\"26\",\"27\",\"27\",\"27\",\"27\",\"43\",\"46\",\"\",\"\",\"\",\"\",\"\"],\"deaths_au_arr\":[\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"1\",\"1\",\"2\",\"2\",\"3\",\"3\",\"3\",\"3\",\"3\",\"3\",\"3\",\"3\",\"3\",\"3\",\"3\",\"5\",\"5\",\"5\",\"6\",\"6\",\"7\",\"7\",\"7\",\"8\"]}");

/***/ }),

/***/ "./src/assets/vic-details-table-data.json":
/*!************************************************!*\
  !*** ./src/assets/vic-details-table-data.json ***!
  \************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"caseNumber\":\"356 ~ 411\",\"dateConfirmed\":\"24/3/20\",\"age\":\"from pre-school age to late 80s\",\"gender\":\"male: 36, female: 27\",\"description\":[\"At the present time, there are 6 confirmed cases of COVID-19 in Victoria that may have been acquired through community transmission. Currently 12 people are in hospital, including 2 patients in intensive care. 113 people have recovered. More than 25,000 Victorians have been tested to date.\",\"Of the total 411 cases, there have been 350 in metropolitan Melbourne and 41 in regional Victoria.\"],\"sourceLink\":[\"https://www.dhhs.vic.gov.au/coronavirus-update-victoria-24-march-2020\"]},{\"caseNumber\":\"297 ~ 355\",\"dateConfirmed\":\"23/3/20\",\"age\":\"from early teens to mid 80s\",\"gender\":\"male: 34, female: 25\",\"description\":[\"At the present time, there are six confirmed cases of COVID-19 in Victoria that may have been acquired through community transmission. \",\"Of the total 355 cases, there have been 290 in metropolitan Melbourne and 35 in regional Victoria.\"],\"sourceLink\":[\"https://www.dhhs.vic.gov.au/coronavirus-update-victoria-23-march-2020\"]},{\"caseNumber\":\"230 ~ 296\",\"dateConfirmed\":\"22/3/20\",\"age\":\"from late teens to early 80s\",\"gender\":\"male: 42, female: 25\",\"description\":[\"\"],\"sourceLink\":[\"https://7news.com.au/lifestyle/health-wellbeing/coronavirus-cases-surge-by-49-in-victoria-bringing-the-statewide-total-to-278-c-756635\"]},{\"caseNumber\":\"179 ~ 229\",\"dateConfirmed\":\"21/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"\"],\"sourceLink\":[\"https://www.abc.net.au/news/2020-03-21/coronavirus-cases-in-victoria-rise-to-229-as-police-run-checks/12077596\"]},{\"caseNumber\":\"151 ~ 178\",\"dateConfirmed\":\"20/3/20\",\"age\":\"from mid-teens to late 60s\",\"gender\":\"male: 18, female: 10\",\"description\":[\"The majority of cases have been identified in and around metropolitan Melbourne, but yesterday authorities revealed cases in Ballarat, Geelong and the Latrobe Valley.\",\"An officer who worked at Ringwood police station in Melbourne's east on Tuesday was tested positive to the virus. The officer had only returned from annual leave on Tuesday when they learnt someone they had been in contact with while they were on leave had tested positive to COVID-19.\",\"A second staff member of the University of Melbourne has tested positive. The staff member arrived back from overseas prior to the Australian Government’s mandatory 14-day self-isolation period. On Tuesday 17 March, they visited the Peter Hall Building (Building 160) and the Australian Mathematical Sciences Institute (AMSI) Building 161. The staff member was not unwell when they attended campus and they are now at home self-isolating.\"],\"sourceLink\":[\"https://www.abc.net.au/news/2020-03-20/coronavirus-victoria-covid-19-cases-rise-to-178/12073486\",\"https://about.unimelb.edu.au/newsroom/news/2020/march/statement-on-second-confirmed-coronavirus-covid-19-case?utm_source=facebook&utm_medium=social&utm_content=story\"]},{\"caseNumber\":\"122 ~ 150\",\"dateConfirmed\":\"19/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"The University of Melbourne recorded its first case of the virus in a staff member who on Friday 13 March visited level 5 of the building located at 207-221 Bouverie Street, Carlton, as well as the associated common areas.\"],\"sourceLink\":[\"https://www.abc.net.au/news/2020-03-19/coronavirus-covid19-victoria-funding-boost-for-hospitals/12069612\",\"https://about.unimelb.edu.au/newsroom/news/2020/march/confirmed-case-of-COVID-19?utm_source=facebook&utm_medium=social&utm_content=story\"]},{\"caseNumber\":\"95 ~ 121\",\"dateConfirmed\":\"18/3/20\",\"age\":\"from late teens to early 70s\",\"gender\":\"male: 14, female: 13\",\"description\":[\"At the present time, there are 2 confirmed cases of COVID-19 in Victoria that may have been acquired through community transmission. Currently 6 people are recovering in hospital. More than 15,200 Victorians have been tested to date.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria-18-march-2020\"]},{\"caseNumber\":\"72 ~ 94\",\"dateConfirmed\":\"17/3/20\",\"age\":\"from early 20s to mid 60s\",\"gender\":\"male: 11, female: 12\",\"description\":[\"63 of Victoria's confirmed cases were acquired overseas or through close contact with known, confirmed cases of COVID-19, and 29 cases are still being investigated.\",\"At the present time, there are two confirmed cases of COVID-19 in Victoria that may have been acquired through community transmission. Currently seven people are recovering in hospital. More than 14,200 Victorians have been tested to date.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria-17-march-2020\"]},{\"caseNumber\":\"58 ~ 71\",\"dateConfirmed\":\"16/3/20\",\"age\":\"between teens to 60s\",\"gender\":\"male: 9, female: 5\",\"description\":[\"Seven of the new confirmed cases were acquired overseas or through close contact with known, confirmed cases of COVID-19, and seven cases are still being investigated.\",\"At the present time, there are two confirmed cases of COVID-19 in Victoria that may have been acquired through community transmission.\",\"Currently five people are recovering in hospital. More than 11,700 Victorians have been tested to date.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria-16-march-2020\"]},{\"caseNumber\":\"50 ~ 57\",\"dateConfirmed\":\"15/3/20\",\"age\":\"between teens to 60s\",\"gender\":\"male: 6, female: 2\",\"description\":[\"One is a student - a known contact of case 17, a teacher from Carey Grammar. The student was not at school during their infectious period. \"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid19-cases-confirmed-victoria-15-march\"]},{\"caseNumber\":\"37 ~ 49\",\"dateConfirmed\":\"14/3/20\",\"age\":\"between 20 and 69\",\"gender\":\"male: 11, female: 2\",\"description\":[\"All new confirmed cases were acquired overseas or through close contact with known, confirmed cases of COVID-19.\",\"All cases are recovering at home in isolation, except for one person who was admitted to hospital and is stable.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria-14-march-2020\"]},{\"caseNumber\":\"28 ~ 36\",\"dateConfirmed\":\"13/3/20\",\"age\":\"between 20-70\",\"gender\":\"male: 6, female: 3\",\"description\":[\"Of the 9 new cases, 7 have a history of international travel.\",\"One case has no history of travel or contact with a confirmed case - the first case of community transmission.\",\"One case is a member of the McLaren Formula One team.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria-13-march-2020\"]},{\"caseNumber\":\"22 ~ 27\",\"dateConfirmed\":\"12/3/20\",\"age\":\"between 30-70\",\"gender\":\"male\",\"description\":[\"Of the six new cases, five have a history of international travel. One is a close contact of a confirmed case.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/more-covid-19-cases-confirmed-in-victoria\"]},{\"caseNumber\":\"21\",\"dateConfirmed\":\"11/3/20\",\"age\":\"50s\",\"gender\":\"male\",\"description\":[\"He returned from America.\",\"Both cases 20 and 21 were on flights from the USA which have had confirmed COVID-19 cases in passengers this week (UA60 and QF94). \",\"The man worked at Yeshiva-Beth Rivkah College for half a day whilst infectious on March 9. \"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/three-more-cases-covid-19-victoria\"]},{\"caseNumber\":\"20\",\"dateConfirmed\":\"11/3/20\",\"age\":\"20s\",\"gender\":\"female\",\"description\":[\"She has recently travelled to multiple locations in the United States. She became unwell on February 29, shortly after returning to Melbourne on the same day.\",\"Both cases 20 and 21 were on flights from the USA which have had confirmed COVID-19 cases in passengers this week (UA60 and QF94). \"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/three-more-cases-covid-19-victoria\"]},{\"caseNumber\":\"19\",\"dateConfirmed\":\"11/3/20\",\"age\":\"50s\",\"gender\":\"male\",\"description\":[\"He returned to Melbourne from Seattle on March 7 at 7am on Virgin Australia flight VA24.\",\"Prior to being diagnosed he visited the Mussel and Jazz Festival at South Melbourne Market on March 7 between 2 pm and 3:30 pm. Later that day he attended a Rugby Union match between the Rebels and Lions at AAMI Park where he sat in section 9. \"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/three-more-cases-covid-19-victoria\"]},{\"caseNumber\":\"18\",\"dateConfirmed\":\"10/3/20\",\"age\":\"70s\",\"gender\":\"male\",\"description\":[\"He arrived home in Melbourne from Los Angeles on March 8 on flight VA24 arriving at 7:30 am and presented to hospital for testing immediately.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/three-new-cases-covid-19-in-vic-10-march-2020\"]},{\"caseNumber\":\"17\",\"dateConfirmed\":\"10/3/20\",\"age\":\"50s\",\"gender\":\"female\",\"description\":[\"A household contact of a confirmed Victorian case of COVID-19 who returned on the February 29 flight UA60 from the United States.\",\"As the woman has not travelled overseas this is understood to be the first documented case of patient to patient transmission in Victoria.\",\"Prior to being diagnosed she attended the Under 16 final between Boroondara Cricket Club and Balwyn Cricket Club in Balwyn North on Sunday March 8 between 10 am and 4 pm.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/three-new-cases-covid-19-in-vic-10-march-2020\"]},{\"caseNumber\":\"16\",\"dateConfirmed\":\"10/3/20\",\"age\":\"70s\",\"gender\":\"male\",\"description\":[\"He returned to Melbourne from Singapore on March 6 at 12.15 am on flight EK404.\",\"He had earlier travelled to Israel, Jordan, Egypt and Singapore.The man became unwell on February 27 in Egypt with a runny nose, cough and sore throat.\",\"Prior to being diagnosed he visited the South Melbourne Market on March 6 between 8.30 am and 10 am. \",\"He attended a function at The Albert Park Hotel on March 7 between 6 pm and 10 pm. \"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/three-new-cases-covid-19-in-vic-10-march-2020\"]},{\"caseNumber\":\"15\",\"dateConfirmed\":\"9/3/20\",\"age\":\"50s\",\"gender\":\"female\",\"description\":[\"A returned travaller from Iran.\",\"She returned from Tehran via Kuala Lumpur on MH0149 arriving at 9.00 am on March 6.\",\"She became unwell on 18 February while in Tehran with cough, fever and shortness of breath. On arrival in Melbourne she was driven immediately to hospital by a relative and treated for pneumonia.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/Three%20new%20cases%20of%20COVID-19%20in%20Victoria\"]},{\"caseNumber\":\"14\",\"dateConfirmed\":\"9/3/20\",\"age\":\"20s\",\"gender\":\"female\",\"description\":[\"A returned travaller from America.\",\"She returned from Colorado on QF94, from Los Angeles arriving in Melbourne at 9.40 am on March 6. \"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/Three%20new%20cases%20of%20COVID-19%20in%20Victoria\"]},{\"caseNumber\":\"13\",\"dateConfirmed\":\"9/3/20\",\"age\":\"50s\",\"gender\":\"male\",\"description\":[\"A returned travaller from America.\",\"He was on the same flight – UA60 on February 29 - as the 11th case. He has a very mild illness and it is not clear if he picked up the virus on the flight or while overseas. He was not unwell on the flight but had mild symptoms the day after he arrived.\",\"Prior to his diagnosis he visited Wine by Sam in Seymour on March 3 – arriving at 12.30 pm and leaving at 3.30 pm. The visit included a winery tour and lunch.\",\"On March 5 he attended Cinema Nova in Carlton from 7.30 pm to 10.30 pm for a private screening of The Amber Light.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/Three%20new%20cases%20of%20COVID-19%20in%20Victoria\"]},{\"caseNumber\":\"12\",\"dateConfirmed\":\"7/3/20\",\"age\":\"50s\",\"gender\":\"female\",\"description\":[\"An Indonesian visitor\",\"She flew from Jakarta to Perth on 27 February. She was well on the international flight.\",\"She then travelled to Melbourne on Virgin flight VA682 on March 2.\",\"She also visited the Pho Hung Vuong 2 Vietnamese restaurant in Richmond on Friday, between 6pm and 7pm, before returning a positive test and being placed into self-isolation.\"],\"sourceLink\":[\"https://www.heraldsun.com.au/news/victoria/another-victorian-coronavirus-case-confirmed/news-story/3529e01c158f837eb48bc29203c92eeb\"]},{\"caseNumber\":\"11\",\"dateConfirmed\":\"7/3/20\",\"age\":\"70s\",\"gender\":\"male\",\"description\":[\"A doctor from The Toorak Clinic in Malvern Road\",\"The doctor recently travelled to Denver and Vail (Colorado) via Los Angeles and was there for 12 days prior to illness onset. As such, he most likely acquired his infection in the United States.\",\"He became unwell with a runny nose on an internal flight from Denver to San Francisco on February 27 (US time) and then flew direct from San Francisco to Melbourne on flight UA0060 arriving at approximately 0930 on Saturday February 29.\",\"He consulted approximately 70 patients for five days between Monday March 2 and Friday March 6. He also attended two patients at the MECWA Malvern Centre nursing home, in Malvern Rd, Malvern, during that time.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/eleventh-case-coronavirus-victoria\"]},{\"caseNumber\":\"10\",\"dateConfirmed\":\"4/3/20\",\"age\":\"30s\",\"gender\":\"male\",\"description\":[\"The man became unwell with a mild illness on March 1, four days after returning from Iran on February 26.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/tenth-covid-19-case-victoria\"]},{\"caseNumber\":\"9\",\"dateConfirmed\":\"1/3/20\",\"age\":\"30s\",\"gender\":\"female\",\"description\":[\"The woman became unwell on February 27 while travelling to Melbourne from Tehran, via Kuala Lumpur and Bali. She travelled on Malindo Air on flight number OD177 and landed in Melbourne on 28 February at 6.04am.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/ninth-covid-19-case-victoria\"]},{\"caseNumber\":\"8\",\"dateConfirmed\":\"1/3/20\",\"age\":\"70s\",\"gender\":\"male\",\"description\":[\"A passenger from the Diamond Princess cruise ship\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/ninth-covid-19-case-victoria\"]},{\"caseNumber\":\"5 ~ 7\",\"dateConfirmed\":\"25/2/20\",\"age\":\"-\",\"gender\":\"-\",\"description\":[\"Passengers from the Diamond Princess cruise ship\"],\"sourceLink\":[\"https://www.canberratimes.com.au/story/6648541/seventh-coronavirus-case-confirmed-in-vic/?cs=14231\",\"https://www.msn.com/en-au/news/australia/eighth-australian-is-diagnosed-with-coronavirus-on-board-doomed-diamond-princess-cruise-ship/ar-BB10owaM?li=AAgfIYZ\"]},{\"caseNumber\":\"4\",\"dateConfirmed\":\"1/2/20\",\"age\":\"20s\",\"gender\":\"female\",\"description\":[\"After spending time in Wuhan, Hubei Province, she returned home to Victoria on January 25 and became unwell two days later.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/fourth-novel-coronavirus-case-victoria\"]},{\"caseNumber\":\"3\",\"dateConfirmed\":\"30/1/20\",\"age\":\"40s\",\"gender\":\"female\",\"description\":[\"A visitor from Hubei Province in China\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/third-novel-coronavirus-case-victoria\"]},{\"caseNumber\":\"2\",\"dateConfirmed\":\"29/1/20\",\"age\":\"60s\",\"gender\":\"male\",\"description\":[\"A Victorian resident\",\"He travelled to Wuhan City, Hubei Province, China and first became unwell more than two days after returning from China.\",\"The man attended a restaurant called The House of Delight, at Level 1, 52 Montclair Avenue, Glen Waverley, between 5.30pm and 7pm on Sunday 26 January 2020.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/second-novel-coronavirus-case-victoria\"]},{\"caseNumber\":\"1\",\"dateConfirmed\":\"25/1/20\",\"age\":\"50s\",\"gender\":\"male\",\"description\":[\"A visitor from China\",\"He had been in the city of Wuhan, China in the two weeks prior to the onset of his illness.\",\"He arrived in Australia on the morning of January 19 from Wuhan to Melbourne via Guangzhou. The first leg was on CZ3706 and he came into Melbourne on China Southern Airlines flight CZ321.\"],\"sourceLink\":[\"https://www2.health.vic.gov.au/about/media-centre/MediaReleases/first-novel-coronavirus-case-in-victoria\"]}]");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yiyi/github/COVID-19-VIC_20200310/COVID19-VIC/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map