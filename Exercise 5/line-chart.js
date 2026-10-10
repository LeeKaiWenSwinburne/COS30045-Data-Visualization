const drawLineChart = data => {
  const margin = { top: 60, right: 40, bottom: 60, left: 60 };
  const width = 600;
  const height = 400;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Responsive SVG
  const svg = d3.select("#line-chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .style("width", "100%")
    .style("height", "auto");

  // Chart title
  svg.append("text")
    .attr("x", margin.left)
    .attr("y", margin.top / 2)
    .attr("text-anchor", "start")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text("Average Electricity Spot Price (Australia)");

  const innerChart = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // X scale (years)
  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.year)) // min to max years
    .range([0, innerWidth]);

  // Y scale (average price)
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.averagePrice)])
    .range([innerHeight, 0]);

  const bottomAxis = d3.axisBottom(xScale)
    .tickFormat(d3.format("d"));

  const leftAxis = d3.axisLeft(yScale)

  // Bottom axis (force integer ticks for years)
  innerChart.append("g")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).tickFormat(d3.format("d")));

  // Left axis
  innerChart.append("g")
    .call(d3.axisLeft(yScale));

  // Y axis label
  innerChart.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 15)
    .attr("x", -innerHeight / 2)
    .attr("dy", "-2.5em")
    .style("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Cost per MWh (AUD)");

  // Scatter plot points
  innerChart.selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", d => xScale(d.year))
    .attr("cy", d => yScale(d.averagePrice))
    .attr("r", 3)
    .attr("fill", "green");

  // Line generator
  const lineGenerator = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.averagePrice));

  // Line path
  innerChart
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "green")
    .attr("d", lineGenerator(data));
};

// Load CSV
d3.csv("../data/are_spot_prices.csv", d => ({
  year: +d.Year, // convert to number
  averagePrice: +d["Average Price (notTas-Snowy)"] // match header exactly
})).then(data => {
  drawLineChart(data);
});
