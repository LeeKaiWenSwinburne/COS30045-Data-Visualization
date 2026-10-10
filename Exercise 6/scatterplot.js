const drawScatterplot = data => {
  const svg = d3.select("#scatterplot")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
  innerChartS = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Set up scales
  xScaleS.domain([0, d3.max(data, d => d.star)]).range([0, innerWidth]);
  yScaleS.domain([0, d3.max(data, d => d.energyConsumption)]).range([innerHeight, 0]);

  // Draw circles
  innerChartS.selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", d => xScaleS(d.star))
    .attr("cy", d => yScaleS(d.energyConsumption))
    .attr("r", 5)
    .attr("fill", d => colorScale(d.screenTech))
    .attr("opacity", 0.5);

  // X axis
  innerChartS.append("g")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScaleS));

  // Y axis
  innerChartS.append("g")
    .call(d3.axisLeft(yScaleS));

  // Titles
  svg.append("text")
    .attr("x", 0)
    .attr("y", margin.top / 2)
    .attr("text-anchor", "start")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text("Labelled Energy Consumption (kWh/year)");

  svg.append("text")
    .attr("x", width - margin.right)
    .attr("y", height - 5)
    .attr("text-anchor", "end")
    .style("font-size", "14px")
    .style("font-weight", "600")
    .text("Star Rating");

  colorScale
    .domain(data.map(d => d.screenTech))
    .range(d3.schemeCategory10);

  // Legend
  const legend = svg
    .append("g")
    .attr("transform", `translate(${width - 100}, ${margin.top})`);

  colorScale.domain().forEach((screenTech, i) => {
    const legendItem = legend
      .append("g")
      .attr("transform", `translate(0, ${i * 20})`);

    legendItem.append("rect")
      .attr("width", 10)
      .attr("height", 10)   
      .attr("fill", colorScale(screenTech));

    legendItem.append("text")
      .attr("x", 20)
      .attr("y", 10)
      .attr("text-anchor", "start")
      .style("alignment-baseline", "middle")
      .text(screenTech);
  });
};
