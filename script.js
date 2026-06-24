console.log("JS is working");

// =========================
// Typewriter Intro
// =========================
const music = document.getElementById("bgMusic");
let musicStarted = false;

document.addEventListener("click", () => {

    if(!musicStarted){
        music.play();
        music.volume = 0.5;
        musicStarted = true;
    }

});

const scanText = document.getElementById("aiScan");

const scanMessages = [
"Initializing system...",
"Connecting to memory core...",
"Scanning emotional database...",
"Subject detected: Balqis Arendo Ghaziyah ❤️",
"Analyzing personality traits...",
"Result: dangerously lovable 😳",
"Loading birthday protocol..."
];

let i = 0;

function runScan(){

    if(i < scanMessages.length){

        scanText.innerHTML = scanMessages[i];
        i++;

        setTimeout(runScan, 1200);

    } else {
        scanText.innerHTML = "Tap Start Journey ❤️";
    }

}

runScan();

const introText =
`This website is only for one person...

If your name is Balqis Arendo Ghaziyah ❤️

Then welcome to your birthday journey.

There are memories,
surprises,
and one final secret waiting for you...`;

const typewriter = document.getElementById("typewriter");

let index = 0;

function typeText() {
if (index < introText.length) {
typewriter.innerHTML += introText.charAt(index);
index++;
setTimeout(typeText, 45);
}
}

typeText();

// =========================
// Screen Navigation
// =========================

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

}

// =========================
// Start Button
// =========================

const startBtn = document.getElementById("startBtn");

if(startBtn){

    startBtn.addEventListener("click", () => {

        showScreen("puzzle1");

        // start music here 🎵
        const music = document.getElementById("bgMusic");

        if(music){
            music.volume = 0;

            music.play();

            let v = 0;
            let fade = setInterval(() => {
                if(v < 0.5){
                    v += 0.05;
                    music.volume = v;
                } else {
                    clearInterval(fade);
                }
            }, 200);
        }

    });

}

// =========================
// Puzzle 1
// =========================
let foundHearts = 0;

const items = document.querySelectorAll(".item");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progressBar");

function showMsg(msg){
feedback.innerHTML = msg;
setTimeout(()=> feedback.innerHTML="", 1200);
}

function screenFlash(){
document.body.classList.add("flash");
setTimeout(()=>{
document.body.classList.remove("flash");
},600);
}

items.forEach(item=>{

    item.addEventListener("click",()=>{

        if(item.classList.contains("found")) return;

        // correct heart
        if(item.classList.contains("heart-target")){

            item.classList.add("found");
            item.innerHTML = "❤️";

            foundHearts++;

            progressBar.style.width =
                (foundHearts/5)*100 + "%";

            createHeartBurst();
            screenFlash();

            showMsg("You found a heart ❤️");

            if(foundHearts === 5){

                setTimeout(()=>{
                    feedback.innerHTML = "Memory unlocking...";
                },500);

                setTimeout(()=>{
                    createBigReveal();
                },1200);
            }

        } else {

            // wrong click
            item.style.opacity = "0.3";
            item.style.transform = "scale(0.8)";

            const msgs = [
                "Empty space 😏",
                "Not here ma idiot ❤️",
                "Try again baby 😂",
                "Wrong star ✨",
                "Close... but not this one"
            ];

            showMsg(msgs[Math.floor(Math.random()*msgs.length)]);
        }

    });

});

// =========================
// Continue Buttons
// =========================

document.querySelectorAll(".next-btn").forEach(button => {

    button.addEventListener("click", () => {

        const nextScreen = button.dataset.next;

        showScreen(nextScreen);

    });

});

// =========================
// Gallery Unlock
// =========================

let openedPhotos = 0;

const memoryCards = document.querySelectorAll(".memory-card");

const galleryComplete = document.getElementById("galleryComplete");

memoryCards.forEach(card => {

    card.addEventListener("click", () => {

        if(!card.classList.contains("open")){

            card.classList.add("open");

            openedPhotos++;

            createHeartBurst();

            if(openedPhotos === 3){

                galleryComplete.style.display = "block";

            }

        }

    });

});

// =========================
// Gift Box
// =========================

const giftBox = document.getElementById("giftBox");

if(giftBox){

    giftBox.addEventListener("click", () => {

        giftBox.classList.add("opened");

        massiveHearts();

        setTimeout(() => {

            showScreen("finalLetter");

        }, 1200);

    });

}

// =========================
// Secret Ending
// =========================

const secretBtn = document.getElementById("secretBtn");

if(secretBtn){

    secretBtn.addEventListener("click", () => {

        showScreen("funnyEnding");

        massiveHearts();

    });

}

// =========================
// Floating Hearts
// =========================

function createHeart() {

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";

heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

heart.style.animationDuration =
    Math.random() * 4 + 4 + "s";

document
    .getElementById("hearts-container")
    .appendChild(heart);

setTimeout(() => {

    heart.remove();

}, 8000);

}

// =========================
// Small Burst
// =========================

function createHeartBurst(){

for(let i = 0; i < 10; i++){

    setTimeout(() => {

        createHeart();

    }, i * 100);

}

}

// =========================
// Massive Hearts
// =========================

function massiveHearts(){

for(let i = 0; i < 50; i++){

    setTimeout(() => {

        createHeart();

    }, i * 80);

}

}

// =========================
// Automatic Hearts
// =========================

setInterval(() => {

createHeart();

}, 1500);

const analyzeBtn =
document.getElementById("analyzeBtn");

if(analyzeBtn){

    analyzeBtn.addEventListener("click",()=>{

        const result =
        document.getElementById("analysisResult");

        result.innerHTML = `
        <h2>Analyzing Balqis...</h2>
        `;

        setTimeout(()=>{

            result.innerHTML =
            "<h2>25%</h2>";

        },1000);

        setTimeout(()=>{

            result.innerHTML =
            "<h2>50%</h2>";

        },2000);

        setTimeout(()=>{

            result.innerHTML =
            "<h2>75%</h2>";

        },3000);

        setTimeout(()=>{

            result.innerHTML =
            "<h2>100%</h2>";

        },4000);

        setTimeout(()=>{

            result.innerHTML = `
            <h1>RESULT:</h1>

            <h2>
            Professional Idiot 🏆
            </h2>

            <p>
            Diagnosis complete.
            Extremely cute.
            Highly lovable.
            Occasionally dangerous.
            Permanently owns my heart.
            </p>
            `;

        },5500);

    });

}

function createBigReveal(){

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "black";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.flexDirection = "column";
overlay.style.zIndex = "9999";
overlay.style.color = "white";
overlay.style.textAlign = "center";
overlay.style.padding = "20px";

overlay.innerHTML = `
    <h1 style="color:#ff4db8;font-size:2.5rem;">
        All Hearts Found ❤️
    </h1>

    <p style="max-width:600px;margin-top:20px;">
        You just unlocked something I kept for you...
    </p>

    <div style="margin-top:30px;font-size:3rem;">
        ❤️ ❤️ ❤️
    </div>

    <p style="margin-top:20px;">
        Opening memory...
    </p>
`;

document.body.appendChild(overlay);

setTimeout(()=>{
    overlay.remove();
    showScreen("letter1");
},3000);

}