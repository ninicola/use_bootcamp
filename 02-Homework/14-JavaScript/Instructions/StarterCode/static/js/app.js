// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
//select the input 
// Prevent the page from refreshing

// Select the input element and get the raw HTML node
var datevar = d3.select(".btn-default");
//var inputValue = datevar.property("value");
//question when should i use id or class?
var inputElement = d3.select(".form-control");

datevar.on("click",function(){
// Prevent the page from refreshing
console.log("this is on click event");
    d3.event.preventDefault();  

// Get the value property of the input element
    var inputValue = inputElement.property("value");
  //filter the data based on the datetime
    var filteredData = tableData.filter(tData => tData.datetime=== inputValue);

    console.log(inputValue);
    // console.log(filteredData);
    // console.log(filteredData.length);
    filteredData.forEach((wD) => {
        var row = tbody.append("tr");
        Object.entries(wD).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });













});