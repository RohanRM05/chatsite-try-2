const chatForm = document.getElementById("chatForm");
const messages = document.getElementById("messages");

if (localStorage.getItem("messages")) {
    messages.innerHTML = localStorage.getItem("messages");
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = sessionStorage.getItem('name'); 

    const messageInput = document.getElementById("message");
    const message = messageInput.value;

    messages.innerHTML += "<p><strong>" + name + ":</strong> " + message + "</p>";

    localStorage.setItem("messages", messages.innerHTML);

    messageInput.value = '';

    fetch("save_message.php", {
        method: "POST",
        body: new URLSearchParams({
            message: message
        })
    })
        .then(response => response.text())
        .then(result => {
            console.log(result); 
        })
        .catch(error => {
            console.error(error);
        });
function retrieveMessages() {
  fetch('get_messages.php')
      .then(response => response.json())
      .then(messages => {
          const messagesDiv = document.getElementById("messages");
          messagesDiv.innerHTML = "";

          messages.forEach(message => {
              const { sender, message } = message;
              const messageElement = document.createElement("p");
              messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
              messagesDiv.appendChild(messageElement);
          });
      })
      .catch(error => {
          console.error('Error:', error);
      });
}

retrieveMessages();

setInterval(retrieveMessages, 5000); 

});
