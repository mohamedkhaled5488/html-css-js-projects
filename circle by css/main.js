// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// myRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText);
//     let jsData = JSON.parse(this.responseText);
//     // console.log(jsData);
//     for (let i = 0; i < jsData.length; i++) {
//       let div = document.createElement("div");
//       div.classList="mydiv"
//       let repoName = document.createTextNode(jsData[i].full_name);
//       div.appendChild(repoName);
//       document.body.appendChild(div);
//     }
//   }
// };
fetch("https://api.github.com/users/elzerowebschool/repos").then((resolve=>{return resolve.json()})).then((second)=>{
    second.length=2;
    console.log(second);
   return second ;
}).then((third)=>{console.log(third[1].name)})