// var dataRaw = `sepalLength	sepalWidth	petalLength	petalWidth	species
// 5.1	3.5	1.4	0.2	setosa
// 4.9	3.0	1.4	0.2	setosa
// 4.7	3.2	1.3	0.2	setosa
// 4.6	3.1	1.5	0.2	setosa
// 5.0	3.6	1.4	0.2	setosa
// 5.4	3.9	1.7	0.4	setosa
// 4.6	3.4	1.4	0.3	setosa
// 5.0	3.4	1.5	0.2	setosa
// 4.4	2.9	1.4	0.2	setosa
// 4.9	3.1	1.5	0.1	setosa
// 5.4	3.7	1.5	0.2	setosa
// 4.8	3.4	1.6	0.2	setosa
// 4.8	3.0	1.4	0.1	setosa
// 4.3	3.0	1.1	0.1	setosa
// 5.8	4.0	1.2	0.2	setosa
// 5.7	4.4	1.5	0.4	setosa
// 5.4	3.9	1.3	0.4	setosa
// 5.1	3.5	1.4	0.3	setosa
// 5.7	3.8	1.7	0.3	setosa
// 5.1	3.8	1.5	0.3	setosa
// 5.4	3.4	1.7	0.2	setosa
// 5.1	3.7	1.5	0.4	setosa
// 4.6	3.6	1.0	0.2	setosa
// 5.1	3.3	1.7	0.5	setosa
// 4.8	3.4	1.9	0.2	setosa
// 5.0	3.0	1.6	0.2	setosa
// 5.0	3.4	1.6	0.4	setosa
// 5.2	3.5	1.5	0.2	setosa
// 5.2	3.4	1.4	0.2	setosa
// 4.7	3.2	1.6	0.2	setosa
// 4.8	3.1	1.6	0.2	setosa
// 5.4	3.4	1.5	0.4	setosa
// 5.2	4.1	1.5	0.1	setosa
// 5.5	4.2	1.4	0.2	setosa
// 4.9	3.1	1.5	0.2	setosa
// 5.0	3.2	1.2	0.2	setosa
// 5.5	3.5	1.3	0.2	setosa
// 4.9	3.6	1.4	0.1	setosa
// 4.4	3.0	1.3	0.2	setosa
// 5.1	3.4	1.5	0.2	setosa
// 5.0	3.5	1.3	0.3	setosa
// 4.5	2.3	1.3	0.3	setosa
// 4.4	3.2	1.3	0.2	setosa
// 5.0	3.5	1.6	0.6	setosa
// 5.1	3.8	1.9	0.4	setosa
// 4.8	3.0	1.4	0.3	setosa
// 5.1	3.8	1.6	0.2	setosa
// 4.6	3.2	1.4	0.2	setosa
// 5.3	3.7	1.5	0.2	setosa
// 5.0	3.3	1.4	0.2	setosa
// 7.0	3.2	4.7	1.4	versicolor
// 6.4	3.2	4.5	1.5	versicolor
// 6.9	3.1	4.9	1.5	versicolor
// 5.5	2.3	4.0	1.3	versicolor
// 6.5	2.8	4.6	1.5	versicolor
// 5.7	2.8	4.5	1.3	versicolor
// 6.3	3.3	4.7	1.6	versicolor
// 4.9	2.4	3.3	1.0	versicolor
// 6.6	2.9	4.6	1.3	versicolor
// 5.2	2.7	3.9	1.4	versicolor
// 5.0	2.0	3.5	1.0	versicolor
// 5.9	3.0	4.2	1.5	versicolor
// 6.0	2.2	4.0	1.0	versicolor
// 6.1	2.9	4.7	1.4	versicolor
// 5.6	2.9	3.6	1.3	versicolor
// 6.7	3.1	4.4	1.4	versicolor
// 5.6	3.0	4.5	1.5	versicolor
// 5.8	2.7	4.1	1.0	versicolor
// 6.2	2.2	4.5	1.5	versicolor
// 5.6	2.5	3.9	1.1	versicolor
// 5.9	3.2	4.8	1.8	versicolor
// 6.1	2.8	4.0	1.3	versicolor
// 6.3	2.5	4.9	1.5	versicolor
// 6.1	2.8	4.7	1.2	versicolor
// 6.4	2.9	4.3	1.3	versicolor
// 6.6	3.0	4.4	1.4	versicolor
// 6.8	2.8	4.8	1.4	versicolor
// 6.7	3.0	5.0	1.7	versicolor
// 6.0	2.9	4.5	1.5	versicolor
// 5.7	2.6	3.5	1.0	versicolor
// 5.5	2.4	3.8	1.1	versicolor
// 5.5	2.4	3.7	1.0	versicolor
// 5.8	2.7	3.9	1.2	versicolor
// 6.0	2.7	5.1	1.6	versicolor
// 5.4	3.0	4.5	1.5	versicolor
// 6.0	3.4	4.5	1.6	versicolor
// 6.7	3.1	4.7	1.5	versicolor
// 6.3	2.3	4.4	1.3	versicolor
// 5.6	3.0	4.1	1.3	versicolor
// 5.5	2.5	4.0	1.3	versicolor
// 5.5	2.6	4.4	1.2	versicolor
// 6.1	3.0	4.6	1.4	versicolor
// 5.8	2.6	4.0	1.2	versicolor
// 5.0	2.3	3.3	1.0	versicolor
// 5.6	2.7	4.2	1.3	versicolor
// 5.7	3.0	4.2	1.2	versicolor
// 5.7	2.9	4.2	1.3	versicolor
// 6.2	2.9	4.3	1.3	versicolor
// 5.1	2.5	3.0	1.1	versicolor
// 5.7	2.8	4.1	1.3	versicolor
// 6.3	3.3	6.0	2.5	virginica
// 5.8	2.7	5.1	1.9	virginica
// 7.1	3.0	5.9	2.1	virginica
// 6.3	2.9	5.6	1.8	virginica
// 6.5	3.0	5.8	2.2	virginica
// 7.6	3.0	6.6	2.1	virginica
// 4.9	2.5	4.5	1.7	virginica
// 7.3	2.9	6.3	1.8	virginica
// 6.7	2.5	5.8	1.8	virginica
// 7.2	3.6	6.1	2.5	virginica
// 6.5	3.2	5.1	2.0	virginica
// 6.4	2.7	5.3	1.9	virginica
// 6.8	3.0	5.5	2.1	virginica
// 5.7	2.5	5.0	2.0	virginica
// 5.8	2.8	5.1	2.4	virginica
// 6.4	3.2	5.3	2.3	virginica
// 6.5	3.0	5.5	1.8	virginica
// 7.7	3.8	6.7	2.2	virginica
// 7.7	2.6	6.9	2.3	virginica
// 6.0	2.2	5.0	1.5	virginica
// 6.9	3.2	5.7	2.3	virginica
// 5.6	2.8	4.9	2.0	virginica
// 7.7	2.8	6.7	2.0	virginica
// 6.3	2.7	4.9	1.8	virginica
// 6.7	3.3	5.7	2.1	virginica
// 7.2	3.2	6.0	1.8	virginica
// 6.2	2.8	4.8	1.8	virginica
// 6.1	3.0	4.9	1.8	virginica
// 6.4	2.8	5.6	2.1	virginica
// 7.2	3.0	5.8	1.6	virginica
// 7.4	2.8	6.1	1.9	virginica
// 7.9	3.8	6.4	2.0	virginica
// 6.4	2.8	5.6	2.2	virginica
// 6.3	2.8	5.1	1.5	virginica
// 6.1	2.6	5.6	1.4	virginica
// 7.7	3.0	6.1	2.3	virginica
// 6.3	3.4	5.6	2.4	virginica
// 6.4	3.1	5.5	1.8	virginica
// 6.0	3.0	4.8	1.8	virginica
// 6.9	3.1	5.4	2.1	virginica
// 6.7	3.1	5.6	2.4	virginica
// 6.9	3.1	5.1	2.3	virginica
// 5.8	2.7	5.1	1.9	virginica
// 6.8	3.2	5.9	2.3	virginica
// 6.7	3.3	5.7	2.5	virginica
// 6.7	3.0	5.2	2.3	virginica
// 6.3	2.5	5.0	1.9	virginica
// 6.5	3.0	5.2	2.0	virginica
// 6.2	3.4	5.4	2.3	virginica
// 5.9	3.0	5.1	1.8	virginica`;

var dataRaw = `sepalLength	sepalWidth	petalLength	petalWidth	species
Think	2012-02-03	1.4	0.2	setosa
Act	2012-03-03	1.4	0.2	setosa
Think	2012-01-03	4.7	1.4	versicolor
Deliver	2012-05-03	4.5	1.5	versicolor
Leadership Team Meetings	2012-02-03	5.9	2.1	virginica
Think	2012-02-03	5.9	2.1	virginica`;

// var dataRaw = ``;

var data = d3.tsv.parse(dataRaw);

var customTimeFormat = d3.time.format.multi([
  [".%L", function(d) { return d.getMilliseconds(); }],
  [":%S", function(d) { return d.getSeconds(); }],
  ["%I:%M", function(d) { return d.getMinutes(); }],
  ["%I %p", function(d) { return d.getHours(); }],
  ["%a %d", function(d) { return d.getDay() && d.getDate() != 1; }],
  ["%b %d", function(d) { return d.getDate() != 1; }],
  ["%B", function(d) { return d.getMonth(); }],
  ["%Y", function() { return true; }]
]);

var margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    padding = 1, // separation between nodes
    radius = 11,
    startDate = new Date(2012, 0, 1),
    endDate = new Date(2013, 0, 1);

var x = d3.time.scale()
    .domain([startDate, endDate])
    .range([0, width]);

//var x = d3.scale.linear()
//    .range([0, width]);

// var y = d3.scale.linear()
//     .range([height, 0]);

var y = d3.scale.ordinal()
    .domain(["Deliver", "Act", "Think", "Leadership Team Meetings"])    
    .rangeRoundBands([height, 0], .1, .3);

var color = d3.scale.category10();

//var xAxis = d3.svg.axis()
//    .scale(x)
//    .orient("bottom");

var xAxis = d3.svg.axis()
.scale(x)
.orient("bottom")
.tickFormat(customTimeFormat);

// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left");
    
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//var controls = d3.select("body").append("label")
//    .attr("id", "controls");
//var checkbox = controls.append("input")
//    .attr("id", "collisiondetection")
//    .attr("type", "checkbox");
//controls.append("span")
//    .text("Collision detection");

//d3.tsv("data.tsv", function(error, data) {
  var xVar = "sepalWidth",
      yVar = "sepalLength";

  data.forEach(function(d) {
    d[xVar] = new Date(d[xVar]);// +d[xVar];
    //d[yVar] = +d[yVar];
  });

  var force = d3.layout.force()
    .nodes(data)
    .size([width, height])
    .on("tick", tick)
    .charge(-1)
    .gravity(0)
    .chargeDistance(20);

  //x.domain(d3.extent(data, function(d) { return d[xVar]; })).nice();
  //y.domain(d3.extent(data, function(d) { return d[yVar]; })).nice();

  // Set initial positions
  data.forEach(function(d) {
    d.x = x(d[xVar]);
    d.y = y(d[yVar]);
    d.color = color(d.species);
    d.radius = radius;
  });

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
    // .append("text")
    //   .attr("class", "label")
    //   .attr("x", width)
    //   .attr("y", -6)
    //   .style("text-anchor", "end")
    //   .text("Sepal Width (cm)");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    // .append("text")
    //   .attr("class", "label")
    //   .attr("transform", "rotate(-90)")
    //   .attr("y", 6)
    //   .attr("dy", ".71em")
    //   .style("text-anchor", "end")
      //.text("Sepal Length (cm)")
      .selectAll(".tick text")
      .attr("transform", "translate(-7, 0)")
        .call(wrap, y.rangeBand());

var gNodes = svg.selectAll(".dot")
      .data(data)
    .enter().append("g");

var node = gNodes.append("circle")
      .attr("class", "dot")
      .attr("r", radius)
      .attr("cx", function(d) { return x(d[xVar]); })
      .attr("cy", function(d) { return y(d[yVar]); })
      .style("fill", function(d) { return d.color; });

//   var node = svg.selectAll(".dot")
//       .data(data)
//     .enter().append("circle")
//       .attr("class", "dot")
//       .attr("r", radius)
//       .attr("cx", function(d) { return x(d[xVar]); })
//       .attr("cy", function(d) { return y(d[yVar]); })
//       .style("fill", function(d) { return d.color; });

// getComputedTextLength
var textNode = gNodes.append("text").text(function(d) { 
    let date = d[xVar];
    
    return (date.getMonth() + 1) + "/" + date.getDate();
})
.style("font-weight", "bold")
.attr("fill", "white")
.attr("x", function(d) { return x(d[xVar])-7; })
.attr("y", function(d) { return y(d[yVar])+2; });

//   var legend = svg.selectAll(".legend")
//       .data(color.domain())
//     .enter().append("g")
//       .attr("class", "legend")
//       .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

//   legend.append("rect")
//       .attr("x", width - 18)
//       .attr("width", 18)
//       .attr("height", 18)
//       .style("fill", color);

//   legend.append("text")
//       .attr("x", width - 24)
//       .attr("y", 9)
//       .attr("dy", ".35em")
//       .style("text-anchor", "end")
//       .text(function(d) { return d; });

//   d3.select("#collisiondetection").on("change", function() {
//     force.resume();
//   });

  force.start();
  //force.resume();

  function tick(e) {
    node.each(moveTowardDataPosition(e.alpha));
    textNode.each(moveTowardDataPosition(e.alpha));

    //if (checkbox.node().checked) {
      node.each(collide(e.alpha));
      textNode.each(collide(e.alpha));
    //}

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });

    textNode.attr("x", function(d) { return d.x-7; })
        .attr("y", function(d) { return d.y+2; });
  }

  function moveTowardDataPosition(alpha) {
    return function(d) {
      d.x += (x(d[xVar]) - d.x) * 0.1 * alpha;
      d.y += (y(d[yVar]) - d.y) * 0.1 * alpha;
    };
  }

  // Resolve collisions between nodes.
  function collide(alpha) {
    var quadtree = d3.geom.quadtree(data);
    return function(d) {
      var r = d.radius + radius + padding,
          nx1 = d.x - r,
          nx2 = d.x + r,
          ny1 = d.y - r,
          ny2 = d.y + r;
      quadtree.visit(function(quad, x1, y1, x2, y2) {
        if (quad.point && (quad.point !== d)) {
          var x = d.x - quad.point.x,
              y = d.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = d.radius + quad.point.radius + (d.color !== quad.point.color) * padding;
          if (l < r) {
            l = (l - r) / l * alpha;
            d.x -= x *= l;
            d.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
          }
        }
        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
      });
    };
  }

  function wrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.1, // ems
          y = text.attr("y"),
          dy = parseFloat(text.attr("dy")),
          tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }

//});