import nodeMailer from 'nodemailer'

export const SendEmail = async (to,trackingID) => {
    const message = `Your testing tracking code is : ${trackingID}`;
    let transporter = nodeMailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
         secure:false,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        },
        tls: {
            // must provide server name, otherwise TLS certificate check will fail
            servername: process.env.EMAIL_SERVERNAME,
            rejectUnauthorized: true,
             minVersion: "TLSv1.2"
        }
    });

    let info = await transporter.sendMail({
        from: "noreply@studyaboard.com", // sender address
        to: to, // list of receivers
        subject: `Your testing tracking code`, // Subject line
        text: message, // plain text body
        html:`<b>${message}</b>`, // html body
      });


    //   console.log("Message sent: %s", info);

      const transformSentResponse = {
        accepted : info.accepted,
        rejected : info.rejected,
        messageId : info.messageId
      }

      if (!!info.messageId) {
        return true;
      }
      else{
        console.log("Email sending failed")
        return false
      }
}