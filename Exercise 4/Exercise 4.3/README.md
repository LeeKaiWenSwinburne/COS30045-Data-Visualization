# Exercise 4.3

#index html

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

    
    <div class="container">
      <p>Your text goes here</p>
    </div>


    <svg width="400" height="200"></svg>

    <div class="responsive-svg-container"></div>

  </main>



  <footer>
    <p>&copy; <span id="year"></span> Kai | Built with help from GenAI</p>
  </footer>

    <script src="https://d3js.org/d3.v7.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>


#main.js

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

#style.css

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

.svg-container {
  width: 100%;          /* take full width of parent */
  max-width: 400px;     /* optional: limit maximum size */
  margin: 0 auto;       /* center horizontally */
}

.responsive-svg {
  width: 100%;          /* scales with container width */
  height: auto;         /* keeps aspect ratio */
  display: block;       /* removes inline spacing */
}


.responsive-svg-container {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 1200px;
}
