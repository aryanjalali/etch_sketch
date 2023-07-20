const etchSketch = document.querySelector("#etch-sketch");


fillEtch(16);

function fillEtch (gridSize) {
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