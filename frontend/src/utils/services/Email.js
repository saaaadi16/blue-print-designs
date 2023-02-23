import { SMTPClient } from "emailjs";

const client = new SMTPClient({
  user: "info@blueprintdesigns.nl",
  password: "N@l35N7@4Vg2",
  host: "hotmail",
  ssl: true,
});

// send the message and get a callback with an error or details of the message that was sent
const sendEmail = () => {
  client.send(
    {
      text: "i hope this works",
      from: "info@blueprintdesigns.nl",
      to: "info@blueprintdesigns.nl",
      // cc: "else <else@your-email.com>",
      subject: "testing emailjs",
    },
    (err, message) => {
      console.log(err || message);
    }
  );
};

export default sendEmail;
