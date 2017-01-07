var c;
//
//https://martijnbrekelmans.com/generative-art/smoke/smoke-art-thing.js
//
//
function setup() {
  imageMode(CENTER);
  noStroke();
  var h = window.innerHeight;
  var w = window.innerWidth;
  c = createCanvas(w, h);
  rs = [];

  var r = w / 7;
  for (var i = 0; i < 2 * Math.PI; i += 0.04) {
    var x = Math.cos(i) * r;
    var y = Math.sin(i) * r;

    rs.push(new Randomwalk(x + w / 2, y + h / 2, "rgba(16, 88, 33, 0.06)"));
  }
}

function draw() {
  rs.forEach(function (r) {
    r.update();
    r.draw();
  });
}
