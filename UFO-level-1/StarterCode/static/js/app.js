// from data.js
var tableData = data;

//console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select("tbody");
tableData.forEach(function(sightingsReport){
    var row = tbody.append("tr");
    Object.entries(sightingsReport).forEach(function([key,value]){
        var cell= tbody.append("td");
        cell.text(value)
  })
})
// Select the button
var button = d3.select("#filter-btn");

button.on("click",function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    tbody.html("")
    var inputDate=d3.select("#datetime");
    var inputValue=inputDate.property("value")
    var filteredData=tableData.filter(date=> date.datetime ===inputValue);

    filteredData.forEach(function(sightingsReport){

        var row = tbody.append("tr");
        Object.entries(sightingsReport).forEach(function([key,value]) {

            var cell = tbody.append("td");
            cell.text(value)

        });
    });
});






