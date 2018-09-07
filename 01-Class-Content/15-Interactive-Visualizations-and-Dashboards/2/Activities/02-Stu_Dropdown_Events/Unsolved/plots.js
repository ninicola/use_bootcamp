const plot_dom_id = "pie";
function init() {
  var data = [{
    values: [19, 26, 55, 88],
    labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"],
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot(plot_dom_id, data,layout);
}

function updatePlotly(newx, newy) {
  // YOUR CODE HERE
  // Use `Plotly.restyle` to update the pie chart with the newdata array
  Plotly.restyle(plot_dom_id, "values", [newx]);
  Plotly.restyle(plot_dom_id, "labels", [newy]);
}

function getData(dataset) {
  // YOUR CODE HERE
  // create a select statement to select different data arrays (YOUR CHOICE)
  // whenever the dataset parameter changes. This function will get called
  // from the dropdown event handler.
  // Initialize empty arrays to contain our axes
  var values = [];
  var labels = [];

  // Fill the x and y arrays as a function of the selected dataset
  switch (dataset) {
    case "USA":
      values: [33, 18, 87, 72];
      labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"];
      // type: "pie"
      break;
    case "UK":
      values: [193, 456, 87, 72];
      labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"];
      
      break;
    case "TW":
      values: [365, 18, 873, 72];
      labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"];
      // type: "pie"
      break;
    default:
      values: [13, 181, 7, 272];
      labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"];
      // type: "pie"
      break;
  }

  updatePlotly(values, labels);
}


init();
