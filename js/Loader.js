console.log('Loader.js');

let scriptsToLoad = [
    'js/Utils.js',
    'js/Board.js',
    'js/Piece.js'
];

let stylesToLoad = [
    'css/main.css',
    'css/canvas.css'
];

scriptsToLoad.forEach(script => {
    let name = script.split('/').pop();
    let time = performance.now();
    loadScript(script, () => {
        console.log(name + ' loaded after ' + (performance.now() - time).toFixed(2) + 'ms.');
    });
});
stylesToLoad.map(style => {
    let name = style.split('/').pop();
    let time = performance.now();
    loadStyle(style, () => {
        console.log(name + ' loaded after ' + (performance.now() - time).toFixed(2) + 'ms.');
    });
});

function loadScript(path, callback = () => {}, async = false) {
    let script = document.createElement('script');
    script.async = async;
    script.type = 'text/javascript';
    script.src = path;
    script.onreadystatechange = callback;
    script.onload = callback;
    document.currentScript.parentElement.appendChild(script);
    return script;
}

function loadStyle(path, callback = () => { }, async = false) {
    let style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = path;
    style.media = 'screen';
    style.onreadystatechange = callback;
    style.onload = callback;
    style.async = async;
    document.currentScript.parentElement.appendChild(style);
    return style;
}