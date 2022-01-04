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

    emailjs.send('service_al2h1zo', 'template_xqi4jaf', emailProperties)
    .then(function(respond){
        console.log("Success", respond.status)
    })
}