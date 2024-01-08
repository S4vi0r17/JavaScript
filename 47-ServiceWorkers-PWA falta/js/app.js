if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
        .then(res => console.log('serviceWorker cargado correctamente', res))
        .catch(err => console.log('serviceWorker no se ha podido registrar', err));
}else{
    console.log('No puedes usar los serviceWorker en tu navegador');
}