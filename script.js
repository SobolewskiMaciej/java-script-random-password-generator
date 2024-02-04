// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength;

  do {
    passwordLength = prompt(
      "Please enter the desired length of your password (between 8 and 128 characters):"
    );

    if (passwordLength < 8 || passwordLength > 128) {
      alert(
        "Invalid password length. Please enter a number between 8 and 128."
      );
    }
  } while (passwordLength < 8 || passwordLength > 128);

  alert(
    "To generate a password, select at least one of the four character types:\n\n1. Uppercase Letters: A-Z\n2. Lowercase Letters: a-z\n3. Numbers: 0-9\n4. Special Characters (for example ?!@*)"
  );

  var uppercaseLetters = confirm("Do you want to include uppercase letters?");
  var lowercaseLetters = confirm("Do you want to include lowercase letters?");
  var numbers = confirm("Do you want to include numbers?");
  var specialCharacters = confirm("Do you want to include special characters?");

  // Create an object to store the user's choices
  var passwordOptions = {
    length: parseInt(passwordLength),
    uppercase: uppercaseLetters,
    lowercase: lowercaseLetters,
    numbers: numbers,
    specialCharacters: specialCharacters,
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
