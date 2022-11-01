
let size=prompt("How many squares per side?");
let side=parseInt(size);
let n=side*side;

function addBox(){
    let grid = document.getElementById("container");
    grid.style.setProperty("grid-template-columns", "repeat("+ side +",auto)");
    for (let i=0;i<n;i++){
    let cell = document.createElement("div");
    grid.appendChild(cell);
}
mOver();
}

function mOver(){
    let boxes=document.querySelectorAll("div");
    boxes.forEach(boxes=> {
        boxes.addEventListener("mouseenter", ()=> {
            boxes.style.backgroundColor="white";
        });
    });
    boxes.forEach(boxes=> {
        boxes.addEventListener("mouseout", ()=> {
            boxes.style.backgroundColor="black";
        });
    });
}

function reset(){
    let boxes=document.querySelectorAll("div");
    boxes.forEach(boxes=> {
            boxes.style.backgroundColor="red";
    });
}