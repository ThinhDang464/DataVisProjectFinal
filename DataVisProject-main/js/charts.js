




// width and height of the graph
var w = 900;
var h = 450;
var padding = 10;


// defining the dataset
var dataset = [
  { year: 2011, value: 8.6 },
  { year: 2012, value: 8.9 },
  { year: 2013, value: 8.9 },
  { year: 2014, value: 8.7 },
  { year: 2015, value: 8.7 },
  { year: 2016, value: 8.8 },
  { year: 2017, value: 8.7 },
  { year: 2018, value: 8.7 },
  { year: 2019, value: 8.7 },
  { year: 2020, value: 10 },
  { year: 2021, value: 9.8 }
];

// defining the xScale for the years
var xScale = d3.scaleBand()
  .domain(dataset.map(function(d) { return d.year; }))
  .range([40, w - 40])
  .padding(0.1);

// defining the yScale for the values
var yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function(d) { return d.value; })])
  .range([h - 40, 20]);

// this is the svg element
var lineChartDiv = d3.select("#chart5");
var svg5 = lineChartDiv.append("svg")
  .attr("width", w)
  .attr("height", h);

// adding the x axis
var xAxis = d3.axisBottom(xScale);
svg5.append("g")
  .attr("transform", "translate(0," + (h - 40) + ")")
  .call(xAxis);

// adding the y axis
var yAxis = d3.axisLeft(yScale);
svg5.append("g")
  .attr("transform", "translate(40,0)")
  .call(yAxis);

// this is the line generator
var line = d3.line()
  .x(function(d) { return xScale(d.year); })
  .y(function(d) { return yScale(d.value); });

// adding the lines to the graph and setting the colors
svg5.append("path")
  .datum(dataset)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 2)
  .attr("d", line);


// Adding the y axis label
svg5.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0)
  .attr("x", -(h / 2))
  .attr("dy", "1em")
  .attr("class", "leftTag")

  .style("text-anchor", "middle")
  .text("Percentage %");

  // Add dots for each data point
svg5.selectAll(".dot")
.data(dataset)
.enter()
.append("circle")
.attr("class", "dot")
.attr("cx", function(d) { return xScale(d.year); })
.attr("cy", function(d) { return yScale(d.value); })
.attr("r", 5)
.style("fill", "steelblue")
.on("mouseover", function(event, d) {
  // Increase the size and change the color of the dot
  d3.select(this)
    .transition()
    .duration(200)
    .attr("r", 8)
    .style("fill", "red");

  // Create a group element to hold the data label and background
  var dataGroup = svg5.append("g")
    .attr("class", "data-group")
    .style("opacity", 0); // set initial opacity to 0

  // Show the data for the specific dot with a white background
  dataGroup.append("rect")
    .attr("class", "data-background")
    .attr("x", xScale(d.year) + 15)
    .attr("y", yScale(d.value) - 20)
    .attr("width", 100)
    .attr("height", 40)
    
    .attr("rx", 5) 
    .attr("ry", 5)
    .style("fill", "#3ea5d0");

  dataGroup.append("text")
    .attr("class", "data-label")
    .attr("x", xScale(d.year) + 20)
    .attr("y", yScale(d.value) - 5)
    .text("Year: " + d.year)
    .attr("fill", "white")
    .append("tspan")
    .attr("x", xScale(d.year) + 20)
    .attr("y", yScale(d.value) + 15)
    .attr("fill", "white")
    .text("Value: " + d.value);

  // Transition the data group to full opacity over 1 second
  dataGroup.transition()
    .duration(500)
    .style("opacity", 1);

  // Move the dot to the front
  d3.select(this).raise();
})
.on("mouseout", function(event, d) {
  // Revert back to the original size and color of the dot
  d3.select(this)
    .transition()
    .duration(200)
    .attr("r", 5)
    .style("fill", "steelblue");

  // Remove the data label and background with a fade out transition
  svg5.select(".data-group")
    .transition()
    .duration(100)
    .style("opacity", 0)
    .remove();
});

var caption = d3.select("#chart5")
.append("p")
.attr("class", "caption")
.text("Figure 5: Unemployment rates in syria by year");




// BAR 6
// 
// 
// Width and height of the graph
var w = 900;
var h = 450;

// Dataset
var dataset = [
  { year: 2011, value: 7841 },
  { year: 2012, value: 49294 },
  { year: 2013, value: 73447 },
  { year: 2014, value: 76021 },
  { year: 2015, value: 55219 },
  { year: 2016, value: 46232 },
  { year: 2017, value: 34476 },
  { year: 2018, value: 19666 },
  { year: 2019, value: 11215 },
  { year: 2020, value: 6026 }
];

// Create the SVG element
var svg6 = d3.select("#chart6")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

// Define the scales
var xScale2 = d3.scaleBand()
  .domain(dataset.map(function(d) { return d.year; }))
  .range([50, w - 50])
  .padding(0.1);

var yScale2 = d3.scaleLinear()
  .domain([0, d3.max(dataset, function(d) { return d.value; })])
  .range([h - 50, 50]);

// Create the bars
// Create the bars
svg6.selectAll(".bar")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", function(d) { return xScale2(d.year); })
  .attr("y", function(d) { return yScale2(d.value); })
  .attr("width", xScale2.bandwidth())
  .attr("height", function(d) { return h - 50 - yScale2(d.value); })
  .attr("fill", "steelblue")
  .on("mouseover", function(event, d) {
    d3.select(this)
    .transition()
    .duration(500)
    .attr("fill", "red");

    svg6.append("text")
      .attr("class", "bar-value")
      .text(d.value + " Deaths")
      .attr("x", xScale2(d.year) + xScale2.bandwidth() / 2)
      .attr("y", yScale2(d.value) - 10)
      .attr("text-anchor", "middle")
      .attr("font-size", "13px")
      .attr("font-weight", "600")
      .attr("fill", "black");
  })
  .on("mouseout", function(event, d) {
    d3.select(this)
    .transition()
    .duration(500)
    .attr("fill", "steelblue")
    svg6.select(".bar-value").remove();

  });


// Add labels for each bar
svg6.selectAll(".bar-label")
  .data(dataset)
  .enter()
  .append("text")
  .attr("class", "bar-label")
  .text(function(d) { return d.value; })
  .attr("x", function(d) { return xScale2(d.year) + xScale2.bandwidth() / 2; })
  .attr("y", function(d) { return yScale2(d.value) - 5; })
  .attr("text-anchor", "middle")
  .attr("font-size", "12px")
  .attr("fill", "white");

// Add x-axis
var xAxis = d3.axisBottom(xScale2);
svg6.append("g")
  .attr("transform", "translate(0," + (h - 50) + ")")
  .call(xAxis);

// Add y-axis
var yAxis = d3.axisLeft(yScale2);
svg6.append("g")
  .attr("transform", "translate(50,0)")
  .call(yAxis);


  var caption = d3.select("#chart6")
  .append("p")
  .attr("class", "caption")
  .text("Figure 5: Deaths per in Syria year as a result of war");
  







  
     

    
