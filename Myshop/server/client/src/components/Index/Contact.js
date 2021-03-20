import React from 'react';
import emailjs from 'emailjs-com';
import Footer from './Footer';
import NavigateBar from './NavigateBar';




export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_5yg5mnf', 'template_mqmg8kn', e.target, 'user_ZX8CfNsaksl0RW0SOvCIl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
      <div className="mess-cont" style={{width:"100%"}}>
        <NavigateBar/>
       <div className="curved-wrapper">
                     
                <div className="curved-div">
                    
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" ><path d="M-4.22,54.77 C166.76,37.00 179.17,142.59 359.76,96.20 L510.44,149.50 L-5.36,154.44 Z" style={{stroke: "none", "fill": "#fff"}}></path></svg>
                </div>
                </div>
                <div className="contact-card-container" >
                <div className="contact-card-wrapper" >
                <div className="contact-icon-wrapper">
                <i className="fas fa-headphones"></i>
                  <h2>
                  
                  Call Us
                  </h2>
                  <p>+250780338830</p>
                
                </div>
                <div className="contact-icon-wrapper">
                <i className="fas fa-map-marker-alt"></i>
                  <h2>

                  Address
                  </h2>
                  <p >KN153 st-Nyamirambo <br/>
                  Nyarugenge-Kigali</p>
                  
                </div>
                <div className="contact-icon-wrapper">
                <i className="fas fa-envelope"></i>
                  <h2>
                  E-mail
                  </h2>
                  <p>rwubakwanayoolivier@gmail.com</p>
                  
                </div>
                </div>
                </div>
         <div className="contact-container">
          <div className="contact-message-container" >
          
          <div className="contact-message-wrapper" >
            <h1 > Contacts</h1>
            <p className="par1">
            Contact us through Email, PhoneNumber or send message directly on our message form. we
             receive it automatically to our email
            </p>
                    <div className="mycontact"><hr/>
                       <p className="par2" > Email : rwubakwanayoolivier@gmail.com</p><hr/>
                       <p className="par3" >Phone : +250780338830</p><hr/>
                       
                    </div>
                    </div>
          </div>
            <div className="message-container">
                <h1>Message</h1>
                   
                <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden"  name="contact_number" />
                <input className="contact-input" placeholder="Name" required='name' type="text" name="user_name" /><br/>
                <input className="contact-input" placeholder="Email" required='email' type="email" name="user_email" /><br/>
                <textarea className="contact-text"  placeholder="Message" name="message" /><br/>
                <input className="contact-input" id="submit-input" type="submit" value="Send" />
                </form>
            </div>

    </div>
    {/* <div className="space-contact"></div> */}
    <Footer/>
    </div>
  );

 
}