let count = 0;
let increaseByOne = [2, 3, 4, 5, 6];
let decreaseByOne = [10, "J", "Q", "K", "A"];

function cardCounter(card) {
  if (increaseByOne.includes(card)) {
    count++;
  } else if (decreaseByOne.includes(card)) {
    count--;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
