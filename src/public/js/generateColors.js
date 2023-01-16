import {Rainbow} from './rainbowvis.js'
window.onload = () => {
    var root = document.getElementById("container").querySelectorAll('.tier');
    var len = root.length;
    var rainbow = new Rainbow();
    rainbow.setNumberRange(1, len);
    var startColor = "blue";
    var endColor = "green";
    rainbow.setSpectrum(startColor, endColor);

    for (let i = 0; i < len; i++) {
        root[i].querySelector(".tier-rank").style.background = "#" + rainbow.colourAt(i)
    }
}
