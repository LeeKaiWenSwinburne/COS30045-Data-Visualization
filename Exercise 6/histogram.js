const drawHistogram = data => {
  const svg = d3.select("#histogram")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)


  const innerChart = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
    // Generate bins
  const bins = binGenerator(data);
  console.log(bins);

   const minEng = bins[0].x0;
   const maxEng = bins[bins.length - 1].x1;

   const binsMaxLength = d3.max(bins, d => d.length);

   console.log("minEng:", minEng, "maxEng:", maxEng, "binsMaxLength:", binsMaxLength);
  // Define scales
  xScale
     .domain([minEng, maxEng])
     .range([0, innerWidth]);
  yScale 
     .domain([0, binsMaxLength])
     .range([innerHeight, 0])
     .nice();

  // Draw bars
  innerChart
    .selectAll("rect")
    .data(bins)
    .join("rect")
       .attr("x", d => xScale(d.x0))
       .attr("y", d => yScale(d.length))
       .attr("width", d => xScale(d.x1) - xScale(d.x0))
       .attr("height", d => innerHeight - yScale(d.length))
       .attr("fill", barColor)
       .attr("stroke", bodyBackgroundColor)
       .attr("stroke-width", 2);

  // X axis
  innerChart.append("g")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale));

  // Y axis
  innerChart.append("g")
    .call(d3.axisLeft(yScale));

  // Title
  svg.append("text")
    .attr("x", 0)
    .attr("y", margin.top / 2)
    .attr("text-anchor", "start")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text("Frequency");

// Bottom-right label
svg.append("text")
  .attr("x", width - margin.right)   
  .attr("y", height - 5)            
  .attr("text-anchor", "end")        
  .style("font-size", "14px")
  .style("font-weight", "600")
  .text("Labeled Energy Consumption (kWh/year)");
};
