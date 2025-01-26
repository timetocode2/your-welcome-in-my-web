document.querySelector("main").addEventListener("click", ()=>{
    apps.classList.remove("sub-nav-show2");
    apps.classList.add("sub-apps-nav");
    // calcScrn.style.setProperty("top", "-40px");
    const close11 = document.querySelectorAll("#themes, #fonts, #fun, #about");
    setting.classList.remove("sub-nav-show1");
    setting.classList.add("sub-setting-nav");

    close11.forEach(close1 => {
        if (close1.style.visibility !== "hidden") {
            close1.style.setProperty("visibility", "hidden", "important");
        };
    });

});

const settingButton = document.querySelector("#setting-button");
const appsButton = document.querySelector("#apps-button");

const setting = document.querySelector("#setting");
const apps = document.querySelector("#apps");


settingButton.addEventListener("click", () => {
    if (window.getComputedStyle(setting).visibility === "hidden") {
        setting.classList.add("sub-nav-show1");
        apps.classList.remove("sub-nav-show2");
        apps.classList.add("sub-apps-nav");
        // calcScrn.style.setProperty("top", "-40px");
        const close11 = document.querySelectorAll("#themes, #fonts, #fun, #about");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });

    }
    else {
        setting.classList.remove("sub-nav-show1");
        setting.classList.add("sub-setting-nav");

        const close11 = document.querySelectorAll("#themes, #fonts, #fun, #about");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });

        // calcScrn.style.setProperty("top", "");

    };
});

appsButton.addEventListener("click", () => {
    if (window.getComputedStyle(apps).visibility === "hidden") {
        apps.classList.add("sub-nav-show2");
        setting.classList.remove("sub-nav-show1");
        setting.classList.add("sub-setting-nav");
        //         // calcScrn.style.setProperty("top", "-40px");
        const close11 = document.querySelectorAll("#themes, #fonts, #fun, #about");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });

    }
    else {
        apps.classList.remove("sub-nav-show2");
        apps.classList.add("sub-apps-nav");

        const close11 = document.querySelectorAll("#themes, #fonts, #fun, #about");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });


        //         // calcScrn.style.setProperty("top", "");

    };
});



// closebtn  for closing the themes/fonts/fun-calc/about div 👇👇👇
// closebtn  for closing the themes/fonts/fun-calc/about div 👇👇👇
const closebtn = document.querySelectorAll(".calc-closebtn-control");
closebtn.forEach(clsbtn => {
    clsbtn.addEventListener("click", () => {
        const close11 = document.querySelectorAll(".setting-control, .apps-control");
        close11.forEach(close1 => {
            close1.style.setProperty("visibility", "hidden");

        });
        document.getElementById("calc-main2").style.filter = "blur(0px)";
        document.getElementById("calc-main2").style.opacity = 1;
    });
});
// closebtn  for closing the themes/fonts/fun-calc/about div 👆👆👆
// closebtn  for closing the themes/fonts/fun-calc/about div 👆👆👆



// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
const themesButton = document.querySelector("#themes-button");
const fontsButton = document.querySelector("#fonts-button");
const funButton = document.querySelector("#fun-button");
const aboutButton = document.querySelector("#about-button");

const themes = document.querySelector("#themes");
const fonts = document.querySelector("#fonts");
const fun = document.querySelector("#fun");
const about = document.querySelector("#about");

console.log("so maine 8 o ko contian kar liya hai");

themesButton.addEventListener("click", () => {
    if (window.getComputedStyle(themes).visibility === "hidden") {
        themes.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#fonts, #fun, #about");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });

    }
    else {
        themes.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter = "none";

    };
});
console.log("themes button js passed");

fontsButton.addEventListener("click", function () {
    if (window.getComputedStyle(fonts).visibility === "hidden") {
        fonts.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#themes, #fun, #about");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }

    else {
        fonts.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter ="none";

    };

});
console.log("fonts button js passed");



funButton.addEventListener("click", function () {
    if (window.getComputedStyle(fun).visibility === "hidden") {
        fun.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#themes, #fonts, #about");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }
    else {
        fun.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter = "none";

    };

});
console.log("fun button js passed");



aboutButton.addEventListener("click", function () {

    if (window.getComputedStyle(about).visibility === "hidden") {
        about.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#themes, #fonts, #fun");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }
    else {
        about.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter = "none";

    };
});
console.log("about button js passed");

// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
























// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
const calcButton = document.querySelector("#calc-button");
const ticButton = document.querySelector("#tic-button");
const lordsButton = document.querySelector("#lords-button");
const pubgButton = document.querySelector("#pubg-button");

const calc = document.querySelector("#calc");
const tic = document.querySelector("#tic");
const lords = document.querySelector("#lords");
const pubg = document.querySelector("#pubg");

console.log("so maine 8 o ko contian kar liya hai");

calcButton.addEventListener("click", () => {
    if (window.getComputedStyle(calc).visibility === "hidden") {
        calc.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#tic, #lords, #pubg");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });

    }
    else {
        calc.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter = "none";

    };
});
console.log("calc button js passed");

ticButton.addEventListener("click", function () {
    if (window.getComputedStyle(tic).visibility === "hidden") {
        tic.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#calc, #lords, #pubg");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }

    else {
        tic.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter ="none";

    };

});
console.log("tic button js passed");



lordsButton.addEventListener("click", function () {
    if (window.getComputedStyle(lords).visibility === "hidden") {
        lords.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#calc, #tic, #pubg");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }
    else {
        lords.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter = "none";

    };

});
console.log("lords button js passed");



pubgButton.addEventListener("click", function () {

    if (window.getComputedStyle(pubg).visibility === "hidden") {
        pubg.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#calc, #tic, #lords");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }
    else {
        pubg.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter = "none";

    };
});
console.log("pubg button js passed");

// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185








// help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle

const helpcircle = document.getElementById("helpcircle");
const helpbox = document.getElementById("helpbox");
let isTranslated = false;

helpcircle.addEventListener("click", () => {
    const visibility = window.getComputedStyle(helpbox).visibility;
    if (visibility === "hidden") { helpbox.style.visibility = "visible", document.querySelector("main").style.opacity = 0.1 } else { helpbox.style.visibility = "hidden", document.querySelector("main").style.opacity = 1 };

    if (isTranslated === false) {
        helpcircle.style.transform = " translateX(-40vw) translateY(-3vh )";
        isTranslated = true;
    } else {
        isTranslated = false;
        helpcircle.style.transform = "translateX(0) translateY(0)";
    };

});
