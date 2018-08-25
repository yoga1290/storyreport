(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-submit {\n  width: 100%;\n  margin: 10px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Storyteller!\n  </h1>\n  <!-- <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"> -->\n</div>\n\n<app-story [index]=\"0\"></app-story>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'storyreport';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _story_video_timer_timer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./story/video/timer/timer.component */ "./src/app/story/video/timer/timer.component.ts");
/* harmony import */ var _story_video_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./story/video/video.component */ "./src/app/story/video/video.component.ts");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./story/story.component */ "./src/app/story/story.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _panel_panel_component__WEBPACK_IMPORTED_MODULE_6__["PanelComponent"],
                _story_video_timer_timer_component__WEBPACK_IMPORTED_MODULE_7__["TimerComponent"],
                _story_video_video_component__WEBPACK_IMPORTED_MODULE_8__["VideoComponent"],
                _story_story_component__WEBPACK_IMPORTED_MODULE_9__["StoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MyOwnCustomMaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MyOwnCustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOwnCustomMaterialModule", function() { return MyOwnCustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var exports = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]
];
var imports = exports;
var MyOwnCustomMaterialModule = /** @class */ (function () {
    function MyOwnCustomMaterialModule() {
    }
    MyOwnCustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({ imports: imports, exports: exports })
    ], MyOwnCustomMaterialModule);
    return MyOwnCustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/panel/panel.component.css":
/*!*******************************************!*\
  !*** ./src/app/panel/panel.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/panel/panel.component.html":
/*!********************************************!*\
  !*** ./src/app/panel/panel.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  panel works!\n</p>\n"

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.css */ "./src/app/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/story/story.component.css":
/*!*******************************************!*\
  !*** ./src/app/story/story.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-video-upload mat-icon {\n  font-size: 80px;\n  width: 80px;\n}\n\n.btn-video-upload {\n  left: -80px;\n  width: 160px;\n  height: 160px;\n  position: absolute;\n}\n\n.btn-video-upload-container {\n  position: relative;\n  left: 50%;\n  width: 50%;\n  height: 200px;\n}\n\nmat-select {\n    font-size: 32px;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\n.mat-form-field-infix {\n  width: 100%;\n}\n\n.query-string {\n  margin-top: 10px;\n}\n\n.page-description {\n  margin-bottom: 20px;\n}\n\n.page-preview {\n  float: right;\n}\n"

/***/ }),

/***/ "./src/app/story/story.component.html":
/*!********************************************!*\
  !*** ./src/app/story/story.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n    <!-- <button mat-icon-button><mat-icon>add</mat-icon></button> -->\n\n    <mat-card-title>\n      <!-- <mat-form-field> -->\n        <mat-select placeholder=\"Select page\" [(value)]=\"selectedPage\">\n          <mat-option\n            *ngFor=\"let p of Pages\"\n            [value]=\"p\">\n            {{p.title}}</mat-option>\n        </mat-select>\n      <!-- </mat-form-field> -->\n\n    </mat-card-title>\n    <mat-card-subtitle *ngIf=\"selectedPage.page\">\n      <div class=\"page-description\">\n        {{selectedPage.description}}\n      </div>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Start Hash\" [(value)]=\"startHash\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"End Hash\" [(value)]=\"endHash\">\n      </mat-form-field>\n\n\n      <div *ngFor=\"let q of queryString\" class=\"query-string\">\n        <mat-form-field>\n          <input matInput placeholder=\"query key\" [(ngModel)]=\"q.key\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"value\" [(ngModel)]=\"q.value\">\n        </mat-form-field>\n      </div>\n\n      <button\n        mat-stroked-button\n        (click)=\"queryString.push({key:'', value:''})\">\n        + query string\n      </button>\n      <button\n        class=\"page-preview\"\n        mat-icon-button\n        color=\"primary\"\n        (click)=\"pagePreview()\">\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">open_in_browser</mat-icon>\n      </button>\n\n    </mat-card-subtitle>\n  </mat-card-header>\n  <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n  <mat-card-content *ngIf=\"selectedPage.page\">\n\n\n\n\n    <form\n        [ngStyle]=\"{'display':'none'}\"\n        [name]=\"id_form\"\n        method=\"post\"\n        enctype=\"multipart/form-data\"\n        target=\"_self\"\n        action=\"http://localhost:8080/test\">\n      <input type=\"file\" *ngFor=\"let d of Keys(data)\" [id]=\"'infile-' + d\" class=\"infile\" name=\"file\" accept=\"video/mp4\">\n      <input type=\"text\" name=\"data\" [value]=\"jsonData\">\n      <input type=\"submit\" [id]=\"id_submit\" value=\"OK\">\n    </form>\n\n\n      <app-video\n          *ngFor=\"let d of Keys(data)\"\n          [index] = \"d\"\n          (update)=\"data[d]=$event; test(data);\"\n          (delete)=\"onDelete(d)\"></app-video>\n\n\n\n\n          <mat-card\n            class=\"example-card\">\n            <div class=\"btn-video-upload-container\">\n              <button\n                mat-icon-button\n                class=\"btn-video-upload\"\n                (click)=\"data.push({})\">\n                <mat-icon>movie_filter</mat-icon></button>\n            </div>\n          </mat-card>\n\n    <button\n      class=\"btn-submit\"\n      (click)=\"submit()\"\n      mat-raised-button\n      color=\"primary\">\n      <mat-icon>cloud_upload</mat-icon>\n      Upload & process</button>\n\n  </mat-card-content>\n\n  <mat-card-actions>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/story/story.component.ts":
/*!******************************************!*\
  !*** ./src/app/story/story.component.ts ***!
  \******************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoryComponent = /** @class */ (function () {
    function StoryComponent() {
        this.data = [];
        this.Keys = {};
        this.queryString = [];
        this.Pages = [{
                "title": "Blank",
                "page": "http://yoga1290.gitlab.io/h5r-pages/blank/",
                "description": "Blank screen with green background, [#start - #end]"
            }, {
                "title": "Cards",
                "page": "http://yoga1290.gitlab.io/h5r-pages/cards/",
                "description": "Requires query strings of title[] and body[],\n                    [#start, #0, #1, #n, #end]\n                    e.g: ?title=T1&body=B1&body=B2"
                // http://yoga1290.gitlab.io/h5r-pages/cards/?title=title1&body=body1&title=title2&body=body2
            }, {
                "title": "Story",
                "page": "http://yoga1290.gitlab.io/h5r-pages/story/",
                "description": "Query string must include: time, index & count"
                // http://yoga1290.gitlab.io/h5r-pages/story/?time=2&count=3&index=1
            }];
        this.startHash = 'start';
        this.endHash = 'end';
        this.size = {
            "w": 400,
            "h": 710
        };
        this.selectedPage = {};
    }
    Object.defineProperty(StoryComponent.prototype, "id_submit", {
        get: function () {
            return "submit-" + this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoryComponent.prototype, "id_form", {
        get: function () {
            return "form-" + this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoryComponent.prototype, "jsonData", {
        get: function () {
            var overlay = this.data;
            var startHash = this.startHash;
            var endHash = this.endHash;
            var size = this.size;
            var page = this.selectedPage.page + "?"
                + this.queryString.map(function (it) { return (it.key + '=' + it.value); }).join('&');
            var data = { page: page, overlay: overlay, startHash: startHash, endHash: endHash, size: size };
            return JSON.stringify(data);
        },
        enumerable: true,
        configurable: true
    });
    StoryComponent.prototype.ngOnInit = function () {
        this.Keys = Object.keys;
    };
    StoryComponent.prototype.test = function (data) {
        console.log(data);
    };
    StoryComponent.prototype.onDelete = function (index) {
        this.data.splice(index, 1);
    };
    StoryComponent.prototype.submit = function () {
        window.document.forms[this.id_form].submit();
    };
    StoryComponent.prototype.addVideo = function () {
        this.data.push({});
    };
    StoryComponent.prototype.pagePreview = function () {
        var url = this.selectedPage.page + "?"
            + this.queryString.map(function (it) { return (it.key + '=' + it.value); }).join('&');
        console.log(this.queryString, this.queryString.map(function (it) { return (it.key + '=' + it.value); }), url);
        window.open(url, '_blank');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("index"),
        __metadata("design:type", String)
    ], StoryComponent.prototype, "_index", void 0);
    StoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-story',
            template: __webpack_require__(/*! ./story.component.html */ "./src/app/story/story.component.html"),
            styles: [__webpack_require__(/*! ./story.component.css */ "./src/app/story/story.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "./src/app/story/video/timer/timer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/story/video/timer/timer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/story/video/timer/timer.component.html":
/*!********************************************************!*\
  !*** ./src/app/story/video/timer/timer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field appearance=\"outline\">\n  <mat-label>startTime</mat-label>\n  <input matInput placeholder=\"00:00:00\" [(ngModel)]=\"startTime\" (keyup)=\"onStartTimeChange()\">\n</mat-form-field>\n\n\n<mat-form-field appearance=\"outline\">\n  <mat-label>endTime</mat-label>\n  <input matInput placeholder=\"endTime\" [(ngModel)]=\"endTime\" (keyup)=\"onEndTimeChange()\">\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/story/video/timer/timer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/story/video/timer/timer.component.ts ***!
  \******************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startTime = '';
        this.endTime = '';
    }
    TimerComponent.prototype.ngOnInit = function () {
    };
    TimerComponent.prototype.onStartTimeChange = function () {
        this.startTime = this.formatTime(this.startTime);
        this.updateTime();
    };
    TimerComponent.prototype.onEndTimeChange = function () {
        this.endTime = this.formatTime(this.endTime);
        this.updateTime();
    };
    TimerComponent.prototype.updateTime = function () {
        var start = this.convertStringToSeconds(this.startTime);
        var end = this.convertStringToSeconds(this.endTime);
        this.update.emit({ start: start, end: end });
    };
    TimerComponent.prototype.formatTime = function (str) {
        if (str.length > 8) {
            str = str.split('')
                .splice(0, str.length - 8)
                .join('');
        }
        var zeros = [48, 1632, 1776, 2406];
        /*
        // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
        // see http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
        var zero = {}
        var locales = ['ak','ar','ay','az','bal','bik','bnc','bua','chm','cr','del','den','din','doi','et','fa','ff','gba','gn','gon','grb','hai','hmn','ik','iu','jrb','kg','kln','kok','kpe','kr','ku','kv','lah','luy','lv','man','mg','mn','ms','mwr','ne','no','oj','om','or','ps','qu','raj','rom','sc','sh','sq','sw','syr','tmh','uz','yi','za','zap','zh','zza']
        locales.forEach(function(locale) {
          zero[ new Intl.NumberFormat(locale).format(0).charCodeAt(0) ] = true
        })
        //*/
        var charCodeToNumber = {};
        zeros.forEach(function (charCode) {
            for (var i = 0; i < 10; i++) {
                charCodeToNumber[charCode + i] = i + '';
            }
        });
        var result = '', sep = 0;
        str.split('').forEach(function (ch) {
            if (charCodeToNumber[ch.charCodeAt(0)]) {
                if (result.length > 0 && (result.length - sep) % 2 === 0) {
                    result += ':';
                    sep++;
                }
                result += charCodeToNumber[ch.charCodeAt(0)];
            }
        });
        return result;
    };
    TimerComponent.prototype.convertStringToSeconds = function (str) {
        console.log('convertStringToSeconds', arguments);
        if (str) {
            var formattedString = str.split(':');
            var seconds = 0;
            var w = 1;
            for (var i = formattedString.length - 1; i >= 0; i--) {
                seconds += parseInt(formattedString[i]) * w;
                w *= 60;
            }
            return seconds;
        }
        return 1 << 20;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("update"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TimerComponent.prototype, "update", void 0);
    TimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/story/video/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.css */ "./src/app/story/video/timer/timer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/app/story/video/video.component.css":
/*!*************************************************!*\
  !*** ./src/app/story/video/video.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-picker {\n  display: inline-block;\n  margin: 5px;\n}\nmat-slider {\n  width: 100%;\n}\nvideo {\n  width: 100%;\n}\n.video-container {\n  position: relative;\n}\n.video-border {\n  height: 100%;\n  position: absolute;\n  background-color: white;\n}\n.infile {\n  display: none;\n}\n.video-close {\n  right: 0px;\n  color: red;\n  z-index: 2;\n  margin-right: 10px;\n  position: absolute;\n}\n.btn-video-upload mat-icon {\n  font-size: 80px;\n  width: 80px;\n}\n.btn-video-upload {\n  left: -80px;\n  width: 160px;\n  height: 160px;\n  position: absolute;\n}\n.btn-video-upload-container {\n  position: relative;\n  left: 50%;\n  width: 50%;\n  height: 200px;\n}\n"

/***/ }),

/***/ "./src/app/story/video/video.component.html":
/*!**************************************************!*\
  !*** ./src/app/story/video/video.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>\n      <button mat-icon-button class=\"video-close\" (click)=\"delete.emit()\"><mat-icon>close</mat-icon></button>\n    </mat-card-title>\n\n    <!-- <mat-card-subtitle>Video</mat-card-subtitle> -->\n\n  </mat-card-header>\n  <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n\n\n  <!-- <input type=\"file\" [id]=\"index_infile\" class=\"infile\" accept=\"video/mp4\"> -->\n\n  <div class=\"btn-video-upload-container\" *ngIf=\"!showVideo\">\n    <button mat-icon-button class=\"btn-video-upload\" (click)=\"infileClick()\"><mat-icon>movie</mat-icon></button>\n  </div>\n\n  <div [ngStyle]=\"{'display': showVideo ? '':'none'}\">\n    <div class=\"video-container\">\n      <div class=\"video-border\" [ngStyle]=\"{'width': videoBorderWidth}\"></div>\n      <video [id]=\"index_video\" controls></video>\n      <div class=\"video-border\"></div>\n    </div>\n    <mat-card-content>\n      <app-timer\n        (update)=\"data.time = $event; update();\">\n      </app-timer>\n\n      <div>\n        <div *ngFor=\"let color of colorKeys\" (click)=\"data.colorKey = color; update();\" class=\"color-picker\">\n          <mat-icon [ngStyle]=\"{'color': color}\">{{(color === data.colorKey) ? 'check_circle':'lens'}}</mat-icon>\n        </div>\n      </div>\n\n      <mat-slider\n          thumbLabel\n          min=\"1\"\n          max=\"100\"\n          step=\"1\"\n          value=\"0\"\n          (change)=\"data.crop.offset.x = $event.value/100; update();\">\n      </mat-slider>\n    </mat-card-content>\n\n  </div>\n\n\n\n  <!-- <mat-card-actions>\n    <button mat-button (click)=\"delete.emit()\">Remove</button>\n  </mat-card-actions> -->\n</mat-card>\n"

/***/ }),

/***/ "./src/app/story/video/video.component.ts":
/*!************************************************!*\
  !*** ./src/app/story/video/video.component.ts ***!
  \************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
        this._update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showVideo = false;
        this.data = {
            "video": "",
            "colorKey": 'green',
            "similarity": 0.7,
            "time": {
                "start": 0,
                "end": 1 << 30
            },
            "crop": {
                "aspectRatio": 0.5625,
                "offset": {
                    "x": 0,
                    "y": 0 //fixed for now
                }
            }
        };
        this.colorKeys = ['red', 'green', 'blue', 'yellow', 'orange', 'black'];
    }
    Object.defineProperty(VideoComponent.prototype, "index_infile", {
        get: function () {
            return "infile-" + this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoComponent.prototype, "index_video", {
        get: function () {
            return "v-" + this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoComponent.prototype, "videoBorderWidth", {
        get: function () {
            return this.data.crop.offset.x * 100 + "%";
        },
        enumerable: true,
        configurable: true
    });
    VideoComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var infile = window.document.getElementById(this.index_infile);
        var video = window.document.getElementById(this.index_video);
        console.log(infile, window.document.getElementById(this.index_infile));
        document.getElementById(this.index_infile).addEventListener('change', function (e) {
            console.log(infile, infile.files[0]);
            _this.showVideo = infile && infile.files && infile.files[0];
            if (_this.showVideo) {
                video.src = URL.createObjectURL(infile.files[0]); //TODO
                video.load();
            }
        });
        this.videoItr = window.setInterval(function () {
            if (video.paused) {
                return;
            }
            var t = video.currentTime;
            if ((_this.data.time.start - t) > 1 || (t - _this.data.time.end) > 1) {
                video.currentTime = _this.data.start;
                video.play();
            }
        }, 1000);
        window.document.getElementById(this.index_infile).click();
    };
    VideoComponent.prototype.ngOnDestroy = function () {
        window.clearInterval(this.videoItr);
    };
    VideoComponent.prototype.onSlideChange = function (x) {
        console.log(x);
    };
    VideoComponent.prototype.update = function () {
        var video = window.document.getElementById(this.index_video);
        console.log(this.data);
        if (this.data && this.data.time && this.data.time.start) {
            video.currentTime = this.data.time.start;
            video.play();
        }
        this._update.emit(this.data);
    };
    VideoComponent.prototype.infileClick = function () {
        console.log('index_infile', this.index_infile);
        window.document.getElementById(this.index_infile).click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("update"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VideoComponent.prototype, "_update", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("delete"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VideoComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("index"),
        __metadata("design:type", String)
    ], VideoComponent.prototype, "_index", void 0);
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/story/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/story/video/video.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yoga1290/gitHub/storyreport/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map