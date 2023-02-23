const path = require("path");

exports.emailTemplate = (name) => {
  let logoPath = path.join(__dirname, "../assets", "logo.gif");
  return `<!DOCTYPE html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      /* CSS for desktop */
      @media only screen and (min-width: 768px) {
        .container {
          max-width: 600px;
          margin: 0 auto;
        }
        .logo {
          text-align: center;
          margin-top: 50px;
        }
        .content {
          background-color: #222;
          color: #fff;
          padding: 50px;
          margin-top: 50px;
          font-size: 18px;
          border-radius: 5px;
        }
      }
      /* CSS for mobile */
      @media only screen and (max-width: 767px) {
        .container {
          width: 100%;
        }
        .logo {
          text-align: center;
          margin-top: 30px;
        }
        .content {
          background-color: #222;
          color: #fff;
          padding: 30px;
          margin-top: 30px;
          font-size: 16px;
        }
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
    <div class="container">
      <div class="logo">
        <img src="cid:logo" alt="Logo" style={{width: "150px"}}>
      </div>
      <div class="content">
        <p>Dear <strong>${name}</strong>,</p>
        <p>We hereby acknowledge the receipt of your email. Thank you for contacting us.</p>
        <p>Our team will review your message and respond to you as soon as possible. Please note that our response time may vary depending on the volume of inquiries we receive.</p>
        <p>If you have any further questions or concerns, please do not hesitate to reach out to us.</p>
        <p>Best regards,</p>
        <p><strong>BluePrintDesigns</strong></p>
      </div>
    </div>
  </body>
  </html>`;
};
