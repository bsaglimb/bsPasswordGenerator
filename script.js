// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["~","!","@","#","$","%","^","&","*"];

function generatePassword() {
  // create a prompt pop up box to ask the user how many characters they need in their password
  var numberOfCharacters = prompt("How many characters do you need for your password?");


  // create a condition that will check/validate that the user selected no less than 8 characters or no more than 128 character, if they did we will alert the user that the need to selected the correct amount of characters

  if (parseInt(numberOfCharacters) < 8) {
    alert("Your password can not be less than 8 characters");
    return null;
  }
  if (parseInt(numberOfCharacters) > 128) {
    alert("Your password can not be more than 128 characters");
    return null;
  }

  // create 4 confirms that will ask the user what character types they would like in their password
  var upperCase = confirm("Do you want uppercase?");
  var lowerCase = confirm("Do you want lowercase?");
  var number = confirm("Do you want a number?");
  var specialCharacter = confirm("Do you want special characters?");


  // create a conditional that will check that the user selected atleast 1 character type
  if (upperCase === false && lowerCase === false && number === false && specialCharacter === false) {
    alert("Please select at least 1 character type");
    return null;
  }

  // create for loops based on the number of characters selected that will randomize my character sets and return 1 character to the final password. 
  var password = ""
  for (var i = 0; i < parseInt(numberOfCharacters); i++) {
    var randomUpper = Math.floor(Math.random() * upper.length);
    password += upper[randomUpper];
   }

   for (var i = 0; i < parseInt(numberOfCharacters); i++) {
    var randomLower = Math.floor(Math.random() * lower.length);
    password += lower[randomLower];
   }

   for (var i = 0; i < parseInt(numberOfCharacters); i++) {
    var randomSpecial = Math.floor(Math.random() * special.length);
    password += special[randomSpecial];
   }

  writePassword(password)

}
function writePassword(password) {
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);