// using https://stackoverflow.com/questions/55384639/connecting-the-html-input-page-with-p5-js

// input:   let canvasHeight = document.getElementById("heightInput").value;



// create canvas
var canvas = null;
function createP5 (){
  let canvasWidth = document.getElementById("widthInput").value;
  let canvasHeight = document.getElementById("heightInput").value;
{
    canvas = new p5(function (p) {
      p.setup = function (){
        p.createCanvas(canvasWidth, canvasHeight);
        p.background("red");
      }
      p.draw = function(){
        p.background("#3ABEFF");
        p.stroke(0);
        p.rect(p.width/5, p.height/5, p.width/5 * 3, p.height/5 * 3);
     }
    }, "canvas-div");
  }
}