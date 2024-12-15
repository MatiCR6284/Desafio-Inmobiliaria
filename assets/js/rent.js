// Propiedades en alquiler
const propertiesForRent = [
    {
      photo: 'assets/img/propiedades/Shinjuku.jpg',
      name: "Moderninad y tradición en un barrio historico de Tokyo",
      description: "Pequeño pero acogedor",
      smoke: true,
      pets: true,
    },
    {
      photo: 'assets/img/propiedades/Warsa.jpg',
      name: "Loft en Varsovia",
      description: "Moderno y elegante",
      smoke: false,
      pets: false,
    },
    {
      photo: 'assets/img/propiedades/Janeiro.jpg',
      name: "Lugar acogedor en Rio de Janeiro",
      description: "Casa ideal para familias",
      smoke: true,
      pets: false,
    },
    {
        photo: 'assets/img/propiedades/Tromso.jpg',
        name: "Apartamento cercano al circulo polar",
      description: "Amplio con excelentes vistas",
      smoke: false,
      pets: true,
    },
    {
        photo: 'assets/img/propiedades/Manila.jpg',
        name: "Resort en Manila",
      description: "Céntrico y funcional",
      smoke: true,
      pets: false,
    },
    {
        photo: 'assets/img/propiedades/VinadelMar.jpg',
        name: "Temporada alta a buen precio en Viña del Mar",
      description: "A pasos del metro",
      smoke: false,
      pets: true,
    },
  ];

  function renderPropertiesForRent(properties) {
    const container = document.getElementById("rent-container");
    container.innerHTML = ""; // Limpiar contenido previo
  
    properties.forEach((property) => {
      const propertyDiv = document.createElement("div");
      propertyDiv.classList.add("col-md-4", "mb-4");
  
      propertyDiv.innerHTML = `
        <div class="card">
          <div class="card-body">
            <img src=${property.photo} width="385px">
            <h5 class="card-title">${property.name}</h5>
            <p class="card-text">${property.description}</p>
            <div class="icons">
              <span class="smoke-icon ${property.smoke ? 'text-success' : 'text-danger'}">
                ${property.smoke ? '🚬 Permitido' : '🚭 Prohibido'}
              </span><br>
              <span class="pets-icon ${property.pets ? 'text-success' : 'text-danger'}">
                ${property.pets ? '🐾 Permitido' : '❌ No permitido'}
              </span>
            </div>
          </div>
        </div>
      `;
      container.appendChild(propertyDiv);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderPropertiesForRent(propertiesForRent);
  });

  
