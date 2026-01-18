let doctitle = document.title;
let favicon = document.getElementById("favicon");
let audio = document.getElementById("audio");
let ramb = document.getElementById("rambimg");
let found = false;
let img = document.getElementById("oczomzz");
let spacers = document.getElementById("spacers");
audio.volume = 0.15;

window.addEventListener("blur", () => {
    if(!found) {
        document.title = "Please, come back!";
        favicon.setAttribute("href", "/assets/determination.ico");
        setTimeout(function (){
            document.title = "I'll wait...";
            favicon.setAttribute("href", "/assets/patience.ico");
        }, 30000)
    }
});

window.addEventListener("focus", () => {
    if(!found) {
        document.title = "Thank you!";
        favicon.setAttribute("href", "/assets/kindness.ico");
        setTimeout(function (){
            document.title = doctitle;
            favicon.setAttribute("href", "/assets/determination.ico");
        }, 3000)
    }
});

function found_one_click() {
    found = true;
    document.title = "Double Click!";
    setTimeout(function (){
        document.title = doctitle;
    }, 300)
}

function foundbutton() {
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");
    let p5 = document.getElementById("p5");
    let p6 = document.getElementById("p6");
    let p7 = document.getElementById("p7");
    let p8 = document.getElementById("p8");
    let p9 = document.getElementById("p9");
    let p10 = document.getElementById("p10");
    let p11 = document.getElementById("p11");
    let p12 = document.getElementById("p12");
    let p13 = document.getElementById("p13");
    let ramb = document.getElementById("ramb");
    setTimeout(function (){
        favicon.setAttribute("href", "/assets/perseverance.ico");
        document.title = "You did it!";
    }, 1000);
    p1.innerText = "Oi, are you pleased with the choices you've picked so far, luv'?";
    p2.innerText = "Are you prep'ed for what's around the corner, eh?";
    p3.innerText = "Well, I'm dead certain things will be spot on! You've had a right old streak of luck, that's for sure!";
    p4.innerText = "You'll be sorted, don't you worry!";
    p5.innerText = "Now again, cakes and candles, luv'!";
    p6.innerText = ""; 
    p7.innerText = "";
    p8.innerText = "";
    p9.innerText = "";
    p10.innerText = "";
    p11.innerText = "";
    p12.innerText = "";
    p13.innerText = "";
    audio.setAttribute("src", "/assets/shop.mp3");
    audio.volume = 0.08;
    ramb.style.display = "flex";
    spacers.style.display = "none";
    img.style.display = "none";
};

function rambchange() {
    rambimg.setAttribute("src", "/assets/RAMBafter.png");
};

function rambchange2() {
    rambimg.setAttribute("src", "/assets/RAMB.png");
};