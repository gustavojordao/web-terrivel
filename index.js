function init(){
    var tipo_pedras_sortidas = document.getElementById('tipo_pedras_sortidas');
    var tipo_pedras = document.getElementById('tipo_pedras');

    var tipos_pedra = [ "marroada","ametista","topazio","espinela" ];

    tipo_pedras_sortidas.addEventListener('change',
        function(e){
            if(e.target.checked){
                tipo_pedras.value = tipos_pedra[Math.floor(Math.random()*4)];
            }
        }
    );

}

init();
