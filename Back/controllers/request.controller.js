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
    return res.status(500).json({ msg: 'Id Del Request No Existe' });
  }
}
const updateRequestById = async(req, res) => {
  try {
    const udRequest = await Request.findByIdAndUpdate(req.params.requestId, req.body, {new: true});
    return res.status(200).json(udRequest);
  } catch (error) {
    return res.status(500).json({ msg: 'Id Del Request No Existe' });
  }
}
const deleteRequestById = async(req, res) => {
  const { requestId } = req.params;
  try {
    const request = await Request.findByIdAndDelete(requestId);
    if (!request) return res.status(401).json({msg: 'No hay solicitud con ese Id'});
    //si se encuentra la actividad
    return res.status(200).json({ msg: 'Actividad Eliminada'});
  } catch (error) {
    return res.status(500).json({ msg: 'Contacte Con El Administrador' });
  }
}

module.exports = {
  createRequest,
  getRequests,
  getRequestById,
  updateRequestById,
  deleteRequestById
}
