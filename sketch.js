var fft;
var window_stroke;

function setup() { 
  createCanvas(750, 750);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  window_stroke = (750 / 255);
}
function draw() {
  background(0);
  var spec = fft.analyze();
  beginShape();
  for(var i = 0; i < spec.length; i++) {
      strokeWeight(window_stroke*1.5);
      if(i < 20){
        stroke(197, 108, 240);
      }
      else if(i < 50){
        stroke(113, 88, 226);
      }
      else if(i < 120){
        stroke(23, 192, 235);
      }
      else if(i < 160){
        stroke(50, 255, 126);
      }
      else if(i < 220){
        stroke(255, 159, 26);
      }
      else{
        stroke(255, 56, 56);
      }
      point(i*window_stroke, map(spec[i], 0, 255, 750/2, 0));
    }
  endShape();
  fill(50);
}
