// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
var t=d3.select(".table");

// Use d3 to create a bootstrap striped table
t.attr("class", "table table-striped");
// http://getbootstrap.com/docs/3.3/css/#tables-striped

// Use D3 to select the table body
var tb=d3.select("tbody")
// Append one table row `tr` to the table body
var row=tb.append("tr");

// Append one cell for the student name
row.append("td").text(newGrade[0]);
// Append one cell for the student grade
row.append("td").text(newGrade[1]);

