//access elements & stores them in a NodeList
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winningMsg = document.querySelector(".winning-msg");
let msg = document.querySelector("#msg");

//winner array contains sub-arrays (2D array)
const winner = [
  [0, 1, 2], //index of 9 boxes
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
//handling the current player's turn
let value = true; //true=O or flase=X
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // event listeners
    // by clicking box, it will trigger the function inside.
    console.log("clicked");
    if (value) {
      box.innerText = "O";
      value = false;
    } else {
      box.innerText = "X";
      value = true;
    }
    box.disabled = true; //1 time use
    checkWinner();
  });
});
const checkWinner = () => {
  //arrow function
  for (let pattern of winner) {
    //each winning pattern in the winner array.
    //pattern is an array
    // console.log(pattern);
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
    // console.log(
    //   boxes[pattern[0]].innerText, //position 1
    //   boxes[pattern[1]].innerText, //position 2
    //   boxes[pattern[2]].innerText); //position 3
    //for understand below lines
    
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
      }
    }
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations! ${winner} is winner`;
  for (box of boxes) {
    box.disabled = true; //disable all boxes after win
  }
};

const reseting = () => {
  value = true;
  for (box of boxes) {
    box.disabled = false; // Make all boxes clickable again
    box.innerText = ""; // Clear the content of all boxes
  }
  msg.innerText = ""; //clear congratulation msg
};
reset.addEventListener("click", reseting);
