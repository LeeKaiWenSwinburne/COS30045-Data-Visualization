# Exercise 4.4


const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")  // coordinate system
  .style("border", "1px solid black"); // temporary border

  svg.append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 414)
  .attr("height", 16)
  .attr("fill", "blue");


d3.csv("data/new dataset.csv", d => {
  return {
    brand: d.brand,      
    count: +d.count      
  };
}).then(data => {
  console.log(data);                
  console.log("Rows:", data.length);
  console.log("Max:", d3.max(data, d => d.count));
  console.log("Min:", d3.min(data, d => d.count));
  console.log("Extent:", d3.extent(data, d => d.count));

  drawBarChart(data);
});
