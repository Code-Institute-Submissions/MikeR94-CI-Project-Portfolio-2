// Variables
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userMessage = document.getElementById("message");
let regExEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regExName = /^(?! )[A-Za-z\s\xC0-\uFFFF]*$/;
let sendButton = document.getElementById("contact-submit");
let regExEmpty = /^((?!\s{2}).)*$/;

// Event Listeners
sendButton.addEventListener("click", sendMail);

/**
 * This function checks if the users details have been filled in correctly relative to ReGex criteria and if so, send the email.
 * This function has been heavily modified from the emailjs.com docs (https://www.emailjs.com/docs/sdk/send/)
 */
function sendMail() {
  let emailProperties = {
    name: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };

  buttonSound();

  sendButton.setAttribute("disabled", "disabled");
  sendButton.classList.remove("hover");
  sendButton.innerHTML = "Sending..."

  if (
    userName.value.match(regExName) &&
    userName.value != null &&
    userName.value != undefined &&
    userName.value != "" &&
    userEmail.value.match(regExEmail) &&
    userMessage.value.length > 10 &&
    userMessage.value.match(regExEmpty)
  ) {
    emailjs.send("service_al2h1zo", "template_xqi4jaf", emailProperties).then(
      function (response) {
        console.log("Success", response.status, response.text);
        document.getElementById("contact-form").classList.add("hide");
        document.getElementById("contact-name-question").classList.add("hide");
        document.getElementById("contact-email-question").classList.add("hide");
        document.getElementById("contact-message-question").classList.add("hide");
        document.getElementById("contact-title-text").classList.add("hide");
        document.getElementById("contact-go-home").classList.remove("hide");
        document.getElementById("sent-message").classList.remove("hide");
      },
      function (error) {
        console.log("Failed", error);
        alert("Your message failed to send, please reload the website and try again")
        sendButton.removeAttribute("disabled", "disabled");
        sendButton.classList.add("hover");
        sendButton.innerHTML = "Submit"
      }
    );
  }

  if (!userName.value.match(regExName)) {
    userName.setCustomValidity("Your name can only include letters and spaces");
    sendButton.removeAttribute("disabled", "disabled");
    sendButton.classList.add("hover");
    sendButton.innerHTML = "Submit"
  } else {
    userName.setCustomValidity("");
  }

  if (!userEmail.value.match(regExEmail)) {
    userEmail.setCustomValidity("Your email should address should follow the correct format. (test123@gmail.com)");
    sendButton.removeAttribute("disabled", "disabled");
    sendButton.classList.add("hover");
    sendButton.innerHTML = "Submit"
  } else {
    userEmail.setCustomValidity("");
  }

  if (!userMessage.value.match(regExEmpty) || userMessage.value.length < 10) {
    userMessage.setCustomValidity("Please remove any double spaces and make sure to enter at least 10 characters");
    sendButton.removeAttribute("disabled", "disabled");
    sendButton.classList.add("hover");
    sendButton.innerHTML = "Submit"
  } else {
    userMessage.setCustomValidity("");
  }
}
