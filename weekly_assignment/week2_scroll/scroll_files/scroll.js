window.addEventListener('load', () => {
    let click = 0;
    console.log("page loaded");
        
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

        if (w > 1100){
            document.getElementById("box").style.opacity = w/5000;
            document.getElementById("inst_1").style.transform="translateX(" + w/20 + "px)";
            // document.getElementById("inst_2").style.transform="translateX(" - w/10 + "px)";
        }
        else{
            // for (let i = 0.17; i >= -2; i =- 0.01)
            // {
                document.getElementById("box").style.opacity=0;
            // }
        }
        
        console.log(w);

        if (w <5175.5)
        {
            document.getElementById("box").style.backgroundImage = "none";
        }

    });

    document.getElementById("button").addEventListener('click', ()=>{
        click +=1;
        if (click%2 == 0)
        {
            document.getElementById("box").style.backgroundImage = "none";
        }
        else
        {
            document.getElementById("box").style.backgroundImage = "url('confetti.png')";
        }
    });

});