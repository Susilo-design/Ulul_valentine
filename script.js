const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
  playMusic(); // Play music on interaction
}

function handleYesClick() {
  window.location.href = "enve/yes_page.html";
  playMusic(); // Play music on interaction
}

function playMusic() {
  let audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("bg-music");
  audio.muted = false; // Mengaktifkan suara setelah halaman dimuat
});
