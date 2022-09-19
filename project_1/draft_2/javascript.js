// https://stackoverflow.com/questions/6944843/is-it-possible-to-draw-on-multiple-canvases-at-once
// https://milnepublishing.geneseo.edu/themissinglink/chapter/chapter-15-canvas/
var canvas  = document.getElementById("canvas1");
// var canvas1 = document.getElementById("canvas1");
var canvas1=canvas.getContext("2d");
canvas1.fillStyle= "#FF0000";
canvas1.beginPath();
canvas1.ellipse(180,155,120,200,2 * Math.PI, 0, 2 * Math.PI)
canvas1.stroke();
canvas1.fillStyle= "rgba(0, 0, 50, 100)";
canvas1.fillRect(50, 200, 100, 50);