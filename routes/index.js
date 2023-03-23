const router = require("express").Router()

const { sendEmail } = require("../controllers/email.controller")

router.route('/api/send-email')
    .post(sendEmail)

module.exports = router