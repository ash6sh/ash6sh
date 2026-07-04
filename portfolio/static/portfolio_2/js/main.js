const cursor = document.createElement("div");

cursor.className = "cursor";

document.body.appendChild(cursor);

let x = 0;
let y = 0;

let mx = window.innerWidth / 2;
let my = window.innerHeight / 2;

/* Desktop */
document.addEventListener("mousemove",(e)=>{
    mx = e.clientX;
    my = e.clientY;
});

/* Mobile */
document.addEventListener("touchmove",(e)=>{
    mx = e.touches[0].clientX;
    my = e.touches[0].clientY;
});

function animate(){

    x += (mx - x) * 0.08;
    y += (my - y) * 0.08;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    requestAnimationFrame(animate);
}

animate();


const texts = [
    "LET'S WORK TOGETHER",
    "AVAILABLE FOR WORK",
    "VIDEO EDITOR",
    "1000+ PROJECTS COMPLETED",
    "READY FOR YOUR NEXT PROJECT"
];

let index = 0;

setInterval(() => {
    index = (index + 1) % texts.length;
    document.getElementById("changing-text").textContent = texts[index];
}, 2500);