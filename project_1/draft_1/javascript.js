
// the setup runs once
// the draw runs multiple times 
function setup() {
    createCanvas(500, 400);
    background("#f2faf4")
    cursor('grab');
  }
  
  function draw() {
    print("X:",mouseX,"Y:",mouseY)
    let dwn = 10
    // let up = -4
        
    let hair_med = "#591a06"
    let hair_light = "#8f5340"
    let skin_base = "#e5b887"
    let skin_shdw = "#bd8c59"
    let skin_light = "#de9c76"
    let lips = "#8f3215"
    
    //hair
        // back of head hair
        fill(hair_med)
        
        //right
        arc(350, 210+dwn,250,180,radians(30), radians(190) )
        stroke(hair_med)
        triangle(390, 235+dwn, 360, 190+dwn, 325, 200+dwn);
        triangle(362, 159+dwn, 365, 193+dwn, 325, 200+dwn);
        noFill()
        arc(510, 174+dwn,290,200,radians(125), radians(180) )
        
        //left
        fill(hair_med)
        stroke(hair_med);
        triangle(56, 245+dwn, 127, 190+dwn, 140, 212+dwn);
        triangle(95, 215+dwn, 118, 160+dwn, 140, 220+dwn);
        arc(150, 210+dwn,250,180,radians(40), radians(160) )
        noFill()
        stroke(hair_med)
        arc(-23, 160+dwn,270,200,radians(0), radians(55) )
        
    //face
        //frame
        noFill()
        noStroke()
        
        stroke(skin_base)
        fill(skin_base)
        // arc(250, 180+dwn,220,200, radians(0),radians(180))
        arc(240, 180+dwn,220,200, radians(60),radians(120))
        arc(235, 150+dwn,220,260, radians(90),radians(180))
        arc(230, 157+dwn,220,270, radians(-10),radians(60))
    
        //fill
        ellipse(230, 120+dwn, 240, 150);
        ellipse(280, 195+dwn, 70, 150);
        
        // nose, chin, and lips
        noFill()
        noStroke()
        
        //nose
        stroke(skin_shdw)
        strokeWeight(7)
        arc(250, 97+dwn,220,270, radians(91),radians(99))
        arc(225, 100+dwn,220,270, radians(80),radians(88))
        // arc(250, 97+dwn,220,270, radians(90),radians(100))
    
        strokeWeight(3)
        stroke(skin_light)
        arc(250, 95+dwn,220,270, radians(90),radians(100))
    
    
        // line(x1, y1, x2, y2)
        line(240, 257+dwn, 250, 257+dwn)
        
        // lips
        noStroke()
        fill(lips)
        // triangle(x1, y1, x2, y2, x3, y3)
        // triangle(235, 250+dwn, 230, 240+dwn, 260, 245+dwn);
        triangle(231, 250+dwn, 230, 240+dwn, 270, 248+dwn);
    
        //neck
        fill(skin_base)
        rect(213, 275+dwn, 65, 55);
        arc(245.5, 330+dwn, 65, 55, radians(0),radians(180))
    
        
    //hair
        //left
        // hair in the back
        noStroke()
        // stroke("red")
        fill(hair_light)
            //hor, ver      ,  w ,  h
        arc(100, 100+dwn, 100, 100, radians(90), radians(190))
    
        //hair in the front
        noStroke()
        fill(hair_med)
        arc(110, 90+dwn, 90, 110, radians(90), radians(200))
        arc(125, 111+dwn, 150, 130, radians(90), radians(140))
        arc(160, 60+dwn, 150, 130, radians(90), radians(200), CHORD)
        ellipse(125,110+dwn,40,50)
        arc(250,70+dwn,200,150,radians(180), radians(0))
        arc(180,75+dwn,150,100,radians(10), radians(120))
        rect(155, 65, 80, 55)
    
    
    
        // the inverted arc
        noFill()
        stroke(hair_med)
        strokeWeight(5)
        arc(150, -6+dwn, 150, 130, radians(86), radians(140))
        strokeWeight(20)
        arc(150, 6+dwn, 150, 130, radians(86), radians(140))
    
        noStroke()
        fill(hair_med)
        rect(120, 85, 60, 43)
    
        // outlines left
        noFill(0)
        stroke(hair_light)
        strokeWeight(4);
        arc(180,75+dwn,150,100,radians(10), radians(120))
        arc(160,70+dwn,150,100,radians(10), radians(100))
        arc(230, 70+dwn,150,100,radians(135), radians(150))
        arc(166, 53+dwn,150,100,radians(50), radians(80))
        arc(160, 60+dwn, 150, 130, radians(150), radians(200))
        arc(146, -10+dwn, 150, 130, radians(86), radians(140))
    
    
        //right
    
        fill(hair_med)
        stroke(hair_med)
        strokeWeight(14);
        arc(340, 70+dwn, 150, 130, radians(20), radians(70))
        noFill()
        arc(410, 30+dwn, 150, 130, radians(90), radians(140))
    
        // fly away hair
        arc(405,-10+dwn, 200, 130, radians(110), radians(155))
    
        strokeWeight(10)
        arc(335,6+dwn, 150, 130, radians(50), radians(100))
        
        noStroke()
        fill(hair_med)
        arc(235, 70+dwn,50,50,radians(0), radians(90) )
        ellipse(355, 60+dwn,30)
        
        // outlines right
        strokeWeight(4);
        arc(320,35+dwn,150,150,radians(60), radians(170))
        arc(445, 102+dwn,270,250,radians(90), radians(180), CHORD )
        stroke(hair_med)
        triangle(375, 160+dwn, 346, 100+dwn, 305, 100+dwn);
        
        noFill()
        stroke(hair_med)
        arc(490, 30+dwn,300,400,radians(110), radians(170) )
        
        noFill()
        stroke(hair_med)
        // strokeWeight(10)
        arc(440, 100+dwn,270,250,radians(100), radians(180) )
    
  
  }
  
window.addEventListener('load', () => {
});