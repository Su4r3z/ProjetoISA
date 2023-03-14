
// MUDAR COR


const btn = document.getElementById('btn-color');
const btn2 = document.getElementById('btn-color2');
const title = document.getElementById('title');
const defaultColor = document.getElementById('btn-default');

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#f9b';
    title.style.backgroundColor = '#f9b';
});
btn2.addEventListener('click', () => {
    document.body.style.backgroundColor = '#bf7';
    title.style.backgroundColor = '#bf7';
});
defaultColor.addEventListener('click', () => {
    document.body.style.backgroundColor = '#fff';
    title.style.backgroundColor = '#000';
});


let button = document.getElementById('button')
let fundoAzul = false


function mudarFundo() {
    if(fundoAzul == false) {
        fundoAzul = true;
    
        document.body.style.background = '#40e0d0';
        button.style.background = '#000';
        button.style.color = '#40e0d0';
    } else {
        fundoAzul = false

        document.body.style.background = '#717';
        button.style.background = '#000';
        button.style.color = '#717';
    }
}


//  CONTADOR DE PALAVRAS