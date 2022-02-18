const nodemailer = require('nodemailer')
const dotenv = require("dotenv")
dotenv.config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GMAIL_PASSWORD,
    }
})

const sendMail = (authCode, userMail) => {

    const mailDetails = {
        from: "Expensee Admin",
        to: userMail,
        subject: "Expensee authentication Code",
        text: `Willkommen bei Expensee, \n Dein authentication Code lautet: ${authCode}.\n Bitte logge dich ein, um die Email mit dem Code zu authentifizieren. \n Grüße von den Expensee Admins`,
        html: `Willkommen bei Expensee, <br> Dein authentication Code lautet: <h4>${authCode}</h4>.<br> Bitte logge dich ein, um die Email mit dem Code zu authentifizieren. <br> Grüße von den Expensee Admins`
    }

    return transporter.sendMail(mailDetails)
}

module.exports = {
    sendMail
}