let hair_color;
let dataIsReady = false;

// let apiUrl = 'https://sheetdb.io/api/v1/kiyrgijfayuro';
// let char_spec=[]


window.addEventListener("load", ()=> {
    // fetch(apiUrl)
    // .then(resp => resp.json())
    // .then(data => {
    //     console.log(data);
    //     astros = data[1];
    //     dataIsReady = true;
    // })


    var apiUrl = 'https://sheetdb.io/api/v1/kiyrgijfayuro';
    var char_spec=[]

    fetch(apiUrl)
    .then( resp => resp.json())
    .then(data => {

        console.log(data);
        // astros = data.people;
        dataIsReady = true;
        console.log(dataIsReady);

        // console.log(data[3]);
        // for (const [key, value] of Object.entries(data[3])) {
        //   if (key == "hair_color")
        //   {
        //     hair_color = value.toString();
        //     console.log(hair_color);
        //   }
        // }
        // dataIsReady = true;


          
    })
    // .catch(err => {
    //     console.log(err);
    // });
})

if (dataIsReady){
  console.log("outside",hair_color);
}


// let cat1;
// function setup() {
//   createCanvas(window.innerWidth, window.innerHeight);
  
//   if (dataIsReady)
//   {
//     let cat_1_fur_color = hair_color;
//     let cat_1_ear_1 = "#E28413";
//     let cat_1_ear_2 = "#000022";
//     let cat_1_eye_lft = "#C42847";
//     let cat_1_eye_rt = "#C42847";
//     let cat_1_nose = "#DE3C4B"
//   //   let cat_1_posX = window.innerWidth/2;
//   //   let cat_1_posY = window.innerWidth/2;

//     let cat_1_posX = 400/2;
//     let cat_1_posY = 400/2;

//     let cat_1_fc_size = 200;
//     cat1 = new Cat(cat_1_posX,cat_1_posY, cat_1_fc_size,cat_1_fur_color,cat_1_ear_1, cat_1_ear_2, cat_1_eye_lft,cat_1_eye_rt,cat_1_nose) 
//   }
// }

// function draw() {
//   background(220);
//   if (dataIsReady)
//   {
//     cat1.draw();
//     print(mouseX,mouseY);
//   }
// }


// class Cat{
//   constructor(posX, posY, fc_sz, fur_color, ear_1,ear_2, eye_rt, eye_lft,nose_clr)
//   {
//     this.posX = posX;
//     this.posY = posY;
//     this.fc_sz = fc_sz;
//     this.fur_color = fur_color;
//     this.ear_1 = ear_1;
//     this.ear_2 = ear_2;
//     this.eye_rt = eye_rt;
//     this.eye_lft = eye_lft;
//     this.nose_clr = nose_clr;
//   }

//   draw(){
//     this.ears();
//     this.face();
//     this.eyes();
//     this.nose();
//   }

//   face(){
//     noStroke();
//     fill(this.fur_color);
//     ellipse(this.posX, this.posY, this.fc_sz); 
//   }
  
//   nose(){
    
//     let nose_width = this.fc_sz/15;
//     let nose_height = this.fc_sz/30;
//     let x1 = this.posX-nose_width;
//     let y1 = this.posY+(this.fc_sz/5);
  
//     let x2 = this.posX;
//     let y2 = y1+nose_height;
    
//     let x3 = this.posX+nose_width;
//     let y3 = this.posY+(this.fc_sz/5);
    
//     stroke(this.nose_clr);
//     fill(this.nose_clr);
//     triangle(x1,y1,x2,y2,x3,y3);
//   }

//   eyes(){
    
//     strokeWeight(this.fc_sz/40);
//     stroke("white");
// //     left eye
//     fill(this.eye_rt);
//     ellipse(this.posX-this.fc_sz/4 ,200,this.fc_sz/3.5)
    
// //     right eye
//     fill(this.eye_lft);
//     ellipse(this.posX+this.fc_sz/4 ,200,this.fc_sz/3.5)
//   }
  
//   ears(){
//     let ear_width = 50;
//     let ear_height = this.fc_sz/1.7;

//     strokeWeight(5);
//     strokeJoin(ROUND);
    
// //     ear left
//     let x1_a = this.posX-(this.fc_sz/1.7)
//     let y1_a = this.posY-ear_height;
  
//     let x2_a = this.posX;
//     let y2_a = this.posY - this.fc_sz/2.3;
    
//     let x3_a = this.posX-(this.fc_sz/2.1);
//     let y3_a = this.posY;
    
//     stroke(this.ear_1);
//     fill(this.ear_1);
//     triangle(x1_a,y1_a,x2_a,y2_a,x3_a,y3_a);

// //  ear right
//     let x1_b = this.posX+(this.fc_sz/1.7) 
//     let y1_b = this.posY-ear_height;
  
//     let x2_b = this.posX;
//     let y2_b = this.posY - this.fc_sz/2.3;
    
//     let x3_b = this.posX+(this.fc_sz/2.1);
//     let y3_b = this.posY;
    
//     stroke(this.ear_2);
//     fill(this.ear_2);
//     triangle(x1_b,y1_b,x2_b,y2_b,x3_b,y3_b); 
    
//     // strokeWeight(5);
//     // stroke("green");
//     // point(x1_b,y1_b)
//     // stroke("yellow");
//     // point(x2_b,y2_b)
//     // stroke("blue");
//     // point(x3_b,y3_b)
//   }
// }