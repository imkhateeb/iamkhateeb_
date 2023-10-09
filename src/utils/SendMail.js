import emailjs from '@emailjs/browser';


export const SendEmail = (name, email, message) => {
   let templateParams = {
      from_name: name,
      from_email: email,
      message: message,
   }

   const serviceID = import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID;
   const templateID = import.meta.env.VITE_REACT_APP_EMAIL_TEMPLATE_ID;
   const publicKey = import.meta.env.VITE_REACT_APP_EMAIL_PUBLIC_KEY;



   emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(function (response) {
         return { success: true }
      }, function (error) {
         return { success: false }
      });
}



export const SendEmailBack = (name, email) => {
   let templateParams = {
      to_name: name,
      to_email: email,
      message: "You have successfully send message to Khateeb :)",
   }

   const serviceID = import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID;
   const templateID = import.meta.env.VITE_REACT_APP_EMAIL_SUCCESS_TEMPLATE_ID;
   const publicKey = import.meta.env.VITE_REACT_APP_EMAIL_PUBLIC_KEY;



   emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(function (response) {
         return { success: true }
      }, function (error) {
         return { success: false }
      });
}
