const drawBarChart = data => {
  const margin = { top: 60, right: 40, bottom: 60, left: 60 };
  const width = 600;
  const height = 400;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Create responsive SVG
  const svg = d3.select("#bar-chart")
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
  .text("Energy Consumption (kWh)");


  // Inner chart group
  const innerChart = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // X scale (screen types)
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.Screen_Tech))
    .range([0, innerWidth])
    .padding(0.2);

  // Y scale (energy consumption)
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Energy_Consumption)])
    .nice()
    .range([innerHeight, 0]);

  // Bottom axis
  innerChart.append("g")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .style("text-anchor", "middle")
    .style("font-size", "12px");

  // Left axis
  innerChart.append("g")
    .call(d3.axisLeft(yScale));

  // Y axis label
  innerChart.append("text")
    .attr("class", "y-label")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 15)
    .attr("x", -innerHeight / 2)
    .attr("dy", "-2.5em")
    .style("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Average Energy Consumption (kWh)");

  // Bars
  innerChart.selectAll(".bar")
    .data(data)
    .join("rect")
    .attr("class", "bar")
    .attr("x", d => xScale(d.Screen_Tech))
    .attr("y", d => yScale(d.Energy_Consumption))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d.Energy_Consumption))
    .attr("fill", "green");

  // Labels above bars
  innerChart.selectAll(".label")
    .data(data)
    .join("text")
    .attr("class", "label")
    .attr("x", d => xScale(d.Screen_Tech) + xScale.bandwidth() / 2)
    .attr("y", d => yScale(d.Energy_Consumption) - 5)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("font-weight", "bold")
    .text(d => d.Energy_Consumption.toFixed(0));
};

// Load CSV
d3.csv("../data/data_exercise5.1-1.csv", d => ({
  Screen_Tech: d.Screen_Tech,
  Energy_Consumption: +d["Mean(Labelled energy consumption (kWh/year))"]
})).then(data => {
  data.sort((a, b) => d3.descending(a.Energy_Consumption, b.Energy_Consumption));
  drawBarChart(data);
});
