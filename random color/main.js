const colors = ["green", "red", "rgb(133,122,200)","#f15025"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn.addEventListener("click",function (){
    // get random number between 0-3
    // 
    let hexcolor = "#";
    for(let i = 0 ; i < 6 ; i++) {
        hexcolor += hex[getrandomcolor()];
    }
    color.textContent=hexcolor;
    document.body.style.backgroundColor = hexcolor;
                    
});
function getrandomcolor (){
    return Math.floor(Math.random()* hex.length)
}

// function getrandomnumber (){
//     return Math.floor(Math.random(colors)*colors.length);
// }
//  console.log(hex.length)