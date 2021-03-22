const jwt = require('jsonwebtoken');


const generarJWT = function (uid,name)  
{
    const payload = { uid, name };
    return new Promise( 
        function (resolve, reject) 
        {
            jwt.sign( payload, process.env.SECRET_JWT_SEED, {
                expiresIn: '24h'
            }, (err, token) => {
                if ( err ){
                    //ALL WRONG
                    console.log(err);
                    reject(err);
                } else {
                //ALL GOOD
                    resolve( token );
                }   
            })
        });
}

module.exports = {
    generarJWT
}
