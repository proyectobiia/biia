const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

const nodemailer = require("nodemailer");


//Mandar correo cuando se crea un documento en la colección de correos
exports.sendMailBroker = functions.firestore.document("correos/{correoId}").onCreate(async (snap:any, context:any) => {
    const newCorreo = snap.data();
  
    let authData = nodemailer.createTransport({
        service: "Hotmail",
        auth: {
          user: "soportebiia@hotmail.com",
          pass: "BiiA2020:)",
        },
      });
      const mailOptions = {
        from: "soportebiia@hotmail.com",
        to: newCorreo.email+","+newCorreo.user+",administrador@biia.lat,brokers@biia.lat,contacto@biia.lat",
        subject: newCorreo.subject,
        text: newCorreo.body,
      };
      return authData.sendMail(mailOptions);
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// // To Deploy: firebase deploy --only functions