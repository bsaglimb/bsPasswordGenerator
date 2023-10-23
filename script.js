// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
// create a prompt pop up box to ask the user how many characters they need in their password
var password = prompt("How many characters do you need for your password?")

// create a condition that will check/validate that the user selected no less than 8 characters or no more than 128 character, if they did we will alert the user that the need to selected the correct amount of characters

if(password < 8){
  alert("Your password can not be less than 8 characters");
  return null;
}
if(password > 128){
  alert("Your password can not be more than 128 characters");
  return null;
}

// create 4 confirms that will ask the user what character types they would like in their password
var upperCase = confirm("Do you want uppercase?");
var lowerCase = confirm("Do you want lowercase?");
var number = confirm("Do you want a number?");
var specialCharacter = confirm("Do you want special characters?");

// create a conditional that will check that the user selected atleast 1 character type
if (upperCase === false && lowerCase === false && number === false && specialCharacter === false){
  alert("Please select at least 1 character type");
  return null;
}

// create code that will randomize my character sets and return 1 character to the final password. 




  return finalPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
