const transporter = require('../middlewares/mailer')

// Create User
const enviarEmail = async function (req, res) {
    const { nombre, email, celular, mensaje } = req.body;

    // send mail with defined transport object
    // verificationLink = `https://www.lendiup.com/api/auth/forget/${token}`;
    try {
        await transporter.sendMail({
            from: '"Solicitud De Informacion" <administrador@lendiup.com>', // sender address
            to: email, // list of receivers
            subject: 'De:' + nombre + ' Email:' + email,  // Subject line
            // text: "Hello world?", // plain text body

            /* html: `<b>Bienvenido A Lendiup</b>
            <a href="${verificationLink}">${verificationLink} </a>`, */

            html: `<b>Pregunta Inversionista Lendiup</b>
                <h3> Nombre:</h3>
                <p >${nombre} </p>
                <h3> Email:</h3>
                <p >${email} </p>
                <h3> Celular:</h3>
                <p >${celular} </p>
                <h3> Mensaje:</h3>
                <p >${mensaje} </p>`

        });
        return res.status(200).json({ msn: 'Enviado' });
    } catch (error) {
        return res.status(500).json({ msn: 'ERROR AL ENVIAR EMAIL' });
    }




}


module.exports = {
    enviarEmail
}