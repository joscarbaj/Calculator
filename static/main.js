const buttons = document.getElementsByClassName("button");
const inputField = document.getElementById("inputField")
const Intro = document.querySelector(".intro");
const Delete = document.querySelector(".delete");
console.log(buttons)



for(let i=0; i < buttons.length; i++ ) {
    buttons[i].addEventListener("click", function() {
        inputField.value += buttons[i].innerHTML
    })
}


Intro.addEventListener("click", function() {
    try {
        inputField.value = eval(inputField.value)
        
        } catch(error) {
            alert("Syntax error")
        }


})



Delete.addEventListener("click",function() {
    inputField.value = inputField.value.slice(0,-1)
})




document.addEventListener("keydown", function(event) {
    if (event.key == "Backspace") {
        inputField.value = inputField.value.slice(0,-1)

    }


    else if (event.key === "0") {
    inputField.value += "0";

    } else if (event.key === "1") {
    inputField.value += "1";

    } else if (event.key === "2") {
    inputField.value += "2";

    } else if (event.key === "3") {
    inputField.value += "3";

    } else if (event.key === "4") {
    inputField.value += "4";

    } else if (event.key === "5") {
    inputField.value += "5";
    } else if (event.key === "6") {
    inputField.value += "6";
    } else if (event.key === "7") {
    inputField.value += "7";
    } else if (event.key === "8") {
    inputField.value += "8";
    } else if (event.key === "9") {
    inputField.value += "9";
    } else if (event.key === ".") {
    inputField.value += ".";
    } else if (event.key === "+") {
    inputField.value += "+";
    } else if (event.key === "-") {
    inputField.value += "-";
    } else if (event.key === "*") {
    inputField.value += "*";
    } else if (event.key === "/") {
    inputField.value += "/";
    }


    else if  (event.key === "Enter" || event.key === "Return") {
        try {
        inputField.value = eval(inputField.value)
        
        } catch(error) {
            alert("Syntax error")
        }


}});




