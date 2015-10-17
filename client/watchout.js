// start slingin' some d3 here.
var container = d3.select("body")
               .append("svg")
               .attr("width", 800)
               .attr("height", 600)

var enemies = [{id:1,x: 250,y: 250}, {id:2,x: 100,y: 100},{id:3,x: 350,y: 300}];

var enemyMaker = function(){
  return _.range(0, 20).map(function(element){
    return {
      id: element,
      x: Math.random()*700,
      y: Math.random()*500
    }
  });
}

enemies = enemyMaker();

var enemyPop =
  container.selectAll('circle').data(enemies, function(d) { return d.id })
  .enter()
  .append("circle")
  .attr("cx", function(d) { return d.x })
  .attr("cy", function(d) { return d.y })
  .attr("r", 20);

var enemyMove = function() {
  enemies = enemyMaker();
  container.selectAll('circle').data(enemies, function(d) { return d.id })
  .transition()
  .duration(1000)
  // .enter()
  // .append("circle")
  .attr("cx", function(d) { return d.x })
  .attr("cy", function(d) { return d.y })
  // .attr("r", 20)
 
}

  // var player = container.selectAll("rect")
  //   .append("rect")
  //   .attr("width", 50)
  //   .attr("height", 50)
  //   .attr("fill", "orange")

  // var move = function() {
  //   for (var i = 0; i < enemies.length; i++) {
  //     enemies[i].x = Math.random() * 700;
  //     enemies[i].y = Math.random() * 500;
  //     console.log(enemies[i]);
  //   }
    
  // }

  setInterval(enemyMove, 1000);






