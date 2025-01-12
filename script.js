const divs = document.querySelectorAll('.FlexContainer div');
const texts = ["Dog", "Cat", "Rabbit", "Mouse", "Sheep", "Pig", "Cow", "Horse", "Duck", "Snake", "Fish", "Squirrel", "Swan", "Raven"];
const emojis = ['🐕', '🐈', '🐇', '🐁', '🐑', '🐖', '🐄', '🐎', '🦆', '🐍', '🐟', '🐿️', '🦢​​', '🐦‍⬛'];

let index = 0;
let showingText = false;

function toggleEmojiAndText() {
  const currentDiv = divs[index];
  
  if (showingText) {
    currentDiv.textContent = emojis[index];
    currentDiv.style.fontSize = "50px";
  } else {
    currentDiv.textContent = texts[index];
    currentDiv.style.fontSize = "20px";
    currentDiv.style.color = "Black";
    currentDiv.style.fontFamily = "'Gill Sans', sans-serif";
  }

  
  showingText = !showingText;

  if (!showingText) {
    index = (index + 1) % divs.length;
  }

  setTimeout(toggleEmojiAndText, 1000);
}

toggleEmojiAndText();
