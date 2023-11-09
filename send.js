var fs = require("fs");
const nodemailer = require("nodemailer");
const ejs = require('ejs');
const {datos_email,dirname} = require("./app.js");;
const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "agulujan41@gmail.com",
      pass: "axwvplxbnsjookvh"
   }
});

ejs.renderFile("./views/prueba.ejs", { datos_email:datos_email,dirname: dirname}, function (err, template) {
  if (err) {
      console.log(err);
  } else {
      var mainOptions = {
        from: 'agulujan41@gmail.com',
        to: ['agulujan4101@gmail.com'],
        subject: datos_email["alumno"]["info"]+' - '+datos_email["curso"]["nombre"]+' - Feedback - Algorithmics Yacuiba',
        html: template
      };
      transporter.sendMail(mainOptions, function (err, info) {
          if (err) {
              console.log(err);
          } else {
              console.log('Mensaje enviado: ' + info.response);
          }
      });
  }
  
  });
  