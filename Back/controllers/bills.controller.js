const Bill = require('../models/Bill');
const Request = require('../models/Request');
const Product = require('../models/Product');

const createBill = async(req, res) => {
    try {
        let now = new Date();
        console.log('La fecha actual es:', now);
        const requests = await Request.find();

        for (let i = 0; i < requests.length; i++) {
            if (requests[i].estate === 'Facturacion') {
                for (let j = 0; j < requests[i].estadosFacturacion.length; j++) {
                    if (requests[i].estadosFacturacion[j] === 'Pendiente') {
                        let fechaFacturar = requests[i].fechasFacturacion[j];
                        console.log('Fecha A Facturar:', fechaFacturar);
                        now.setDate(now.getDate() + 32);
                        console.log('Fecha Actual Mas 10 Dias:', now);

                        const product = await Product.findById(requests[i].idProduct);
                        if (now.getTime() > fechaFacturar.getTime()) {
                            // Si Entra Se Debe Crear La Factura
                            console.log('Hora de facturar');
                            // const bodyBill = {
                            //     "idUser": requests[i].idUser,
                            //     "idProducto": requests[i].idProduct,
                            //     "imin": product.imin,
                            //     "imax": product.imax,
                            //     "value": requests[i].value,
                            //     "plazo": requests[i].time,
                            //     "numcuota": j + 1,
                            //     "servicio": 20000,
                            //     "ivaServicio": 19,
                            //     "aval": 0,
                            //     "parqueadero": 0,  

                            // }
                            // const newbill = new Bill(bodyBill);
                            // const billSave = await newbill.save();

                            // res.status(201).json(billSave);

                            console.log('Id Solicitud Facturada', requests[i]._id)

                            // Monto
                            var valorPrestado = 1000000;
                            // Plazo Meses
                            var plazoMeses = 1;
                            // Tasa Interes
                            var iMesVencido = 1.8779;
                            // Tipo de interés fraccionado (pasamos a porcentaje)
                            var im = iMesVencido / 100;
                            //Math.pow(base, exponente)
                            var im2 = Math.pow((1 + im), -(plazoMeses));

                            // Cuota Cap. + Int.
                            let a = (valorPrestado * im) / (1 - im2);

                            console.log("Cuota + Interes: " + a.toFixed(2));
                            return res.status(201).json({ cuota: a.toFixed(2) });
                        }

                        break;
                    }
                }
            }
        }

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
        return res.status(500).json({ msg: 'Id Del Billo No Existe' });
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
const deleteBillById = async(req, res) => {
    const { billId } = req.params;
    try {
        await Bill.findByIdAndDelete(billId);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del Billo No Existe' });
    }
}

module.exports = {
    createBill,
    getBills,
    getBillById,
    updateBillById,
    deleteBillById
}