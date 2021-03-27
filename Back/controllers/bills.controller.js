const Bill = require('../models/Bill');

const createBill = async(req, res) => {
    try {
        const newbill = new Bill(req.body);

        const billSave = await newbill.save();

        res.status(201).json(billSave);
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