const btn = document.querySelector('button');
const color = document.querySelectorAll('.color');
const hex = document.querySelectorAll('.hex');

btn.addEventListener('click', generateColors);


function generateColors() {
    for(let i = 0; i < color.length; i++) {
  // Generer une couleur au hasard :      
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
  // Ajouter la couleur au background:  
        color[i].style.background = "#" + randomColor;
  // Ajouter l'animation : 
        color[i].classList.add('fade-in');
        setTimeout(() => color[i].classList.remove('fade-in'), 400);
 // Ajouter le code hex: 
        hex[i].innerHTML = randomColor;
    }
}

generateColors();