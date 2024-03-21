"use server";
import nodemailer from "nodemailer";

export async function mailer(from_name, from_email, message) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codeclash.glbitm@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  var mailOptions = {
    from: "codeclash.glbitm@gmail.com",
    to: "codeclash.glbitm@gmail.com",
    subject: `Website Message From: ${from_name} (${from_email})`,
    text: `Message: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
  });
}
