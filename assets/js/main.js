function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido.');
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (var i = 0; i < listaDeTeclas.length; i++) {
    
    const tecla = listaDeTeclas[i];
    const som = tecla.classList[1];

    tecla.onclick = () => {
        tocaSom(`#som_${som}`);
    };

    tecla.onkeydown = (e) => {
        if(e.code === "Space" || e.code === "Enter") {
            tecla.classList.add('ativa'); 
        }
             
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
    
}; 
