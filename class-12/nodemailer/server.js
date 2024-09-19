const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();

// Middlewares :
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/mail", (req, res) => {
  res.send(`<form action="/send-mail" method="POST">
      <input type="email" name="to" placeholder="Reciepient Email" required />
      <input type="text" name="subject" placeholder="Subject" required />
      <input type="text" name="message" placeholder="Enter Message" required />
      <button type="submit">Send</button>
    </form>`);
});

//nodemailer
app.post("/send-mail", async (req, res) => {
  const { to, subject, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "frederic.blanda@ethereal.email",
        pass: "neJ2becfCV8K9mmHsj",
      },
    });

    const info = await transporter.sendMail({
      from: process.env.MY_EMAIL, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
    });
    console.log("Email sent", info.response);
    res.send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.send("Email failed");
  }
});

//stating server
const PORT = process.env.MY_PORT_NO || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
