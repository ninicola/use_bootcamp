// YOUR CODE HERE
// Slice the first 10 objects for plotting
//slice1 = data.slice(0, 20);
//console.log(slice1);
// Trace1 for the Greek Data
var trace1 = {
    x: data.year,
    y: data.high_jump,
    mode:'markers',
    type: "scatter"
};
var trace2 = {
    x: data.year,
    y: data.discus_throw,
    mode: 'markers',
    type: "scatter"
};
var trace3 = {
    x: data.year,
    y: data.long_jump,
    mode: 'markers',
    type: "scatter"
};
var layout={
   title: "olympic trends",
    barmode:"group"
};
// set up the data variable
var data2 = [trace1,trace2,trace3];
// set up the layout variable
Plotly.newPlot("plot", data2,layout);

// Render the plot to the div tag with id "plot"
