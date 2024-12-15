// Propiedades en venta
const propertiesForSale = [
    {
      photo: 'assets/img/propiedades/Shepherd.jpg',
      name: "Barrio tranquilo de Londres para acomodarse",
      description: "Cómodo y espacioso",
      smoke: true,
      pets: false,
    },
    {
      photo: 'assets/img/propiedades/Ibiza.jpg',
      name: "Conecta tu descanso con las mejores fiestas en la isla",
      description: "Económico y cómodo",
      smoke: false,
      pets: true,
    },
    {
      photo: 'assets/img/propiedades/Paris.jpg',
      name: "La vista de la torre Eiffel en temporadas festivas",
      description: "Ideal para familias",
      smoke: true,
      pets: true,
    },
    {
      photo: 'assets/img/propiedades/Acapulco.jpg',
      name: "Revive Acapulco con mejores vistas al pacifico",
      description: "Casa grande con jardín",
      smoke: true,
      pets: true,
    },
    {
      photo: 'assets/img/propiedades/SanDiego.jpg',
      name: "Villa en San Diego, a pasos de la frontera mexicana",
      description: "Exclusiva villa con piscina",
      smoke: false,
      pets: true,
    },
    {
      photo: 'assets/img/propiedades/Lisboa.jpg',
      name: "Portugal tiene sus lujos, esta propiedad te va a gustar",
      description: "Piso céntrico con excelentes vistas",
      smoke: false,
      pets: false,
    },
  ];

  function renderProperties(properties, containerId) {
    const container = document.getElementById(containerId);
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
    renderProperties(propertiesForSale, "sale-container");
  });