function Point(x, y) {

  this.pos          = createVector(x, y);
  this.lastpos      = createVector(x, y);
  this.origin       = createVector(x, y);
  this.velocity     = createVector((0.5 - Math.random()) * 0.8, (0.5 - Math.random()) * 0.8);
  this.acceleration = createVector(0,0);
}

Point.prototype.updatePos = function () {
  this.pos.add(this.velocity);
  this.velocity.add(this.acceleration);
};


function Randomwalk(x, y, color) {
  this.person = new Point(x, y);
  this.friend = new Point(x + (0.5 - Math.random()) * 10, y + (0.5 - Math.random()) * 10);
  this.color = color;
  this.life = 0;
}

Randomwalk.prototype.update = function () {
  this.person.velocity.x += (0.5 - Math.random()) * 0.1;
  this.person.velocity.y += (0.5 - Math.random()) * 0.1;

  this.friend.velocity.x += (0.5 - Math.random()) * 0.1;
  this.friend.velocity.y += (0.5 - Math.random()) * 0.1;

  var dx = this.person.velocity.x - this.friend.velocity.x;
  var dy = this.person.velocity.y - this.friend.velocity.y;

  this.person.velocity.x += dx * 0.05;
  this.person.velocity.y += dy * 0.05;

  this.friend.velocity.x += dx * 0.05;
  this.friend.velocity.y += dy * 0.05;

  var d = gravity(this.person.pos, this.friend.pos, 8);
  this.person.velocity.sub(d);
  this.friend.velocity.add(d);

  var d1 = gravity(this.person.pos, this.person.origin, 3);
  this.person.velocity.sub(d1);

  var d2 = gravity(this.friend.pos, this.friend.origin, 3);
  this.friend.velocity.sub(d2);

  this.person.updatePos();
  this.friend.updatePos();
  this.life += 1;
};

Randomwalk.prototype.draw = function () {
  var originalAlpha = Spectra(this.color).alpha();
  var rgba = Spectra(this.color).alpha(originalAlpha - this.life / 43500).rgbaString();
  fill(rgba);
  sandline(this.person.pos, this.friend.pos);
};
