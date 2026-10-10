// Chart dimensions
const margin = { top: 40, right: 30, bottom: 50, left: 70 };
const width = 800;
const height = 400;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

let innerChartS;

const tooltipWidth = 65;
const tooltipHeight = 32;

// Colors
const barColor = "#606464"; // softer blue
const bodyBackgroundColor = "#fffaf0";

// set up the histogram scales
const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

// set up the scatterplot scales and color scale
const xScaleS = d3.scaleLinear();
const yScaleS = d3.scaleLinear();
const colorScale = d3.scaleOrdinal()
  .domain(["LED", "LCD", "OLED"])
  .range(["#1f77b4", "#ff7f0e","#2ca02c"]); 

const binGenerator = d3.bin()
  .value(d => d.energyConsumption);

const filters_screen = [
  { id: "all", label: "All", isActive: true },
  { id: "LCD", label: "LCD", isActive: false },
  { id: "LED", label: "LED", isActive: false },
  { id: "OLED", label: "OLED", isActive: false }
];



