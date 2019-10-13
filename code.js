var randomNbr = Math.floor(Math.random() * 10 +1);

var columns = document.querySelectorAll("div.col");


columns.forEach(column =>{
    column.addEventListener("click", e => {
        if (column.innerHTML == randomNbr){
            column.style.color = "white";
            column.innerHTML = "Winner";
            column.style.background = "lightseagreen";
            setTimeout(function(){
                window.location.reload(1);
            }, 2500);
        } else {
            column.style.display = "none";
        }
    })
});

var button = document.querySelector("button");

button.addEventListener("click", e => {
    window.location.reload(1);
})