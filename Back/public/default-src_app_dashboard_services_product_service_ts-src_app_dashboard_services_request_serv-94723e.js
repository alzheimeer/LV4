(self["webpackChunklendiup"] = self["webpackChunklendiup"] || []).push([["default-src_app_dashboard_services_product_service_ts-src_app_dashboard_services_request_serv-94723e"],{

/***/ 1053:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/services/product.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class ProductService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    get producto() {
        return Object.assign({}, this._producto);
    }
    createProduct(producto) {
        const url = `${this.baseUrl}/products`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.post(url, producto, { headers });
    }
    getProducts() {
        const url = `${this.baseUrl}/products`;
        return this.http.get(url);
    }
    getProductById(id) {
        const url = `${this.baseUrl}/products/${id}`;
        return this.http.get(url);
    }
    updateProductsById(producto) {
        const url = `${this.baseUrl}/products`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${producto._id}`, producto, { headers });
    }
    deleteProductById(id) {
        const url = `${this.baseUrl}/products/${id}`;
        return this.http.delete(url);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6224:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/services/request.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);






class RequestService {
    constructor(http) {
        this.http = http;
        this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    get solicitud() {
        return Object.assign({}, this._solicitud);
    }
    get refresh$() {
        return this._refresh$;
    }
    createRequest(solicitud) {
        const url = `${this.baseUrl}/request`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.post(url, solicitud, { headers });
    }
    getRequests() {
        const url = `${this.baseUrl}/request`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.get(url, { headers });
    }
    getRequestById(id) {
        const url = `${this.baseUrl}/request/${id}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        const x = this.http.get(url, { headers });
        return x;
    }
    getRequestByIdUser(id) {
        const url = `${this.baseUrl}/request/user/${id}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.get(url, { headers });
    }
    updateRequestsById(solicitud) {
        const url = `${this.baseUrl}/request`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${solicitud._id}`, solicitud, { headers });
    }
    updateRequestsByIdNumdoc(id, numdoc) {
        const url = `${this.baseUrl}/request/`;
        const body = {
            numdoc,
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, body, { headers });
    }
    updateRequestsByIdMiSolicitud(solicitud) {
        const url = `${this.baseUrl}/request`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http
            .put(`${url}/${solicitud._id}`, solicitud, { headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
            this._refresh$.next();
        }));
    }
    updateRequestsByIdInmueble(id, tipo, matricula, uso, estrato, departamento, ciudad, barrio, direccion, antiguedad, area, valorComercial) {
        const url = `${this.baseUrl}/request`;
        const body = {
            regInmuebleOk: true,
            inmueble: {
                tipo,
                matricula,
                uso,
                estrato,
                departamento,
                ciudad,
                barrio,
                direccion,
                antiguedad,
                area,
                valorComercial,
            },
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, body, { headers });
    }
    updateRequestsByIdVehiculo(id, tipo, placa, modelo, tipoCaja, linea, marca, kilometraje, tipoPlaca, unicoDueno) {
        const url = `${this.baseUrl}/request`;
        const body = {
            regVehiculoOk: true,
            vehiculo: {
                tipo,
                placa,
                modelo,
                tipoCaja,
                linea,
                marca,
                kilometraje,
                tipoPlaca,
                unicoDueno,
            },
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, body, { headers });
    }
    updateRequestsByIdTrabajoEmpleado(id, tiempo, ingreso, direccion, telefono, jefe, cargo) {
        const url = `${this.baseUrl}/request`;
        const body = {
            regTrabajoOk: true,
            trabajoEmpleado: {
                tiempoTrabajando: tiempo,
                ingresoMensual: ingreso,
                direccion,
                telefono,
                jefeInmediato: jefe,
                cargoActual: cargo,
            },
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, body, { headers });
    }
    updateRequestsByIdTrabajoIndependiente(id, tiempo, ingreso, direccion, telefono, actividadComercial) {
        const url = `${this.baseUrl}/request`;
        const body = {
            regTrabajoOk: true,
            trabajoIndependiente: {
                tiempoTrabajando: tiempo,
                ingresoMensual: ingreso,
                direccion,
                telefono,
                actividadComercial,
            },
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, body, { headers });
    }
    updateRequestsByIdTrabajoEmpresa(id, nombre, nit, ingresoMensual, direccion, telefono, actividadComercial) {
        const url = `${this.baseUrl}/request`;
        const body = {
            regTrabajoOk: true,
            trabajoEmpresa: {
                nombre,
                nit,
                ingresoMensual,
                direccion,
                telefono,
                actividadComercial,
            },
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, body, { headers });
    }
    updateRequestsByIdRefFam(id, nombre1, parentezco1, direccion1, celular1, nombre2, parentezco2, direccion2, celular2, nombre3, parentezco3, direccion3, celular3) {
        const url = `${this.baseUrl}/request`;
        const body = {
            regReferenciasOk: true,
            refFamiliar1: {
                nombre: nombre1,
                parentezco: parentezco1,
                direccion: direccion1,
                celular: celular1,
            },
            refFamiliar2: {
                nombre: nombre2,
                parentezco: parentezco2,
                direccion: direccion2,
                celular: celular2,
            },
            refFamiliar3: {
                nombre: nombre3,
                parentezco: parentezco3,
                direccion: direccion3,
                celular: celular3,
            },
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, body, { headers });
    }
    updateRequestsByIdRefCom(id, nombre1, empresa1, direccion1, celular1, nombre2, empresa2, direccion2, celular2, nombre3, empresa3, direccion3, celular3) {
        const url = `${this.baseUrl}/request`;
        const body = {
            regReferenciasComOk: true,
            refComercial1: {
                nombre: nombre1,
                empresa: empresa1,
                direccion: direccion1,
                celular: celular1,
            },
            refComercial2: {
                nombre: nombre2,
                empresa: empresa2,
                direccion: direccion2,
                celular: celular2,
            },
            refComercial3: {
                nombre: nombre3,
                empresa: empresa3,
                direccion: direccion3,
                celular: celular3,
            },
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, body, { headers });
    }
    updateRequestsByIdResultadoCalificacion(id, resultado, calificacion) {
        const url = `${this.baseUrl}/request`;
        const body = {
            resultado,
            calificacion,
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, body, { headers });
    }
    updateRequestsByIdFechaConsignacion(id, fechaConsignacion, fechasFacturacion) {
        const url = `${this.baseUrl}/request`;
        const body = {
            fechaConsignacion,
            fechasFacturacion
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, body, { headers });
    }
    updateRequestsByIdTarjetav(id, docTarjetav) {
        const url = `${this.baseUrl}/request/tarjetav`;
        const fd = new FormData();
        fd.append('tarjetav', docTarjetav);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, fd, { headers });
    }
    updateRequestsByIdMatricula(id, docMatricula) {
        const url = `${this.baseUrl}/request/matricula`;
        const fd = new FormData();
        fd.append('matricula', docMatricula);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, fd, { headers });
    }
    updateRequestsByIdExtracto(id, docExtracto) {
        const url = `${this.baseUrl}/request/extracto`;
        const fd = new FormData();
        fd.append('extracto', docExtracto);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, fd, { headers });
    }
    updateRequestsByIdCamaraCom(id, docCamaraCom) {
        const url = `${this.baseUrl}/request/CamaraCom`;
        const fd = new FormData();
        fd.append('CamaraCom', docCamaraCom);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, fd, { headers });
    }
    updateRequestsByIdRut(id, docRut) {
        const url = `${this.baseUrl}/request/Rut`;
        const fd = new FormData();
        fd.append('Rut', docRut);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, fd, { headers });
    }
    updateRequestsByIdEstudioObra(id, docEstudioObra) {
        const url = `${this.baseUrl}/request/EstudioObra`;
        const fd = new FormData();
        fd.append('EstudioObra', docEstudioObra);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, fd, { headers });
    }
    updateRequestsByIdProgramaObra(id, docProgramaObra) {
        const url = `${this.baseUrl}/request/ProgramaObra`;
        const fd = new FormData();
        fd.append('ProgramaObra', docProgramaObra);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, fd, { headers });
    }
    updateRequestsByIdCuraduria(id, docCuraduria) {
        const url = `${this.baseUrl}/request/Curaduria`;
        const fd = new FormData();
        fd.append('Curaduria', docCuraduria);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, fd, { headers });
    }
    updateRequestsByIdLicenciaConst(id, docLicenciaConst) {
        const url = `${this.baseUrl}/request/LicenciaConst`;
        const fd = new FormData();
        fd.append('LicenciaConst', docLicenciaConst);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, fd, { headers });
    }
    deleteRequestById(id) {
        const url = `${this.baseUrl}/request/${id}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.delete(url, { headers });
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9875:
/*!****************************************************!*\
  !*** ./src/app/dashboard/services/user.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);






class UserService {
    constructor(http) {
        this.http = http;
        this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    get usuario() {
        return Object.assign({}, this._usuario);
    }
    get refresh$() {
        return this._refresh$;
    }
    createUser(usuario) {
        const url = `${this.baseUrl}/users`;
        return this.http.post(url, usuario);
    }
    getUsers() {
        const url = `${this.baseUrl}/users`;
        return this.http.get(url);
    }
    getUserById(id) {
        const url = `${this.baseUrl}/users/${id}`;
        return this.http.get(url);
    }
    updateUserById(usuario) {
        const url = `${this.baseUrl}/users`;
        return this.http.put(`${url}/${usuario._id}`, usuario);
    }
    updateUserByIdX(id, tipodoc, fechaNac, fechaExp, pais, departamento, ciudad, barrio, direccion, numdoc, celular1, celular2, banco, tipocuenta, numcuenta) {
        const url = `${this.baseUrl}/users`;
        const body = {
            personal: {
                tipodoc,
                fechaNac,
                fechaExp,
                pais,
                departamento,
                ciudad,
                barrio,
                direccion,
                numdoc,
                celular1,
                celular2,
            },
            banca: {
                banco,
                tipocuenta,
                numcuenta,
            }
        };
        console.log('id:', id);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, body, { headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
            this._refresh$.next();
        }));
    }
    updateUserByIdPhoto(id, photo) {
        const url = `${this.baseUrl}/users/avatar`;
        const fd = new FormData();
        fd.append('avatar', photo);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, fd, { headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
            this._refresh$.next();
        }));
    }
    updateUserByIdCedula(id, photoCedula) {
        const url = `${this.baseUrl}/users/cedula`;
        const fd = new FormData();
        fd.append('cedula', photoCedula);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, fd, { headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
            this._refresh$.next();
        }));
    }
    updateUserByIdPasaporte(id, photoPasaporte) {
        const url = `${this.baseUrl}/users/pasaporte`;
        const fd = new FormData();
        fd.append('pasaporte', photoPasaporte);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('x-token', localStorage.getItem('token') || '');
        return this.http.put(`${url}/${id}`, fd, { headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
            this._refresh$.next();
        }));
    }
    deleteUserById(id) {
        const url = `${this.baseUrl}/users/${id}`;
        return this.http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
            this._refresh$.next();
        }));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_dashboard_services_product_service_ts-src_app_dashboard_services_request_serv-94723e.js.map