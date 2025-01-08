"use strict";

let number = Math.trunc(Math.random() * 10 + 1);

let score = 10;
let highscore = 0;

document.querySelector(".number").textContent = "?";

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⚠️ Write a Number!";
    document.querySelector(".message").style.color = "red";
    document.querySelector(".check").style.backgroundColor = "red";
    document.querySelector(".check").style.color = "#eee";
    document.querySelector(".check").textContent = "⚠️ Check!";
  } else if (guess < 1 || guess > 20) {
    document.querySelector(".message").style.color = "red";
    document.querySelector(".check").style.backgroundColor = "red";
    document.querySelector(".check").style.color = "#eee";
    document.querySelector(".check").textContent = "⚠️ Check!";
    document.querySelector(".message").textContent = "⚠️ (Between 1 and 20)";
  } else if (guess == number) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.backgroundColor = "#eee";
    document.querySelector(".number").style.color = "#60b347";
    document.querySelector(".number").textContent = number;
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤯 You lost the game!";
      document.querySelector("body").style.backgroundColor = "#fa5252";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = number;
      document.querySelector(".number").style.color = "#fa5252";
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤯 You lost the game!";
      document.querySelector("body").style.backgroundColor = "#fa5252";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = number;
      document.querySelector(".number").style.color = "#fa5252";
    }
  }
});

document.addEventListener("keydown", function (event) {
  const guess = document.querySelector(".guess").value;
  console.log(typeof guess, guess);

  if (event.key === "Enter") {
    if (!guess) {
      document.querySelector(".message").textContent = "⚠️ Write a Number!";
      document.querySelector(".message").style.color = "red";
      document.querySelector(".check").style.backgroundColor = "red";
      document.querySelector(".check").style.color = "#eee";
      document.querySelector(".check").textContent = "⚠️ Check!";
    } else if (guess < 1 || guess > 20) {
      document.querySelector(".message").style.color = "red";
      document.querySelector(".check").style.backgroundColor = "red";
      document.querySelector(".check").style.color = "#eee";
      document.querySelector(".check").textContent = "⚠️ Check!";
      document.querySelector(".message").textContent = "⚠️ (Between 1 and 20)";
    } else if (guess == number) {
      document.querySelector(".message").textContent = "🎉 Correct Number!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.backgroundColor = "#eee";
      document.querySelector(".number").style.color = "#60b347";
      document.querySelector(".number").textContent = number;
      document.querySelector(".number").style.width = "30rem";

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (guess > number) {
      if (score > 1) {
        document.querySelector(".message").textContent = "📈 Too High!";
        score = score - 1;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "🤯 You lost the game!";
        document.querySelector("body").style.backgroundColor = "#fa5252";
        document.querySelector(".score").textContent = 0;
        document.querySelector(".number").textContent = number;
        document.querySelector(".number").style.color = "#fa5252";
      }
    } else if (guess < number) {
      if (score > 1) {
        document.querySelector(".message").textContent = "📉 Too Low!";
        score = score - 1;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "🤯 You lost the game!";
        document.querySelector("body").style.backgroundColor = "#fa5252";
        document.querySelector(".score").textContent = 0;
        document.querySelector(".number").textContent = number;
        document.querySelector(".number").style.color = "#fa5252";
      }
    }
  }
});

document.querySelector(".guess").addEventListener("input", function () {
  const guess = document.querySelector(".guess").value;
  if (guess > 0 || guess < 21) {
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".message").style.color = "#eee";
    document.querySelector(".check").style.backgroundColor = "#eee";
    document.querySelector(".check").style.color = "#222";
    document.querySelector(".check").textContent = "Check!";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  number = Math.trunc(Math.random() * 10 + 1);
  document.querySelector(".score").textContent = 10;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.color = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});
