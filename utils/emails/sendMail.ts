import nodemailer, { Transporter } from 'nodemailer'

const sendMail = (email: string, subject: string, message: string) => {
  const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: 'app4bells@gmail.com',
      pass: 'wvrecnuhokfeyyry',
    },
  })

  const emailOptions = {
    from: 'app4bells@gmail.com',
    to: email,
    subject: subject,
    html: message,
  }

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Email sent')
    }
  })
}

export default sendMail
