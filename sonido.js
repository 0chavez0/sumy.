
window.addEventListener('load', function() {
    var audio = document.getElementById('background-music');
    

    audio.play().then(function() {
        console.log("Audio reproduciéndose.");
    }).catch(function(error) {
        console.log("La reproducción automática fue bloqueada por el navegador. Se requiere interacción del usuario.");
       
    });
});