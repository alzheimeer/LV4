const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null,'Id-'+req.params.userId+'-'+'avatar'+'-'+ Date.now()+path.extname(file.originalname));
        // cb(null,'avatar'+ '-' + Date.now() + file.originalname + '-'+ path.extname(file.originalname));
    }
});

const storageCedula = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null,'Id-'+req.params.userId+'-'+'cedula'+'-'+ Date.now()+path.extname(file.originalname));
        // cb(null,'cedula'+ '-' + Date.now() + file.originalname + '-'+ path.extname(file.originalname));
    }
});

const storagePasaporte = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null,'Id-'+req.params.userId+'-'+'pasaporte'+'-'+ Date.now()+path.extname(file.originalname));
        // cb(null,'cedula'+ '-' + Date.now() + file.originalname + '-'+ path.extname(file.originalname));
    }
});

const storageTarjetav = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null,'Id-'+req.params.requestId+'-'+'tarjetav'+'-'+ Date.now()+path.extname(file.originalname));
        // cb(null,'cedula'+ '-' + Date.now() + file.originalname + '-'+ path.extname(file.originalname));
    }
});
const storageMatricula = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null,'Id-'+req.params.requestId+'-'+'matricula'+'-'+ Date.now()+path.extname(file.originalname));
        // cb(null,'cedula'+ '-' + Date.now() + file.originalname + '-'+ path.extname(file.originalname));
    }
});
const storageExtracto = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null,'Id-'+req.params.requestId+'-'+'extracto'+'-'+ Date.now()+path.extname(file.originalname));
        // cb(null,'cedula'+ '-' + Date.now() + file.originalname + '-'+ path.extname(file.originalname));
    }
});
const storageComprobante = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, 'Id-' + req.params.billId + '-' + 'comprobante' + '-' + Date.now() + path.extname(file.originalname));
        // cb(null,'cedula'+ '-' + Date.now() + file.originalname + '-'+ path.extname(file.originalname));
    }
});

const uploadAvatar = multer({ storage: storage });
const uploadCedula = multer({ storage: storageCedula });
const uploadPasaporte = multer({ storage: storagePasaporte });
const uploadTarjetav = multer({ storage: storageTarjetav });
const uploadMatricula = multer({ storage: storageMatricula });
const uploadExtracto = multer({ storage: storageExtracto });
const uploadComprobante = multer({ storage: storageComprobante });

exports.uploadAvatar = uploadAvatar.single('avatar');
exports.uploadCedula = uploadCedula.single('cedula');
exports.uploadPasaporte = uploadPasaporte.single('pasaporte');
exports.uploadTarjetav = uploadTarjetav.single('tarjetav');
exports.uploadMatricula = uploadMatricula.single('matricula');
exports.uploadExtracto = uploadExtracto.single('extracto');
exports.uploadComprobante = uploadComprobante.single('comprobante');

