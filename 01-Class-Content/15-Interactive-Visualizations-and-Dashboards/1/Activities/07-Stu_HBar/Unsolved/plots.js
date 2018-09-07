// @TODO: Complete the following sections

//console.log(data);
// Sort the data array using the greekSearchResults value

var sortData=data.sort(function b(a,b){
    return   b.greekSearchResults-a.greekSearchResults;
});
// Slice the first 10 objects for plotting
const slice1=sortData.slice(0,10);
//console.log(slice1);
// Trace1 for the Greek Data
var trace1={
    x:slice1.map(row=>row.greekName),
    y:slice1.map(row=>row.greekSearchResults),
    type:"bar"
};
// set up the data variable
var data2=[trace1];
// set up the layout variable
Plotly.newPlot("plot",data2);

// Render the plot to the div tag with id "plot"
