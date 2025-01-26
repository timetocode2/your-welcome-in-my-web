const myTd = document.querySelectorAll("#td1, #td2, #td3, #td4, #td5, #td6, #td7, #td8, #td9");
let a = "circle";

myTd.forEach((myt) => {
    myt.classList.add("tdclass");


    myt.addEventListener("click", () => {

        if (a === "circle") {
            a = "cross";
            let b = document.createElement("div");
            b.id = "circle";
            myt.innerHTML = "";
            myt.append(b); console.log("circle");
            document.getElementById("yourmove1").style.setProperty("visibility", "hidden");
            document.getElementById("yourmove2").style.setProperty("visibility", "visible");
        } else {
            a = "circle";

            let c = document.createElement("div");
            c.id = "cross";
            c.innerText = "x";
            myt.innerHTML = "";

            myt.append(c);
            console.log("cross");
            document.getElementById("yourmove2").style.setProperty("visibility", "hidden");
            document.getElementById("yourmove1").style.setProperty("visibility", "visible");

        };
    });
});




myTd.forEach((mytt) => {
    mytt.addEventListener("click", () => {
        const result1 = document.querySelector("#result1");
        const result2 = document.querySelector("#result2");
        const td1 = document.getElementById("td1").innerText;
        const td2 = document.getElementById("td2").innerText;
        const td3 = document.getElementById("td3").innerText;
        const td4 = document.getElementById("td4").innerText;
        const td5 = document.getElementById("td5").innerText;
        const td6 = document.getElementById("td6").innerText;
        const td7 = document.getElementById("td7").innerText;
        const td8 = document.getElementById("td8").innerText;
        const td9 = document.getElementById("td9").innerText;

        if (td1 == "x" && td2 == "x" && td3 == "x") {
            result2.innerText = "You won! 🤩";
            result2.style.setProperty("visibility", "visible");
            result1.innerText = "=Try again! 😑";
            result1.style.setProperty("visibility", "visible");

        }
        else if (td1 == "x" && td4 == "x" && td7 == "x") {
            result2.innerText = "You won! 🤩";
            result2.style.setProperty("visibility", "visible"); result1.innerText = "=Try again! 😑";
            result1.style.setProperty("visibility", "visible");

        }
        else if (td1 == "x" && td5 == "x" && td9 == "x") {
            result2.innerText = "You won! 🤩";
            result2.style.setProperty("visibility", "visible"); result1.innerText = "=Try again! 😑";
            result1.style.setProperty("visibility", "visible");

        }
        else if (td2 == "x" && td5 == "x" && td8 == "x") {
            result2.innerText = "You won! 🤩";
            result2.style.setProperty("visibility", "visible"); result1.innerText = "=Try again! 😑";
            result1.style.setProperty("visibility", "visible");

        }
        else if (td3 == "x" && td6 == "x" && td9 == "x") {
            result2.innerText = "You won! 🤩";
            result2.style.setProperty("visibility", "visible"); result1.innerText = "=Try again! 😑";
            result1.style.setProperty("visibility", "visible");

        }
        else if (td3 == "x" && td5 == "x" && td7 == "x") {
            result2.innerText = "You won! 🤩";
            result2.style.setProperty("visibility", "visible"); result1.innerText = "=Try again! 😑";
            result1.style.setProperty("visibility", "visible");

        }
        else if (td4 == "x" && td5 == "x" && td6 == "x") {
            result2.innerText = "You won! 🤩";
            result2.style.setProperty("visibility", "visible"); 
            result1.innerText = "=Try again! 😑";
            result1.style.setProperty("visibility", "visible");

        }
        else if (td7 == "x" && td8 == "x" && td9 == "x") {
            result2.innerText = "You won! 🤩";
            result2.style.setProperty("visibility", "visible"); result1.innerText = "=Try again! 😑";
            result1.style.setProperty("visibility", "visible");

        }; 







        if (td1 == "" && td2 == "" && td3 == "") {
            result2.innerText = "=Try again! 😑";
            result2.style.setProperty("visibility", "visible");
            result1.innerText = "You won! 🤩";
            result1.style.setProperty("visibility", "visible");
        }
        else if (td1 == "" && td4 == "" && td7 == "") {
            result2.innerText = "=Try again! 😑";
            result2.style.setProperty("visibility", "visible");
            result1.innerText = "You won! 🤩";
            result1.style.setProperty("visibility", "visible");
        }
        else if (td1 == "" && td5 == "" && td9 == "") {
            result2.innerText = "=Try again! 😑";
            result2.style.setProperty("visibility", "visible");
            result1.innerText = "You won! 🤩";
            result1.style.setProperty("visibility", "visible");
        }
        else if (td2 == "" && td5 == "" && td8 == "") {
            result2.innerText = "=Try again! 😑";
            result2.style.setProperty("visibility", "visible");
            result1.innerText = "You won! 🤩";
            result1.style.setProperty("visibility", "visible");
        }
        else if (td3 == "" && td6 == "" && td9 == "") {
            result2.innerText = "=Try again! 😑";
            result2.style.setProperty("visibility", "visible");
            result1.innerText = "You won! 🤩";
            result1.style.setProperty("visibility", "visible");
        }
        else if (td3 == "" && td5 == "" && td7 == "") {
            result2.innerText = "=Try again! 😑";
            result2.style.setProperty("visibility", "visible");
            result1.innerText = "You won! 🤩";
            result1.style.setProperty("visibility", "visible");
        }
        else if (td4 == "" && td5 == "" && td6 == "") {
            result2.innerText = "=Try again! 😑";
            result2.style.setProperty("visibility", "visible");
            result1.innerText = "You won! 🤩";
            result1.style.setProperty("visibility", "visible");
        }
        else if (td7 == "" && td8 == "" && td9 == "") {
            result2.innerText = "=Try again! 😑";
            result2.style.setProperty("visibility", "visible");
            result1.innerText = "You won! 🤩";
            result1.style.setProperty("visibility", "visible");
        };

    });
});








