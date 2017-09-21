
// back end
var vowel = ["a","e","i","o","u"]

var consonantCheck = function(input) {
  alert(input.charAt(1));
}

var isNotALetter = function(input) {
  for (index=0; index < input.length; index++) {      //check if not a letter
    var ascii = input.charCodeAt(index);
    if (ascii < 65 || (ascii >90 && ascii <96) || ascii > 122) {
      return true
    }
  }
}

var translateToASCII = function(input) {
  var checkForQU = ["qu"];
  var notALetter = isNotALetter(input);
  var PositionOfQU = input.indexOf(checkForQU[0]);
  if (notALetter) {
    alert("Not a letter");
  } else {
    if (vowel.indexOf(input[0]) > -1) {
      return input + "way";
    } else if (PositionOfQU = 0) {
      return input.slice(PositionOfQU+3,input.length) + input.slice(0,4) + "ay";
    // } else if (PositionOfQU = 1) {
    //   return input.slice(4,input.length) + input.slice(0,4) + "ay";
    } else if (vowel.indexOf(input[1]) > -1) {
      return input.slice(1,input.length) + input.slice(0,1) + "ay";
    } else if (vowel.indexOf(input[2]) > -1) {
      return input.slice(2,input.length) + input.slice(0,2) + "ay";
    } else if (vowel.indexOf(input[3]) > -1) {
      return input.slice(3,input.length) + input.slice(0,3) + "ay";
    } else if (vowel.indexOf(input[4]) > -1) {
      return input.slice(4,input.length) + input.slice(0,4) + "ay";
    } else if (vowel.indexOf(input[5]) > -1) {
      return input.slice(5,input.length) + input.slice(0,5) + "ay";
    } else { //only do below if all letters are consanants (e.g., dry, rythyms, etc.)
      return input.slice(input.length-1,input.length) + input.slice(0,input.length-1) + "ay";
      alert("hi");
   }
  }
}

// front end
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var input = $('input#string').val();

    var result = translateToASCII(input);
    $("#output").text(result);
    $("#output").show();
  });
});
