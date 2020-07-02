const clearMap = () => {
  // Does not work yet.
  document.getElementById("map").innerHTML = "";
};

const renderMap = () => {
  const ACCESS_TOKEN = document.querySelector("input").value;
  const lat = 52.08;
  const lon = 4.603;

  const map = L.map("map").setView([lat, lon], 7);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: ACCESS_TOKEN,
    }
  ).addTo(map);

  L.marker([lat - 1, lon + 1.3])
    .addTo(map)
    .bindPopup("Henk!");
};

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  renderMap();
});
