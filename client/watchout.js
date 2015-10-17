// start slingin' some d3 here.
var container = d3.select("body")
               .append("svg")
               .attr("width", 800)
               .attr("height", 800)

var enemies = [{id:1,x: 250,y: 250}, {id:2,x: 100,y: 100},{id:3,x: 350,y: 300}];


var enemyPop = container.selectAll('circle').data(enemies, function(d) { return d.id })
  .enter()
  .append("circle")
  .attr("cx", function(d) { return d.x })
  .attr("cy", function(d) { return d.y })
  .attr("r", 20)

  // var player = container.selectAll("rect")
  //   .append("rect")
  //   .attr("width", 50)
  //   .attr("height", 50)
  //   .attr("fill", "orange")


  setInterval(function() {
    for (var i = 0; i < enemies.length; i++) {

    }
  })




