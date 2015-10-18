// start slingin' some d3 here.
var container = d3.select("body")
               .append("svg")
               .attr("class", "board")
               .attr("width", 800)
               .attr("height", 600)



var enemyMaker = function(){
  return _.range(0, 20).map(function(element){
    return {
      id: element,
      x: Math.random()*700,
      y: Math.random()*500

    }
  });
}

var enemies = enemyMaker();

var enemyPop =
  container.selectAll('circle').data(enemies, function(d) { return d.id })
  .enter()
  .append("circle")
  .attr("cx", function(d) { return d.x })
  .attr("cy", function(d) { return d.y })
  .attr("r", 10)
  .attr("class", "enemy")
  .style("fill", "teal")
  .style({"stroke": "burlywood", "stroke-width": "2px"});

var enemyMove = function() {
  enemies = enemyMaker();
  container.selectAll('circle').data(enemies, function(d) { return d.id })
  // .enter()
  // .append("circle")
  .transition()
  .duration(1000)
  .attr("cx", function(d) { return d.x })
  .attr("cy", function(d) { return d.y })

  // .attr("r", 20)
 
}
  var dragmove = function(d) {
  var x = d3.event.x;
  var y = d3.event.y;
  if (x > 20 && x < 780) {
    d3.select(this).attr("cx", x);
    // console.log(this)
  }
  if (y > 20 && y < 580) {
    d3.select(this).attr("cy", y);
  }
  }

 var drag = d3.behavior.drag()
  // .origin(function(d) {return d;})
  .on("drag", dragmove);
 


  var player = container.selectAll("circle.player")
    .data([{id:"player", x:500, y:50}])
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("class", "player")
    .attr("cx", function(d) { return d.x })
    .attr("cy", function(d) { return d.y })
    .style("fill", "orange")
    .style({"stroke": "white", "stroke-width": "2px"})
    .call(drag);

  var playerPosition = d3.select("circle.player") 

  // var getPlayer = function() {
  //   playerPosition = {x: d3.select("circle.player").attr("cx"), y: d3.select("circle.player").attr("cy")};
  //   return playerPosition;
  // }

  var previousCollision = false;

  var detectCollision = function() {
  
    var collision = false;

    enemies.each(function() {
      var cx = this.offsetLeft + this.attr("r");
      var cy = this.offsetToop + this.attr("r");

      var x = cx - d3.select("circle.player").attr("cx");
      var y = cy - d3.select("circle.player").attr("cy");

      if (Math.sqrt(x*x + y*y) < this.attr("r")*2)
    })

  }
  

 
  setInterval(enemyMove, 1200);






