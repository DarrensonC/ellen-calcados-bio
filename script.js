// Dados de lojas reutilizando um "componente" JS
// Agora usando vídeos incorporados (Panda Video) via <iframe>, mantendo o layout responsivo.
const stores = [
  {
    name: "Loja Jardim da Ordem",
    tag: "Jardim da Ordem",
    embedHtml:
      '<iframe class="store-video" src="https://player-vz-e29bdd42-f4e.tv.pandavideo.com.br/embed/?v=950e0d5a-ee78-43dc-a30f-020dfc6e1b7b" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>',
    addressLabel: "Loja Jardim da Ordem",
    addressText:
      "R. Jovenilson Américo de Oliveira, 342 - Tatuquara, Curitiba - PR",
    mapsUrl:
      "https://www.google.com/maps?q=R.+Jovenilson+Am%C3%A9rico+de+Oliveira,+342+-+Tatuquara,+Curitiba+-+PR",
  },
  {
    name: "Loja Santa Rita",
    tag: "Santa Rita",
    embedHtml:
      '<iframe class="store-video" src="https://player-vz-e29bdd42-f4e.tv.pandavideo.com.br/embed/?v=fa3d6a70-7865-4c81-b363-b6c82920e575" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>',
    addressLabel: "Loja Santa Rita",
    addressText: "Rua: Enette Dubard, 01 - Tatuquara, Curitiba - PR",
    mapsUrl:
      "https://www.google.com/maps?q=Enette+Dubard,+01+-+Tatuquara,+Curitiba+-+PR",
  },
  {
    name: "Loja Rio Bonito",
    tag: "Rio Bonito",
    embedHtml:
      '<iframe class="store-video" src="https://player-vz-e29bdd42-f4e.tv.pandavideo.com.br/embed/?v=bdc17459-e551-4c89-a23a-587bb79810e5" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>',
    addressLabel: "Loja Rio Bonito",
    addressText:
      "R. Marcos Bertoldi, 916 - Campo de Santana, Curitiba - PR",
    mapsUrl:
      "https://www.google.com/maps?q=R.+Marcos+Bertoldi,+916+-+Campo+de+Santana,+Curitiba+-+PR",
  },
];

/**
 * Cria o HTML de um card de loja com base nos dados.
 */
function createStoreCard(store) {
  const card = document.createElement("article");
  card.className = "store-card";

  card.innerHTML = `
    <div class="store-header">
      <h2 class="store-title">${store.name}</h2>
      <span class="store-tag">${store.tag}</span>
    </div>
    <div class="store-video-wrapper">
      ${store.embedHtml}
    </div>
    <div class="store-body">
      <div class="store-address-label">Endereço</div>
      <div class="store-address-text">${store.addressText}</div>
      <div class="store-actions">
        <button class="route-button" type="button" data-link-type="external" data-href="${store.mapsUrl}">
          <span class="route-icon">📍</span>
          <span>Ver rota</span>
        </button>
      </div>
    </div>
  `;

  return card;
}

/**
 * Inicializa a listagem de lojas.
 */
function renderStores() {
  const container = document.getElementById("stores-section");
  if (!container) return;

  stores.forEach((store) => {
    const card = createStoreCard(store);
    container.appendChild(card);
  });
}

/**
 * Aplica comportamento único para todos os elementos com data-link-type="external"
 * abrindo o link em nova aba.
 */
function setupExternalLinks() {
  const clickables = document.querySelectorAll("[data-link-type='external']");

  clickables.forEach((el) => {
    const href = el.getAttribute("data-href");
    if (!href) return;

    el.addEventListener("click", () => {
      window.open(href, "_blank", "noopener,noreferrer");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderStores();
  setupExternalLinks();
});


