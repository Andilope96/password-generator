const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let inputEl = document.getElementById("input-el");
let outputEl = document.querySelector("#output");
let btnClipboard = document.querySelector("#btn-clipboard");

function generatePassword(){
    let strPassword = "";
    btnClipboard.textContent="Copy to Clipboard";
    if(inputEl.value >= 30){
        alert("Password too long!");
    } else if(inputEl.value <= 5){
        alert("Password too short!");
    }else{
    for(let i = 0; i < inputEl.value; i++)
    {
        strPassword += characters[Math.floor(Math.random()*characters.length)];
    }

    outputEl.textContent = strPassword;
    }

}

function copyClipboard(){
    
    navigator.clipboard.writeText(outputEl.textContent);
    btnClipboard.textContent = "Copied to clipboard!"
}

function changeText(){
    btnClipboard.textContent="Copy to Clipboard";
}