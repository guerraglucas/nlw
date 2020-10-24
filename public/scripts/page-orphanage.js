// variable for locking map zoom (will be referenced as argument on the map creation funcion below)
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//creating variable for lat and lng
const spanLat = document.querySelector("span[data-lat]");
const spanLng = document.querySelector("span[data-lng]");
// create map
const map = L.map("mapid", options).setView(
  [spanLat.dataset.lat, spanLng.dataset.lng],
  15
);
// creat and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker

L.marker([spanLat.dataset.lat, spanLng.dataset.lng], { icon }).addTo(map);

// image gallery

function selectImage(event) {
  const button = event.currentTarget;

  //remover todas as classes active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  }); // essa é uma função "arrow" nova do javascrpit ES6, porém essa função pode ser feita de forma "passo a passo" conforme abaixo

  // buttons.forEach(removeActiveClass)

  // function removeActiveClass(button) {
  //   button.classList.remove("active")
  // }

  // selecionar imagem clicada
  const image = button.children[0]; // coloca na variavel image, o filho do elemento button, que no html, é a img
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o container de imagem clicada
  imageContainer.src = image.src; // o objeto possui atributo "source" assim como os elementos do html, aqui trocamos o source da imagem inicial para a imagem clicada

  // adicionar a classe active para o botao clicado
  button.classList.add("active");
}
