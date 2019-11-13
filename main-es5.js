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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-store-checkout-homepage></app-store-checkout-homepage> -->\n<router-outlet></router-outlet>\n<!-- <app-payment-confirmation></app-payment-confirmation> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/payment-confirmation/cash-dialog-popup.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payment-confirmation/cash-dialog-popup.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>Enter Cash Amount</h3>\n<div mat-dialog-content>\n  <div class=\"dollarButton\" style=\"padding-top:20px;\">\n    <div class=\"row dollorOptions\">\n      <div class=\"col-sm-3 col-md-3 col-lg-3 cashButtons\" >\n          <button type=\"button\" class=\"btn btn-outline-success circularButton\" id=\"dollarButtons10\" [mat-dialog-close]=\"data\" (click)=\"data.cash='10'\">$10</button>\n      </div>\n      <div class=\"col-sm-3 col-md-3 col-lg-3\">\n          <button type=\"button\" class=\"btn btn-outline-success circularButton\" id=\"dollarButtons10\"[mat-dialog-close]=\"data\" (click)=\"data.cash='20'\">$20</button>\n      </div>\n      <div class=\"col-sm-3 col-md-3 col-lg-3\">\n          <button type=\"button\" class=\"btn btn-outline-success circularButton\" id=\"dollarButtons10\" [mat-dialog-close]=\"data\" (click)=\"data.cash='50'\">$50</button>\n      </div>\n      <div class=\"col-sm-3 col-md-3 col-lg-3\">\n          <button type=\"button\" class=\"btn btn-outline-success circularButton\" id=\"dollarButtons10\" [mat-dialog-close]=\"data\" (click)=\"data.cash='100'\">$100</button>\n      </div>\n    </div>\n    <div class=\"row dollorOptions\">\n\n      <div class=\"col-sm-3 col-md-3 col-lg-3\">\n          <button type=\"button\" class=\"btn btn-outline-success circularButton\" id=\"dollarButtons10\" [mat-dialog-close]=\"data\" (click)=\"data.cash='250'\">$250</button>\n      </div>\n      <div class=\"col-sm-3 col-md-3 col-lg-3\">\n          <button type=\"button\" class=\"btn btn-outline-success circularButton\" id=\"dollarButtons10\" [mat-dialog-close]=\"data\" (click)=\"data.cash='500'\">$500</button>\n      </div>\n      <div class=\"col-sm-3 col-md-3 col-lg-3\">\n          <button type=\"button\" class=\"btn btn-outline-success circularButton\" id=\"dollarButtons10\" [mat-dialog-close]=\"data\" (click)=\"data.cash='1000'\">$1000</button>\n      </div>\n      <div class=\"col-sm-3 col-md-3 col-lg-3\">\n          <button type=\"button\" class=\"btn btn-outline-success circularButton\" id=\"dollarButtons10\" [mat-dialog-close]=\"data\" (click)=\"data.cash='2000'\">$2000</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"amountBox\">\n    <mat-form-field>\n      <input type=\"number\" placeholder=\"Enter Amount\" matInput [(ngModel)]=\"data.cash\">\n    </mat-form-field>\n  </div>\n</div>\n\n<div class=\"modal-footer\">\n  <button class=\"btn btn-outline-secondary\" style=\"border-radius: 20px;\" (click)=\"onNoClick() \">Cancel</button>\n  <button  class=\"btn btn-success\" style=\"border-radius: 20px; width:80px;\" [mat-dialog-close]=\"data\" cdkFocusInitial>Save</button>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/payment-confirmation/confirm-payment-dialog.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payment-confirmation/confirm-payment-dialog.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n  <div class=\"row\" style=\"margin-top: 3px;\">\n    <div class=\"col-sm-2 col-md-2 col-lg-2\" style=\"margin-left:40px;\">\n      <img src=\"../../assets/tick-inside-circle.png\" width=\"50px\" height=\"50px\"></div>\n    <div class=\"col-sm-8 col-md-8 col-lg-8\" style=\"padding:0\">\n      <h2 style=\"color: #075BA4\">Payment Successful !</h2>\n    </div>\n  </div>\n</h2>\n<div mat-dialog-content class=\"contentText\">\n  <p>Transaction with <strong>Reference number 00009767608678598</strong> is completed!</p>\n  <p> Please select the required receipt options or select NONE to exit.</p>\n  <div class=\"dollarButton\">\n    <div class=\"row dollorOptions\">\n      <div class=\"col-sm-4 col-md-4 col-lg-4 receiptButtons\">\n        <input\n          type=\"email\"\n          id=\"emailAddress\"\n          class=\"btn btn-outline-success\"\n\n          onfocus=\"this.placeholder=''\"\n          onblur=\"this.placeholder='example@mail.com'\"\n          style=\"width:160px;\">\n        <label for=\"emailAddress\"></label>\n      </div>\n      <div class=\"col-sm-4 col-md-4 col-lg-4 receiptButtons\">\n        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"frontPrint()\" [mat-dialog-close]=\"data\" style=\"width:160px;\">FRONT PRINT</button>\n        </div>\n      <div class=\"col-sm-4 col-md-4 col-lg-4 receiptButtons\">\n        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"backPrint()\" [mat-dialog-close]=\"data\" style=\"width:160px;\">BACK PRINT</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-dark\" (click)=\"noneClick()\" style=\"background-color: #055ba4\">NONE</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/payment-confirmation/payment-confirmation.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payment-confirmation/payment-confirmation.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar navbar-light\" style=\"background-color: #496584; height:90px\">\n    <div class=\"navbar-collapse navbar navbar-expand-sm-md-lg\">\n      <ul class=\"backButton\">\n        <button type=\"button\" class=\"btn btn-light storeNumber\" (click)=\"goBack()\">Back</button>\n      </ul>\n      <ul class=\"navbar-nav navbar-center\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link heading\" id=\"heading\" href=\"#\">xPOS Cloud<span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav ml-auto\">\n        <li><a href=\"#about\" style=\"color:white;\">Store Number : 002</a></li>\n      </ul>\n    </div>\n</nav>\n<div class=\"topHeader\">\n  <h4>Reference Number: 00009767608678598</h4>\n</div>\n\n<div class=\"container\">\n  <div id=\"leftSidePage\" style=\"height: 520px;\" >\n    <div class=\"cashHeader mx-3\">\n      <h1>Amount Details</h1>\n      <hr>\n    </div>\n    <div class=\"cashDropdown mx-3\" >\n        <div class=\"row displayText\">\n            <div class = \"col-sm-6 col-md-6 col-lg-6 leftSide\">Items :<hr></div>\n            <div class = \"col-sm-6 col-md-6 col-lg-6 rightSide\">{{dataTable.length}}<hr></div>\n          </div>\n      <div class=\"row\">\n        <div class = \"col-sm-6 col-md-6 col-lg-6 leftSide\">Total Due :</div>\n        <div class = \"col-sm-6 col-md-6 col-lg-6 rightSide\"><b>${{totalAmount | number:'1.2-2'}}</b></div>\n      </div>\n      <div class=\"row\">\n          <div class = \"col-sm-6 col-md-6 col-lg-6 leftSide\">Cash :<hr></div>\n          <div class = \"col-sm-6 col-md-6 col-lg-6 rightSide\"><b>${{cash | number:'1.2-2'}}</b></div>\n      </div>\n      <div class=\"row differenceAmount\">\n          <div class = \"col-sm-6 col-md-6 col-lg-6 leftSide\">Change:</div>\n          <div class = \"col-sm-6 col-md-6 col-lg-6 rightSide\"><b>${{totalAmount - cash | number:'1.2-2'}}</b></div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"rightSidePage\" style=\"height: 520px;\">\n    <div class=\"paymentOptions\">\n      <div class=\"cashHeader mx-3\">\n          <h1>Payment  Method</h1>\n          <hr>\n      </div>\n      <div class=\"paymentMode\">\n          <button type=\"button\" (click)=\"cashMethod()\" class=\"paymentButtons\">\n            <img src=\"../../assets/cash.png\" class=\"paymentImages\">\n            <span class=\"paymentText\">Cash</span>\n          </button>\n        </div>\n      <div class=\"paymentMode\">\n        <button type=\"button\" class=\"paymentButtons\">\n          <img src=\"../../assets/shopping-store.png\" class=\"paymentImages\">\n          <span class=\"paymentText\">Credit</span>\n        </button>\n      </div>\n      <div class=\"paymentMode\">\n          <button type=\"button\" class=\"paymentButtons\">\n            <img src=\"../../assets/cheque.png\" class=\"paymentImages\">\n            <span class=\"paymentText\">Check</span>\n          </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<footer>\n  <div class=\"modal-footer\">\n    <div class=\"voidButton\">\n      <button type=\"button\" class=\"btn btn-light circularButton employee\" (click)=\"voidTransaction()\" style=\"width:80px\">Void</button>\n    </div>\n      <button type=\"button\" class=\"btn btn-info circularButton employee\" style=\"width:120px\">save</button>\n      <button type=\"button\" class=\"btn btn-success circularButton\" [disabled]=\"buttonDisable\" (click)=\"confirmPayment()\" style=\"width:200px\">Make Payment</button>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/store-checkout-homepage/store-checkout-homepage.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store-checkout-homepage/store-checkout-homepage.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top Navbar -->\n<nav class=\"navbar navbar-expand-md navbar navbar-light\" style=\"background-color: #496584; height:90px\">\n    <div class=\"navbar-collapse navbar navbar-expand-sm-md-lg\">\n      <ul class=\"navbar-brand logo\">\n          <a href=\"#\">\n              <img src=\"../../assets/xfinityLogo.png\" width=\"50\" height=\"50\" alt=\"\">\n          </a>\n      </ul>\n      <ul class=\"navbar-nav navbar-center\">\n          <li class=\"nav-item active\">\n              <a class=\"nav-link\" id=\"heading\" href=\"#\">xPOS Cloud<span class=\"sr-only\">(current)</span></a>\n          </li>\n      </ul>\n      <ul class=\"nav navbar-nav ml-auto storeNumber\">\n          <li><a class=\"storeNumber\" href=\"#about\">Store Number : 002</a></li>\n      </ul>\n  </div>\n</nav>\n<!-- -------------------Search Bar ------------------->\n<div class=\"row mi-5 mb-5 searchHead\">\n    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n        <form class=\"form-inline  searchBox\">\n            <mat-select class=\"form-control col-sm-10 col-md-10 col-lg-10 searchBar\" placeholder=\"Item List\"[(ngModel)]=\"selectedItem\"\n                (selectionChange)=\"onChange()\" [ngModelOptions]=\"{standalone: true}\">\n                <mat-label>Select Items</mat-label>\n                <!-- <mat-option>None</mat-option> -->\n                <mat-option *ngFor=\"let item of dataItems\" [value]=\"item.name\">\n                    {{item.name}}\n                </mat-option>\n            </mat-select>\n        </form>\n    </div>\n    <!-- ---------------Total Display ----------- -->\n    <div class= \"col-sm-4 col-md-4 col-lg-4 totalBox\" >\n      <div class=\"container effect2\" id=\"totalAmount\">\n          <div class=\"row mx-2\">\n              <div class=\"col-xs-12 col-sm-6 col-lg-8 textStyle\">\n                  <p>Subtotal :</p>\n              </div>\n              <div class=\"col-sm-6 col-lg-4 textStyle\">\n                  <p><b>${{subtotal | number:'1.2-2'}}</b></p>\n              </div>\n          </div>\n          <div class=\"row mx-2\">\n              <div class=\"col-xs-12 col-sm-6 col-lg-8 textStyle\">\n                  <p>Tax :</p>\n              </div>\n              <div class=\"col-sm-6 col-lg-4 textStyle\">\n                  <p><b>${{tax | number:'1.2-2'}}</b></p>\n              </div>\n          </div>\n          <div class=\"row mx-2\">\n              <div class=\"col-xs-12 col-sm-6 col-lg-6 textStyle1\">\n                  <p> Total :</p>\n              </div>\n              <div class=\"col-sm-6 col-lg-6 textStyle1\">\n                  <p><b>${{totalAmount | number:'1.2-2'}}</b></p>\n              </div>\n          </div>\n      </div>\n\n    </div>\n</div>\n<!------------ Item Selected Table ------------->\n<div *ngIf=\"isSelected\">\n    <div class=\"row mx-5\">\n        <div class=\"col-sm-8 col-md-8 col-lg-8 tableTop\">\n            <p>Your Cart</p>\n        </div>\n        <div class=\"col-sm-4 col-md-4 col-lg-4 tableTop\">\n            <p>Total Items : {{dataTable.length}}</p>\n        </div>\n    </div>\n\n    <div class=\"itemTable mx-5\">\n        <table class=\"listItems\" mat-table [dataSource]=\"dataTable\" #mtable>\n            <ng-container matColumnDef=\"itemNumber\">\n                <th mat-header-cell *matHeaderCellDef> ID </th>\n                <td mat-cell *matCellDef=\"let element; index as i\"> {{i+1}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"name\">\n                <th class=\"nameColumn\" mat-header-cell *matHeaderCellDef> Name </th>\n                <td class=\"nameColumn\" mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                <td mat-footer-cell *matFooterCellDef> Total </td>\n            </ng-container>\n            <ng-container matColumnDef=\"price\">\n                <th mat-header-cell *matHeaderCellDef> Amount </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.price | currency}} </td>\n                <td mat-footer-cell *matFooterCellDef> </td>\n            </ng-container>\n            <ng-container matColumnDef=\"Actions\">\n                <th class=\"actionColumn\" mat-header-cell *matHeaderCellDef> Action </th>\n                <td class=\"actionColumn close\" mat-cell *matCellDef=\"let element;let i = index;\" class=\"action-link\">\n                    <button (click)=\"delete(element.itemNumber,i)\" mat-icon-button color=\"warm\">\n                        <mat-icon>delete_outline</mat-icon>\n                    </button>\n                </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n    </div>\n</div>\n<!------------------ footer Buttons ------------------>\n<footer>\n  <div class=\"modal-footer\" style=\"margin-right:15px;\">\n      <button type=\"button\" class=\"btn btn-info circularButton employee\" style=\"width:200px\">Manager Override</button>\n      <button type=\"button\" class=\"btn btn-success circularButton procced\" style=\"width:200px\"\n          [disabled]=\"disableButton\" data-target=\"#fullHeightModalRight\" data-toggle=\"modal\">Proceed</button>\n  </div>\n</footer>\n<!-- ---------------Right Side Modal----------------- -->\n<div class=\"modal right fade\" id=\"fullHeightModalRight\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-header\" style=\"background-color: #efeded;\" >\n                <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> -->\n                <h4 class=\"modal-title\" id=\"myModalLabel2\">Order Summary</h4>\n            </div>\n\n            <div class=\"modal-body\" id=\"rightModal\">\n              <div class=\"row blocks\">\n                <div class=\"col-sm-6 col-md-8 col-lg-8\">SUBTOTAL:</div>\n                <div class=\"col-sm-6 col-md-4 col-lg-4\">${{subtotal | number:'1.2-2'}}</div>\n              </div>\n              <div class=\"row blocks\">\n                <div class=\"col-sm-6 col-md-8 col-lg-8\">MDR DISCOUNT:</div>\n                <div class=\"col-sm-6 col-md-4 col-lg-4\">$0.00</div>\n              </div>\n              <div class=\"row blocks\">\n                <div class=\"col-sm-6 col-md-8 col-lg-8\">ESTIMATED TAX:</div>\n                <div class=\"col-sm-6 col-md-4 col-lg-4\">${{tax | number:'1.2-2'}}</div>\n              </div>\n              <div class=\"row blocks\">\n                <div class=\"col-sm-6 col-md-8 col-lg-6 modalTotal\"><b>TOTAL:</b></div>\n                <div class=\"col-sm-6 col-md-4 col-lg-6 modalTotal\"><b>${{totalAmount | number:'1.2-2'}}</b></div>\n              </div>\n            </div>\n            <div class=\"modal-footer checkoutWindow\">\n                <button type=\"button\" class=\"btn btn-secondary circularButton closeButton\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-success circularButton checkoutButton\" data-dismiss=\"modal\" style=\"width:150px\"(click)=\"paymentConfirmation()\">Checkout</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/payment-confirmation/payment-confirmation.component */ "./src/app/payment-confirmation/payment-confirmation.component.ts");
/* harmony import */ var _app_store_checkout_homepage_store_checkout_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/store-checkout-homepage/store-checkout-homepage.component */ "./src/app/store-checkout-homepage/store-checkout-homepage.component.ts");





var routes = [
    { path: 'checkout', component: _app_store_checkout_homepage_store_checkout_homepage_component__WEBPACK_IMPORTED_MODULE_4__["StoreCheckoutHomepageComponent"] },
    { path: 'payment', component: _app_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["PaymentConfirmationComponent"] },
    { path: '', redirectTo: '/checkout', pathMatch: 'full' },
    { path: 'returnHomepage', component: _app_store_checkout_homepage_store_checkout_homepage_component__WEBPACK_IMPORTED_MODULE_4__["StoreCheckoutHomepageComponent"] }
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

var routingComponents = [_app_store_checkout_homepage_store_checkout_homepage_component__WEBPACK_IMPORTED_MODULE_4__["StoreCheckoutHomepageComponent"], _app_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["PaymentConfirmationComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'StoreCheckout';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _store_checkout_homepage_store_checkout_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store-checkout-homepage/store-checkout-homepage.component */ "./src/app/store-checkout-homepage/store-checkout-homepage.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment-confirmation/payment-confirmation.component */ "./src/app/payment-confirmation/payment-confirmation.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_thermal_print__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-thermal-print */ "./node_modules/ng-thermal-print/fesm5/ng-thermal-print.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _store_checkout_homepage_store_checkout_homepage_component__WEBPACK_IMPORTED_MODULE_5__["StoreCheckoutHomepageComponent"],
                _payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["PaymentConfirmationComponent"],
                _payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["CashPaymentComponentCashDialog"],
                _payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmPaymentComponentDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                ng_thermal_print__WEBPACK_IMPORTED_MODULE_14__["ThermalPrintModule"]
            ],
            entryComponents: [_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["PaymentConfirmationComponent"], _payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["CashPaymentComponentCashDialog"], _payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmPaymentComponentDialog"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/payment-confirmation/payment-confirmation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/payment-confirmation/payment-confirmation.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#heading{\n  font-size: 22px;\n  color: white;\n}\n.navbar-center {\n  padding: 0px 20px 0px;\n  position: absolute;\n  left: 47%;\n  -webkit-transform: translatex(-50%);\n          transform: translatex(-50%);\n}\n.background{\n  background-color: wheat;\n}\n.circularButton {\n  border-radius: 20px;\n  box-shadow: 0px 8px 11px rgba(0, 0, 0, 0.14);\n}\n.topHeader{\n  text-align: right;\n  padding: 6px;\n  background-color: #aeaeae;\n}\nh4{\n  margin-top: 5px;\n  margin-right: 26px;\n  color: white;\n  font-size: 13px;\n}\np{\n  font-size: 15px;\n  color: #14477d;\n}\n.selectButtons{\n  padding-bottom: 30px;\n  padding-left: 40px;\n  padding-right:40px;\n  border-color: white;\n  /* padding-right: 40%;\n  padding-left:; */\n}\n.topButton{\n  padding-top: 30px;\n}\n.storeNumber {\n  color: #486583;\n  background-color: #f3f3f3;\n  border-radius: 8px;\n  border:0;\n  width: 80px;\n}\n.backButton{\n  margin-top:10px;\n  padding-left: 0px;\n}\n.topHeading {\n  padding-top: 10px;\n  font-size: 20px;\n  color: #007bff;\n}\n.container{\nwidth: 100%;\nheight: 100%;\n}\nfooter{\n  position: fixed;\n  bottom:0;\n  width: 100%;\n  background-color: #dfdfdf;\n}\n#leftSidePage {\n  margin-top: 30px;\n  margin-right: 10px;\n  margin-left: 10px;\n  background-color: #f0f7ff;\n  padding: 30px;\n  width: 45%;\n  float: left;\n  border-radius: 10px;\n}\n#rightSidePage {\n  margin-top: 30px;\n  margin-right:10px;\n  margin-left:10px;\n  background-color: #f3f3f3; ;\n  padding: 30px;\n  width: 45%;\n  float: right;\n  border-radius: 10px;\n}\n.paymentMode{\n  padding-top:10px;\n  padding-bottom:10px;\n}\n.paymentButtons{\n  width:100%;\n  background-color: white;\n  border-radius: 15px;\n\n}\n.paymentImages{\n  padding-right:35px;\n  padding-top:7px;\n  padding-bottom:7px;\n  width:130px;\n}\n.paymentText{\n  font-size: 20px;\n  color: #075ba4;\n}\n.printOptions{\n  margin-top: 20px;\n}\n.voidButton{\n  position: fixed;\n  left: 30px;\n  float: left;\n}\n.cashDropdown{\n  margin: 0px;\n  padding: 10px 20px 20px 10px;\n}\n.leftSide, .rightSide{\n  padding-top: 10px;\n  padding-botton: 20px;\n}\nh1{\n  margin-top: 10px;\n  margin-bottom: 20px;\n  font-size: 28px;\n  text-align: center;\n  color: #075ba4;\n}\n.differenceAmount{\n  font-size: 20px;\n  color: rgb(5, 91, 164);\n}\n/* ---------------------------------------------------dialog CSS------------------------------- */\nh3{\n  text-align: center;\n  height: 40px;\n  border-radius: 10px;\n  padding-top: 3px;\n  color: #075ba4;\n  font-size: 1.7rem;\n}\n#dollarButtons10{\n  width: 70px;\n}\n.cashButton{\n  padding: 15px 15px 15px 15px;\n}\n.dollorOptions{\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.amountBox{\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.paymentBtn{\n  width: 90px;\n  height:90px;\n  background-color: brown;\n  border-radius: 30%;\n  box-shadow: 0 5px 15px -5px #00000070;\n  color: blue;\n}\n/* --------------------Confirmation MODAL---------------- */\n.contentText{\n  padding-top:32px;\n  padding-bottom:40px;\n}\n::-webkit-input-placeholder{\n  color:#979797;\n}\n::-moz-placeholder{\n  color:#979797;\n}\n::-ms-input-placeholder{\n  color:#979797;\n}\n::placeholder{\n  color:#979797;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC1jb25maXJtYXRpb24vcGF5bWVudC1jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkI7a0JBQ2dCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0EsaUdBQWlHO0FBRWpHO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLFdBQVc7QUFDYjtBQUNBLDJEQUEyRDtBQUMzRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUZBO0VBQ0UsYUFBYTtBQUNmO0FBRkE7RUFDRSxhQUFhO0FBQ2Y7QUFGQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtY29uZmlybWF0aW9uL3BheW1lbnQtY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGluZ3tcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmF2YmFyLWNlbnRlciB7XG4gIHBhZGRpbmc6IDBweCAyMHB4IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0NyU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtNTAlKTtcbn1cbi5iYWNrZ3JvdW5ke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cbi5jaXJjdWxhckJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuLnRvcEhlYWRlcntcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlYWVhZTtcbn1cbmg0e1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMjZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5we1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMTQ0NzdkO1xufVxuLnNlbGVjdEJ1dHRvbnN7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6NDBweDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLyogcGFkZGluZy1yaWdodDogNDAlO1xuICBwYWRkaW5nLWxlZnQ6OyAqL1xufVxuLnRvcEJ1dHRvbntcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4uc3RvcmVOdW1iZXIge1xuICBjb2xvcjogIzQ4NjU4MztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6MDtcbiAgd2lkdGg6IDgwcHg7XG59XG4uYmFja0J1dHRvbntcbiAgbWFyZ2luLXRvcDoxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi50b3BIZWFkaW5nIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4uY29udGFpbmVye1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG59XG5mb290ZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOjA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xufVxuI2xlZnRTaWRlUGFnZSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY3ZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHdpZHRoOiA0NSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuI3JpZ2h0U2lkZVBhZ2Uge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMzsgO1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogNDUlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucGF5bWVudE1vZGV7XG4gIHBhZGRpbmctdG9wOjEwcHg7XG4gIHBhZGRpbmctYm90dG9tOjEwcHg7XG59XG4ucGF5bWVudEJ1dHRvbnN7XG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG4ucGF5bWVudEltYWdlc3tcbiAgcGFkZGluZy1yaWdodDozNXB4O1xuICBwYWRkaW5nLXRvcDo3cHg7XG4gIHBhZGRpbmctYm90dG9tOjdweDtcbiAgd2lkdGg6MTMwcHg7XG59XG4ucGF5bWVudFRleHR7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwNzViYTQ7XG59XG4ucHJpbnRPcHRpb25ze1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnZvaWRCdXR0b257XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uY2FzaERyb3Bkb3due1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHggMTBweDtcbn1cbi5sZWZ0U2lkZSwgLnJpZ2h0U2lkZXtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9uOiAyMHB4O1xufVxuaDF7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzA3NWJhNDtcbn1cbi5kaWZmZXJlbmNlQW1vdW50e1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZ2IoNSwgOTEsIDE2NCk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1kaWFsb2cgQ1NTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5oM3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiAjMDc1YmE0O1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cbiNkb2xsYXJCdXR0b25zMTB7XG4gIHdpZHRoOiA3MHB4O1xufVxuLmNhc2hCdXR0b257XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDE1cHg7XG59XG4uZG9sbG9yT3B0aW9uc3tcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmFtb3VudEJveHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wYXltZW50QnRue1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OjkwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggLTVweCAjMDAwMDAwNzA7XG4gIGNvbG9yOiBibHVlO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1Db25maXJtYXRpb24gTU9EQUwtLS0tLS0tLS0tLS0tLS0tICovXG4uY29udGVudFRleHR7XG4gIHBhZGRpbmctdG9wOjMycHg7XG4gIHBhZGRpbmctYm90dG9tOjQwcHg7XG59XG46OnBsYWNlaG9sZGVye1xuICBjb2xvcjojOTc5Nzk3O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/payment-confirmation/payment-confirmation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/payment-confirmation/payment-confirmation.component.ts ***!
  \************************************************************************/
/*! exports provided: PaymentConfirmationComponent, CashPaymentComponentCashDialog, ConfirmPaymentComponentDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfirmationComponent", function() { return PaymentConfirmationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPaymentComponentCashDialog", function() { return CashPaymentComponentCashDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPaymentComponentDialog", function() { return ConfirmPaymentComponentDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_thermal_print__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-thermal-print */ "./node_modules/ng-thermal-print/fesm5/ng-thermal-print.js");





var PaymentConfirmationComponent = /** @class */ (function () {
    function PaymentConfirmationComponent(dialog, printService, router) {
        this.dialog = dialog;
        this.printService = printService;
        this.router = router;
        this.printerOptions = true;
        this.selectedCash = true;
        this.cash = 0;
        this.buttonDisable = true;
        this.differenceCash = 0;
    }
    PaymentConfirmationComponent.prototype.ngOnInit = function () {
        var localAmountsData = JSON.parse(sessionStorage.getItem('localAmountsData'));
        if (localAmountsData !== null && localAmountsData !== undefined) {
            this.subtotal = localAmountsData["subtotal"];
            this.totalAmount = localAmountsData["totalAmount"];
        }
        var testObject = JSON.parse(sessionStorage.getItem('testObject'));
        this.dataTable = testObject == null ? [] : testObject;
    };
    PaymentConfirmationComponent.prototype.printerType = function () {
        this.printerOptions = !this.printerOptions;
    };
    PaymentConfirmationComponent.prototype.cashMethod = function () {
        var _this = this;
        this.selectedCash = !this.selectedCash;
        var dialogRef = this.dialog.open(CashPaymentComponentCashDialog, {
            width: '590px',
            height: '385px',
            data: { cash: this.cash }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.cash = +result.cash;
            if (_this.cash >= _this.totalAmount) {
                _this.buttonDisable = false;
            }
        });
        this.differenceCash = this.totalAmount - this.cash;
    };
    PaymentConfirmationComponent.prototype.confirmPayment = function () {
        var dialogRef = this.dialog.open(ConfirmPaymentComponentDialog, {
            width: '615px',
            height: '370px',
            data: { cash: this.cash }
        });
        var builder = new epson.ePOSBuilder();
        builder.addPulse(builder.DRAWER_1, builder.PULSE_100);
        var request = builder.toString();
        var address = 'http://10.21.32.226/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000';
        var epos = new epson.ePOSPrint(address);
        epos.ondraweropen = function () {
            // alert('draweropen');
        };
        epos.open();
        epos.send(request);
    };
    PaymentConfirmationComponent.prototype.voidTransaction = function () {
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['returnHomepage']);
    };
    PaymentConfirmationComponent.prototype.goBack = function () {
        this.router.navigate(['returnHomepage']);
    };
    PaymentConfirmationComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: ng_thermal_print__WEBPACK_IMPORTED_MODULE_4__["PrintService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PaymentConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-confirmation',
            template: __webpack_require__(/*! raw-loader!./payment-confirmation.component.html */ "./node_modules/raw-loader/index.js!./src/app/payment-confirmation/payment-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./payment-confirmation.component.css */ "./src/app/payment-confirmation/payment-confirmation.component.css")]
        })
    ], PaymentConfirmationComponent);
    return PaymentConfirmationComponent;
}());

// --------------------Cash Popup-------------------------------
var CashPaymentComponentCashDialog = /** @class */ (function () {
    function CashPaymentComponentCashDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CashPaymentComponentCashDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CashPaymentComponentCashDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    CashPaymentComponentCashDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cash-dialog-popup',
            template: __webpack_require__(/*! raw-loader!./cash-dialog-popup.html */ "./node_modules/raw-loader/index.js!./src/app/payment-confirmation/cash-dialog-popup.html"),
            styles: [__webpack_require__(/*! ./payment-confirmation.component.css */ "./src/app/payment-confirmation/payment-confirmation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], CashPaymentComponentCashDialog);
    return CashPaymentComponentCashDialog;
}());

// -------------------Confirm Payment Popup----------------------
var ConfirmPaymentComponentDialog = /** @class */ (function () {
    function ConfirmPaymentComponentDialog(data, dialogRef, router) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.router = router;
        dialogRef.disableClose = true;
    }
    ConfirmPaymentComponentDialog.prototype.frontPrint = function () {
        var builder = new epson.ePOSBuilder();
        // Create a print document
        builder.addTextLang('en');
        builder.addTextSmooth(true);
        builder.addTextFont(builder.FONT_A);
        builder.addTextSize(2, 2);
        builder.addText('Hello,\tComcast!\n');
        builder.addTextSize(1, 1);
        builder.addText('Front Printer\tused!\n');
        builder.addCut(builder.CUT_FEED);
        builder.addPulse(builder.DRAWER_2, builder.PULSE_100);
        // Acquire the print document
        var request = builder.toString();
        // var address = '';
        var address = 'http://10.21.32.226/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000';
        // Create an ePOS-Print object
        var epos = new epson.ePOSPrint(address);
        epos.send(request);
        console.log('printer Working');
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['returnHomepage']);
    };
    ConfirmPaymentComponentDialog.prototype.backPrint = function () {
        var builder = new epson.ePOSBuilder();
        // Create a print document
        builder.addTextLang('en');
        builder.addTextSmooth(true);
        builder.addTextFont(builder.FONT_A);
        builder.addTextSize(2, 2);
        builder.addText('Hello,\tComcast!\n');
        builder.addTextSize(1, 1);
        builder.addText('Back Printer\tused!\n');
        builder.addCut(builder.CUT_FEED);
        // builder.addPulse(builder.DRAWER_2, builder.PULSE_100);
        // Acquire the print document
        var request = builder.toString();
        // var address = '';
        var address = 'http://10.21.32.131/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000';
        // Create an ePOS-Print object
        var epos = new epson.ePOSPrint(address);
        epos.send(request);
        console.log('Back Printer Used');
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['returnHomepage']);
    };
    ConfirmPaymentComponentDialog.prototype.noneClick = function () {
        this.dialogRef.close();
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['returnHomepage']);
    };
    ConfirmPaymentComponentDialog.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ConfirmPaymentComponentDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'confirm-dialog-popup',
            template: __webpack_require__(/*! raw-loader!./confirm-payment-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/payment-confirmation/confirm-payment-dialog.html"),
            styles: [__webpack_require__(/*! ./payment-confirmation.component.css */ "./src/app/payment-confirmation/payment-confirmation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ConfirmPaymentComponentDialog);
    return ConfirmPaymentComponentDialog;
}());



/***/ }),

/***/ "./src/app/store-checkout-homepage/store-checkout-homepage.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/store-checkout-homepage/store-checkout-homepage.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#heading{\n  font-size: 22px;\n  color: white;\n}\n.logo{\n  padding-left: 0px;\n  padding-top: 20px;\n}\n#topBanner{\n  background-color: #4572a3;\n}\n.navbar-center {\n  padding: 0;\n  position: fixed;\n  left: 48%;\n  -webkit-transform: translatex(-50%);\n          transform: translatex(-50%);\n}\n.storeNumber{\n  color: white;\n  padding: 40px 5px 0px;\n}\n.searchButton{\n  background-color: #DFEDFE;\n  margin-left: 10px;\n  height: 38px;\n  width: 20%;\n  border-radius: 20px;\n}\n.searchHead{\n  overflow: auto;\n  /* padding-right: 50px; */\n  padding-bottom: 10px;\n}\n.totalBox{\n  padding-right: 30px;\n  padding-left: 0px;\n}\n#totalAmount{\n  margin-top: 20px;\n  padding-top:20px;\n  padding-left:0;\n  background-color: #dfdfdf;\n  height:150px;\n  border-radius:10px;\n}\n.textStyle{\n  font-size: 16px;\n  font-weight: 500;\n  /* color: #054587; */\n}\n.textStyle1{\n  font-size: 30px;\n  color: #054587;\n}\n.effect2\n{\n  position: relative;\n}\n.effect2:before, .effect2:after\n{\n  z-index: -1;\n  position: absolute;\n  content: \"\";\n  bottom: 15px;\n  left: 10px;\n  width: 50%;\n  top: 80%;\n  max-width:300px;\n  background: #777;\n  box-shadow: 0 15px 10px #777;\n  -webkit-transform: rotate(-3deg);\n  transform: rotate(-3deg);\n}\n.effect2:after\n{\n  -webkit-transform: rotate(3deg);\n  transform: rotate(3deg);\n  right: 10px;\n  left: auto;\n}\n.searchBox{\n  width: 100%;\n  margin-left:70px;\n  margin-top: 80px;\n}\n.searchBar{\n  border-radius: 20px;\n  background-color: #ffffff;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.14);\n}\n.itemTable{\n  height: 500px;\n  overflow: scroll;\n}\n.totalAmount{\n  /* width:600px; */\n  padding: 10px 0px 0px 10px;\n  background-color:#ffffff;\n  border-radius: 20px;\n}\n.totalAmount{\n  marging-bottom: 40px;\n  margin-top: 40px;\n}\n.tableBody{\n  overflow: scroll;\n  /* height: 80%; */\n}\n.fixed-bottom{\n  /* padding-top: 80px; */\n  background-color: #efefef;\n}\n.listItems {\n  width: 100%;\n}\n.nameColumn{\n  width:40%;\n}\n.employeeDetail, .proccedButton{\n  padding-left: 20px;\n  padding-top: 30px;\n  padding-right: 30px;\n}\n.actionColumn{\n  width:10px;\n  padding-right:0px;\n}\n.tableTop{\n  font-size: 18px;\n  color: #054587;\n}\n.circularButton {\n  border-radius: 20px;\n  box-shadow: 0px 8px 11px rgba(0, 0, 0, 0.14);\n}\n.closeButton{\n    position: fixed;\n    left: 20px;\n    float: left;\n}\n.checkoutButtom{\n  right: 20px;\n  float: right;\n}\n.checkoutWindow{\nbackground-color: #dfdfdf;\nmargin-bottom: 15px;\nmargin-right:15px;\n}\nfooter{\n  position: fixed;\n  bottom:15px;\n  width: 100%;\n  background-color: #dfdfdf;\n}\nh4{\n  color: #0281c0;\n  font-size: 1.9rem;\n}\n.blocks{\n  border-radius: 15px;;\n  border-width: 10px;\n  border-style: solid;\n  border-color: #e3e3e3;\n  padding: 10px 10px 10px 10px;\n  margin: 30px 5px 5px 5px;\n}\n#rightModal{\n  padding-right: 0px;\n  padding-left: 0px;\n  margin-right:15px;\n}\n.modal.left .modal-dialog,\n.modal.right .modal-dialog {\n  position: fixed;\n  margin: auto;\n  width: 320px;\n  height: 100%;\n  -webkit-transform: translate3d(0%, 0, 0);\n          transform: translate3d(0%, 0, 0);\n}\n.modal.left .modal-content,\n.modal.right .modal-content {\n  height: 100%;\n  overflow-y: auto;\n}\n.modal.left .modal-body,\n.modal.right .modal-body {\n  padding: 15px 15px 80px;\n}\n/*Left*/\n.modal.left.fade .modal-dialog{\n  left: -320px;\n  transition: opacity 0.3s linear, left 0.3s ease-out;\n}\n.modal.left.fade.in .modal-dialog{\n  left: 0;\n}\n/*Right*/\n.modal.right.fade .modal-dialog {\n  right: -320px;\n  transition: opacity 0.3s linear, right 0.3s ease-out;\n}\n.modal.right.fade.in .modal-dialog {\n  right: 0;\n}\n/* ----- MODAL STYLE ----- */\n.modal-content {\n  position: bottom;\n  border-radius: 0;\n  border: none;\n}\n.modal-header {\n  border-bottom-color: #EEEEEE;\n  background-color: #FAFAFA;\n}\n.modalTotal{\n  font-size: 20px;\n  color: #0081c0;\n  padding-left: 0;\n}\n/* ----- v CAN BE DELETED v ----- */\nbody {\nbackground-color: #78909C;\n}\n.demo {\npadding-top: 60px;\npadding-bottom: 110px;\n}\n.btn-demo {\nmargin: 15px;\npadding: 10px 15px;\nborder-radius: 0;\nfont-size: 16px;\nbackground-color: #FFFFFF;\n}\n.btn-demo:focus {\noutline: 0;\n}\n.demo-footer {\nposition: fixed;\nbottom: 0;\nwidth: 100%;\npadding: 15px;\nbackground-color: #212121;\ntext-align: center;\n}\n.demo-footer > a {\ntext-decoration: none;\nfont-weight: bold;\nfont-size: 16px;\ncolor: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUtY2hlY2tvdXQtaG9tZXBhZ2Uvc3RvcmUtY2hlY2tvdXQtaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixTQUFTO0VBQ1QsbUNBQTJCO1VBQTNCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFVBQVU7RUFDVixRQUFRO0VBQ1IsZUFBZTtFQUNmLGdCQUFnQjtFQUdoQiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBSWhDLHdCQUF3QjtBQUMxQjtBQUNBOztFQUVFLCtCQUErQjtFQUkvQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFDOUM7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osd0NBQXdDO1VBR2hDLGdDQUFnQztBQUMxQztBQUVBOztFQUVFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTs7RUFFRSx1QkFBdUI7QUFDekI7QUFFQSxPQUFPO0FBQ1A7RUFDRSxZQUFZO0VBSUosbURBQW1EO0FBQzdEO0FBRUE7RUFDRSxPQUFPO0FBQ1Q7QUFFQSxRQUFRO0FBQ1I7RUFDRSxhQUFhO0VBSUwsb0RBQW9EO0FBQzlEO0FBRUE7RUFDRSxRQUFRO0FBQ1Y7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0EseUJBQXlCO0FBQ3pCO0FBRUE7QUFDQSxpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCO0FBRUE7QUFDQSxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YseUJBQXlCO0FBQ3pCO0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFFQTtBQUNBLGVBQWU7QUFDZixTQUFTO0FBQ1QsV0FBVztBQUNYLGFBQWE7QUFDYix5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCO0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixXQUFXO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9zdG9yZS1jaGVja291dC1ob21lcGFnZS9zdG9yZS1jaGVja291dC1ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRpbmd7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ297XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbiN0b3BCYW5uZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTcyYTM7XG59XG4ubmF2YmFyLWNlbnRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNDglO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTUwJSk7XG59XG4uc3RvcmVOdW1iZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNDBweCA1cHggMHB4O1xufVxuLnNlYXJjaEJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGRURGRTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogMzhweDtcbiAgd2lkdGg6IDIwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5zZWFyY2hIZWFke1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogcGFkZGluZy1yaWdodDogNTBweDsgKi9cbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4udG90YWxCb3h7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuI3RvdGFsQW1vdW50e1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLXRvcDoyMHB4O1xuICBwYWRkaW5nLWxlZnQ6MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcbiAgaGVpZ2h0OjE1MHB4O1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG59XG4udGV4dFN0eWxle1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC8qIGNvbG9yOiAjMDU0NTg3OyAqL1xufVxuLnRleHRTdHlsZTF7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMwNTQ1ODc7XG59XG4uZWZmZWN0Mlxue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZWZmZWN0MjpiZWZvcmUsIC5lZmZlY3QyOmFmdGVyXG57XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvdHRvbTogMTVweDtcbiAgbGVmdDogMTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgdG9wOiA4MCU7XG4gIG1heC13aWR0aDozMDBweDtcbiAgYmFja2dyb3VuZDogIzc3NztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDE1cHggMTBweCAjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMTVweCAxMHB4ICM3Nzc7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAxMHB4ICM3Nzc7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG59XG4uZWZmZWN0MjphZnRlclxue1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGxlZnQ6IGF1dG87XG59XG4uc2VhcmNoQm94e1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6NzBweDtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbi5zZWFyY2hCYXJ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuLml0ZW1UYWJsZXtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnRvdGFsQW1vdW50e1xuICAvKiB3aWR0aDo2MDBweDsgKi9cbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi50b3RhbEFtb3VudHtcbiAgbWFyZ2luZy1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4udGFibGVCb2R5e1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICAvKiBoZWlnaHQ6IDgwJTsgKi9cbn1cbi5maXhlZC1ib3R0b217XG4gIC8qIHBhZGRpbmctdG9wOiA4MHB4OyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xufVxuLmxpc3RJdGVtcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hbWVDb2x1bW57XG4gIHdpZHRoOjQwJTtcbn1cbi5lbXBsb3llZURldGFpbCwgLnByb2NjZWRCdXR0b257XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4uYWN0aW9uQ29sdW1ue1xuICB3aWR0aDoxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OjBweDtcbn1cblxuLnRhYmxlVG9we1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDU0NTg3O1xufVxuLmNpcmN1bGFyQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG59XG4uY2xvc2VCdXR0b257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uY2hlY2tvdXRCdXR0b217XG4gIHJpZ2h0OiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uY2hlY2tvdXRXaW5kb3d7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xubWFyZ2luLWJvdHRvbTogMTVweDtcbm1hcmdpbi1yaWdodDoxNXB4O1xufVxuZm9vdGVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbToxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcbn1cbmg0e1xuICBjb2xvcjogIzAyODFjMDtcbiAgZm9udC1zaXplOiAxLjlyZW07XG59XG4uYmxvY2tze1xuICBib3JkZXItcmFkaXVzOiAxNXB4OztcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNlM2UzZTM7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIG1hcmdpbjogMzBweCA1cHggNXB4IDVweDtcbn1cbiNyaWdodE1vZGFse1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6MTVweDtcbn1cblxuLm1vZGFsLmxlZnQgLm1vZGFsLWRpYWxvZyxcbi5tb2RhbC5yaWdodCAubW9kYWwtZGlhbG9nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xuICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xufVxuXG4ubW9kYWwubGVmdCAubW9kYWwtY29udGVudCxcbi5tb2RhbC5yaWdodCAubW9kYWwtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1vZGFsLmxlZnQgLm1vZGFsLWJvZHksXG4ubW9kYWwucmlnaHQgLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAxNXB4IDE1cHggODBweDtcbn1cblxuLypMZWZ0Ki9cbi5tb2RhbC5sZWZ0LmZhZGUgLm1vZGFsLWRpYWxvZ3tcbiAgbGVmdDogLTMyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIGxlZnQgMC4zcyBlYXNlLW91dDtcbiAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCBsZWZ0IDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhciwgbGVmdCAwLjNzIGVhc2Utb3V0O1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIGxlZnQgMC4zcyBlYXNlLW91dDtcbn1cblxuLm1vZGFsLmxlZnQuZmFkZS5pbiAubW9kYWwtZGlhbG9ne1xuICBsZWZ0OiAwO1xufVxuXG4vKlJpZ2h0Ki9cbi5tb2RhbC5yaWdodC5mYWRlIC5tb2RhbC1kaWFsb2cge1xuICByaWdodDogLTMyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHJpZ2h0IDAuM3MgZWFzZS1vdXQ7XG4gICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhciwgcmlnaHQgMC4zcyBlYXNlLW91dDtcbiAgICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCByaWdodCAwLjNzIGVhc2Utb3V0O1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHJpZ2h0IDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5tb2RhbC5yaWdodC5mYWRlLmluIC5tb2RhbC1kaWFsb2cge1xuICByaWdodDogMDtcbn1cblxuLyogLS0tLS0gTU9EQUwgU1RZTEUgLS0tLS0gKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgcG9zaXRpb246IGJvdHRvbTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0VFRUVFRTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cbi5tb2RhbFRvdGFse1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDA4MWMwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi8qIC0tLS0tIHYgQ0FOIEJFIERFTEVURUQgdiAtLS0tLSAqL1xuYm9keSB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjNzg5MDlDO1xufVxuXG4uZGVtbyB7XG5wYWRkaW5nLXRvcDogNjBweDtcbnBhZGRpbmctYm90dG9tOiAxMTBweDtcbn1cblxuLmJ0bi1kZW1vIHtcbm1hcmdpbjogMTVweDtcbnBhZGRpbmc6IDEwcHggMTVweDtcbmJvcmRlci1yYWRpdXM6IDA7XG5mb250LXNpemU6IDE2cHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYnRuLWRlbW86Zm9jdXMge1xub3V0bGluZTogMDtcbn1cblxuLmRlbW8tZm9vdGVyIHtcbnBvc2l0aW9uOiBmaXhlZDtcbmJvdHRvbTogMDtcbndpZHRoOiAxMDAlO1xucGFkZGluZzogMTVweDtcbmJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZW1vLWZvb3RlciA+IGEge1xudGV4dC1kZWNvcmF0aW9uOiBub25lO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5mb250LXNpemU6IDE2cHg7XG5jb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/store-checkout-homepage/store-checkout-homepage.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/store-checkout-homepage/store-checkout-homepage.component.ts ***!
  \******************************************************************************/
/*! exports provided: StoreCheckoutHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreCheckoutHomepageComponent", function() { return StoreCheckoutHomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var StoreCheckoutHomepageComponent = /** @class */ (function () {
    function StoreCheckoutHomepageComponent(router) {
        this.router = router;
        this.isSelected = false;
        this.totalAmount = 0;
        this.amount = 0;
        this.tax = 2.00;
        this.subtotal = 0;
        this.disableButton = true;
        this.displayedColumns = ['itemNumber', 'name', 'price', 'Actions'];
    }
    StoreCheckoutHomepageComponent.prototype.ngOnInit = function () {
        this.dataItems = [
            { itemNumber: 1, name: 'Iphone Charger', price: '50.99' },
            { itemNumber: 2, name: 'Phone case', price: '12.00' },
            { itemNumber: 3, name: 'Phone Cover', price: '30.00' },
            { itemNumber: 4, name: 'Ear phones', price: '30.00' },
            { itemNumber: 5, name: 'Screen gaurd', price: '9.99' },
            { itemNumber: 6, name: 'HDMI Cable', price: '4.77' },
            { itemNumber: 7, name: 'Wifi Router', price: '500.99' },
            { itemNumber: 1, name: 'Iphone', price: '1099.99' },
            { itemNumber: 8, name: 'Digital Clock', price: '50.99' },
            { itemNumber: 9, name: 'Phone Chager', price: '79.99' },
            { itemNumber: 10, name: 'Samsung Phone', price: '700.99' }
        ];
        this.dataTable = [{ itemNumber: 1, name: "asd", price: "12" }];
        var testObject = JSON.parse(sessionStorage.getItem('testObject'));
        this.dataTable = testObject == null ? [] : testObject;
        if (testObject != null) {
            this.isSelected = true;
            this.disableButton = false;
        }
        else {
            this.disableButton = true;
        }
        var localAmountsData = JSON.parse(sessionStorage.getItem('localAmountsData'));
        if (localAmountsData != null && localAmountsData != undefined) {
            this.subtotal = localAmountsData["subtotal"];
            this.totalAmount = localAmountsData["totalAmount"];
        }
    };
    StoreCheckoutHomepageComponent.prototype.onChange = function () {
        // debugger;
        var item = this.selectedItem;
        this.tax = 2;
        this.dataTable.push(this.dataItems.filter(function (t) { return t.name == item; })[0]);
        var amnt = this.dataItems.filter(function (t) { return t.name == item; })[0]["price"];
        this.isSelected = true;
        this.disableButton = false;
        this.subtotal = +((parseFloat)(amnt) + (+this.subtotal.toFixed(2))).toFixed(2);
        this.totalAmount = +this.subtotal.toFixed(2) + this.tax;
        var cloned = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.dataTable);
        this.dataTable = cloned;
        var localAmountsData = {
            subtotal: this.subtotal,
            totalAmount: this.totalAmount
        };
        //this.table.renderRows();
        sessionStorage.setItem('testObject', JSON.stringify(this.dataTable));
        sessionStorage.setItem('localAmountsData', JSON.stringify(localAmountsData));
        if (this.dataTable.length < 1) {
            this.disableButton = true;
        }
    };
    StoreCheckoutHomepageComponent.prototype.delete = function (itemNumber, i) {
        var count = 0;
        var amnt = this.dataItems.filter(function (t) { return t.itemNumber == itemNumber; })[0]["price"];
        this.subtotal = +(+this.subtotal.toFixed(2) - parseFloat(amnt)).toFixed(2);
        this.totalAmount = +(+this.subtotal.toFixed(2) + this.tax).toFixed(2);
        this.dataTable.splice(i, 1);
        if (this.dataTable.length < 1) {
            this.totalAmount = 0.00;
            this.tax = 0.00;
        }
        if (this.dataTable.length < 1) {
            this.disableButton = true;
        }
        var localAmountsData = {
            subtotal: this.subtotal,
            totalAmount: this.totalAmount
        };
        var cloned = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.dataTable);
        this.dataTable = cloned;
        sessionStorage.setItem('testObject', JSON.stringify(this.dataTable));
        sessionStorage.setItem('localAmountsData', JSON.stringify(localAmountsData));
    };
    StoreCheckoutHomepageComponent.prototype.paymentConfirmation = function () {
        this.router.navigate(['payment']);
    };
    StoreCheckoutHomepageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mtable', { static: false })
    ], StoreCheckoutHomepageComponent.prototype, "table", void 0);
    StoreCheckoutHomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store-checkout-homepage',
            template: __webpack_require__(/*! raw-loader!./store-checkout-homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/store-checkout-homepage/store-checkout-homepage.component.html"),
            styles: [__webpack_require__(/*! ./store-checkout-homepage.component.css */ "./src/app/store-checkout-homepage/store-checkout-homepage.component.css")]
        })
    ], StoreCheckoutHomepageComponent);
    return StoreCheckoutHomepageComponent;
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

module.exports = __webpack_require__(/*! /Users/pprapa743/Downloads/Store Project/StoreCheckout/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map