(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"4jCH":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=r("tk/3"),s=r("AytR"),o=r("fXoL");let n=(()=>{class e{constructor(e){this.http=e,this.baseUrl=s.a.baseUrl}get producto(){return Object.assign({},this._producto)}createProduct(e){return this.http.post(`${this.baseUrl}/products`,e)}getProducts(){return this.http.get(`${this.baseUrl}/products`)}getProductById(e){return this.http.get(`${this.baseUrl}/products/${e}`)}updateProductsById(e){const t=`${this.baseUrl}/products`,r=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${t}/${e._id}`,e,{headers:r})}deleteProductById(e){return this.http.delete(`${this.baseUrl}/products/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(o.Yb(a.a))},e.\u0275prov=o.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Q4GG:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var a=r("tk/3"),s=r("XNiG"),o=r("vkgz"),n=r("AytR"),c=r("fXoL");let u=(()=>{class e{constructor(e){this.http=e,this._refresh$=new s.a,this.baseUrl=n.a.baseUrl}get solicitud(){return Object.assign({},this._solicitud)}get refresh$(){return this._refresh$}createRequest(e){const t=`${this.baseUrl}/request`,r=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.post(t,e,{headers:r})}getRequests(){const e=`${this.baseUrl}/request`,t=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.get(e,{headers:t})}getRequestById(e){const t=`${this.baseUrl}/request/${e}`,r=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.get(t,{headers:r})}getRequestByIdUser(e){const t=`${this.baseUrl}/request/user/${e}`,r=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.get(t,{headers:r})}updateRequestsById(e){const t=`${this.baseUrl}/request`,r=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${t}/${e._id}`,e,{headers:r})}updateRequestsByIdNumdoc(e,t){const r=`${this.baseUrl}/request/`,s={numdoc:t},o=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${r}/${e}`,s,{headers:o})}updateRequestsByIdMiSolicitud(e){const t=`${this.baseUrl}/request`,r=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${t}/${e._id}`,e,{headers:r}).pipe(Object(o.a)(()=>{this._refresh$.next()}))}updateRequestsByIdInmueble(e,t,r,s,o,n,c,u,i,d,l,h){const p=`${this.baseUrl}/request`,g={regInmuebleOk:!0,inmueble:{tipo:t,matricula:r,uso:s,estrato:o,departamento:n,ciudad:c,barrio:u,direccion:i,antiguedad:d,area:l,valorComercial:h}},m=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${p}/${e}`,g,{headers:m})}updateRequestsByIdVehiculo(e,t,r,s,o,n,c,u,i,d){const l=`${this.baseUrl}/request`,h={regVehiculoOk:!0,vehiculo:{tipo:t,placa:r,modelo:s,tipoCaja:o,linea:n,marca:c,kilometraje:u,tipoPlaca:i,unicoDueno:d}},p=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${l}/${e}`,h,{headers:p})}updateRequestsByIdTrabajoEmpleado(e,t,r,s,o,n,c){const u=`${this.baseUrl}/request`,i={regTrabajoOk:!0,trabajoEmpleado:{tiempoTrabajando:t,ingresoMensual:r,direccion:s,telefono:o,jefeInmediato:n,cargoActual:c}},d=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${u}/${e}`,i,{headers:d})}updateRequestsByIdTrabajoIndependiente(e,t,r,s,o,n){const c=`${this.baseUrl}/request`,u={regTrabajoOk:!0,trabajoIndependiente:{tiempoTrabajando:t,ingresoMensual:r,direccion:s,telefono:o,actividadComercial:n}},i=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${c}/${e}`,u,{headers:i})}updateRequestsByIdTrabajoEmpresa(e,t,r,s,o,n,c){const u=`${this.baseUrl}/request`,i={regTrabajoOk:!0,trabajoEmpresa:{nombre:t,nit:r,ingresoMensual:s,direccion:o,telefono:n,actividadComercial:c}},d=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${u}/${e}`,i,{headers:d})}updateRequestsByIdRefFam(e,t,r,s,o,n,c,u,i,d,l,h,p){const g=`${this.baseUrl}/request`,m={regReferenciasOk:!0,refFamiliar1:{nombre:t,parentezco:r,direccion:s,celular:o},refFamiliar2:{nombre:n,parentezco:c,direccion:u,celular:i},refFamiliar3:{nombre:d,parentezco:l,direccion:h,celular:p}},$=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${g}/${e}`,m,{headers:$})}updateRequestsByIdRefCom(e,t,r,s,o,n,c,u,i,d,l,h,p){const g=`${this.baseUrl}/request`,m={regReferenciasComOk:!0,refComercial1:{nombre:t,empresa:r,direccion:s,celular:o},refComercial2:{nombre:n,empresa:c,direccion:u,celular:i},refComercial3:{nombre:d,empresa:l,direccion:h,celular:p}},$=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${g}/${e}`,m,{headers:$})}updateRequestsByIdResultadoCalificacion(e,t,r){const s=`${this.baseUrl}/request`,o={resultado:t,calificacion:r},n=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${s}/${e}`,o,{headers:n})}updateRequestsByIdFechaConsignacion(e,t,r){const s=`${this.baseUrl}/request`,o={fechaConsignacion:t,fechasFacturacion:r},n=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${s}/${e}`,o,{headers:n})}updateRequestsByIdTarjetav(e,t){const r=`${this.baseUrl}/request/tarjetav`,s=new FormData;s.append("tarjetav",t);const o=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${r}/${e}`,s,{headers:o})}updateRequestsByIdMatricula(e,t){const r=`${this.baseUrl}/request/matricula`,s=new FormData;s.append("matricula",t);const o=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${r}/${e}`,s,{headers:o})}updateRequestsByIdExtracto(e,t){const r=`${this.baseUrl}/request/extracto`,s=new FormData;s.append("extracto",t);const o=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${r}/${e}`,s,{headers:o})}updateRequestsByIdCamaraCom(e,t){const r=`${this.baseUrl}/request/CamaraCom`,s=new FormData;s.append("CamaraCom",t);const o=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${r}/${e}`,s,{headers:o})}updateRequestsByIdRut(e,t){const r=`${this.baseUrl}/request/Rut`,s=new FormData;s.append("Rut",t);const o=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${r}/${e}`,s,{headers:o})}updateRequestsByIdEstudioObra(e,t){const r=`${this.baseUrl}/request/EstudioObra`,s=new FormData;s.append("EstudioObra",t);const o=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${r}/${e}`,s,{headers:o})}updateRequestsByIdProgramaObra(e,t){const r=`${this.baseUrl}/request/ProgramaObra`,s=new FormData;s.append("ProgramaObra",t);const o=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${r}/${e}`,s,{headers:o})}updateRequestsByIdCuraduria(e,t){const r=`${this.baseUrl}/request/Curaduria`,s=new FormData;s.append("Curaduria",t);const o=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${r}/${e}`,s,{headers:o})}updateRequestsByIdLicenciaConst(e,t){const r=`${this.baseUrl}/request/LicenciaConst`,s=new FormData;s.append("LicenciaConst",t);const o=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(`${r}/${e}`,s,{headers:o})}deleteRequestById(e){const t=`${this.baseUrl}/request/${e}`,r=(new a.c).set("x-token",localStorage.getItem("token")||"");return this.http.delete(t,{headers:r})}}return e.\u0275fac=function(t){return new(t||e)(c.Yb(a.a))},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);