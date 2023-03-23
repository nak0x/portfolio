const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.SERVER_EMAIL_ADRESS,
        pass: process.env.SERVER_EMAIL_PASS
    }
})

exports.sendEmail = async (req, res)=>{
    try{
        let htmlContent = 
        "<h2>Email de contact</h2>"+
        `<h4>Email de ${req.body.name} :</h4>`+
        `<pre
            style="
                border:1px solid #444444;
                color: #444444;
                padding: 10px;
                border-radius: 3px;
            "
        >${req.body.message}</pre>`+
        `<a href="mailto:${req.body.email}">
            <button
                title="Envoie d'un mail à ${req.body.email}" 
                style="
                    border:1px solid #444444;
                    color: #444444;
                    border-radius: 70px;
                    background-color: transparent;
                    padding: 16px 24px;
                "
            >Répondre à ${req.body.name}</button></a>`

        let infos = await transporter.sendMail({
            from: `${req.body.name} <${req.body.email}>`, // sender address
            to: process.env.SERVER_EMAIL_ADRESS, // list of receivers
            subject: `${req.body.subject} - formulaire de contact`, // Subject line
            html: htmlContent, // plain text body
        })
        res.status(200).json({ok: true, message: `Email n°${infos.messageId} have being saved !`})
    }catch(err){
        res.status(500).json({ok: false, message: "Une erreur est survenue", err: err.message})
    }
}