# Exercise 4.6

#html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Televisions - Appliance Energy Consumption</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav>
    <a href="index.html" class="logo"><img src="PowerIcon.png" alt="Power Logo"></a>
    <ul>
      <li><a href="index.html" >Home</a></li>
      <li><a href="televisions.html" >Televisions</a></li>
      <li><a href="about.html" >About Us</a></li>
    </ul>
  </nav>

  <main>
    <h1>Television Energy Consumption</h1>
    <p>This is the Home page</p>
    <p>Placeholder content about TV energy usage in Australia.</p>

    
    <svg width="400" height="200"></svg>

    <div class="responsive-svg-container"></div>

  </main>



  <footer>
    <p>&copy; <span id="year"></span> Kai | Built with help from GenAI</p>
  </footer>

    <script src="https://d3js.org/d3.v7.min.js"></script>
  <script src="main.js"></script>
</body>
</html>


#main.js
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 500 500")
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
  const xScale = d3.scaleLinear()
  .domain([0, 1100])
  .range([0, 400]);
  const yScale = d3.scaleBand()
 .domain(data.map(d => d.brand))
 .range([0, 500]);

 
  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => {
      console.log(d);
      return `bar bar-${d.count}`;
    })
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "blue")
    .attr("x", 0)
    .attr("y", (d, i) => yScale(d.brand));
};


style.css
/* General styling */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Navigation */
nav {
  background-color: #004d40; /* Adjust to match logo colors */
  display: flex;
  align-items: center;
  padding: 10px;
}

nav .logo img {
  height: 40px;
  cursor: pointer;
}

nav ul {
  list-style: none;
  display: flex;
  margin-left: auto;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
}

nav ul li a:hover {
  background-color: #00796b;
  border-radius: 5px;
}

nav ul li a.active {
  background-color: #26a69a;
  border-radius: 5px;
}

/* FAQ Accordion */
.accordion {
  background-color: #26a69a;
  color: white;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  margin-top: 5px;
}

.panel {
  display: none;
  padding: 10px;
  background-color: #e0f2f1;
}

/* Footer */
footer {
  background-color: #004d40;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.responsive-svg-container {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 1600px;
}
