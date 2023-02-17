const cb = document.querySelector('#cb')
const div = document.querySelector("#box")
cb.addEventListener('click',function(){
   // document.body.style.backgroundColor='olive'

   const r= Math.floor(Math.random()*255);
   const g = Math.floor(Math.random()*255);
   const b = Math.floor(Math.random()*255);
    const newColor = `rgb(${r},${g},${b})`;
    box.style.backgroundColor=newColor;

})