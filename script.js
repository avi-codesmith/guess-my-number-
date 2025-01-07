"use strict";

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(typeof guess, guess);

  if (guess < 1 || guess > 20) {
    document.querySelector(".message").textContent = "⚠️ (Between 1 and 20)";
    document.querySelector(".message").style.color = "red";
    document.querySelector(".check").style.backgroundColor = "red";
    document.querySelector(".check").style.color = "#eee";
    document.querySelector(".check").textContent = "⚠️ Check!";
  }

  if (!guess) {
    document.querySelector(".message").textContent = "⚠️ Write a Number!";
  }
});

document.addEventListener("keydown", function (event) {
  const guess = document.querySelector(".guess").value;
  console.log(typeof guess, guess);

  if (event.key === "Enter") {
    if (guess < 1 || guess > 20) {
      document.querySelector(".message").textContent = "⚠️ (Between 1 and 20)";
      document.querySelector(".message").style.color = "red";
      document.querySelector(".check").style.backgroundColor = "red";
      document.querySelector(".check").style.color = "#eee";
      document.querySelector(".check").textContent = "⚠️ Check!";
    }

    if (!guess) {
      document.querySelector(".message").textContent = "⚠️ Write a Number!";
    }
  }
});

document.querySelector(".guess").addEventListener("input", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess > 0 || guess < 21) {
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".message").style.color = "#eee";
    document.querySelector(".check").style.backgroundColor = "#eee";
    document.querySelector(".check").style.color = "#222";
    document.querySelector(".check").textContent = "Check!";
  }
});
