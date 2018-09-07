//console.log(data);
// YOUR CODE HERE



var greeknames = data.map(function (r) {
    return r.greekName;
});
//var mname=data.map(r=>r.greekName);
var greekSearchResult = data.map(function (r) {
    return r.greekSearchResults;
});

var romanName=data.map(function (r) {
    return r.romanName;
});
var romanSearchResult =data.map(function (r){
    return r.romanSearchResults;
});
var pairname = data.map(function (r) {
    return r.pair;
});
var trace1 = {
    x: pairname,
    y:greekSearchResult,
    type:"bar"

};
var trace2 = {
    x: pairname,
    y:romanSearchResult,
    type:"bar"
};

var data2=[trace1,trace2];
Plotly.newPlot("plot",data2);
