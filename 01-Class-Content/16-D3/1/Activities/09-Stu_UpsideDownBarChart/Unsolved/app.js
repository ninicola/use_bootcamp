// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [17, 23, 20, 34];
var n=[1,3,5,7]
// Append an SVG wrapper to the page and set a variable equal to a reference to it
// YOUR CODE HERE

// Vertical Bar Chart
// YOUR CODE HERE

// BONUS
// Horizontal Bar Chart
// YOUR CODE HERE

// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.
// Data which we will be using to build our chart


// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var $svg = d3.select("#svg-area")
    .append("svg")
    .attr("height", "600")
    .attr("width", "400");

// Append a rectangle and set its height in relation to the booksReadThisYear value
$svg.append("rect")
    .data(booksReadThisYear)
    .attr("width", n.forEach(b){
         return b;
    })
    .attr("height", function (d) {
        return d * 10;
    })
    .attr("x", 0);
    .attr("y", 0);
