# Exercise 4.5

const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  .style("border", "1px solid black");

svg.append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 100)
  .attr("height", 50)
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
  data.sort((a, b) => b.count - a.count);
  drawBarChart(data);
});

const drawBarChart = data => {
  const barHeight = 20;
  const barSpacing = 5;

 
  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => {
      console.log(d);
      return `bar bar-${d.count}`;
    })
    .attr("width", d => d.count)
    .attr("height", barHeight)
    .attr("fill", "blue")
    .attr("x", 0)
    .attr("y", (d, i) => i * (barHeight + barSpacing));
};
