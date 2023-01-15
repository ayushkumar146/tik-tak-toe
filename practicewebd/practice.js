let m=new Audio("music.mp3");
let t=new Audio("ting.mp3");
let g=new Audio("gameover.mp3");
let tu="X";
let ig=false;
let q=prompt("enter ur name");
document.querySelector('.p1').getElementsByTagName('h2')[0].innerText=q;
let q1=prompt("enter ur name");
document.querySelector('.p2').getElementsByTagName('h2')[0].innerText=q1;
const ct=()=>{
    if(tu==="X"){
        return "0";
    }
    else{
        return "X";
    }
}
const cw=()=>{
    let bt = document.getElementsByClassName('bt');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((bt[e[0]].innerText === bt[e[1]].innerText) && (bt[e[2]].innerText === bt[e[1]].innerText) && (bt[e[0]].innerText !== "") ){
            document.querySelector('.t').innerText = bt[e[0]].innerText + " Won"
            ig = true;
            g.play();
            document.querySelector('.gif').getElementsByTagName('img')[0].style.width="auto";
            document.querySelector('.giff').getElementsByTagName('img')[0].style.width="0";
          
            // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            // document.querySelector(".line").style.width = "20vw";
        }
    })
}


let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let bt=element.querySelector('.bt');
    element.addEventListener('click',()=>{
        if(bt.innerText===''){
            bt.innerText=tu;
            tu= ct();
            t.play();
            cw(); 
            if(g!==0){
            document.getElementsByClassName("t")[0].innerText="turn for"+" "+tu;
        }
        }
    })
})

reset.addEventListener('click', ()=>{
    let q=prompt("enter ur name");
document.querySelector('.p1').getElementsByTagName('h2')[0].innerText=q;
let q1=prompt("enter ur name");
document.querySelector('.p2').getElementsByTagName('h2')[0].innerText=q1;
    t.play();
    let bts = document.querySelectorAll('.bt');
    Array.from(bts).forEach(element => {
        element.innerText = "";
    });
    tu = "X"; 
    ig = false;
    // document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("t")[0].innerText  = "Turn for " + tu;
    document.querySelector('.gif').getElementsByTagName('img')[0].style.width="0px";
    document.querySelector('.giff').getElementsByTagName('img')[0].style.width="300px";
})