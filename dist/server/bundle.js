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
/******/ 	__webpack_require__.p = "/Library/WebServer/Documents/angular-universal";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(1);
	var express = __webpack_require__(2);
	var angular2_universal_preview_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(5);
	var app_1 = __webpack_require__(6);
	var app = express();
	var root = path.join(path.resolve(__dirname, '..'));
	core_1.enableProdMode();
	app.engine('.html', angular2_universal_preview_1.ng2engine);
	app.set('views', __dirname);
	app.set('view engine', 'html');
	function ngApp(req, res) {
	    var baseUrl = '/';
	    var url = req.originalUrl || '/';
	    res.render('index', {
	        App: app_1.App,
	        providers: [
	            core_1.provide(router_1.APP_BASE_HREF, { useValue: baseUrl }),
	            core_1.provide(angular2_universal_preview_1.REQUEST_URL, { useValue: url }),
	            router_1.ROUTER_PROVIDERS,
	            angular2_universal_preview_1.SERVER_LOCATION_PROVIDERS,
	        ],
	        preboot: true
	    });
	}
	app.use(express.static(root));
	app.use('/', ngApp);
	app.use('/about', ngApp);
	app.use('/home', ngApp);
	app.listen(80, function () {
	    console.log('Listen on http://localhost:80');
	});

	/* WEBPACK VAR INJECTION */}.call(exports, "src"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-preview");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2/core");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("angular2/router");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(5);
	var XLarge = (function () {
	    function XLarge(element, renderer) {
	        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
	    }
	    XLarge = __decorate([
	        core_1.Directive({
	            selector: '[x-large]'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], XLarge);
	    return XLarge;
	})();
	exports.XLarge = XLarge;
	var Home = (function () {
	    function Home() {
	    }
	    Home = __decorate([
	        core_1.Component({
	            selector: 'home',
	            template: "\n  Home\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Home);
	    return Home;
	})();
	exports.Home = Home;
	var About = (function () {
	    function About() {
	    }
	    About = __decorate([
	        core_1.Component({
	            selector: 'about',
	            template: "\n  About\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], About);
	    return About;
	})();
	exports.About = About;
	var App = (function () {
	    function App() {
	        this.name = 'Angular 2';
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: router_1.ROUTER_DIRECTIVES.concat([
	                XLarge
	            ]),
	            styles: ["\n    .router-link-active {\n      background-color: lightgray;\n    }\n  "],
	            template: "\n  <div>\n    <nav>\n      <a [routerLink]=\" ['./Home'] \">Home</a>\n      <a [routerLink]=\" ['./About'] \">About</a>\n    </nav>\n    <div>\n      <span x-large>Hello, {{ name }}!</span>\n    </div>\n\n    name: <input type=\"text\" [value]=\"name\" (input)=\"name = $event.target.value\" autofocus>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n  "
	        }),
	        router_1.RouteConfig([
	            { path: '/', component: Home, name: 'Home' },
	            { path: '/home', component: Home, name: 'Home' },
	            { path: '/about', component: About, name: 'About' }
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	})();
	exports.App = App;


/***/ }
/******/ ]);