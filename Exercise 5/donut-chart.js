const drawDonutChart = data => {
  const width = 600;
  const height = 400;
  const margin = 40;

  // Radius based on shortest side
  const radius = Math.min(width, height) / 2 - margin;

  // Responsive SVG
  const svg = d3.select("#donut-chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .style("width", "100%")
    .style("height", "auto")
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  // Chart title
  d3.select("#donut-chart svg")
    .append("text")
    .attr("x", margin)
    .attr("y", margin)
    .attr("text-anchor", "start")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text("Screensize_category");

  // Color scale
  const color = d3.scaleOrdinal()
  .domain(["Small", "Medium", "Large"]) 
  .range(["#87CEEB", "#ff7f0e", "#2ca02c"]); 

  // Pie generator (disable sorting)
  const pie = d3.pie()
    .sort(null)
    .value(d => d.Count);

  // Arc generator
  const arcGenerator = d3.arc()
    .innerRadius(radius * 0.6) // donut hole
    .outerRadius(radius);

  // Draw arcs
  svg.selectAll("path")
    .data(pie(data))
    .join("path")
    .attr("d", arcGenerator)
    .attr("fill", d => color(d.data.Size))
    .attr("stroke", "white")
    .style("stroke-width", "2px");

  // Labels inside slices
  svg.selectAll("text")
    .data(pie(data))
    .join("text")
    .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("font-weight", "600")
    .text(d => d.data.Size);

};

// Load CSV
d3.csv("../data/data_exercise5.3.csv", d => ({
  Size: d.Screensize_Category,       // e.g., Small, Medium, Large
  Count: +d.Count     // numeric count
})).then(data => {
  drawDonutChart(data);
});
