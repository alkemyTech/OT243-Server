const sgMail = require('@sendgrid/mail');

module.exports = {
  testEmail: function (toEmail, subject, title, message) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: toEmail,
      from: process.env.SENDER_EMAIL, // Use the email address or domain you verified above
      subject,
      text: message,
      html: `<h3>${title}</h3>
      <strong>${message}</strong>
      `,
    };
    sgMail
      .send(msg)
      .then(() => {}, error => {
        console.error(error);
        if (error.response) {
          console.error(error.response.body)
        }
      });
  }
}

