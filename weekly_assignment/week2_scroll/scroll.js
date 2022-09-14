window.addEventListener('load', () => {
    let click = 0;
    console.log("page loaded");
    let value = 0;


    // generate random number within a range from https://www.educative.io/answers/how-to-generate-a-random-number-between-a-range-in-javascript
    function generateRandom(min , max) {
        // find diff
        let difference = max - min;
        // generate random number 
        let rand = Math.random();
        // multiply with difference 
        rand = Math.floor( rand * difference);
        // add with min value 
        rand = rand + min;
        return rand;
    };


    //randomly position numbers across the page
    let x_pos_1 = generateRandom(50 , window.screen.height/2);
    let y_pos_1 = generateRandom(-5000,-5000/2);

    let x_pos_2 = generateRandom(window.screen.height/2 , window.screen.height-50);
    let y_pos_2 = generateRandom(-5000/2 , window.screen.height);

    let font_size_2 = generateRandom(50 , 100);
    let font_size_1 = generateRandom(50 , 100);

    let random_value_1 = generateRandom(1 , 15);
    let random_value_2 = generateRandom(1 , 15);

    let sum = random_value_1 + random_value_2;

    // place the numbers randomly on the page
    document.getElementById("number_1").style.left = x_pos_1+"px";
    document.getElementById("number_1").style.bottom = y_pos_1+"px";

    document.getElementById("number_2").style.left = x_pos_2+"px";
    document.getElementById("number_2").style.bottom = y_pos_2+"px";

    document.getElementById("number_2").style.fontSize = font_size_2+"px";
    document.getElementById("number_2").style.fontSize = font_size_1+"px";

    // randomize the numbers
    document.getElementById("number_1").innerHTML = random_value_1;
    document.getElementById("number_2").innerHTML = random_value_2;


    window.addEventListener("scroll", () =>{
        var w = window.scrollY;
        // var d = "translateY(" + w*2.25 + "px)";
        document.getElementById("square").style.transform="translateY(" + w/2.25 + "px)";
        if (w>30){
            for (let i = 0; i < 1; i+=0.01)
            {
                // greeting appears after user scrolls a bit
                document.getElementById("greeting").style.opacity = i;
                // console.log(i);
            }
        }

        // darken the screen
        if (w > 1100){
            document.getElementById("box").style.opacity = w/5000;
            document.getElementById("inst_1").style.transform="translateX(" + w/20 + "px)";
            // document.getElementById("inst_2").style.transform="translateX(" - w/10 + "px)";
        }
        // lighten the screen
        else{

            document.getElementById("box").style.opacity=0;

        }
        
        // console.log(w);

        // close the "light" when you scroll off
        if (w <5075.5)
        {
            document.getElementById("box").style.backgroundImage = "none";
            document.getElementById("person").style.opacity = 0;
            document.getElementById("wall_2").style.opacity = 0;
            document.getElementById("wall").style.opacity = 0;
        }

    });

    // button to "turn on the light"
    document.getElementById("button").addEventListener('click', ()=>{
        click +=1;
        if (click%2 == 0)
        {
            document.getElementById("button").style.backgroundColor = "rgb(146, 220, 229)";
            document.getElementById("wall_2").style.opacity = 0;
            document.getElementById("math_btn_minus").style.opacity = 0;
            document.getElementById("math_btn_add").style.opacity = 0;
            document.getElementById("wall").style.opacity = 0;
            document.getElementById("person").style.opacity = 0;
            document.getElementById("box").style.backgroundImage = "none";
        }
        else
        {
            document.getElementById("math_btn_minus").style.opacity = 1;
            document.getElementById("math_btn_add").style.opacity = 1;
            document.getElementById("button").style.backgroundColor = "rgb(58, 141, 152)";
            document.getElementById("wall_2").style.opacity = 1;
            document.getElementById("wall").style.opacity = 1;
            document.getElementById("person").style.opacity = 1;
            // document.getElementById("box").style.backgroundImage = "url('confetti.png')";
        }
    });

    // add and subtract to the number if the user gets the right answer the text in the bubble changes to say that user has won
    document.getElementById("math_btn_minus").addEventListener('click', function sub(){
        if (value>0)
        {
            value -=1;
            document.getElementById("bubble_text_2").innerHTML = value;

            // check if the answer is right
            if(document.getElementById("bubble_text_2").innerHTML == sum)
            {
                document.getElementById("wall_text_1").innerHTML = "congratulation!! you found the numbers and got the sum right!"; 
                document.getElementById("wall_text_2").innerHTML = "the right answer is: " + sum;
                this.removeEventListener('click', sub);
            }
        }
    });
    document.getElementById("math_btn_add").addEventListener('click', function add() {
        value +=1;
        document.getElementById("bubble_text_2").innerHTML = value;

        // check if the answer is right
        if(document.getElementById("bubble_text_2").innerHTML == sum)
        {
            document.getElementById("wall_text_1").innerHTML = "congratulation!! you found the numbers and got the sum right!"; 
            document.getElementById("wall_text_2").innerHTML = "the right answer is: " + sum;
            this.removeEventListener('click', add);
        }
    });

});