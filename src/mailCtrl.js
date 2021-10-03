/* var nodemailer = require('nodemailer'); // email sender function exports.sendEmail = function(req, res){
    // nodemailer stuff will go here

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'octaviojorge37@gmail.com',
        pass: 'Octaguitarra98'
    }
});
var mailOptions = {
    from: 'Remitente',
    to: 'octaviojorge37@gmail.com',
    subject: 'Asunto',
    text: 'Contenido del email'
};
// Enviamos el email

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        res.send(500, err.message);
    } else {
        console.log("Email sent");
        res.status(200).jsonp(req.body);
    }
});
var EmailCtrl = require('./path/to/controller/mailCtrl');
//email route
router.post('/email', EmailCtrl.sendEmail); */