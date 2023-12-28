const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const idiomaUsuario = navigator.language || navigator.userLanguage;

    const SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;

    const recognition = new SpeechRecognition();

    // Establecer el idioma para el reconocimiento de voz
    recognition.lang = idiomaUsuario;

    // start recognition
    recognition.start();

    // This runs when the speech recognition service starts
    recognition.onstart = function () {
        salida.classList.add('mostrar');
        salida.innerHTML = "Escuchando...";
    };

    recognition.onspeechend = function () {
        salida.innerHTML = "Se detuvo de ejecutar";
        recognition.stop();
    };

    // This runs when the speech recognition service returns result
    recognition.onresult = function (e) {
        console.log(e.results);

        var transcript = e.results[0][0].transcript;
        var confidence = e.results[0][0].confidence;

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad:  ${parseInt(confidence * 100)} %`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    };
}