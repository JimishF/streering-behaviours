var font, text;
var vehicles = [];

function preload() {
  font = loadFont('../fonts/Watchword_regular_demo.otf');
}

function setup() {
  createCanvas(1000, 500);
}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function generate() {
  if ($("input").val() !== "") {
    if ($("input").val() !== text) {
        vehicles.splice(0, vehicles.length);
        text = $("input").val();
        points = font.textToPoints(text, 0, 250, 200);

        for (var j = 0; j < points.length; j++) {
          var pt = points[j];
          var vehicle = new Vehicle(pt.x, pt.y);
          vehicles.push(vehicle);
      }
    }
  }
}

function keyPressed() {
  if (keyCode == ENTER && $("input").is(":focus")) {
    generate();
  }
}
