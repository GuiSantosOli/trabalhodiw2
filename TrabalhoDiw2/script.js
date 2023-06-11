// Realizar solicitação GET para obter todos os produtos
fetch('https://diwserver.vps.webdock.cloud/products?limit=5')
  .then(response => response.json())
  .then(data => {
    // Obter o elemento do contêiner da lista de produtos
    const productList = document.getElementById('product-list');

    // Iterar sobre os produtos retornados
    data.products.forEach(product => {
      // Criar o contêiner do produto
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');

      // Criar a imagem do produto
      const productImage = document.createElement('img');
      productImage.classList.add('product-image');
      productImage.src = product.image;
      productContainer.appendChild(productImage);

      // Criar os detalhes do produto
      const productDetails = document.createElement('div');
      productDetails.classList.add('product-details');

      // Criar o título do produto
      const productTitle = document.createElement('h2');
      productTitle.classList.add('product-title');
      productTitle.textContent = product.title;
      productDetails.appendChild(productTitle);

      // Criar o preço do produto
      const productPrice = document.createElement('p');
      productPrice.classList.add('product-price');
      productPrice.textContent = `R$ ${product.price}`;
      productDetails.appendChild(productPrice);

      // Adicionar os detalhes do produto ao contêiner do produto
      productContainer.appendChild(productDetails);

      // Adicionar o contêiner do produto à lista
      productList.appendChild(productContainer);
    });
  })
  .catch(error => console.error(error));
