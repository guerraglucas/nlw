// create map
const map = L.map("mapid").setView([-18.9183594, -48.2764742], 15);
// creat and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// creat and add marker
let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat; //give the values from the map to attributes from html file (input hidden name lat and lng)
  document.querySelector("[name=lng]").value = lng;

  //remove previous icon if already clicked
  marker && map.removeLayer(marker); // check if variable "marker" has any value and if so (&&) execute funcion to remove
  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photos field

function addPhotoField() {
  //select photos container #images
  const container = document.querySelector("#images");

  //select container to duplicate .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //duplicate
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verify if field is empty, if so, do not add a new fields
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }

  // clear field before adding duplicated
  newFieldContainer.children[0].value = "";

  // add duplicated to photos container
  container.appendChild(newFieldContainer);
}

// delete field

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
    return;
  }
  span.parentNode.remove();
}

// select yes or no buttons

function toggleSelect(event) {
  // remove .active class from the buttons
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  // .forEach(function (button) {

  // button.classList.remove("active")
  // })

  // define class .active to clicked button
  const button = event.currentTarget;
  button.classList.add("active");

  // update hidden input
  const input = document.querySelector('[name="open_on_weekends"]'); // if using a "name" attribute as selector, you need to use brackets
  input.value = button.dataset.value;
}

function validate(event) {
  let needsLatAndLng = true;
  const inputLat = document.querySelector("[name=lat]").value;
  const inputLng = document.querySelector("[name=lng]").value;
  if (inputLat != "" || inputLng != "") {
    needsLatAndLng = false;
  }

  if (needsLatAndLng) {
    event.preventDefault();
    alert("Selecione um ponto no mapa");
  }
}
