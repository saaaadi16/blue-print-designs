var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
const path = require("path");
const { emailTemplate } = require("../assets/emailTemplate");
const { emailTemplateBP } = require("../assets/emailTemplateBP");

/* GET users listing. */
router.post("/", async (req, res) => {
  const { email, name } = req.body;
  try {
    if (!email || !name)
      return res
        .status(400)
        .json({ code: -2, message: "Missing required fields" });
    console.log(email, name);
    let transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      secure: true,
      secureConnection: false, // TLS requires secureConnection to be false
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      port: 465,
      debug: true,
      auth: {
        user: "info@blueprintdesigns.nl", // generated ethereal user
        pass: "N@l35N7@4Vg2", // generated ethereal password
      },
    });
    let logoPath = path.join(__dirname, "../assets", "logo.png");
    try {
      await transporter.sendMail({
        from: "info@blueprintdesigns.nl", // sender address
        to: email, // list of emails
        subject: "Acknowledgement of email receipt", // Subject line
        html: emailTemplate(name),
        attachments: [
          {
            filename: "logo.png",
            path: logoPath,
            cid: "logo",
          },
        ],
      });
    } catch (error) {
      console.error(error);
      return res.status(501).json({ code: -3, message: error });
    }

    try {
      await transporter.sendMail({
        from: "info@blueprintdesigns.nl", // sender address
        to: "info@blueprintdesigns.nl", // list of receivers
        subject: "User Information", // Subject line
        html: emailTemplateBP({
          email: email,
          name: name,
          phone: req.body?.phone,
          org: req.body?.organization,
        }),
      });
    } catch (error) {
      console.error(error);
      return res.status(501).json({ code: -3, message: error });
    }

    return res.status(200).json({ code: 0, message: "Email sent" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ code: -1, message: error });
  }
});

module.exports = router;
