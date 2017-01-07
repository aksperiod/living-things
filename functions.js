function sandline (p1, p2) {
  var samples = 35;

  for (var i = 0; i < samples; i++) {
    var location = Math.random();
    var x = lerp(p1.x, p2.x, location);
    var y = lerp(p1.y, p2.y, location);

    ellipse(x, y, 2, 2);
  }
}

function lerp(a, b, f) {
  return a + f * (b - a);
}


function gravity(pos1, pos2, G) {
  var diff = p5.Vector.sub(pos1, pos2);
  var norm = diff.normalize();

  return diff.mult(G / Math.pow(norm, 3));
}
