// Assignment Code
let generateBtn = document.querySelector("#generate");

//List of Arrays
let numbers = "0123456789".split("")
let upperAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
let specialChar = "!@#$%^&*()_+<>?~".split("") 

//Selection variables
let selectLength = "";
let selectUppercase;
let selectLowercase;

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  let selectLength = prompt("Select desired amount of characters for your password");

// Required characters not met
  while(selectLength <= 7 || selectLength >= 128) {
    alert("Password length must meet requirement of 8-128 character length. Try Again.");
    let selectLength = prompt("Select desired amount of characters for your password")

  }

  // Password length confirmation
  alert(`Password will contain ${selectLength} characters`) 


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
