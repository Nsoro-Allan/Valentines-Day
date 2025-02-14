const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const container = document.querySelector(".container");
let yesScale = 1;

noBtn.addEventListener("mouseover", () => {
  if (!message.classList.contains("show-message")) {
    const containerRect = container.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate maximum allowed movement
    const maxX = containerRect.width - noBtnRect.width;
    const maxY = containerRect.height - noBtnRect.height;

    // Random position within container bounds
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  }
});

noBtn.addEventListener("click", () => {
  // Increase Yes button size
  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Random rotation
  const rotate = Math.random() * 20 - 10;
  noBtn.style.transform = `rotate(${rotate}deg)`;

  // Change button text randomly
  const texts = [
    "Are you sure?",
    "Think again!",
    "Really?",
    "Please?",
    "Last chance!",
  ];
  noBtn.textContent = texts[Math.floor(Math.random() * texts.length)];
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").classList.add("hidden");
  message.classList.add("show-message");

  // Add floating hearts animation
  for (let i = 0; i < 50; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animation = `floatHeart ${Math.random() * 3 + 2}s linear`;
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// Add keyframe animation for floating hearts
const style = document.createElement("style");
style.textContent = `
    @keyframes floatHeart {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
