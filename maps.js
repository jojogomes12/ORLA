document.addEventListener("DOMContentLoaded", function () {
    const latitude = -22.970639;
    const longitude = -42.952611;

    var map = L.map('map').setView([latitude, longitude], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Link para o Google Maps com coordenadas
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    L.marker([latitude, longitude]).addTo(map)
      .bindPopup(`<b>Estamos aqui!</b><br><a href="${googleMapsLink}" target="_blank">Ver no Google Maps</a>`)
      .openPopup();
  });