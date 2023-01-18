import {Rainbow} from './rainbowvis.js'

window.onload = () => {
    var root = document.getElementById("container").querySelectorAll('.tier');
    var len = root.length;
    var rainbow = new Rainbow();
    rainbow.setNumberRange(0, len-1);
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    let startColor = params.start_color || "blue";
    var endColor = params.end_color || "red";
    rainbow.setSpectrum(startColor, endColor);

    for (let i = 0; i < len; i++) {
        root[i].querySelector(".tier-rank").style.background = "#" + rainbow.colourAt(i)
    }
}
