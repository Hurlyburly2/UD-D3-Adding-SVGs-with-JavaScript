let data = [25, 20, 10, 12, 15]

var svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400)
  
var circles = svg.selectAll("circle")
  .data(data)
  
  
// function runs once for each index in array
// d = item in array, i = the item's index
circles.enter()
  .append("circle")
    .attr("cx", (d, i) => {
      return (i * 50) + 25;
    })
    .attr("cy", 25)
    .attr("r", (d) => {
      return d;
    })
    .attr("fill", "red")


// let svg = d3.select("#chart-area").append("svg")
//   .attr("width", 500)
//   .attr("height", 500)
//   .attr("id", "canvas")
// 
// let circle2 = svg.append("circle")
//   .attr("cx", 100)
//   .attr("cy", 100)
//   .attr("r", 400)
//   .attr("fill", "lightgrey")
// 
// let circle = svg.append("circle")
//   .attr("cx", 250)
//   .attr("cy", 250)
//   .attr("r", 100)
//   .attr("fill", "red")
//   .attr("stroke", "darkred")
//   .attr("stroke-width", 5)
// 
// let rectangle = svg.append("rect")
//   .attr("width", 400)
//   .attr("height", 10)
//   .attr("x", 100)
//   .attr("y", 400)
//   .attr("fill", "hotpink")
// 
// let rectange = svg.append("rect")
//   .attr("width", 400)
//   .attr("height", 6)
//   .attr("x", 0)
//   .attr("y", 415)
//   .attr("fill", "turquoise")
