
var generateBtn = document.querySelector("#generate");
var length = document.getElementById("exampleFormControlSelect1");
var charType = document.getElementById("exampleFormControlSelect2");
var charSet = "";
var password = "";

function writePassword() {

  var passwordlength = length.options[length.selectedIndex].value;

  console.log(length.options)

  var passwordlengthint = parseInt(passwordlength);

  var passwordtype = charType.options[charType.selectedIndex].value;

  console.log(charType.options)

  

  if( passwordtype=== "UPPERCASE" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  else if( passwordtype === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  }
  else if( passwordtype === "numeric" ) {
    charSet = "0123456789";
  } 

  else if ( passwordtype === "alph4num3r1c") {

    charSet = "abcdefghijklmnopqrstuvwxyz1234567890"
  }
  
  for (var i = 0; i < passwordlengthint; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  console.log(password);

  document.getElementById("password").innerHTML = password
}


generateBtn.addEventListener("click", writePassword);