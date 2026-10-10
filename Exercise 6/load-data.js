d3.csv("../data/ex6_tvdata_withstar.csv", d => ({
  brand: d.brand,
  model: d.model,
  screenSize: +d.screenSize,
  screenTech: d.screenTech,
  energyConsumption: +d.energyConsumption,
  star: +d.star
})).then(data => {
  console.log(data); // check in console
  drawHistogram(data);
  populateFilters(data);
  drawScatterplot(data);
  createTooltip();
handleMouseEvents();

  
}).catch(error => {
      console.error("Error loading the csv file:", error)
});

createTooltip();
handleMouseEvents();

drawHistogram(data);
populateFilters(data);
drawScatterplot(data);

