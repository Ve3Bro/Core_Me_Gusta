let boton1 = document.querySelector("#likesb")
let likes1 = document.querySelector("#likes")
var likes11 = 0

boton1.addEventListener("click", function(){
    likes11++
    likes1.textContent = likes11
})