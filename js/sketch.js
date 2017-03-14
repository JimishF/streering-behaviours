var font, text;
var vehicles = [];

function preload() {
  fonts = Array(); 
  font_list = Array('Candy_Pop.ttf','DEARBORN type.ttf','TECHNOLIN.ttf','Typo Angular.otf','VTKS-MINDFULNESS.ttf','Watchword_regular.otf');
  for (var i=0;i<font_list.length;i++){
      fonts.push( loadFont('../fonts/'+ font_list[i] ) );
      $('<option/>').val(i).html(font_list[i]).appendTo('#items');
  }
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
  font = fonts[ $("#items").val() ];
  if ($("input").val() !== "") {
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

function keyPressed() {
  if (keyCode == ENTER && $("input").is(":focus")) {
    generate();
  }
}
