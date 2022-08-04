
function draw(){
  this.style.border ='1px solid green'
  this.style.backgroundColor = 'black   ';
}

const layout = document.querySelector('.layout');

const gridContainer = document.querySelector('.grid-container');

for(let i=0; i<16**2; i++){
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  // gridItem.textContent='.';
  gridContainer.appendChild(gridItem);
}

const grids = document.querySelectorAll('.grid-item');
grids.forEach(grid => {
  grid.addEventListener('mouseover', draw)
})

