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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/chat/chat.component */ "./src/app/pages/chat/chat.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/edit-profile/edit-profile.component */ "./src/app/pages/edit-profile/edit-profile.component.ts");
/* harmony import */ var _guards_is_owner_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/is-owner.guard */ "./src/app/guards/is-owner.guard.ts");










var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'chat', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: '', component: _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"] },
            { path: ':chatroomId', component: _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"] }
        ]
    },
    { path: 'profile/:userId', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'profile/:userId/edit', component: _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__["EditProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_is_owner_guard__WEBPACK_IMPORTED_MODULE_9__["IsOwnerGuard"]] },
    { path: '**', redirectTo: '/login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"\"></ngx-loading>\r\n<div class=\"alert-wrapper\">\r\n    <alert class=\"text-center\" *ngFor=\"let alert of alerts\" [type]=\"alert.type\" dismissOnTimeout=\"5000\">\r\n        {{ alert.text }}\r\n    </alert>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-wrapper {\n  position: relative; }\n  .alert-wrapper alert {\n    position: absolute;\n    top: 80px;\n    width: 100%;\n    z-index: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVc2VyXFxjaGF0LWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXFVzZXJcXGNoYXQtYXBwL3NyY1xcYXBwXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQWtCLEVBQUE7RUFEdEI7SUFJUSxrQkFBa0I7SUFDbEIsU0NBWTtJRENaLFdBQVc7SUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmFsZXJ0LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGFsZXJ0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAkbmF2YmFyLWhlaWdodDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB9XHJcbn1cclxuIiwiJHByaW1hcnk6ICMzMjhDQzE7XHJcbiRzZWNvbmRhcnk6ICMwQjNDNUQ7XHJcbiRnb2xkOiAjRDlCMzEwO1xyXG4kbGlnaHQtZ3JleTogI2VmZWZlZjtcclxuJGdyZXk6IGRhcmtlbigkbGlnaHQtZ3JleSwgMzAlKTtcclxuJGJsYWNrOiAjMUQyNzMxO1xyXG5cclxuJG5hdmJhci1oZWlnaHQ6IDgwcHg7Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/loading.service */ "./src/app/services/loading.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(alertService, loadingService) {
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.subscriptions = [];
        this.alerts = [];
        this.loading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.alertService.alerts.subscribe(function (alert) {
            _this.alerts.push(alert);
        }));
        this.subscriptions.push(this.loadingService.isLoading.subscribe(function (isLoading) {
            _this.loading = isLoading;
        }));
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_is_owner_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/is-owner.guard */ "./src/app/guards/is-owner.guard.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_chatroom_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/chatroom.service */ "./src/app/services/chatroom.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/chat/chat.component */ "./src/app/pages/chat/chat.component.ts");
/* harmony import */ var _pages_chat_components_chat_input_chat_input_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/chat/components/chat-input/chat-input.component */ "./src/app/pages/chat/components/chat-input/chat-input.component.ts");
/* harmony import */ var _pages_chat_components_chatroom_list_chatroom_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/chat/components/chatroom-list/chatroom-list.component */ "./src/app/pages/chat/components/chatroom-list/chatroom-list.component.ts");
/* harmony import */ var _pages_chat_components_chatroom_title_bar_chatroom_title_bar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/chat/components/chatroom-title-bar/chatroom-title-bar.component */ "./src/app/pages/chat/components/chatroom-title-bar/chatroom-title-bar.component.ts");
/* harmony import */ var _pages_chat_components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/chat/components/chat-message/chat-message.component */ "./src/app/pages/chat/components/chat-message/chat-message.component.ts");
/* harmony import */ var _pages_chat_components_chatroom_window_chatroom_window_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/chat/components/chatroom-window/chatroom-window.component */ "./src/app/pages/chat/components/chatroom-window/chatroom-window.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/edit-profile/edit-profile.component */ "./src/app/pages/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");






//Modules






// import { MomentModule } from 'ngx-moment';
//Guard


//Services




//Components












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_29__["NavbarComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"],
                _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_21__["ChatComponent"],
                _pages_chat_components_chat_input_chat_input_component__WEBPACK_IMPORTED_MODULE_22__["ChatInputComponent"],
                _pages_chat_components_chatroom_list_chatroom_list_component__WEBPACK_IMPORTED_MODULE_23__["ChatroomListComponent"],
                _pages_chat_components_chatroom_title_bar_chatroom_title_bar_component__WEBPACK_IMPORTED_MODULE_24__["ChatroomTitleBarComponent"],
                _pages_chat_components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_25__["ChatMessageComponent"],
                _pages_chat_components_chatroom_window_chatroom_window_component__WEBPACK_IMPORTED_MODULE_26__["ChatroomWindowComponent"],
                _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"],
                _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_28__["EditProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["AlertModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_6__["NgxLoadingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"]
                // MomentModule
            ],
            providers: [
                _services_alert_service__WEBPACK_IMPORTED_MODULE_14__["AlertService"],
                _services_loading_service__WEBPACK_IMPORTED_MODULE_15__["LoadingService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                _services_chatroom_service__WEBPACK_IMPORTED_MODULE_17__["ChatroomService"],
                _guards_is_owner_guard__WEBPACK_IMPORTED_MODULE_13__["IsOwnerGuard"]
                // JoinRoomService
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/alert.ts":
/*!**********************************!*\
  !*** ./src/app/classes/alert.ts ***!
  \**********************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var _enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/alert-type.enum */ "./src/app/enums/alert-type.enum.ts");

var Alert = /** @class */ (function () {
    function Alert(text, type) {
        if (type === void 0) { type = _enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_0__["AlertType"].Success; }
        this.text = text;
        this.type = type;
    }
    return Alert;
}());



/***/ }),

/***/ "./src/app/classes/message.ts":
/*!************************************!*\
  !*** ./src/app/classes/message.ts ***!
  \************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-primary bg-primary\">\r\n  <div class=\"container\">\r\n    <span class=\"navbar-brand\"><img src=\"assets/img/g_chat.png\" width=\"200px\" height=\"60px\"></span>\r\n    <div class=\"page-links\">\r\n      <ul class=\"navbar-nav\" *ngIf=\"currentUser else loggedOut\">\r\n        <li class=\"nav-item\">\r\n          <a [routerLink]=\"'/profile/' + currentUser.id\" routerLinkActive=\"active\" class=\"nav-link\">Profile</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/chat\" routerLinkActive=\"active\" class=\"nav-link\">Chat Rooms</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"auth.logout()\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!--objasnjenje-->\r\n<ng-template #loggedOut>\r\n  <ul class=\"navbar-nav\">\r\n    <li class=\"nav-item\">\r\n      <a routerLink=\"/login\" routerLinkActive=\"active\" class=\"nav-link\">Login</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"nav-link\">Sign Up</a>\r\n    </li>\r\n  </ul>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  color: #ffffff; }\n\n.nav-item {\n  color: #efefef; }\n\na {\n  color: #efefef;\n  margin-left: 3em; }\n\na.active {\n    border-bottom: 3px solid #D9B310; }\n\n.nav-link {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxVc2VyXFxjaGF0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL0M6XFxVc2Vyc1xcVXNlclxcY2hhdC1hcHAvc3JjXFxhcHBcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0NKZ0IsRUFBQTs7QURPcEI7RUFDSSxjQ1JnQjtFRFNoQixnQkFBZ0IsRUFBQTs7QUFGcEI7SUFLUSxnQ0NiTSxFQUFBOztBRGlCZDtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIGNvbG9yOiAkbGlnaHQtZ3JleTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiAgICBtYXJnaW4tbGVmdDogM2VtO1xyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGdvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIkcHJpbWFyeTogIzMyOENDMTtcclxuJHNlY29uZGFyeTogIzBCM0M1RDtcclxuJGdvbGQ6ICNEOUIzMTA7XHJcbiRsaWdodC1ncmV5OiAjZWZlZmVmO1xyXG4kZ3JleTogZGFya2VuKCRsaWdodC1ncmV5LCAzMCUpO1xyXG4kYmxhY2s6ICMxRDI3MzE7XHJcblxyXG4kbmF2YmFyLWhlaWdodDogODBweDsiXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.currentUser = null;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/enums/alert-type.enum.ts":
/*!******************************************!*\
  !*** ./src/app/enums/alert-type.enum.ts ***!
  \******************************************/
/*! exports provided: AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var AlertType;
(function (AlertType) {
    AlertType["Success"] = "success";
    AlertType["Danger"] = "danger";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _classes_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/alert */ "./src/app/classes/alert.ts");
/* harmony import */ var _enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/alert-type.enum */ "./src/app/enums/alert-type.enum.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");








var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, alertService) {
        this.auth = auth;
        this.router = router;
        this.alertService = alertService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (currentUser) { return !!currentUser; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                _this.alertService.alerts.next(new _classes_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('You must be logged in to access that page.', _enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Danger));
                _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/is-owner.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/is-owner.guard.ts ***!
  \******************************************/
/*! exports provided: IsOwnerGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsOwnerGuard", function() { return IsOwnerGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _classes_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/alert */ "./src/app/classes/alert.ts");
/* harmony import */ var _enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/alert-type.enum */ "./src/app/enums/alert-type.enum.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");








var IsOwnerGuard = /** @class */ (function () {
    function IsOwnerGuard(auth, router, alertService) {
        this.auth = auth;
        this.router = router;
        this.alertService = alertService;
    }
    IsOwnerGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (currentUser) { return !!currentUser && currentUser.id === next.params.userId; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (isOwner) {
            if (!isOwner) {
                _this.alertService.alerts.next(new _classes_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('You can only edit your profile.', _enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Danger));
                _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            }
        }));
    };
    IsOwnerGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], IsOwnerGuard);
    return IsOwnerGuard;
}());



/***/ }),

/***/ "./src/app/pages/chat/chat.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/chat/chat.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"contaioner-wrapper container d-flex\">\r\n  <app-chatroom-list class=\"w-25\"></app-chatroom-list>\r\n  <app-chatroom-window class=\"w-75\"></app-chatroom-window>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/chat/chat.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/chat/chat.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/chat/chat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/pages/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/pages/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/pages/chat/components/chat-input/chat-input.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/chat/components/chat-input/chat-input.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-message-wrapper d-flex\">\r\n  <div class=\"input-group\">\r\n    <input [(ngModel)]=\"newMessageText\" type=\"text\" class=\"form-control\" placeholder=\"Enter a new message\" (keyup.enter)=\"submit(newMessage.value)\" #newMessage>\r\n    <div class=\"input-group-append\">\r\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"submit(newMessage.value)\">Enter</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/chat/components/chat-input/chat-input.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/chat/components/chat-input/chat-input.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-message-wrapper .input-group {\n  align-self: flex-end; }\n  .new-message-wrapper .input-group .form-control {\n    border-radius: 0;\n    border: 0;\n    background-color: #efefef; }\n  .new-message-wrapper .input-group .form-control:focus {\n      outline: 0;\n      box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jb21wb25lbnRzL2NoYXQtaW5wdXQvQzpcXFVzZXJzXFxVc2VyXFxjaGF0LWFwcC9zcmNcXGFwcFxccGFnZXNcXGNoYXRcXGNvbXBvbmVudHNcXGNoYXQtaW5wdXRcXGNoYXQtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXQvY29tcG9uZW50cy9jaGF0LWlucHV0L0M6XFxVc2Vyc1xcVXNlclxcY2hhdC1hcHAvc3JjXFxhcHBcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxvQkFBb0IsRUFBQTtFQUY1QjtJQUtZLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QseUJDTlEsRUFBQTtFRERwQjtNQVVnQixVQUFVO01BQ1YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0L2NvbXBvbmVudHMvY2hhdC1pbnB1dC9jaGF0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5uZXctbWVzc2FnZS13cmFwcGVyIHtcclxuICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIkcHJpbWFyeTogIzMyOENDMTtcclxuJHNlY29uZGFyeTogIzBCM0M1RDtcclxuJGdvbGQ6ICNEOUIzMTA7XHJcbiRsaWdodC1ncmV5OiAjZWZlZmVmO1xyXG4kZ3JleTogZGFya2VuKCRsaWdodC1ncmV5LCAzMCUpO1xyXG4kYmxhY2s6ICMxRDI3MzE7XHJcblxyXG4kbmF2YmFyLWhlaWdodDogODBweDsiXX0= */"

/***/ }),

/***/ "./src/app/pages/chat/components/chat-input/chat-input.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/chat/components/chat-input/chat-input.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChatInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInputComponent", function() { return ChatInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_chatroom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chatroom.service */ "./src/app/services/chatroom.service.ts");



var ChatInputComponent = /** @class */ (function () {
    function ChatInputComponent(elementRef, chatroomService) {
        this.elementRef = elementRef;
        this.chatroomService = chatroomService;
        this.newMessageText = '';
    }
    ChatInputComponent.prototype.ngOnInit = function () {
    };
    ChatInputComponent.prototype.submit = function (message) {
        this.chatroomService.createMessage(message);
        //reset input
        this.newMessageText = '';
    };
    ChatInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-input',
            template: __webpack_require__(/*! ./chat-input.component.html */ "./src/app/pages/chat/components/chat-input/chat-input.component.html"),
            styles: [__webpack_require__(/*! ./chat-input.component.scss */ "./src/app/pages/chat/components/chat-input/chat-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            src_app_services_chatroom_service__WEBPACK_IMPORTED_MODULE_2__["ChatroomService"]])
    ], ChatInputComponent);
    return ChatInputComponent;
}());



/***/ }),

/***/ "./src/app/pages/chat/components/chat-message/chat-message.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/chat/components/chat-message/chat-message.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"chat-message d-flex\">\n  <div class=\"image-wrapper\" [routerLink]=\"'/profile/' + message.sender.id\">\n      <img [src]=\"message.sender.photoUrl\" class=\"rounded-circle\">\n  </div>\n   <div class=\"bubble d-flex flex-column\">\n     <div class=\"name\" [routerLink]=\"'/profile/' + message.sender.id\" >\n      <span>{{message.sender.firstName}} {{message.sender.lastName}}</span>\n     </div>\n     <small class=\"timestamp\" style=\"margin-bottom: 0;\"> {{message['createdAt'].toDate() | date:'medium'}} </small>\n     <div class=\"message\">\n      {{message.message}}\n    </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/chat/components/chat-message/chat-message.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/chat/components/chat-message/chat-message.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-message {\n  padding: 0.75em 1.5em; }\n  .chat-message .image-wrapper {\n    margin-right: 1em;\n    height: 50px;\n    width: 50px; }\n  .chat-message .image-wrapper img {\n      width: 50px;\n      height: 50px; }\n  .chat-message .image-wrapper img:hover {\n      cursor: pointer; }\n  .chat-message .name {\n    font-weight: 600;\n    font-size: 0.7em; }\n  .chat-message .name:hover {\n    cursor: pointer; }\n  .chat-message .timestamp {\n    margin-bottom: 1.5em;\n    font-weight: 200;\n    color: #c9c9c9; }\n  .chat-message .message {\n    font-size: 1em;\n    color: #636363;\n    font-weight: 200;\n    margin-top: 0.2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jb21wb25lbnRzL2NoYXQtbWVzc2FnZS9DOlxcVXNlcnNcXFVzZXJcXGNoYXQtYXBwL3NyY1xcYXBwXFxwYWdlc1xcY2hhdFxcY29tcG9uZW50c1xcY2hhdC1tZXNzYWdlXFxjaGF0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBcUIsRUFBQTtFQUR6QjtJQUlRLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVyxFQUFBO0VBTm5CO01BU1csV0FBVztNQUNYLFlBQVksRUFBQTtFQVZ2QjtNQWFZLGVBQWUsRUFBQTtFQWIzQjtJQWtCUSxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7RUFuQnhCO0lBc0JRLGVBQWUsRUFBQTtFQXRCdkI7SUEwQlEsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixjQUErQixFQUFBO0VBNUJ2QztJQWdDUSxjQUFjO0lBQ2QsY0FBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdC9jb21wb25lbnRzL2NoYXQtbWVzc2FnZS9jaGF0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNoYXQtbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAwLjc1ZW0gMS41ZW07XHJcblxyXG4gICAgLmltYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICBoZWlnaHQ6IDUwcHg7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBpbWc6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICB9XHJcbiAgICAubmFtZTpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50aW1lc3RhbXAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgY29sb3I6IGRhcmtlbigkbGlnaHQtZ3JleSwgMTUlKTtcclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgY29sb3I6IGRhcmtlbigkZ3JleSwgMjUlKTtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuMmVtO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/chat/components/chat-message/chat-message.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/chat/components/chat-message/chat-message.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChatMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function() { return ChatMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_classes_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/message */ "./src/app/classes/message.ts");



var ChatMessageComponent = /** @class */ (function () {
    function ChatMessageComponent() {
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_classes_message__WEBPACK_IMPORTED_MODULE_2__["Message"])
    ], ChatMessageComponent.prototype, "message", void 0);
    ChatMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-message',
            template: __webpack_require__(/*! ./chat-message.component.html */ "./src/app/pages/chat/components/chat-message/chat-message.component.html"),
            styles: [__webpack_require__(/*! ./chat-message.component.scss */ "./src/app/pages/chat/components/chat-message/chat-message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatMessageComponent);
    return ChatMessageComponent;
}());



/***/ }),

/***/ "./src/app/pages/chat/components/chatroom-list/chatroom-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/chat/components/chatroom-list/chatroom-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100 d-flex flex-column chatroom-list\">\r\n  <ng-container *ngFor=\"let chatroom of chatroomService.chatrooms | async\">\r\n    <div class=\"chatroom-list-item\">\r\n      <a [routerLink]=\"['/chat', chatroom.id]\">{{chatroom.name}}</a>\r\n    </div>\r\n  </ng-container>\r\n"

/***/ }),

/***/ "./src/app/pages/chat/components/chatroom-list/chatroom-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/chat/components/chatroom-list/chatroom-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatroom-list {\n  border-right: 2px solid #efefef;\n  overflow-y: scroll; }\n  .chatroom-list .chatroom-list-item {\n    border-bottom: 1px solid #efefef;\n    padding: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jb21wb25lbnRzL2NoYXRyb29tLWxpc3QvQzpcXFVzZXJzXFxVc2VyXFxjaGF0LWFwcC9zcmNcXGFwcFxccGFnZXNcXGNoYXRcXGNvbXBvbmVudHNcXGNoYXRyb29tLWxpc3RcXGNoYXRyb29tLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXQvY29tcG9uZW50cy9jaGF0cm9vbS1saXN0L0M6XFxVc2Vyc1xcVXNlclxcY2hhdC1hcHAvc3JjXFxhcHBcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwrQkNBZ0I7RURDaEIsa0JBQWtCLEVBQUE7RUFGdEI7SUFLUSxnQ0NKWTtJREtaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvY29tcG9uZW50cy9jaGF0cm9vbS1saXN0L2NoYXRyb29tLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5jaGF0cm9vbS1saXN0IHtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRsaWdodC1ncmV5O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAgIC5jaGF0cm9vbS1saXN0LWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHQtZ3JleTtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB9XHJcbn1cclxuIiwiJHByaW1hcnk6ICMzMjhDQzE7XHJcbiRzZWNvbmRhcnk6ICMwQjNDNUQ7XHJcbiRnb2xkOiAjRDlCMzEwO1xyXG4kbGlnaHQtZ3JleTogI2VmZWZlZjtcclxuJGdyZXk6IGRhcmtlbigkbGlnaHQtZ3JleSwgMzAlKTtcclxuJGJsYWNrOiAjMUQyNzMxO1xyXG5cclxuJG5hdmJhci1oZWlnaHQ6IDgwcHg7Il19 */"

/***/ }),

/***/ "./src/app/pages/chat/components/chatroom-list/chatroom-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/chat/components/chatroom-list/chatroom-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChatroomListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomListComponent", function() { return ChatroomListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_chatroom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chatroom.service */ "./src/app/services/chatroom.service.ts");



var ChatroomListComponent = /** @class */ (function () {
    function ChatroomListComponent(chatroomService /*, public currentUser: User*/) {
        this.chatroomService = chatroomService;
    }
    ChatroomListComponent.prototype.ngOnInit = function () {
    };
    ChatroomListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatroom-list',
            template: __webpack_require__(/*! ./chatroom-list.component.html */ "./src/app/pages/chat/components/chatroom-list/chatroom-list.component.html"),
            styles: [__webpack_require__(/*! ./chatroom-list.component.scss */ "./src/app/pages/chat/components/chatroom-list/chatroom-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_chatroom_service__WEBPACK_IMPORTED_MODULE_2__["ChatroomService"] /*, public currentUser: User*/])
    ], ChatroomListComponent);
    return ChatroomListComponent;
}());

//   return chatManager
//     .connect()
//     .then(currentUser => {
//       currentUser.subscribeToRoom({
//         roomId: '<your room id>',
//         messageLimit: 100,
//         hooks: {
//           onMessage: message => {
//             this.messages.push(message);
//           },
//           onPresenceChanged: (state, user) => {
//             this.users = currentUser.users.sort((a, b) => {
//               if (a.presence.state === 'online') return -1;
//               return 1;
//             });
//           },
//         },
//       });
//       this.currentUser = currentUser;
//       this.users = currentUser.users;
//     });
// }


/***/ }),

/***/ "./src/app/pages/chat/components/chatroom-title-bar/chatroom-title-bar.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/chat/components/chatroom-title-bar/chatroom-title-bar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"room-title\">\r\n  <h4>{{title}}</h4>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/chat/components/chatroom-title-bar/chatroom-title-bar.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/chat/components/chatroom-title-bar/chatroom-title-bar.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".room-title {\n  padding: 1em 1em 1em 2em;\n  border-bottom: 2px solid #a3a2a2;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jb21wb25lbnRzL2NoYXRyb29tLXRpdGxlLWJhci9DOlxcVXNlcnNcXFVzZXJcXGNoYXQtYXBwL3NyY1xcYXBwXFxwYWdlc1xcY2hhdFxcY29tcG9uZW50c1xcY2hhdHJvb20tdGl0bGUtYmFyXFxjaGF0cm9vbS10aXRsZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXQvY29tcG9uZW50cy9jaGF0cm9vbS10aXRsZS1iYXIvQzpcXFVzZXJzXFxVc2VyXFxjaGF0LWFwcC9zcmNcXGFwcFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHdCQUF3QjtFQUN4QixnQ0NBMkI7RURDM0Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0L2NvbXBvbmVudHMvY2hhdHJvb20tdGl0bGUtYmFyL2NoYXRyb29tLXRpdGxlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4ucm9vbS10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGdyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIkcHJpbWFyeTogIzMyOENDMTtcclxuJHNlY29uZGFyeTogIzBCM0M1RDtcclxuJGdvbGQ6ICNEOUIzMTA7XHJcbiRsaWdodC1ncmV5OiAjZWZlZmVmO1xyXG4kZ3JleTogZGFya2VuKCRsaWdodC1ncmV5LCAzMCUpO1xyXG4kYmxhY2s6ICMxRDI3MzE7XHJcblxyXG4kbmF2YmFyLWhlaWdodDogODBweDsiXX0= */"

/***/ }),

/***/ "./src/app/pages/chat/components/chatroom-title-bar/chatroom-title-bar.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/chat/components/chatroom-title-bar/chatroom-title-bar.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChatroomTitleBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomTitleBarComponent", function() { return ChatroomTitleBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatroomTitleBarComponent = /** @class */ (function () {
    function ChatroomTitleBarComponent() {
    }
    ChatroomTitleBarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChatroomTitleBarComponent.prototype, "title", void 0);
    ChatroomTitleBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatroom-title-bar',
            template: __webpack_require__(/*! ./chatroom-title-bar.component.html */ "./src/app/pages/chat/components/chatroom-title-bar/chatroom-title-bar.component.html"),
            styles: [__webpack_require__(/*! ./chatroom-title-bar.component.scss */ "./src/app/pages/chat/components/chatroom-title-bar/chatroom-title-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatroomTitleBarComponent);
    return ChatroomTitleBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/chat/components/chatroom-window/chatroom-window.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/chat/components/chatroom-window/chatroom-window.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100 d-flex flex-column chat-window\">\r\n  <ng-container *ngIf=\"!chatroom else chatMessages\">\r\n    <div class=\"select-room h-100 w-100 d-flex justify-content-center align-items-center\">\r\n      <div class=\"select-room-message\">\r\n        Select a Room\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n\r\n<ng-template #chatMessages>\r\n  <app-chatroom-title-bar [title]=\"chatroom.name\"></app-chatroom-title-bar>\r\n  <div class=\"message-wrapper h-100\" #scrollContainer>\r\n    <ng-container *ngIf=\"messages?.length > 0 else noMessages\">\r\n        <ng-container *ngFor=\"let message of messages\">\r\n            <app-chat-message [message]=\"message\"></app-chat-message>\r\n          </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <app-chat-input></app-chat-input>\r\n\r\n</ng-template>\r\n\r\n<ng-template #noMessages>\r\n    <div class=\"select-room h-100 w-100 d-flex justify-content-center align-items-center\">\r\n        <div class=\"select-room-message\">\r\n          No Messages\r\n        </div>\r\n      </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/chat/components/chatroom-window/chatroom-window.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/chat/components/chatroom-window/chatroom-window.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-wrapper {\n  overflow-y: scroll; }\n\n.select-room .select-room-message {\n  width: 40%;\n  height: 7%;\n  margin-bottom: 10%;\n  border: 1px solid #efefef;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 1.2em;\n  box-shadow: 0 5px 10px #efefef; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jb21wb25lbnRzL2NoYXRyb29tLXdpbmRvdy9DOlxcVXNlcnNcXFVzZXJcXGNoYXQtYXBwL3NyY1xcYXBwXFxwYWdlc1xcY2hhdFxcY29tcG9uZW50c1xcY2hhdHJvb20td2luZG93XFxjaGF0cm9vbS13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXQvY29tcG9uZW50cy9jaGF0cm9vbS13aW5kb3cvQzpcXFVzZXJzXFxVc2VyXFxjaGF0LWFwcC9zcmNcXGFwcFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUVRLFVBQVU7RUFDVixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHlCQ1JZO0VEU1osb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw4QkNiWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdC9jb21wb25lbnRzL2NoYXRyb29tLXdpbmRvdy9jaGF0cm9vbS13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5tZXNzYWdlLXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsOyBcclxufVxyXG5cclxuLnNlbGVjdC1yb29tIHtcclxuICAgIC5zZWxlY3Qtcm9vbS1tZXNzYWdlIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGhlaWdodDogNyU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggJGxpZ2h0LWdyZXk7XHJcbiAgICB9XHJcbn0iLCIkcHJpbWFyeTogIzMyOENDMTtcclxuJHNlY29uZGFyeTogIzBCM0M1RDtcclxuJGdvbGQ6ICNEOUIzMTA7XHJcbiRsaWdodC1ncmV5OiAjZWZlZmVmO1xyXG4kZ3JleTogZGFya2VuKCRsaWdodC1ncmV5LCAzMCUpO1xyXG4kYmxhY2s6ICMxRDI3MzE7XHJcblxyXG4kbmF2YmFyLWhlaWdodDogODBweDsiXX0= */"

/***/ }),

/***/ "./src/app/pages/chat/components/chatroom-window/chatroom-window.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/chat/components/chatroom-window/chatroom-window.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChatroomWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomWindowComponent", function() { return ChatroomWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_chatroom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chatroom.service */ "./src/app/services/chatroom.service.ts");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");





// import { JoinRoomService } from 'src/app/services/joinroom.service';
// import { User } from 'src/app/classes/user';
var ChatroomWindowComponent = /** @class */ (function () {
    //TODO replace with Firebase data
    function ChatroomWindowComponent(route, chatroomService, loadingService) {
        var _this = this;
        this.route = route;
        this.chatroomService = chatroomService;
        this.loadingService = loadingService;
        this.subscriptions = [];
        this.subscriptions.push(this.chatroomService.selectedChatroom.subscribe(function (chatroom) {
            _this.chatroom = chatroom;
        }));
        this.subscriptions.push(this.chatroomService.selectedChatroomMessages.subscribe(function (messages) {
            _this.messages = messages;
        }));
    }
    ChatroomWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollToBottom();
        this.subscriptions.push(this.route.paramMap.subscribe(function (params) {
            var chatroomId = params.get('chatroomId');
            _this.chatroomService.changeChatroom.next(chatroomId);
        }));
    };
    ChatroomWindowComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ChatroomWindowComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatroomWindowComponent.prototype.scrollToBottom = function () {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatroomWindowComponent.prototype, "scrollContainer", void 0);
    ChatroomWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatroom-window',
            template: __webpack_require__(/*! ./chatroom-window.component.html */ "./src/app/pages/chat/components/chatroom-window/chatroom-window.component.html"),
            styles: [__webpack_require__(/*! ./chatroom-window.component.scss */ "./src/app/pages/chat/components/chatroom-window/chatroom-window.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_chatroom_service__WEBPACK_IMPORTED_MODULE_3__["ChatroomService"],
            src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]])
    ], ChatroomWindowComponent);
    return ChatroomWindowComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-xs-12 col-sm-8 col-md-6\" *ngIf=\"currentUser else noPhoto\">\r\n        <img *ngIf=\"!downloadUrl\" [src]=\"currentUser.photoUrl\" alt=\"profile-pic\" class=\"rounded-circle mx-auto d-block profile-pic\">\r\n        <img *ngIf=\"downloadUrl && downloadUrl.length > 0\" [src]=\"downloadUrl\" alt=\"profile-pic\" class=\"rounded-circle mx-auto d-block profile-pic\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-center\"  *ngIf=\"currentUser\">\r\n        <div class=\"col-xs-12 col-sm-8 col-md-6\">\r\n          <input type=\"file\" (change)=\"uploadFile($event)\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center\"  *ngIf=\"currentUser\">\r\n          <div class=\"col-xs-12 col-sm-8 col-md-6 justify-content-center d-flex \">\r\n            <input type=\"text\" [(ngModel)]=\"currentUser.firstName\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row justify-content-center\"  *ngIf=\"currentUser\">\r\n            <div class=\"col-xs-12 col-sm-8 col-md-6 justify-content-center d-flex \">\r\n                <input type=\"text\" [(ngModel)]=\"currentUser.lastName\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row justify-content-center\"  *ngIf=\"currentUser\">\r\n              <div class=\"col-xs-12 col-sm-8 col-md-6 quote\">\r\n                  <input type=\"text\" [(ngModel)]=\"currentUser.quote\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row justify-content-center\"  *ngIf=\"currentUser\">\r\n                <div class=\"col-xs-12 col-sm-8 col-md-6 text-center bio\">\r\n                    <textarea rows=\"5\" [(ngModel)]=\"currentUser.bio\"></textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"row justify-content-center\"  *ngIf=\"currentUser\">\r\n                  <div class=\"col-xs-12 col-sm-8 col-md-6 text-center\">\r\n                      <button class=\"btn btn-primary\" (click)=\"save()\">Save Profile</button>\r\n                  </div>\r\n                </div>\r\n  </div>\r\n\r\n<ng-template #noPhoto>\r\n  <div class=\"no-photo d-flex justify-content-center align-items-center\">\r\n    No photo\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-photo {\n  height: 150px;\n  width: 150px;\n  background: #a3a2a2;\n  margin: 1em 0;\n  color: white;\n  border-radius: 50%; }\n\n.profile-pic {\n  max-width: 150px;\n  max-height: 150px;\n  margin: 1em 0; }\n\ninput, textarea {\n  border: 2px solid #efefef;\n  border-radius: 5px;\n  padding: .25em .5em;\n  margin-bottom: 1em;\n  width: 100%;\n  font-weight: 200; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL0M6XFxVc2Vyc1xcVXNlclxcY2hhdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxlZGl0LXByb2ZpbGVcXGVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL0M6XFxVc2Vyc1xcVXNlclxcY2hhdC1hcHAvc3JjXFxhcHBcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQ0QyQjtFREUzQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLHlCQ2ZnQjtFRGdCaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLm5vLXBob3RvIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JleTtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpYyB7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG59XHJcblxyXG5pbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJGxpZ2h0LWdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59IiwiJHByaW1hcnk6ICMzMjhDQzE7XHJcbiRzZWNvbmRhcnk6ICMwQjNDNUQ7XHJcbiRnb2xkOiAjRDlCMzEwO1xyXG4kbGlnaHQtZ3JleTogI2VmZWZlZjtcclxuJGdyZXk6IGRhcmtlbigkbGlnaHQtZ3JleSwgMzAlKTtcclxuJGJsYWNrOiAjMUQyNzMxO1xyXG5cclxuJG5hdmJhci1oZWlnaHQ6IDgwcHg7Il19 */"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_classes_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/classes/alert */ "./src/app/classes/alert.ts");
/* harmony import */ var src_app_enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/enums/alert-type.enum */ "./src/app/enums/alert-type.enum.ts");











var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(auth, loadingService, route, fs, db, location, alertService) {
        this.auth = auth;
        this.loadingService = loadingService;
        this.route = route;
        this.fs = fs;
        this.db = db;
        this.location = location;
        this.alertService = alertService;
        this.currentUser = null;
        this.userId = '';
        this.subscriptions = [];
        this.uploadPerent = 0;
        this.downloadUrl = null;
        this.loadingService.isLoading.next(true);
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.auth.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.loadingService.isLoading.next(false);
        }));
        this.subscriptions.push(this.route.paramMap.subscribe(function (params) {
            _this.userId = params.get('userId');
        }));
    };
    //upload file
    EditProfileComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = file.name + "_" + this.currentUser.id;
        var task = this.fs.upload(filePath, file);
        //observe(posmatrati) the precentage changes
        this.subscriptions.push(task.percentageChanges().subscribe(function (precentage) {
            if (precentage < 100) {
                _this.loadingService.isLoading.next(true);
            }
            else {
                _this.loadingService.isLoading.next(false);
            }
            _this.uploadPerent = precentage;
        }));
        //get notified when the download URL is available
        this.subscriptions.push(this.downloadURL().subscribe(function (url) { return _this.downloadUrl = url; }));
    };
    EditProfileComponent.prototype.save = function () {
        var photo;
        if (this.downloadUrl) {
            photo = this.downloadUrl;
        }
        else {
            photo = this.currentUser.photoUrl;
        }
        var user = Object.assign({}, this.currentUser, { photoUrl: photo });
        var userRef = this.db.doc("users/" + user.id);
        userRef.set(user);
        this.alertService.alerts.next(new src_app_classes_alert__WEBPACK_IMPORTED_MODULE_9__["Alert"]('Your profiles was successfully updated!', src_app_enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_10__["AlertType"].Success));
        this.location.back();
    };
    EditProfileComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/pages/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/pages/edit-profile/edit-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container-wrapper container d-flex justify-content-center align-items-center\">\r\n    <div class=\"form-wrapper text-center\">\r\n      <h2 class=\"text-center\">Login</h2>\r\n      <div class=\"col-sm-14\">\r\n      </div>\r\n      <form [formGroup]=\"loginForm\" (submit)=\"submit()\" novalidate>\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" class=\"form-control\" id=\"email-input\" placeholder=\"Enter Email\" formControlName=\"email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" id=\"password-input\" placeholder=\"Password\" formControlName=\"password\">\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </form>\r\n      <small><a routerLink=\"/signup\"> Need an Account? </a></small>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #0B3C5D;\n  margin-bottom: 1em; }\n\n.form-wrapper {\n  min-width: 40%;\n  margin-bottom: 10%;\n  border: 2px solid #efefef;\n  padding: 1em 2em;\n  box-shadow: 0 15px 20px #efefef; }\n\n#roomInput {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxVc2VyXFxjaGF0LWFwcC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxVc2VyXFxjaGF0LWFwcC9zcmNcXGFwcFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNDRmU7RURHZixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQ1JnQjtFRFNoQixnQkFBZ0I7RUFDaEIsK0JDVmdCLEVBQUE7O0FEYXBCO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuaDIge1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcblxyXG4uZm9ybS13cmFwcGVyIHtcclxuICAgIG1pbi13aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJGxpZ2h0LWdyZXk7XHJcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDIwcHggJGxpZ2h0LWdyZXk7XHJcbn1cclxuXHJcbiNyb29tSW5wdXR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59IiwiJHByaW1hcnk6ICMzMjhDQzE7XHJcbiRzZWNvbmRhcnk6ICMwQjNDNUQ7XHJcbiRnb2xkOiAjRDlCMzEwO1xyXG4kbGlnaHQtZ3JleTogI2VmZWZlZjtcclxuJGdyZXk6IGRhcmtlbigkbGlnaHQtZ3JleSwgMzAlKTtcclxuJGJsYWNrOiAjMUQyNzMxO1xyXG5cclxuJG5hdmJhci1oZWlnaHQ6IDgwcHg7Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _classes_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/alert */ "./src/app/classes/alert.ts");
/* harmony import */ var src_app_enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/enums/alert-type.enum */ "./src/app/enums/alert-type.enum.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, alertService, loadingService, auth, router, route) {
        this.fb = fb;
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.subscriptions = [];
        this.createForm();
    }
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/chat';
        this.subscriptions.push(this.auth.currentUser.subscribe(function (user) {
            if (!!user) {
                _this.router.navigateByUrl('/chat');
            }
        }));
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.loadingService.isLoading.next(true);
            var _a = this.loginForm.value, email = _a.email, password = _a.password;
            //TODO call the auth service
            this.subscriptions.push(this.auth.login(email, password).subscribe(function (success) {
                if (success) {
                    _this.router.navigateByUrl(_this.returnUrl);
                }
                else {
                    _this.displayFailedLogin();
                }
                _this.loadingService.isLoading.next(false);
            }));
        }
        else {
            setTimeout(function () {
                _this.loadingService.isLoading.next(false);
                _this.displayFailedLogin();
            });
        }
    };
    LoginComponent.prototype.displayFailedLogin = function () {
        var failedLoginAlert = new _classes_alert__WEBPACK_IMPORTED_MODULE_3__["Alert"]('Invalid email/password combination, try again.', src_app_enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Danger);
        this.alertService.alerts.next(failedLoginAlert);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-xs-12 col-sm-8 col-md-6\" *ngIf=\"user else noPhoto\">\r\n      <img [src]=\"user?.photoUrl\" alt=\"profile-pic\" class=\"rounded-circle mx-auto d-block profile-pic\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-xs-12 col-md-8 col-md-6 text-center name\">\r\n      {{user?.firstName}} {{user?.lastName}}\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-xs-12 col-md-8 col-md-6 text-center quote\">\r\n      <blockquote class=\"blockquote\">\r\n        <p class=\"mb-0\">\r\n          \"{{user?.quote}}\"\r\n        </p>\r\n      </blockquote>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-xs-12 col-md-8 col-md-6 text-center bio\">\r\n      {{user?.bio}}\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\" *ngIf=\"user?.id === currentUser?.id\">\r\n    <div class=\"col-xs-12 col-md-8 col-md-6 text-center edit-button\">\r\n      <button [routerLink]=\"'/profile/' + currentUser?.id + '/edit'\" class=\"btn btn-primary\">Edit Profile</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #noPhoto>\r\n  <div class=\"no-photo d-flex justify-content-center align-items-center\">\r\n    No Photo\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-photo {\n  height: 150px;\n  width: 150px;\n  background: #a3a2a2;\n  margin: 1em 0;\n  color: white;\n  border-radius: 50%; }\n\n.profile-pic {\n  max-width: 150px;\n  max-height: 150px;\n  margin: 1em 0; }\n\n.name {\n  font-size: 1.4em;\n  font-weight: 200; }\n\n.quote {\n  margin-bottom: 2em; }\n\n.bio {\n  margin-bottom: 2em;\n  font-weight: 200; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXFVzZXJcXGNoYXQtYXBwL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXFVzZXJcXGNoYXQtYXBwL3NyY1xcYXBwXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixtQkNEMkI7RURFM0IsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4ubm8tcGhvdG8ge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICRncmV5O1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtcGljIHtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4ucXVvdGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uYmlvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn0iLCIkcHJpbWFyeTogIzMyOENDMTtcclxuJHNlY29uZGFyeTogIzBCM0M1RDtcclxuJGdvbGQ6ICNEOUIzMTA7XHJcbiRsaWdodC1ncmV5OiAjZWZlZmVmO1xyXG4kZ3JleTogZGFya2VuKCRsaWdodC1ncmV5LCAzMCUpO1xyXG4kYmxhY2s6ICMxRDI3MzE7XHJcblxyXG4kbmF2YmFyLWhlaWdodDogODBweDsiXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, loadingService, route, db) {
        this.auth = auth;
        this.loadingService = loadingService;
        this.route = route;
        this.db = db;
        this.currentUser = null;
        this.subscriptions = [];
        this.loadingService.isLoading.next(true);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.auth.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.loadingService.isLoading.next(false);
        }));
        this.subscriptions.push(this.route.paramMap.subscribe(function (params) {
            var userId = params.get('userId');
            var userRef = _this.db.doc("users/" + userId);
            userRef.valueChanges().subscribe(function (user) { return _this.user = user; });
        }));
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container-wrapper container d-flex justify-content-center align-items-center\">\r\n  <div class=\"form-wrapper text-center\">\r\n    <h2 class=\"text-center\">Sign Up</h2>\r\n    <div class=\"col-sm-14\">\r\n    </div>\r\n    <form [formGroup]=\"signupForm\" (submit)=\"submit()\" novalidate>\r\n      <div class=\"name-wrapper d-flex\">\r\n        <div class=\"form-group first-name\">\r\n          <input type=\"text\" class=\"form-control\" id=\"first-name-input\" placeholder=\"Enter First Name\"\r\n            formControlName=\"firstName\">\r\n        </div>\r\n        <div class=\"form-group last-name\">\r\n          <input type=\"text\" class=\"form-control\" id=\"last-input\" placeholder=\"Enter Last Name\"\r\n            formControlName=\"lastName\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"email\" class=\"form-control\" id=\"email-input\" placeholder=\"Enter Email\" formControlName=\"email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"password\" class=\"form-control\" id=\"password-input\" placeholder=\"Password\"\r\n          formControlName=\"password\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n    </form>\r\n    <small><a routerLink=\"/login\"> Already have an Account </a></small>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #0B3C5D;\n  margin-bottom: 1em; }\n\n.form-wrapper {\n  min-width: 40%;\n  margin-bottom: 10%;\n  border: 2px solid #efefef;\n  padding: 1em 2em;\n  box-shadow: 0 15px 20px #efefef; }\n\n.first-name {\n  margin-right: 0.5em; }\n\n.last-name {\n  margin-left: 0.5em; }\n\n#roomInput {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcVXNlclxcY2hhdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcVXNlclxcY2hhdC1hcHAvc3JjXFxhcHBcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQ0ZlO0VER2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkNQZ0I7RURRaEIsZ0JBQWdCO0VBQ2hCLCtCQ1RnQixFQUFBOztBRFlwQjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuaDIge1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIge1xyXG4gICAgbWluLXdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkbGlnaHQtZ3JleTtcclxuICAgIHBhZGRpbmc6IDFlbSAyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMjBweCAkbGlnaHQtZ3JleTtcclxufVxyXG5cclxuLmZpcnN0LW5hbWUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcclxufVxyXG4ubGFzdC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxufVxyXG5cclxuI3Jvb21JbnB1dHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iLCIkcHJpbWFyeTogIzMyOENDMTtcclxuJHNlY29uZGFyeTogIzBCM0M1RDtcclxuJGdvbGQ6ICNEOUIzMTA7XHJcbiRsaWdodC1ncmV5OiAjZWZlZmVmO1xyXG4kZ3JleTogZGFya2VuKCRsaWdodC1ncmV5LCAzMCUpO1xyXG4kYmxhY2s6ICMxRDI3MzE7XHJcblxyXG4kbmF2YmFyLWhlaWdodDogODBweDsiXX0= */"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _classes_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/alert */ "./src/app/classes/alert.ts");
/* harmony import */ var src_app_enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/enums/alert-type.enum */ "./src/app/enums/alert-type.enum.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");









var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, alertService, auth, loadingService, router) {
        this.fb = fb;
        this.alertService = alertService;
        this.auth = auth;
        this.loadingService = loadingService;
        this.router = router;
        this.subscriptions = [];
        this.createForm();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.createForm = function () {
        this.signupForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
    };
    SignupComponent.prototype.submit = function () {
        var _this = this;
        if (this.signupForm.valid) {
            var _a = this.signupForm.value, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password;
            //TODO call the auth service
            this.subscriptions.push(this.auth.signup(firstName, lastName, email, password).subscribe(function (success) {
                if (success) {
                    _this.router.navigate(['/chat']);
                }
                else {
                    var failedSignupAlert = new _classes_alert__WEBPACK_IMPORTED_MODULE_3__["Alert"]('There was a problem signing up, try again', src_app_enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Danger);
                    _this.alertService.alerts.next(failedSignupAlert);
                }
                _this.loadingService.isLoading.next(false);
            }));
        }
        else {
            var failedSignedAlert = new _classes_alert__WEBPACK_IMPORTED_MODULE_3__["Alert"]('Please enter a valid name, email and password, try again', src_app_enums_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Danger);
            this.alertService.alerts.next(failedSignedAlert);
        }
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AlertService = /** @class */ (function () {
    function AlertService() {
        this.alerts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _classes_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/alert */ "./src/app/classes/alert.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var AuthService = /** @class */ (function () {
    function AuthService(router, alertService, afAuth, db) {
        var _this = this;
        this.router = router;
        this.alertService = alertService;
        this.afAuth = afAuth;
        this.db = db;
        //preuzima korisnika iz baze i postavlja ga || TODO fetch the user from the Firebase backend, then set the user(actioned!)
        this.currentUser = this.afAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (user) {
            console.log(user);
            if (user) {
                return _this.db.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }
        }));
        this.currentUser.subscribe(function (res) { return console.log(res); });
        this.setCurrentUserSnapshot();
    }
    //sign up
    AuthService.prototype.signup = function (firstName, lastName, email, password) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            var userRef = _this.db.doc("users/" + user.user.uid);
            var updatedUser = {
                id: user.user.uid,
                email: user.user.email,
                firstName: firstName,
                lastName: lastName,
                photoUrl: 'https://firebasestorage.googleapis.com/v0/b/chat-14dab.appspot.com/o/black-and-white.jpg?alt=media&token=4fd88702-96a4-4ffa-81a2-cadd86aa70e5',
                quote: 'Life is like a box chocolates, you never know what you are gonna get!',
                bio: 'Bio is under construction...'
            };
            userRef.set(updatedUser);
            return true;
        })
            .catch(function (err) { return false; }));
    };
    AuthService.prototype.login = function (email, password) {
        //TODO call Firebase login function
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return true; })
            .catch(function (err) { return false; }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        //TODO call Firebase logout function
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/login']);
            _this.alertService.alerts.next(new _classes_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('You have been signed out.'));
        });
    };
    AuthService.prototype.setCurrentUserSnapshot = function () {
        var _this = this;
        this.currentUser.subscribe(function (user) { return _this.currentUserSnapshot = user; });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chatroom.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/chatroom.service.ts ***!
  \**********************************************/
/*! exports provided: ChatroomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomService", function() { return ChatroomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");







var ChatroomService = /** @class */ (function () {
    function ChatroomService(db, loadingService, authService) {
        this.db = db;
        this.loadingService = loadingService;
        this.authService = authService;
        this.changeChatroom = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.selectedChatroom = this.changeChatroom
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (chatroomId) {
            if (chatroomId) {
                // this.loadingService.isLoading.next(true);
                return db.doc("chatrooms/" + chatroomId).valueChanges();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
        this.selectedChatroomMessages = this.changeChatroom
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (chatroomId) {
            if (chatroomId) {
                // this.loadingService.isLoading.next(true);
                return db.collection("chatrooms/" + chatroomId + "/messages", function (ref) {
                    return ref.orderBy('createdAt', 'desc').limit(100);
                }).valueChanges()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (arr) { return arr.reverse(); }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
        this.chatrooms = db.collection('chatrooms').valueChanges();
    }
    ChatroomService.prototype.createMessage = function (text) {
        var chatroomId = this.changeChatroom.value;
        var message = {
            message: text,
            createdAt: new Date(),
            sender: this.authService.currentUserSnapshot,
        };
        this.db.collection("chatrooms/" + chatroomId + "/messages").add(message);
    };
    ChatroomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], ChatroomService);
    return ChatroomService;
}());



/***/ }),

/***/ "./src/app/services/loading.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAe73pctfCL1Q1qf7rDJFDovXQZ1lUHfwY",
        authDomain: "chatapp-1bd31.firebaseapp.com",
        databaseURL: "https://chatapp-1bd31.firebaseio.com",
        projectId: "chatapp-1bd31",
        storageBucket: "chatapp-1bd31.appspot.com",
        messagingSenderId: "1003779490348"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\chat-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map