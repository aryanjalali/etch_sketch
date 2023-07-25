const etchSketch = document.querySelector('#etch-sketch');
const blackButton = document.querySelector('#black-btn');
const rainbowButton = document.querySelector('#rainbow-btn');
const gridSizeButton = document.querySelector('#size-submit');
let etchState = 'black'; // Keeps track of whether the etchsketch is black or rainbow
let gridSize = 16; 

etchSketch.addEventListener('mouseover', blackColorEtch);
etchSketch.addEventListener('mousedown', blackColorEtch);

blackButton.addEventListener('click', changeToBlack);
rainbowButton.addEventListener('click', changeToRainbow);
gridSizeButton.addEventListener('click', resizeEtch);

fillEtch(gridSize);

function fillEtch (size, blackness) {
     // Fill the etch-a-sketch with a grid
     for (let i = 0; i<size; i++) {
          let rowDiv = document.createElement('div');
          rowDiv.className = 'row-grid';
          for (let i = 0; i<size; i++) {
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

function changeToBlack (e) {
     if (etchState === 'rainbow'){
          etchState = 'black';
          etchSketch.removeEventListener('mouseover', randomColorEtch);
          etchSketch.removeEventListener('mousedown', randomColorEtch);

          etchSketch.addEventListener('mouseover', blackColorEtch);
          etchSketch.addEventListener('mousedown', blackColorEtch);

          resetEtch();
     };     
}

function changeToRainbow (e) {
     if (etchState === 'black'){
          etchState = 'rainbow';
          etchSketch.removeEventListener('mouseover', blackColorEtch);
          etchSketch.removeEventListener('mousedown', blackColorEtch);

          etchSketch.addEventListener('mouseover', randomColorEtch);
          etchSketch.addEventListener('mousedown', randomColorEtch);

          resetEtch();
     };     
}

function resizeEtch (e){
     e.preventDefault();

     let userSize = Number(`${document.querySelector('#size-input').value}`);
     if (Number.isInteger(userSize) && userSize >= 4 && userSize <= 100) {
          gridSize = userSize;
          
          resetEtch();
     } else {
          let errorMessageArea = document.querySelector('#error-msg');

          errorMessageArea.classList.add('error');
          errorMessageArea.innerHTML = 'Please enter integer between 4 and 100 (inclusive)';
          setTimeout(() => {
               errorMessageArea.innerHTML = '';
               errorMessageArea.classList.remove('error');
          }, 10000);
     };
}

function resetEtch(){
     while (etchSketch.hasChildNodes()) {
          etchSketch.removeChild(etchSketch.firstChild);
     };
     fillEtch(gridSize);
}