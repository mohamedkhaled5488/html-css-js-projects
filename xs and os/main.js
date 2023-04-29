const mycell = document.querySelectorAll('[data-cell]');
const myx ="x";
const myy ="y";
const myparentdivmassage = document.querySelector(".winningmassage");
const mymassge = document.querySelector('[data-winning-text-massage]');
const myborder =document.getElementById('board');
const restartButton = document.getElementById('restartbutton')
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
let circleturn
startgame()
restartButton.addEventListener('click',startgame)
function startgame(){
    circleturn =false;
    mycell.forEach(cell => {
        cell.classList.remove(myx);
    cell.classList.remove(myy);
    cell.removeEventListener('click', handclick)
    myparentdivmassage.classList.remove('show')
        cell.addEventListener('click',handclick,{once:true})
    })
    setboardhoverclass()
    
}
function handclick(e){
    const cell= e.target;
    const currtentclass = circleturn?myy:myx;
    placemark(cell,currtentclass)
    if(checkWin(currtentclass)){
        endgame(false)
    }if (isdraw()) {
        endgame(true)
    } else {
        swapturn()
    setboardhoverclass()
    }
    
}
function endgame(draw){
    if(draw){
        mymassge.innerHTML=`draw!`

    }else{
        mymassge.innerHTML=`${circleturn?"o's":"x's"}wins!`
    }
    myparentdivmassage.classList.add('show')
}
function isdraw (){
return [...mycell].every(cell=>{
    return cell.classList.contains(myx)||cell.classList.contains(myy);
})
}
function placemark(cell,currtentclass){
    cell.classList.add(currtentclass)
}
function swapturn (){
    circleturn=!circleturn
}
function setboardhoverclass(){
    myborder.classList.remove(myx);
    myborder.classList.remove(myy);
    if(circleturn){
        myborder.classList.add(myy)
    }else{
        myborder.classList.add(myx)
    }
}
function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        return mycell[index].classList.contains(currentClass)
      })
    })
  }


console.log(myparentdivmassage)