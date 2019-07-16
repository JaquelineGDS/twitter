const textTweet = document.getElementById('text-tweet');
const buttonTweet = document.getElementById('button-tweet');
const listTweet = document.getElementById('list-Tweets');
const linesTweet = document.getElementById("text-tweet");
const counter = document.getElementById('counter');

textTweet.addEventListener("keyup", styleCounter);
buttonTweet.addEventListener("click", newTweet);
textTweet.addEventListener("input", buttonVisible);
linesTweet.addEventListener("keydown", newRows);

function styleCounter () {
  let charactersTweet = 140 - textTweet.value.length;
  counter.innerHTML = charactersTweet;
  
  if (charactersTweet >= 0 && charactersTweet <= 9) {
    counter.setAttribute("class", "colorRed");
  } else if (charactersTweet >= 10 && charactersTweet <= 20) {
    counter.setAttribute("class", "colorYellow");
  } else {
    counter.setAttribute("class", "colorBlack");
  } 
}

function buttonVisible() {
  let charactersTweet = textTweet.value.length;

  if (charactersTweet > 0) {
    buttonTweet.removeAttribute("disabled");
  }
  if (charactersTweet === 0 || charactersTweet > 140) {
    buttonTweet.setAttribute("disabled", "disabled");
  }
}

function newTweet() {
  let tweet = textTweet.value;
  let li = document.createElement("li");
  let div = document.createElement("div");
  const newTweet = document.createTextNode(tweet);
  li.appendChild(newTweet);
  li.setAttribute("class", "tweets-list font-size-tweet");
  listTweet.appendChild(li);
  clear();
}

function newRows() {
  textTweet.style.height = textTweet.scrollHeight + "px";
}

function clear() {
  textTweet.value = "";
  counter.innerHTML = 140;
  buttonTweet.setAttribute("disabled", "disabled");
}