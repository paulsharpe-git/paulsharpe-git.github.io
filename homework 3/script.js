
var generateBtn = document.querySelector("#generate");
var length = document.getElementById("exampleFormControlSelect1");
var charType = document.getElementById("exampleFormControlSelect2");
var charSet = "";
var password = "";

function writePassword() {

  
  if( charType === "UPPERCASE" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  else if( charType === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  }
  else if( charType === "numeric" ) {
    charSet = "0123456789";
  } 
  
  for (var i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  console.log(password);
}


generateBtn.addEventListener("click", writePassword);

console.log(password.value);