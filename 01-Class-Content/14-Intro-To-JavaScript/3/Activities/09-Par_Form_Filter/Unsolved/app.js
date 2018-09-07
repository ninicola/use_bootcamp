// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the submit button
var submit = d3.select("#submit");

// Complete the click handler for the form
submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inpute = d3.select("#patient-form-input");
  // Get the value property of the input element
  var inputvalue = inpute.property("value");
  console.log(inputvalue);
  console.log(people);

  // Use the form input to filter the data by blood type
  var filterdata=people.filter(person=>person.bloodType===inputvalue);
  console.log(filterdata);
  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

  // Finally, add the summary stats to the `ul` tag
});
