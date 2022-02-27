var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rayanalhassan2000@gmail.com',
    pass: 'wkxpzvuyeiiudhqn'
  }
});

var mailOptions = {
  from: id="email",
  to: 'rayanalhassan2000@gmail.com',
  subject:  id="name",
  text: id="message"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});