let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userMessage = document.getElementById("message");

let submitMessage = document.getElementById("contact-submit").addEventListener("click", sendMail);

let regExEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regExName = /^(?! )[A-Za-z\s\xC0-\uFFFF]*$/;

function sendMail() {
  let emailProperties = {
    name: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };

  if (
    userName.value.match(regExName) &&
    userName.value != null &&
    userName.value != undefined &&
    userName.value != "" &&
    email.value.match(regExEmail) &&
    message.value.length > 10
  ) {
    emailjs.send("service_al2h1zo", "template_xqi4jaf", emailProperties).then(function (respond) {
      console.log("Success", respond);
      document.getElementById("contact-form").classList.add("hide");
      document.getElementById("contact-name-question").classList.add("hide");
      document.getElementById("contact-email-question").classList.add("hide");
      document.getElementById("contact-message-question").classList.add("hide");
      document.getElementById("contact-title-text").classList.add("hide");
      document.getElementById("contact-go-home").classList.remove("hide");
      document.getElementById("sent-message").classList.remove("hide");
    });
  }

  if (!userName.value.match(regExName)) {
    userName.setCustomValidity("Your name can only include letters and spaces")
  } else {
    userName.setCustomValidity("")
  }
  
  if (!userEmail.value.match(regExEmail)) {
    userEmail.setCustomValidity("Your email should address should follow the correct format. (test123@gmail.com)")
  } else {
    userEmail.setCustomValidity("");
  }
  
  if (message.value.length < 10) {
    userMessage.setCustomValidity("Please enter at least 10 characters")
  } else {
    userMessage.setCustomValidity("")
  }
}