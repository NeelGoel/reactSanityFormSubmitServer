const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');

router.post("/", (req, res) => {
    try{
        var pass = {
            query: 'qesjsidfdmqgxeud'
        }
        
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: req.body.from,
              pass: pass[req.body.password]
            }
          });
          
          var mailOptions = {
            from: req.body.from,
            to: req.body.to,
            subject: req.body.subject,
            html: `<h1>Hi ${req.body.name}</h1>
                    </br></br>
                    <p>${req.body.body}</p>
                    </br>
                    <b>Your Query:</b>
                    <div><p>${req.body.desc}</p></div>
                    </br>
                    </br>
                    <p>Thanks & Regards</p>
                    <div><p>Next Universe</p><div>
                    `
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              res.json({name: req.body.name, result:'Email has been sent'});
            }
          });
    }
    catch(error) {
    console.error(error);
    return res.status(500).send("server error");
    }
});

module.exports = router;