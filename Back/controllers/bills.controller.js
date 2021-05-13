const Bill = require('../models/Bill');
const Request = require('../models/Request');
const Product = require('../models/Product');
const User = require('../models/User');

const createBill = async(req, res) => {
    try {
        let now = new Date();
        let dateCompare = new Date();
        dateCompare.setDate(dateCompare.getDate() + 30);
        // console.log('La fecha actual + X dias:', dateCompare);
        const requests = await Request.find();

        for (let i = 0; i < requests.length; i++) {
            let requestx = await Request.findById(requests[i]._id);


            // console.log(requestx.fechasFacturacion[i].fecha.getTime());


            if (requestx.estate === 'Facturacion') {
                console.log("Es facturacion Seccion Comp Mora");
                for (let j = 0; j < requestx.fechasFacturacion.length; j++) {
                    console.log('2 For Factu #j', j, requestx.fechasFacturacion[j].fecha, requestx.fechasFacturacion[j].estado);
                    console.log('fecha y now', requestx.fechasFacturacion[j].fecha, now);

                    if (requestx.fechasFacturacion[j].estado === 'Creada' && now.getTime() > requestx.fechasFacturacion[j].fecha.getTime()) {
                        console.log('Entro A Creada 1')
                        // SI LA FECHA E HOY ES MAYOR A LA FECHA LIMITE DE PAGO PASE A ESTADO MORA
                        requestx.fechasFacturacion[j].estado = 'Mora';

                        // CALCULA NUMERO DE DIAS DE MORA Y ACTUALIZA
                        let dias = now.getTime() - requestx.fechasFacturacion[j].fecha.getTime();
                        dias = dias / (1000 * 60 * 60 * 24);
                        console.log('Dias En Mora 1', dias);
                        requestx.fechasFacturacion[j].diasMora = dias;

                    }
                    if (requestx.estadosFacturacion[j] === 'Mora') {
                        console.log('Entro A Mora 2')
                        // SI YA ESTA EN MORA CADA DIA re-CALCULA NUMERO DE DIAS DE MORA Y ACTUALIZA
                        let dias = now.getTime() - requestx.fechasFacturacion[j].fecha.getTime();
                        dias = dias / (1000 * 60 * 60 * 24);
                        console.log('Dias En Mora 2', dias);
                        requestx.fechasFacturacion[j].diasMora = dias;
                    }
                    await Request.findByIdAndUpdate(requestx._id, requestx, { new: true });
                }

            }

        }


        // PROCESO PARA CREAR RECIBO
        for (let i = 0; i < requests.length; i++) {
            if (requests[i].estate === 'Facturacion') {
                // console.log('Empieza Seccion Factura');
                const product = await Product.findById(requests[i].idProduct);
                const user = await User.findById(requests[i].idUser);
                let request = await Request.findById(requests[i]._id);

                for (let j = 0; j < requests[i].fechasFacturacion.length; j++) {
                    if (dateCompare.getTime() > requests[i].fechasFacturacion[j].fecha.getTime() && requests[i].fechasFacturacion[j].estado === 'Pendiente') {
                        // console.log('Hora de facturar');

                        const bodyBill = {
                            "idUser": request.idUser,
                            "Producto": request.nombreProducto,
                            "fechaLimitePago": requests[i].fechasFacturacion[j].fecha,
                            "name": user.name,
                            "surname": user.surname,
                            "tipodoc": user.personal.tipodoc,
                            "numdoc": user.personal.numdoc,
                            "ciudad": user.personal.ciudad,
                            "direccion": user.personal.direccion,
                            "telefono": user.personal.celular1,
                            "totalCuotas": requests[i].fechasFacturacion.length,
                            "cuotaActual": i + 1,
                            "cuotasPendientes": requests[i].fechasFacturacion.length - (i + 1),
                            "cuotasEnMora": 0,
                            "diasMora": request.diasMora,
                            "interesMora": request.interesMora,
                            "saldoVencido": request.saldoVencido,
                            "administracion": request.administracion,
                            "iva": request.iva,
                            "valorCuotaBase": request.valorCuotaBase,
                            "valorCuotaTotal": request.valorCuotaTotal,
                            "totalaPagar": request.valorCuotaTotal + request.interesMora + request.saldoVencido,
                            "fechaDePago": '',
                            "valorPagado": 0,
                        }
                        // console.log('Antes de grabar');
                        const newbill = new Bill(bodyBill);
                        const billSave = await newbill.save();
                        // console.log('Factura grabada');
                        // Añade Un Elemento A Un Array En Mongo
                        //const prequest = await Request.findByIdAndUpdate(requests[i]._id, { "$push": { "estadosFacturacion": 'Creada' } }, { new: true });

                        request.fechasFacturacion[j].estado = 'Creada';
                        request.fechasFacturacion[j].idRecibo = billSave._id;
                        request.fechasFacturacion[j].valor = billSave.valorCuotaTotal;
                        console.log('cambio de estado', request.fechasFacturacion[j].estado);
                    }
                }
                // ACTUALIZACION DEL ESTADO DE LA FECHA EN LA SOLICITUD
                const xx = await Request.findByIdAndUpdate(requests[i]._id, request, { new: true });
            }
        }
        return res.status(201).json({ msg: 'Verificacion Completa' });

    } catch (error) {
        return res.status(500).json({ msg: 'Por favor hable con el administrador' });
    }
}

// CREA FACTURA CON IDREQUEST IDUSER Y IDPRODUCT
const createBillIni = async (req, res) => {

    try {
        let request = await Request.findById(req.body.idRequest);
        const user = await User.findById(req.body.idUser);
        const product = await Product.findById(req.body.idProduct);
        const numCuota = req.body.numCuota;
        const bodyBill = {
            "idUser": request.idUser,
            "idRequest": request._id,
            "Producto": request.nombreProducto,
            "fechaLimitePago": request.fechasFacturacion[numCuota].fecha,
            "name": user.name,
            "surname": user.surname,
            "tipodoc": user.personal.tipodoc,
            "numdoc": user.personal.numdoc,
            "ciudad": user.personal.ciudad,
            "direccion": user.personal.direccion,
            "telefono": user.personal.celular1,
            "totalCuotas": request.fechasFacturacion.length,
            "cuotaActual": numCuota + 1,
            "cuotasPendientes": request.fechasFacturacion.length - 1,
            "cuotasEnMora": 0,
            "diasMora": request.diasMora,
            "interesMora": request.interesMora,
            "saldoVencido": request.saldoVencido,
            "administracion": request.administracion,
            "iva": request.iva,
            "valorCuotaBase": request.valorCuotaBase,
            "valorCuotaTotal": request.valorCuotaTotal,
            "totalaPagar": request.valorCuotaTotal + request.interesMora + request.saldoVencido,
            "fechaDePago": '',
            "valorPagado": 0,
        }
        const newbill = new Bill(bodyBill);
        const billSave = await newbill.save();
        // console.log('Recibo Creado', billSave);

        request.fechasFacturacion[numCuota].estado = 'Creada';
        request.fechasFacturacion[numCuota].idRecibo = billSave._id;
        request.fechasFacturacion[numCuota].valor = billSave.valorCuotaTotal;
        request.estate = 'Facturacion';
        // ACTUALIZACION DEL ESTADO Y GRABAMOS ID DEL RECIBO EN LA SOLICITUD
        const xx = await Request.findByIdAndUpdate(request._id, request, { new: true });
        return res.status(201).json({ msg: 'Recibo Creado' });

    } catch (error) {
        return res.status(500).json({ msg: 'Por favor hable con el administrador' });
    }
}

const getBills = async(req, res) => {
    try {
        const bills = await Bill.find();
        return res.status(201).json(bills);
    } catch (error) {
        return res.status(500).json({ msg: 'Por favor hable con el administrador' });
    }
}
const getBillById = async(req, res) => {
    try {
        const bill = await Bill.findById(req.params.billId);
        return res.status(200).json(bill);
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del Bill No Existe' });
    }
}
const updateBillById = async(req, res) => {
    try {
        const udBill = await Bill.findByIdAndUpdate(req.params.billId, req.body, { new: true });
        return res.status(200).json(udBill);
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del Billo No Existe' });
    }
}
const updateBillComprobante = async (req, res) => {
    try {
        const udBill = await Bill.findByIdAndUpdate(req.params.billId, req.body, { new: true });
        return res.status(200).json(udBill);
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del Billo No Existe' });
    }
}
const deleteBillById = async(req, res) => {
    const { billId } = req.params;
    try {
        await Bill.findByIdAndDelete(billId);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del Billo No Existe' });
    }
}
const uploadFileComprobante = async (req, res) => {
    try {
        //console.log(req.params)
        const bill = await Bill.findByIdAndUpdate(req.params.billId, { "comprobantePath": req.file.path }, { new: true });
        //console.log('Bill:', bill)

        // const request = await Request.findByIdAndUpdate(bill.idRequest, {`fechasFacturacion[bill.cuotaActual - 1].comprobantePath`: req.file.path }, { new: true });
        return res.status(200).json(bill);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Recibo No Existe' });
    }
}

module.exports = {
    createBillIni,
    createBill,
    getBills,
    getBillById,
    updateBillById,
    deleteBillById,
    uploadFileComprobante,
    updateBillComprobante
}