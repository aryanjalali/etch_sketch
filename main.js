const etchSketch = document.querySelector("#etch-sketch");

etchSketch.addEventListener('mouseover', randomColorEtch);
etchSketch.addEventListener('mousedown', randomColorEtch);

fillEtch(48);

function fillEtch (gridSize) {
     // Fill the etch-a-sketch with a grid
     for (let i = 0; i<gridSize; i++) {
          let rowDiv = document.createElement('div');
          rowDiv.className = 'row-grid';
          for (let i = 0; i<gridSize; i++) {
               let columnDiv = document.createElement('div');
               columnDiv.className = 'square';
               rowDiv.appendChild(columnDiv);
          }
          etchSketch.appendChild(rowDiv);
     }
}

function randomColorEtch (e) {
     // Prevents blocked symbol from appearing on click and drag
     e.preventDefault();

     // Generate random numbers and use them for background RGB colors
     let rgb = new Array(Math.floor(Math.random()*257), Math.floor(Math.random()*257), Math.floor(Math.random()*257));
     if (e.target.id != 'etch-sketch' && e.buttons === 1){
          e.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
     }
}