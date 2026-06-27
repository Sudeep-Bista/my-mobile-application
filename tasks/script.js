let modeBtn = document.querySelector("#mode");
let currentMode = "light";
mode.addEventListener("click", () => {
    
    if (currentMode == "light"){
        currentMode = "dark";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }else {
        currentMode = "light";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
        console.log("current mode is " + currentMode);
});
