const container = document.getElementById('container')
const overlayCont = document.getElementById('overlayCont')
const overlayBtn = document.getElementById('overlayBtn')

overlayBtn.addEventListener('click', ()=>{
    container.classList.toggle('right-panel-active');
});
