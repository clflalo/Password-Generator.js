// Assignment Code
let generateBtn = document.querySelector("#generate");

//Arrays
let numbers = "0123456789".split("");
let upperAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let specialChar = "!@#$%^&*()_+<>?~".split("") ;
let arraysSelected = 1;
let GeneratedPassword = [];


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  let selectLength = prompt("Enter desired password lenght (8-128 characters)");

// code for if Required # of characters not met
  while(selectLength <= 7 || selectLength >= 128) {
    alert("Password length must meet requirement of 8-128 character length. Try Again.");
    let selectLength = prompt("Select desired amount of characters for your password")

  }

  // code Password length confirmation
  alert(`Password will contain ${selectLength} characters`);

  //code Password character types

  let selectUpperCase = prompt("Would you like your password to include uppercase letters? Yes or No?")
  let selectLowerCase = prompt("Would you like your password to include lowercase letters? Yes or No?")
  let selectSpecChar = prompt("Would you like your password to include special characters? Yes or no?")
  let selectNumbers = prompt("Would you like your password to include numbers? Yes or No?")

if (selectUpperCase === "Yes") {
  arraysSelected++
}
console.log(selectUpperCase);

let selectedArrays = "";

for (let i = 0; i < selectLength; i++) {
arraysSelected = ([Math.floor(Math.random() * arraysSelected)]);
  
} 
return GeneratedPassword.join(""); 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
