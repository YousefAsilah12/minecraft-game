import {
  soundsPlayer
} from "./sound.js";
const loadingScreen = document.getElementById("loading-screen");
const loadingText = document.getElementById("loading-text");
const loadingBar = document.getElementById("loading-bar");
const maps = document.querySelectorAll('.map-img');
let mapSelected = getSelectedMap();
console.log(mapSelected);
let selected = false;




document.querySelector(".startGame").addEventListener("click", (e) => {
  debugger
  if (selected) {
    let location
    if (Number(mapSelected) === 1) {
      location = "/game.html"
    } else if (Number(mapSelected) === 2) {
      location = "/game.html"
    } else if (Number(mapSelected) === 3) {
      location = "/game.html"
    }
    soundsPlayer("button")
    showLoading("Map");
    setTimeout(function () {
      window.location.href = location;
    }, 2000);

  } else {
    alert("select map first")
  }
})


// soundsPlayer("menuMusic",true);
document.querySelector(".btn").addEventListener("click", () => {

})


function getSelectedMap() {
  maps.forEach(map => {
    map.addEventListener('click', function () {
      const parentDiv = this.parentElement;
      const allMaps = document.querySelectorAll('.map');

      allMaps.forEach(m => {
        m.classList.remove('map-selected');
      });

      parentDiv.classList.add('map-selected');
      mapSelected = map.getAttribute('data-image-id');
      console.log(mapSelected);
      selected = true;
      return mapSelected;

    });
  });

}

function showLoading(loadingName) {
  loadingText.innerText = `Loading ${loadingName}...`;
  loadingScreen.style.display = "flex";

  let width = 0;
  const interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      loadingScreen.style.display = "none";
      return;
    }
    width += 40;
    loadingBar.style.width = `${width}%`;
  }, 500);
}