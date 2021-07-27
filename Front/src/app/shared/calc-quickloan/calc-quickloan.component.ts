import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { ProductService } from '../../dashboard/services/product.service';
import { RequestService } from '../../dashboard/services/request.service';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-calc-quickloan',
  templateUrl: './calc-quickloan.component.html',
  styleUrls: ['./calc-quickloan.component.scss']
})
export class CalcQuickloanComponent implements OnInit {

  @Output()
  value = new EventEmitter<number>();

  productos: Product[] = [];
  idProduct = '';

  nombre = '';
  valorSolicitado = 0;
  plazo = 0;
  iMesVencido = 0;
  valorCuotaDiaria = 0;
  valorInteresDia = 0;

  iDiaVencido = 0;
  idia = 0;
  iEfectivoAnual = 0;
  iEfectivoAnualMax = 0;
  iMoraEfectivoAnual = 0;
  soloInteres = 0;
  valorCuotaBase = 0;
  valorCuotaBaseDia = 0;
  valorInteresDiaMostrar = 0;

  administracion = 0;
  administracionp = 0;
  iva = 0;
  ivap = 0;
  aval = 0;
  avalp = 0;

  desAval = 0;
  dayAval = 0;
  desPlataforma = 0; 
  dayPlataforma = 0;

  valuemin = 0;
  valuemax = 0;
  termmin = 0;
  termmax = 0;
  totalCredito = 0;
  totalPersonal = 0;
  parqueadero = 0;
  peritaje = 0;
  registroSimit = 0;
  gmfCuatroxMil = 0;
  valorgmf = 0;
  step = 0;
  comisionAdminHipo = 0;
  comisionAdminHipo1 = 0;
  excedenteComisionAdminHipo = 0;
  registroHipoteca = 0;
  interesesAnticipadosp = 0;
  interesesAnticipados = 0;
  pepe = 0;
  textinfo = '';


  valorConsignar = 0;
  valorCuotaTotal = 0;

  formularioSolicitud: FormGroup = this.fb.group({
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


  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private requestService: RequestService) {

  }
  
  p(type: string) {
    if (type == 'intereses') { this.textinfo = 'El interés corriente aplicado a tu crédito es del 25%EA (Efectivo Anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales julio/2021: 25.77%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.'; this.pepe = 1 }
    if (type == 'aval') { this.textinfo = 'Para el otorgamiento del crédito, debes cumplir con el requisito de constitución de un aval que garantice el cumplimiento del pago total o parcial de tu crédito. Si lo deseas, puedes contratarlo con nuestros proveedores aliados al momento de la solicitud del crédito.'; this.pepe = 2 }
    if (type == 'descuentoaval') { this.textinfo = 'En caso que desees optar por el aval opcional ofrecido por lendiup, podras acceder a descuentos en su costo. Por tu buen comportamiento en el pago de tu crédito, podras hacer efectivo descuentos en el costo total del aval.'; this.pepe = 3 }
    if (type == 'plataforma') { this.textinfo = 'El pago de la plataforma tecnológica es opcional y te permite instrumentar la firma electrónica del crédito 100% en línea, ahorrándote tiempo y dinero. Este costo es realizado únicamente al momento de utilizar nuestros servicios, a través de un cobro de $112.500, el cual podrá tener un descuento por inclusión financiera cuando realices un pago oportuno de tu crédito.'; this.pepe = 4 }
    if (type == 'descuento') { this.textinfo = 'El uso de nuestra plataforma es completamente opcional, sin embargo, si deseas usarla, podrás generar descuentos por inclusión financiera por tu buen comportamiento en el pago de las obligaciones financieras con Lendiup. Así, Lendiup quiere promover el uso de herramientas tecnológicas que ofrezcan productos y servicios que promuevan la inclusión financiera y el acceso al crédito de las personas.'; this.pepe = 5}
    
    if (type == 'x') {this.pepe = 0}
  }
  ngOnInit(): void {

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
            this.desAval = 0;
            this.desPlataforma = 0;

            // Fin Reset Valores

            // this.producto = producto;
            this.nombre = producto.name;
            this.iEfectivoAnual = producto.iEfectivoAnual;
            this.iMesVencido = ((((Math.pow((1 + (producto.iEfectivoAnual / 100)), (1 / 12))) - 1) * 12) * 100) / 12;
            this.iDiaVencido = (((Math.pow((1 + (producto.iEfectivoAnual / 100)), (1 / 365))) - 1));
            console.log("Interes Mes Vencido Anual", this.iMesVencido)
            console.log("Intere Dia ", this.iDiaVencido)

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
            this.iva = ((this.administracion + this.desPlataforma) / 100) * this.ivap;
            if (producto.aval) {
              this.avalp = producto.aval;
              this.aval = (this.valorSolicitado / 100) * this.avalp;
              this.desAval = this.aval / 2;
              this.dayAval = producto.desAval;
              this.dayPlataforma = producto.desPlataforma;
              this.iva = ((this.administracion + this.desPlataforma) / 100) * this.ivap;
            }
            if (producto.parqueadero) { this.parqueadero = producto.parqueadero; }
            if (producto.peritaje) { this.peritaje = producto.peritaje; }
            if (producto.registroSimit) { this.registroSimit = producto.registroSimit; }
            if (producto.gmfCuatroxMil) {
              this.gmfCuatroxMil = producto.gmfCuatroxMil;
              this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
            }

            if (producto.comisionAdminHipo) { this.comisionAdminHipo = producto.comisionAdminHipo; }
            if (producto.excedenteComisionAdminHipo) { this.excedenteComisionAdminHipo = producto.excedenteComisionAdminHipo; }
            if (producto.registroHipoteca) { this.registroHipoteca = producto.registroHipoteca; }
            if (producto.interesesAnticipados) {
              this.interesesAnticipadosp = producto.interesesAnticipados;
              this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
            }
            this.formularioSolicitud.patchValue({ value: producto.valuemin });
            this.formularioSolicitud.patchValue({ time: producto.termmin });

            if (this.nombre === 'Prestamo UltraRapido') {
              this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
              // Aqui aparece en pantalla al cargar
              this.soloInteres = (this.valorCuotaBase as number * this.plazo) - this.valorSolicitado;
              // this.valorCuotaTotal = this.valorSolicitado + this.idia + this.aval + this.desAval + this.administracion + this.desPlataforma + this.iva;
              this.totalCredito = this.valorSolicitado + this.idia + this.aval + this.desAval + this.administracion + this.desPlataforma + this.iva;
              // this.totalCredito = this.valorCuotaBase as number + this.administracion + this.iva + this.aval + this.desAval + this.desPlataforma;
            } else {
              this.soloInteres = 0;
              this.valorCuotaTotal = this.valorCuotaBase as number + this.iva + this.aval + this.administracion + this.desAval + this.desPlataforma;
              this.totalCredito = 0;
            }

            // Prestamo UltraRapido
            this.idia = this.iDiaVencido *this.valorSolicitado * 5;
            this.valorCuotaBaseDia = ((this.idia / 100) * this.valorSolicitado) / (1 - Math.pow((1 + (this.idia / 100)), - this.plazo));
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


    this.formularioSolicitud.get('value')?.valueChanges.subscribe((value) => {

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
      } else if (this.comisionAdminHipo !== 0) {
        this.comisionAdminHipo1 = 2000000;
      }
      this.aval = (this.valorSolicitado / 100) * this.avalp;
      
      this.interesesAnticipados = (this.valorSolicitado / 100) * this.interesesAnticipadosp;
      if (this.nombre === 'Prestamo UltraRapido') {
        this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);
        this.soloInteres = (this.valorCuotaBase as number * this.plazo) - this.valorSolicitado;

        this.idia = this.iDiaVencido *this.valorSolicitado * this.plazo;

        // this.valorCuotaBaseDia = ((this.idia / 100) * this.valorSolicitado) / (1 - Math.pow((1 + (this.idia / 100)), - this.plazo));
        // this.valorInteresDia = (this.valorCuotaBaseDia * this.plazo) - this.valorSolicitado;

        this.valorCuotaTotal = this.valorCuotaBase as number + this.totalPersonal;
        this.totalCredito = this.valorSolicitado + this.idia + this.aval + this.desAval + this.administracion + this.desPlataforma + this.iva;
        // this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval + this.desAval + this.desPlataforma;
        this.valorgmf = (this.valorSolicitado / 1000) * this.gmfCuatroxMil;
      } else {
        this.soloInteres = 0;
        this.totalCredito = 0;
        this.valorCuotaTotal = this.valorCuotaBase as number + this.iva + this.aval + this.administracion + this.desAval + this.desPlataforma;
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

    this.formularioSolicitud.get('time')?.valueChanges.subscribe((time) => {

      this.plazo = time;
      this.administracion = this.administracionp;
      if (this.nombre === 'Prestamo UltraRapido') {
        // this.administracion = this.administracion * this.plazo;
        // this.iva = ((this.administracion + this.desPlataforma) / 100) * this.ivap;
        
        this.desPlataforma = -(this.administracion - (this.dayPlataforma * this.plazo));
        this.iva = ((this.administracion + this.desPlataforma) / 100) * this.ivap;
        this.idia = this.iDiaVencido *this.valorSolicitado * this.plazo;
      }
      var im = this.iMesVencido / 100;
      //var im = this.idia / 100;
      var im2 = Math.pow((1 + im), -(this.plazo));
      let a = (this.valorSolicitado * im) / (1 - im2);
      this.valorCuotaBase = a;

      if (this.nombre === 'Prestamo UltraRapido') {
        this.totalPersonal = ((this.aval + this.administracion + this.iva) / this.plazo);


        this.valorInteresDiaMostrar = this.valorInteresDia * this.plazo;
        this.desAval = -((this.aval/2) - (this.dayAval*this.plazo));


        this.soloInteres = (this.valorCuotaBase as number * this.plazo) - this.valorSolicitado;
        this.valorCuotaTotal = this.valorCuotaBase as number + this.totalPersonal;
        this.totalCredito = this.valorSolicitado + this.idia + this.aval + this.desAval + this.administracion + this.desPlataforma + this.iva
        // this.totalCredito = this.valorSolicitado + this.soloInteres + this.administracion + this.iva + this.aval + this.desAval + this.desPlataforma;
      } else {
        this.valorCuotaTotal = this.valorCuotaBase as number + this.iva + this.aval + this.administracion + this.desAval + this.desPlataforma;
        this.soloInteres = 0;
        this.totalCredito = 0;
      }
    });

  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
  formatLabel1(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }


}
