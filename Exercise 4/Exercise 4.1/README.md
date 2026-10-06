# Exercise 4.1

#original house

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

      <svg width="500" height="400" style="border:1px solid black">
    <!-- Sky background -->
    <rect x="0" y="0" width="500" height="400" fill="lightblue"/>

    <!-- Sun -->
    <circle cx="450" cy="60" r="40" fill="yellow"/>

    <!-- Grass -->
    <rect x="0" y="300" width="500" height="100" fill="green"/>

    <!-- House base -->
    <rect x="150" y="180" width="200" height="120" fill="sienna" stroke="black"/>

    <!-- Roof -->
    <polygon points="150,180 250,100 350,180" fill="peru" stroke="black"/>

    <!-- Door -->
    <rect x="230" y="240" width="40" height="60" fill="burlywood" stroke="black"/>
    <circle cx="265" cy="270" r="4" fill="black"/> <!-- doorknob -->

    <!-- Windows (grouped) -->
    <g fill="white" stroke="black">
      <rect x="170" y="200" width="40" height="40"/>
      <rect x="290" y="200" width="40" height="40"/>
    </g>

    <!-- Path -->
    <path d="M250 300 Q240 340 200 400 Q300 400 260 340 Z" fill="khaki"/>

    <!-- Tree -->
    <rect x="80" y="220" width="20" height="80" fill="saddlebrown"/>
    <circle cx="90" cy="200" r="40" fill="forestgreen"/>

    <!-- Text -->
    <text x="370" y="220" font-size="20" fill="black">House</text>
  </svg>
  </main>

  <footer>
    <p>&copy; <span id="year"></span> Kai | Built with help from GenAI</p>
  </footer>
</body>
</html>

#house after the changes

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

      <svg width="500" height="400" style="border:1px solid black">
    <!-- Sky background -->
    <rect x="0" y="0" width="500" height="400" fill="lightblue"/>

    <!-- Sun -->
    <circle cx="450" cy="60" r="40" fill="yellow"/>

    <!-- Grass -->
    <rect x="0" y="300" width="500" height="100" fill="green"/>

    <!-- House base -->
    <rect x="150" y="180" width="200" height="120" fill="sienna" stroke="black"/>

    <!-- Roof -->
    <rect x="150" y="100" width="200" height="80" fill="peru" stroke="black"/>

    <!-- Door -->
    <rect x="230" y="240" width="40" height="60" fill="burlywood" stroke="black"/>
    <circle cx="265" cy="270" r="4" fill="black"/> <!-- doorknob -->

    <!-- Windows (grouped) -->
    <g fill="white" stroke="black">
      <rect x="170" y="200" width="40" height="40"/>
      <rect x="290" y="200" width="40" height="40"/>
    </g>

    <!-- Path -->
    <path d="M250 300 Q240 340 200 400 Q300 400 260 340 Z" fill="khaki"/>

    <!-- Tree -->
    <rect x="80" y="220" width="20" height="80" fill="saddlebrown"/>
    <circle cx="90" cy="200" r="40" fill="forestgreen"/>

    <!-- Text -->
    <text x="370" y="220" font-size="20" fill="black">House</text>
  </svg>
  </main>

  <footer>
    <p>&copy; <span id="year"></span> Kai | Built with help from GenAI</p>
  </footer>
</body>
</html>
