let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userMessage = document.getElementById("message");

let submit = document.getElementById("contact-submit").addEventListener("click", sendMail);

function sendMail() {
  let emailProperties = {
    name: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };

  if (userName.value === "" || email.value === "" || message.value === "") {
        document.getElementById("contact-submit").innerHTML = "Error";
        document.getElementById("contact-submit").classList.add("wrong");
        document.getElementById("contact-submit").classList.remove("hover");
        document.getElementById("contact-submit").disabled = true;
        setTimeout(resetError, 3000);
  } else {
    emailjs.send("service_al2h1zo", "template_xqi4jaf", emailProperties).then(function (respond) {
        console.log("Success", respond);
        document.getElementById("contact-submit").innerHTML = "Sent";
        document.getElementById("contact-submit").classList.add("correct");
        document.getElementById("contact-submit").classList.remove("hover");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("contact-submit").disabled = true;
        setTimeout(resetSent, 3000);
      });
  }
}

function resetError() {
    document.getElementById("contact-submit").innerHTML = "Submit";
    document.getElementById("contact-submit").classList.remove("wrong");
    document.getElementById("contact-submit").classList.add("hover");
    document.getElementById("contact-submit").disabled = false;
}

function resetSent() {
    document.getElementById("contact-submit").innerHTML = "Submit";
    document.getElementById("contact-submit").classList.remove("correct");
    document.getElementById("contact-submit").classList.add("hover");
    document.getElementById("contact-submit").disabled = false;
}