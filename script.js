function draw(){
  let bg = this.style.backgroundColor.split(',')[1]-100;
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b =Math.floor(Math.random()*255) ;
  this.style.border =(bg<0)? '1px solid green'
    :`1px solid rgb(${r},${g}, ${b} )`
  this.style.backgroundColor = `rgb(${bg},${bg}, ${bg} )`;
}
function resetHover(){
  this.style.color='green';
  this.style.border='1px solid green'
  this.addEventListener('mouseout',()=>{
    this.style.color='#922b3e';
  this.style.border='1px solid #922b3e'
  })
}
function resizeHover(){
  this.style.color='#922b3e';
  this.style.border='1px solid #922b3e'
  this.addEventListener('mouseout',()=>{
    this.style.color='green';
  this.style.border='1px solid green'
  })
}
function resetClick(){
  grids.forEach(grid => {
    grid.style.border ='1px solid #922b3e'
    grid.style.backgroundColor = 'rgb(220, 220, 220)';
  })
}
function resizeClick(){
  let size = +prompt('Enter Size between 16 to 100');
  if(typeof size != 'number' || size<16 || size>100){
    alert('Please enter valid input between 16-100!');
    resizeClick();
  }
  gridContainer.innerHTML='';
  play(size);
  gridContainer.style.gridTemplateColumns= `repeat(${size}, auto)`;
  
}

function play(size){
  for(let i=0; i<size**2; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.background='rgb(250, 250, 250)'
    gridContainer.appendChild(gridItem);
  }
  
  grids = document.querySelectorAll('.grid-item');
  grids.forEach(grid => {
    grid.addEventListener('mouseover', draw)
  })
  
  resetBtn.addEventListener('mouseover', resetHover);
  resizeBtn.addEventListener('mouseover', resizeHover);
  resetBtn.addEventListener('click', resetClick);
  resizeBtn.addEventListener('click', resizeClick);
}
let grids = document.querySelectorAll('.grid-item');
const layout = document.querySelector('.layout');

const gridContainer = document.querySelector('.grid-container');

const resetBtn = document.querySelector('.reset');
const resizeBtn = document.querySelector('.resize');

play(16);




