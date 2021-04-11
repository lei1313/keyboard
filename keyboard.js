const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let randomkey = letters[Math.floor(Math.random()*26)];
const body = document.querySelector("body");
document.body.addEventListener('keydown', function(event){
    if(event.key === randomkey){
    const p= document.createElement("p");
    p.textContent = "SECRET KEY PRESSED " + randomkey;
    body.appendChild(p)
    randomkey = letters[Math.floor(Math.random()*26)];
    }
})
