import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_RCPT,
    subject: "Contato - Portfolio",
    text: `${name} - ${email}: ${message}`,
  };

  const transport = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL_SMTP,
      pass: process.env.PASS,
    },
  };

  const transporter = nodemailer.createTransport(transport);

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      return res.status(400).send({ message: "Algo deu errado"});
    }
    return res.status(200).send({ message: "Sucesso"});
  });
};
