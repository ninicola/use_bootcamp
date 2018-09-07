// grab references to the input element and the output div
// @TODO: YOUR CODE HERE
var inWord=d3.select("#text");
var outWord=d3.select(".output");
// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  // @TODO: YOUR CODE HERE
  console.log("hi this is handchange function start!")
  console.log(d3.event.target);
    var newText = d3.event.target.value;
    var reversetext=(reverseString(newText));

   
 

  // clear the existing output
  // @TODO: YOUR CODE HERE

  // reverse the input string
  // @TODO: YOUR CODE HERE

  // Set the output text to the reversed input string
  // @TODO: YOUR CODE HERE
  outWord.text(reversetext);
}

// Attach an event to detect changes to the input field.
// @TODO: YOUR CODE HERE

inWord.on("change", handleChange);