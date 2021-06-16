const { response } = require("express");
const transporter = require('../middlewares/mailer')

var ejs = require('ejs');
var path = require('path')
const pdf = require("html-pdf");
const fs = require("fs");



const createPoderPDF = async function (req, res) {
    const { value, userId, name, surname, numdoc, ip, dataandtime, codVerificacion, email } = req.body;
    // console.log('IP back:', ip);
    try {
        var templateHtml = fs.readFileSync('modelsdoc/poder.html', 'utf8');
        // var image = path.join( __dirname, 'ri_1.png')
        // templateHtml = templateHtml.replace('{{image}}', image)
        var compiled = ejs.compile(templateHtml);
        var html = compiled({
          title: "EJS",
          value: value,
          userId: userId,
          name: name,
          surname: surname,
          numdoc: numdoc,
          ip: ip,
          dataandtime: dataandtime,
          codVerificacion: codVerificacion,
        });
        var options = {
            // format: 'Letter',
            format: "A4",
            landscape: true,
            // paginationOffset: 1,       // Override the initial pagination number
            "height": "17in",        // allowed units: mm, cm, in, px
            "width": "12in",            // allowed units: mm, cm, in, px
            // "quality": 100,
            //Page options
            //"border": "0",             // default is 0, units: mm, cm, in, px
            // - or -
            // "border": {
            // "top": "2in",            // default is 0, units: mm, cm, in, px
            // "right": "1in",
            // "bottom": "2in",
            // "left": "1.5in"
            // },
            // "header": {
            //     "height": "45mm",
            //     "contents": '<div style="text-align: center;">Author: LENDIUP</div>'
            // },
            "header": {
                "height": '25mm',
                "contents": `
                <div style="text-align: center;">
                  <img src="http://localhost:3000/uploads/ri_1.png" width="200" height"100"/>
                </div>`,
            },
            "footer": {
                "height": "28mm",
                "contents": {
                    //first: 'Pagina Inicial',
                    //2: 'Pagina 2', // Any page number is working. 1-based index
                    default: '<span style="text-align: center; color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                    // last: 'Ultima Pagina'
                }
            },
            // Rendering options
            // "base": "http://localhost:3000"
        };
        // Abrir PDF En el Navegador
        // pdf.create(html).toStream((error, stream) => {
        //     if (error) {
        //         res.end("Error creando PDF: " + error)
        //     } else {
        //         res.setHeader("Content-Type", "application/pdf");
        //         stream.pipe(res);
        //     }
        // });
        // Guardar El Archivo En El Back

        // pdf.create(html, options).toFile("./uploads/" + 'Poder-Id-' + req.body.userId + '-' + 'date' + '-' + Date.now() + ".pdf", function (err, res1) {
        pdf.create(html, options).toFile("./uploads/" + 'Poder-Id-' + userId + ".pdf", function (err, res1) {
            if (err) {
                console.log(err);
                res.end("Error creando PDF: " + error);
            } else {
                // console.log(res1);
                return res.status(201).json({ msg: 'OK', archivo: res1.filename });
            }
        });
        try {
            await transporter.sendMail({
                from: '"Documentos" <administrador@lendiup.com>',
                to: email,
                subject: 'De:' + name + ' Email:' + email,
                attachments: [
                    {
                        filename: 'Poder-Id-' + userId + ".pdf",
                        path: 'http://localhost:3000/uploads/' + 'Poder-Id-' + userId + ".pdf"
                    },
                ],
                html: `<b>Envio Poder Lendiup</b>
                    <h3> Nombre:</h3>
                    <p >${name} ${surname}  </p>
                    <h3> Email:</h3>
                    <p >${email} </p>`
            });

            
        } catch (error) {
            console.log(error);
            
        }
    } catch (error) {
        return res.status(500).json({ msn: 'ERROR AL CREAR PDF' });
    }
};


module.exports = {
    createPoderPDF,
};
