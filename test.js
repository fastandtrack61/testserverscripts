const nodemailer = require('nodemailer');

async function testSMTP() {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // replace with your SMTP host
    port: 587,              // SMTP port
    secure: false,          // false for STARTTLS
    auth: {
      user: process.env.SMTP_USER, // your SMTP username
      pass: process.env.SMTP_PASS  // your SMTP password or app password
    },
    connectionTimeout: 10000
  });

  try {
    await transporter.verify();
    console.log('SMTP connection successful!');
  } catch (err) {
    console.error('SMTP connection failed:', err);
  }
}

testSMTP();
