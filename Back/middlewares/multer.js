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

const uploadX = multer({ storage: storage });

exports.uploadX = uploadX.single('avatar');
