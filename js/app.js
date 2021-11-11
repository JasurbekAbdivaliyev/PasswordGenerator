let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    input.value = generatePassword(12);
});
    
function generatePassword(length = 12) {
    let wordNum = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789";
    
    let password = '';
    
    for(let i=0; i < length;i++){
        let at = Math.floor(Math.random()* (wordNum.length + 1));
        
        password+= wordNum.charAt(at);
    }
    return password;

}


//    Coder: Jasurbek Abdivaliyev 11.11.2021