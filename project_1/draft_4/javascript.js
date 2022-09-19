// based on https://www.geeksforgeeks.org/how-to-make-charts-using-data-from-google-sheets-in-javascript/


var hair_color;

function getData(){
    var apiUrl = 'https://sheetdb.io/api/v1/kiyrgijfayuro';
    var char_spec=[]

    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        for(let i =0; i <data.length;i++){
            char_spec.push(data[i]);
        }

        // print the content of the char_spec array
        // for(let i =0; i <char_spec.length;i++){
        //     // console.log("spec",i,char_spec[i]);
        //     for (const prop in char_spec[i]) {
        //         console.log(`data[i].${prop} = ${data[i][prop]}`);
        //     }
        // }

        // create an array for each character
        var one_char=[]
        for (const prop in char_spec[3]) {
            one_char.push(data[3][prop]);
        }

        // //check the content of the array
        // for(let i =0; i <one_char.length;i++){
        //     console.log(one_char[i]);
        // }


        hair_color = one_char[1];
        console.log(hair_color);
        
          
    }).catch(err => {
        console.log(err);
    });
}
console.log(hair_color);