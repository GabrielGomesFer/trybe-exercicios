// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


function preventClick(event){
    event.preventDefault();
    console.log('funciona');
}

function preventKeypress(event){
    const char = event.key;
    if(char !== 'a'){
        event.preventDefault();
    }
    
}

HREF_LINK.addEventListener("click", preventClick);
INPUT_CHECKBOX.addEventListener("click",preventClick);
INPUT_TEXT.addEventListener("keypress", preventKeypress);