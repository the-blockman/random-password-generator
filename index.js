const char = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generator = document.getElementById("generator");
let firstSuggestion = document.getElementById("suggestion-one");
let secondSuggestion = document.getElementById("suggestion-two");

function copyPassword(password) {
  navigator.clipboard.writeText(password.textContent).then(() => {
    let confirmation = document.createElement("span");
    confirmation.textContent = "copied";
    confirmation.id = "confirmation-text";
    password.parentNode.appendChild(confirmation);
  });
}

generator.addEventListener("click", () => {
  function generateRandomPassword() {
    let suggestedPassword = "";
    for (let i = 0; i < 15; i++) {
      let randomCharacter = Math.floor(Math.random() * char.length);
      suggestedPassword += char[randomCharacter];
    }
    return suggestedPassword;
  }

  firstSuggestion.textContent = generateRandomPassword();
  secondSuggestion.textContent = generateRandomPassword();
});

firstSuggestion.addEventListener("click", () => copyPassword(firstSuggestion));

secondSuggestion.addEventListener("click", () =>
  copyPassword(secondSuggestion)
);
