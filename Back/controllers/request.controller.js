const Request = require('../models/Request');

const createRequest = async (req, res) => {
  try {
  const newrequest = new Request(req.body);
  const requestSave = await newrequest.save();
  res.status(201).json(requestSave);    
  } catch (error) {
    return res.status(500).json({ msg: 'Por favor hable con el administrador' });
  }
}
const getRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    return res.status(201).json(requests);
  } catch (error) {
    return res.status(500).json({ msg: 'Por favor hable con el administrador' });
  }
}
const getRequestById = async(req, res) => {
  try {
    const request = await Request.findById(req.params.requestId);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(500).json({ msg: 'Id Del Requesto No Existe' });
  }
}
const updateRequestById = async(req, res) => {
  try {
    const udRequest = await Request.findByIdAndUpdate(req.params.requestId, req.body, {new: true});
    return res.status(200).json(udRequest);
  } catch (error) {
    return res.status(500).json({ msg: 'Id Del Requesto No Existe' });
  }
}
const deleteRequestById = async(req, res) => {
  const { requestId } = req.params;
  try {
    await Request.findByIdAndDelete(requestId);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ msg: 'Id Del Requesto No Existe' });
  }
}

module.exports = {
  createRequest,
  getRequests,
  getRequestById,
  updateRequestById,
  deleteRequestById
}
