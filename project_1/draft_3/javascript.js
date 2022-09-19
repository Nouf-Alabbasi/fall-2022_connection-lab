// based on https://asbnotebook.com/fetch-google-spread-sheet-data-using-javascript/

const sheetId = '1O6JPyFCfs4OPS5NSWxu3H6cqa-PM5uxz5VB8dJgQAq0';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'char_specifications';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`


const data = []
document.addEventListener('DOMContentLoaded', init)
 
const output = document.querySelector('.output')
 
function init() {
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            // console.log(rep)
 
            const colz = [];
            const tr = document.createElement('tr');
            //Extract column labels
            jsonData.table.cols.forEach((heading) => {
                if (heading.label) {
                    let column = heading.label;
                    colz.push(column);
                    console.log("print this",colz);
                    const th = document.createElement('th');
                    th.innerText = column;
                    tr.appendChild(th);
                }
            })
            output.appendChild(tr);
 
            //extract row data:
            jsonData.table.rows.forEach((rowData) => {
                const row = {};
                colz.forEach((ele, ind) => {
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
                })
                data.push(row);
                data.push("row");
            })
            processRows(data);
        })
}
  
function processRows(json) {
    json.forEach((row) => {
 
        const tr = document.createElement('tr');
        // Object.keys(row)= "thing";
        const keys = Object.keys(row);
     
        keys.forEach((key) => {
            const td = document.createElement('td');
            td.textContent = row[key];
            tr.appendChild(td);
        })
        output.appendChild(tr);
    })
}


// // the setup runs once
// // the draw runs multiple times 
// function setup() {
//     createCanvas(500, 400);
//     background("#f2faf4")
//     cursor('grab');
//   }
  
//   function draw() {
//     print("X:",mouseX,"Y:",mouseY)
        
//     let hair_med = "#591a06"
        
//     fill(hair_med)
//     ellipse(355, 60,30)
  
//   }
  
// // window.addEventListener('load', () => {
// // });