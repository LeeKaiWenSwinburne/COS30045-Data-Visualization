# Exercise 3 – Data Story: TV Energy Consumption

## Overview

In this exercise, you will develop a **data story** based on the **TV Energy Consumption dataset**. Using the website created in **Exercise 0.2**, you will extend your work to present a meaningful narrative supported by data visualisations.

Your goal is to communicate insights from the dataset in a clear and engaging way through your **website and written explanation**.

You must use the **Exercise 3 folder in your existing forked repository** and reuse the files created in **Exercise 0.2**.

---

## Data Story

### Audience

The target audience for this visualisation includes:

- Consumers interested in **energy-efficient televisions**
- Policy makers and regulators interested in **energy consumption trends**
- Researchers studying **energy efficiency in consumer electronics**

These audiences are interested in understanding how **television energy consumption varies across models, sizes, and technologies**, and how these factors influence overall energy usage.

### Story Overview

This visualisation explores patterns in **TV energy consumption** across different television models and specifications.

The goal is to help viewers understand:

- How energy consumption varies between television models
- The relationship between **screen size and power consumption**
- How **energy efficiency ratings** impact energy usage
- Trends that may help consumers choose more **energy-efficient televisions**

The website presents these insights through visualisations and explanatory text that guide the viewer through the data.

---

## About the Data

### Data Source

The dataset used in this project contains information about **television models and their energy consumption characteristics**, including power usage, screen size, technology type, and efficiency ratings.

The dataset was provided as part of the course materials.  

Storyboard 1 contained information about how many models does each tv size have. This storyboard contains only the screensize data 

Storyboard 2 contained information about finding the average energy cost between small, medium and large TVs. This storyboarc contains only Brand_Reg, Model_No, screensize, Screen_tech and Labelled energy consumption.

### Data Processing

Before creating visualisations, the dataset was processed to ensure it was suitable for analysis. This included:

- Cleaning missing or inconsistent values
- Selecting relevant attributes for visualisation
- Organising the data into formats suitable for web visualisation

Storyboard 1 ensured that only the required data value is listed which is the screensize. During storyboard 1, the value of the screensize is also converted to screensize_inch under a new column for itself. This conversion happened by multiplying the screensize value by 0.393701. During the creation of the histogram for storyboard 1, only the screensize vaue is used.

Storyboard 2 contains the same value from storyboard 1 such as the screensize and screensize_inch, while also having selected value such as Brand_Reg, Model_No and labelled energy consumption. In order to classify the Tvs sizes between small, medium and large, screensize_inch value under 43 is considered small, value equal or above 44 and being equal or lower than 65 is considered medium, and value larger than 66 is considered large. A visualtion of the Tv sizes is created as a bar chart by creating means for energy consumption. 

### Privacy

The dataset does not contain any **personal or sensitive information**. It focuses solely on product specifications and energy consumption data related to television devices.

Storyboard 1 is focused solely on figuring out the models number that each tv sizes have, while storyboard 2 is focused solely on finding the energy cost between three different tv sizes such as small, medium and large. 

### Accuracy and Limitations

While the dataset provides useful information about TV energy consumption, there are some limitations:

- The dataset may not include **all available television models**
- Some information may be **outdated or incomplete**
- Energy consumption may vary depending on **real-world usage conditions**

These factors should be considered when interpreting the visualisations.

Storyboard 1 only contained screensize while the calculation required the tv screen in inches value. Storyboard 2 did not contain any data about the screensize_category and required us to code converting screensize_inch to determine the screensize_category. 

### Ethics

When presenting data visualisations, it is important to ensure that the information is represented **accurately and responsibly**.

This project follows ethical data visualisation practices by:

- Avoiding misleading visual representations
- Clearly explaining the context of the data
- Presenting information transparently so viewers can interpret the results correctly

Storyboard 1 created a proper visualisation that allowed readers to understand the exact screensize value and the exact frequency for each screensize. 

Storyboard 2 created a proper visualisation that shows the three different tv screensize and the energy cost that each tv screensize consume. 

---

## AI Declaration

Artificial Intelligence (AI) tools may have been used to assist with aspects of this assignment, such as:

- Generating example code
- Improving code structure
- Assisting with documentation writing

All AI-generated assistance was reviewed, modified where necessary, and integrated responsibly into the project.

AN AI tool called copilot assisted me with generating an example code for determining the screensize_category based on the value of the screensize_inch. This was listed in the GEN AI reported that was submitted containing evidence and explanation. 
---

## Website Storytelling

The website has been updated to communicate a **data-driven story** based on the TV energy consumption dataset.

The website includes:

- Visualisations that present key insights from the dataset
- Text explanations that help readers understand the meaning of the visualisations
- Context that connects the data to real-world implications

The aim is to guide the viewer through the data in a way that is **informative, engaging, and easy to understand**.
