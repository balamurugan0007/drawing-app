var c=document.getElementById('mycan')
var ctx=c.getContext('2d');

let color ;
let colorcode;


// mouse positionss 
const canvasoffsetX=c.offsetLeft;
const canvasoffsetY=c.offsetTop;
c.width=window.innerWidth-canvasoffsetX;
c.heigt=window.innerHeight-canvasoffsetY;
let linewidth=5;
let startX;
let startY;
let isPainting;


c.addEventListener('mousedown',(e)=>{
    isPainting=true;
    startX=e.clientX;
    startY=e.clientY;
    color=document.getElementById('colors').value;
});
c.addEventListener('mouseup',(e)=>{
    isPainting=false;
    ctx.stroke();
    ctx.beginPath();
})
c.addEventListener('mousemove',(e)=>{
    if(!isPainting){
        return;
    }
    ctx.lineWidth=linewidth;
    ctx.linecap='round';
    console.log(color)
    ctx.strokeStyle =color;
    

    ctx.lineTo(e.clientX-canvasoffsetX,e.clientY);
    ctx.stroke()
});