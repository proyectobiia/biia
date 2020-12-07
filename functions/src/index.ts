const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

const nodemailer = require("nodemailer");

exports.sendMailBroker = functions.firestore.document("correos/{correoId}").onCreate(async (snap:any, context:any) => {
    const newCorreo = snap.data();
  
    let authData = nodemailer.createTransport({
        service: "Hotmail",
        auth: {
          user: "picachuycradily@hotmail.com",
          pass: "poIUytREwq$",
        },
      });
      const mailOptions = {
        from: "picachuycradily@hotmail.com",
        to: newCorreo.email,
        subject: newCorreo.subject,
        text: newCorreo.body,
      };
      return authData.sendMail(mailOptions);
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
