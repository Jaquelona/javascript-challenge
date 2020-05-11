// from data.js
//var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!

function printdata(tableData) {
  tbody.html("")
  tableData.forEach((datarow) => {
    var row = tbody.append("tr");
    Object.entries(datarow).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  });
}
printdata(data)

//Select button on form for date filtering
var button = d3.select("#filter-btn");
//Select form used for entering date to filter

// // Create event handlers for clicking the button to filter by date
// // or by pressing enter
button.on("click", runEnter);

// // Create funcion to run for both clicking the button and pressing enter
function runEnter() {
  var input = d3.select("#datetime").property("value");
  console.log(input);
  var filteredData = data.filter (row => row.datetime === input);
  console.log(filteredData)
  printdata(filteredData)
};

  //   //var tableData = filteredData
//   var tbody = d3.select("tbody");
// // YOUR CODE HERE!
//   tbody.html("")
//   filteredData.forEach((tableData) => {
//       var row = tbody.append("tr");
//       Object.entries(tableData).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//       })
//   });
