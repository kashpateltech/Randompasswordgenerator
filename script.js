// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLower;
var charUpper;
var randomNumber;
var charSpecial;
var userChoices;
var passwordLength;

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};

upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '_', '~'];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("Please choose the length of your password. You can choose minimum 8 and maximum 128 characters");
  console.log("Password length: " + passwordLength);
  
  if(!passwordLength) {
    alert("Invalid selection");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length: " + passwordLength);
  
  } else { 
    charLower = confirm("Would you like to include lower case letters?");
    console.log("Lower case: " + charLower);
    charUpper = confirm("Would you like to include upper case letters?");
    console.log("Upper case: " + charUpper);
    randomNumber = confirm("Would you like to include numbers?");
    console.log("Number: " + randomNumber);
    charSpecial = confirm("Would you like to include special characters?");
    console.log("Special Character: " + charSpecial);

  };

  // Below alert if user does not select any of the criteria
  if (!charLower && !charUpper && !randomNumber && !charSpecial) {
    userChoices = alert("Invalid selection. Please choose at least one criteria");
  
    // 4 true options
  } else if (charLower && charUpper && randomNumber && charSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }
  // 3 true options
  else if (charLower && charUpper && randomNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (charLower && charUpper && charSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }
  else if (charLower && randomNumber && charSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }
  else if (charUpper && randomNumber && charSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // 2 true options
  else if (charLower && charUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (charLower && randomNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (charLower && charSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (charUpper && randomNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (charUpper && charSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (randomNumber && charSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // 1 true option
  else if (charLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (charUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (randomNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (charSpecial) {
    userChoices = special;
    console.log(userChoices);
  };

  // Empty variable for the password length
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Password is: " + password);
  return password;
  
}
