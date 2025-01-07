const express = require("express");
require("dotenv").config();
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// SMTP Transport
const transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail SMTP
    auth: {
        user: process.env.EMAIL, // Securely load email from environment variables
        pass: process.env.PASSWORD, // Securely load password from environment variables
    },

});

// POST Route to Send Email
app.post("/send", (req, res) => {
    console.log("EMAIL:", process.env.EMAIL);
    console.log("PASSWORD:", process.env.PASSWORD);
    const { name, email, message } = req.body;

    console.log("Received request:", { name, email, message }); // Log the request data

    const mailOptions = {
        from: `"Byta Books Contact Form" <${process.env.EMAIL}>`, // From Byta Books
        to: process.env.EMAIL, // Send to Byta Books email
        cc: email, // CC the contactee
        subject: `New Contact Form Submission from ${name}`,
        text: `
        You have received a new message from the website contact form.

        Name: ${name}
        Email: ${email}
        Message:
        ${message}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).send("Error sending email");
        }
        console.log("Email sent successfully:", info.response);
        res.status(200).send("Email sent successfully");
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
