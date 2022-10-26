function addBox(){

    
let grid = document.getElementById("container");
for (let i=0;i<256;i++){
let cell = document.createElement("div");
grid.appendChild(cell);
}
}