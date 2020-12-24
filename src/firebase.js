import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8-bqAGASGebEQIGCM-mtNXIXBzURM9E8",
  authDomain: "portfolio-a32f5.firebaseapp.com",
  projectId: "portfolio-a32f5",
  storageBucket: "portfolio-a32f5.appspot.com",
  messagingSenderId: "990257558905",
  appId: "1:990257558905:web:9105ad523ee11f0227eba8",
  measurementId: "G-02WY0Q97Q2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const cors = require("cors")({
  origin: true,
});

exports.emailMessage = functions.https.onRequest((req, res) => {
  const { name, email, phone, message } = req.body;
  return cors(req, res, () => {
    var text = `<div>
      <h4>Information</h4>
      <ul>
        <li>
          Name - ${name || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
        <li>
          Phone - ${phone || ""}
        </li>
      </ul>
      <h4>Message</h4>
      <p>${message || ""}</p>
    </div>`;
    var sesAccessKey = "szscode2727@gmail.com";
    var sesSecretKey = "Shrinathji12345@";

    var transporter = nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        auth: {
          user: sesAccessKey,
          pass: sesSecretKey,
        },
      })
    );
    const mailOptions = {
      to: "myemail@myemail.com",
      from: "no-reply@myemail.com",
      subject: `${name} sent you a new message`,
      text: text,
      html: text,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error.message);
      }
      res.status(200).send({
        message: "success",
      });
    });
  }).catch(() => {
    res.status(500).send("error");
  });
});
