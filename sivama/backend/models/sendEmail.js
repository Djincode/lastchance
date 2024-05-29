import nodemailer from 'nodemailer';

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.com",
      port: 465, 
      secure: true, 
      auth: {
        user: "perviz.y@itbrains.edu.az",
        pass: "wmdspqheauugxdpz", 
      },
    }, {
      from: 'Mailer Test <perviz.y@itbrains.edu.az>'
    });

    await transporter.sendMail({
      from: "perviz.y@itbrains.edu.az",
      to: email,
      subject: subject,
      text: text,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
   
  }
};

export default sendEmail;