webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(277),
        styles: [__webpack_require__(261)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(_httpService) {
        this._httpService = _httpService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        // this._httpService.retrieveData()
        // .then(data => {this.allmenu = data;
        // console.log(data)})
        // .catch( err => {console.log(err);})
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__(278),
        styles: [__webpack_require__(262)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 164;


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(178);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(275),
        styles: [__webpack_require__(259)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authguard_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_admin_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__callback_callback_component__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { AUTH_PROVIDERS } from 'angular2-jwt';
//,AUTH_PROVIDERS





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_12__callback_callback_component__["a" /* CallbackComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__authguard_service__["a" /* AuthguardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__callback_callback_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authguard_service__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var APP_ROUTES = [
    { path: '', redirectTo: '/home',
        pathMatch: 'full' },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_4__callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__authguard_service__["a" /* AuthguardService */]] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    CLIENT_ID: 'K67Sffss7Ejw12brFTu0bH4VpFz2Gdy8',
    CLIENT_DOMAIN: 'shrutha.auth0.com',
    AUDIENCE: 'ramen-taka-api',
    REDIRECT: 'http://localhost:8000/callback',
    SCOPE: 'openid profile'
};
//# sourceMappingURL=auth0-variables.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "\n img {\n   width: 200px;\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "#buglogo {\n  margin-top: -15px;\n}\n\n#caro-image {\n  height: 400px;\n}\n\nbody {\n  background-color: black;\n}\n\nh4 {\n  text-decoration: underline;\n}\n.well {\n  background-color: black;\n  color: white;\n  margin-bottom: 0px;\n  border-style: none;\n}\n\n#contact {\n  background-color: black;\n  color: white;\n}\n\n#about {\n  color: white;\n}\n\n.carousel-inner > .item > img {\n    margin: 0 auto;\n}\n\nfooter {\n  background-color: black;\n}\n\n/*navbarcss*/\n.navbar-default {\n  background-color: #000000;\n  border-color: #9b060e;\n}\n.navbar-default .navbar-brand {\n  color: #ecf0f1;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #ce4f56;\n}\n.navbar-default .navbar-text {\n  color: #ecf0f1;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #ecf0f1;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #ce4f56;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #ce4f56;\n  background-color: #9b060e;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #ce4f56;\n  background-color: #9b060e;\n}\n.navbar-default .navbar-toggle {\n  border-color: #9b060e;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #9b060e;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #ecf0f1;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #ecf0f1;\n}\n.navbar-default .navbar-link {\n  color: #ecf0f1;\n}\n.navbar-default .navbar-link:hover {\n  color: #ce4f56;\n}\n\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #ecf0f1;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #ce4f56;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #ce4f56;\n    background-color: #9b060e;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "#buglogo {\n  margin-top: -15px;\n}\n\nbody {\n  background-color: black;\n  padding-top: 40px;\n  height: 100%;\n  color: white;\n}\n\n/*Menu CSS*/\n#custom_carousel .controls a small {\n    font-size: 1em !important;\n}\n\n#menu {\nfont-family: serif;\n}\n\n.carousel-inner {\n    overflow: visible;\n}\n\n#custom_carousel .item {\n    height: auto;\n    color:white;\n    background-color:#000000;\n    padding: 10px 0 ;\n    overflow: visible;\n}\n#custom_carousel .controls{\n    overflow-x: visible;\n    overflow-y: visible;\n    padding:0;\n    margin:0;\n    white-space: nowrap;\n    text-align: center;\n    position: relative;\n    background:#000\n}\n#custom_carousel .controls li {\n    display: table-cell;\n    width: 1%;\n    max-width:90px\n}\n#custom_carousel .controls li.active {\n    background-color:#000;\n    border-top:2px solid #ac1114;\n}\n#custom_carousel .controls a small {\n    overflow:hidden;\n    display:block;\n    font-size:10px;\n    margin-top:5px;\n    font-weight:bold\n}\n\n/*navbarcss*/\n.navbar-default {\n  background-color: #000000;\n  border-color: #9b060e;\n}\n.navbar-default .navbar-brand {\n  color: #ecf0f1;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #ce4f56;\n}\n.navbar-default .navbar-text {\n  color: #ecf0f1;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #ecf0f1;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #ce4f56;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #ce4f56;\n  background-color: #9b060e;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #ce4f56;\n  background-color: #9b060e;\n}\n.navbar-default .navbar-toggle {\n  border-color: #9b060e;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #9b060e;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #ecf0f1;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #ecf0f1;\n}\n.navbar-default .navbar-link {\n  color: #ecf0f1;\n}\n.navbar-default .navbar-link:hover {\n  color: #ce4f56;\n}\n\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #ecf0f1;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #ce4f56;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #ce4f56;\n    background-color: #9b060e;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf = \"validuser\">\n  <div class=\"panel panel-default profile-area\">\n  <div class=\"panel-heading\">\n    <h3>Hello {{profile?.nickname }}!</h3>\n    <button class=\"pull-right\" (click)=\"auth.logout()\" *ngIf=\"auth.authenticated()\">Logout</button>\n  </div>\n  <div class=\"panel-body\">\n    <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\n    <div>\n      <label><i class=\"glyphicon glyphicon-user\"></i> Nickname</label>\n      <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\n      {{ profile | json}}\n    </div>\n  </div>\n\n</div>\n\n\n</div>\n\n<div *ngIf = \"error\" >\n  {{ error }}\n</div>\n\n\n"

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = "<p>\n  callback works!\n</p>\n"

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = "<body>\n\n<!-- navbar start -->\n<nav class=\"navbar navbar-default navbar-fixed-top\" id=\"navbar\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\n\t\t\t<a href=\"\" class=\"navbar-brand\"><img src=\"https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/10898054_771337062947695_21052302371598509_n.png?oh=1d3f72f13b8fb6d3d51de5867b657094&oe=59A1E1AD\" alt=\"Brand\" style=\"width:50px;height:50px;\" id=\"buglogo\"></a>\n\t\t</div><!-- Navbar header -->\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n\n\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li><a href=\"#about\">About</a></li>\n\t\t\t\t<li><a [routerLink]=\"['/menu']\">Menu</a></li>\n\t\t\t\t<li><a href=\"#contactus\">Contact Us</a></li>\n      </ul>\n\n\t\t\t<ul class=\"nav navbar-nav pull-right\">\n\t\t\t\t<li><button  (click)=\"authService.login()\">Admin Login</button></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div> <!-- End of container -->\n</nav> <!-- Navbar End -->\n<section>\n  <div class=\"well well-lg\">\n\t<div class=\"container\">\n\t\t<section>\n\t\t\t<div class=\"page-header\" id=\"carousel\">\n\t\t\t\t<h2>Welcome To Ramen Taka!<small> Homemade Tonkotsu Ramen!</small></h2>\n\t\t\t</div>\n\n\t\t\t<div class=\"carousel slide\" id=\"screenshot-carousel\" data-ride=\"carousel\">\n\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t<li data-target=\"#screenshot-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t<li data-target=\"#screenshot-carousel\" data-slide-to=\"1\" ></li>\n\t\t\t\t\t<li data-target=\"#screenshot-carousel\" data-slide-to=\"2\" ></li>\n\t\t\t\t</ol>\n\t\t\t\t<div class=\"carousel-inner\" role=\"listbox\">\n\t\t\t\t\t<div class=\"item active\">\n\t\t\t\t\t\t<img src=\"https://s3-media4.fl.yelpcdn.com/bphoto/T96a_P2t2fWPTu9BYqGzFw/o.jpg\" alt=\"Fried Rice\" id=\"caro-img\">\n\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t<h3>Teppan Fried Rice</h3>\n\t\t\t\t\t\t\t<p>Fried rice served on a hote plate</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t<img src=\"https://s3-media4.fl.yelpcdn.com/bphoto/939BTn3TeByqZFa3p3ZkfA/o.jpg\" alt=\"Gyoza\" id=\"caro-img\">\n\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t<h3>Gyoza</h3>\n\t\t\t\t\t\t\t<p>Gyoza goes great with ramen!</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t<img src=\"https://s3-media1.fl.yelpcdn.com/bphoto/z13LUK0_ya7ZqE8rwg3e2Q/o.jpg\" alt=\"Text of image\" id=\"caro-img\">\n\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t<h3>Taka Ramen</h3>\n\t\t\t\t\t\t\t<p>Homemade Tonkotsu Broth</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div><!-- end of carousel inner-->\n\t\t\t\t<a href=\"#screenshot-carousel\" class=\"left carousel-control\" data-slide=\"prev\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#screenshot-carousel\" class=\"right carousel-control\" data-slide=\"next\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\n\t\t\t\t</a>\n\t\t\t</div> <!-- end carousel -->\n<hr>\n\t\t</section>\n\t</div>\n  </div>\n</section><!-- end carousel section-->\n\n<div class=\"container\" id=\"about\">\n      <section>\n        <div class=\"page-header\" id=\"reasons\">\n          <h2>About Ramen Taka</h2>\n        </div> <!-- End of page header -->\n        <div class=\"row\">\n  \t\t\t\t<div class=\"col-md-4\">\n  \t\t\t\t\t<p>Great tasting tonkotsu ramen made fresh in Santa Clara, California!</p>\n\n          <h4>Store Hours</h4>\n          <p>11:30 am - 2:00 pm, 5:30 pm - 9:00 pm <br>\n          (Closes at 8:30pm on Sunday)</p>\n\n          <h4>Address</h4>\n          <p>2219 The Alameda <br>\n          Santa Clara, CA 95050</p>\n\n          <h4>Phone Number</h4>\n          <p>(408) 564-4467</p>\n  \t\t\t\t</div>\n          <div class=\"col-md-7 col-md-offset-1\">\n            <iframe width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=Ramen%20Taka&key=AIzaSyBmDegEKWM5UeApNV915hb7y_tN2625sOo\" allowfullscreen></iframe>\n          </div>\n  \t\t\t</div><!-- End row-->\n      </section>\n    </div> <!-- End of Reason -->\n\n<!-- Contact -->\n\n<div class=\"container\" id=\"contact\">\n\t<div class=\"page-header\" id=\"contactus\">\n\t\t\t<h2>Contact<small> We'd like to know what you think!</small></h2>\n\t\t</div> <!-- end of page header -->\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<p>Send us a message about what you think about our restaurant, food, staff, or anything else! We look forward to hearing from you!</p>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"col-md-8\">\n\t\t\t\t<form action=\"\" class=\"form-horizontal\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"user-name\" class=\"col-md-2 control-label\">Name</label>\n\t\t\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"user-name\" placeholder=\"Enter your name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><!-- End form group -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"user-email\" class=\"col-md-2 control-label\">Email</label>\n\t\t\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"user-email\" placeholder=\"Enter your Email Address\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><!-- End form group -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"user-message\" class=\"col-md-2 control-label\">Message</label>\n\t\t\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t\t\t<textarea name=\"user-message\" id=\"user-message\" class=\"form-control\" cols=\"20\" rows=\"10\" placeholder=\"Enter your message\"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><!-- End form group -->\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-md-10 col-md-offset-2\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n</div>\n\n\n<!-- Footer -->\n<footer>\n  <hr>\n  <div class=\"container text-center\">\n    <ul class=\"list-inline\">\n      <li><a href=\"https://www.facebook.com/pages/Taka-Ramen/291675891003880\" target=\"_blank\">Facebook</a></li>\n      <li><a href=\"https://www.yelp.com/biz/ramen-taka-santa-clara\" target=\"_blank\">Yelp</a></li>\n    </ul>\n\n    <p>&copy; Copyright 2017</p>\n  </div>\n</footer>\n\n</body>\n"

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "<body>\n\n<!-- navbar start -->\n<nav class=\"navbar navbar-default navbar-fixed-top\" id=\"navbar\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\n\t\t\t<a href=\"\" class=\"navbar-brand\"><img src=\"https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/10898054_771337062947695_21052302371598509_n.png?oh=1d3f72f13b8fb6d3d51de5867b657094&oe=59A1E1AD\" alt=\"Brand\" style=\"width:50px;height:50px;\" id=\"buglogo\"></a>\n\t\t</div><!-- Navbar header -->\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n\n\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li><a [routerLink]=\"['/']\">About</a></li>\n\t\t\t\t<li><a [routerLink]=\"['/menu']\">Menu <span class=\"sr-only\">(current)</span></a></li>\n\t\t\t\t<li><a [routerLink]=\"['/']\">Contact Us</a></li>\n      </ul>\n\t\t</div>\n\t</div> <!-- End of container -->\n</nav> <!-- Navbar End -->\n<div class=\"container\">\n  <div class=\"page-header\">\n    <h1>Take a look at our menu!</h1>\n  </div>\n  <div class=\"container-fluid\">\n    <div id=\"custom_carousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"0\">\n      <div class=\"controls\">\n        <ul class=\"nav\">\n          <li data-target=\"#custom_carousel\" data-slide-to=\"0\" class=\"active\"><a href=\"#\"><img src=\"https://bufiles.blob.core.windows.net/co3617/menu_icons/salads.png\"><small>Salads</small></a></li>\n          <li data-target=\"#custom_carousel\" data-slide-to=\"1\"><a href=\"#\"><img src=\"https://bufiles.blob.core.windows.net/co3617/menu_icons/soups.png\"><small>Ramen</small></a></li>\n          <li data-target=\"#custom_carousel\" data-slide-to=\"2\"><a href=\"#\"><img src=\"https://bufiles.blob.core.windows.net/co3617/menu_icons/pizza.png\"><small>Pizza</small></a></li>\n          <li data-target=\"#custom_carousel\" data-slide-to=\"3\"><a href=\"#\"><img src=\"https://bufiles.blob.core.windows.net/co3617/menu_icons/lunch.png\"><small>Lunch Sets </small></a></li>\n          <li data-target=\"#custom_carousel\" data-slide-to=\"4\"><a href=\"#\"><img src=\"https://bufiles.blob.core.windows.net/co3617/menu_icons/maincourses.png\"><small>Entree</small></a></li>\n        </ul>\n      </div>\n      <!-- Wrapper for slides -->\n      <div class=\"carousel-inner\">\n        <!-- Salad section below -->\n        <div class=\"item active\" style=\"padding-bottom: 100px;\">\n          <div class=\"container-fluid\">\n            <div class=\"row\" *ngIf='category==salad'>\n              <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n              <div class=\"col-md-9\">\n                  <h2>Salad 1 <small>Salad 1 Description</small></h2>\n                  <p>$3.50</p>\n              </div>\n            </div>\n\t          <div class=\"row\">\n              <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n              <div class=\"col-md-9\">\n                <h2>Salad 2 <small>Description</small></h2>\n                <p>$5.00</p>\n              </div>\n            </div>\n      \t\t\t<div class=\"row\">\n              <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n                <div class=\"col-md-9\">\n                  <h2>Salad 3 <small>Description</small></h2>\n                  <p>$4.50</p>\n                </div>\n            </div>\n\t\t\t\t\t\t<div class=\"row\">\n              <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n                <div class=\"col-md-9\">\n                  <h2>Salad 4 <small>Description</small></h2>\n                  <p>$4.50</p>\n                </div>\n            </div>\n          </div>\n        </div>\n        <!-- Ramen Section below -->\n        <div class=\"item\" style=\"padding-bottom: 100px;\">\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n              <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n              <div class=\"col-md-9\">\n                <h2>Ramen 1 <small>Description</small></h2>\n                <p>$2.00</p>\n              </div>\n            </div>\n\t          <div class=\"row\">\n              <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n              <div class=\"col-md-9\">\n                <h2>Ramen 2 <small>Description</small></h2>\n                <p>$1.80</p>\n              </div>\n            </div>\n\t\t\t\t\t\t<div class=\"row\">\n              <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n              <div class=\"col-md-9\">\n                <h2>Ramen 3 <small>Description</small></h2>\n                <p>$2.00</p>\n              </div>\n            </div>\n\t\t\t\t\t\t<div class=\"row\">\n              <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n              <div class=\"col-md-9\">\n                <h2>Ramen 4 <small>Description</small></h2>\n                <p>$2.00</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Pizza section below -->\n        <div class=\"item\" style=\"padding-bottom: 100px;\">\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n              <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n              <div class=\"col-md-9\">\n                <h2>Pizza 1 <small>Description</small></h2>\n                <p>$10.00</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n                <div class=\"col-md-9\">\n                  <h2>Pizza 2 <small>Description</small></h2>\n                  <p>$12.50</p>\n                </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n                <div class=\"col-md-9\">\n                  <h2>Pizza 3 <small>Description</small></h2>\n                  <p>$15.00</p>\n                </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n                <div class=\"col-md-9\">\n                  <h2>Pizza 4 <small>Description</small></h2>\n                  <p>$16.00</p>\n                </div>\n            </div>\n          </div>\n        </div>\n        <!-- Lunch Set below -->\n        <div class=\"item\" style=\"padding-bottom: 100px;\">\n          <div class=\"container-fluid\">\n\t\t\t      <div class=\"row\">\n      \t\t\t\t<div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n        \t\t\t\t<div class=\"col-md-9\">\n        \t\t\t\t\t<h2>Lunch Set 1 <small>Description</small></h2>\n        \t\t\t\t\t<p>$5.00</p>\n        \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t\t<div class=\"row\">\n      \t\t\t\t<div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n        \t\t\t\t<div class=\"col-md-9\">\n        \t\t\t\t\t<h2>Lunch Set 2 <small>Description</small></h2>\n        \t\t\t\t\t<p>$7.00</p>\n      \t\t\t\t  </div>\n\t\t\t      </div>\n      \t\t\t<div class=\"row\">\n      \t\t\t\t<div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n        \t\t\t\t<div class=\"col-md-9\">\n        \t\t\t\t\t<h2>Lunch Set 3 <small>Description</small></h2>\n        \t\t\t\t\t<p>$9.00</p>\n        \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t\t<div class=\"row\">\n      \t\t\t\t<div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n        \t\t\t\t<div class=\"col-md-9\">\n        \t\t\t\t\t<h2>Lunch Set 4 <small>Description</small></h2>\n        \t\t\t\t\t<p>$10.00</p>\n        \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t\t<div class=\"row\">\n      \t\t\t\t<div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n        \t\t\t\t<div class=\"col-md-9\">\n        \t\t\t\t\t<h2>Lunch Set 5 <small>Description</small></h2>\n        \t\t\t\t\t<p>$12.00</p>\n        \t\t\t\t</div>\n      \t\t\t</div>\n            </div>\n        </div>\n        <!-- Entree Below -->\n        <div class=\"item\" style=\"padding-bottom: 100px;\">\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n\t\t\t\t      <div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n\t\t\t\t      <div class=\"col-md-9\">\n      \t\t\t\t\t<h2>Entree 1 <small>Description</small></h2>\n      \t\t\t\t\t<p>$10.00</p>\n\t\t\t\t      </div>\n\t\t\t      </div>\n      \t\t\t<div class=\"row\">\n      \t\t\t\t<div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n      \t\t\t\t  <div class=\"col-md-9\">\n        \t\t\t\t\t<h2>Entree 2 <small>Description</small></h2>\n        \t\t\t\t\t<p>$10.00</p>\n      \t\t\t\t  </div>\n      \t\t\t</div>\n      \t\t\t<div class=\"row\">\n      \t\t\t\t<div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n        \t\t\t\t<div class=\"col-md-9\">\n        \t\t\t\t\t<h2>Entree 3 <small>Description</small></h2>\n        \t\t\t\t\t<p>$10.00</p>\n        \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t\t<div class=\"row\">\n      \t\t\t\t<div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n        \t\t\t\t<div class=\"col-md-9\">\n        \t\t\t\t\t<h2>Entree 4 <small>Description</small></h2>\n        \t\t\t\t\t<p>$10.00</p>\n        \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t\t<div class=\"row\">\n      \t\t\t\t<div class=\"col-md-3\"><img src=\"http://placehold.it/350x100\" class=\"img-responsive\"></div>\n        \t\t\t\t<div class=\"col-md-9\">\n        \t\t\t\t\t<h2>Entree 5 <small>Description</small></h2>\n        \t\t\t\t\t<p>$15.00</p>\n        \t\t\t\t</div>\n      \t\t\t</div>\n          </div>\n        </div>\n    <!-- End Item -->\n\t    </div>\n      <!-- End Carousel Inner -->\n    </div>\n    <!-- End Carousel -->\n  </div>\n</div>\n<!-- Footer -->\n<footer>\n  <hr>\n  <div class=\"container text-center\">\n    <ul class=\"list-inline\">\n      <li><a href=\"https://www.facebook.com/pages/Taka-Ramen/291675891003880\" target=\"_blank\">Facebook</a></li>\n      <li><a href=\"https://www.yelp.com/biz/ramen-taka-santa-clara\" target=\"_blank\">Yelp</a></li>\n    </ul>\n\n    <p>&copy; Copyright 2017</p>\n  </div>\n</footer>\n\n\n<script type=\"text/javascript\">\n$(document).ready(function(ev){\n  $('#custom_carousel').on('slide.bs.carousel', function (evt) {\n    $('#custom_carousel .controls li.active').removeClass('active');\n    $('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');\n  })\n});\n</script>\n\n</body>\n"

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_variables__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //made this file

var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        // Create Auth0 web auth instance
        this.result = new __WEBPACK_IMPORTED_MODULE_3_auth0_js___default.a.WebAuth({
            clientID: __WEBPACK_IMPORTED_MODULE_2__auth0_variables__["a" /* AUTH_CONFIG */].CLIENT_ID,
            domain: __WEBPACK_IMPORTED_MODULE_2__auth0_variables__["a" /* AUTH_CONFIG */].CLIENT_DOMAIN,
            responseType: 'token id_token',
            redirectUri: __WEBPACK_IMPORTED_MODULE_2__auth0_variables__["a" /* AUTH_CONFIG */].REDIRECT,
            audience: __WEBPACK_IMPORTED_MODULE_2__auth0_variables__["a" /* AUTH_CONFIG */].AUDIENCE,
            scope: __WEBPACK_IMPORTED_MODULE_2__auth0_variables__["a" /* AUTH_CONFIG */].SCOPE
        });
    }
    AuthService.prototype.login = function () {
        this.result.authorize(); //if we donot pass any params to authorize it takes from auth instance
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.result.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/admin']);
            }
            else if (err) {
                _this.router.navigate(['/']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        console.log("Access Token", authResult.accessToken);
        console.log("id token", authResult.idToken);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.clear();
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.authenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    //...
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.result.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(165);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthHttp } from 'angular2-jwt';

var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    // Get all of certain category
    // retrieveCategory(category) {
    //   console.log("http service", category)
    //   return this._http.get('/menu/'+category).map(data=>data.json()).toPromise()
    // }
    // // Create a new menu item
    // newMenu(menu, creator){
    //   console.log('httpservice:', menu)
    //   console.log('httpservice:',creator)
    //   menu.createdBy = creator
    //   return this._http.post('/newmenu/',menu).map(data=>data.json()).toPromise()
    // }
    HttpService.prototype.getUser = function (userSub) {
        return this._http.get('/user/' + userSub).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.createUser = function (user) {
        console.log(user);
        return this._http.post('/createUser', user).map(function (data) { return data.json(); }).toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(auth, _httpService, _router, _route) {
        this.auth = auth;
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.user = { user_sub: "" };
        this.error = null;
        this.validuser = false;
        this.noPipe = null;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getProfile(function (err, profile) {
            _this.profile = profile;
            _this.noPipe = _this.profile.sub.replace(/[|]/, '');
            console.log("After replacing", _this.noPipe);
            console.log("Hello");
            _this._httpService.getUser(_this.noPipe)
                .then(function (data) {
                console.log("length: ", data.user.length);
                if (data.user.length > 0) {
                    console.log(data.user[0].user_sub);
                    if (data.user[0].user_sub == _this.noPipe) {
                        console.log(data.user);
                        _this.validuser = true;
                    }
                }
                else if (data.user.length == 0) {
                    _this.error = "This page is only for admin"; //not admin
                    _this._router.navigate(['/']);
                }
                // else{
                //     this.error = "Error in receiving data from api" //due to incorrect id
                //     this._router.navigate(['/']);
                //     }
            })
                .catch(function (err) { console.log(err); });
            //     this.user.user_sub = this.noPipe;
            //   this._httpService.createUser(this.user)
            //  .then((data) =>{
            //    if(data.message == "success"){
            //      this.error =null //to reset the value from previous error
            //     }
            //      else {
            //        this.error = "Unable to create a user";
            //      } 
            //  })
            //   .catch( err => { console.log(err); })
        }); //getProfile ends
    }; //ng ends
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__(274),
        styles: [__webpack_require__(258)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], AdminComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import our authentication service

var AuthguardService = (function () {
    function AuthguardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function () {
        // If the user is not logged in we'll send them back to the home page
        if (!this.auth.authenticated()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    return AuthguardService;
}());
AuthguardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthguardService);

var _a, _b;
//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallbackComponent = (function () {
    function CallbackComponent(authService) {
        this.authService = authService;
        this.authService.handleAuthentication();
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-callback',
        template: __webpack_require__(276),
        styles: [__webpack_require__(260)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], CallbackComponent);

var _a;
//# sourceMappingURL=callback.component.js.map

/***/ })

},[554]);
//# sourceMappingURL=main.bundle.js.map