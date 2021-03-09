const mailjet = require("node-mailjet").connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

export default async (req, res) => {
  const { name, email, message } = req.body;

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SENDER,
          Name: "Portfolio",
        },
        To: [
          {
            Email: process.env.RECEIVER,
            Name: "Jonatas Silva",
          },
        ],
        Subject: "Contato - Portfolio",
        TextPart: `${name} - ${email}: ${message}`,
      },
    ],
  });

  request
    .then(() => {
      res.status(200).send({ message: "Sucesso" });
    })
    .catch(() => {
      res.status(500).send({ message: "Algo deu errado" });
    });
};
