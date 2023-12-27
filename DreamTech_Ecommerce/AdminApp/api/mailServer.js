const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Mail Server is running on port ${port}`);
});

app.post("/api/sendMail", async (req, res) => {
  try {
    const { from, to, subject, html, attachFiles } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dreamtechuit@gmail.com",
        pass: "egzxbutvadaxlrtu",
      },
    });

    const mailOptions = {
      from: "dreamtechuit@gmail.com",
      to: to,
      subject: subject,
      html:html,
      attachments: attachFiles.map((file) => ({
        filename: file.name,
        path: file.url,
      })) || [],
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Gửi Email thành công." });
    } catch (error) {
      console.log("Error in sending email", error);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
