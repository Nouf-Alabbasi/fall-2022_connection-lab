
// let fur_color = document.getElementById("fur_color").value;
// let ear_1 = document.getElementById("ear_1").value;
// let ear_2 = document.getElementById("ear_2").value;
// let eye_rt = document.getElementById("eye_rt").value;
// let eye_lft = document.getElementById("eye_lft").value;
// let nose_clr = document.getElementById("nose_clr").value;


// let features = ["fur_color" ,	"ear_1" ,	"ear_2" ,	"eye_rt" ,	"eye_lft" ,	"nose_clr"];
window.addEventListener("load", ()=> {
  createP5();
  // while(fur_color != document.getElementById("fur_color").value || 
  //    ear_1 != document.getElementById("ear_1").value ||
  //    ear_2 != document.getElementById("ear_2").value ||
  //    eye_rt != document.getElementById("eye_rt").value ||
  //    eye_lft != document.getElementById("eye_lft").value ||
  //    nose_clr != document.getElementById("nose_clr").value)
  // {
  //   // var canvas = null;
  //     console.log("changed");
  //     // createP5 ();
  // }


});
//     var apiUrl = 'https://sheetdb.io/api/v1/kiyrgijfayuro';
//     var char_spec=[]
//     fetch(apiUrl)
//     .then(resp => resp.json())
//     .then(data => {
//         // console.log(data);
//         console.log(data[data.length-1])

//         // for (const [key, value] of Object.entries(data[0])) {

//         //   if (key == "fur_color")
//         //   {
//         //     hair_color = value.toString();
//         //     console.log(hair_color);
//         //   }
//         // }
//         // dataIsReady = true;
//     })
// })

// const button = document.getElementById('sub_button');
// button.addEventListener("click", buttonPressed);

// const buttonPressed = (e) => {
//   console.log(e); //short form of event
// }

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
// console.log(window.innerWidth);
// var canvas_2 = null;
// function createCat_twin (){
//     // let canvasWidth = document.getElementById("widthInput").value;
//     // let canvasHeight = document.getElementById("heightInput").value;
//       let c_h = window.innerHeight;
//       let c_w = window.innerWidth;
//       let posX = c_w/2;
//       let posY = c_h/2;
//       let fc_sz = c_w/3;
//       fur_color = "#413C58"; //document.getElementById("fur_color").value;
//       ear_1 = "#413C58";
//       ear_2 = "#A3C4BC";
//       eye_rt = "#413C58";
//       eye_lft = "#413C58";
//       nose_clr = "#F2E7C9";
//       bkg_clr = "#F6F4D2";

    
//   {
//     // if (canvas_2 === null){
//       canvas_2 = new p5(function (p) {
//         p.setup = function (){
//           p.createCanvas(widthtt, heightt);
//         }
//         p.draw = function(){
//           p.background(bkg_clr);
//           p.CreateCat();
//       }
      
//       p.CreateCat =function (){
//         //   ears
//         let ear_width = 50;
//         let ear_height = fc_sz/1.7;

//         p.strokeWeight(5);
//         p.strokeJoin(p.ROUND);

//         // ear left
//         let x1_a = posX-(fc_sz/1.7)
//         let y1_a = posY-ear_height;

//         let x2_a = posX;
//         let y2_a = posY - fc_sz/2.3;

//         let x3_a = posX-(fc_sz/2.1);
//         let y3_a = posY;

//         p.stroke(ear_1);
//         p.fill(ear_1);
//         p.triangle(x1_a,y1_a,x2_a,y2_a,x3_a,y3_a);

//         //  ear right
//         let x1_b = posX+(fc_sz/1.7) 
//         let y1_b = posY-ear_height;

//         let x2_b = posX;
//         let y2_b = posY - fc_sz/2.3;

//         let x3_b = posX+(fc_sz/2.1);
//         let y3_b = posY;

//         p.stroke(ear_2);
//         p.fill(ear_2);
//         p.triangle(x1_b,y1_b,x2_b,y2_b,x3_b,y3_b);

//         //   face
//         p.noStroke();
//         p.fill(fur_color);
//         p.ellipse(posX, posY, fc_sz); 

//         //   nose
//         let nose_width = fc_sz/15;
//         let nose_height = fc_sz/30;
//         let x1 = posX-nose_width;
//         let y1 = posY+(fc_sz/5);

//         let x2 = posX;
//         let y2 = y1+nose_height;

//         let x3 = posX+nose_width;
//         let y3 = posY+(fc_sz/5);

//         p.stroke(nose_clr);
//         p.fill(nose_clr);
//         p.triangle(x1,y1,x2,y2,x3,y3);

//         // eyes
//         p.strokeWeight(fc_sz/40);
//         p.stroke("white");
//         //     left eye
//         p.fill(eye_rt);
//         p.ellipse(posX-fc_sz/4 ,posY,fc_sz/3.5)

//         //     right eye
//         p.fill(eye_lft);
//         p.ellipse(posX+fc_sz/4 ,posY,fc_sz/3.5)
//         }
//       }, "canvas-second");
//     // }
//   }
// }






// ################################################
// ################################################
// drafts #########################################
// let clicked = 0;

// // let features = ["fur_color" ,	"ear_1" ,	"ear_2" ,	"eye_rt" ,	"eye_lft" ,	"nose_clr"];
// window.addEventListener("load", ()=> {
//   createCat_community();

  
//   let refreshButton = document.getElementById("create_cat");
//     refreshButton.addEventListener('click',  function(){
//       if (clicked == 0)
//       {
//         createP5();
//         clicked = clicked+1;
//         console.log(clicked);
//         refreshButton.innerHTML = "restart";
//       }
//       else if (clicked > 0)
//       {
//        window.location.reload();
//       }
//     });



// });
// //     var apiUrl = 'https://sheetdb.io/api/v1/kiyrgijfayuro';
// //     var char_spec=[]
// //     fetch(apiUrl)
// //     .then(resp => resp.json())
// //     .then(data => {
// //         // console.log(data);
// //         console.log(data[data.length-1])

// //         // for (const [key, value] of Object.entries(data[0])) {

// //         //   if (key == "fur_color")
// //         //   {
// //         //     hair_color = value.toString();
// //         //     console.log(hair_color);
// //         //   }
// //         // }
// //         // dataIsReady = true;
// //     })
// // })

// // const button = document.getElementById('sub_button');
// // button.addEventListener("click", buttonPressed);

// // const buttonPressed = (e) => {
// //   console.log(e); //short form of event
// // }

// var canvas = null;
// function createP5 (){
//     // let canvasWidth = document.getElementById("widthInput").value;
//     // let canvasHeight = document.getElementById("heightInput").value;

//       let posX = 400/2;
//       let posY = 400/2;
//       let fc_sz = 200;
//       // current_user_cat = document.getElementById("cat_name").value;
//       let fur_color = document.getElementById("fur_color").value;
//       let ear_1 = document.getElementById("ear_1").value;
//       let ear_2 = document.getElementById("ear_2").value;
//       let eye_rt = document.getElementById("eye_rt").value;
//       let eye_lft = document.getElementById("eye_lft").value;
//       let nose_clr = document.getElementById("nose_clr").value;
      
//       let bkg_clr = "#F6F4D2";

    
//   {
//     if (canvas === null){
//       canvas = new p5(function (p) {
//         p.setup = function (){
//           p.createCanvas(400, 400);
//         }
//         p.draw = function(){
//           p.background(bkg_clr);
//           p.CreateCat();
//       }
      
//       p.CreateCat =function (){
//         //   ears
//         let ear_width = 50;
//         let ear_height = fc_sz/1.7;

//         p.strokeWeight(5);
//         p.strokeJoin(p.ROUND);

//         // ear left
//         let x1_a = posX-(fc_sz/1.7)
//         let y1_a = posY-ear_height;

//         let x2_a = posX;
//         let y2_a = posY - fc_sz/2.3;

//         let x3_a = posX-(fc_sz/2.1);
//         let y3_a = posY;

//         p.stroke(ear_1);
//         p.fill(ear_1);
//         p.triangle(x1_a,y1_a,x2_a,y2_a,x3_a,y3_a);

//         //  ear right
//         let x1_b = posX+(fc_sz/1.7) 
//         let y1_b = posY-ear_height;

//         let x2_b = posX;
//         let y2_b = posY - fc_sz/2.3;

//         let x3_b = posX+(fc_sz/2.1);
//         let y3_b = posY;

//         p.stroke(ear_2);
//         p.fill(ear_2);
//         p.triangle(x1_b,y1_b,x2_b,y2_b,x3_b,y3_b);

//         //   face
//         p.noStroke();
//         p.fill(fur_color);
//         p.ellipse(posX, posY, fc_sz); 

//         //   nose
//         let nose_width = fc_sz/15;
//         let nose_height = fc_sz/30;
//         let x1 = posX-nose_width;
//         let y1 = posY+(fc_sz/5);

//         let x2 = posX;
//         let y2 = y1+nose_height;

//         let x3 = posX+nose_width;
//         let y3 = posY+(fc_sz/5);

//         p.stroke(nose_clr);
//         p.fill(nose_clr);
//         p.triangle(x1,y1,x2,y2,x3,y3);

//         // eyes
//         p.strokeWeight(fc_sz/40);
//         p.stroke("white");
//         //     left eye
//         p.fill(eye_rt);
//         p.ellipse(posX-fc_sz/4 ,posY,fc_sz/3.5)

//         //     right eye
//         p.fill(eye_lft);
//         p.ellipse(posX+fc_sz/4 ,posY,fc_sz/3.5)
//         }
//       }, "canvas-div");
//     }
//   }
// }


// let heightt = window.innerHeight;
// let widthtt = window.innerWidth;
// console.log(window.innerWidth);
// var canvas_2 = null;

// function createCat_community (){
//     // let canvasWidth = document.getElementById("widthInput").value;
//     // let canvasHeight = document.getElementById("heightInput").value;
//       let width_full = window.innerWidth;
//       let height_full = window.innerWidth;



//       // let posX = c_w/2;
//       // let posY = c_h/2;
//       // let fc_sz = c_w/3;
//       // fur_color = "#413C58"; //document.getElementById("fur_color").value;
//       // ear_1 = "#413C58";
//       // ear_2 = "#A3C4BC";
//       // eye_rt = "#413C58";
//       // eye_lft = "#413C58";
//       // nose_clr = "#F2E7C9";
//       // bkg_clr = "#F6F4D2";

    
//   {
//     // if (canvas_2 === null){
//       canvas_2 = new p5(function (p) {

//         p.preload = function() {
//           const url = "https://sheetdb.io/api/v1/c9ua82nq52ccc";
//           features = p.loadJSON(url);
//         }

//         // define variables
//         let i=0;
//         let cats =[];

//         p.setup = function (){
//           //   count how many charecters  
//           while (features[i]) {
//             i++;
//           }
//           p.createCanvas(width_full, width_full*i);
//           // createCanvas(500, 450 * i);
//           let current_y_pos = width_full / 2;
//           for (let a = 0; a < i; a++) {

//             let posX = width_full / 2;
//             let posY = current_y_pos;
//             let fc_size = width_full/3;
//             let fur_color = features[a].fur_color;
//             let ear_1 = features[a].ear_1;
//             let ear_2 = features[a].ear_2;
//             let eye_lft = features[a].eye_lft;
//             let eye_rt = features[a].eye_rt;
//             let nose = features[a].nose_clr;
//             let name = features[a].user;

//           //   cats[a] = new p.Cat(
//             p.CreateCat(
//               posX,
//               posY,
//               fc_size,
//               fur_color,
//               ear_1,
//               ear_2,
//               eye_lft,
//               eye_rt,
//               nose,
//               name
//             );
//             current_y_pos += 400;
//           }
//         } //end of setup
//         p.draw = function(){
//           p.background("red");

//           ///////////////
//       }
      
//       p.CreateCat =function (
//         posX,
//         posY,
//         fc_sz,
//         fur_color,
//         ear_1,
//         ear_2,
//         eye_rt,
//         eye_lft,
//         nose_clr,
//         name
//       ) {
//         ///////////////////////////////////////////////////////
//         p.noStroke();
//         p.fill(fur_color);
//         p.ellipse(posX, posY, fc_sz);
//         ///////////////////////////////////////////////////////
//         }
        
//       }, "canvas-second");
//     // }
//   }
// }

