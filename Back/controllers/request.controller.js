const Request = require('../models/Request');

const createRequest = async(req, res) => {
    try {
        // console.log('0', req.body)
        const newrequest = new Request(req.body);
        // console.log('1', newrequest)
        const requestSave = await newrequest.save();
        return res.status(201).json(requestSave);
    } catch (error) {
        return res.status(500).json({ msg: 'Por favor hable con el administrador' });
    }
}
const getRequests = async(req, res) => {
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
        if (request === null)
            return res.status(202).json({msg: 'No Existe Esa Solicitud'});
        return res.status(200).json(request);
    } catch (error) {
        return res.status(500).json({ msg: 'Formato de Id Es Erroneo' });
    }
}
const getRequestByIdUser = async(req, res) => {
    try {
        const request = await Request.find({ idUser: req.params.userId });
        if (request.length === 0)
            return res.status(200).json(request);
        return res.status(200).json(request);
    } catch (error) {
        return res.status(500).json({ msg: 'Formato de Id Erroneo' });
    }
}
const updateRequestById = async(req, res) => {
    try {
        // console.log('ID:', req.params);
        console.log('BODY:', req.body);
        const upRequest = await Request.findByIdAndUpdate(req.params.requestId, req.body, { new: true });
        // console.log('rta', upRequest)
        return res.status(200).json(upRequest);
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del Request No Existe' });
    }
}

// Upload Doc Tarjetav
const uploadFileTarjetav = async function (req, res) {
    try {
        // console.log(req.params)
        const request = await Request.findByIdAndUpdate(req.params.requestId, {"tarjetavPath": req.file.path, "regTarjetavOk": true}, {new: true});
        return res.status(200).json(request);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe'});}
};
// Upload Doc Matricula
const uploadFileMatricula = async function (req, res) {
    try {
       // console.log(req.params)
        const request = await Request.findByIdAndUpdate(req.params.requestId, {"matriculaPath": req.file.path, "regMatriculaOk": true}, {new: true});
        return res.status(200).json(request);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe'});}
};
// Upload Doc Extracto
const uploadFileExtracto = async function (req, res) {
    try {
      //  console.log(req.params)
        const request = await Request.findByIdAndUpdate(req.params.requestId, {"extractoPath": req.file.path, "regExtractoOk": true}, {new: true});
        return res.status(200).json(request);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe'});}
};
// Upload Doc CamaraCom
const uploadFileCamaraCom = async function (req, res) {
    try {
        //  console.log(req.params)
        const request = await Request.findByIdAndUpdate(req.params.requestId, { "CamaraComPath": req.file.path, "regCamaraComOk": true }, { new: true });
        return res.status(200).json(request);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe' });
    }
};
// Upload Doc Rut
const uploadFileRut = async function (req, res) {
    try {
        //  console.log(req.params)
        const request = await Request.findByIdAndUpdate(req.params.requestId, { "RutPath": req.file.path, "regRutOk": true }, { new: true });
        return res.status(200).json(request);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe' });
    }
};
// Upload Doc EstudioObra
const uploadFileEstudioObra = async function (req, res) {
    try {
        //  console.log(req.params)
        const request = await Request.findByIdAndUpdate(req.params.requestId, { "EstudioObraPath": req.file.path, "regEstudioObraOk": true }, { new: true });
        return res.status(200).json(request);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe' });
    }
};
// Upload Doc ProgramaObra
const uploadFileProgramaObra = async function (req, res) {
    try {
        //  console.log(req.params)
        const request = await Request.findByIdAndUpdate(req.params.requestId, { "ProgramaObraPath": req.file.path, "regProgramaObraOk": true }, { new: true });
        return res.status(200).json(request);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe' });
    }
};
// Upload Doc Curaduria
const uploadFileCuraduria = async function (req, res) {
    try {
        //  console.log(req.params)
        const request = await Request.findByIdAndUpdate(req.params.requestId, { "CuraduriaPath": req.file.path, "regCuraduriaOk": true }, { new: true });
        return res.status(200).json(request);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe' });
    }
};
// Upload Doc LicenciaConst
const uploadFileLicenciaConst = async function (req, res) {
    try {
        //  console.log(req.params)
        const request = await Request.findByIdAndUpdate(req.params.requestId, { "LicenciaConstPath": req.file.path, "regLicenciaConstOk": true }, { new: true });
        return res.status(200).json(request);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe' });
    }
};


const deleteRequestById = async(req, res) => {
    const { requestId } = req.params;
    try {
        const request = await Request.findByIdAndDelete(requestId);
        if (!request) return res.status(401).json({ msg: 'No hay solicitud con ese Id' });
        //si se encuentra la actividad
        return res.status(200).json({ msg: 'Actividad Eliminada' });
    } catch (error) {
        return res.status(500).json({ msg: 'Contacte Con El Administrador' });
    }
}



module.exports = {
    createRequest,
    getRequests,
    getRequestById,
    getRequestByIdUser,
    updateRequestById,
    deleteRequestById,
    uploadFileTarjetav,
    uploadFileMatricula,
    uploadFileExtracto,
    uploadFileCamaraCom,
    uploadFileRut,
    uploadFileEstudioObra,
    uploadFileProgramaObra,
    uploadFileCuraduria,
    uploadFileLicenciaConst
}