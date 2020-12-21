define(["@grafana/data","@grafana/runtime","@grafana/ui","lodash","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
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

/***/ "./ConfigEditor.tsx":
/*!**************************!*\
  !*** ./ConfigEditor.tsx ***!
  \**************************/
/*! exports provided: ConfigEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEditor", function() { return ConfigEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField;

var ConfigEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConfigEditor, _super);

  function ConfigEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onTimeFieldChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        timeField: event.target.value
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onTableFieldChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        tableField: event.target.value
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    };

    return _this;
  }

  ConfigEditor.prototype.render = function () {
    var _a = this.props,
        options = _a.options,
        onOptionsChange = _a.onOptionsChange;
    var jsonData = options.jsonData;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["DataSourceHttpSettings"], {
      defaultUrl: 'http://localhost:10041',
      dataSourceConfig: options,
      showAccessOptions: false,
      onChange: onOptionsChange
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "page-heading"
    }, "Groonga Details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      label: "Default table name",
      labelWidth: 20,
      inputWidth: 20,
      onChange: this.onTableFieldChange,
      value: jsonData.tableField || '',
      placeholder: ""
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      label: "Default time field name",
      labelWidth: 20,
      inputWidth: 20,
      onChange: this.onTimeFieldChange,
      value: jsonData.timeField || '',
      placeholder: ""
    }))));
  };

  return ConfigEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./DataSource.ts":
/*!***********************!*\
  !*** ./DataSource.ts ***!
  \***********************/
/*! exports provided: DataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _query_def__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query_def */ "./query_def.ts");
/* harmony import */ var _select_parameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select_parameters */ "./select_parameters.ts");






function pushColumns(_tableDataFormat, _text, _type) {
  // format is { "text": "_id", "type": "number" }
  _tableDataFormat.columns.push({
    text: _text,
    type: _type
  });
}

var DataSource =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataSource, _super);

  function DataSource(instanceSettings) {
    var _this = _super.call(this, instanceSettings) || this; //this.basicAuth = instanceSettings.basicAuth === undefined ? '' : instanceSettings.basicAuth;


    _this.withCredentials = instanceSettings.withCredentials !== undefined;
    _this.url = instanceSettings.url === undefined ? '' : instanceSettings.url;
    _this.name = instanceSettings.name;
    _this.index = instanceSettings.database === undefined ? '' : instanceSettings.database;
    var settingsData = instanceSettings.jsonData || {};
    _this.tableField = settingsData.tableField === undefined ? '' : settingsData.tableField;
    _this.timeField = settingsData.timeField === undefined ? '' : settingsData.timeField;
    _this.headers = {
      'Content-Type': 'application/json'
    };

    if (typeof instanceSettings.basicAuth === 'string' && instanceSettings.basicAuth.length > 0) {
      _this.headers['Authorization'] = instanceSettings.basicAuth;
    }

    return _this;
  } // query API


  DataSource.prototype.query = function (options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, Promise, function () {
      var selectParams, serializedOptionStr;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        selectParams = new _select_parameters__WEBPACK_IMPORTED_MODULE_4__["SelectParameters"](this.tableField, this.timeField, options.targets, options.range.from.valueOf() / 1000, options.range.to.valueOf() / 1000, options.intervalMs === undefined ? 1000 : options.intervalMs);
        serializedOptionStr = selectParams.buildQueryParameters();
        return [2
        /*return*/
        , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getBackendSrv"])().datasourceRequest({
          url: this.url + '/d/select?' + serializedOptionStr
        }).then(function (result) {
          var selects = selectParams.isAggregate(0) ? result.data[1][1] : result.data[1][0];

          if (_query_def__WEBPACK_IMPORTED_MODULE_3__["isGraphAggregateType"](selectParams.aggs[0].aggType)) {
            return _this.createGraphResponse(selects, selectParams);
          } else {
            return _this.createTableResponse(selects, selectParams);
          }
        })];
      });
    });
  }; // tastDatasource API


  DataSource.prototype.testDatasource = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        // Implement a health check for your data source.
        return [2
        /*return*/
        , this.doRequest({
          url: this.url + '/d/status',
          method: 'GET'
        }).then(function (response) {
          if (response.status === 200) {
            return {
              status: 'success',
              message: 'Data source is working',
              title: 'Success'
            };
          }

          return {
            status: 'error',
            message: "Data source is not working: " + response.message,
            title: 'Error'
          };
        })];
      });
    });
  };

  DataSource.prototype.doRequest = function (options) {
    options.withCredentials = this.withCredentials;
    options.headers = this.headers;
    return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getBackendSrv"])().datasourceRequest(options);
  };

  DataSource.prototype.getTypeStr = function (_type) {
    switch (_type) {
      case 'Time':
        return 'time';
        break;

      case 'Int8':
      case 'Int16':
      case 'Int32':
      case 'Int64':
      case 'UInt8':
      case 'UInt16':
      case 'UInt32':
      case 'UInt64':
      case 'Float':
        return 'number';
        break;

      default:
        return 'string';
        break;
    }
  }; // 指定のカラムを探す


  DataSource.prototype.getColumnIndex = function (_schema, _colName) {
    var colIndex = -1;

    var colName = _colName.trim(); // 指定されている場合


    if (colName !== '') {
      // 正しい場合はtimeColIndexが-1以外になる
      colIndex = _schema.findIndex(function (item) {
        return item[0] === colName;
      });
    }

    return colIndex;
  }; // キーとなる時刻情報を探す


  DataSource.prototype.getKeyColumnIndex = function (_schema, _timeCol) {
    var timeColIndex = -1;

    var colName = _timeCol.trim(); // キーとなる時刻情報が指定されている場合


    if (colName !== '') {
      // 正しい場合はtimeColIndexが-1以外になる
      timeColIndex = _schema.findIndex(function (item) {
        return item === colName;
      });
    } // キーとなる時刻情報が指定されていない場合(指定されたが間違っている場合含む):最初に見つかったTime型のカラムとする


    if (timeColIndex === -1) {
      // 見つかった場合はtimeColIndexが-1以外になる
      timeColIndex = _schema.findIndex(function (item) {
        return item[1] === 'Time';
      });
    }

    return timeColIndex;
  };

  DataSource.prototype.extractGraphMetrics = function (_gIndexs, _select, _selectParams, _aggIndex) {
    var _this = this;

    var mets = ['__dummy__'];
    var indexTTemp = -1;
    var schema = _select[1];
    schema.filter(function (c, i) {
      if (_gIndexs.data === -1) {
        _gIndexs.data = i;
      } else if (c[0] === _selectParams.getAggTimeColName() || _selectParams.isOnlyAggTimeCol(_aggIndex) && c[0] === '_key') {
        _gIndexs.time = i;
      } else if (_this.getTypeStr(c[1]) === 'time') {
        indexTTemp = indexTTemp === -1 ? i : indexTTemp;
      } else if (_gIndexs.metric === -1) {
        _gIndexs.metric = i;
      }
    });
    _gIndexs.time = _gIndexs.time === -1 ? indexTTemp : _gIndexs.time;

    if (_gIndexs.metric === -1) {
      mets.push('');
    } else {
      _select.filter(function (r, rowIndex) {
        if (rowIndex >= 2) {
          var m = r[_gIndexs.metric];

          if (!mets.includes(m)) {
            mets.push(m);
          }
        }
      });
    }

    mets.shift();
    mets.sort();
    return mets;
  }; // キーとなる時刻情報が指定されていない場合は最初に見つかったTime型のカラムとする
  // なぜかcfgtidがTimeと判定されるので、その小細工含めておく
  // 見つからない場合は-1が返る


  DataSource.prototype.createTableColumnHeader = function (_tableDataFormat, _queryIndexes, _schema, _selectParams) {
    var _this = this;

    var _a;

    var queries = _selectParams.getQueries();

    var metrics = _selectParams.getMetrics(0);

    function isMetricColumn(_colName, _metrics) {
      if (_metrics === undefined || _metrics.length <= 0) {
        return false;
      }

      return _metrics.findIndex(function (metric) {
        return metric === _colName;
      }) !== -1;
    }

    function pushQueryIndexes(index) {
      var _a;

      if (index !== -1) {
        (_a = _queryIndexes) === null || _a === void 0 ? void 0 : _a.push({
          name: _schema[index][0],
          index: index,
          metric: isMetricColumn(_schema[index][0], metrics)
        });
      }
    } //_queryIndexes = [];
    // キーとなる時刻情報を探す


    var timeColIndex = this.getKeyColumnIndex(_schema, _selectParams.timeField); //let metricColIndex = getColumnIndex(_schema, _metric);

    var timeCol = _selectParams.timeField;

    if (timeColIndex !== -1) {
      pushColumns(_tableDataFormat, 'Time', 'time');
      timeCol = _schema[timeColIndex][0];

      _queryIndexes.push({
        name: timeCol,
        index: timeColIndex,
        metric: true
      });
    }

    _tableDataFormat.columns.shift();

    _queryIndexes.shift();

    if (queries === undefined || queries.length <= 0) {
      _schema.forEach(function (sch, index) {
        if (index !== timeColIndex) {
          pushQueryIndexes(index);
        }
      });
    } else {
      (_a = queries) === null || _a === void 0 ? void 0 : _a.forEach(function (colName) {
        var index = _this.getColumnIndex(_schema, colName);

        if (index !== timeColIndex) {
          pushQueryIndexes(index);
        }
      });
    }

    _queryIndexes.forEach(function (queryIndex) {
      var columnName = _schema[queryIndex.index][0];

      if (columnName === timeCol) {
        //timeColIndex = col;
        return;
      }

      var columnTypeStr = _this.getTypeStr(_schema[queryIndex.index][1]);

      pushColumns(_tableDataFormat, columnName, columnTypeStr);
    });

    return timeColIndex;
  };

  DataSource.prototype.createGraphResponse = function (_selects, _selectParams) {
    var _this = this;

    var data = [{
      target: '',
      datapoints: [{}]
    }];
    data.shift();

    _selectParams.aggs.forEach(function (agg, index) {
      var _select = _selects[agg.refId]; //let mets = ['__dummy__'];

      var gIndexs = {
        time: -1,
        metric: -1,
        data: -1
      };

      if (_select.length > 1) {
        // 集約キーの検索用の配列作成
        var mets_1 = _this.extractGraphMetrics(gIndexs, _select, _selectParams, index); // 集約キーをtargetとして保持


        mets_1.forEach(function (m) {
          return data.push({
            target: m,
            datapoints: [{}]
          });
        }); // 複数Queryを同時に指定する場合

        var bParallel_1 = _selectParams.aggs.length > 1 && gIndexs.metric === -1;
        var indexPtemp = data.findIndex(function (d, i) {
          return d.target === '';
        });
        var indexP_1 = bParallel_1 ? indexPtemp !== -1 ? indexPtemp : 0 : 0;

        _select.filter(function (row, rowIndex) {
          if (rowIndex >= 2) {
            var m = gIndexs.metric !== -1 ? row[gIndexs.metric] : '';
            var t = gIndexs.time !== -1 ? row[gIndexs.time] : 0;
            var d = gIndexs.data !== -1 ? row[gIndexs.data] : 0;
            var i = mets_1.indexOf(m);
            var index_1 = bParallel_1 ? indexP_1 : i === -1 ? 0 : i;
            data[index_1].datapoints.push([d, t * 1000]);
          }
        });

        data.forEach(function (d) {
          d.datapoints.shift();
        });

        if (bParallel_1) {
          data[indexP_1].target = agg.aggTarget;
        }
      }
    });

    return {
      data: data
    };
  };

  DataSource.prototype.createTableResponse = function (_select, _selectParams) {
    var _schema = _select[1];
    var queryIndexes = [{
      name: '',
      index: -1,
      metric: false
    }]; // time column

    var timeColIndex = -1;
    var dataT = [];
    var tableData = {
      columns: [{
        text: 'Time',
        type: 'time'
      }],
      rows: [{}]
    };
    dataT.push(tableData);
    timeColIndex = this.createTableColumnHeader(tableData, queryIndexes, _schema, _selectParams);

    var _loop_1 = function _loop_1(row) {
      // row = 0 is datanum, row = 1 is data format
      record = _select[row];
      datapoints = tableData.rows;
      var datas = []; //for (let col = 0; col < schema.length; col++) {

      queryIndexes.forEach(function (queryIndex) {
        if (queryIndex.index === timeColIndex) {
          datas.push(record[queryIndex.index] * 1000);
        } else {
          datas.push(record[queryIndex.index]);
        }
      });
      datapoints.push(datas);
    };

    var record, datapoints;

    for (var row = 2; row < _select.length; row++) {
      _loop_1(row);
    }

    tableData.rows.shift();
    return {
      data: dataT
    };
  };

  return DataSource;
}(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["DataSourceApi"]);


/*
//sample
// Grafana response data format : To Grafana Graph panel
graphData_Response_Format = [
{
  target: "sample1",
  datapoints: [
    [622, 1450754160000],
    [365, 1450754220000],
    [522, 1450755160000],
    [465, 1450755220000],
    [422, 1450765160000],
    [765, 1450765220000],
  ]
},
{
  target: "sample2",
  datapoints: [
    [861, 1450754160000],
    [767, 1450754220000],
    [1161, 1450755160000],
    [1267, 1450755220000],
    [1361, 1450765160000],
    [1467, 1450765220000],
  ]
}
];
// Grafana response data format : To Grafana Table/Stat panel
tableData_Response_Format = [
{
  columns: [
    { text: "Time", type: "time" },
    { text: "Country", type: "string" },
    { text: "Number", type: "number" }
  ],
  rows: [
    [1450754160000, "SE", 123],
    [1450754160000, "DE", 231],
    [1450754160000, "US", 321]
  ],
}
];

// Groonga response data : From Groonga
// データ部分:datasourceRequestの戻り値resultのresult.data

// 非集約時
data: Array(2)
  0:Array(3)
    0:0
    1:1596608156.696258
    2:0.0006730556488037109
  1:Array(1)  //データ部分
    0:Array(508963)
      0:Array(1) // Data Count
        0:508961
      1:Array(2) // Data Schema
        0:["_id", "UInt32"]
        1:["action", "ref_f_action"]
      2:Array(2)
        0:100
        1:"pass"
      ・・・
      508962:Array(2)
        0:501000
        1:"pass"

// 集約時
data: Array(2)
  0:Array(3)
    0:0
    1:1596608156.696258
    2:0.0006730556488037109
  1:Array(2)  //データ部分
    0:Array(12)  //非集約データ部分
      0:Array(1) // Data Count
        0:10
      1:Array(1) // Data Schema
        0:["AGGTIME", "UInt64"]
      2:Array(2) // Data本体：2以降Count+1まで
        0:1595862000
      ・・・
      11:Array(2)
        0:1595862000
    1:Array(35445)  //集約データ部分
      A:Array(35545)  //Queryごと
        0:Array(1) // Data Count
          0:35443
        1:Array(1) // Data Schema
          0: ["_sum", "Int64"] // 一つ目に集約結果データ
          1: ["AGGTIME", "UInt64"] // 二つ目にキーとなるTime
          2: ["dstip", "ref_f_dstip"] // 三つ目に集約キーの値
        2: (3) [0, 1595862000, "100.200.100.200"]  // Data本体：2以降Count+1まで
        3: (3) [2151, 1595862000, "200.200.1.45"]
        ・・・
        35544:(3) [89, 1595943000, "40.50.100.60"]

// 集約時(複数Query指定時)
data: Array(2)
  0:Array(3)
    0:0
    1:1596608156.696258
    2:0.0006730556488037109
  1:Array(2)  //データ部分
    0:Array(12)  //非集約データ部分
      0:Array(1) // Data Count
        0:10
      1:Array(1) // Data Schema
        0:["AGGTIME", "UInt64"]
      2:Array(2) // Data本体：2以降Count+1まで
        0:1595862000
      ・・・
      11:Array(2)
        0:1595862000
    1: //集約データ部分
      A:Array(273)  //Queryごと
        0:Array(1) // Data Count
          0:271
        1:Array(1) // Data Schema
          0: ["_sum", "Int64"] // 一つ目に集約結果データ
          1: ["_key", "UInt64"] // 二つ目にキーとなるTime
        2: (2) [1565121, 1595862000]  // Data本体：2以降Count+1まで
        3: (2) [2151501, 1595862000]
        ・・・
        272:(2) [89, 1595943000]
      B:Array(273)  //Queryごと
        0:Array(1) // Data Count
          0:271
        1:Array(1) // Data Schema
          0: ["_sum", "Int64"] // 一つ目に集約結果データ
          1: ["_key", "UInt64"] // 二つ目にキーとなるTime
        2: (2) [958322, 1595862000]  // Data本体：2以降Count+1まで
        3: (2) [234223, 1595862000]
        ・・・
        272:(2) [62629, 1595943000]

*/

/***/ }),

/***/ "./QueryEditor.tsx":
/*!*************************!*\
  !*** ./QueryEditor.tsx ***!
  \*************************/
/*! exports provided: QueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEditor", function() { return QueryEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField,
    Select = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].Select;
var aggTypes = [{
  label: 'none',
  value: ''
}, {
  label: 'count',
  value: 'count'
}, {
  label: 'sum',
  value: 'sum'
}, {
  label: 'max',
  value: 'max'
}, {
  label: 'min',
  value: 'min'
}, {
  label: 'avg',
  value: 'avg'
}];
var intervalTypes = [{
  label: 'none',
  value: ''
}, {
  label: '10s',
  value: '10s'
}, {
  label: '30s',
  value: '30s'
}, {
  label: '1m',
  value: '1m'
}, {
  label: '5m',
  value: '5m'
}, {
  label: '15m',
  value: '15m'
}, {
  label: '30m',
  value: '30m'
}, {
  label: '1h',
  value: '1h'
}, {
  label: '2h',
  value: '2h'
}, {
  label: '6h',
  value: '6h'
}, {
  label: '1d',
  value: '1d'
}, {
  label: '1w',
  value: '1w'
}];

var QueryEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QueryEditor, _super);

  function QueryEditor(props) {
    var _this = _super.call(this, props) || this;

    _this.onRunQuery = function () {
      var query = _this.query;

      _this.props.onChange(query);

      _this.props.onRunQuery();
    };

    _this.onChangeQuery = function () {
      var query = _this.query;

      _this.props.onChange(query); //this.props.onRunQuery();

    };

    _this.onTableChange = function (event) {
      var value = event.target.value;
      _this.query.table = value;

      _this.setState({
        value: value
      }, _this.onChangeQuery);
    };

    _this.onTimeChange = function (event) {
      var value = event.target.value;
      _this.query.timeField = value;

      _this.setState({
        value: value
      }, _this.onChangeQuery);
    };

    _this.onQueryTextChange = function (event) {
      var value = event.target.value;
      _this.query.queryText = value;

      _this.setState({
        value: value
      }, _this.onChangeQuery);
    };

    _this.onFilterTextChange = function (event) {
      var value = event.target.value;
      _this.query.filter = value;

      _this.setState({
        value: value
      }, _this.onChangeQuery);
    };

    _this.onSortByTextChange = function (event) {
      var value = event.target.value;
      _this.query.sortby = value;

      _this.setState({
        value: value
      }, _this.onChangeQuery);
    };

    _this.onLimitChange = function (event) {
      var value = parseInt(event.target.value, 10);
      _this.query.limit = value;

      _this.setState({
        value: value
      }, _this.onChangeQuery);
    };

    _this.onAggregateKeyStrChange = function (event) {
      var value = event.target.value;
      _this.query.aggregateKeyStr = value;

      _this.setState({
        value: value
      }, _this.onChangeQuery);
    };

    _this.onAggregateOptionChange = function (option) {
      var query = _this.query;
      var value = option.value ? option.value : '';
      query.aggregateType = value;

      _this.setState({
        value: value
      }, _this.onChangeQuery);
    };

    _this.onAggregateTargetTextChange = function (event) {
      var value = event.target.value;
      _this.query.aggregateTarget = value;

      _this.setState({
        value: value
      }, _this.onChangeQuery);
    };

    _this.onAggregateIntervalChange = function (option) {
      var query = _this.query;
      var value = option.value ? option.value : '';
      query.aggregateInterval = value;

      _this.setState({
        value: value
      }, _this.onChangeQuery);
    };

    var defaultQuery = {
      queryText: '',
      interval: '',
      table: '',
      column: '',
      filter: '',
      sortby: '',
      limit: 1000,
      aggregateType: '',
      aggregateKeyStr: '',
      aggregateTarget: '',
      aggregateInterval: ''
    };
    var query = Object.assign({}, defaultQuery, props.query);
    _this.query = query;
    _this.state = {
      queryText: query.queryText,
      interval: query.interval,
      table: query.table,
      column: query.column,
      filter: query.filter,
      aggregateType: query.aggregateType,
      aggregateKeyStr: query.aggregateKeyStr,
      aggregateTarget: query.aggregateTarget,
      aggregateInterval: query.aggregateInterval,
      limit: query.limit
    };
    return _this;
  }

  QueryEditor.prototype.render = function () {
    var _this = this; //const query = defaults(this.props.query, defaultQuery);


    var query = this.props.query;
    var table = query.table,
        timeField = query.timeField,
        queryText = query.queryText,
        filter = query.filter,
        sortby = query.sortby,
        limit = query.limit,
        aggregateKeyStr = query.aggregateKeyStr,
        aggregateTarget = query.aggregateTarget;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-primary width-8",
      onClick: this.onRunQuery
    }, "Query")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-7"
    }, "FROM"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      labelWidth: 8,
      inputWidth: 16,
      value: table || '',
      onChange: this.onTableChange,
      label: "Table name"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      labelWidth: 8,
      inputWidth: 16,
      value: timeField || '',
      onChange: this.onTimeChange,
      label: "Time field",
      tooltip: "Name of field to use for time"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-7"
    }, "SELECT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      labelWidth: 8,
      inputWidth: 16,
      value: queryText || '',
      onChange: this.onQueryTextChange,
      label: "Output columns",
      tooltip: "Comma-separated list of columns to return"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      labelWidth: 8,
      inputWidth: 6,
      value: limit || '',
      onChange: this.onLimitChange,
      label: "Limit",
      tooltip: "Limit the number of rows in the query result"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-7"
    }, "WHERE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      labelWidth: 8,
      inputWidth: 16,
      value: filter || '',
      onChange: this.onFilterTextChange,
      label: "Filter",
      tooltip: "For example, action==_id > 10000 && action='deny'"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-7"
    }, "ORDER BY"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      labelWidth: 8,
      inputWidth: 16,
      value: sortby || '',
      onChange: this.onSortByTextChange,
      label: "Sort columns",
      tooltip: "Comma-separated list of columns to sort by, for example: _id,-app"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-7"
    }, "GROUP BY"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      labelWidth: 8,
      inputWidth: 12,
      value: aggregateKeyStr || '',
      onChange: this.onAggregateKeyStrChange,
      label: "Key columns",
      tooltip: "Columns used to aggregate results, for example: eventtime,action"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      labelWidth: 4,
      inputWidth: 10,
      label: "Type",
      inputEl: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Select, {
        options: aggTypes,
        value: aggTypes.find(function (option) {
          return option.value === (_this.props.query.aggregateType === undefined ? 'none' : _this.props.query.aggregateType);
        }),
        onChange: this.onAggregateOptionChange
      })
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      labelWidth: 6,
      inputWidth: 8,
      value: aggregateTarget || '',
      onChange: this.onAggregateTargetTextChange,
      label: "Target",
      tooltip: "Column to use as an aggregation target"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      labelWidth: 4,
      inputWidth: 10,
      label: "Interval",
      inputEl: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Select, {
        options: intervalTypes,
        value: intervalTypes.find(function (option) {
          return option.value === (_this.props.query.aggregateInterval === undefined ? 'none' : _this.props.query.aggregateInterval);
        }),
        onChange: this.onAggregateIntervalChange
      })
    })))));
  };

  return QueryEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataSource */ "./DataSource.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfigEditor */ "./ConfigEditor.tsx");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryEditor */ "./QueryEditor.tsx");




var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["DataSourcePlugin"](_DataSource__WEBPACK_IMPORTED_MODULE_1__["DataSource"]).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__["ConfigEditor"]).setQueryEditor(_QueryEditor__WEBPACK_IMPORTED_MODULE_3__["QueryEditor"]);

/***/ }),

/***/ "./query_def.ts":
/*!**********************!*\
  !*** ./query_def.ts ***!
  \**********************/
/*! exports provided: aggTypes, getAggTypes, getAggTypesTextStr, getAggTypesColumnStr, getAggTypesQueryStr, isGraphAggregateType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aggTypes", function() { return aggTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggTypes", function() { return getAggTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggTypesTextStr", function() { return getAggTypesTextStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggTypesColumnStr", function() { return getAggTypesColumnStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggTypesQueryStr", function() { return getAggTypesQueryStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGraphAggregateType", function() { return isGraphAggregateType; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var aggTypes = [{
  text: 'None',
  value: 'none',
  columnText: '',
  queryText: '',
  requiresField: false,
  isGraphAggType: false
}, {
  text: 'Count',
  value: 'count',
  columnText: '_nsubrecs',
  queryText: 'COUNT',
  requiresField: false,
  isGraphAggType: true
}, {
  text: 'Average',
  value: 'avg',
  columnText: '_avg',
  queryText: 'AVG',
  requiresField: true,
  isGraphAggType: true
}, {
  text: 'Sum',
  value: 'sum',
  columnText: '_sum',
  queryText: 'SUM',
  requiresField: true,
  isGraphAggType: true
}, {
  text: 'Max',
  value: 'max',
  columnText: '_max',
  queryText: 'MAX',
  requiresField: true,
  isGraphAggType: true
}, {
  text: 'Min',
  value: 'min',
  columnText: '_min',
  queryText: 'MIN',
  requiresField: true,
  isGraphAggType: true
}];
function getAggTypes() {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(aggTypes);
}
function getAggTypesTextStr(_agg) {
  var aggType = aggTypes.find(function (aggType) {
    return aggType.value === _agg;
  });

  if (aggType === undefined) {
    return '';
  } else {
    return aggType.text;
  }
}
function getAggTypesColumnStr(_agg) {
  var aggType = aggTypes.find(function (aggType) {
    return aggType.value === _agg;
  });

  if (aggType === undefined) {
    return '';
  } else {
    return aggType.columnText;
  }
}
function getAggTypesQueryStr(_agg) {
  var aggType = aggTypes.find(function (aggType) {
    return aggType.value === _agg;
  });

  if (aggType === undefined) {
    return '';
  } else {
    return aggType.queryText;
  }
}
function isGraphAggregateType(_agg) {
  var aggType = aggTypes.find(function (aggType) {
    return aggType.value === _agg;
  });

  if (aggType === undefined) {
    return false;
  } else {
    return aggType.isGraphAggType;
  }
}
/*
function getAggType(_agg: string): string {
  switch (_agg) {
    case 'count':
      return 'count';
    case 'min':
      return 'min';
    case 'max':
      return 'max';
    case 'sum':
    default:
      return 'sum';
      break;
  }
}
*/

/*
function getAggTypeStr(_agg: string): string {
  let ret = '';
  switch (_agg) {
    case 'none':
    default:
      break;
    case 'count':
      ret = '_nsubrecs';
      break;
    case 'min':
      ret = '_min';
      break;
    case 'max':
      ret = '_max';
      break;
    case 'avg':
      ret = '_avg';
      break;
    case 'sum':
      ret = '_sum';
      break;
  }
  return ret;
}
function getAggColumnStr(_agg: string): string {
  let ret = '';
  switch (_agg) {
    case 'none':
    default:
      break;
    case 'count':
      ret = 'COUNT';
      break;
    case 'min':
      ret = 'MIN';
      break;
    case 'max':
      ret = 'MAX';
      break;
    case 'avg':
      ret = 'AVG';
      break;
    case 'sum':
      ret = 'SUM';
      break;
  }
  return ret;
}
*/

/***/ }),

/***/ "./select_parameters.ts":
/*!******************************!*\
  !*** ./select_parameters.ts ***!
  \******************************/
/*! exports provided: SelectParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectParameters", function() { return SelectParameters; });
/* harmony import */ var _query_def__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query_def */ "./query_def.ts");

var timekey_alias = 'AGGTIME';

var SelectParameters =
/** @class */
function () {
  function SelectParameters(_tableField, _timeField, _groongaQuerys, _timeRangeFrom, _timeRangeTo, _intervalMs) {
    var _this = this;

    this.rangeFrom = _timeRangeFrom;
    this.rangeTo = _timeRangeTo;

    if (_groongaQuerys[0].table !== undefined && _groongaQuerys[0].table.length > 0) {
      this.table = _groongaQuerys[0].table;
    } else {
      this.table = _tableField;
    }

    if (_groongaQuerys[0].timeField !== undefined && _groongaQuerys[0].timeField.length > 0) {
      this.timeField = _groongaQuerys[0].timeField;
    } else {
      this.timeField = _timeField;
    }

    this.query = _groongaQuerys[0].queryText === undefined ? '' : _groongaQuerys[0].queryText;
    this.filter = _groongaQuerys[0].filter;
    this.sortby = _groongaQuerys[0].sortby;
    this.limit = _groongaQuerys[0].limit;
    this.aggs = [];

    _groongaQuerys.forEach(function (_agg) {
      var agg = {
        refId: _agg.refId,
        aggType: _agg.aggregateType,
        aggKeyStr: _agg.aggregateKeyStr,
        aggTarget: _agg.aggregateTarget,
        aggInterval: _agg.aggregateInterval === undefined ? '' : _agg.aggregateInterval
      };

      _this.aggs.push(agg);
    });

    this.intervalMs = _intervalMs === undefined ? 1000 : _intervalMs;
  }

  SelectParameters.prototype.isEnableAggregate = function (_index) {
    var index = _index < 0 || _index >= this.aggs.length ? 0 : _index;
    var aggQuery = _query_def__WEBPACK_IMPORTED_MODULE_0__["getAggTypesQueryStr"](this.aggs[index].aggType);
    return this.isExist(this.aggs[index].aggKeyStr) && aggQuery.length > 0;
  };

  SelectParameters.prototype.getAggTimeColName = function () {
    return timekey_alias;
  };

  SelectParameters.prototype.isOnlyAggTimeCol = function (_index) {
    var index = _index < 0 || _index >= this.aggs.length ? 0 : _index;
    return this.aggs[index].aggKeyStr === this.getAggTimeColName();
  };

  SelectParameters.prototype.isAggregate = function (_index) {
    var index = _index < 0 || _index >= this.aggs.length ? 0 : _index;
    var aggQuery = _query_def__WEBPACK_IMPORTED_MODULE_0__["getAggTypesQueryStr"](this.aggs[index].aggType);
    return this.isExist(this.aggs[index].aggKeyStr) && aggQuery.length > 0;
  };

  SelectParameters.prototype.getQueries = function () {
    return this.splitCsv(this.query);
  };

  SelectParameters.prototype.getMetrics = function (_index) {
    var index = _index < 0 || _index >= this.aggs.length ? 0 : _index;
    return this.splitCsv(this.aggs[index].aggKeyStr);
  };

  SelectParameters.prototype.buildQueryParameters = function () {
    var _this = this;

    var limitNumDefault = 10; // default

    var bEnableAggregate = this.isEnableAggregate(0); // create groonga api parameter

    var serializedOptionStr = ''; // table : table name

    serializedOptionStr += this.getQueryStr(false, 'table', this.table); // filter : time range

    var timeRange = '';

    if (this.isExist(this.timeField)) {
      timeRange = 'between(' + this.timeField + ',' + this.rangeFrom.toString() + ',' + this.rangeTo.toString() + ')';
    }

    serializedOptionStr += this.getQueryStr(true, 'filter', timeRange); // filter : filter string

    if (this.isExist(this.filter)) {
      serializedOptionStr += '%26%26' + this.filter.replace(/&/g, '%26');
    } // limit : target record num


    if (this.limit !== undefined && this.limit >= 0) {
      var limitNum = bEnableAggregate ? limitNumDefault : this.limit;
      serializedOptionStr += this.getQueryStr(true, 'limit', limitNum);
    } // output_columns : output columns (not aggregate)


    if (this.isExist(this.query)) {
      serializedOptionStr += this.getQueryStr(true, 'output_columns', this.query);
    }

    if (!bEnableAggregate) {
      // without aggregate parameters
      // sortby : sort key columns (not aggregate)
      if (this.isExist(this.sortby)) {
        serializedOptionStr += this.getQueryStr(true, 'sortby', this.sortby);
      }
    } else {
      // Drilldown data
      this.aggs.forEach(function (agg, index) {
        serializedOptionStr += _this.getDrilldownStrs(index);
      }); //span agg

      if (this.aggs[0].aggInterval !== undefined && this.aggs[0].aggInterval.length > 0) {
        serializedOptionStr += this.getColumnsStr(true, 'stage', 'initial');
        serializedOptionStr += this.getColumnsStr(true, 'type', 'Time');
        var timeKeyStr = this.getTimeClassifyStr(this.aggs[0].aggInterval);
        serializedOptionStr += this.getColumnsStr(true, 'value', timeKeyStr);
      }
    }

    return serializedOptionStr;
  };

  SelectParameters.prototype.getTimeClassifyStr = function (intervalStr) {
    var defaultStr = 'time_classify_minute(' + this.timeField + ',1)';

    if (intervalStr === undefined || intervalStr.length <= 0) {
      return defaultStr;
    }

    var ret = 'time_classify_';
    var value = intervalStr.replace(/[^0-9]/g, '');
    var unit = intervalStr.slice(-1);

    switch (unit) {
      case 's':
        ret += 'second';
        break;

      case 'm':
        ret += 'minute';
        break;

      case 'h':
        ret += 'hour';
        break;

      case 'd':
        ret += 'day';
        break;

      case 'w':
        ret += 'week';
        break;

      case 'M':
        ret += 'month';
        break;

      case 'Y':
        ret += 'year';
        break;

      default:
        return defaultStr;
    }

    ret += '(' + this.timeField + ',' + value + ')';
    return ret;
  };

  SelectParameters.prototype.getDrilldownStrs = function (_index) {
    var index = _index < 0 || _index >= this.aggs.length ? 0 : _index;
    var metrics = this.splitCsv(this.aggs[index].aggKeyStr);
    var aggQuery = _query_def__WEBPACK_IMPORTED_MODULE_0__["getAggTypesQueryStr"](this.aggs[index].aggType);
    var aggCol = _query_def__WEBPACK_IMPORTED_MODULE_0__["getAggTypesColumnStr"](this.aggs[index].aggType);
    var ddStrs = ''; // aggregate parameters

    ddStrs += this.getDrilldownsStr(index, true, 'keys', this.aggs[index].aggKeyStr);
    ddStrs += this.getDrilldownsStr(index, true, 'output_columns', aggCol);

    if (metrics === undefined || metrics.length <= 1) {
      ddStrs += ',_key';
    } else {
      metrics.forEach(function (m) {
        return ddStrs += ',_value.' + m;
      });
    } //serializedOptionStr += '&drilldowns[' + refId + '].output_columns=_key,_nsubrecs,_max,_min,_sum,_avg';
    //serializedOptionStr += '&drilldowns[' + refId + '].calc_types=COUNT,MAX,MIN,SUM,AVG';


    ddStrs += this.getDrilldownsStr(index, true, 'calc_types', aggQuery);
    var limitNum = 10; // defalut

    if (this.limit !== undefined && this.limit >= 0) {
      limitNum = this.limit;
    }

    ddStrs += this.getDrilldownsStr(index, true, 'limit', limitNum); //serializedOptionStr += '&drilldowns[' + refId + '].calc_target=_id';

    if (this.isExist(this.aggs[index].aggTarget)) {
      ddStrs += this.getDrilldownsStr(index, true, 'calc_target', this.aggs[index].aggTarget);
    }

    ddStrs += this.getDrilldownsStr(index, true, 'sort_keys', '');

    if (metrics === undefined || metrics.length <= 1) {
      ddStrs += '_key';
    } else {
      metrics.forEach(function (m) {
        return ddStrs += '_value.' + m + ',';
      });
      ddStrs += aggCol;
    }

    return ddStrs;
  };

  SelectParameters.prototype.getQueryStr = function (needFirstAmpersand, paramname, paramvalue) {
    return (needFirstAmpersand ? '&' : '') + paramname + '=' + paramvalue;
  };

  SelectParameters.prototype.getDrilldownsStr = function (index, needFirstAmpersand, paramname, paramvalue) {
    return (needFirstAmpersand ? '&' : '') + 'drilldowns[' + this.aggs[index].refId + '].' + paramname + '=' + paramvalue;
  };

  SelectParameters.prototype.getColumnsStr = function (needFirstAmpersand, paramname, paramvalue) {
    return (needFirstAmpersand ? '&' : '') + 'columns[' + this.getAggTimeColName() + '].' + paramname + '=' + paramvalue;
  };

  SelectParameters.prototype.isExist = function (_str) {
    return !(_str === undefined || _str.length <= 0);
  };

  SelectParameters.prototype.splitCsv = function (_csvstr) {
    var _a, _b, _c;

    var arr = (_a = _csvstr) === null || _a === void 0 ? void 0 : _a.split(',');

    if (arr === undefined || ((_b = arr) === null || _b === void 0 ? void 0 : _b.length) <= 0 || ((_c = arr) === null || _c === void 0 ? void 0 : _c.length) === 1 && arr[0].length <= 0) {
      arr = undefined;
    }

    return arr;
  };

  return SelectParameters;
}();



/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map