"use strict";

let cardHide = document.getElementsByClassName("card");
let cardShow = document.getElementsByClassName("logo");

let scored = document.getElementById("score");
let failed = document.getElementById("failed");

let won = document.getElementsByClassName("won");
let lost = document.getElementsByClassName("lost");

let loseAudio = document.getElementById("loseAudio");
let winAudio = document.getElementById("winAudio");

//////////// start conditions ////////////////
let count = 0;
// array for questioning match
let matching = [];
console.log("matching", matching[0]);
// scores
let scoreTally = 0;
let failTally = 0;
console.log("scoresTOP", scoreTally);
console.log("failsTOP", failTally);

// store correct matches
let correct = [];
console.log("correct", correct);
//////////// start conditions ////////////////

// start again btn ///////////////////////////////
const startAgainBtn = document.createElement("BUTTON");
startAgainBtn.innerText = "START AGAIN";
startAgainBtn.style.visibility = "hidden";
document.body.appendChild(startAgainBtn);
startAgainBtn.setAttribute("class", "startAgain");
startAgainBtn.style.zIndex = "99";

///////////////////////////////////////////////////

//////////////////////////////////////////////////
// main code block
// click, iterate, keep count, push into match array
for (let i = 0; i < cardShow.length; i++) {
  cardShow[i].onclick = function () {
    count++;
    if (count <= 1) {
      cardShow[i].style.opacity = "10";
      matching.push(cardShow[i]);
    } else if (count === 2) {
      cardShow[i].style.opacity = "10";
      matching.push(cardShow[i]);
      count = 0;
      // when they do match
      if (matching[0].isEqualNode(matching[1])) {
        correct.push(matching[0], matching[1]);
        for (let j = 0; j < correct.length; j++) {
          setTimeout(() => (correct[j].style.opacity = "10"), 500);
        }
        scoreTally++;
        scored.innerText = `TOTAL SCORE: ${scoreTally}`;
        // when they don't match
      } else if (!matching[0].isEqualNode(matching[1])) {
        for (let j = 0; j < cardShow.length; j++) {
          setTimeout(() => (cardShow[j].style.opacity = "0"), 500);
        }
        for (let j = 0; j < correct.length; j++) {
          setTimeout(() => (correct[j].style.opacity = "10"), 500);
        }
        failTally++;
        failed.innerText = `TOTAL FAILS: ${failTally}`;
      }
      // losing page function call
      wOrLfunc();
      // set match to empty everytime
      if (matching.length == 2) {
        matching = [];
      }
    }
  };
}

// losing page /////////////////////////////////
const wOrLfunc = function () {
  if (failTally === 3) {
    for (let j = 0; j < cardShow.length; j++) {
      setTimeout(() => (cardShow[j].style.opacity = "0"), 500);
    }
    startAgainBtn.style.visibility = "visible";
    loseAudio.play();
    let losingText = document.createElement("h3");
    let losingPage = document.createElement("div");
    losingText.setAttribute("class", "losingText");
    losingPage.setAttribute("class", "losingPage");
    losingText.innerText = "YOU LOST";
    document.body
      .appendChild(losingPage)
      .appendChild(losingText)
      .appendChild(startAgainBtn);

    // reset //
    let resetSettings = function () {
      correct = [];
      scoreTally = 0;
      failTally = 0;
      document.body.removeChild(losingPage).removeChild(losingText);
      failed.innerText = `TOTAL FAILS: ${failTally}`;
      scored.innerText = `TOTAL SCORE: ${scoreTally}`;
    };
    startAgainBtn.addEventListener("click", resetSettings);
    // winning page /////////////////////////////////
  } else if (scoreTally === 3) {
    for (let k = 0; k < cardShow.length; k++) {
      setTimeout(() => (cardShow[k].style.opacity = "0"), 500);
    }
    startAgainBtn.style.visibility = "visible";
    // winAudio.play();
    let winningText = document.createElement("h3");
    let winningPage = document.createElement("div");
    winningText.setAttribute("class", "winningText");
    winningPage.setAttribute("class", "winningPage");
    winningText.innerText = "YOU WON";
    document.body
      .appendChild(winningPage)
      .appendChild(winningText)
      .appendChild(startAgainBtn);

    // reset //
    let resetSettings = function () {
      correct = [];
      scoreTally = 0;
      failTally = 0;
      document.body.removeChild(winningPage).removeChild(winningText);
      scored.innerText = `TOTAL SCORE: ${scoreTally}`;
      failed.innerText = `TOTAL FAILS: ${failTally}`;
    };
    startAgainBtn.addEventListener("click", resetSettings);
  }
};

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

/////////////save3
// for (let i = 0; i < cardShow.length; i++) {
//   cardShow[i].onclick = function () {
//     count++;
//     if (count <= 1) {
//       cardShow[i].style.opacity = "10";
//       matching.push(cardShow[i]);
//     } else if (count === 2) {
//       cardShow[i].style.opacity = "10";
//       matching.push(cardShow[i]);
//       count = 0;
//       if (matching[0].isEqualNode(matching[1])) {
//         correct.push(cardShow[i]);
//         for (let j = 0; j < correct.length; j++) {
//           setTimeout(() => (correct[j].style.opacity = "10"), 500);
//         }
//         scoreTally++;
//         scored.innerText = `TOTAL SCORE: ${scoreTally}`;
//       } else if (!matching[0].isEqualNode(matching[1])) {
//         //////////////////////////////////////
//         // for (let j = 0; j < cardShow.length; j++) {
//         //   setTimeout(() => (cardShow[j].style.opacity = "0"), 500);
//         // }
//         failTally++;
//         failed.innerText = `TOTAL FAILS: ${failTally}`;
//       }
//       // losing page
//       wOrLfunc();
//       if (matching.length == 2) {
//         matching = [];
//       }
//     }
//   };
// }

//////////save2
// start conditions
// let count = 0;
// let matching = [];
// // scores
// let score = 0;
// console.log("scoresTOP", score);
// let fails = 0;
// console.log("failsTOP", fails);

// for (let i = 0; i < cardShow.length; i++) {
//   cardShow[i].onclick = function () {
//     count++;
//     if (count <= 1) {
//       cardShow[i].style.opacity = "10";
//       // matching.push(cardShow[i]);
//     } else if (count === 2) {
//       // matching.push(cardShow[i]);
//       cardShow[i].style.opacity = "10";
//       for (let j = 0; j < cardShow.length; j++) {
//         console.log("scoresCHK", score);
//         console.log("failsCHK", fails);
//         // setTimeout(() => (cardShow[j].style.opacity = "0"), 500);
//         // count = 0;
//         // const matched = matching[0].isSameNode(matching[1]);
//         if (cardShow[i].isEqualNode(cardShow[j])) {
//           scored.innerText = `TOTAL SCORE: ${score}`;
//           score++;
//         } else if (!cardShow[i].isEqualNode(cardShow[j])) {
//           failed.innerText = `TOTAL FAILS: ${fails}`;
//           fails++;
//         }
//       }
//       matching = [];
//     }
//   };
// }

/////////save1
// let count = 0;

// for (let i = 0; i < cardHide.length; i++) {
//   cardHide[i].onclick = function () {
//     cardHide[i].style.visibility = "hidden";
//     count++;
//     console.log("count", count);
//     if (count >= 2) {
//       console.log("STOP");
//       cardHide[i].style.visibility =
//     }
//   };
// }

// if (
//   document.getElementById(`${cardHide[i]}`) ==
//   document.getElementById(`${cardHide[i][j]}`)
// ) {
//   alert("CORRECT");
// }
