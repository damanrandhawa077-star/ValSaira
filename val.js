const hearts = ["💖","💕","❤️","💗","💓","💞"];

/* BACKGROUND FLOATING HEARTS */
function createBackgroundHeart() {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    h.style.left = Math.random() * 100 + "vw";
    h.style.top = "100vh";
    h.style.fontSize = (1.5 + Math.random() * 2.5) + "rem";
    h.style.setProperty("--x", "0px");
    h.style.setProperty("--y", "-120vh");

    document.querySelector(".hearts").appendChild(h);
    setTimeout(() => h.remove(), 6000);
}
setInterval(createBackgroundHeart, 300);

/* HEART SHAPE */
function heartShapePoints(scale = 8) {
    const pts = [];
    for (let t = 0; t < Math.PI * 2; t += 0.35) {
        pts.push({
            x: 16 * Math.pow(Math.sin(t),3) * scale,
            y: -(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t)) * scale
        });
    }
    return pts;
}

// /* YES CLICK */
// function sayYes() {
//     document.getElementById("message").classList.add("show");
//     document.getElementById("card").classList.add("grow");
//     document.querySelector(".yes").innerText = "YAY 💕😘";

//     burstHearts();
// }

/* HEART BURST FROM TOP-CENTER */
function burstHearts() {
    const container = document.querySelector(".hearts");
    const card = document.querySelector(".valentine");
    const rect = card.getBoundingClientRect();

    const startX = rect.left + rect.width / 2;
    const startY = rect.top - 100;

    heartShapePoints().forEach((p,i) => {
        const h = document.createElement("div");
        h.className = "heart";
        h.innerText = hearts[Math.floor(Math.random()*hearts.length)];

        h.style.left = startX + "px";
        h.style.top = startY + "px";
        h.style.fontSize = (4 + Math.random()*2) + "rem";
        h.style.setProperty("--x", p.x+"px");
        h.style.setProperty("--y", p.y+"px");
        h.style.animationDelay = i*0.03+"s";

        container.appendChild(h);
        setTimeout(()=>h.remove(),6000);
    });
}

/* RUNAWAY NO BUTTON 😈 */
const noBtn = document.querySelector(".no");
noBtn.addEventListener("mouseover",()=>{
    noBtn.style.transform =
      `translate(${Math.random()*400-200}px,${Math.random()*400-200}px)`;
});

noBtn.addEventListener("touchstart", () => {
  noBtn.style.transform =
    `translate(${Math.random()*300-150}px,${Math.random()*300-150}px)`;
});

function sayYes() {
    document.getElementById("message").classList.add("show");
    document.getElementById("card").classList.add("grow");
    document.querySelector(".yes").innerText = "YAY 💕😘";

    burstHearts();

    setTimeout(() => {
        const popup = document.getElementById("popup");
        popup.classList.add("show");

        const video = document.getElementById("loveVideo");
        video.currentTime = 0;
        video.play();
    }, 700); // delay for drama 😌
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("show");

    const video = document.getElementById("loveVideo");
    video.pause();
}
