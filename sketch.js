var fft;
var window_stroke;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  window_stroke = (windowWidth / 255);
} 

function draw() {
  background(0);
  var spec = fft.analyze();
  beginShape();
  for(var i = 0; i < spec.length; i++) {
      strokeWeight(window_stroke*1.5);
      if(i < 42.5){
        stroke(197, 108, 240);
      }
      else if(i < 85){
        stroke(113, 88, 226);
      }
      else if(i < 127.5){
        stroke(23, 192, 235);
      }
      else if(i < 170){
        stroke(50, 255, 126);
      }
      else if(i < 212.5){
        stroke(255, 159, 26);
      }
      else{
        stroke(255, 56, 56);
      }
      point(i*window_stroke, map(spec[i], 0, 255, windowHeight/2, 0));
    }
  endShape();
  fill(0);
}