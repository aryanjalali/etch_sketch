const etchSketch = document.querySelector("#etch-sketch");

etchSketch.addEventListener('mouseover', blackColorEtch);
etchSketch.addEventListener('mousedown', blackColorEtch);

fillEtch(16);

function fillEtch (gridSize, blackness) {
     // Fill the etch-a-sketch with a grid
     for (let i = 0; i<gridSize; i++) {
          let rowDiv = document.createElement('div');
          rowDiv.className = 'row-grid';
          for (let i = 0; i<gridSize; i++) {
               let columnDiv = document.createElement('div');
               columnDiv.className = 'square';
               columnDiv.blackness = 0;
               rowDiv.appendChild(columnDiv);
          }
          etchSketch.appendChild(rowDiv);
     }
}

function randomColorEtch (e) {
     // Prevents blocked symbol from appearing on click and drag
     e.preventDefault();

     // Generate random numbers and use them for background RGB colors
     let rgb = new Array(Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256));
     // First condition ensures the entire etch-sketch is not colored at once
     if (e.target.id != 'etch-sketch' && e.buttons === 1){
          e.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
     };
}

function blackColorEtch (e) {
     e.preventDefault();

     let blackness = 250 - e.target.blackness;
     if (e.target.id != 'etch-sketch' && e.buttons === 1 && blackness != 0){
          e.target.style.backgroundColor = `rgb(${blackness}, ${blackness}, ${blackness})`;
          e.target.blackness += 25;
     };
}