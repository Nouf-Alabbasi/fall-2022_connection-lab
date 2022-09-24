// using https://stackoverflow.com/questions/55384639/connecting-the-html-input-page-with-p5-js
  // p.canvas and func that creates new canvases

// input:   let canvasHeight = document.getElementById("heightInput").value;



// create canvas
var canvas = null;
function createP5 (){
    // let canvasWidth = document.getElementById("widthInput").value;
    // let canvasHeight = document.getElementById("heightInput").value;

    let posX = 400/2;
    let posY = 400/2;
    let fc_sz = 200;
    let fur_color = document.getElementById("fur_color").value;
    let ear_1 = document.getElementById("ear_1").value;
    let ear_2 = document.getElementById("ear_2").value;
    let eye_rt = document.getElementById("eye_rt").value;
    let eye_lft = document.getElementById("eye_lft").value;
    let nose_clr = document.getElementById("nose_clr").value;
    let bkg_clr = "#F6F4D2"
    
  {
    if (canvas === null){
      canvas = new p5(function (p) {
        p.setup = function (){
          p.createCanvas(400, 400);
        }
        p.draw = function(){
          p.background(bkg_clr);
          p.CreateCat();
      }
      
      p.CreateCat =function (){
        //   ears
        let ear_width = 50;
        let ear_height = fc_sz/1.7;

        p.strokeWeight(5);
        p.strokeJoin(p.ROUND);

        // ear left
        let x1_a = posX-(fc_sz/1.7)
        let y1_a = posY-ear_height;

        let x2_a = posX;
        let y2_a = posY - fc_sz/2.3;

        let x3_a = posX-(fc_sz/2.1);
        let y3_a = posY;

        p.stroke(ear_1);
        p.fill(ear_1);
        p.triangle(x1_a,y1_a,x2_a,y2_a,x3_a,y3_a);

        //  ear right
        let x1_b = posX+(fc_sz/1.7) 
        let y1_b = posY-ear_height;

        let x2_b = posX;
        let y2_b = posY - fc_sz/2.3;

        let x3_b = posX+(fc_sz/2.1);
        let y3_b = posY;

        p.stroke(ear_2);
        p.fill(ear_2);
        p.triangle(x1_b,y1_b,x2_b,y2_b,x3_b,y3_b);

        //   face
        p.noStroke();
        p.fill(fur_color);
        p.ellipse(posX, posY, fc_sz); 

        //   nose
        let nose_width = fc_sz/15;
        let nose_height = fc_sz/30;
        let x1 = posX-nose_width;
        let y1 = posY+(fc_sz/5);

        let x2 = posX;
        let y2 = y1+nose_height;

        let x3 = posX+nose_width;
        let y3 = posY+(fc_sz/5);

        p.stroke(nose_clr);
        p.fill(nose_clr);
        p.triangle(x1,y1,x2,y2,x3,y3);

        // eyes
        p.strokeWeight(fc_sz/40);
        p.stroke("white");
        //     left eye
        p.fill(eye_rt);
        p.ellipse(posX-fc_sz/4 ,200,fc_sz/3.5)

        //     right eye
        p.fill(eye_lft);
        p.ellipse(posX+fc_sz/4 ,200,fc_sz/3.5)
        }
      }, "canvas-div");
    }
  }
}