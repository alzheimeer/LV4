(self["webpackChunklendiup"] = self["webpackChunklendiup"] || []).push([["src_app_landing_landing_module_ts"],{

/***/ 6990:
/*!***************************************************!*\
  !*** ./src/app/landing/landing-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingRoutingModule": () => (/* binding */ LandingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.component */ 341);
/* harmony import */ var _pages_landingv2_construccion_construccion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/landingv2/construccion/construccion.component */ 9184);
/* harmony import */ var _pages_landingv2_hipoteca_hipoteca_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/landingv2/hipoteca/hipoteca.component */ 5125);
/* harmony import */ var _pages_landingv2_invierte_invierte_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landingv2/invierte/invierte.component */ 7346);
/* harmony import */ var _pages_landingv2_main2_main2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/landingv2/main2/main2.component */ 4825);
/* harmony import */ var _pages_landingv2_one2_one2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/landingv2/one2/one2.component */ 1347);
/* harmony import */ var _pages_landingv2_personales_personales_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/landingv2/personales/personales.component */ 7071);
/* harmony import */ var _pages_landingv2_vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/landingv2/vehiculos/vehiculos.component */ 7129);
/* harmony import */ var _pages_landingv3_main3_main3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/landingv3/main3/main3.component */ 5858);
/* harmony import */ var _pages_landingv3_one3_one3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/landingv3/one3/one3.component */ 4738);
/* harmony import */ var _pages_page1_page1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page1/page1.component */ 9306);
/* harmony import */ var _pages_page2_page2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page2/page2.component */ 8399);
/* harmony import */ var _pages_page3_page3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page3/page3.component */ 8579);
/* harmony import */ var _pages_page4_page4_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page4/page4.component */ 185);
/* harmony import */ var _pages_page5_page5_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/page5/page5.component */ 1622);
/* harmony import */ var _pages_quick_forms_quick_forms_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/quick-forms/quick-forms.component */ 3629);
/* harmony import */ var _pages_quickloan_quickloan_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/quickloan/quickloan.component */ 9942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 7716);




















const routes = [
    {
        path: '',
        component: _landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent,
        children: [
            { path: 'quickloan', component: _pages_quickloan_quickloan_component__WEBPACK_IMPORTED_MODULE_16__.QuickloanComponent },
            { path: 'quickforms', component: _pages_quick_forms_quick_forms_component__WEBPACK_IMPORTED_MODULE_15__.QuickFormsComponent },
            { path: 'personal', component: _pages_page1_page1_component__WEBPACK_IMPORTED_MODULE_10__.Page1Component },
            { path: 'vehiculo', component: _pages_page2_page2_component__WEBPACK_IMPORTED_MODULE_11__.Page2Component },
            { path: 'hipoteca', component: _pages_page3_page3_component__WEBPACK_IMPORTED_MODULE_12__.Page3Component },
            { path: 'construccion', component: _pages_page4_page4_component__WEBPACK_IMPORTED_MODULE_13__.Page4Component },
            { path: 'invierte', component: _pages_page5_page5_component__WEBPACK_IMPORTED_MODULE_14__.Page5Component },
            { path: '**', redirectTo: 'quickloan' },
        ],
    },
    {
        path: 'op2',
        component: _pages_landingv2_main2_main2_component__WEBPACK_IMPORTED_MODULE_4__.Main2Component,
        children: [
            { path: 'one2', component: _pages_landingv2_one2_one2_component__WEBPACK_IMPORTED_MODULE_5__.One2Component },
            { path: 'personales', component: _pages_landingv2_personales_personales_component__WEBPACK_IMPORTED_MODULE_6__.PersonalesComponent },
            { path: 'hipoteca', component: _pages_landingv2_hipoteca_hipoteca_component__WEBPACK_IMPORTED_MODULE_2__.HipotecaComponent },
            { path: 'vehiculos', component: _pages_landingv2_vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_7__.VehiculosComponent },
            { path: 'construccion', component: _pages_landingv2_construccion_construccion_component__WEBPACK_IMPORTED_MODULE_1__.ConstruccionComponent },
            { path: 'invierte', component: _pages_landingv2_invierte_invierte_component__WEBPACK_IMPORTED_MODULE_3__.InvierteComponent },
            { path: '**', redirectTo: 'one2' },
        ],
    },
    {
        path: 'op3',
        component: _pages_landingv3_main3_main3_component__WEBPACK_IMPORTED_MODULE_8__.Main3Component,
        children: [
            { path: 'one3', component: _pages_landingv3_one3_one3_component__WEBPACK_IMPORTED_MODULE_9__.One3Component },
            { path: '**', redirectTo: 'one3' },
        ],
    },
    // { path: '**', redirectTo: 'op1' }
];
class LandingRoutingModule {
}
LandingRoutingModule.ɵfac = function LandingRoutingModule_Factory(t) { return new (t || LandingRoutingModule)(); };
LandingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: LandingRoutingModule });
LandingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](LandingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] }); })();


/***/ }),

/***/ 341:
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/navbar/navbar.component */ 4696);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class LandingComponent {
    constructor() {
        // @Input()
        this.value = 0;
    }
    ngOnInit() {
    }
    valuethesoon(value) {
        this.value = value;
    }
    onOutletLoaded(component) {
        component.value = this.value;
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 2, vars: 0, consts: [[3, "value"], [3, "activate"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("value", function LandingComponent_Template_app_navbar_value_0_listener($event) { return ctx.valuethesoon($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function LandingComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onOutletLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8721:
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingModule": () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.module */ 1674);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material/material.module */ 898);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-routing.module */ 6990);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.component */ 341);
/* harmony import */ var _pages_landingv2_construccion_construccion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/landingv2/construccion/construccion.component */ 9184);
/* harmony import */ var _pages_landingv2_hipoteca_hipoteca_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/landingv2/hipoteca/hipoteca.component */ 5125);
/* harmony import */ var _pages_landingv2_invierte_invierte_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/landingv2/invierte/invierte.component */ 7346);
/* harmony import */ var _pages_landingv2_main2_main2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/landingv2/main2/main2.component */ 4825);
/* harmony import */ var _pages_landingv2_one2_one2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/landingv2/one2/one2.component */ 1347);
/* harmony import */ var _pages_landingv2_personales_personales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/landingv2/personales/personales.component */ 7071);
/* harmony import */ var _pages_landingv2_vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/landingv2/vehiculos/vehiculos.component */ 7129);
/* harmony import */ var _pages_landingv3_main3_main3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/landingv3/main3/main3.component */ 5858);
/* harmony import */ var _pages_landingv3_one3_one3_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/landingv3/one3/one3.component */ 4738);
/* harmony import */ var _pages_page1_page1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/page1/page1.component */ 9306);
/* harmony import */ var _pages_page2_page2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/page2/page2.component */ 8399);
/* harmony import */ var _pages_page3_page3_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page3/page3.component */ 8579);
/* harmony import */ var _pages_page4_page4_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/page4/page4.component */ 185);
/* harmony import */ var _pages_page5_page5_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/page5/page5.component */ 1622);
/* harmony import */ var _pages_quick_forms_quick_forms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/quick-forms/quick-forms.component */ 3629);
/* harmony import */ var _pages_quickloan_quickloan_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/quickloan/quickloan.component */ 9942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 7716);
























class LandingModule {
}
LandingModule.ɵfac = function LandingModule_Factory(t) { return new (t || LandingModule)(); };
LandingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: LandingModule });
LandingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__.LandingRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_4__.LandingComponent,
        _pages_page1_page1_component__WEBPACK_IMPORTED_MODULE_14__.Page1Component,
        _pages_page2_page2_component__WEBPACK_IMPORTED_MODULE_15__.Page2Component,
        _pages_page3_page3_component__WEBPACK_IMPORTED_MODULE_16__.Page3Component,
        _pages_page4_page4_component__WEBPACK_IMPORTED_MODULE_17__.Page4Component,
        _pages_page5_page5_component__WEBPACK_IMPORTED_MODULE_18__.Page5Component,
        _pages_landingv2_construccion_construccion_component__WEBPACK_IMPORTED_MODULE_5__.ConstruccionComponent,
        _pages_landingv2_hipoteca_hipoteca_component__WEBPACK_IMPORTED_MODULE_6__.HipotecaComponent,
        _pages_landingv2_invierte_invierte_component__WEBPACK_IMPORTED_MODULE_7__.InvierteComponent,
        _pages_landingv2_main2_main2_component__WEBPACK_IMPORTED_MODULE_8__.Main2Component,
        _pages_landingv2_one2_one2_component__WEBPACK_IMPORTED_MODULE_9__.One2Component,
        _pages_landingv2_personales_personales_component__WEBPACK_IMPORTED_MODULE_10__.PersonalesComponent,
        _pages_landingv2_vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_11__.VehiculosComponent,
        _pages_landingv3_main3_main3_component__WEBPACK_IMPORTED_MODULE_12__.Main3Component,
        _pages_landingv3_one3_one3_component__WEBPACK_IMPORTED_MODULE_13__.One3Component,
        _pages_quickloan_quickloan_component__WEBPACK_IMPORTED_MODULE_20__.QuickloanComponent,
        _pages_quick_forms_quick_forms_component__WEBPACK_IMPORTED_MODULE_19__.QuickFormsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
        _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__.LandingRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule] }); })();


/***/ }),

/***/ 9184:
/*!********************************************************************************!*\
  !*** ./src/app/landing/pages/landingv2/construccion/construccion.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstruccionComponent": () => (/* binding */ ConstruccionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function ConstruccionComponent_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConstruccionComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " meses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ConstruccionComponent {
    constructor() {
        this.isScrolled = false;
        this.claseTitular = 'fixed-top';
        this.valor = 50000;
        this.meses = 1;
        this.varmes = 'mes';
        this.interes = 1.5;
        this.iva = 19;
        this.total = 0;
        this.emi = 0;
        this.images = [
            'index-three-slider-1',
            'index-three-slider-2',
            'index-three-slider-3',
        ].map((n) => `assets/images/${n}.jpg`);
    }
    ngOnInit() { }
    scrollEvent() {
        window.pageYOffset >= 80
            ? (this.isScrolled = true)
            : (this.isScrolled = false);
    }
}
ConstruccionComponent.ɵfac = function ConstruccionComponent_Factory(t) { return new (t || ConstruccionComponent)(); };
ConstruccionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConstruccionComponent, selectors: [["app-construccion"]], hostBindings: function ConstruccionComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ConstruccionComponent_scroll_HostBindingHandler() { return ctx.scrollEvent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 170, vars: 16, consts: [[2, "background-color", "#15549a"], [1, "lead-hero-wrapper", 2, "background", "url(../../../../../assets/images/slider-4.jpg) no-repeat"], [1, "container"], [1, "row"], [1, "col-xl-5", "col-lg-5", "col-md-12", "col-sm-12", "col-12"], [1, "lead-hero-caption"], [1, "lead-hero-title"], [1, "lead", "mb0", "text-white"], [1, "text-white"], [1, "rating-list"], [1, "fa", "fa-star"], [1, "offset-xl-1", "col-xl-6", "offset-lg-1", "col-lg-6", "col-md-12", "col-sm-12", "col-12"], [1, "lead-calculator", "pinside40"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "mb10"], [1, "text-white", "mb20"], [1, "slider1"], ["id", "pricipal-slide1"], ["value", "50000", "onInput", "$('#rangeval').html($(this).val())", "type", "range", "min", "50000", "max", "500000", "step", "10000", "id", "sliderx1", 1, "form-range", "sliderx", 3, "ngModel", "ngModelChange"], [1, "slider"], ["id", "totalyear-slide"], ["value", "1", "onInput", "$('#rangeval2').html($(this).val())", "type", "range", "min", "1", "max", "6", "step", "1", "id", "sliderx2", 1, "form-range", "sliderx", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-12", "col-12"], [1, "single-total"], [1, "lead-cal-small-text"], ["id", "emi", 1, "text-white", "emi-price"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-12"], ["id", "tbl_emi", 1, "text-white"], [1, "col-xl-5", "col-lg-5", "col-md-6", "col-sm-12", "col-12"], ["id", "tbl_la", 1, "text-white"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "text-right"], [1, "btn", "btn-secondary", "btn-sm"], [1, "section-space80", "bg-white"], [1, "offset-xl-2", "col-xl-8", "offset-lg-2", "col-lg-8", "col-md-8", "col-sm-12", "col-12"], [1, "section-title", "mb60", "text-center"], [1, "feature", "feature-icon-style"], [1, "feature-icon"], [1, "far", "fa-id-card", "fa-2x"], [1, "feature-content"], [1, "feature-title"], [1, "fas", "fa-at", "fa-2x"], [1, "fas", "fa-piggy-bank", "fa-2x"], [1, "fa", "fa-bolt", "fa-2x"], [1, "section-space80"], [1, "offset-xl-2", "col-xl-8", "offset-lg-2", "col-lg-8", "col-md-12", "col-sm-12", "col-12"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-12"], [1, "how-it-block"], [1, "how-it-no"], [1, "how-it-content"], ["href", "#!", 1, "btn", "btn-secondary", "btn-sm"]], template: function ConstruccionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prestamos Para Construcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Una prestamo para lograr el sue\u00F1o de tu vida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Encontrar\u00E1s respuesta a tu solicitud de cr\u00E9dito en l\u00EDnea en poco tiempo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Solicite desde");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "$1.000.000 hasta $10.000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "5 / 5 (85 Opiniones)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Obten Tu Prestamo Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Escoge El Valor Del Prestamo Que Deseas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConstruccionComponent_Template_input_ngModelChange_43_listener($event) { return ctx.valor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Que Plazo Necesitas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConstruccionComponent_Template_input_ngModelChange_52_listener($event) { return ctx.meses = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ConstruccionComponent_span_55_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ConstruccionComponent_span_56_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Interes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Iva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Total Del Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "EMI - PAGO MENSUAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "APLICA YA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "REQUISITOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Nuestros plazos var\u00EDan entre 1 y 180 d\u00EDas y tasa de inter\u00E9s fija del 25% e.a. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Ser mayor de 18 a\u00F1os ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Tener correo electr\u00F3nico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Tener una cuenta bancaria a tu nombre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Aprobaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " De 24 a 48 Horas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Aplicar en tres sencillos pasos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "No ser\u00E1s el \u00FAnico matiz de di\u00E1metro lorem mauris.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Completa el formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Primero necesitamos saber un poco sobre usted y sus necesidades de pr\u00E9stamo.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Aplica ya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Obtener aprobaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Dentro de las 48 horas h\u00E1biles posteriores a la presentaci\u00F3n de su solicitud tendras respuesta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Asegure sus fondos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Una vez aprobado, podremos trabajar con los detalles. Nosotros consignamos el dinero a tu cuenta bancaria. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.valor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](46, 10, ctx.valor, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.meses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.meses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meses <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meses > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.interes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.iva);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](75, 13, ctx.total, "1.0-0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emi);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe], styles: [".sliderx{\r\n    width: 100%;\r\n}\r\n\r\n.lead-hero-wrapper {\r\n    \r\n    background-size: cover;\r\n    padding-top: 80px;\r\n    padding-bottom: 80px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0cnVjY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCIiwiZmlsZSI6ImNvbnN0cnVjY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlcnh7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxlYWQtaGVyby13cmFwcGVyIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgfSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 5125:
/*!************************************************************************!*\
  !*** ./src/app/landing/pages/landingv2/hipoteca/hipoteca.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HipotecaComponent": () => (/* binding */ HipotecaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function HipotecaComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HipotecaComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " meses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HipotecaComponent {
    constructor() {
        this.isScrolled = false;
        this.claseTitular = 'fixed-top';
        this.valor = 50000;
        this.meses = 1;
        this.varmes = 'mes';
        this.interes = 1.5;
        this.iva = 19;
        this.total = 0;
        this.emi = 0;
        this.images = [
            'index-three-slider-1',
            'index-three-slider-2',
            'index-three-slider-3',
        ].map((n) => `assets/images/${n}.jpg`);
    }
    ngOnInit() { }
    scrollEvent() {
        window.pageYOffset >= 80
            ? (this.isScrolled = true)
            : (this.isScrolled = false);
    }
}
HipotecaComponent.ɵfac = function HipotecaComponent_Factory(t) { return new (t || HipotecaComponent)(); };
HipotecaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HipotecaComponent, selectors: [["app-hipoteca"]], hostBindings: function HipotecaComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HipotecaComponent_scroll_HostBindingHandler() { return ctx.scrollEvent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 172, vars: 16, consts: [[2, "background-color", "#15549a"], [1, "lead-hero-wrapper", 2, "background", "url(../../../../../assets/images/slider-5.jpg) no-repeat"], [1, "container"], [1, "row"], [1, "col-xl-5", "col-lg-5", "col-md-12", "col-sm-12", "col-12"], [1, "lead-hero-caption"], [1, "lead-hero-title"], [1, "lead", "mb0", "text-white"], [1, "text-white"], [1, "rating-list"], [1, "fa", "fa-star"], [1, "offset-xl-1", "col-xl-6", "offset-lg-1", "col-lg-6", "col-md-12", "col-sm-12", "col-12"], [1, "lead-calculator", "pinside40"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "mb10"], [1, "text-white", "mb20"], [1, "slider1"], ["id", "pricipal-slide1"], ["value", "50000", "onInput", "$('#rangeval').html($(this).val())", "type", "range", "min", "50000", "max", "500000", "step", "10000", "id", "sliderx1", 1, "form-range", "sliderx", 3, "ngModel", "ngModelChange"], [1, "slider"], ["id", "totalyear-slide"], ["value", "1", "onInput", "$('#rangeval2').html($(this).val())", "type", "range", "min", "1", "max", "6", "step", "1", "id", "sliderx2", 1, "form-range", "sliderx", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-12", "col-12"], [1, "single-total"], [1, "lead-cal-small-text"], ["id", "emi", 1, "text-white", "emi-price"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-12"], ["id", "tbl_emi", 1, "text-white"], [1, "col-xl-5", "col-lg-5", "col-md-6", "col-sm-12", "col-12"], ["id", "tbl_la", 1, "text-white"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "text-right"], [1, "btn", "btn-secondary", "btn-sm"], [1, "section-space80", "bg-white"], [1, "offset-xl-2", "col-xl-8", "offset-lg-2", "col-lg-8", "col-md-8", "col-sm-12", "col-12"], [1, "section-title", "mb60", "text-center"], [1, "feature", "feature-icon-style"], [1, "feature-icon"], [1, "far", "fa-id-card", "fa-2x"], [1, "feature-content"], [1, "feature-title"], [1, "fas", "fa-at", "fa-2x"], [1, "fas", "fa-piggy-bank", "fa-2x"], [1, "fa", "fa-bolt", "fa-2x"], [1, "section-space80"], [1, "offset-xl-2", "col-xl-8", "offset-lg-2", "col-lg-8", "col-md-12", "col-sm-12", "col-12"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-12"], [1, "how-it-block"], [1, "how-it-no"], [1, "how-it-content"], ["href", "#!", 1, "btn", "btn-secondary", "btn-sm"]], template: function HipotecaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prestamos Sobre Hipoteca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Una prestamo pensado para ti, f\u00E1cil de usar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Encontrar\u00E1s respuesta a tu solicitud de cr\u00E9dito en l\u00EDnea en minutos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Solicite de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "$4.000.000 hasta $50.000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "(Te prestamos hasta el 50% del avaluo de tu inmueble )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "5 / 5 (85 Opiniones)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Obten Tu Prestamo Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Escoge El Valor Del Prestamo Que Deseas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HipotecaComponent_Template_input_ngModelChange_45_listener($event) { return ctx.valor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Que Plazo Necesitas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HipotecaComponent_Template_input_ngModelChange_54_listener($event) { return ctx.meses = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, HipotecaComponent_span_57_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, HipotecaComponent_span_58_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Interes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Iva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Total Del Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "EMI - PAGO MENSUAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "APLICA YA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "REQUISITOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Nuestros plazos var\u00EDan entre 1 y 180 d\u00EDas y tasa de inter\u00E9s fija del 25% e.a. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Ser mayor de 18 a\u00F1os ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Tener correo electr\u00F3nico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Tener una cuenta bancaria a tu nombre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Aprobaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " De 24 a 48 Horas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Aplicar en tres sencillos pasos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "No ser\u00E1s el \u00FAnico matiz de di\u00E1metro lorem mauris.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Completa el formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Primero necesitamos saber un poco sobre usted y sus necesidades de pr\u00E9stamo.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Aplica ya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Obtener aprobaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Dentro de las 48 horas h\u00E1biles posteriores a la presentaci\u00F3n de su solicitud tendras respuesta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Asegure sus fondos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Una vez aprobado, podremos trabajar con los detalles. Nosotros consignamos el dinero a tu cuenta bancaria. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.valor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 10, ctx.valor, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.meses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.meses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meses <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meses > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.interes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.iva);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](77, 13, ctx.total, "1.0-0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emi);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe], styles: [".sliderx{\r\n    width: 100%;\r\n}\r\n\r\n\r\n.lead-hero-wrapper {\r\n    \r\n    background-size: cover;\r\n    padding-top: 80px;\r\n    padding-bottom: 80px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpcG90ZWNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCIiwiZmlsZSI6ImhpcG90ZWNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyeHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmxlYWQtaGVyby13cmFwcGVyIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgfSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 7346:
/*!************************************************************************!*\
  !*** ./src/app/landing/pages/landingv2/invierte/invierte.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvierteComponent": () => (/* binding */ InvierteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function InvierteComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " a\u00F1o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvierteComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " a\u00F1os");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InvierteComponent {
    constructor() {
        this.isScrolled = false;
        this.claseTitular = 'fixed-top';
        this.valor = 50000;
        this.meses = 1;
        this.varmes = 'mes';
        this.interes = 1.5;
        this.iva = 19;
        this.total = 0;
        this.emi = 0;
        this.images = [
            'index-three-slider-1',
            'index-three-slider-2',
            'index-three-slider-3',
        ].map((n) => `assets/images/${n}.jpg`);
    }
    ngOnInit() { }
    scrollEvent() {
        window.pageYOffset >= 80
            ? (this.isScrolled = true)
            : (this.isScrolled = false);
    }
}
InvierteComponent.ɵfac = function InvierteComponent_Factory(t) { return new (t || InvierteComponent)(); };
InvierteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvierteComponent, selectors: [["app-invierte"]], hostBindings: function InvierteComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function InvierteComponent_scroll_HostBindingHandler() { return ctx.scrollEvent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 255, vars: 16, consts: [[2, "background-color", "#15549a"], [1, "lead-hero-wrapper", 2, "background", "url(../../../../../assets/images/slider9.jpg) no-repeat"], [1, "container"], [1, "row"], [1, "col-xl-5", "col-lg-5", "col-md-12", "col-sm-12", "col-12"], [1, "lead-hero-caption"], [1, "lead-hero-title"], [1, "lead", "mb0", "text-white"], [1, "text-white"], [1, "rating-list"], [1, "fa", "fa-star"], [1, "offset-xl-1", "col-xl-6", "offset-lg-1", "col-lg-6", "col-md-12", "col-sm-12", "col-12"], [1, "lead-calculator", "pinside40"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "mb10"], [1, "text-white", "mb20"], [1, "slider1"], ["id", "pricipal-slide1"], ["value", "500000", "onInput", "$('#rangeval').html($(this).val())", "type", "range", "min", "500000", "max", "500000000", "step", "100000", "id", "sliderx1", 1, "form-range", "sliderx", 3, "ngModel", "ngModelChange"], [1, "slider"], ["id", "totalyear-slide"], ["value", "1", "onInput", "$('#rangeval2').html($(this).val())", "type", "range", "min", "1", "max", "5", "step", "1", "id", "sliderx2", 1, "form-range", "sliderx", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-12", "col-12"], [1, "single-total"], [1, "lead-cal-small-text"], ["id", "emi", 1, "text-white", "emi-price"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-12"], ["id", "tbl_emi", 1, "text-white"], [1, "col-xl-5", "col-lg-5", "col-md-6", "col-sm-12", "col-12"], ["id", "tbl_la", 1, "text-white"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "text-right"], [1, "btn", "btn-secondary", "btn-sm"], [1, "section-space80", "bg-white"], [1, "offset-xl-2", "col-xl-8", "offset-lg-2", "col-lg-8", "col-md-8", "col-sm-12", "col-12"], [1, "section-title", "mb60", "text-center"], [1, "feature", "feature-icon-style"], [1, "feature-icon"], [1, "fas", "fa-dollar-sign", "fa-2x"], [1, "feature-content"], [1, "feature-title"], [1, "fas", "fa-percent", "fa-2x"], [1, "fas", "fa-piggy-bank", "fa-2x"], [1, "far", "fa-address-book", "fa-2x"], [1, "section-space80"], [1, "offset-xl-2", "col-xl-8", "offset-lg-2", "col-lg-8", "col-md-12", "col-sm-12", "col-12"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-12"], [1, "how-it-block"], [1, "how-it-no"], [1, "how-it-content"], ["href", "#!", 1, "btn", "btn-secondary", "btn-sm"], [1, "section-space80", "bg-primary"], [1, "mb60", "text-center", "section-title"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12"], ["id", "faq1", 1, "accordion"], [1, "card", "mb-1", "border-0"], ["id", "faqOne", 1, "card-header"], [1, "mb-0"], ["data-toggle", "collapse", "data-target", "#faqcollapseOne", "aria-expanded", "true", "aria-controls", "faqcollapseOne", 1, ""], [1, "fa", "fa-plus-circle", "mr-2"], ["id", "faqcollapseOne", "aria-labelledby", "faqOne", "data-parent", "#faq1", 1, "collapse", "show"], [1, "card-body"], ["id", "faq2", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#faqcollapseTwo", "aria-expanded", "false", "aria-controls", "faqcollapseTwo", 1, "collapsed"], ["id", "faqcollapseTwo", "aria-labelledby", "faqTwo", "data-parent", "#faq1", 1, "collapse"], ["id", "faq3", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#faqcollapseThree", "aria-expanded", "false", "aria-controls", "faqcollapseThree", 1, "collapsed"], ["id", "faqcollapseThree", "aria-labelledby", "faqThree", "data-parent", "#faq1", 1, "collapse"], ["id", "faq4", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#faqcollapsefour", "aria-expanded", "false", "aria-controls", "faqcollapsefour", 1, "collapsed"], ["id", "faqcollapsefour", "aria-labelledby", "faqfour", "data-parent", "#faq1", 1, "collapse"], ["id", "faq5", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#faqcollapsefive", "aria-expanded", "false", "aria-controls", "faqcollapsefive", 1, "collapsed"], ["id", "faqcollapsefive", "aria-labelledby", "faqfive", "data-parent", "#faq1", 1, "collapse"], ["id", "faq6", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#faqcollapseSix", "aria-expanded", "false", "aria-controls", "faqcollapseSix", 1, "collapsed"], ["id", "faqcollapseSix", "aria-labelledby", "faqTwo", "data-parent", "#faq1", 1, "collapse"], ["id", "faq7", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#faqcollapseSeven", "aria-expanded", "false", "aria-controls", "faqcollapseSeven", 1, "collapsed"], ["id", "faqcollapseSeven", "aria-labelledby", "faqSeven", "data-parent", "#faq1", 1, "collapse"], ["id", "faq8", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#faqcollapseEight", "aria-expanded", "false", "aria-controls", "faqcollapseEight", 1, "collapsed"], ["id", "faqcollapseEight", "aria-labelledby", "faqEight", "data-parent", "#faq1", 1, "collapse"]], template: function InvierteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Invierte Ya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Coloca tu dinero a trabajar por ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Ingresa a nuestra plataforma y conoce las ofertas de inversi\u00F3n que tenemos para ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Te ayudamos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "para que tengas libertad financiera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "(Las mejores tasas de interes del mercado )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "5 / 5 (85 Opiniones)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Simula Tu Inversi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Escoge El Valor Que deseas Invertir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvierteComponent_Template_input_ngModelChange_45_listener($event) { return ctx.valor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "A Que Plazo?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvierteComponent_Template_input_ngModelChange_54_listener($event) { return ctx.meses = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, InvierteComponent_span_57_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, InvierteComponent_span_58_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Interes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Iva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Total Del Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "EMI - PAGO MENSUAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "QUIERO QUE ME CONTACTEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "INGRESA YA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "VENTAJAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "0 Costo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Nuestros servicios no tienen ning\u00FAn costo para los inversionistas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Mejor rentabilidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Asociada al menor riesgo con garant\u00EDa hipotecaria. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Garant\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Estudiamos clientes y garant\u00EDas encontrando la mejor oportunidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Informes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Detalle a detalle toda la informacion critica de tu inversi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Algunos Beneficios De Invertir Con Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Completa el formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Inversi\u00F3n con garant\u00EDa hipotecaria a nombre del inversor para adquisici\u00F3n, ampliaci\u00F3n, refacci\u00F3n y financiaci\u00F3n de otros destinos, sobre vivienda permanente y no permanente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Aplica ya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Facilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " F\u00E1cil: Cobro a trav\u00E9s de dep\u00F3sito o transferencia electr\u00F3nica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Trasparencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Transparente: Nuestras transacciones son 100% transparentes al realizarse directamente entre personas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Preguntas frecuentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Nuestra misi\u00F3n es entregar las \u00FAltimas noticias y opiniones confiables. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h4", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\u00BFCu\u00E1nto tiempo dura la inversi\u00F3n?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Los contratos de pr\u00E9stamo se firman por un plazo de 12 meses, los cuales pueden ser renovados por 12 meses adicionales siempre que ninguna de las partes exprese su deseo de terminar el contrato. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h4", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\u00BFPuedo retirar mi inversi\u00F3n en cualquier momento?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " El inversionista puede decidir terminar el contrato unilateralmente en cualquier momento, solamente debe pagar los costos operativos de conseguir un nuevo inversionista y del cambio del acreedor en el certificado de libertad y tradici\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h4", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u00BFCu\u00E1les son los montos m\u00EDnimos que puedo invertir?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Las solicitudes de cr\u00E9dito var\u00EDan desde los 20 millones hasta los 500 millones. El inversionista puede adaptar su presupuesto dentro de los montos solicitados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h4", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "\u00BFA qui\u00E9n debo entregar mi dinero?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " La totalidad del pr\u00E9stamo se entrega directamente al deudor garante, bien sea por transferencia electr\u00F3nica o por cheque de gerencia. En ning\u00FAn momento el dinero prestado o los intereses pagados ser\u00E1n recolectados por ning\u00FAn intermediario. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h4", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " \u00BFPuedo hacer todo el tr\u00E1mite de manera virtual?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Todos los tr\u00E1mites asociados con la inversi\u00F3n pueden realizarse virtualmente, con excepci\u00F3n de la formalizaci\u00F3n de la escritura de hipoteca y autenticaci\u00F3n de documentos que soportan el cr\u00E9dito, los cuales se realizan en una cita dada por la Notar\u00EDa pertinente. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h4", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "\u00BFCu\u00E1l es la rentabilidad que voy a recibir por mi inversi\u00F3n?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " La rentabilidad mensual var\u00EDa entre el 1.5% mensual (19.5% efectivo anual) y el 2% mensual (26.8% efectivo anual), dependiendo el perfil de riesgo que seleccione el inversionista. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h4", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "\u00BFQu\u00E9 debo pagar por comisiones y gastos administrativos?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " Durante el curso normal del pr\u00E9stamo, el inversionista NO paga por los servicios de contabilidad, gesti\u00F3n documental, cobro prejur\u00EDdico y an\u00E1lisis de riesgo que brinda el intermediario. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h4", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "\u00BFCuando se perfecciona la inversi\u00F3n?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " El inversionista solo transfiere la totalidad del dinero prestado al deudor garante una vez se publique la anotaci\u00F3n de la hipoteca en el certificado de libertad y tradici\u00F3n del inmueble, lo cual garantiza que la garant\u00EDa hipotecaria est\u00E9 debidamente registrada. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.valor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 10, ctx.valor, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.meses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.meses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meses <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meses > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.interes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.iva);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](77, 13, ctx.total, "1.0-0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emi);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe], styles: [".sliderx{\r\n    width: 100%;\r\n}\r\n\r\n\r\n.lead-hero-wrapper {\r\n    \r\n    background-size: cover;\r\n    padding-top: 80px;\r\n    padding-bottom: 80px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmllcnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCIiwiZmlsZSI6ImludmllcnRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyeHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmxlYWQtaGVyby13cmFwcGVyIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgfSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 4825:
/*!******************************************************************!*\
  !*** ./src/app/landing/pages/landingv2/main2/main2.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main2Component": () => (/* binding */ Main2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/navbar/navbar.component */ 4696);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class Main2Component {
    constructor() { }
    ngOnInit() {
    }
}
Main2Component.ɵfac = function Main2Component_Factory(t) { return new (t || Main2Component)(); };
Main2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Main2Component, selectors: [["app-main2"]], decls: 2, vars: 0, template: function Main2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluMi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1347:
/*!****************************************************************!*\
  !*** ./src/app/landing/pages/landingv2/one2/one2.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "One2Component": () => (/* binding */ One2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const _c0 = function (a0) { return { "top-nav-collapse": a0 }; };
const _c1 = function () { return ["/landing/op1"]; };
const _c2 = function () { return ["/landing/op2"]; };
const _c3 = function () { return ["/landing/op3"]; };
const _c4 = function () { return ["/landing/op2/personales"]; };
const _c5 = function () { return ["/landing/op2/vehiculos"]; };
const _c6 = function () { return ["/landing/op2/hipoteca"]; };
const _c7 = function () { return ["/landing/op2/construccion"]; };
const _c8 = function () { return ["/landing/op2/invierte"]; };
const _c9 = function () { return ["/auth/login"]; };
class One2Component {
    constructor() {
        this.isScrolled = false;
        this.claseTitular = 'fixed-top';
        this.images = [
            'index-three-slider-1',
            'index-three-slider-2',
            'index-three-slider-3',
        ].map((n) => `assets/images/${n}.jpg`);
    }
    ngOnInit() { }
    scrollEvent() {
        window.pageYOffset >= 80
            ? (this.isScrolled = true)
            : (this.isScrolled = false);
    }
}
One2Component.ɵfac = function One2Component_Factory(t) { return new (t || One2Component)(); };
One2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: One2Component, selectors: [["ng-component"]], hostBindings: function One2Component_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function One2Component_scroll_HostBindingHandler() { return ctx.scrollEvent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 416, vars: 39, consts: [[1, "visiblex", 2, "background-color", "#15549a"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-red", 3, "ngClass"], [1, "container"], ["href", "#", 1, "navbar-logo"], [1, "fab", "fa-accusoft"], ["href", "index.html", 1, "nav-link", "titlenav"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "collapsed", "bg-dark", "text-white"], [1, "icon-bar", "top-bar", "mt-0"], [1, "icon-bar", "middle-bar"], [1, "icon-bar", "bottom-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown"], ["id", "navbarHome", "data-toggle", "dropdown", "href", "#!", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarHome", 1, "dropdown-menu", "dropdown-menu-sm"], [1, "row", "no-gutters"], [1, "col-6", "col-lg-6"], [1, "dropdown-header"], [1, "dropdown-item", 3, "routerLink"], ["id", "navbarProduct", "data-toggle", "dropdown", "href", "#!", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarProduct", 1, "dropdown-menu"], ["href", "#!", "id", "navbarFeatures", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarFeatures", 1, "dropdown-menu"], ["href", "#!", 1, "dropdown-item"], ["href", "contact-us.html", 1, "dropdown-item"], ["id", "modal-btn", "data-toggle", "modal", "data-target", "#signmodal", 1, "dropdown-item"], [1, "section-space80"], [1, "row"], [1, "offset-xl-2", "col-xl-8", "offset-lg-2", "col-lg-8", "col-md-12", "col-sm-12", "col-12"], [1, "mb60", "text-center", "section-title"], ["id", "service", 1, ""], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-3", "col-12"], [1, "service-block-v3"], [1, "icon", "mb30"], ["href", "#!"], ["src", "../../../../../assets/images/loan.svg", "alt", "Lendiup - Logo 1", 1, "icon-svg-2x"], [1, "service-content"], [1, "service-title"], [1, "title", 3, "routerLink"], [1, "service-rate-block"], [1, "product-rate"], [1, "rate-text"], [1, "btn", "btn-secondary", "btn-block", 3, "routerLink"], ["src", "../../../../../assets/images/mortgage.svg", "alt", "Lendiup - Logo 1", 1, "icon-svg-2x"], ["src", "../../../../../assets/images/car.svg", "alt", "Lendiup - Logo 2", 1, "icon-svg-2x"], ["src", "../../../../../assets/images/loan.svg", "alt", "Lendiup - Logo 3", 1, "icon-svg-2x"], [1, "section-space80", "bg-white"], [1, "offset-xl-2", "col-xl-8", "offset-lg-2", "col-lg-8", "col-md-8", "col-sm-12", "col-12"], [1, "section-title", "mb60", "text-center"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-12", "col-12"], [1, "feature", "feature-icon-style"], [1, "feature-icon"], [1, "fa", "fa-calculator", "fa-2x"], [1, "feature-content"], [1, "feature-title"], [1, "fa", "fa-heart", "fa-2x"], [1, "fa", "fa-file-alt", "fa-2x"], [1, "fa", "fa-bolt", "fa-2x"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-12"], [1, "how-it-block"], [1, "how-it-no"], [1, "how-it-content"], ["href", "#!", 1, "btn", "btn-secondary", "btn-sm"], [1, "section-space80", "bg-gradient", "call-to-action"], [1, "text-center"], [1, "text-white"], ["href", "#!", 1, "btn", "btn-secondary"], [1, "customer-block"], [1, "customer-quote-circle"], [1, "fa", "fa-quote-right"], [1, "customer-img"], ["src", "../../../../../assets/images/customer-1.jpg", "alt", "Lendiup - Logo 12", 1, "img-circle"], [1, "customer-content"], [1, "customer-text"], [1, "customer-meta"], [1, "customer-name"], ["src", "../../../../../assets/images/customer-2.jpg", "alt", "Lendiup - Logo 12", 1, "img-circle"], ["src", "../../../../../assets/images/customer-3.jpg", "alt", "Borrow - Loan Company Responsive Website Templates", 1, "img-circle"], [1, "section-space80", "bg-primary"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12"], ["id", "faqExample", 1, "accordion"], [1, "card", "mb-1", "border-0"], ["id", "faqOne", 1, "card-header"], [1, "mb-0"], ["href", "#!", "data-toggle", "collapse", "data-target", "#faqcollapseOne", "aria-expanded", "true", "aria-controls", "faqcollapseOne", 1, ""], [1, "fa", "fa-plus-circle", "mr-2"], ["id", "faqcollapseOne", "aria-labelledby", "faqOne", "data-parent", "#faqExample", 1, "collapse", "show"], [1, "card-body"], ["id", "faqTwo", 1, "card-header"], ["href", "#!", "data-toggle", "collapse", "data-target", "#faqcollapseTwo", "aria-expanded", "false", "aria-controls", "faqcollapseTwo", 1, "collapsed"], ["id", "faqcollapseTwo", "aria-labelledby", "faqTwo", "data-parent", "#faqExample", 1, "collapse"], ["id", "faqThree", 1, "card-header"], ["href", "#!", "data-toggle", "collapse", "data-target", "#faqcollapseThree", "aria-expanded", "false", "aria-controls", "faqcollapseThree", 1, "collapsed"], ["id", "faqcollapseThree", "aria-labelledby", "faqThree", "data-parent", "#faqExample", 1, "collapse"], ["id", "faqfour", 1, "card-header"], ["href", "#!", "data-toggle", "collapse", "data-target", "#faqcollapsefour", "aria-expanded", "false", "aria-controls", "faqcollapsefour", 1, "collapsed"], ["id", "faqcollapsefour", "aria-labelledby", "faqfour", "data-parent", "#faqExample", 1, "collapse"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-12"], [1, "post-block", "mb30"], [1, "post-img"], ["href", "blog-single.html", 1, "imghover"], ["src", "../../../../../assets/images/blog-img.jpg", "alt", "Lendiup - Logo 12", 1, "img-fluid"], [1, "bg-white", "pinside40", "outline"], ["href", "blog-single.html", 1, "title"], [1, "meta"], [1, "meta-date"], [1, "meta-author"], ["href", "blog-single.html", 1, "btn-link"], ["src", "../../../../../assets/images/blog-img-1.jpg", "alt", "Borrow - Loan Company Website Template", 1, "img-fluid"], ["src", "../../../../../assets/images/blog-img-2.jpg", "alt", "Lendiup - Logo 12", 1, "img-fluid"]], template: function One2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LENDIUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Pagina De Aterrizaje ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Inicio Opcion 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Inicio Opcion 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Inicio Opcion 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Productos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Prestamo Personal Rapido ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Prestamo Sobre Vehiculo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Prestamo Sobre Hipoteca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Prestamo Para Construcci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " INVIERTE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Sobre Nosotros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Acerca de nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Preguntas Frecuentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Testimonios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Cont\u00E1ctenos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Ingreso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "INGRESAR1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "INGRESAR2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Encuentra El Pr\u00E9stamo Que Buscas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Lo emparejaremos con un programa de pr\u00E9stamos que satisfaga sus necesidades financieras. En liquidez a corto plazo, esforz\u00E1ndose por poner fondos a su disposici\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "dentro de las 24 horas posteriores a la aplicaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Pr\u00E9stamo personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "8.35%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Tipo de inter\u00E9s:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Requisitos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Pr\u00E9stamo sobre hipoteca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "8.35%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Tipo de inter\u00E9s:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Requisitos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Prestamo sobre vehiculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "12.75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Tipo de inter\u00E9s:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Requisitos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Prestamo para construcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "16.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Tipo de inter\u00E9s:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Requisitos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Razones para elegirnos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " El f\u00FAtbol ahora quiere una velocidad de fabricaci\u00F3n o el f\u00FAtbol estibentum empleado. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "EMI Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Fusce sed erat libasellus desea continuar con esa orciquise, un simple enfermo, miembros persuasivos del bote de f\u00FAtbol. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\u00A1Los clientes nos aman!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Felis ligula, tampoco es el precio de phareest todos pueden tener un mal sunec atmetus weekend invel desarrollador inmobiliario. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "F\u00E1cil documentaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Elemento esque pellent en Pakist\u00E1n ittnunc mass variusare propaganda de la ue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Aprobaci\u00F3n r\u00E1pida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Pellent esque ittnunc proceso est\u00E1 destinado a arder en una masa voc\u0101bulum eleme ticam propaganda varnare eu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Aplicar en tres sencillos pasos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "No ser\u00E1s el \u00FAnico matiz de di\u00E1metro lorem mauris.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Completa el formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Primero necesitamos saber un poco sobre usted y sus necesidades de pr\u00E9stamo.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Aplica ya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Obtener aprobaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Dentro de las cinco horas h\u00E1biles posteriores a la presentaci\u00F3n de su solicitud y obtener la aprobaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Asegure sus fondos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Una vez aprobado, podremos trabajar con los detalles. Nosotros enviamos dinero a las pocas horas de aprobado. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "h1", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Empiece de forma sencilla y segura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " Comprenda cu\u00E1l es el monto del pr\u00E9stamo para el que es elegible y para qu\u00E9 ser\u00EDa el EMI. Puede solicitar seg\u00FAn su elegibilidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Verificar elegibilidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "\u00A1Amado por m\u00E1s de 1000 personas en Colombia!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "No ser\u00E1s el \u00FAnico lorem mauris di\u00E1metro matices.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " \u201CAhora puedo aprender f\u00E1cilmente, gracias. Mi estudio ahora quiere estar dirigido. velocidad de fabricaci\u00F3n Iestibulum laoreet.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Maria Alvarez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "p", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " \u201CEncontrar soluciones f\u00E1ciles para hacer crecer mi negocio de una manera que se adapte a la ropa para exteriores voc\u0101bulum speed Iestibulum Laoreet s\u00ED mismo. Gracias.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Pablo Solar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "p", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " \u201C\u00A1Cada persona fue realmente fant\u00E1stica! ahora quiere un objetivo velocidad de fabricaci\u00F3n Iestibulum laoreet.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Ana Cecilia Perez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "h1", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Preguntas frecuentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " Nuestra misi\u00F3n es entregar las \u00FAltimas noticias y opiniones confiables. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "h4", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Cuanto puedo pedir prestado?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " DA clich\u00E9 resultante criticado, por tan alta vida Terry Richardson denuncia el calamar. 3 oficinas de wolf moon cupidatat de la patineta no duele el brunch. Food Truck quinua no trabaje de la siguiente manera. 3 hora del brunch de la luna del lobo, son algunos Ponle un p\u00E1jaro calamares caf\u00E9 de origen \u00FAnico, sin compromiso y Shoreditch. No hay nada de mi alma keffiyeh helvetica, el trabajo de la cerveza artesanal Wes Anderson credo sabio a proident. para un vegano carnicero excepteur vice lomo. Leggings cerveza artesanal negros de la granja a la mesa, probablemente no sepa c\u00F3mo el sintetizador est\u00E9tico No he o\u00EDdo hablar de ellos para denunciar VHS laborales y sostenibles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "h4", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "\u00BFPuedo cancelar mi pr\u00E9stamo? temprano?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " DA clich\u00E9 resultante criticado, por tan alta vida Terry Richardson denuncia el calamar. 3 oficinas de wolf moon cupidatat de la patineta no duele el brunch. Food Truck quinua no trabaje de la siguiente manera. 3 hora del brunch de la luna del lobo, son algunos Ponle un p\u00E1jaro calamares caf\u00E9 de origen \u00FAnico, sin compromiso y Shoreditch. No hay nada de mi alma keffiyeh helvetica, el trabajo de la cerveza artesanal Wes Anderson credo sabio a proident. para un vegano carnicero excepteur vice lomo. Leggings cerveza artesanal negros de la granja a la mesa, probablemente no sepa c\u00F3mo el sintetizador est\u00E9tico No he o\u00EDdo hablar de ellos para denunciar VHS laborales y sostenibles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "h4", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "\u00BFEst\u00E1s ofreciendo refinanciaci\u00F3n ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, " DA clich\u00E9 resultante criticado, por tan alta vida Terry Richardson denuncia el calamar. 3 oficinas de wolf moon cupidatat de la patineta no duele el brunch. Food Truck quinua no trabaje de la siguiente manera. 3 hora del brunch de la luna del lobo, son algunos Ponle un p\u00E1jaro calamares caf\u00E9 de origen \u00FAnico, sin compromiso y Shoreditch. No hay nada de mi alma keffiyeh helvetica, el trabajo de la cerveza artesanal Wes Anderson credo sabio a proident. para un vegano carnicero excepteur vice lomo. Leggings cerveza artesanal negros de la granja a la mesa, probablemente no sepa c\u00F3mo el sintetizador est\u00E9tico No he o\u00EDdo hablar de ellos para denunciar VHS laborales y sostenibles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "h4", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Cuando debo aplicar?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " Ad vegan excepcional carnicero vice lomo. Polainas Ocaecat Craft cerveza de la granja a la mesa, sintetizador est\u00E9tico de mezclilla en bruto Probablemente no he o\u00EDdo hablar de los VHS sostenibles accusamus labore. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "\u00DAltimas noticias de la compa\u00F1\u00EDa de pr\u00E9stamos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Nuestra misi\u00F3n es entregar las \u00FAltimas noticias y opiniones confiables.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Parejas que compran un pr\u00E9stamo hipotecario nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Aug 25, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, " Administraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, " Pero estaba oscuro Libasellus Clinical Pret Give Graduado Pol\u00EDtica de EE. UU. quiere una olla de Bollywood miembros del f\u00FAtbol. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Leer Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Hombre de negocios pensando en pr\u00E9stamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Aug 24, 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, " Administraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, " Sin veh\u00EDculos ni prote\u00EDna nibh maleuada, ahora puede ringilla fbendum film sapierttitor nibh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Leer mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "\u00BFSon estudiantes que buscan un pr\u00E9stamo? ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Aug 23, 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Por");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, " Administraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, " Los miembros de la urna euusce pero fue libasellus una semana Precio reservado para continuar con el juego. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Leer m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.claseTitular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.isScrolled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c7));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["/*-----------------------------------------\r\n     Slider\r\n------------------------------------------*/\r\n\r\n.slider {\r\n  position: relative;\r\n}\r\n\r\n.slider-img img {\r\n  position: relative;\r\n  z-index: -1;\r\n  width: 100%;\r\n}\r\n\r\n.slider-img {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgba(16, 75, 149, 0.8) 0%,\r\n    rgba(16, 75, 149, 0.8) 100%\r\n  );\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#cc1b2429', endColorstr='#cc1b2429', GradientType=0);\r\n  position: relative;\r\n}\r\n\r\n.slider-captions {\r\n  position: absolute;\r\n  bottom: 200px;\r\n}\r\n\r\n.slider-title {\r\n  color: #fff;\r\n  font-size: 52px;\r\n  font-weight: 700;\r\n  line-height: 62px;\r\n}\r\n\r\n.slider-text {\r\n  color: #fff;\r\n}\r\n\r\n.slider .owl-prev {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 40%;\r\n  left: 20px;\r\n}\r\n\r\n.slider .owl-next {\r\n  position: absolute;\r\n  right: 0px;\r\n  top: 40%;\r\n  right: 20px;\r\n}\r\n\r\n#slider .owl-next,\r\n#slider .owl-prev {\r\n  background-color: transparent !important;\r\n  border: 2px solid #fff;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#slider .owl-next:hover,\r\n#slider .owl-prev:hover {\r\n  background-color: #fff !important;\r\n  border: 2px solid #fff;\r\n  color: #15549a;\r\n}\r\n\r\n#slider .owl-pagination {\r\n  margin: 0px;\r\n  bottom: 40px;\r\n  position: relative;\r\n}\r\n\r\n#slider .owl-page span {\r\n  border-radius: 2px;\r\n  width: 98%;\r\n  height: 1px;\r\n  background-color: #fff;\r\n  margin: 0px;\r\n}\r\n\r\n#slider .owl-page {\r\n  width: 5%;\r\n}\r\n\r\n/* Fin */\r\n\r\n.show{\r\n    background-color: #15549a;\r\n}\r\n\r\n.top-bar{\r\n    background-color: red;\r\n}\r\n\r\n@media (min-width: 0px) {\r\n\r\n    .visiblex{\r\n        display: block;\r\n    }\r\n    .visiblexx{\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (min-width: 450px) {\r\n\r\n    .visiblex{\r\n        display: block;\r\n    }\r\n    .visiblexx{\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (min-width: 500px) {\r\n\r\n    .visiblex{\r\n        display: block;\r\n    }\r\n    .visiblexx{\r\n        display: block;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) { \r\n    .visiblex{\r\n    display: none;\r\n    }\r\n    .visiblexx{\r\n        display: block;\r\n    }\r\n }\r\n\r\n@media (min-width: 992px) { \r\n    .visiblex{\r\n        display: none;\r\n    }\r\n    .visiblexx{\r\n        display: block;\r\n    }\r\n }\r\n\r\n@media (min-width: 1200px) { \r\n    .visiblex{\r\n        display: none;\r\n    }\r\n    .visiblexx{\r\n        display: block;\r\n    }\r\n } \r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7MkNBRTJDOztBQUUzQztFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBV0U7Ozs7R0FJQztFQUNELHNIQUFzSDtFQUN0SCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBOztFQUVFLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsV0FBVztFQUdYLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxpQ0FBaUM7RUFDakMsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUEsUUFBUTs7QUFJUjtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFHQTs7SUFFSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFDQTs7SUFFSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO0lBQ0EsYUFBYTtJQUNiO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0NBQ0g7O0FBRUQ7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7Q0FDSDs7QUFFRDtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtDQUNIIiwiZmlsZSI6Im9uZTIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICBTbGlkZXJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNsaWRlci1pbWcgaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZXItaW1nIHtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChcclxuICAgIHRvcCxcclxuICAgIHJnYmEoMTYsIDc1LCAxNDksIDAuOCkgMCUsXHJcbiAgICByZ2JhKDE2LCA3NSwgMTQ5LCAwLjgpIDEwMCVcclxuICApO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG9wLFxyXG4gICAgcmdiYSgxNiwgNzUsIDE0OSwgMC44KSAwJSxcclxuICAgIHJnYmEoMTYsIDc1LCAxNDksIDAuOCkgMTAwJVxyXG4gICk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgcmdiYSgxNiwgNzUsIDE0OSwgMC44KSAwJSxcclxuICAgIHJnYmEoMTYsIDc1LCAxNDksIDAuOCkgMTAwJVxyXG4gICk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2NjMWIyNDI5JywgZW5kQ29sb3JzdHI9JyNjYzFiMjQyOScsIEdyYWRpZW50VHlwZT0wKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zbGlkZXItY2FwdGlvbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDIwMHB4O1xyXG59XHJcblxyXG4uc2xpZGVyLXRpdGxlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDUycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogNjJweDtcclxufVxyXG5cclxuLnNsaWRlci10ZXh0IHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNsaWRlciAub3dsLXByZXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwcHg7XHJcbiAgdG9wOiA0MCU7XHJcbiAgbGVmdDogMjBweDtcclxufVxyXG5cclxuLnNsaWRlciAub3dsLW5leHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG4gIHRvcDogNDAlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4jc2xpZGVyIC5vd2wtbmV4dCxcclxuI3NsaWRlciAub3dsLXByZXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbiNzbGlkZXIgLm93bC1uZXh0OmhvdmVyLFxyXG4jc2xpZGVyIC5vd2wtcHJldjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgY29sb3I6ICMxNTU0OWE7XHJcbn1cclxuXHJcbiNzbGlkZXIgLm93bC1wYWdpbmF0aW9uIHtcclxuICBtYXJnaW46IDBweDtcclxuICBib3R0b206IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jc2xpZGVyIC5vd2wtcGFnZSBzcGFuIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4jc2xpZGVyIC5vd2wtcGFnZSB7XHJcbiAgd2lkdGg6IDUlO1xyXG59XHJcblxyXG4vKiBGaW4gKi9cclxuXHJcblxyXG5cclxuLnNob3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1NDlhO1xyXG59XHJcblxyXG4udG9wLWJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAwcHgpIHtcclxuXHJcbiAgICAudmlzaWJsZXh7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAudmlzaWJsZXh4e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSB7XHJcblxyXG4gICAgLnZpc2libGV4e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnZpc2libGV4eHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuXHJcbiAgICAudmlzaWJsZXh7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAudmlzaWJsZXh4e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAudmlzaWJsZXh7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnZpc2libGV4eHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuIH1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyBcclxuICAgIC52aXNpYmxleHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnZpc2libGV4eHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuIH1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgXHJcbiAgICAudmlzaWJsZXh7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC52aXNpYmxleHh7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiB9IFxyXG5cclxuICJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 7071:
/*!****************************************************************************!*\
  !*** ./src/app/landing/pages/landingv2/personales/personales.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalesComponent": () => (/* binding */ PersonalesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function PersonalesComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PersonalesComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " meses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PersonalesComponent {
    constructor() {
        this.isScrolled = false;
        this.claseTitular = 'fixed-top';
        this.valor = 50000;
        this.meses = 1;
        this.varmes = 'mes';
        this.interes = 1.5;
        this.iva = 19;
        this.total = 0;
        this.emi = 0;
        this.images = [
            'index-three-slider-1',
            'index-three-slider-2',
            'index-three-slider-3',
        ].map((n) => `assets/images/${n}.jpg`);
    }
    ngOnInit() { }
    scrollEvent() {
        window.pageYOffset >= 80
            ? (this.isScrolled = true)
            : (this.isScrolled = false);
    }
}
PersonalesComponent.ɵfac = function PersonalesComponent_Factory(t) { return new (t || PersonalesComponent)(); };
PersonalesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalesComponent, selectors: [["ng-component"]], hostBindings: function PersonalesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function PersonalesComponent_scroll_HostBindingHandler() { return ctx.scrollEvent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 172, vars: 16, consts: [[2, "background-color", "#15549a"], [1, "lead-hero-wrapper", 2, "background", "url(../../../../../assets/images/lead-hero-img.jpg) no-repeat"], [1, "container"], [1, "row"], [1, "col-xl-5", "col-lg-5", "col-md-12", "col-sm-12", "col-12"], [1, "lead-hero-caption"], [1, "lead-hero-title"], [1, "lead", "mb0", "text-white"], [1, "text-white"], [1, "rating-list"], [1, "fa", "fa-star"], [1, "offset-xl-1", "col-xl-6", "offset-lg-1", "col-lg-6", "col-md-12", "col-sm-12", "col-12"], [1, "lead-calculator", "pinside40"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "mb10"], [1, "text-white", "mb20"], [1, "slider1"], ["id", "pricipal-slide1"], ["value", "50000", "onInput", "$('#rangeval').html($(this).val())", "type", "range", "min", "50000", "max", "500000", "step", "10000", "id", "sliderx1", 1, "form-range", "sliderx", 3, "ngModel", "ngModelChange"], [1, "slider"], ["id", "totalyear-slide"], ["value", "1", "onInput", "$('#rangeval2').html($(this).val())", "type", "range", "min", "1", "max", "6", "step", "1", "id", "sliderx2", 1, "form-range", "sliderx", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-12", "col-12"], [1, "single-total"], [1, "lead-cal-small-text"], ["id", "emi", 1, "text-white", "emi-price"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-12"], ["id", "tbl_emi", 1, "text-white"], [1, "col-xl-5", "col-lg-5", "col-md-6", "col-sm-12", "col-12"], ["id", "tbl_la", 1, "text-white"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "text-right"], [1, "btn", "btn-secondary", "btn-sm"], [1, "section-space80", "bg-white"], [1, "offset-xl-2", "col-xl-8", "offset-lg-2", "col-lg-8", "col-md-8", "col-sm-12", "col-12"], [1, "section-title", "mb60", "text-center"], [1, "feature", "feature-icon-style"], [1, "feature-icon"], [1, "far", "fa-id-card", "fa-2x"], [1, "feature-content"], [1, "feature-title"], [1, "fas", "fa-at", "fa-2x"], [1, "fas", "fa-piggy-bank", "fa-2x"], [1, "fa", "fa-bolt", "fa-2x"], [1, "section-space80"], [1, "offset-xl-2", "col-xl-8", "offset-lg-2", "col-lg-8", "col-md-12", "col-sm-12", "col-12"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-12"], [1, "how-it-block"], [1, "how-it-no"], [1, "how-it-content"], ["href", "#!", 1, "btn", "btn-secondary", "btn-sm"]], template: function PersonalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prestamos Personales Rapidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Una prestamo pensado para ti, f\u00E1cil de usar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Encontrar\u00E1s respuesta a tu solicitud de cr\u00E9dito en l\u00EDnea en minutos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Solicite de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "$50.000 hasta $500.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "(Si ya eres cliente antiguo pide hasta $2.000.000 )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "5 / 5 (85 Opiniones)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Obten Tu Prestamo Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Escoge El Valor Del Prestamo Que Deseas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalesComponent_Template_input_ngModelChange_45_listener($event) { return ctx.valor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Que Plazo Necesitas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalesComponent_Template_input_ngModelChange_54_listener($event) { return ctx.meses = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, PersonalesComponent_span_57_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, PersonalesComponent_span_58_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Interes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Iva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Total Del Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "EMI - PAGO MENSUAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "APLICA YA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "REQUISITOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Nuestros plazos var\u00EDan entre 1 y 180 d\u00EDas y tasa de inter\u00E9s fija del 25% e.a. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Ser mayor de 18 a\u00F1os ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Tener correo electr\u00F3nico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Tener una cuenta bancaria a tu nombre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Aprobaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " De 24 a 48 Horas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Aplicar en tres sencillos pasos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "No ser\u00E1s el \u00FAnico matiz de di\u00E1metro lorem mauris.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Completa el formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Primero necesitamos saber un poco sobre usted y sus necesidades de pr\u00E9stamo.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Aplica ya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Obtener aprobaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Dentro de las 48 horas h\u00E1biles posteriores a la presentaci\u00F3n de su solicitud tendras respuesta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Asegure sus fondos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Una vez aprobado, podremos trabajar con los detalles. Nosotros consignamos el dinero a tu cuenta bancaria. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.valor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 10, ctx.valor, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.meses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.meses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meses <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meses > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.interes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.iva);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](77, 13, ctx.total, "1.0-0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emi);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe], styles: [".sliderx{\r\n    width: 100%;\r\n}\r\n\r\n.lead-hero-wrapper {\r\n    \r\n    background-size: cover;\r\n    padding-top: 80px;\r\n    padding-bottom: 80px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJwZXJzb25hbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyeHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGVhZC1oZXJvLXdyYXBwZXIge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICB9XHJcbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 7129:
/*!**************************************************************************!*\
  !*** ./src/app/landing/pages/landingv2/vehiculos/vehiculos.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiculosComponent": () => (/* binding */ VehiculosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function VehiculosComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehiculosComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " meses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VehiculosComponent {
    constructor() {
        this.isScrolled = false;
        this.claseTitular = 'fixed-top';
        this.valor = 50000;
        this.meses = 1;
        this.varmes = 'mes';
        this.interes = 1.5;
        this.iva = 19;
        this.total = 0;
        this.emi = 0;
        this.images = [
            'index-three-slider-1',
            'index-three-slider-2',
            'index-three-slider-3',
        ].map((n) => `assets/images/${n}.jpg`);
    }
    ngOnInit() { }
    scrollEvent() {
        window.pageYOffset >= 80
            ? (this.isScrolled = true)
            : (this.isScrolled = false);
    }
}
VehiculosComponent.ɵfac = function VehiculosComponent_Factory(t) { return new (t || VehiculosComponent)(); };
VehiculosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehiculosComponent, selectors: [["app-vehiculos"]], hostBindings: function VehiculosComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function VehiculosComponent_scroll_HostBindingHandler() { return ctx.scrollEvent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 172, vars: 16, consts: [[2, "background-color", "#15549a"], [1, "lead-hero-wrapper", 2, "background", "url(../../../../../assets/images/index-three-slider-3.jpg) no-repeat"], [1, "container"], [1, "row"], [1, "col-xl-5", "col-lg-5", "col-md-12", "col-sm-12", "col-12"], [1, "lead-hero-caption"], [1, "lead-hero-title"], [1, "lead", "mb0", "text-white"], [1, "text-white"], [1, "rating-list"], [1, "fa", "fa-star"], [1, "offset-xl-1", "col-xl-6", "offset-lg-1", "col-lg-6", "col-md-12", "col-sm-12", "col-12"], [1, "lead-calculator", "pinside40"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "mb10"], [1, "text-white", "mb20"], [1, "slider1"], ["id", "pricipal-slide1"], ["value", "50000", "onInput", "$('#rangeval').html($(this).val())", "type", "range", "min", "50000", "max", "500000", "step", "10000", "id", "sliderx1", 1, "form-range", "sliderx", 3, "ngModel", "ngModelChange"], [1, "slider"], ["id", "totalyear-slide"], ["value", "1", "onInput", "$('#rangeval2').html($(this).val())", "type", "range", "min", "1", "max", "6", "step", "1", "id", "sliderx2", 1, "form-range", "sliderx", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-12", "col-12"], [1, "single-total"], [1, "lead-cal-small-text"], ["id", "emi", 1, "text-white", "emi-price"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-12"], ["id", "tbl_emi", 1, "text-white"], [1, "col-xl-5", "col-lg-5", "col-md-6", "col-sm-12", "col-12"], ["id", "tbl_la", 1, "text-white"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "text-right"], [1, "btn", "btn-secondary", "btn-sm"], [1, "section-space80", "bg-white"], [1, "offset-xl-2", "col-xl-8", "offset-lg-2", "col-lg-8", "col-md-8", "col-sm-12", "col-12"], [1, "section-title", "mb60", "text-center"], [1, "feature", "feature-icon-style"], [1, "feature-icon"], [1, "far", "fa-id-card", "fa-2x"], [1, "feature-content"], [1, "feature-title"], [1, "fas", "fa-at", "fa-2x"], [1, "fas", "fa-piggy-bank", "fa-2x"], [1, "fa", "fa-bolt", "fa-2x"], [1, "section-space80"], [1, "offset-xl-2", "col-xl-8", "offset-lg-2", "col-lg-8", "col-md-12", "col-sm-12", "col-12"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-12"], [1, "how-it-block"], [1, "how-it-no"], [1, "how-it-content"], ["href", "#!", 1, "btn", "btn-secondary", "btn-sm"]], template: function VehiculosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prestamos Sobre Vehiculos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Colocas tu vehiculo como garantia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Y en poco tiempo estudiamos tu solicitud y desembolsamos el dinero en tu cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Solicite de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "$10.000.000 hasta $50.000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "(Prestamos hasta el 50% del avaluo de tu vehiculo)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "5 / 5 (85 Opiniones)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Obten Tu Prestamo Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Escoge El Valor Del Prestamo Que Deseas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VehiculosComponent_Template_input_ngModelChange_45_listener($event) { return ctx.valor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Que Plazo Necesitas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VehiculosComponent_Template_input_ngModelChange_54_listener($event) { return ctx.meses = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, VehiculosComponent_span_57_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, VehiculosComponent_span_58_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Interes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Iva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Total Del Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "EMI - PAGO MENSUAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "APLICA YA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "REQUISITOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Nuestros plazos var\u00EDan entre 1 y 180 d\u00EDas y tasa de inter\u00E9s fija del 25% e.a. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Ser mayor de 18 a\u00F1os ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Tener correo electr\u00F3nico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Tener una cuenta bancaria a tu nombre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Aprobaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " De 24 a 48 Horas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Aplicar en tres sencillos pasos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "No ser\u00E1s el \u00FAnico matiz de di\u00E1metro lorem mauris.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Completa el formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Primero necesitamos saber un poco sobre usted y sus necesidades de pr\u00E9stamo.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Aplica ya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Obtener aprobaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Dentro de las 48 horas h\u00E1biles posteriores a la presentaci\u00F3n de su solicitud tendras respuesta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Asegure sus fondos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Una vez aprobado, podremos trabajar con los detalles. Nosotros consignamos el dinero a tu cuenta bancaria. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.valor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 10, ctx.valor, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.meses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.meses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meses <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meses > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.interes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.iva);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](77, 13, ctx.total, "1.0-0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emi);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe], styles: [".sliderx{\r\n    width: 100%;\r\n}\r\n\r\n.lead-hero-wrapper {\r\n    \r\n    background-size: cover;\r\n    padding-top: 80px;\r\n    padding-bottom: 80px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljdWxvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCIiwiZmlsZSI6InZlaGljdWxvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlcnh7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxlYWQtaGVyby13cmFwcGVyIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgfSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 5858:
/*!******************************************************************!*\
  !*** ./src/app/landing/pages/landingv3/main3/main3.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main3Component": () => (/* binding */ Main3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _one3_one3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../one3/one3.component */ 4738);


class Main3Component {
    constructor() { }
    ngOnInit() {
    }
}
Main3Component.ɵfac = function Main3Component_Factory(t) { return new (t || Main3Component)(); };
Main3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Main3Component, selectors: [["app-main3"]], decls: 1, vars: 0, template: function Main3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-one3");
    } }, directives: [_one3_one3_component__WEBPACK_IMPORTED_MODULE_0__.One3Component], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluMy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4738:
/*!****************************************************************!*\
  !*** ./src/app/landing/pages/landingv3/one3/one3.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "One3Component": () => (/* binding */ One3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);



const _c0 = function () { return ["/landing/op1"]; };
const _c1 = function () { return ["/landing/op2"]; };
const _c2 = function () { return ["/landing/op3"]; };
class One3Component {
    constructor() { }
    ngOnInit() { }
}
One3Component.ɵfac = function One3Component_Factory(t) { return new (t || One3Component)(); };
One3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: One3Component, selectors: [["app-one3"]], decls: 158, vars: 6, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "py-3"], [1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top"], [1, "container"], ["data-toggle", "collapse", "type", "button", "data-target", "#menu", 1, "navbar-toggler", "bg-secondary"], [1, "sr-only"], [1, "navbar-toggler-icon"], ["id", "menu", 1, "collapse", "navbar-collapse"], ["href", "#", 1, "navbar-logo"], [1, "fab", "fa-accusoft"], ["href", "index.html", 1, "nav-link", "titlenav"], [1, "nav", "navbar-nav", "alinpage", "align-self-end"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown1", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-white"], ["aria-labelledby", "navbarDropdown2", 1, "dropdown-menu", "aguamarina"], [1, "dropdown-item", "color-semiwhite", 3, "routerLink"], ["href", "#", "id", "navbarDropdown2", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-white"], ["href", "", 1, "dropdown-item", "color-semiwhite"], ["role", "presentation", 1, "nav-item"], ["href", "", 1, "nav-link"], ["href", "./pages/about.html", 1, "nav-link"], ["href", "#", "id", "modal-btn", "data-toggle", "modal", "data-target", "#signmodal", 1, "nav-link", "titlenav"], ["role", "presentation", 1, "nav-item", "d-none", "d-xs-block", "d-md-block"], ["href", "#", 1, "nav-link"], [1, "icon", "ion-ios-search-strong"], [1, "fa", "fa-shopping-bag"], ["id", "log", "href", "#", 1, "nav-link"], ["id", "parallax", 1, "col-md-12", "bg-primary"], [1, "row", "h-100"], [1, "col-md-12", "align-self-center"], ["id", "weirdtext", 1, "text-center", "titulo-parallax"], [1, "col-md-12"], [1, "newsletter-subscribe"], [1, "intro"], [1, "text-center", "title-ph2"], [1, "text-center", "text-normal"], ["method", "post", 1, "form-inline"], [1, "form-group"], ["pattern", "\\b[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}\\b", "type", "email", "name", "email", "placeholder", "Ingrese Su Email", 1, "form-control", "text-normal"], ["onclick", "window.location.href='#'", 1, "btn-lg", "btnsuscribete"], [1, "col-md-12", "v-erde"], [1, "container", "text-center"], ["type", "button", "onclick", "window.location.href=''", 1, "btn-lg", "btn-info"], ["id", "imgbanner", 1, "col-md-12", "bg-primary"], [1, "text-center", "titulo-parallax"], [1, "col-md-6", "p-urple"], ["type", "button", "onclick", "window.location.href='https://es.wikipedia.org/wiki/Amigurumi'", 1, "btn-lg", "btn-secondary"], [1, "col-md-6", "b-lue"], [1, "col-md-6"], ["type", "button", "onclick", "window.location.href=''", 1, "btn-lg", "btn-secondary"], ["src", "../../../../../assets/images/horizontal7unsplash.jpg", "alt", "", 1, "img-fluid", "imgbanner"], [1, "col-md-12", "footer-basic"], [1, "social"], ["href", "#"], [1, "icon", "ion-social-instagram"], [1, "icon", "ion-social-snapchat"], [1, "icon", "ion-social-twitter"], [1, "icon", "ion-social-facebook"], [1, "list-inline"], [1, "list-inline-item"], ["href", ""], [1, "copyright"]], template: function One3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "LENDIUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Pagina De Aterrizaje ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Inicio Opcion 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Inicio Opcion 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Inicio Opcion 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " PRODUCTOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Prestamo Personal Rapido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Prestamo Sobre Vehiculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Prestamo Sobre Hipoteca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Prestamo Para Construcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "CONTACTANOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ACERCA DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "INGRESAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "LendiUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Obtenga actualizaciones de LendiUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Mantente informado con noticias, consejos y ofertas especiales. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "form", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Suscribete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u00BFQu\u00E9 es LendiUp?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Prestamos dinero de muchas formas, brindando muchas oportunidades a todas las personas en territorio Colombiano. Unimos inversores que quieren creer en tu idea de negocio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Leer Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "LAS MEJORES TASAS DE INTERES DEL MERCADO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Necesitas un prestamo urgente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Solo con enviarnos unos pocos documentos, en menos de 48 horas tendras tu dinero consignado en el banco. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Leer Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Estas reportado!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Tienes vehiculo o casa? Si es asi no importa que estes reportado, sobre hipoteca o el vehiculo te prestamos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Leer Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Lo que estas buscando es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Invertir?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Preguntanos lo que desees al whatapp 3193779313 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Leer Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "ul", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Personales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Hipoteca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Vehiculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Construccion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "LendiUp \u00A9 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmUzLmNvbXBvbmVudC5jc3MifQ== */"], encapsulation: 2 });


/***/ }),

/***/ 9306:
/*!********************************************************!*\
  !*** ./src/app/landing/pages/page1/page1.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page1Component": () => (/* binding */ Page1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data.service */ 2468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_calc_calc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/calc/calc.component */ 9505);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/card/card.component */ 3949);
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/login/login.component */ 2282);
/* harmony import */ var _shared_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/register/register.component */ 8464);
/* harmony import */ var _shared_requisito_personal_requisito_personal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/requisito-personal/requisito-personal.component */ 3506);








function Page1Component_app_calc_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-calc");
} }
function Page1Component_app_card_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-card");
} }
function Page1Component_app_login_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-login");
} }
function Page1Component_app_register_32_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-register", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("value", function Page1Component_app_register_32_Template_app_register_value_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.valuethesoon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function Page1Component_app_rq1_33_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-rq1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("value", function Page1Component_app_rq1_33_Template_app_rq1_value_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.valuethesoon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class Page1Component {
    constructor(dataService) {
        this.dataService = dataService;
        this.value = 0;
    }
    ngOnInit() {
        // service for detect click in navbar for see login in card
        this.dataService.numberEnd$.subscribe(res => {
            this.value = 2;
        });
    }
    print() {
        this.value = 2;
    }
    valuethesoon(value) {
        this.value = value;
    }
    register() {
        this.value = 3;
    }
    requisitos() {
        this.value = 4;
    }
}
Page1Component.ɵfac = function Page1Component_Factory(t) { return new (t || Page1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
Page1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: Page1Component, selectors: [["app-page1"]], decls: 34, vars: 6, consts: [[1, "view", "full-page-intro", 2, "background-image", "url('../../../../assets/images/portada-personal1.jpg')", "background-repeat", "no-repeat", "background-size", "cover"], [1, "mask", "rgba-black-light", "d-flex", "justify-content-center", "align-items-center"], [1, "container"], [1, "row", "wow", "fadeIn"], [1, "col-md-6", "col-xl-5", "white-text", "text-center", "text-md-left", "mtx"], [1, "display-4", "font-weight-bold"], [1, "hr-light"], [1, "mb-4", "d-none", "d-md-block"], ["type", "button", 1, "btn", "btn-indigo", "btn-lg", 3, "click"], [1, "lead", "mb0"], [1, "col-md-6", "col-xl-5", "mt-5"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "value", 4, "ngSwitchCase"], [3, "value"]], template: function Page1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Prestamos Personales Rapidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Una prestamo pensado para ti, f\u00E1cil de usar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Encontrar\u00E1s respuesta a tu solicitud");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "de cr\u00E9dito en l\u00EDnea en minutos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Page1Component_Template_a_click_16_listener() { return ctx.requisitos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Requisitos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Page1Component_Template_a_click_18_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Solicita Tu Prestamo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Solicite de");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "$100.000 hasta $2.000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "(Plazo De 1 Hasta 6 Meses )");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, Page1Component_app_calc_29_Template, 1, 0, "app-calc", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, Page1Component_app_card_30_Template, 1, 0, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, Page1Component_app_login_31_Template, 1, 0, "app-login", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, Page1Component_app_register_32_Template, 1, 0, "app-register", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, Page1Component_app_rq1_33_Template, 1, 0, "app-rq1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _shared_calc_calc_component__WEBPACK_IMPORTED_MODULE_1__.CalcComponent, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _shared_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent, _shared_requisito_personal_requisito_personal_component__WEBPACK_IMPORTED_MODULE_5__.RequisitoPersonalComponent], styles: [".mtx[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InBhZ2UxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10eHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 8399:
/*!********************************************************!*\
  !*** ./src/app/landing/pages/page2/page2.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page2Component": () => (/* binding */ Page2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data.service */ 2468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_calc_vehiculo_calc_vehiculo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/calc-vehiculo/calc-vehiculo.component */ 1126);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/card/card.component */ 3949);
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/login/login.component */ 2282);
/* harmony import */ var _shared_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/register/register.component */ 8464);
/* harmony import */ var _shared_requisito_vehiculo_requisito_vehiculo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/requisito-vehiculo/requisito-vehiculo.component */ 8631);








function Page2Component_app_calc_vehiculo_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-calc-vehiculo");
} }
function Page2Component_app_card_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-card");
} }
function Page2Component_app_login_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-login");
} }
function Page2Component_app_register_32_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-register", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("value", function Page2Component_app_register_32_Template_app_register_value_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.valuethesoon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function Page2Component_app_rq2_33_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-rq2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("value", function Page2Component_app_rq2_33_Template_app_rq2_value_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.valuethesoon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class Page2Component {
    constructor(dataService) {
        this.dataService = dataService;
        this.value = 0;
    }
    ngOnInit() {
        // service for detect click in navbar for see login in card
        this.dataService.numberEnd$.subscribe(res => {
            this.value = 2;
        });
    }
    print() {
        this.value = 2;
    }
    valuethesoon(value) {
        this.value = value;
    }
    register() {
        this.value = 3;
    }
    requisitos() {
        this.value = 4;
    }
}
Page2Component.ɵfac = function Page2Component_Factory(t) { return new (t || Page2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
Page2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: Page2Component, selectors: [["app-page2"]], decls: 34, vars: 6, consts: [[1, "view", "full-page-intro", 2, "background-image", "url('../../../../assets/images/portada-vehiculos.jpg')", "background-repeat", "no-repeat", "background-size", "cover"], [1, "mask", "rgba-black-light", "d-flex", "justify-content-center", "align-items-center"], [1, "container"], [1, "row", "wow", "fadeIn"], [1, "col-md-6", "col-xl-5", "white-text", "text-center", "text-md-left", "mtx"], [1, "display-4", "font-weight-bold"], [1, "hr-light"], [1, "mb-4", "d-none", "d-md-block"], ["type", "button", 1, "btn", "btn-indigo", "btn-lg", 3, "click"], [1, "lead", "mb0"], ["href", "https://www.simbogota.com.co/index.php/homepage/tramites/rda-registro-distrital-automotor/tramites-para-vehiculos-11/"], [1, "col-md-6", "col-xl-5", "mt-5"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "value", 4, "ngSwitchCase"], [3, "value"]], template: function Page2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Prestamos Sobre Vehiculos");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Colocas tu vehiculo como garantia");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Y en poco tiempo estudiamos tu solicitud ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "y desembolsamos el dinero en tu cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Page2Component_Template_a_click_16_listener() { return ctx.requisitos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Requisitos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Page2Component_Template_a_click_18_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Solicita Tu Prestamo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Solicite de");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "$4.000.000 hasta el 50% del avaluo de tu vehiculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "(Tramite Bajo Prenda Del Vehiculo)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, Page2Component_app_calc_vehiculo_29_Template, 1, 0, "app-calc-vehiculo", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, Page2Component_app_card_30_Template, 1, 0, "app-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, Page2Component_app_login_31_Template, 1, 0, "app-login", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, Page2Component_app_register_32_Template, 1, 0, "app-register", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, Page2Component_app_rq2_33_Template, 1, 0, "app-rq2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _shared_calc_vehiculo_calc_vehiculo_component__WEBPACK_IMPORTED_MODULE_1__.CalcVehiculoComponent, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _shared_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent, _shared_requisito_vehiculo_requisito_vehiculo_component__WEBPACK_IMPORTED_MODULE_5__.RequisitoVehiculoComponent], styles: [".mtx[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InBhZ2UyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10eHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8579:
/*!********************************************************!*\
  !*** ./src/app/landing/pages/page3/page3.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page3Component": () => (/* binding */ Page3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/data.service */ 2468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_calc_hipoteca_calc_hipoteca_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/calc-hipoteca/calc-hipoteca.component */ 7166);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/card/card.component */ 3949);
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/login/login.component */ 2282);
/* harmony import */ var _shared_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/register/register.component */ 8464);
/* harmony import */ var _shared_requisito_hipoteca_requisito_hipoteca_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/requisito-hipoteca/requisito-hipoteca.component */ 5459);








function Page3Component_app_calc_hipoteca_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-calc-hipoteca");
} }
function Page3Component_app_card_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-card");
} }
function Page3Component_app_login_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-login");
} }
function Page3Component_app_register_32_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-register", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("value", function Page3Component_app_register_32_Template_app_register_value_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.valuethesoon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function Page3Component_app_rq3_33_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-rq3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("value", function Page3Component_app_rq3_33_Template_app_rq3_value_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.valuethesoon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class Page3Component {
    constructor(dataService) {
        this.dataService = dataService;
        this.value = 0;
    }
    ngOnInit() {
        // service for detect click in navbar for see login in card
        this.dataService.numberEnd$.subscribe(res => {
            this.value = 2;
        });
    }
    print() {
        this.value = 2;
    }
    valuethesoon(value) {
        this.value = value;
    }
    register() {
        this.value = 3;
    }
    requisitos() {
        this.value = 4;
    }
}
Page3Component.ɵfac = function Page3Component_Factory(t) { return new (t || Page3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
Page3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: Page3Component, selectors: [["app-page3"]], decls: 34, vars: 6, consts: [[1, "view", "full-page-intro", 2, "background-image", "url('../../../../assets/images/portada-hipoteca1.jpg')", "background-repeat", "no-repeat", "background-size", "cover"], [1, "mask", "rgba-black-light", "d-flex", "justify-content-center", "align-items-center"], [1, "container"], [1, "row", "wow", "fadeIn"], [1, "col-md-6", "col-xl-5", "white-text", "text-center", "text-md-left", "mtx"], [1, "display-4", "font-weight-bold"], [1, "hr-light"], [1, "mb-4", "d-none", "d-md-block"], ["type", "button", 1, "btn", "btn-indigo", "btn-lg", 3, "click"], [1, "lead", "mb0"], [1, "col-md-6", "col-xl-5", "mt-5"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "value", 4, "ngSwitchCase"], [3, "value"]], template: function Page3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Prestamos Sobre Hipoteca");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Una prestamo pensado para ti, f\u00E1cil de usar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Encontrar\u00E1s respuesta a tu solicitud de cr\u00E9dito en l\u00EDnea en 48 horas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Page3Component_Template_a_click_14_listener() { return ctx.requisitos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Requisitos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Page3Component_Template_a_click_16_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Solicita Tu Prestamo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Te Prestamos Desde");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "$20.000.000 hasta $500.000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "(Te prestamos hasta el 50% del avaluo de tu inmueble )");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "(De 1 Hasta 180 Meses )");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, Page3Component_app_calc_hipoteca_29_Template, 1, 0, "app-calc-hipoteca", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, Page3Component_app_card_30_Template, 1, 0, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, Page3Component_app_login_31_Template, 1, 0, "app-login", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, Page3Component_app_register_32_Template, 1, 0, "app-register", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, Page3Component_app_rq3_33_Template, 1, 0, "app-rq3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _shared_calc_hipoteca_calc_hipoteca_component__WEBPACK_IMPORTED_MODULE_1__.CalcHipotecaComponent, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _shared_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent, _shared_requisito_hipoteca_requisito_hipoteca_component__WEBPACK_IMPORTED_MODULE_5__.RequisitoHipotecaComponent], styles: [".mtx[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InBhZ2UzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10eHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 185:
/*!********************************************************!*\
  !*** ./src/app/landing/pages/page4/page4.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page4Component": () => (/* binding */ Page4Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/data.service */ 2468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_calc_construccion_calc_construccion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/calc-construccion/calc-construccion.component */ 4902);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/card/card.component */ 3949);
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/login/login.component */ 2282);
/* harmony import */ var _shared_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/register/register.component */ 8464);
/* harmony import */ var _shared_requisito_construccion_requisito_construccion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/requisito-construccion/requisito-construccion.component */ 6235);








function Page4Component_app_calc_construccion_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-calc-construccion");
} }
function Page4Component_app_card_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-card");
} }
function Page4Component_app_login_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-login");
} }
function Page4Component_app_register_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-register", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("value", function Page4Component_app_register_29_Template_app_register_value_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.valuethesoon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function Page4Component_app_rq4_30_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-rq4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("value", function Page4Component_app_rq4_30_Template_app_rq4_value_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.valuethesoon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class Page4Component {
    constructor(dataService) {
        this.dataService = dataService;
        this.value = 0;
    }
    ngOnInit() {
        // service for detect click in navbar for see login in card
        this.dataService.numberEnd$.subscribe(res => {
            this.value = 2;
        });
    }
    print() {
        this.value = 2;
    }
    valuethesoon(value) {
        this.value = value;
    }
    register() {
        this.value = 3;
    }
    requisitos() {
        this.value = 4;
    }
}
Page4Component.ɵfac = function Page4Component_Factory(t) { return new (t || Page4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
Page4Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: Page4Component, selectors: [["app-page4"]], decls: 31, vars: 6, consts: [[1, "view", "full-page-intro", 2, "background-image", "url('../../../../assets/images/portada-construccion2.jpg')", "background-repeat", "no-repeat", "background-size", "cover"], [1, "mask", "rgba-black-light", "d-flex", "justify-content-center", "align-items-center"], [1, "container"], [1, "row", "wow", "fadeIn"], [1, "col-md-6", "col-xl-5", "white-text", "text-center", "text-md-left", "mtx"], [1, "display-4", "font-weight-bold"], [1, "hr-light"], [1, "mb-4", "d-none", "d-md-block"], ["type", "button", 1, "btn", "btn-indigo", "btn-lg", 3, "click"], [1, "lead", "mb0"], [1, "col-md-6", "col-xl-5", "mt-5"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "value", 4, "ngSwitchCase"], [3, "value"]], template: function Page4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Prestamos Para Construcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Un prestamo para desarrollar tu proyecto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Encontrar\u00E1s respuesta a tu solicitud de cr\u00E9dito en l\u00EDnea en poco tiempo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Page4Component_Template_a_click_14_listener() { return ctx.requisitos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Requisitos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Page4Component_Template_a_click_16_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Solicita Tu Prestamo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Solicite desde");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "$100.000.000 hasta $700.000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "(Te ayudamos con todos los insumos para tu construccion )");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, Page4Component_app_calc_construccion_26_Template, 1, 0, "app-calc-construccion", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, Page4Component_app_card_27_Template, 1, 0, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, Page4Component_app_login_28_Template, 1, 0, "app-login", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, Page4Component_app_register_29_Template, 1, 0, "app-register", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, Page4Component_app_rq4_30_Template, 1, 0, "app-rq4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _shared_calc_construccion_calc_construccion_component__WEBPACK_IMPORTED_MODULE_1__.CalcConstruccionComponent, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _shared_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent, _shared_requisito_construccion_requisito_construccion_component__WEBPACK_IMPORTED_MODULE_5__.RequisitoConstruccionComponent], styles: [".mtx[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2U0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InBhZ2U0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10eHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1622:
/*!********************************************************!*\
  !*** ./src/app/landing/pages/page5/page5.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page5Component": () => (/* binding */ Page5Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/data.service */ 2468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_calc_calc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/calc/calc.component */ 9505);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/card/card.component */ 3949);
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/login/login.component */ 2282);
/* harmony import */ var _shared_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/register/register.component */ 8464);
/* harmony import */ var _shared_requisito_personal_requisito_personal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/requisito-personal/requisito-personal.component */ 3506);








function Page5Component_app_calc_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-calc");
} }
function Page5Component_app_card_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-card");
} }
function Page5Component_app_login_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-login");
} }
function Page5Component_app_register_36_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-register", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("value", function Page5Component_app_register_36_Template_app_register_value_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.valuethesoon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function Page5Component_app_rq1_37_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-rq1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("value", function Page5Component_app_rq1_37_Template_app_rq1_value_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.valuethesoon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class Page5Component {
    constructor(dataService) {
        this.dataService = dataService;
        this.value = 0;
    }
    ngOnInit() {
        // service for detect click in navbar for see login in card
        this.dataService.numberEnd$.subscribe(res => {
            this.value = 2;
        });
    }
    print() {
        this.value = 2;
    }
    valuethesoon(value) {
        this.value = value;
    }
    register() {
        this.value = 3;
    }
    requisitos() {
        this.value = 4;
    }
}
Page5Component.ɵfac = function Page5Component_Factory(t) { return new (t || Page5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
Page5Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: Page5Component, selectors: [["app-page5"]], decls: 38, vars: 6, consts: [[1, "view", "full-page-intro", 2, "background-image", "url('../../../../assets/images/portada-invierte.jpg')", "background-repeat", "no-repeat", "background-size", "cover"], [1, "mask", "rgba-black-light", "d-flex", "justify-content-center", "align-items-center"], [1, "container"], [1, "row", "wow", "fadeIn"], [1, "col-md-6", "col-xl-5", "white-text", "text-center", "text-md-left", "mtx"], [1, "display-4", "font-weight-bold"], [1, "hr-light"], [1, "mb-4", "d-none", "d-md-block"], [1, "lead", "mb0"], ["href", "https://api.whatsapp.com/send?phone=3174237229"], [1, "fab", "fa-whatsapp", "fa-2x"], [1, "col-md-6", "col-xl-5", "mt-5"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "value", 4, "ngSwitchCase"], [3, "value"]], template: function Page5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Invierte Ya");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Coloca tu dinero a trabajar por ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Ingresa a nuestra plataforma y conoce las ofertas de inversi\u00F3n que tenemos para ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Te ayudamospara que tengas libertad financiera");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Invierte Desde");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "$500.000 hasta $100.000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "(Garantizamos tu dinero )");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Contactanos Por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " O Llena El Formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, Page5Component_app_calc_33_Template, 1, 0, "app-calc", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, Page5Component_app_card_34_Template, 1, 0, "app-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, Page5Component_app_login_35_Template, 1, 0, "app-login", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, Page5Component_app_register_36_Template, 1, 0, "app-register", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, Page5Component_app_rq1_37_Template, 1, 0, "app-rq1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _shared_calc_calc_component__WEBPACK_IMPORTED_MODULE_1__.CalcComponent, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _shared_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent, _shared_requisito_personal_requisito_personal_component__WEBPACK_IMPORTED_MODULE_5__.RequisitoPersonalComponent], styles: [".mtx[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2U1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InBhZ2U1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10eHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3629:
/*!********************************************************************!*\
  !*** ./src/app/landing/pages/quick-forms/quick-forms.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickFormsComponent": () => (/* binding */ QuickFormsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth/services/auth.service */ 6518);
/* harmony import */ var _dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dashboard/services/request.service */ 6224);
/* harmony import */ var _dashboard_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dashboard/services/user.service */ 9875);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3166);














function QuickFormsComponent_div_10_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r13);
} }
function QuickFormsComponent_div_10_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.getError("numdoc"), " ");
} }
function QuickFormsComponent_div_10_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.getError("fechaNac"), " ");
} }
function QuickFormsComponent_div_10_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.getError("fechaExp"), " ");
} }
function QuickFormsComponent_div_10_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.getError("ciudad"), " ");
} }
function QuickFormsComponent_div_10_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r7.getError("direccion"), " ");
} }
function QuickFormsComponent_div_10_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.getError("celular1"), " ");
} }
function QuickFormsComponent_div_10_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r9.getError("celular2"), " ");
} }
function QuickFormsComponent_div_10_mat_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r14);
} }
function QuickFormsComponent_div_10_mat_option_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r15);
} }
function QuickFormsComponent_div_10_mat_error_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r12.getError("numcuenta"), " ");
} }
function QuickFormsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Escoge...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, QuickFormsComponent_div_10_mat_option_6_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Tipo de Documento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Numero De Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, QuickFormsComponent_div_10_mat_error_16_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Fecha De Nacimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, QuickFormsComponent_div_10_mat_error_22_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Fecha De Expedicion De La Cedula");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, QuickFormsComponent_div_10_mat_error_27_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Ciudad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, QuickFormsComponent_div_10_mat_error_32_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Direccion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, QuickFormsComponent_div_10_mat_error_38_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Celular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "(10-Digitos)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, QuickFormsComponent_div_10_mat_error_45_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Celular Alternativo \"Opcional\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, QuickFormsComponent_div_10_mat_error_50_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Escoge...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, QuickFormsComponent_div_10_mat_option_56_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "account_balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, " Banco");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Escoge...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, QuickFormsComponent_div_10_mat_option_66_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "account_balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, " Tipo De Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Numero De Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, QuickFormsComponent_div_10_mat_error_76_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuickFormsComponent_div_10_Template_a_click_77_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.segundaparte(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Siguiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.tiposIdentificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.campoEsValido("numdoc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.campoEsValido("fechaNac"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.campoEsValido("fechaExp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.campoEsValido("ciudad"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.campoEsValido("direccion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.campoEsValido("celular1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.campoEsValido("celular2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.bancos);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.tipocuenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.campoEsValido("numcuenta"));
} }
function QuickFormsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Hola mundo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class QuickFormsComponent {
    constructor(fb, router, authService, requestService, userService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.requestService = requestService;
        this.userService = userService;
        this.tiposIdentificacion = [
            'Cedula De Ciudadania',
            'Cedula De Extranjeria',
        ];
        this.tipocuenta = ['Cuenta De Ahorros', 'Cuenta Corriente'];
        this.bancos = [
            'Banco de Bogota',
            'Banco Popular',
            'Banco CorpBanca',
            'Bancolombia',
            'Citibank',
            'Banco GNB Sudameris',
            'BBVA Colombia',
            'Banco De Occidente',
            'Banco Caja Social',
            'Davivienda',
            'Scotiabanck',
            'Banagrario',
            'AV Villas',
            'Scotiabank',
        ];
        this.usuarios = [];
        this.usuario = [];
        this.hayerror = false;
        this.ids = '';
        this.primerform = true;
        this.segundoform = false;
        this.tercerform = false;
        this.numdoc = 0;
        this.miFormulario = this.fb.group({
            tipodoc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
            fechaNac: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            fechaExp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            pais: [''],
            departamento: [''],
            barrio: [''],
            ciudad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)]],
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
            numdoc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)]],
            celular1: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(999999999),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(9999999999),
                ],
            ],
            celular2: '',
            banco: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            tipocuenta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
            numcuenta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)]],
        });
    }
    get usuarioauth() {
        return this.authService.usuario;
    }
    ngOnInit() {
        this.authService.validarToken().subscribe((resp) => {
            this.userService.getUserById(this.usuarioauth.uid).subscribe((res) => {
                this.usuario = res;
                this.numdoc = this.usuario.personal.numdoc;
            });
        });
    }
    getError(campo) {
        var _a, _b, _c, _d, _e, _f;
        let message = '';
        if ((_a = this.miFormulario.get(campo)) === null || _a === void 0 ? void 0 : _a.hasError('required')) {
            message = 'Porfavor llene este Campo';
        }
        else if ((_b = this.miFormulario.get(campo)) === null || _b === void 0 ? void 0 : _b.hasError('minlength')) {
            const minLength = (_d = (_c = this.miFormulario.get(campo)) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.minlength.requiredLength;
            message = `Debe Tener mas mas de ${minLength} letras`;
        }
        else if ((_e = this.miFormulario.get(campo)) === null || _e === void 0 ? void 0 : _e.hasError('min')) {
            message = `NO ES UN NUMERO DE TELEFONO VALIDO`;
        }
        else if ((_f = this.miFormulario.get(campo)) === null || _f === void 0 ? void 0 : _f.hasError('max')) {
            message = `NO ES UN NUMERO DE TELEFONO VALIDO`;
        }
        return message;
    }
    campoEsValido(campo) {
        var _a, _b, _c;
        return ((((_a = this.miFormulario.get(campo)) === null || _a === void 0 ? void 0 : _a.touched) ||
            ((_b = this.miFormulario.get(campo)) === null || _b === void 0 ? void 0 : _b.dirty)) &&
            ((_c = this.miFormulario.get(campo)) === null || _c === void 0 ? void 0 : _c.invalid));
    }
    segundaparte() {
        console.log(this.usuarioauth);
        //this.primerform = false;
        //this.segundoform = true;
    }
    guardar() {
        if (!this.usuarioauth.uid) {
            this.ids = localStorage.getItem('id');
        }
        if (this.miFormulario.invalid) {
            this.miFormulario.markAllAsTouched();
            console.log('Formulario no válido');
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Error',
                text: 'Formulario no válido',
                icon: 'error',
            });
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Espere',
            text: 'Guardando Informacion',
            allowOutsideClick: false,
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
        const { tipodoc, fechaNac, fechaExp, pais, departamento, ciudad, barrio, direccion, numdoc, celular1, celular2, banco, tipocuenta, numcuenta, } = this.miFormulario.value;
        if (this.usuarioauth.uid) {
            this.userService.updateUserByIdX(this.usuarioauth.uid, tipodoc, fechaNac, fechaExp, 'Colombia', '', ciudad, '', direccion, numdoc, celular1, celular2, banco, tipocuenta, numcuenta)
                .subscribe((resp) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'OK',
                    text: 'Datos Enviados',
                    icon: 'success',
                });
                this.primerform = false;
                this.segundoform = true;
                // this.requestService.updateRequestsByIdNumdoc(this.usuarioauth.solicitud as string, numdoc as string)
                // .subscribe(x => console.log('ok'));
                // this.router.navigateByUrl('/dashboard/misolicitud');
            }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Error',
                    text: 'Formulario no válido',
                    icon: 'error',
                });
            });
        }
    }
}
QuickFormsComponent.ɵfac = function QuickFormsComponent_Factory(t) { return new (t || QuickFormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dashboard_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService)); };
QuickFormsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: QuickFormsComponent, selectors: [["app-quick-forms"]], decls: 17, vars: 4, consts: [[1, "pepe"], [1, "main-content"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "title"], [1, "card-body"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [4, "ngIf"], [1, "form-group", "d-flex", "h-100"], [1, "align-self-end", "ml-auto"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "fa", "fa-save"], ["appearance", "fill", 1, "form-group", "col-md-6"], ["formControlName", "tipodoc"], ["selected", "", "disabled", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "col-md-6", "pl-1"], ["matInput", "", "formControlName", "numdoc", "type", "number", 1, "form-control"], [1, "form-group", "col-md-4", "pl-1"], ["matInput", "", "formControlName", "fechaNac", "type", "date", 1, "form-control"], ["matInput", "", "formControlName", "fechaExp", "type", "date", 1, "form-control"], ["matInput", "", "formControlName", "ciudad", "type", "text", 1, "form-control"], ["matInput", "", "formControlName", "direccion", "type", "text", 1, "form-control"], [1, "form-group", "col-md-4"], ["matInput", "", "formControlName", "celular1", "type", "number", 1, "form-control"], ["matInput", "", "formControlName", "celular2", "type", "number", 1, "form-control"], ["appearance", "fill", 1, "form-group", "col-md-4"], ["formControlName", "banco"], ["formControlName", "tipocuenta"], ["matInput", "", "formControlName", "numcuenta", "type", "number", 1, "form-control"], [3, "click"], [3, "value"]], template: function QuickFormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Informacion Basica");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function QuickFormsComponent_Template_form_ngSubmit_9_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, QuickFormsComponent_div_10_Template, 79, 11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, QuickFormsComponent_div_11_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Siguiente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.miFormulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.primerform);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.segundoform);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.miFormulario.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError], styles: ["h5[_ngcontent-%COMP%] {\n  font-size: 150%;\n  font-weight: 700;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 150%;\n  font-weight: 700;\n}\n\n@media (min-width: 280px) {\n  mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 25vw;\n    height: 12vh;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    margin-top: 5vh;\n    margin-left: 24%;\n    overflow: auto;\n  }\n}\n\n@media (min-width: 576px) {\n  mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 18vw;\n    height: 12vh;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    margin-top: 5vh;\n    margin-left: 34%;\n    overflow: auto;\n  }\n}\n\n@media (min-width: 768px) {\n  mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20vw;\n    height: 10vh;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    margin-top: 10vh;\n    margin-left: 3%;\n    margin-right: 18%;\n    overflow: auto;\n  }\n}\n\n@media (min-width: 900px) {\n  mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 18vw;\n    height: 12vh;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    margin-top: 2vh;\n    margin-left: 5%;\n    margin-right: 15%;\n    overflow: auto;\n  }\n}\n\n@media (min-width: 1170px) {\n  mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10vw;\n    height: 18h;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    margin-top: 8vh;\n    margin-left: 19%;\n    overflow: auto;\n  }\n}\n\n@media (min-width: 1350px) {\n  mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10vw;\n    height: 20vh;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    margin-top: 8vh;\n    margin-left: 23%;\n    overflow: auto;\n  }\n}\n\n.col-md-4[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n  text-align: center;\n}\n\nmat-card-header[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-image: url('bg5.jpg');\n  height: 24%;\n  margin-bottom: 10%;\n}\n\nmat-card-subtitle[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%] {\n  font-size: 100%;\n}\n\n.pepe[_ngcontent-%COMP%] {\n  height: 35%;\n  background-image: url('quickloan-unsplash.jpg');\n  background-size: 100%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aWNrLWZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUVFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQURGO0FBQ0Y7O0FBS0E7RUFFRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUFKRjtBQUNGOztBQVFBO0VBRUU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUFQRjtBQUNGOztBQVdBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQVRGO0FBQ0Y7O0FBWUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUFWRjtBQUNGOztBQWNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBWkY7QUFDRjs7QUFlQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWJGOztBQWdCQTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFiRjs7QUFnQkE7O0VBRUUsZUFBQTtBQWJGOztBQWlCQTtFQUNFLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLHFCQUFBO0FBZEY7O0FBZ0JBO0VBQ0UsZUFBQTtBQWJGIiwiZmlsZSI6InF1aWNrLWZvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUge1xyXG4gIGZvbnQtc2l6ZTogMTUwJTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5cclxuaDJ7XHJcbiAgZm9udC1zaXplOiAxNTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAyODBweCkge1xyXG5cclxuICBtYXQtY2FyZC1oZWFkZXIgaW1nIHtcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgaGVpZ2h0OiAxMnZoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcblxyXG4gIG1hdC1jYXJkLWhlYWRlciBpbWcge1xyXG4gICAgd2lkdGg6IDE4dnc7XHJcbiAgICBoZWlnaHQ6IDEydmg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM0JTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gIG1hdC1jYXJkLWhlYWRlciBpbWcge1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTglO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgOTAwcHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICBtYXQtY2FyZC1oZWFkZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxOHZ3O1xyXG4gICAgaGVpZ2h0OiAxMnZoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMTcwcHgpIHtcclxuICBtYXQtY2FyZC1oZWFkZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgaGVpZ2h0OiAxOGg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogOHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5JTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMzUwcHgpIHtcclxuICBtYXQtY2FyZC1oZWFkZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDh2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMyU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5jb2wtbWQtNCB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iZzUuanBnXCIpO1xyXG4gIGhlaWdodDogMjQlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxubWF0LWNhcmQtc3VidGl0bGUsXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ucGVwZXtcclxuICBoZWlnaHQ6IDM1JTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3F1aWNrbG9hbi11bnNwbGFzaC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG59XHJcbi50aXR1bG97XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9942:
/*!****************************************************************!*\
  !*** ./src/app/landing/pages/quickloan/quickloan.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickloanComponent": () => (/* binding */ QuickloanComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data.service */ 2468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_calc_quickloan_calc_quickloan_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/calc-quickloan/calc-quickloan.component */ 876);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/card/card.component */ 3949);
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/login/login.component */ 2282);
/* harmony import */ var _shared_register_quickloan_register_quickloan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/register-quickloan/register-quickloan.component */ 5993);
/* harmony import */ var _shared_requisito_quickloan_requisito_quickloan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/requisito-quickloan/requisito-quickloan.component */ 5384);








function QuickloanComponent_app_calc_quickloan_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-calc-quickloan");
} }
function QuickloanComponent_app_card_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-card");
} }
function QuickloanComponent_app_login_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-login");
} }
function QuickloanComponent_app_register_quickloan_41_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-register-quickloan", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("value", function QuickloanComponent_app_register_quickloan_41_Template_app_register_quickloan_value_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.valuethesoon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuickloanComponent_app_requisito_quickloan_42_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-requisito-quickloan", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("value", function QuickloanComponent_app_requisito_quickloan_42_Template_app_requisito_quickloan_value_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.valuethesoon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class QuickloanComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.value = 0;
    }
    ngOnInit() {
        // service for detect click in navbar for see login in card
        this.dataService.numberEnd$.subscribe(res => {
            this.value = 2;
        });
    }
    print() {
        this.value = 2;
    }
    valuethesoon(value) {
        this.value = value;
    }
    register() {
        this.value = 3;
    }
    login() {
        this.value = 2;
    }
    requisitos() {
        this.value = 4;
    }
}
QuickloanComponent.ɵfac = function QuickloanComponent_Factory(t) { return new (t || QuickloanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
QuickloanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: QuickloanComponent, selectors: [["app-quickloan"]], inputs: { value: "value" }, decls: 43, vars: 6, consts: [[1, "view", "full-page-intro", 2, "background-image", "url('../../../../assets/images/quickloan-unsplash.jpg')", "background-repeat", "no-repeat", "background-size", "cover"], [1, "mask", "rgba-black-light", "d-flex", "justify-content-center", "align-items-center"], [1, "container"], [1, "row", "wow", "fadeIn"], [1, "col-md-6", "col-xl-5", "white-text", "text-center", "text-md-left", "mtx"], [1, "display-4", "font-weight-bold"], [1, "hr-light"], [1, "mb-4", "d-none", "d-md-block"], ["type", "button", 1, "btn", "btn-indigo", "btn-lg", 3, "click"], [1, "lead", "mb0"], [1, "col-md-6", "col-xl-5", "mt-5"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "value", 4, "ngSwitchCase"], [3, "value"]], template: function QuickloanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Prestamos Ultra Rapidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Una prestamo pensado para ti, f\u00E1cil de usar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Desembolsamos en menos de 24 horas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Solicitud en minutos y aprobaci\u00F3n en segundos");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Sin papeleos ni traslados");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Podr\u00E1s realizar pagos anticipados");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "de cuotas o saldos de forma total o parcial.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QuickloanComponent_Template_a_click_25_listener() { return ctx.requisitos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Requisitos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QuickloanComponent_Template_a_click_27_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Solicita Tu Prestamo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Solicite de");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "$200.000 hasta $750.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "(Plazo De 1 Mes) Extendible Hasta 6 Meses");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, QuickloanComponent_app_calc_quickloan_38_Template, 1, 0, "app-calc-quickloan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, QuickloanComponent_app_card_39_Template, 1, 0, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, QuickloanComponent_app_login_40_Template, 1, 0, "app-login", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, QuickloanComponent_app_register_quickloan_41_Template, 1, 0, "app-register-quickloan", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, QuickloanComponent_app_requisito_quickloan_42_Template, 1, 0, "app-requisito-quickloan", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _shared_calc_quickloan_calc_quickloan_component__WEBPACK_IMPORTED_MODULE_1__.CalcQuickloanComponent, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _shared_register_quickloan_register_quickloan_component__WEBPACK_IMPORTED_MODULE_4__.RegisterQuickloanComponent, _shared_requisito_quickloan_requisito_quickloan_component__WEBPACK_IMPORTED_MODULE_5__.RequisitoQuickloanComponent], styles: [".mtx[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aWNrbG9hbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJxdWlja2xvYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXR4e1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class DataService {
    constructor() {
        this.number = 2;
        this.numberx = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.numberEnd$ = this.numberx.asObservable();
    }
    viewLogin() {
        this.numberx.next();
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4902:
/*!*************************************************************************!*\
  !*** ./src/app/shared/calc-construccion/calc-construccion.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcConstruccionComponent": () => (/* binding */ CalcConstruccionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _dashboard_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/services/product.service */ 1053);
/* harmony import */ var _dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard/services/request.service */ 6224);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ 4436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);







function CalcConstruccionComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r1.valorSolicitado, "1.0-0"), " pesos");
} }
function CalcConstruccionComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r2.valorSolicitado, "1.0-0"), " millones");
} }
function CalcConstruccionComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r3.plazo, " meses");
} }
function CalcConstruccionComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.plazo, " mes");
} }
function CalcConstruccionComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Inter\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r5.soloInteres, "1.0-0"), "");
} }
function CalcConstruccionComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tasa E.A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r6.iEfectivoAnual, "0.1-4"), " %");
} }
function CalcConstruccionComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tasa Mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r7.iMesVencido, "0.1-4"), " %");
} }
function CalcConstruccionComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Aval");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r8.aval, "1.0-0"), "");
} }
function CalcConstruccionComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r9.totalCredito, "1.0-0"), "");
} }
class CalcConstruccionComponent {
    constructor(fb, productService, requestService) {
        this.fb = fb;
        this.productService = productService;
        this.requestService = requestService;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.productos = [];
        this.idProduct = '';
        this.nombre = '';
        this.valorSolicitado = 0;
        this.plazo = 0;
        this.iMesVencido = 0;
        this.iEfectivoAnual = 0;
        this.iEfectivoAnualMax = 0;
        this.iMoraEfectivoAnual = 0;
        this.soloInteres = 0;
        this.valorCuotaBase = 0;
        this.administracion = 0;
        this.administracionp = 0;
        this.iva = 0;
        this.ivap = 0;
        this.aval = 0;
        this.avalp = 0;
        this.valuemin = 0;
        this.valuemax = 0;
        this.termmin = 0;
        this.termmax = 0;
        this.totalCredito = 0;
        this.totalPersonal = 0;
        this.parqueadero = 0;
        this.peritaje = 0;
        this.registroSimit = 0;
        this.gmfCuatroxMil = 0;
        this.valorgmf = 0;
        this.step = 0;
        this.comisionAdminHipo = 0;
        this.comisionAdminHipo1 = 0;
        this.excedenteComisionAdminHipo = 0;
        this.registroHipoteca = 0;
        this.interesesAnticipadosp = 0;
        this.interesesAnticipados = 0;
        this.valorConsignar = 0;
        this.valorCuotaTotal = 0;
        this.formularioSolicitud = this.fb.group({
            idUser: [''],
            idProduct: [''],
            value: [0],
            time: [0],
            description: ['Ninguno'],
            estate: ['Pendiente'],
            regInmueble: [false],
            regPersonales: [false],
            regVehiculo: [false],
            regTrabajo: [false],
            regReferencias: [false],
            regReferenciasCom: [false],
            regCedula: [false],
            regPasaporte: [false],
            regTarjetav: [false],
            regMatricula: [false],
            regExtracto: [false],
            nombreProducto: [this.nombre],
            tasaEfectivaMes: [this.iMesVencido],
            tasaEfectivaAnual: [this.iEfectivoAnual],
            tasaEfectivaAnualMax: [this.iEfectivoAnualMax],
            tasaMoraEA: [this.iMoraEfectivoAnual],
            rcomisionAdminHipo: [this.comisionAdminHipo1],
            rregistroHipoteca: [this.registroHipoteca],
            rinteresesAnticipados: [this.interesesAnticipados],
            rparqueadero: [this.parqueadero],
            rperitaje: [this.peritaje],
            rregistroSimit: [this.registroSimit],
            rgmf: [this.valorgmf],
            valorConsignar: [this.valorConsignar],
            valorCuotaBase: [this.valorCuotaBase],
            administracion: [this.administracion],
            iva: [this.iva],
            soloInteres: [this.soloInteres],
            aval: [this.aval],
            totalCredito: [this.totalCredito],
            valorCuotaTotal: [this.valorCuotaTotal]
        });
    }
    ngOnInit() {
        var _a, _b;
        this.productService.getProducts().subscribe((resp) => {
            this.productos = resp;
            this.productos.forEach(element => {
                if (element.name === 'Prestamo Para Construcción') {
                    this.idProduct = element._id;
                    this.productService.getProductById(element._id).subscribe((producto) => {
                        // Reset Valores
                        this.parqueadero = 0;
                        this.peritaje = 0;
                        this.registroSimit = 0;
                        this.gmfCuatroxMil = 0;
                        this.totalPersonal = 0;
                        this.comisionAdminHipo = 0;
                        this.comisionAdminHipo1 = 0;
                        this.excedenteComisionAdminHipo = 0;
                        this.registroHipoteca = 0;
                        this.interesesAnticipados = 0;
                        this.interesesAnticipadosp = 0;
                        this.administracion = 0;
                        this.administracionp = 0;
                        this.aval = 0;
                        this.avalp = 0;
                        this.totalCredito = 0;
                        this.soloInteres = 0;
                        this.valorCuotaTotal = 0;
                        this.valorgmf = 0;
                        // Fin Reset Valores
                        // this.producto = producto;
                        this.nombre = producto.name;
                        this.iEfectivoAnual = producto.iEfectivoAnual;
                        this.iMesVencido = ((((Math.pow((1 + (producto.iEfectivoAnual / 100)), (1 / 12))) - 1) * 12) * 100) / 12;
                        this.iEfectivoAnualMax = producto.iEfectivoAnualMax;
                        this.iMoraEfectivoAnual = producto.iMoraEfectivoAnual;
                        this.valuemin = producto.valuemin;
                        this.valuemax = producto.valuemax;
                        this.termmin = producto.termmin;
                        this.termmax = producto.termmax;
                        this.valorSolicitado = producto.valuemin;
                        this.plazo = producto.termmin;
                        this.step = producto.step;
                        this.administracion = producto.administracion;
                        this.administracionp = producto.administracion;
                        this.ivap = producto.iva;
                        this.iva = (this.administracion / 100) * this.ivap;
                        if (producto.aval) {
                            this.avalp = producto.aval;
                            this.aval = (this.valorSolicitado / 100) * this.avalp;
                        }
                        if (producto.parqueadero) {
                            this.parqueadero = producto.parqueadero;
                        }
                        if (producto.peritaje) {
                            this.peritaje = producto.peritaje;
                        }
                        if (producto.registroSimit) {
                            this.registroSimit = producto.registroSimit;
                        }
                        if (producto.gmfCuatroxMil) {
                            this.gmfCuatroxMil = producto.gmfCuatroxMil;
                            this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
                        }
                        if (producto.comisionAdminHipo) {
                            this.comisionAdminHipo = producto.comisionAdminHipo;
                        }
                        if (producto.excedenteComisionAdminHipo) {
                            this.excedenteComisionAdminHipo = producto.excedenteComisionAdminHipo;
                        }
                        if (producto.registroHipoteca) {
                            this.registroHipoteca = producto.registroHipoteca;
                        }
                        if (producto.interesesAnticipados) {
                            this.interesesAnticipadosp = producto.interesesAnticipados;
                            this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
                        }
                        this.formularioSolicitud.patchValue({ value: producto.valuemin });
                        this.formularioSolicitud.patchValue({ time: producto.termmin });
                        if (this.nombre === 'Prestamo Personal') {
                            this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                            this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                            this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                            this.totalCredito = this.valorCuotaBase + this.administracion + this.iva + this.aval;
                        }
                        else {
                            this.soloInteres = 0;
                            this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
                            this.totalCredito = 0;
                        }
                        this.valorConsignar =
                            this.valorSolicitado -
                                (this.valorgmf +
                                    this.registroSimit +
                                    this.peritaje +
                                    this.comisionAdminHipo1 +
                                    this.registroHipoteca +
                                    this.interesesAnticipados);
                    });
                }
            });
        });
        (_a = this.formularioSolicitud.get('value')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((value) => {
            this.valorSolicitado = value;
            var im = this.iMesVencido / 100;
            var im2 = Math.pow((1 + im), -(this.plazo));
            const a = (this.valorSolicitado * im) / (1 - im2);
            this.valorCuotaBase = a;
            // this.valorCuotaBase = a.toFixed(2);
            if (this.comisionAdminHipo !== 0 && this.valorSolicitado > 50000000 && this.comisionAdminHipo !== 0) {
                let diferencia = ((this.valorSolicitado - 50000000) / 1000000) * this.excedenteComisionAdminHipo;
                this.comisionAdminHipo1 = this.comisionAdminHipo + diferencia;
            }
            else if (this.comisionAdminHipo !== 0) {
                this.comisionAdminHipo1 = 2000000;
            }
            this.aval = (this.valorSolicitado / 100) * this.avalp;
            this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
            if (this.nombre === 'Prestamo Personal') {
                this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
                this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
            }
            else {
                this.soloInteres = 0;
                this.totalCredito = 0;
                this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
            }
            this.valorConsignar =
                this.valorSolicitado -
                    (this.registroSimit +
                        this.peritaje +
                        this.valorgmf +
                        this.comisionAdminHipo1 +
                        this.registroHipoteca +
                        this.interesesAnticipados);
        });
        (_b = this.formularioSolicitud.get('time')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((time) => {
            this.plazo = time;
            this.administracion = this.administracionp;
            if (this.nombre === 'Prestamo Personal') {
                this.administracion = this.administracion * this.plazo;
                this.iva = (this.administracion / 100) * this.ivap;
            }
            var im = this.iMesVencido / 100;
            var im2 = Math.pow((1 + im), -(this.plazo));
            let a = (this.valorSolicitado * im) / (1 - im2);
            this.valorCuotaBase = a;
            if (this.nombre === 'Prestamo Personal') {
                this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
            }
            else {
                this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
                this.soloInteres = 0;
                this.totalCredito = 0;
            }
        });
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
    formatLabel1(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
CalcConstruccionComponent.ɵfac = function CalcConstruccionComponent_Factory(t) { return new (t || CalcConstruccionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
CalcConstruccionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalcConstruccionComponent, selectors: [["app-calc-construccion"]], outputs: { value: "value" }, decls: 52, vars: 29, consts: [[1, "card", "x"], [1, "form", 3, "formGroup"], ["f", "ngForm"], [1, "card-body"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "mb10"], [1, "text-white", "mb20"], [1, "slider1"], [1, "text-white"], ["id", "pricipal-slide1"], ["thumbLabel", "", "tickInterval", "5", "name", "valorSolicitado", "formControlName", "value", 1, "min", 3, "displayWith", "step", "min", "max"], ["class", "text-white", 4, "ngIf"], [1, "slider"], ["id", "totalyear-slide"], ["formControlName", "time", "name", "plazo", "thumbLabel", "", "tickInterval", "1", 1, "max", 3, "displayWith", "min", "max"], ["class", "col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3", 4, "ngIf"], [1, "col-xl-3", "col-lg-3", "col-md-3", "col-sm-3", "col-3"], [1, "single-total"], [1, "text-white", "lead-cal-small-text"], ["id", "tbl_la", 1, "text-white"], ["id", "tbl_emi", 1, "text-white"], ["class", "col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4", 4, "ngIf"], [1, "col-xl-8", "col-lg-8", "col-md-8", "col-sm-8", "col-8"], ["id", "emi", 1, "text-white", "emi-price"], [1, "text-white", "emi-price"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-4"]], template: function CalcConstruccionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Obten Tu Prestamo Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cuanto Dinero Necesitas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CalcConstruccionComponent_span_15_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CalcConstruccionComponent_span_16_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "A Cuantos Meses Deseas El Prestamo?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-slider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CalcConstruccionComponent_span_24_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CalcConstruccionComponent_span_25_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CalcConstruccionComponent_div_26_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CalcConstruccionComponent_div_27_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CalcConstruccionComponent_div_28_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Iva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, CalcConstruccionComponent_div_43_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, CalcConstruccionComponent_div_44_Template, 7, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Cuota Mensual: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formularioSolicitud);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.formatLabel1)("step", ctx.step)("min", ctx.valuemin)("max", ctx.valuemax);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valorSolicitado > 1 && ctx.valorSolicitado < 1000000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valorSolicitado >= 1000000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.formatLabel)("min", ctx.termmin)("max", ctx.termmax);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plazo > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plazo <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.soloInteres > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.iEfectivoAnual > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.iMesVencido > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](35, 20, ctx.administracion, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](42, 23, ctx.iva, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.aval > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalCredito > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](51, 26, ctx.valorCuotaTotal, "1.0-0"), " pesos");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSlider, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  background-color: rgba(187, 181, 181, 0.233);\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb-label {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-track-fill {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb-label {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-track-fill {\n  background-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtY29uc3RydWNjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7QUFDRjs7QUFJQTtFQUVFLDRDQUFBO0VBQ0EsV0FBQTtBQUZGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0Usd0JBQUE7QUFIRjs7QUFNQTtFQUNFLHdCQUFBO0FBSEY7O0FBTUE7RUFDRSx3QkFBQTtBQUhGIiwiZmlsZSI6ImNhbGMtY29uc3RydWNjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA2LCA2LCAwLjQwNCk7XHJcblxyXG59XHJcblxyXG5cclxubWF0LXNsaWRlciB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAxODEsIDE4MSwgMC4yMzMpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5taW4gLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWluIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1pbiAubWF0LXNsaWRlci10cmFjay1maWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1heCAubWF0LXNsaWRlci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1heCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1heCAubWF0LXNsaWRlci10cmFjay1maWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7166:
/*!*****************************************************************!*\
  !*** ./src/app/shared/calc-hipoteca/calc-hipoteca.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcHipotecaComponent": () => (/* binding */ CalcHipotecaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _dashboard_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/services/product.service */ 1053);
/* harmony import */ var _dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard/services/request.service */ 6224);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ 4436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);







function CalcHipotecaComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r1.valorSolicitado, "1.0-0"), " pesos");
} }
function CalcHipotecaComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r2.valorSolicitado, "1.0-0"), " millones");
} }
function CalcHipotecaComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r3.plazo, " meses");
} }
function CalcHipotecaComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.plazo, " mes");
} }
function CalcHipotecaComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Inter\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r5.soloInteres, "1.0-0"), "");
} }
function CalcHipotecaComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tasa E.A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r6.iEfectivoAnual, "0.1-4"), " %");
} }
function CalcHipotecaComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tasa Mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r7.iMesVencido, "0.1-4"), " %");
} }
function CalcHipotecaComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Aval");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r8.aval, "1.0-0"), "");
} }
function CalcHipotecaComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r9.totalCredito, "1.0-0"), "");
} }
class CalcHipotecaComponent {
    constructor(fb, productService, requestService) {
        this.fb = fb;
        this.productService = productService;
        this.requestService = requestService;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.productos = [];
        this.idProduct = '';
        this.nombre = '';
        this.valorSolicitado = 0;
        this.plazo = 0;
        this.iMesVencido = 0;
        this.iEfectivoAnual = 0;
        this.iEfectivoAnualMax = 0;
        this.iMoraEfectivoAnual = 0;
        this.soloInteres = 0;
        this.valorCuotaBase = 0;
        this.administracion = 0;
        this.administracionp = 0;
        this.iva = 0;
        this.ivap = 0;
        this.aval = 0;
        this.avalp = 0;
        this.valuemin = 0;
        this.valuemax = 0;
        this.termmin = 0;
        this.termmax = 0;
        this.totalCredito = 0;
        this.totalPersonal = 0;
        this.parqueadero = 0;
        this.peritaje = 0;
        this.registroSimit = 0;
        this.gmfCuatroxMil = 0;
        this.auditorObra = 0;
        this.valorgmf = 0;
        this.valorauditorObra = 0;
        this.step = 0;
        this.comisionAdminHipo = 0;
        this.comisionAdminHipo1 = 0;
        this.excedenteComisionAdminHipo = 0;
        this.registroHipoteca = 0;
        this.interesesAnticipadosp = 0;
        this.interesesAnticipados = 0;
        this.valorConsignar = 0;
        this.valorCuotaTotal = 0;
        this.formularioSolicitud = this.fb.group({
            idUser: [''],
            idProduct: [''],
            value: [0],
            time: [0],
            description: ['Ninguno'],
            estate: ['Pendiente'],
            regInmueble: [false],
            regPersonales: [false],
            regVehiculo: [false],
            regTrabajo: [false],
            regReferencias: [false],
            regReferenciasCom: [false],
            regCedula: [false],
            regPasaporte: [false],
            regTarjetav: [false],
            regMatricula: [false],
            regExtracto: [false],
            nombreProducto: [this.nombre],
            tasaEfectivaMes: [this.iMesVencido],
            tasaEfectivaAnual: [this.iEfectivoAnual],
            tasaEfectivaAnualMax: [this.iEfectivoAnualMax],
            tasaMoraEA: [this.iMoraEfectivoAnual],
            rcomisionAdminHipo: [this.comisionAdminHipo1],
            rregistroHipoteca: [this.registroHipoteca],
            rinteresesAnticipados: [this.interesesAnticipados],
            rparqueadero: [this.parqueadero],
            rperitaje: [this.peritaje],
            rregistroSimit: [this.registroSimit],
            rgmf: [this.valorgmf],
            valorConsignar: [this.valorConsignar],
            valorCuotaBase: [this.valorCuotaBase],
            administracion: [this.administracion],
            iva: [this.iva],
            soloInteres: [this.soloInteres],
            aval: [this.aval],
            totalCredito: [this.totalCredito],
            valorCuotaTotal: [this.valorCuotaTotal]
        });
    }
    ngOnInit() {
        var _a, _b;
        this.productService.getProducts().subscribe((resp) => {
            this.productos = resp;
            this.productos.forEach(element => {
                if (element.name === 'Prestamo Sobre Hipoteca') {
                    this.idProduct = element._id;
                    this.productService.getProductById(element._id).subscribe((producto) => {
                        // Reset Valores
                        this.parqueadero = 0;
                        this.peritaje = 0;
                        this.registroSimit = 0;
                        this.gmfCuatroxMil = 0;
                        this.totalPersonal = 0;
                        this.comisionAdminHipo = 0;
                        this.comisionAdminHipo1 = 0;
                        this.excedenteComisionAdminHipo = 0;
                        this.registroHipoteca = 0;
                        this.interesesAnticipados = 0;
                        this.interesesAnticipadosp = 0;
                        this.administracion = 0;
                        this.administracionp = 0;
                        this.aval = 0;
                        this.avalp = 0;
                        this.totalCredito = 0;
                        this.soloInteres = 0;
                        this.valorCuotaTotal = 0;
                        this.valorgmf = 0;
                        this.auditorObra = 0;
                        // Fin Reset Valores
                        // this.producto = producto;
                        this.nombre = producto.name;
                        this.iEfectivoAnual = producto.iEfectivoAnual;
                        this.iMesVencido = ((((Math.pow((1 + (producto.iEfectivoAnual / 100)), (1 / 12))) - 1) * 12) * 100) / 12;
                        this.iEfectivoAnualMax = producto.iEfectivoAnualMax;
                        this.iMoraEfectivoAnual = producto.iMoraEfectivoAnual;
                        this.valuemin = producto.valuemin;
                        this.valuemax = producto.valuemax;
                        this.termmin = producto.termmin;
                        this.termmax = producto.termmax;
                        this.valorSolicitado = producto.valuemin;
                        this.plazo = producto.termmin;
                        this.step = producto.step;
                        this.administracion = producto.administracion;
                        this.administracionp = producto.administracion;
                        this.ivap = producto.iva;
                        this.iva = (this.administracion / 100) * this.ivap;
                        if (producto.aval) {
                            this.avalp = producto.aval;
                            this.aval = (this.valorSolicitado / 100) * this.avalp;
                        }
                        if (producto.parqueadero) {
                            this.parqueadero = producto.parqueadero;
                        }
                        if (producto.peritaje) {
                            this.peritaje = producto.peritaje;
                        }
                        if (producto.registroSimit) {
                            this.registroSimit = producto.registroSimit;
                        }
                        if (producto.gmfCuatroxMil) {
                            this.gmfCuatroxMil = producto.gmfCuatroxMil;
                            this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
                        }
                        if (producto.auditorObra) {
                            this.auditorObra = producto.auditorObra;
                            this.valorauditorObra = (this.valorSolicitado / 1000) * this.auditorObra;
                        }
                        if (producto.comisionAdminHipo) {
                            this.comisionAdminHipo = producto.comisionAdminHipo;
                        }
                        if (producto.excedenteComisionAdminHipo) {
                            this.excedenteComisionAdminHipo = producto.excedenteComisionAdminHipo;
                        }
                        if (producto.registroHipoteca) {
                            this.registroHipoteca = producto.registroHipoteca;
                        }
                        if (producto.interesesAnticipados) {
                            this.interesesAnticipadosp = producto.interesesAnticipados;
                            this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
                        }
                        this.formularioSolicitud.patchValue({ value: producto.valuemin });
                        this.formularioSolicitud.patchValue({ time: producto.termmin });
                        if (this.nombre === 'Prestamo Personal') {
                            this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                            this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                            this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                            this.totalCredito = this.valorCuotaBase + this.administracion + this.iva + this.aval;
                        }
                        else {
                            this.soloInteres = 0;
                            this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
                            this.totalCredito = 0;
                        }
                        this.valorConsignar =
                            this.valorSolicitado -
                                (this.valorgmf +
                                    this.registroSimit +
                                    this.peritaje +
                                    this.comisionAdminHipo1 +
                                    this.registroHipoteca +
                                    this.interesesAnticipados +
                                    this.valorauditorObra);
                    });
                }
            });
        });
        (_a = this.formularioSolicitud.get('value')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((value) => {
            this.valorSolicitado = value;
            var im = this.iMesVencido / 100;
            var im2 = Math.pow((1 + im), -(this.plazo));
            const a = (this.valorSolicitado * im) / (1 - im2);
            this.valorCuotaBase = a;
            // this.valorCuotaBase = a.toFixed(2);
            if (this.comisionAdminHipo !== 0 && this.valorSolicitado > 50000000 && this.comisionAdminHipo !== 0) {
                let diferencia = ((this.valorSolicitado - 50000000) / 1000000) * this.excedenteComisionAdminHipo;
                this.comisionAdminHipo1 = this.comisionAdminHipo + diferencia;
            }
            else if (this.comisionAdminHipo !== 0) {
                this.comisionAdminHipo1 = 2000000;
            }
            this.aval = (this.valorSolicitado / 100) * this.avalp;
            this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
            if (this.nombre === 'Prestamo Personal') {
                this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
                this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
            }
            else {
                this.soloInteres = 0;
                this.totalCredito = 0;
                this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
            }
            this.valorConsignar =
                this.valorSolicitado -
                    (this.registroSimit +
                        this.peritaje +
                        this.valorgmf +
                        this.comisionAdminHipo1 +
                        this.registroHipoteca +
                        this.interesesAnticipados);
        });
        (_b = this.formularioSolicitud.get('time')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((time) => {
            this.plazo = time;
            this.administracion = this.administracionp;
            if (this.nombre === 'Prestamo Personal') {
                this.administracion = this.administracion * this.plazo;
                this.iva = (this.administracion / 100) * this.ivap;
            }
            var im = this.iMesVencido / 100;
            var im2 = Math.pow((1 + im), -(this.plazo));
            let a = (this.valorSolicitado * im) / (1 - im2);
            this.valorCuotaBase = a;
            if (this.nombre === 'Prestamo Personal') {
                this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
            }
            else {
                this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
                this.soloInteres = 0;
                this.totalCredito = 0;
            }
        });
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
    formatLabel1(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
CalcHipotecaComponent.ɵfac = function CalcHipotecaComponent_Factory(t) { return new (t || CalcHipotecaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
CalcHipotecaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalcHipotecaComponent, selectors: [["app-calc-hipoteca"]], outputs: { value: "value" }, decls: 52, vars: 29, consts: [[1, "card", "x"], [1, "form", 3, "formGroup"], ["f", "ngForm"], [1, "card-body"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "mb10"], [1, "text-white", "mb20"], [1, "slider1"], [1, "text-white"], ["id", "pricipal-slide1"], ["thumbLabel", "", "tickInterval", "5", "name", "valorSolicitado", "formControlName", "value", 1, "min", 3, "displayWith", "step", "min", "max"], ["class", "text-white", 4, "ngIf"], [1, "slider"], ["id", "totalyear-slide"], ["formControlName", "time", "name", "plazo", "thumbLabel", "", "tickInterval", "1", 1, "max", 3, "displayWith", "min", "max"], ["class", "col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3", 4, "ngIf"], [1, "col-xl-3", "col-lg-3", "col-md-3", "col-sm-3", "col-3"], [1, "single-total"], [1, "text-white", "lead-cal-small-text"], ["id", "tbl_la", 1, "text-white"], ["id", "tbl_emi", 1, "text-white"], ["class", "col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4", 4, "ngIf"], [1, "col-xl-8", "col-lg-8", "col-md-8", "col-sm-8", "col-8"], [1, "text-white", "emi-price"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-4"]], template: function CalcHipotecaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Obten Tu Prestamo Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cuanto Dinero Necesitas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CalcHipotecaComponent_span_15_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CalcHipotecaComponent_span_16_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "A Cuantos Meses Deseas El Prestamo?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-slider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CalcHipotecaComponent_span_24_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CalcHipotecaComponent_span_25_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CalcHipotecaComponent_div_26_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CalcHipotecaComponent_div_27_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CalcHipotecaComponent_div_28_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Iva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, CalcHipotecaComponent_div_43_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, CalcHipotecaComponent_div_44_Template, 7, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Cuota Mensual: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formularioSolicitud);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.formatLabel1)("step", ctx.step)("min", ctx.valuemin)("max", ctx.valuemax);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valorSolicitado > 1 && ctx.valorSolicitado < 1000000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valorSolicitado >= 1000000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.formatLabel)("min", ctx.termmin)("max", ctx.termmax);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plazo > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plazo <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.soloInteres > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.iEfectivoAnual > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.iMesVencido > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](35, 20, ctx.administracion, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](42, 23, ctx.iva, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.aval > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalCredito > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](51, 26, ctx.valorCuotaTotal, "1.0-0"), " pesos");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSlider, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  background-color: rgba(187, 181, 181, 0.233);\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb-label {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-track-fill {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb-label {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-track-fill {\n  background-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtaGlwb3RlY2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtBQUNGOztBQUlBO0VBRUUsNENBQUE7RUFDQSxXQUFBO0FBRkY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSx3QkFBQTtBQUhGOztBQU1BO0VBQ0Usd0JBQUE7QUFIRjs7QUFNQTtFQUNFLHdCQUFBO0FBSEYiLCJmaWxlIjoiY2FsYy1oaXBvdGVjYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi54e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgNiwgNiwgMC40MDQpO1xyXG5cclxufVxyXG5cclxuXHJcbm1hdC1zbGlkZXIge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTgxLCAxODEsIDAuMjMzKTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWluIC5tYXQtc2xpZGVyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1pbiAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5taW4gLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2410:
/*!*****************************************************************!*\
  !*** ./src/app/shared/calc-invierte/calc-invierte.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcInvierteComponent": () => (/* binding */ CalcInvierteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _dashboard_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/services/product.service */ 1053);
/* harmony import */ var _dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard/services/request.service */ 6224);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ 4436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);







function CalcInvierteComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r1.valorSolicitado, "1.0-0"), " pesos");
} }
function CalcInvierteComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r2.valorSolicitado, "1.0-0"), " millones");
} }
function CalcInvierteComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r3.plazo, " meses");
} }
function CalcInvierteComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.plazo, " mes");
} }
function CalcInvierteComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Inter\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r5.soloInteres, "1.0-0"), "");
} }
function CalcInvierteComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tasa E.A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r6.iEfectivoAnual, "0.1-4"), " %");
} }
function CalcInvierteComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tasa Mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r7.iMesVencido, "0.1-4"), " %");
} }
function CalcInvierteComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Aval");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r8.aval, "1.0-0"), "");
} }
function CalcInvierteComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r9.totalCredito, "1.0-0"), "");
} }
class CalcInvierteComponent {
    constructor(fb, productService, requestService) {
        this.fb = fb;
        this.productService = productService;
        this.requestService = requestService;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.productos = [];
        this.idProduct = '';
        this.nombre = '';
        this.valorSolicitado = 0;
        this.plazo = 0;
        this.iMesVencido = 0;
        this.iEfectivoAnual = 0;
        this.iEfectivoAnualMax = 0;
        this.iMoraEfectivoAnual = 0;
        this.soloInteres = 0;
        this.valorCuotaBase = 0;
        this.administracion = 0;
        this.administracionp = 0;
        this.iva = 0;
        this.ivap = 0;
        this.aval = 0;
        this.avalp = 0;
        this.valuemin = 0;
        this.valuemax = 0;
        this.termmin = 0;
        this.termmax = 0;
        this.totalCredito = 0;
        this.totalPersonal = 0;
        this.parqueadero = 0;
        this.peritaje = 0;
        this.registroSimit = 0;
        this.gmfCuatroxMil = 0;
        this.valorgmf = 0;
        this.step = 0;
        this.comisionAdminHipo = 0;
        this.comisionAdminHipo1 = 0;
        this.excedenteComisionAdminHipo = 0;
        this.registroHipoteca = 0;
        this.interesesAnticipadosp = 0;
        this.interesesAnticipados = 0;
        this.valorConsignar = 0;
        this.valorCuotaTotal = 0;
        this.formularioSolicitud = this.fb.group({
            idUser: [''],
            idProduct: [''],
            value: [0],
            time: [0],
            description: ['Ninguno'],
            estate: ['Pendiente'],
            regInmueble: [false],
            regPersonales: [false],
            regVehiculo: [false],
            regTrabajo: [false],
            regReferencias: [false],
            regReferenciasCom: [false],
            regCedula: [false],
            regPasaporte: [false],
            regTarjetav: [false],
            regMatricula: [false],
            regExtracto: [false],
            nombreProducto: [this.nombre],
            tasaEfectivaMes: [this.iMesVencido],
            tasaEfectivaAnual: [this.iEfectivoAnual],
            tasaEfectivaAnualMax: [this.iEfectivoAnualMax],
            tasaMoraEA: [this.iMoraEfectivoAnual],
            rcomisionAdminHipo: [this.comisionAdminHipo1],
            rregistroHipoteca: [this.registroHipoteca],
            rinteresesAnticipados: [this.interesesAnticipados],
            rparqueadero: [this.parqueadero],
            rperitaje: [this.peritaje],
            rregistroSimit: [this.registroSimit],
            rgmf: [this.valorgmf],
            valorConsignar: [this.valorConsignar],
            valorCuotaBase: [this.valorCuotaBase],
            administracion: [this.administracion],
            iva: [this.iva],
            soloInteres: [this.soloInteres],
            aval: [this.aval],
            totalCredito: [this.totalCredito],
            valorCuotaTotal: [this.valorCuotaTotal]
        });
    }
    ngOnInit() {
        var _a, _b;
        this.productService.getProducts().subscribe((resp) => {
            this.productos = resp;
            this.productos.forEach(element => {
                if (element.name === 'Inversion Sobre Hipoteca') {
                    this.idProduct = element._id;
                    this.productService.getProductById(element._id).subscribe((producto) => {
                        // Reset Valores
                        this.parqueadero = 0;
                        this.peritaje = 0;
                        this.registroSimit = 0;
                        this.gmfCuatroxMil = 0;
                        this.totalPersonal = 0;
                        this.comisionAdminHipo = 0;
                        this.comisionAdminHipo1 = 0;
                        this.excedenteComisionAdminHipo = 0;
                        this.registroHipoteca = 0;
                        this.interesesAnticipados = 0;
                        this.interesesAnticipadosp = 0;
                        this.administracion = 0;
                        this.administracionp = 0;
                        this.aval = 0;
                        this.avalp = 0;
                        this.totalCredito = 0;
                        this.soloInteres = 0;
                        this.valorCuotaTotal = 0;
                        this.valorgmf = 0;
                        // Fin Reset Valores
                        // this.producto = producto;
                        this.nombre = producto.name;
                        this.iEfectivoAnual = producto.iEfectivoAnual;
                        this.iMesVencido = ((((Math.pow((1 + (producto.iEfectivoAnual / 100)), (1 / 12))) - 1) * 12) * 100) / 12;
                        this.iEfectivoAnualMax = producto.iEfectivoAnualMax;
                        this.iMoraEfectivoAnual = producto.iMoraEfectivoAnual;
                        this.valuemin = producto.valuemin;
                        this.valuemax = producto.valuemax;
                        this.termmin = producto.termmin;
                        this.termmax = producto.termmax;
                        this.valorSolicitado = producto.valuemin;
                        this.plazo = producto.termmin;
                        this.step = producto.step;
                        this.administracion = producto.administracion;
                        this.administracionp = producto.administracion;
                        this.ivap = producto.iva;
                        this.iva = (this.administracion / 100) * this.ivap;
                        if (producto.aval) {
                            this.avalp = producto.aval;
                            this.aval = (this.valorSolicitado / 100) * this.avalp;
                        }
                        if (producto.parqueadero) {
                            this.parqueadero = producto.parqueadero;
                        }
                        if (producto.peritaje) {
                            this.peritaje = producto.peritaje;
                        }
                        if (producto.registroSimit) {
                            this.registroSimit = producto.registroSimit;
                        }
                        if (producto.gmfCuatroxMil) {
                            this.gmfCuatroxMil = producto.gmfCuatroxMil;
                            this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
                        }
                        if (producto.comisionAdminHipo) {
                            this.comisionAdminHipo = producto.comisionAdminHipo;
                        }
                        if (producto.excedenteComisionAdminHipo) {
                            this.excedenteComisionAdminHipo = producto.excedenteComisionAdminHipo;
                        }
                        if (producto.registroHipoteca) {
                            this.registroHipoteca = producto.registroHipoteca;
                        }
                        if (producto.interesesAnticipados) {
                            this.interesesAnticipadosp = producto.interesesAnticipados;
                            this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
                        }
                        this.formularioSolicitud.patchValue({ value: producto.valuemin });
                        this.formularioSolicitud.patchValue({ time: producto.termmin });
                        if (this.nombre === 'Prestamo Personal') {
                            this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                            this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                            this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                            this.totalCredito = this.valorCuotaBase + this.administracion + this.iva + this.aval;
                        }
                        else {
                            this.soloInteres = 0;
                            this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
                            this.totalCredito = 0;
                        }
                        this.valorConsignar =
                            this.valorSolicitado -
                                (this.valorgmf +
                                    this.registroSimit +
                                    this.peritaje +
                                    this.comisionAdminHipo1 +
                                    this.registroHipoteca +
                                    this.interesesAnticipados);
                    });
                }
            });
        });
        (_a = this.formularioSolicitud.get('value')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((value) => {
            this.valorSolicitado = value;
            var im = this.iMesVencido / 100;
            var im2 = Math.pow((1 + im), -(this.plazo));
            const a = (this.valorSolicitado * im) / (1 - im2);
            this.valorCuotaBase = a;
            // this.valorCuotaBase = a.toFixed(2);
            if (this.comisionAdminHipo !== 0 && this.valorSolicitado > 50000000 && this.comisionAdminHipo !== 0) {
                let diferencia = ((this.valorSolicitado - 50000000) / 1000000) * this.excedenteComisionAdminHipo;
                this.comisionAdminHipo1 = this.comisionAdminHipo + diferencia;
            }
            else if (this.comisionAdminHipo !== 0) {
                this.comisionAdminHipo1 = 2000000;
            }
            this.aval = (this.valorSolicitado / 100) * this.avalp;
            this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
            if (this.nombre === 'Prestamo Personal') {
                this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
                this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
            }
            else {
                this.soloInteres = 0;
                this.totalCredito = 0;
                this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
            }
            this.valorConsignar =
                this.valorSolicitado -
                    (this.registroSimit +
                        this.peritaje +
                        this.valorgmf +
                        this.comisionAdminHipo1 +
                        this.registroHipoteca +
                        this.interesesAnticipados);
        });
        (_b = this.formularioSolicitud.get('time')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((time) => {
            this.plazo = time;
            this.administracion = this.administracionp;
            if (this.nombre === 'Prestamo Personal') {
                this.administracion = this.administracion * this.plazo;
                this.iva = (this.administracion / 100) * this.ivap;
            }
            var im = this.iMesVencido / 100;
            var im2 = Math.pow((1 + im), -(this.plazo));
            let a = (this.valorSolicitado * im) / (1 - im2);
            this.valorCuotaBase = a;
            if (this.nombre === 'Prestamo Personal') {
                this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
            }
            else {
                this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
                this.soloInteres = 0;
                this.totalCredito = 0;
            }
        });
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
    formatLabel1(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
CalcInvierteComponent.ɵfac = function CalcInvierteComponent_Factory(t) { return new (t || CalcInvierteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
CalcInvierteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalcInvierteComponent, selectors: [["app-calc-invierte"]], outputs: { value: "value" }, decls: 52, vars: 29, consts: [[1, "card", "x"], [1, "form", 3, "formGroup"], ["f", "ngForm"], [1, "card-body"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "mb10"], [1, "text-white", "mb20"], [1, "slider1"], [1, "text-white"], ["id", "pricipal-slide1"], ["thumbLabel", "", "tickInterval", "5", "name", "valorSolicitado", "formControlName", "value", 1, "min", 3, "displayWith", "step", "min", "max"], ["class", "text-white", 4, "ngIf"], [1, "slider"], ["id", "totalyear-slide"], ["formControlName", "time", "name", "plazo", "thumbLabel", "", "tickInterval", "1", 1, "max", 3, "displayWith", "min", "max"], ["class", "col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3", 4, "ngIf"], [1, "col-xl-3", "col-lg-3", "col-md-3", "col-sm-3", "col-3"], [1, "single-total"], [1, "text-white", "lead-cal-small-text"], ["id", "tbl_la", 1, "text-white"], ["id", "tbl_emi", 1, "text-white"], ["class", "col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4", 4, "ngIf"], [1, "col-xl-8", "col-lg-8", "col-md-8", "col-sm-8", "col-8"], ["id", "emi", 1, "text-white", "emi-price"], [1, "text-white", "emi-price"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-4"]], template: function CalcInvierteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Obten Tu Prestamo Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cuanto Dinero Necesitas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CalcInvierteComponent_span_15_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CalcInvierteComponent_span_16_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "A Cuantos Meses Deseas El Prestamo?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-slider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CalcInvierteComponent_span_24_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CalcInvierteComponent_span_25_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CalcInvierteComponent_div_26_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CalcInvierteComponent_div_27_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CalcInvierteComponent_div_28_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Iva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, CalcInvierteComponent_div_43_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, CalcInvierteComponent_div_44_Template, 7, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Cuota Mensual: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formularioSolicitud);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.formatLabel1)("step", ctx.step)("min", ctx.valuemin)("max", ctx.valuemax);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valorSolicitado > 1 && ctx.valorSolicitado < 1000000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valorSolicitado >= 1000000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.formatLabel)("min", ctx.termmin)("max", ctx.termmax);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plazo > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plazo <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.soloInteres > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.iEfectivoAnual > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.iMesVencido > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](35, 20, ctx.administracion, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](42, 23, ctx.iva, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.aval > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalCredito > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](51, 26, ctx.valorCuotaTotal, "1.0-0"), " pesos");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSlider, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  background-color: rgba(187, 181, 181, 0.233);\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb-label {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-track-fill {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb-label {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-track-fill {\n  background-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtaW52aWVydGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtBQUNGOztBQUlBO0VBRUUsNENBQUE7RUFDQSxXQUFBO0FBRkY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSx3QkFBQTtBQUhGOztBQU1BO0VBQ0Usd0JBQUE7QUFIRjs7QUFNQTtFQUNFLHdCQUFBO0FBSEYiLCJmaWxlIjoiY2FsYy1pbnZpZXJ0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi54e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgNiwgNiwgMC40MDQpO1xyXG5cclxufVxyXG5cclxuXHJcbm1hdC1zbGlkZXIge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTgxLCAxODEsIDAuMjMzKTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWluIC5tYXQtc2xpZGVyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1pbiAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5taW4gLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 876:
/*!*******************************************************************!*\
  !*** ./src/app/shared/calc-quickloan/calc-quickloan.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcQuickloanComponent": () => (/* binding */ CalcQuickloanComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _dashboard_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/services/product.service */ 1053);
/* harmony import */ var _dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard/services/request.service */ 6224);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ 4436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);







function CalcQuickloanComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r1.valorSolicitado, "1.0-0"), " pesos");
} }
function CalcQuickloanComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r2.valorSolicitado, "1.0-0"), " pesos");
} }
function CalcQuickloanComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r3.plazo, " meses");
} }
function CalcQuickloanComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.plazo, " mes");
} }
class CalcQuickloanComponent {
    constructor(fb, productService, requestService) {
        this.fb = fb;
        this.productService = productService;
        this.requestService = requestService;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.productos = [];
        this.idProduct = '';
        this.nombre = '';
        this.valorSolicitado = 0;
        this.plazo = 0;
        this.iMesVencido = 0;
        this.valorCuotaDiaria = 0;
        this.valorInteresDia = 0;
        this.iDiaVencido = 0;
        this.idia = 0;
        this.iEfectivoAnual = 0;
        this.iEfectivoAnualMax = 0;
        this.iMoraEfectivoAnual = 0;
        this.soloInteres = 0;
        this.valorCuotaBase = 0;
        this.valorCuotaBaseDia = 0;
        this.valorInteresDiaMostrar = 0;
        this.administracion = 0;
        this.administracionp = 0;
        this.iva = 0;
        this.ivap = 0;
        this.aval = 0;
        this.avalp = 0;
        this.valuemin = 0;
        this.valuemax = 0;
        this.termmin = 0;
        this.termmax = 0;
        this.totalCredito = 0;
        this.totalPersonal = 0;
        this.parqueadero = 0;
        this.peritaje = 0;
        this.registroSimit = 0;
        this.gmfCuatroxMil = 0;
        this.valorgmf = 0;
        this.step = 0;
        this.comisionAdminHipo = 0;
        this.comisionAdminHipo1 = 0;
        this.excedenteComisionAdminHipo = 0;
        this.registroHipoteca = 0;
        this.interesesAnticipadosp = 0;
        this.interesesAnticipados = 0;
        this.valorConsignar = 0;
        this.valorCuotaTotal = 0;
        this.formularioSolicitud = this.fb.group({
            idUser: [''],
            idProduct: [''],
            value: [0],
            time: [0],
            description: ['Ninguno'],
            estate: ['Pendiente'],
            regInmueble: [false],
            regPersonales: [false],
            regVehiculo: [false],
            regTrabajo: [false],
            regReferencias: [false],
            regReferenciasCom: [false],
            regCedula: [false],
            regPasaporte: [false],
            regTarjetav: [false],
            regMatricula: [false],
            regExtracto: [false],
            nombreProducto: [this.nombre],
            tasaEfectivaMes: [this.iMesVencido],
            tasaEfectivaAnual: [this.iEfectivoAnual],
            tasaEfectivaAnualMax: [this.iEfectivoAnualMax],
            tasaMoraEA: [this.iMoraEfectivoAnual],
            rcomisionAdminHipo: [this.comisionAdminHipo1],
            rregistroHipoteca: [this.registroHipoteca],
            rinteresesAnticipados: [this.interesesAnticipados],
            rparqueadero: [this.parqueadero],
            rperitaje: [this.peritaje],
            rregistroSimit: [this.registroSimit],
            rgmf: [this.valorgmf],
            valorConsignar: [this.valorConsignar],
            valorCuotaBase: [this.valorCuotaBase],
            administracion: [this.administracion],
            iva: [this.iva],
            soloInteres: [this.soloInteres],
            // solointeresdia: [this.idia],
            aval: [this.aval],
            totalCredito: [this.totalCredito],
            valorCuotaTotal: [this.valorCuotaTotal]
        });
    }
    ngOnInit() {
        var _a, _b;
        this.productService.getProducts().subscribe((resp) => {
            this.productos = resp;
            this.productos.forEach(element => {
                if (element.name === 'Prestamo UltraRapido') {
                    this.idProduct = element._id;
                    this.productService.getProductById(element._id).subscribe((producto) => {
                        // Reset Valores
                        this.parqueadero = 0;
                        this.peritaje = 0;
                        this.registroSimit = 0;
                        this.gmfCuatroxMil = 0;
                        this.totalPersonal = 0;
                        this.comisionAdminHipo = 0;
                        this.comisionAdminHipo1 = 0;
                        this.excedenteComisionAdminHipo = 0;
                        this.registroHipoteca = 0;
                        this.interesesAnticipados = 0;
                        this.interesesAnticipadosp = 0;
                        this.administracion = 0;
                        this.administracionp = 0;
                        this.aval = 0;
                        this.avalp = 0;
                        this.totalCredito = 0;
                        this.soloInteres = 0;
                        this.valorCuotaTotal = 0;
                        this.valorgmf = 0;
                        // Fin Reset Valores
                        // this.producto = producto;
                        this.nombre = producto.name;
                        this.iEfectivoAnual = producto.iEfectivoAnual;
                        this.iMesVencido = ((((Math.pow((1 + (producto.iEfectivoAnual / 100)), (1 / 12))) - 1) * 12) * 100) / 12;
                        this.iDiaVencido = (((Math.pow((1 + (producto.iEfectivoAnual / 100)), (1 / 360))) - 1) * 360) * 100;
                        console.log("Interes Mes Vencido Anual", this.iDiaVencido);
                        this.iEfectivoAnualMax = producto.iEfectivoAnualMax;
                        this.iMoraEfectivoAnual = producto.iMoraEfectivoAnual;
                        this.valuemin = producto.valuemin;
                        this.valuemax = producto.valuemax;
                        this.termmin = producto.termmin;
                        this.termmax = producto.termmax;
                        this.valorSolicitado = producto.valuemin;
                        this.plazo = producto.termmin;
                        this.step = producto.step;
                        this.administracion = producto.administracion;
                        this.administracionp = producto.administracion;
                        this.ivap = producto.iva;
                        this.iva = (this.administracion / 100) * this.ivap;
                        if (producto.aval) {
                            this.avalp = producto.aval;
                            this.aval = (this.valorSolicitado / 100) * this.avalp;
                        }
                        if (producto.parqueadero) {
                            this.parqueadero = producto.parqueadero;
                        }
                        if (producto.peritaje) {
                            this.peritaje = producto.peritaje;
                        }
                        if (producto.registroSimit) {
                            this.registroSimit = producto.registroSimit;
                        }
                        if (producto.gmfCuatroxMil) {
                            this.gmfCuatroxMil = producto.gmfCuatroxMil;
                            this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
                        }
                        if (producto.comisionAdminHipo) {
                            this.comisionAdminHipo = producto.comisionAdminHipo;
                        }
                        if (producto.excedenteComisionAdminHipo) {
                            this.excedenteComisionAdminHipo = producto.excedenteComisionAdminHipo;
                        }
                        if (producto.registroHipoteca) {
                            this.registroHipoteca = producto.registroHipoteca;
                        }
                        if (producto.interesesAnticipados) {
                            this.interesesAnticipadosp = producto.interesesAnticipados;
                            this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
                        }
                        this.formularioSolicitud.patchValue({ value: producto.valuemin });
                        this.formularioSolicitud.patchValue({ time: producto.termmin });
                        if (this.nombre === 'Prestamo UltraRapido') {
                            this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                            this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                            this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                            this.totalCredito = this.valorCuotaBase + this.administracion + this.iva + this.aval;
                        }
                        else {
                            this.soloInteres = 0;
                            this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
                            this.totalCredito = 0;
                        }
                        // Prestamo UltraRapido
                        this.idia = this.iDiaVencido / 360;
                        this.valorCuotaBaseDia = ((this.idia / 100) * this.valorSolicitado) / (1 - Math.pow((1 + (this.idia / 100)), -this.plazo));
                        this.valorInteresDia = ((this.valorCuotaBaseDia * this.plazo) - this.valorSolicitado) / this.plazo;
                        //fin prestamo ultrarapido
                        this.valorConsignar =
                            this.valorSolicitado -
                                (this.valorgmf +
                                    this.registroSimit +
                                    this.peritaje +
                                    this.comisionAdminHipo1 +
                                    this.registroHipoteca +
                                    this.interesesAnticipados);
                    });
                }
            });
        });
        (_a = this.formularioSolicitud.get('value')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((value) => {
            this.valorSolicitado = value;
            var im = this.iMesVencido / 100;
            // var im = this.idia / 100;
            var im2 = Math.pow((1 + im), -(this.plazo));
            const a = (this.valorSolicitado * im) / (1 - im2);
            this.valorCuotaBase = a;
            // this.valorCuotaBase = a.toFixed(2);
            if (this.comisionAdminHipo !== 0 && this.valorSolicitado > 50000000 && this.comisionAdminHipo !== 0) {
                let diferencia = ((this.valorSolicitado - 50000000) / 1000000) * this.excedenteComisionAdminHipo;
                this.comisionAdminHipo1 = this.comisionAdminHipo + diferencia;
            }
            else if (this.comisionAdminHipo !== 0) {
                this.comisionAdminHipo1 = 2000000;
            }
            this.aval = (this.valorSolicitado / 100) * this.avalp;
            this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
            if (this.nombre === 'Prestamo UltraRapido') {
                this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                // this.valorCuotaBaseDia = ((this.idia / 100) * this.valorSolicitado) / (1 - Math.pow((1 + (this.idia / 100)), - this.plazo));
                // this.valorInteresDia = (this.valorCuotaBaseDia * this.plazo) - this.valorSolicitado;
                this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
                this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
            }
            else {
                this.soloInteres = 0;
                this.totalCredito = 0;
                this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
            }
            this.valorConsignar =
                this.valorSolicitado -
                    (this.registroSimit +
                        this.peritaje +
                        this.valorgmf +
                        this.comisionAdminHipo1 +
                        this.registroHipoteca +
                        this.interesesAnticipados);
        });
        (_b = this.formularioSolicitud.get('time')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((time) => {
            this.plazo = time;
            this.administracion = this.administracionp;
            if (this.nombre === 'Prestamo UltraRapido') {
                this.administracion = this.administracion * this.plazo;
                this.iva = (this.administracion / 100) * this.ivap;
            }
            var im = this.iMesVencido / 100;
            //var im = this.idia / 100;
            var im2 = Math.pow((1 + im), -(this.plazo));
            let a = (this.valorSolicitado * im) / (1 - im2);
            this.valorCuotaBase = a;
            if (this.nombre === 'Prestamo UltraRapido') {
                this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                this.valorInteresDiaMostrar = this.valorInteresDia * this.plazo;
                this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
            }
            else {
                this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
                this.soloInteres = 0;
                this.totalCredito = 0;
            }
        });
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
    formatLabel1(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
CalcQuickloanComponent.ɵfac = function CalcQuickloanComponent_Factory(t) { return new (t || CalcQuickloanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
CalcQuickloanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalcQuickloanComponent, selectors: [["app-calc-quickloan"]], outputs: { value: "value" }, decls: 68, vars: 36, consts: [[1, "card", "x"], [1, "form", 3, "formGroup"], ["f", "ngForm"], [1, "card-body"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "mb10"], [1, "text-white", "mb20"], [1, "slider1"], [1, "text-white"], ["id", "pricipal-slide1"], ["thumbLabel", "", "tickInterval", "5", "name", "valorSolicitado", "formControlName", "value", 1, "min", 3, "displayWith", "step", "min", "max"], ["class", "text-white", 4, "ngIf"], [1, "slider"], ["id", "totalyear-slide"], ["formControlName", "time", "name", "plazo", "thumbLabel", "", "tickInterval", "1", 1, "max", 3, "displayWith", "min", "max"], [1, "col-xl-3", "col-lg-3", "col-md-3", "col-sm-3", "col-3"], [1, "single-total"], [1, "text-white", "lead-cal-small-text"], ["id", "emi", 1, "text-white", "emi-price"], ["id", "tbl_la", 1, "text-white"], ["id", "tbl_emi", 1, "text-white"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-4"], [1, "col-xl-8", "col-lg-8", "col-md-8", "col-sm-8", "col-8"]], template: function CalcQuickloanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Obten Tu Prestamo Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cuanto Dinero Necesitas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CalcQuickloanComponent_span_15_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CalcQuickloanComponent_span_16_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cuando Puedes Pagarlo?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-slider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CalcQuickloanComponent_span_24_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CalcQuickloanComponent_span_25_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Inter\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Iva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Aval");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Cuota Mensual: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](67, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formularioSolicitud);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.formatLabel1)("step", ctx.step)("min", ctx.valuemin)("max", ctx.valuemax);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valorSolicitado > 1 && ctx.valorSolicitado < 750000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valorSolicitado >= 750000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.formatLabel)("min", ctx.termmin)("max", ctx.termmax);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plazo > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plazo <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](32, 18, ctx.soloInteres, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](39, 21, ctx.administracion, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](46, 24, ctx.iva, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](53, 27, ctx.aval, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](60, 30, ctx.totalCredito, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](67, 33, ctx.valorCuotaTotal, "1.0-0"), " pesos");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSlider, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  background-color: rgba(187, 181, 181, 0.233);\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb-label {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-track-fill {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb-label {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-track-fill {\n  background-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtcXVpY2tsb2FuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7QUFDRjs7QUFJQTtFQUVFLDRDQUFBO0VBQ0EsV0FBQTtBQUZGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0Usd0JBQUE7QUFIRjs7QUFNQTtFQUNFLHdCQUFBO0FBSEY7O0FBTUE7RUFDRSx3QkFBQTtBQUhGIiwiZmlsZSI6ImNhbGMtcXVpY2tsb2FuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA2LCA2LCAwLjQwNCk7XHJcblxyXG59XHJcblxyXG5cclxubWF0LXNsaWRlciB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAxODEsIDE4MSwgMC4yMzMpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5taW4gLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWluIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1pbiAubWF0LXNsaWRlci10cmFjay1maWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1heCAubWF0LXNsaWRlci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1heCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1heCAubWF0LXNsaWRlci10cmFjay1maWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1126:
/*!*****************************************************************!*\
  !*** ./src/app/shared/calc-vehiculo/calc-vehiculo.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcVehiculoComponent": () => (/* binding */ CalcVehiculoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _dashboard_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/services/product.service */ 1053);
/* harmony import */ var _dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard/services/request.service */ 6224);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ 4436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);







function CalcVehiculoComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r1.valorSolicitado, "1.0-0"), " pesos");
} }
function CalcVehiculoComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r2.valorSolicitado, "1.0-0"), " millones");
} }
function CalcVehiculoComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r3.plazo, " meses");
} }
function CalcVehiculoComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.plazo, " mes");
} }
function CalcVehiculoComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Inter\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r5.soloInteres, "1.0-0"), "");
} }
function CalcVehiculoComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tasa E.A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r6.iEfectivoAnual, "0.1-4"), " %");
} }
function CalcVehiculoComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tasa Mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r7.iMesVencido, "0.1-4"), " %");
} }
function CalcVehiculoComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Aval");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r8.aval, "1.0-0"), "");
} }
function CalcVehiculoComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 1, ctx_r9.totalCredito, "1.0-0"), "");
} }
class CalcVehiculoComponent {
    constructor(fb, productService, requestService) {
        this.fb = fb;
        this.productService = productService;
        this.requestService = requestService;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.productos = [];
        this.idProduct = '';
        this.nombre = '';
        this.valorSolicitado = 0;
        this.plazo = 0;
        this.iMesVencido = 0;
        this.iEfectivoAnual = 0;
        this.iEfectivoAnualMax = 0;
        this.iMoraEfectivoAnual = 0;
        this.soloInteres = 0;
        this.valorCuotaBase = 0;
        this.administracion = 0;
        this.administracionp = 0;
        this.iva = 0;
        this.ivap = 0;
        this.aval = 0;
        this.avalp = 0;
        this.valuemin = 0;
        this.valuemax = 0;
        this.termmin = 0;
        this.termmax = 0;
        this.totalCredito = 0;
        this.totalPersonal = 0;
        this.parqueadero = 0;
        this.peritaje = 0;
        this.registroSimit = 0;
        this.gmfCuatroxMil = 0;
        this.valorgmf = 0;
        this.step = 0;
        this.comisionAdminHipo = 0;
        this.comisionAdminHipo1 = 0;
        this.excedenteComisionAdminHipo = 0;
        this.registroHipoteca = 0;
        this.interesesAnticipadosp = 0;
        this.interesesAnticipados = 0;
        this.valorConsignar = 0;
        this.valorCuotaTotal = 0;
        this.formularioSolicitud = this.fb.group({
            idUser: [''],
            idProduct: [''],
            value: [0],
            time: [0],
            description: ['Ninguno'],
            estate: ['Pendiente'],
            regInmueble: [false],
            regPersonales: [false],
            regVehiculo: [false],
            regTrabajo: [false],
            regReferencias: [false],
            regReferenciasCom: [false],
            regCedula: [false],
            regPasaporte: [false],
            regTarjetav: [false],
            regMatricula: [false],
            regExtracto: [false],
            nombreProducto: [this.nombre],
            tasaEfectivaMes: [this.iMesVencido],
            tasaEfectivaAnual: [this.iEfectivoAnual],
            tasaEfectivaAnualMax: [this.iEfectivoAnualMax],
            tasaMoraEA: [this.iMoraEfectivoAnual],
            rcomisionAdminHipo: [this.comisionAdminHipo1],
            rregistroHipoteca: [this.registroHipoteca],
            rinteresesAnticipados: [this.interesesAnticipados],
            rparqueadero: [this.parqueadero],
            rperitaje: [this.peritaje],
            rregistroSimit: [this.registroSimit],
            rgmf: [this.valorgmf],
            valorConsignar: [this.valorConsignar],
            valorCuotaBase: [this.valorCuotaBase],
            administracion: [this.administracion],
            iva: [this.iva],
            soloInteres: [this.soloInteres],
            aval: [this.aval],
            totalCredito: [this.totalCredito],
            valorCuotaTotal: [this.valorCuotaTotal]
        });
    }
    ngOnInit() {
        var _a, _b;
        this.productService.getProducts().subscribe((resp) => {
            this.productos = resp;
            this.productos.forEach(element => {
                if (element.name === 'Prestamo Sobre Vehiculo') {
                    this.idProduct = element._id;
                    this.productService.getProductById(element._id).subscribe((producto) => {
                        // Reset Valores
                        this.parqueadero = 0;
                        this.peritaje = 0;
                        this.registroSimit = 0;
                        this.gmfCuatroxMil = 0;
                        this.totalPersonal = 0;
                        this.comisionAdminHipo = 0;
                        this.comisionAdminHipo1 = 0;
                        this.excedenteComisionAdminHipo = 0;
                        this.registroHipoteca = 0;
                        this.interesesAnticipados = 0;
                        this.interesesAnticipadosp = 0;
                        this.administracion = 0;
                        this.administracionp = 0;
                        this.aval = 0;
                        this.avalp = 0;
                        this.totalCredito = 0;
                        this.soloInteres = 0;
                        this.valorCuotaTotal = 0;
                        this.valorgmf = 0;
                        // Fin Reset Valores
                        // this.producto = producto;
                        this.nombre = producto.name;
                        this.iEfectivoAnual = producto.iEfectivoAnual;
                        this.iMesVencido = ((((Math.pow((1 + (producto.iEfectivoAnual / 100)), (1 / 12))) - 1) * 12) * 100) / 12;
                        this.iEfectivoAnualMax = producto.iEfectivoAnualMax;
                        this.iMoraEfectivoAnual = producto.iMoraEfectivoAnual;
                        this.valuemin = producto.valuemin;
                        this.valuemax = producto.valuemax;
                        this.termmin = producto.termmin;
                        this.termmax = producto.termmax;
                        this.valorSolicitado = producto.valuemin;
                        this.plazo = producto.termmin;
                        this.step = producto.step;
                        this.administracion = producto.administracion;
                        this.administracionp = producto.administracion;
                        this.ivap = producto.iva;
                        this.iva = (this.administracion / 100) * this.ivap;
                        if (producto.aval) {
                            this.avalp = producto.aval;
                            this.aval = (this.valorSolicitado / 100) * this.avalp;
                        }
                        if (producto.parqueadero) {
                            this.parqueadero = producto.parqueadero;
                        }
                        if (producto.peritaje) {
                            this.peritaje = producto.peritaje;
                        }
                        if (producto.registroSimit) {
                            this.registroSimit = producto.registroSimit;
                        }
                        if (producto.gmfCuatroxMil) {
                            this.gmfCuatroxMil = producto.gmfCuatroxMil;
                            this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
                        }
                        if (producto.comisionAdminHipo) {
                            this.comisionAdminHipo = producto.comisionAdminHipo;
                        }
                        if (producto.excedenteComisionAdminHipo) {
                            this.excedenteComisionAdminHipo = producto.excedenteComisionAdminHipo;
                        }
                        if (producto.registroHipoteca) {
                            this.registroHipoteca = producto.registroHipoteca;
                        }
                        if (producto.interesesAnticipados) {
                            this.interesesAnticipadosp = producto.interesesAnticipados;
                            this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
                        }
                        this.formularioSolicitud.patchValue({ value: producto.valuemin });
                        this.formularioSolicitud.patchValue({ time: producto.termmin });
                        if (this.nombre === 'Prestamo Personal') {
                            this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                            this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                            this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                            this.totalCredito = this.valorCuotaBase + this.administracion + this.iva + this.aval;
                        }
                        else {
                            this.soloInteres = 0;
                            this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
                            this.totalCredito = 0;
                        }
                        this.valorConsignar =
                            this.valorSolicitado -
                                (this.valorgmf +
                                    this.registroSimit +
                                    this.peritaje +
                                    this.comisionAdminHipo1 +
                                    this.registroHipoteca +
                                    this.interesesAnticipados);
                    });
                }
            });
        });
        (_a = this.formularioSolicitud.get('value')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((value) => {
            this.valorSolicitado = value;
            var im = this.iMesVencido / 100;
            var im2 = Math.pow((1 + im), -(this.plazo));
            const a = (this.valorSolicitado * im) / (1 - im2);
            this.valorCuotaBase = a;
            // this.valorCuotaBase = a.toFixed(2);
            if (this.comisionAdminHipo !== 0 && this.valorSolicitado > 50000000 && this.comisionAdminHipo !== 0) {
                let diferencia = ((this.valorSolicitado - 50000000) / 1000000) * this.excedenteComisionAdminHipo;
                this.comisionAdminHipo1 = this.comisionAdminHipo + diferencia;
            }
            else if (this.comisionAdminHipo !== 0) {
                this.comisionAdminHipo1 = 2000000;
            }
            this.aval = (this.valorSolicitado / 100) * this.avalp;
            this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
            if (this.nombre === 'Prestamo Personal') {
                this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
                this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
            }
            else {
                this.soloInteres = 0;
                this.totalCredito = 0;
                this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
            }
            this.valorConsignar =
                this.valorSolicitado -
                    (this.registroSimit +
                        this.peritaje +
                        this.valorgmf +
                        this.comisionAdminHipo1 +
                        this.registroHipoteca +
                        this.interesesAnticipados);
        });
        (_b = this.formularioSolicitud.get('time')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((time) => {
            this.plazo = time;
            this.administracion = this.administracionp;
            if (this.nombre === 'Prestamo Personal') {
                this.administracion = this.administracion * this.plazo;
                this.iva = (this.administracion / 100) * this.ivap;
            }
            var im = this.iMesVencido / 100;
            var im2 = Math.pow((1 + im), -(this.plazo));
            let a = (this.valorSolicitado * im) / (1 - im2);
            this.valorCuotaBase = a;
            if (this.nombre === 'Prestamo Personal') {
                this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
            }
            else {
                this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
                this.soloInteres = 0;
                this.totalCredito = 0;
            }
        });
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
    formatLabel1(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
CalcVehiculoComponent.ɵfac = function CalcVehiculoComponent_Factory(t) { return new (t || CalcVehiculoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
CalcVehiculoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalcVehiculoComponent, selectors: [["app-calc-vehiculo"]], outputs: { value: "value" }, decls: 52, vars: 29, consts: [[1, "card", "x"], [1, "form", 3, "formGroup"], ["f", "ngForm"], [1, "card-body"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "mb10"], [1, "text-white", "mb20"], [1, "slider1"], [1, "text-white"], ["id", "pricipal-slide1"], ["thumbLabel", "", "tickInterval", "5", "name", "valorSolicitado", "formControlName", "value", 1, "min", 3, "displayWith", "step", "min", "max"], ["class", "text-white", 4, "ngIf"], [1, "slider"], ["id", "totalyear-slide"], ["formControlName", "time", "name", "plazo", "thumbLabel", "", "tickInterval", "1", 1, "max", 3, "displayWith", "min", "max"], ["class", "col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3", 4, "ngIf"], [1, "col-xl-3", "col-lg-3", "col-md-3", "col-sm-3", "col-3"], [1, "single-total"], [1, "text-white", "lead-cal-small-text"], ["id", "tbl_la", 1, "text-white"], ["id", "tbl_emi", 1, "text-white"], ["class", "col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4", 4, "ngIf"], [1, "col-xl-8", "col-lg-8", "col-md-8", "col-sm-8", "col-8"], ["id", "emi", 1, "text-white", "emi-price"], [1, "text-white", "emi-price"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-4"]], template: function CalcVehiculoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Obten Tu Prestamo Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cuanto Dinero Necesitas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CalcVehiculoComponent_span_15_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CalcVehiculoComponent_span_16_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "A Cuantos Meses Deseas El Prestamo?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-slider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CalcVehiculoComponent_span_24_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CalcVehiculoComponent_span_25_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CalcVehiculoComponent_div_26_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CalcVehiculoComponent_div_27_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CalcVehiculoComponent_div_28_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Iva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, CalcVehiculoComponent_div_43_Template, 7, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, CalcVehiculoComponent_div_44_Template, 7, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Cuota Mensual: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formularioSolicitud);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.formatLabel1)("step", ctx.step)("min", ctx.valuemin)("max", ctx.valuemax);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valorSolicitado > 1 && ctx.valorSolicitado < 1000000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valorSolicitado >= 1000000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.formatLabel)("min", ctx.termmin)("max", ctx.termmax);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plazo > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plazo <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.soloInteres > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.iEfectivoAnual > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.iMesVencido > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](35, 20, ctx.administracion, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](42, 23, ctx.iva, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.aval > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalCredito > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](51, 26, ctx.valorCuotaTotal, "1.0-0"), " pesos");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSlider, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  background-color: rgba(187, 181, 181, 0.233);\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb-label {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-track-fill {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb-label {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-track-fill {\n  background-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtdmVoaWN1bG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtBQUNGOztBQUlBO0VBRUUsNENBQUE7RUFDQSxXQUFBO0FBRkY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSx3QkFBQTtBQUhGOztBQU1BO0VBQ0Usd0JBQUE7QUFIRjs7QUFNQTtFQUNFLHdCQUFBO0FBSEYiLCJmaWxlIjoiY2FsYy12ZWhpY3Vsby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi54e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgNiwgNiwgMC40MDQpO1xyXG5cclxufVxyXG5cclxuXHJcbm1hdC1zbGlkZXIge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTgxLCAxODEsIDAuMjMzKTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWluIC5tYXQtc2xpZGVyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1pbiAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5taW4gLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9505:
/*!***********************************************!*\
  !*** ./src/app/shared/calc/calc.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcComponent": () => (/* binding */ CalcComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _dashboard_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/services/product.service */ 1053);
/* harmony import */ var _dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard/services/request.service */ 6224);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ 4436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);







function CalcComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r1.valorSolicitado, "1.0-0"), " pesos");
} }
function CalcComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r2.valorSolicitado, "1.0-0"), " millones");
} }
function CalcComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r3.plazo, " meses");
} }
function CalcComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.plazo, " mes");
} }
class CalcComponent {
    constructor(fb, productService, requestService) {
        this.fb = fb;
        this.productService = productService;
        this.requestService = requestService;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.productos = [];
        this.idProduct = '';
        this.nombre = '';
        this.valorSolicitado = 0;
        this.plazo = 0;
        this.iMesVencido = 0;
        this.iEfectivoAnual = 0;
        this.iEfectivoAnualMax = 0;
        this.iMoraEfectivoAnual = 0;
        this.soloInteres = 0;
        this.valorCuotaBase = 0;
        this.administracion = 0;
        this.administracionp = 0;
        this.iva = 0;
        this.ivap = 0;
        this.aval = 0;
        this.avalp = 0;
        this.valuemin = 0;
        this.valuemax = 0;
        this.termmin = 0;
        this.termmax = 0;
        this.totalCredito = 0;
        this.totalPersonal = 0;
        this.parqueadero = 0;
        this.peritaje = 0;
        this.registroSimit = 0;
        this.gmfCuatroxMil = 0;
        this.valorgmf = 0;
        this.step = 0;
        this.comisionAdminHipo = 0;
        this.comisionAdminHipo1 = 0;
        this.excedenteComisionAdminHipo = 0;
        this.registroHipoteca = 0;
        this.interesesAnticipadosp = 0;
        this.interesesAnticipados = 0;
        this.valorConsignar = 0;
        this.valorCuotaTotal = 0;
        this.formularioSolicitud = this.fb.group({
            idUser: [''],
            idProduct: [''],
            value: [0],
            time: [0],
            description: ['Ninguno'],
            estate: ['Pendiente'],
            regInmueble: [false],
            regPersonales: [false],
            regVehiculo: [false],
            regTrabajo: [false],
            regReferencias: [false],
            regReferenciasCom: [false],
            regCedula: [false],
            regPasaporte: [false],
            regTarjetav: [false],
            regMatricula: [false],
            regExtracto: [false],
            nombreProducto: [this.nombre],
            tasaEfectivaMes: [this.iMesVencido],
            tasaEfectivaAnual: [this.iEfectivoAnual],
            tasaEfectivaAnualMax: [this.iEfectivoAnualMax],
            tasaMoraEA: [this.iMoraEfectivoAnual],
            rcomisionAdminHipo: [this.comisionAdminHipo1],
            rregistroHipoteca: [this.registroHipoteca],
            rinteresesAnticipados: [this.interesesAnticipados],
            rparqueadero: [this.parqueadero],
            rperitaje: [this.peritaje],
            rregistroSimit: [this.registroSimit],
            rgmf: [this.valorgmf],
            valorConsignar: [this.valorConsignar],
            valorCuotaBase: [this.valorCuotaBase],
            administracion: [this.administracion],
            iva: [this.iva],
            soloInteres: [this.soloInteres],
            aval: [this.aval],
            totalCredito: [this.totalCredito],
            valorCuotaTotal: [this.valorCuotaTotal]
        });
    }
    ngOnInit() {
        var _a, _b;
        this.productService.getProducts().subscribe((resp) => {
            this.productos = resp;
            this.productos.forEach(element => {
                if (element.name === 'Prestamo Personal') {
                    this.idProduct = element._id;
                    this.productService.getProductById(element._id).subscribe((producto) => {
                        // Reset Valores
                        this.parqueadero = 0;
                        this.peritaje = 0;
                        this.registroSimit = 0;
                        this.gmfCuatroxMil = 0;
                        this.totalPersonal = 0;
                        this.comisionAdminHipo = 0;
                        this.comisionAdminHipo1 = 0;
                        this.excedenteComisionAdminHipo = 0;
                        this.registroHipoteca = 0;
                        this.interesesAnticipados = 0;
                        this.interesesAnticipadosp = 0;
                        this.administracion = 0;
                        this.administracionp = 0;
                        this.aval = 0;
                        this.avalp = 0;
                        this.totalCredito = 0;
                        this.soloInteres = 0;
                        this.valorCuotaTotal = 0;
                        this.valorgmf = 0;
                        // Fin Reset Valores
                        // this.producto = producto;
                        this.nombre = producto.name;
                        this.iEfectivoAnual = producto.iEfectivoAnual;
                        this.iMesVencido = ((((Math.pow((1 + (producto.iEfectivoAnual / 100)), (1 / 12))) - 1) * 12) * 100) / 12;
                        this.iEfectivoAnualMax = producto.iEfectivoAnualMax;
                        this.iMoraEfectivoAnual = producto.iMoraEfectivoAnual;
                        this.valuemin = producto.valuemin;
                        this.valuemax = producto.valuemax;
                        this.termmin = producto.termmin;
                        this.termmax = producto.termmax;
                        this.valorSolicitado = producto.valuemin;
                        this.plazo = producto.termmin;
                        this.step = producto.step;
                        this.administracion = producto.administracion;
                        this.administracionp = producto.administracion;
                        this.ivap = producto.iva;
                        this.iva = (this.administracion / 100) * this.ivap;
                        if (producto.aval) {
                            this.avalp = producto.aval;
                            this.aval = (this.valorSolicitado / 100) * this.avalp;
                        }
                        if (producto.parqueadero) {
                            this.parqueadero = producto.parqueadero;
                        }
                        if (producto.peritaje) {
                            this.peritaje = producto.peritaje;
                        }
                        if (producto.registroSimit) {
                            this.registroSimit = producto.registroSimit;
                        }
                        if (producto.gmfCuatroxMil) {
                            this.gmfCuatroxMil = producto.gmfCuatroxMil;
                            this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
                        }
                        if (producto.comisionAdminHipo) {
                            this.comisionAdminHipo = producto.comisionAdminHipo;
                        }
                        if (producto.excedenteComisionAdminHipo) {
                            this.excedenteComisionAdminHipo = producto.excedenteComisionAdminHipo;
                        }
                        if (producto.registroHipoteca) {
                            this.registroHipoteca = producto.registroHipoteca;
                        }
                        if (producto.interesesAnticipados) {
                            this.interesesAnticipadosp = producto.interesesAnticipados;
                            this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
                        }
                        this.formularioSolicitud.patchValue({ value: producto.valuemin });
                        this.formularioSolicitud.patchValue({ time: producto.termmin });
                        if (this.nombre === 'Prestamo Personal') {
                            this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                            this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                            this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                            this.totalCredito = this.valorCuotaBase + this.administracion + this.iva + this.aval;
                        }
                        else {
                            this.soloInteres = 0;
                            this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
                            this.totalCredito = 0;
                        }
                        this.valorConsignar =
                            this.valorSolicitado -
                                (this.valorgmf +
                                    this.registroSimit +
                                    this.peritaje +
                                    this.comisionAdminHipo1 +
                                    this.registroHipoteca +
                                    this.interesesAnticipados);
                    });
                }
            });
        });
        (_a = this.formularioSolicitud.get('value')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((value) => {
            this.valorSolicitado = value;
            var im = this.iMesVencido / 100;
            var im2 = Math.pow((1 + im), -(this.plazo));
            const a = (this.valorSolicitado * im) / (1 - im2);
            this.valorCuotaBase = a;
            // this.valorCuotaBase = a.toFixed(2);
            if (this.comisionAdminHipo !== 0 && this.valorSolicitado > 50000000 && this.comisionAdminHipo !== 0) {
                let diferencia = ((this.valorSolicitado - 50000000) / 1000000) * this.excedenteComisionAdminHipo;
                this.comisionAdminHipo1 = this.comisionAdminHipo + diferencia;
            }
            else if (this.comisionAdminHipo !== 0) {
                this.comisionAdminHipo1 = 2000000;
            }
            this.aval = (this.valorSolicitado / 100) * this.avalp;
            this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
            if (this.nombre === 'Prestamo Personal') {
                this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
                this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
            }
            else {
                this.soloInteres = 0;
                this.totalCredito = 0;
                this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
            }
            this.valorConsignar =
                this.valorSolicitado -
                    (this.registroSimit +
                        this.peritaje +
                        this.valorgmf +
                        this.comisionAdminHipo1 +
                        this.registroHipoteca +
                        this.interesesAnticipados);
        });
        (_b = this.formularioSolicitud.get('time')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((time) => {
            this.plazo = time;
            this.administracion = this.administracionp;
            if (this.nombre === 'Prestamo Personal') {
                this.administracion = this.administracion * this.plazo;
                this.iva = (this.administracion / 100) * this.ivap;
            }
            var im = this.iMesVencido / 100;
            var im2 = Math.pow((1 + im), -(this.plazo));
            let a = (this.valorSolicitado * im) / (1 - im2);
            this.valorCuotaBase = a;
            if (this.nombre === 'Prestamo Personal') {
                this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
                this.soloInteres = (this.valorCuotaBase * this.plazo) - this.valorSolicitado;
                this.valorCuotaTotal = this.valorCuotaBase + this.totalPersonal;
                this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval;
            }
            else {
                this.valorCuotaTotal = this.valorCuotaBase + this.iva + this.aval + this.administracion;
                this.soloInteres = 0;
                this.totalCredito = 0;
            }
        });
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
    formatLabel1(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
CalcComponent.ɵfac = function CalcComponent_Factory(t) { return new (t || CalcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
CalcComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalcComponent, selectors: [["app-calc"]], outputs: { value: "value" }, decls: 68, vars: 36, consts: [[1, "card", "x"], [1, "form", 3, "formGroup"], ["f", "ngForm"], [1, "card-body"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "mb10"], [1, "text-white", "mb20"], [1, "slider1"], [1, "text-white"], ["id", "pricipal-slide1"], ["thumbLabel", "", "tickInterval", "5", "name", "valorSolicitado", "formControlName", "value", 1, "min", 3, "displayWith", "step", "min", "max"], ["class", "text-white", 4, "ngIf"], [1, "slider"], ["id", "totalyear-slide"], ["formControlName", "time", "name", "plazo", "thumbLabel", "", "tickInterval", "1", 1, "max", 3, "displayWith", "min", "max"], [1, "col-xl-3", "col-lg-3", "col-md-3", "col-sm-3", "col-3"], [1, "single-total"], [1, "text-white", "lead-cal-small-text"], ["id", "emi", 1, "text-white", "emi-price"], ["id", "tbl_la", 1, "text-white"], ["id", "tbl_emi", 1, "text-white"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-4"], [1, "col-xl-8", "col-lg-8", "col-md-8", "col-sm-8", "col-8"]], template: function CalcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Obten Tu Prestamo Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cuanto Dinero Necesitas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CalcComponent_span_15_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CalcComponent_span_16_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "A Cuantos Meses Deseas El Prestamo?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-slider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CalcComponent_span_24_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CalcComponent_span_25_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Inter\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Iva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Aval");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Cuota Mensual: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](67, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formularioSolicitud);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.formatLabel1)("step", ctx.step)("min", ctx.valuemin)("max", ctx.valuemax);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valorSolicitado > 1 && ctx.valorSolicitado < 1000000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valorSolicitado >= 1000000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.formatLabel)("min", ctx.termmin)("max", ctx.termmax);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plazo > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plazo <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](32, 18, ctx.soloInteres, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](39, 21, ctx.administracion, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](46, 24, ctx.iva, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](53, 27, ctx.aval, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](60, 30, ctx.totalCredito, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](67, 33, ctx.valorCuotaTotal, "1.0-0"), " pesos");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSlider, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  background-color: rgba(187, 181, 181, 0.233);\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb-label {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-track-fill {\n  background-color: blue;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb-label {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-track-fill {\n  background-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtBQUNGOztBQUlBO0VBRUUsNENBQUE7RUFDQSxXQUFBO0FBRkY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSx3QkFBQTtBQUhGOztBQU1BO0VBQ0Usd0JBQUE7QUFIRjs7QUFNQTtFQUNFLHdCQUFBO0FBSEYiLCJmaWxlIjoiY2FsYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi54e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgNiwgNiwgMC40MDQpO1xyXG5cclxufVxyXG5cclxuXHJcbm1hdC1zbGlkZXIge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTgxLCAxODEsIDAuMjMzKTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWluIC5tYXQtc2xpZGVyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1pbiAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5taW4gLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3949:
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/services/auth.service */ 6518);





class CardComponent {
    constructor(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.miFormulario = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            celular: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            mensaje: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    ngOnInit() {
    }
    getError(campo) {
        var _a, _b, _c, _d;
        let message = '';
        if ((_a = this.miFormulario.get(campo)) === null || _a === void 0 ? void 0 : _a.hasError('required')) {
            message = 'Porfavor llene este Campo';
        }
        else if ((_b = this.miFormulario.get(campo)) === null || _b === void 0 ? void 0 : _b.hasError('minlength')) {
            const minLength = (_d = (_c = this.miFormulario.get(campo)) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.minlength.requiredLength;
            message = `Debe Tener mas mas de ${minLength} letras`;
        }
        return message;
    }
    campoEsValido(campo) {
        var _a, _b, _c;
        return ((((_a = this.miFormulario.get(campo)) === null || _a === void 0 ? void 0 : _a.touched) || ((_b = this.miFormulario.get(campo)) === null || _b === void 0 ? void 0 : _b.dirty)) && ((_c = this.miFormulario.get(campo)) === null || _c === void 0 ? void 0 : _c.invalid));
    }
    guardar() {
        if (this.miFormulario.invalid) {
            this.miFormulario.markAllAsTouched();
            console.log('Formulario no válido');
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Error',
                text: 'Formulario no válido',
                icon: 'error',
            });
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Espere',
            text: 'Guardando Informacion',
            allowOutsideClick: false
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
        const { nombre, email, celular, mensaje, } = this.miFormulario.value;
        this.authService.enviarEmail(nombre, email, celular, mensaje).subscribe();
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Mensaje Enviado',
            text: 'Pronto Nos Comunicaremos Con Usted',
        });
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], decls: 31, vars: 2, consts: [[1, "card", "x"], [1, "card-body"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "text-light", "text-center"], [1, "md-form"], [1, "fas", "fa-user", "prefix", "grey-text"], ["formControlName", "nombre", "type", "text", "id", "form3", 1, "form-control", "text-white"], ["for", "form3"], [1, "fas", "fa-envelope", "prefix", "grey-text"], ["formControlName", "email", "type", "text", "id", "form2", 1, "form-control", "text-white"], ["for", "form2"], ["formControlName", "celular", "type", "text", "maxlength", "10", "id", "form2", 1, "form-control", "text-white"], [1, "fas", "fa-pencil-alt", "prefix", "grey-text"], ["formControlName", "mensaje", "type", "text", "id", "form8", 1, "md-textarea", "text-white"], ["for", "form8"], [1, "text-center"], [1, "btn", "btn-indigo", 3, "disabled"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CardComponent_Template_form_ngSubmit_2_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Escribenos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Su nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Su email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Su Celular");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Su mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.miFormulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.miFormulario.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtBQUNGIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDYsIDYsIDAuNDA0KTtcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2282:
/*!*************************************************!*\
  !*** ./src/app/shared/login/login.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/services/auth.service */ 6518);







class LoginComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.miFormulario = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
        });
        this.flaq = 0;
    }
    ngOnInit() {
    }
    login() {
        // Extract email and password the miFormulario
        const { email, password } = this.miFormulario.value;
        this.authService.login(email, password).subscribe((resp) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Espere',
                text: 'Verificando',
                allowOutsideClick: false
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
            // console.log('login:', resp);
            if (resp === 'user') {
                this.router.navigateByUrl('/dashboard/misolicitud');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Bienvenido',
                    text: email,
                    icon: 'success',
                });
            }
            else if (resp === 'moderator') {
                this.router.navigateByUrl('/dashboard/solicitudes');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Bienvenido Analista',
                    text: email,
                    icon: 'success',
                });
            }
            else if (resp === 'admin') {
                this.router.navigateByUrl('/dashboard/usuarios');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Bienvenido  Administrador',
                    text: email,
                    icon: 'success',
                });
            }
            else if (resp === 'user200') {
                this.router.navigateByUrl('/landing/quickforms');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Continua Ingresando Los Siguientes Datos',
                    text: email,
                    icon: 'success',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', resp, 'error');
            }
        });
    }
    calc(valor) {
        this.value.emit(valor);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], outputs: { value: "value" }, decls: 19, vars: 2, consts: [[1, "card", "x"], [1, "card-body"], ["autocomplete", "off", 1, "text-white", "text-center", 3, "formGroup", "ngSubmit"], ["type", "email", "formControlName", "email", "placeholder", "Ingrese su email"], ["type", "password", "formControlName", "password", "placeholder", "Ingrese su contrase\u00F1a"], ["type", "submit", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00A1Hola!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Ingresa tu e\u2011mail y contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Contrase\u00F1a: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Continuar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.miFormulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.miFormulario.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #07090a;\n  background-color: #3F51B5;\n  color: #ffffff;\n  padding: 5px 10px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  border: 1px solid #c0370d;\n  background-color: #4f5daa;\n  color: #ffffff;\n  padding: 5px 10px;\n}\n\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7QUFDRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTs7RUFFRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUZGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA2LCA2LCAwLjQwNCk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzA3MDkwYTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMDM3MGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNWRhYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkLFxyXG5idXR0b25bZGlzYWJsZWRde1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/data.service */ 2468);



class NavbarComponent {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 43, vars: 0, consts: [[1, "navbar", "controlFixed", "navbar-expand-lg", "navbar-dark", "scrolling-navbar"], [1, "container"], ["routerLink", "/landing/personal", 1, "navbar-brand"], [1, "fab", "fa-accusoft"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/landing/quickloan", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "nav-link"], ["routerLink", "/landing/personal", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "nav-link"], ["routerLink", "/landing/hipoteca", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "nav-link"], ["routerLink", "/landing/vehiculo", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "nav-link"], ["routerLink", "/landing/construccion", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "nav-link"], [1, "nav-item"], ["routerLink", "/landing/invierte", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "nav-link"], [1, "navbar-nav", "nav-flex-icons"], ["href", "https://www.facebook.com/lendiup/", "target", "_blank", 1, "nav-link"], [1, "fab", "fa-facebook-f"], ["href", "https://twitter.com/lendiup", "target", "_blank", 1, "nav-link"], [1, "fab", "fa-twitter"], ["target", "_blank", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "nav-link", "border", "border-light", "rounded", 3, "click"], [1, "fas", "fa-sign-in-alt"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " LENDIUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Prestamos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "UltraRapido ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Personales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Sobre Hipoteca");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Sobre Vehiculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Para Construccion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "QUIERES INVIERTIR?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_40_listener() { return ctx.dataService.viewLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "INGRESAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n@media (max-width: 740px) {\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n    height: 1000px;\n  }\n}\n\n@media (min-width: 800px) and (max-width: 850px) {\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n    height: 650px;\n  }\n}\n\n.controlFixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@media (min-width: 100px) and (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]:not(.top-nav-collapse) {\n    background: #1c2331 !important;\n  }\n\n  .controlFixed[_ngcontent-%COMP%] {\n    position: relative;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFLFlBQUE7QUFDRjs7QUFFQTtFQUNFOzs7O0lBSUUsY0FBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTs7OztJQUlFLGFBQUE7RUFBRjtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsOEJBQUE7RUFBRjs7RUFFQTtJQUNFLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxPQUFBO0lBQ0EsVUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcclxuYm9keSxcclxuaGVhZGVyLFxyXG4udmlldyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICBodG1sLFxyXG4gIGJvZHksXHJcbiAgaGVhZGVyLFxyXG4gIC52aWV3IHtcclxuICAgIGhlaWdodDogMTAwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICBodG1sLFxyXG4gIGJvZHksXHJcbiAgaGVhZGVyLFxyXG4gIC52aWV3IHtcclxuICAgIGhlaWdodDogNjUwcHg7XHJcbiAgfVxyXG59XHJcbi5jb250cm9sRml4ZWR7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAzMDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAubmF2YmFyOm5vdCgudG9wLW5hdi1jb2xsYXBzZSkge1xyXG4gICAgYmFja2dyb3VuZDogIzFjMjMzMSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29udHJvbEZpeGVke1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 5993:
/*!***************************************************************************!*\
  !*** ./src/app/shared/register-quickloan/register-quickloan.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterQuickloanComponent": () => (/* binding */ RegisterQuickloanComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/services/auth.service */ 6518);







class RegisterQuickloanComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.miFormulario = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            secondname: '',
            surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            secondsurname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
            terminos: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.requiredTrue],
            typeloan: '',
            // politicas: [false, Validators.requiredTrue],
            // habeas: [false, Validators.requiredTrue],
        });
    }
    ngOnInit() {
        this.miFormulario.reset({
            condiciones: false,
            politicas: false,
            habeas: false
        });
    }
    login() {
        this.value.emit(2);
    }
    register() {
        this.miFormulario.controls['typeloan'].setValue('quickloan');
        const { name, secondname, surname, secondsurname, email, password, typeloan } = this.miFormulario.value;
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Espere',
            text: 'Registrando Espere Porfavor ...',
            allowOutsideClick: false
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
        this.authService.register(name, secondname, surname, secondsurname, email, password, typeloan).subscribe((resp) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
            // console.log(ok);
            if (resp === 'user') {
                this.router.navigateByUrl('/dashboard/misolicitud');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Bienvenido',
                    text: email,
                    icon: 'success',
                });
            }
            else if (resp === 'moderator') {
                this.router.navigateByUrl('/dashboard/solicitudes');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Bienvenido Analista',
                    text: email,
                    icon: 'success',
                });
            }
            else if (resp === 'admin') {
                this.router.navigateByUrl('/dashboard/usuarios');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Bienvenido  Administrador',
                    text: email,
                    icon: 'success',
                });
            }
            else if (resp === 'user200') {
                this.router.navigateByUrl('/landing/quickforms');
                // Swal.fire({
                //   title: 'Bienvenido',
                //   text: email,
                //   icon: 'success',
                // });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', resp, 'error');
            }
        });
    }
    campoEsValido(campo) {
        return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
    }
    calc(valor) {
        this.value.emit(4);
    }
}
RegisterQuickloanComponent.ɵfac = function RegisterQuickloanComponent_Factory(t) { return new (t || RegisterQuickloanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
RegisterQuickloanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterQuickloanComponent, selectors: [["app-register-quickloan"]], outputs: { value: "value" }, decls: 49, vars: 2, consts: [[1, "card", "x"], [1, "card-body"], ["autocomplete", "off", 1, "text-white", "text-center", 3, "formGroup", "ngSubmit"], [3, "click"], [1, "row"], [1, "col-md-6"], ["type", "text", "formControlName", "name", "placeholder", "Primer nombre"], ["type", "text", "formControlName", "secondname", "placeholder", "Segundo nombre"], ["type", "text", "formControlName", "surname", "placeholder", "Primer apellido"], ["type", "text", "formControlName", "secondsurname", "placeholder", "Segundo apellido"], ["type", "email", "formControlName", "email", "placeholder", "Ingrese su email"], ["type", "password", "formControlName", "password", "placeholder", "Ingrese su contrase\u00F1a"], [1, "form-check", "mb-3"], ["type", "checkbox", "id", "checkbox1", "formControlName", "terminos", 1, "form-check-input"], ["href", "../../../assets/pdf/Terminos Y Condiciones - Lendiup.pdf", "for", "checkbox1", 1, "form-check-label", "text-white"], ["type", "button", 1, "mx-3", 3, "click"], [1, "far", "fa-hand-point-left"], ["type", "submit", 3, "disabled"], [1, "fa", "fa-save"]], template: function RegisterQuickloanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterQuickloanComponent_Template_form_ngSubmit_2_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Ingresa tus datos como aparecen en tu c\u00E9dula");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterQuickloanComponent_Template_button_click_5_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Ya Eres Cliente?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Primer Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Segundo Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Primer Apellido:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Segundo Apellido:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Contrase\u00F1a: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "fieldset", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Acepto Terminos Y Condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterQuickloanComponent_Template_button_click_43_listener() { return ctx.calc(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Atras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Continuar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.miFormulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.miFormulario.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #07090a;\n  background-color: #3F51B5;\n  color: #ffffff;\n  padding: 5px 10px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  border: 1px solid #c0370d;\n  background-color: #4f5daa;\n  color: #ffffff;\n  padding: 5px 10px;\n}\n\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXF1aWNrbG9hbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0FBQ0Y7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7O0VBRUUseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFERiIsImZpbGUiOiJyZWdpc3Rlci1xdWlja2xvYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDYsIDYsIDAuNDA0KTtcclxuXHJcbn1cclxuXHJcblxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNzA5MGE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzAzNzBkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjVkYWE7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCxcclxuYnV0dG9uW2Rpc2FibGVkXXtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8464:
/*!*******************************************************!*\
  !*** ./src/app/shared/register/register.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/services/auth.service */ 6518);







class RegisterComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.miFormulario = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            secondname: '',
            surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            secondsurname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
            terminos: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.requiredTrue],
            politicas: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.requiredTrue],
            habeas: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.requiredTrue],
        });
    }
    ngOnInit() {
        this.miFormulario.reset({
            condiciones: false,
            politicas: false,
            habeas: false
        });
    }
    register() {
        const { name, secondname, surname, secondsurname, email, password } = this.miFormulario.value;
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Espere',
            text: 'Registrando Espere Porfavor ...',
            allowOutsideClick: false
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
        this.authService.register(name, secondname, surname, secondsurname, email, password, '').subscribe((resp) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
            // console.log(ok);
            if (resp === 'user') {
                this.router.navigateByUrl('/dashboard/misolicitud');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Bienvenido',
                    text: email,
                    icon: 'success',
                });
            }
            else if (resp === 'moderator') {
                this.router.navigateByUrl('/dashboard/solicitudes');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Bienvenido Analista',
                    text: email,
                    icon: 'success',
                });
            }
            else if (resp === 'admin') {
                this.router.navigateByUrl('/dashboard/usuarios');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Bienvenido  Administrador',
                    text: email,
                    icon: 'success',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', resp, 'error');
            }
        });
    }
    campoEsValido(campo) {
        return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
    }
    calc(valor) {
        this.value.emit(valor);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], outputs: { value: "value" }, decls: 55, vars: 2, consts: [[1, "card", "x"], [1, "card-body"], ["autocomplete", "off", 1, "text-white", "text-center", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6"], ["type", "text", "formControlName", "name", "placeholder", "Primer nombre"], ["type", "text", "formControlName", "secondname", "placeholder", "Segundo nombre"], ["type", "text", "formControlName", "surname", "placeholder", "Primer apellido"], ["type", "text", "formControlName", "secondsurname", "placeholder", "Segundo apellido"], ["type", "email", "formControlName", "email", "placeholder", "Ingrese su email"], ["type", "password", "formControlName", "password", "placeholder", "Ingrese su contrase\u00F1a"], [1, "form-check", "mb-3"], ["type", "checkbox", "id", "checkbox1", "formControlName", "terminos", 1, "form-check-input"], ["href", "../../../assets/pdf/Terminos Y Condiciones - Lendiup.pdf", "for", "checkbox1", 1, "form-check-label", "text-white"], ["type", "checkbox", "id", "checkbox2", "formControlName", "politicas", 1, "form-check-input"], ["href", "../../../assets/pdf/Politica-de-privacidad.pdf", "for", "checkbox2", 1, "form-check-label", "text-white"], ["type", "checkbox", "id", "checkbox3", "formControlName", "habeas", 1, "form-check-input"], ["href", "../../../assets/pdf/Habeas-Data.pdf", "for", "checkbox3", 1, "form-check-label", "text-white"], ["type", "button", 1, "mx-3", 3, "click"], [1, "far", "fa-hand-point-left"], ["type", "submit", 3, "disabled"], [1, "fa", "fa-save"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_2_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Crear Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Primer Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Segundo Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Primer Apellido:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Segundo Apellido:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Contrase\u00F1a: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "fieldset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Acepto Terminos Y Condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "fieldset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Acepta Politicas De Privacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "fieldset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Acepta Habeas Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_49_listener() { return ctx.calc(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Atras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Continuar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.miFormulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.miFormulario.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #07090a;\n  background-color: #3F51B5;\n  color: #ffffff;\n  padding: 5px 10px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  border: 1px solid #c0370d;\n  background-color: #4f5daa;\n  color: #ffffff;\n  padding: 5px 10px;\n}\n\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7QUFDRjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTs7RUFFRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQURGIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA2LCA2LCAwLjQwNCk7XHJcblxyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDcwOTBhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwMzcwZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY1ZGFhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQsXHJcbmJ1dHRvbltkaXNhYmxlZF17XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6235:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/requisito-construccion/requisito-construccion.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitoConstruccionComponent": () => (/* binding */ RequisitoConstruccionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);



class RequisitoConstruccionComponent {
    constructor() {
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    calc(valor) {
        this.value.emit(valor);
    }
}
RequisitoConstruccionComponent.ɵfac = function RequisitoConstruccionComponent_Factory(t) { return new (t || RequisitoConstruccionComponent)(); };
RequisitoConstruccionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequisitoConstruccionComponent, selectors: [["app-rq4"]], outputs: { value: "value" }, decls: 35, vars: 0, consts: [[1, "card", "x"], [1, "card-body"], ["name", ""], [1, "text-light", "text-center"], [1, "text-white"], [1, "fas", "fa-asterisk", "text-white"], [1, "text-center"], ["type", "button", 1, "btn", "btn-indigo", "btn-sm", 3, "click"]], template: function RequisitoConstruccionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Requisitos Para Empresas De Construccion:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Certificado de Camara Y Comercio Y Rut De La Empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cedula Del Representante Legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Extractos Bancarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Estudio Financieros De La Obra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Programacion De Obra Y Permisos Curaduria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Licencia De Construccion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequisitoConstruccionComponent_Template_button_click_32_listener() { return ctx.calc(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Calcula Tu Prestamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVpc2l0by1jb25zdHJ1Y2Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtBQUNGIiwiZmlsZSI6InJlcXVpc2l0by1jb25zdHJ1Y2Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDYsIDYsIDAuNDA0KTtcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5459:
/*!***************************************************************************!*\
  !*** ./src/app/shared/requisito-hipoteca/requisito-hipoteca.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitoHipotecaComponent": () => (/* binding */ RequisitoHipotecaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);



class RequisitoHipotecaComponent {
    constructor() {
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    calc(valor) {
        this.value.emit(valor);
    }
}
RequisitoHipotecaComponent.ɵfac = function RequisitoHipotecaComponent_Factory(t) { return new (t || RequisitoHipotecaComponent)(); };
RequisitoHipotecaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequisitoHipotecaComponent, selectors: [["app-rq3"]], outputs: { value: "value" }, decls: 31, vars: 0, consts: [[1, "card", "x"], [1, "card-body"], ["name", ""], [1, "text-light", "text-center"], [1, "text-white"], [1, "fas", "fa-asterisk", "text-white"], [1, "text-center"], ["type", "button", 1, "btn", "btn-indigo", "btn-sm", 3, "click"]], template: function RequisitoHipotecaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Requisitos Prestamo Sobrer Hipoteca:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ser mayor de 18 a\u00F1os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Tener correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tener una cuenta bancaria a tu nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Ser titular del inmbueble");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " El inmueble debe estar libre de embargos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequisitoHipotecaComponent_Template_button_click_28_listener() { return ctx.calc(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Calcula Tu Prestamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVpc2l0by1oaXBvdGVjYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0FBQ0YiLCJmaWxlIjoicmVxdWlzaXRvLWhpcG90ZWNhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA2LCA2LCAwLjQwNCk7XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3506:
/*!***************************************************************************!*\
  !*** ./src/app/shared/requisito-personal/requisito-personal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitoPersonalComponent": () => (/* binding */ RequisitoPersonalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);



class RequisitoPersonalComponent {
    constructor() {
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    calc(valor) {
        this.value.emit(valor);
    }
}
RequisitoPersonalComponent.ɵfac = function RequisitoPersonalComponent_Factory(t) { return new (t || RequisitoPersonalComponent)(); };
RequisitoPersonalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequisitoPersonalComponent, selectors: [["app-rq1"]], outputs: { value: "value" }, decls: 23, vars: 0, consts: [[1, "card", "x"], [1, "card-body"], ["name", ""], [1, "text-light", "text-center"], [1, "text-white"], [1, "fas", "fa-asterisk", "text-white"], [1, "text-center"], ["type", "button", 1, "btn", "btn-indigo", "btn-sm", 3, "click"]], template: function RequisitoPersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Requisitos Prestamo Personal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ser mayor de 18 a\u00F1os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Tener correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tener una cuenta bancaria a tu nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequisitoPersonalComponent_Template_button_click_20_listener() { return ctx.calc(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Calcula Tu Prestamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVpc2l0by1wZXJzb25hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0FBQ0YiLCJmaWxlIjoicmVxdWlzaXRvLXBlcnNvbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA2LCA2LCAwLjQwNCk7XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5384:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/requisito-quickloan/requisito-quickloan.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitoQuickloanComponent": () => (/* binding */ RequisitoQuickloanComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);



class RequisitoQuickloanComponent {
    constructor() {
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    calc(valor) {
        this.value.emit(valor);
    }
}
RequisitoQuickloanComponent.ɵfac = function RequisitoQuickloanComponent_Factory(t) { return new (t || RequisitoQuickloanComponent)(); };
RequisitoQuickloanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequisitoQuickloanComponent, selectors: [["app-requisito-quickloan"]], outputs: { value: "value" }, decls: 27, vars: 0, consts: [[1, "card", "x"], [1, "card-body"], ["name", ""], [1, "text-light", "text-center"], [1, "text-white"], [1, "fas", "fa-asterisk", "text-white"], [1, "text-center"], ["type", "button", 1, "btn", "btn-indigo", "btn-sm", 3, "click"]], template: function RequisitoQuickloanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Requisitos Prestamo Personal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ser Colombiano Mayor De 18 A\u00F1os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Tener Correo Electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tener Una Cuenta Bancaria Activa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Tener Un Numero Celular Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequisitoQuickloanComponent_Template_button_click_24_listener() { return ctx.calc(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Calcula Tu Prestamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVpc2l0by1xdWlja2xvYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtBQUNGIiwiZmlsZSI6InJlcXVpc2l0by1xdWlja2xvYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDYsIDYsIDAuNDA0KTtcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8631:
/*!***************************************************************************!*\
  !*** ./src/app/shared/requisito-vehiculo/requisito-vehiculo.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitoVehiculoComponent": () => (/* binding */ RequisitoVehiculoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);



class RequisitoVehiculoComponent {
    constructor() {
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    calc(valor) {
        this.value.emit(valor);
    }
}
RequisitoVehiculoComponent.ɵfac = function RequisitoVehiculoComponent_Factory(t) { return new (t || RequisitoVehiculoComponent)(); };
RequisitoVehiculoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequisitoVehiculoComponent, selectors: [["app-rq2"]], outputs: { value: "value" }, decls: 35, vars: 0, consts: [[1, "card", "x"], [1, "card-body"], ["name", ""], [1, "text-light", "text-center"], [1, "text-white"], [1, "fas", "fa-asterisk", "text-white"], [1, "text-center"], ["type", "button", 1, "btn", "btn-indigo", "btn-sm", 3, "click"]], template: function RequisitoVehiculoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Requisitos Prestamo Sobre Vehiculo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ser mayor de 18 a\u00F1os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Tener correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tener una cuenta bancaria a tu nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Ser el titular del veh\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Veh\u00EDculo menor a 10 a\u00F1os de antiguedad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Si es blindado, debe ser inferior a blindaje III");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequisitoVehiculoComponent_Template_button_click_32_listener() { return ctx.calc(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Calcula Tu Prestamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: [".x[_ngcontent-%COMP%] {\n  background-color: rgba(7, 6, 6, 0.404);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVpc2l0by12ZWhpY3Vsby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0FBQ0YiLCJmaWxlIjoicmVxdWlzaXRvLXZlaGljdWxvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCA2LCA2LCAwLjQwNCk7XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material/material.module */ 898);
/* harmony import */ var _calc_construccion_calc_construccion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-construccion/calc-construccion.component */ 4902);
/* harmony import */ var _calc_hipoteca_calc_hipoteca_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calc-hipoteca/calc-hipoteca.component */ 7166);
/* harmony import */ var _calc_invierte_calc_invierte_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calc-invierte/calc-invierte.component */ 2410);
/* harmony import */ var _calc_quickloan_calc_quickloan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calc-quickloan/calc-quickloan.component */ 876);
/* harmony import */ var _calc_vehiculo_calc_vehiculo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calc-vehiculo/calc-vehiculo.component */ 1126);
/* harmony import */ var _calc_calc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calc/calc.component */ 9505);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ 3949);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ 2282);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ 4696);
/* harmony import */ var _register_quickloan_register_quickloan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register-quickloan/register-quickloan.component */ 5993);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ 8464);
/* harmony import */ var _requisito_construccion_requisito_construccion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./requisito-construccion/requisito-construccion.component */ 6235);
/* harmony import */ var _requisito_hipoteca_requisito_hipoteca_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./requisito-hipoteca/requisito-hipoteca.component */ 5459);
/* harmony import */ var _requisito_personal_requisito_personal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./requisito-personal/requisito-personal.component */ 3506);
/* harmony import */ var _requisito_quickloan_requisito_quickloan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./requisito-quickloan/requisito-quickloan.component */ 5384);
/* harmony import */ var _requisito_vehiculo_requisito_vehiculo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./requisito-vehiculo/requisito-vehiculo.component */ 8631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 7716);





















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__.NavbarComponent,
        _card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_11__.RegisterComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__.LoginComponent,
        _calc_calc_component__WEBPACK_IMPORTED_MODULE_6__.CalcComponent,
        _requisito_personal_requisito_personal_component__WEBPACK_IMPORTED_MODULE_14__.RequisitoPersonalComponent,
        _requisito_hipoteca_requisito_hipoteca_component__WEBPACK_IMPORTED_MODULE_13__.RequisitoHipotecaComponent,
        _requisito_vehiculo_requisito_vehiculo_component__WEBPACK_IMPORTED_MODULE_16__.RequisitoVehiculoComponent,
        _requisito_construccion_requisito_construccion_component__WEBPACK_IMPORTED_MODULE_12__.RequisitoConstruccionComponent,
        _requisito_quickloan_requisito_quickloan_component__WEBPACK_IMPORTED_MODULE_15__.RequisitoQuickloanComponent,
        _calc_hipoteca_calc_hipoteca_component__WEBPACK_IMPORTED_MODULE_2__.CalcHipotecaComponent,
        _calc_vehiculo_calc_vehiculo_component__WEBPACK_IMPORTED_MODULE_5__.CalcVehiculoComponent,
        _calc_construccion_calc_construccion_component__WEBPACK_IMPORTED_MODULE_1__.CalcConstruccionComponent,
        _calc_invierte_calc_invierte_component__WEBPACK_IMPORTED_MODULE_3__.CalcInvierteComponent,
        _calc_quickloan_calc_quickloan_component__WEBPACK_IMPORTED_MODULE_4__.CalcQuickloanComponent,
        _register_quickloan_register_quickloan_component__WEBPACK_IMPORTED_MODULE_10__.RegisterQuickloanComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__.NavbarComponent,
        _card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_11__.RegisterComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__.LoginComponent,
        _calc_calc_component__WEBPACK_IMPORTED_MODULE_6__.CalcComponent,
        _calc_hipoteca_calc_hipoteca_component__WEBPACK_IMPORTED_MODULE_2__.CalcHipotecaComponent,
        _calc_vehiculo_calc_vehiculo_component__WEBPACK_IMPORTED_MODULE_5__.CalcVehiculoComponent,
        _calc_construccion_calc_construccion_component__WEBPACK_IMPORTED_MODULE_1__.CalcConstruccionComponent,
        _calc_invierte_calc_invierte_component__WEBPACK_IMPORTED_MODULE_3__.CalcInvierteComponent,
        _requisito_personal_requisito_personal_component__WEBPACK_IMPORTED_MODULE_14__.RequisitoPersonalComponent,
        _requisito_hipoteca_requisito_hipoteca_component__WEBPACK_IMPORTED_MODULE_13__.RequisitoHipotecaComponent,
        _requisito_vehiculo_requisito_vehiculo_component__WEBPACK_IMPORTED_MODULE_16__.RequisitoVehiculoComponent,
        _requisito_construccion_requisito_construccion_component__WEBPACK_IMPORTED_MODULE_12__.RequisitoConstruccionComponent,
        _requisito_quickloan_requisito_quickloan_component__WEBPACK_IMPORTED_MODULE_15__.RequisitoQuickloanComponent,
        _calc_quickloan_calc_quickloan_component__WEBPACK_IMPORTED_MODULE_4__.CalcQuickloanComponent,
        _register_quickloan_register_quickloan_component__WEBPACK_IMPORTED_MODULE_10__.RegisterQuickloanComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_landing_landing_module_ts.js.map