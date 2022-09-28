let clicked = 0;
let greeting_counter=0;
// let features = ["fur_color" ,	"ear_1" ,	"ear_2" ,	"eye_rt" ,	"eye_lft" ,	"nose_clr"];
window.addEventListener("load", ()=> {

  let greeting_button = document.getElementById("greeting_button");
  let greeting_txt = document.getElementById("greeting_txt");
  let greeting_txt_overall = document.getElementById("greeting");

  greeting_button.addEventListener('click',  function(){
    greeting_counter += 1;
    if (greeting_counter == 1)
    {
      greeting_txt.innerHTML = "<center>In this site you'll get to create a <br>&#127775; Website Caaattt &#127775; <br><br></center> <ul> <li>To do so you'll pick the name and colors of your cat.</li> <li>you can draw your cat as many times as you want, once you like the colors you picked click <ul> <li>the <mark>'draw cat'</mark> button to see how how your cat turned out,</li> <li>then click <mark>start over</mark> to start over</li> <li>or click <mark>'add cat to community'</mark> button to add your cat to the community!</li></ul> </li> <li>once you add your cat to the community you can scroll to see all the other cats!</li> <li>ps. clicking <mark>'start over'</mark> refreshes the page to allow you to draw a new cat, it doesn't save your colors.</li></ul>";
      greeting_button.innerHTML = "<b>&#10006;</b>"
    }
    else if (greeting_counter > 1)
    {
      greeting_txt_overall.style.display = "none";
    }
  });

  
  let refreshButton = document.getElementById("create_cat");
  refreshButton.addEventListener('click',  function(){
    if (clicked == 0)
    {
      createP5();
      clicked = clicked+1;
      console.log(clicked);
      refreshButton.innerHTML = "start over";
    }
    else if (clicked > 0)
    {
      window.location.reload();
    }
  });



});

var canvas = null;
function createP5 (){
    // let canvasWidth = document.getElementById("widthInput").value;
    // let canvasHeight = document.getElementById("heightInput").value;

      let posX = 400/2;
      let posY = 400/2;
      let fc_sz = 200;
      // current_user_cat = document.getElementById("cat_name").value;
      let fur_color = document.getElementById("fur_color").value;
      let ear_1 = document.getElementById("ear_1").value;
      let ear_2 = document.getElementById("ear_2").value;
      let eye_rt = document.getElementById("eye_rt").value;
      let eye_lft = document.getElementById("eye_lft").value;
      let nose_clr = document.getElementById("nose_clr").value;
      
      let bkg_clr = "#F6F4D2";

    
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
        p.ellipse(posX-fc_sz/4 ,posY,fc_sz/3.5)

        //     right eye
        p.fill(eye_lft);
        p.ellipse(posX+fc_sz/4 ,posY,fc_sz/3.5)
        }
      }, "canvas-div");
    }
  }
}


// let heightt = window.innerHeight;
// let widthtt = window.innerWidth;
console.log(window.innerWidth);
var canvas_2 = null;

function createCat_community (){
    // let canvasWidth = document.getElementById("widthInput").value;
    // let canvasHeight = document.getElementById("heightInput").value;
      let width_full = window.innerWidth;
      let height_full = window.innerWidth;
  {
    // if (canvas_2 === null){
      canvas_2 = new p5(function (p) {

        p.preload = function() {
          
          const url = "https://sheetdb.io/api/v1/ahhugsc2xzfcl"; //https://sheetdb.io/api/v1/c9ua82nq52ccc
          features = p.loadJSON(url);
        }

        // define variables
        let i=0;
        let cats =[];

        p.setup = function (){
          //   count how many charecters  
          while (features[i]) {
            i++;
          }
          p.createCanvas(width_full, width_full*i/1.4);
          p.background("#F6F4D2");
          // createCanvas(500, 450 * i);
          let current_y_pos = width_full / 2;
          for (let a = 0; a < i; a++) {

            let posX = width_full / 2;
            let posY = current_y_pos;
            let fc_size = width_full/2.5;
            let fur_color = features[a].fur_color;
            let ear_1 = features[a].ear_1;
            let ear_2 = features[a].ear_2;
            let eye_lft = features[a].eye_lft;
            let eye_rt = features[a].eye_rt;
            let nose = features[a].nose_clr;
            let name = features[a].user;
            if (name.length ==0)
            {
              name = "no name";
            }

          //   cats[a] = new p.Cat(
            p.CreateCat(
              posX,
              posY,
              fc_size,
              fur_color,
              ear_1,
              ear_2,
              eye_lft,
              eye_rt,
              nose,
              name
            );
            current_y_pos += width_full/1.5;
          }
        } //end of setup
        p.draw = function(){

          ///////////////
      }
      
      p.CreateCat =function (
        posX,
        posY,
        fc_sz,
        fur_color,
        ear_1,
        ear_2,
        eye_rt,
        eye_lft,
        nose_clr,
        name
      ) {


        /////////////////////////////////////////////////////// ears
        let ear_width = 50;
        let ear_height = fc_sz / 1.7;
    
        p.strokeWeight(5);
        p.strokeJoin(p.ROUND);

        //     ear left
        let x1_a = posX - fc_sz / 1.7;
        let y1_a = posY - ear_height;
    
        let x2_a = posX;
        let y2_a = posY - fc_sz / 2.3;
    
        let x3_a = posX - fc_sz / 2.1;
        let y3_a = posY;
    
        p.stroke(ear_1);
        p.fill(ear_1);
        p.triangle(x1_a, y1_a, x2_a, y2_a, x3_a, y3_a);
    
        //  ear right
        let x1_b = posX + fc_sz / 1.7;
        let y1_b = posY - ear_height;
    
        let x2_b = posX;
        let y2_b = posY - fc_sz / 2.3;
    
        let x3_b = posX + fc_sz / 2.1;
        let y3_b = posY;
    
        p.stroke(ear_2);
        p.fill(ear_2);
        p.triangle(x1_b, y1_b, x2_b, y2_b, x3_b, y3_b);

        /////////////////////////////////////////////////////// face
        p.noStroke();
        p.fill(fur_color);
        p.ellipse(posX, posY, fc_sz);
        /////////////////////////////////////////////////////// nose
        let nose_width = fc_sz / 15;
        let nose_height = fc_sz / 30;
        let x1 = posX - nose_width;
        let y1 = posY + fc_sz / 5;
    
        let x2 = posX;
        let y2 = y1 + nose_height;
    
        let x3 = posX + nose_width;
        let y3 = posY + fc_sz / 5;
    
        p.stroke(nose_clr);
        p.fill(nose_clr);
        p.triangle(x1, y1, x2, y2, x3, y3);
        /////////////////////////////////////////////////////// eyes
        p.strokeWeight(fc_sz / 40);
        p.stroke("white");
        //     left eye
        p.fill(eye_rt);
        p.ellipse(posX - fc_sz / 4, posY, fc_sz / 3.5);
    
        //     right eye
        p.fill(eye_lft);
        p.ellipse(posX + fc_sz / 4, posY, fc_sz / 3.5); 
        
        /////////////////////////////////////////////////////// add name
        p.noStroke();
        p.fill("black");
        p.textSize(fc_sz/6);
        p.textAlign(p.CENTER, p.BOTTOM);
        p.text(name, width_full / 2, posY+(fc_sz/1.4));

      } //end of create cats function

      }, "canvas-second");
    // }
  }
}

