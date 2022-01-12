let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userMessage = document.getElementById("message");

let submit = document.getElementById("contact-submit").addEventListener("click", sendMail);

let regExEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regExName = /^(?! )[A-Za-z\s]*$/;

function sendMail() {
  let emailProperties = {
    name: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };

  if (userName.value.match(regExName) && userName.value != null && userName.value != undefined && userName.value != "" && email.value.match(regExEmail) && message.value.length > 10) {
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
  if (userName.value == null || userName.value == undefined || userName.value == "") {
    errorButton();
    setTimeout(resetError, 3000);
    console.log("username incorrect");
    document.getElementById("name").classList.add("error-border");
  }
  if (!userName.value.match(regExName)) {
    errorButton();
    setTimeout(resetError, 3000);
    console.log("username incorrect");
    document.getElementById("name").classList.add("error-border");
  } 
  if (!email.value.match(regExEmail)) {
    errorButton();
    setTimeout(resetError, 3000);
    console.log("email incorrect");
    document.getElementById("email").classList.add("error-border");
  } 
  if (message.value.length < 10) {
    errorButton();
    setTimeout(resetError, 3000);
    console.log("message not long enough");
    document.getElementById("message").classList.add("error-border");
  } 
} 

function resetError() {
  document.getElementById("contact-submit").innerHTML = "Submit";
  document.getElementById("contact-submit").classList.remove("wrong");
  document.getElementById("contact-submit").classList.add("hover");
  document.getElementById("contact-submit").disabled = false;
  document.getElementById("name").classList.remove("error-border");
  document.getElementById("email").classList.remove("error-border");
  document.getElementById("message").classList.remove("error-border");
}

function errorButton() {
  document.getElementById("contact-submit").innerHTML = "Error";
  document.getElementById("contact-submit").classList.add("wrong");
  document.getElementById("contact-submit").classList.remove("hover");
  document.getElementById("contact-submit").disabled = true;
}

