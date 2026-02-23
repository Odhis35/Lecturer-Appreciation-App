//let inputEl = document.getElementById("input_el")
//let messageEl = document.getElementById("message_el")
//function myMessage(){
    //let message = inputEl.value
    //messageEl.innerText = message
//}  
function sendMessage(user){
    let inputField
    if(user === 'User1'){
        inputField = document.getElementById("input-1");
    } else inputField = document.getElementById("input-2");
}

let messageText = inputField.value;
if (messageText.trim() === " ") return;
//create an element
let message = document.createElement("div")
message.classList.add("message", user)
message.textContent = messageText;

//append to chatbox
document.getElementById("chatbox").appendChild(message)

//clear inputfield
inputField.value = " ";