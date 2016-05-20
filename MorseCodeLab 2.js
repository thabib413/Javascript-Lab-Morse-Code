/*
This JavaScript program converts English letters to Morse Code according
to the table below:

Letter  Morse

A	      .-
B	      -...
C	      -.-.
D	      -..
E	      .
F	      ..-.
G	      --.
H	      ....
I	      ..
J	      .---
K	      -.-
L	      .-..
M	      --
N	      -.
O	      ---
P	      .--.
Q	      --.-
R	      .-.
S	      ...
T	      -
U	      ..-
V	      ...-
W	      .--
X	      -..-
Y	      -.--
Z	      --..
0	      -----
1	      .----
2	      ..---
3	      ...--
4	      ....-
5	      .....
6	      -....
7	      --...
8	      ---..
9	      ----.

*/



var userInput;
var convertedUserInput;
var morseCodeArray;
function myFunction() {
    var userInput = prompt("Please enter your name", " ");
}

userInput = userInput.toUpperCase();
//console.log(userInputArray);

function var morseCodeConversion(string input) {
  convertedUserInput = input.replace(/A/g,".-");
  convertedUserInput = input.replace(/B/g,"-...");
  convertedUserInput = input.replace(/C/g,"-.-.");
  convertedUserInput = input.replace(/D/g,"-..");
  convertedUserInput = input.replace(/E/g,".");
  convertedUserInput = input.replace(/F/g,"..-.");
  convertedUserInput = input.replace(/G/g,"--.");
  convertedUserInput = input.replace(/H/g,"....");
  convertedUserInput = input.replace(/I/g,"..");
  convertedUserInput = input.replace(/J/g,".---");
  convertedUserInput = input.replace(/K/g,"");
  convertedUserInput = input.replace(/L/g,"");
  convertedUserInput = input.replace(/M/g,"");
  convertedUserInput = input.replace(/N/g,"");
  convertedUserInput = input.replace(/O/g,"");
  convertedUserInput = input.replace(/P/g,"");
  convertedUserInput = input.replace(/Q/g,"");
  convertedUserInput = input.replace(/R/g,"");
  convertedUserInput = input.replace(/S/g,"");
  convertedUserInput = input.replace(/T/g,"");
  convertedUserInput = input.replace(/U/g,"");
  convertedUserInput = input.replace(/V/g,"");
  convertedUserInput = input.replace(/W/g,"");
  convertedUserInput = input.replace(/X/g,"");
  convertedUserInput = input.replace(/Y/g,"");
  convertedUserInput = input.replace(/Z/g,"");
  convertedUserInput = input.replace(/0/g,"");
  convertedUserInput = input.replace(/1/g,"");
  convertedUserInput = input.replace(/2/g,"");
  convertedUserInput = input.replace(/3/g,"");
  convertedUserInput = input.replace(/4/g,"");
  convertedUserInput = input.replace(/5/g,"");
  convertedUserInput = input.replace(/6/g,"");
  convertedUserInput = input.replace(/7/g,"");
  convertedUserInput = input.replace(/8/g,"");
  convertedUserInput = input.replace(/9/g,"");
  convertedUserInput = input.replace(/ /g,"/");
  return userInputArray;
  console.log(converteduserInput);
}

myCodeCOnversion(userInput);
