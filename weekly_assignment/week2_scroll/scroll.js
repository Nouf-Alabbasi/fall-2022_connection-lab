window.addEventListener('load', () => {
    let click = 0;
    console.log("page loaded");
    let value = 100;

    window.addEventListener("scroll", () =>{
        var w = window.scrollY;
        // var d = "translateY(" + w*2.25 + "px)";
        document.getElementById("square").style.transform="translateY(" + w/2.25 + "px)";
        if (w>30){
            for (let i = 0; i < 1; i+=0.01)
            {
                document.getElementById("greeting").style.opacity = i;
                console.log(i);
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
        
        console.log(w);

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

    document.getElementById("math_btn_minus").addEventListener('click', ()=>{
        if (value>0)
        {
            value -=1;
            document.getElementById("bubble_text_2").innerHTML = value;
        }
    });
    document.getElementById("math_btn_add").addEventListener('click', ()=>{
        value +=1;
        document.getElementById("bubble_text_2").innerHTML = value;
    });

});