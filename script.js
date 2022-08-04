function draw(){
  this.style.backgroundColor = 'rgb(32, 32, 32)';
}

const layout = document.querySelector('.layout');

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
layout.appendChild(gridContainer);

for(let i=0; i<16**2; i++){
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  // gridItem.textContent=i+1;
  gridContainer.appendChild(gridItem);
}

const grids = document.querySelectorAll('.grid-item');
grids.forEach(grid => {
  grid.addEventListener('mouseover', draw)
})

