const {sendEmail} = require ('./sendEmail');
const ejs = require('ejs')

class WelcomeMailService {

    static async welcomeMail (user){

        try {
            //const welcomeMsg = await ejs.renderFile('./views/welcome.ejs',{name: user.firstName+' '+ user.lastName})
            const welcomeMsg ='renderizar el msj de bienvenida!'
            if(welcomeMsg){
                const toEmail = user.email;
                const subject = 'Welcome  to SOMOS MAS !';
                const title = 'Alkemy';
                const message = welcomeMsg;

                sendEmail(toEmail,subject,title,message)
                return true
            }else{
                return false
            }
            
        } catch (error) {
            throw new Error(error)
        }

    }


}
module.exports = WelcomeMailService;
