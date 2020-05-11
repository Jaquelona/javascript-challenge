// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!

data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
});

// Select button on form for date filtering
var button = d3.select("#filter-btn");
// Select form used for entering date to filter

var form = d3.select("#form");
// Create event handlers for clicking the button to filter by date
// or by pressing enter
button.on("click", runEnter);
//form.on("submit", runEnter);
// Create funcion to run for both clicking the button and pressing enter
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Define variable for input date and select id that stores the date
  var inputDate = d3.select("#datetime");
  // Define variable for value property of input date
  var inputValue = inputDate.property("value");
  console.log(inputValue)
  var filteredData = tableData.filter(info => info.datetime === inputValue);
  console.log(filteredData)};
  //var tableData = filteredData
  var tbody = d3.select("tbody");
// YOUR CODE HERE!
  tbody.html("")
  filteredData.forEach((tableData) => {
      var row = tbody.append("tr");
      Object.entries(tableData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      })
  });
