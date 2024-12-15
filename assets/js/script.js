const items = [
    {
      photo: 'assets/img/propiedades/Shepherd.jpg',
      name: "Barrio tranquilo de Londres para acomodarse",
      description: "Cómodo y espacioso",
      smoke: true,
      pets: false,
      type: "sale",
    },
    {
      photo: 'assets/img/propiedades/Shinjuku.jpg',
      name: "Moderninad y tradición en un barrio historico de Tokyo",
      description: "Céntrico y moderno",
      smoke: false,
      pets: true,
      type: "rent",
    },
    {
      photo: 'assets/img/propiedades/Paris.jpg',
      name: "La vista de la torre Eiffel en temporadas festivas",
      description: "Ideal para familias",
      smoke: true,
      pets: true,
      type: "sale",
    },
    {
      photo: 'assets/img/propiedades/Warsa.jpg',
      name: "Loft en Varsovia",
      description: "Moderno y bien ubicado",
      smoke: false,
      pets: false,
      type: "rent",
    },
    {
      photo: 'assets/img/propiedades/Ibiza.jpg',
      name: "Conecta tu descanso con las mejores fiestas en la isla",
      description: "Económico y cómodo",
      smoke: true,
      pets: false,
      type: "sale",
    },
    {
      photo: 'assets/img/propiedades/Janeiro.jpg',
      name: "Lugar acogedor en Rio de Janeiro",
      description: "Con amplias áreas verdes",
      smoke: true,
      pets: true,
      type: "rent",
    },
  ];
  

function renderItemsByType(items) {
    const container = document.getElementById("item-container");
    container.innerHTML = ""; // Limpiar contenido previo
  
    // Filtrar elementos por tipo
    const itemsForSale = items.filter((item) => item.type === "sale").slice(0, 3);
    const itemsForRent = items.filter((item) => item.type === "rent").slice(0, 3);
  
    // Renderizar en venta
    const saleHeader = document.createElement("h2");
    saleHeader.textContent = "En Venta";
    container.appendChild(saleHeader);
  
    itemsForSale.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("col-md-4", "mb-4");
  
      itemDiv.innerHTML = `
        <div class="card">
          <div class="card-body">
            <img src=${item.photo} width="385px">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <div class="icons">
              <span class="smoke-icon ${item.smoke ? 'text-success' : 'text-danger'}">
                ${item.smoke ? '🚬 Permitido' : '🚭 Prohibido'}
              </span><br>
              <span class="pets-icon ${item.pets ? 'text-success' : 'text-danger'}">
                ${item.pets ? '🐾 Permitido' : '❌ No permitido'}
              </span>
            </div>
          </div>
        </div>
      `;
      container.appendChild(itemDiv);
    });
  
    // Botón para ver todas las propiedades en venta
    const saleButton = document.createElement("button");
    saleButton.textContent = "Ver todas las propiedades en venta";
    saleButton.classList.add("btn", "btn-primary", "mt-3");
    saleButton.onclick = () => {
      window.location.href = "propiedades_venta.html";
    };
    container.appendChild(saleButton);
  
    // Renderizar en alquiler
    const rentHeader = document.createElement("h2");
    rentHeader.textContent = "En Alquiler";
    container.appendChild(rentHeader);
  
    itemsForRent.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("col-md-4", "mb-4");
  
      itemDiv.innerHTML = `
        <div class="card">
          <div class="card-body">
            <img src=${item.photo} width="385px">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <div class="icons">
              <span class="smoke-icon ${item.smoke ? 'text-success' : 'text-danger'}">
                ${item.smoke ? '🚬 Permitido' : '🚭 Prohibido'}
              </span><br>
              <span class="pets-icon ${item.pets ? 'text-success' : 'text-danger'}">
                ${item.pets ? '🐾 Permitido' : '❌ No permitido'}
              </span>
            </div>
          </div>
        </div>
      `;
      container.appendChild(itemDiv);
    });
  
    // Botón para ver todas las propiedades en alquiler
    const rentButton = document.createElement("button");
    rentButton.textContent = "Ver todas las propiedades en alquiler";
    rentButton.classList.add("btn", "btn-primary", "mt-3");
    rentButton.onclick = () => {
      window.location.href = "propiedades_alquiler.html";
    };
    container.appendChild(rentButton);
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderItemsByType(items);
  });
  