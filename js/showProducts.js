const createElement = (tag, classList = null, attrs = null, text = null) => {
  const element = document.createElement(tag);

  if (Array.isArray(classList)) {
    classList.forEach(c => {
      element.classList.add(c);
    });
  }

  if (attrs && typeof attrs === 'object') {
    Object.keys(attrs).forEach(a => {
      element.setAttribute(a, attrs[a])
    })
  }

  if (text !== null) {
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }

  return element;
}

const createProductImage = (imageSrc) => {
  const imageDiv = createElement('div', ['product-card-images']);

  const img = new Image();
  img.src = imageSrc;

  imageDiv.appendChild(img);

  return imageDiv;
}

const createProductCardTitle = (titleText) => {
  const title = createElement('div', ['product-card-title']);

  const h3 = createElement('h3', null, null, titleText);

  title.appendChild(h3);

  return title;
}

const createProductCardBasketButton = (product) => {
  const button = createElement('button', ['product-card-basket-button']);

  const img = new Image();
  img.classList.add('button-icon');
  img.src = 'icons/shopping-cart-black.svg';

  const textNode = document.createTextNode(' В корзину');

  button.appendChild(img);
  button.appendChild(textNode);

  button.addEventListener('click', function (e) {
    EVENT_EMITER.emit('addToBasket', product.id);
    e.preventDefault();
  });

  return button;
}

const createProductCardBasketCounter = (product, isForBasket = false) => {
  const wrapper = createElement('div', ['product-card-basket-counter']);

  const buttonDecrement = createElement('button', ['product-card-basket-counter-button', 'decrement'], null, '-');
  const input = createElement('input', ['product-card-basket-counter-input']);
  const buttonIncrement = createElement('button', ['product-card-basket-counter-button', 'increment'], null, '+');

  if (isForBasket) {
    buttonDecrement.classList.add('basket-button');
  }

  buttonDecrement.addEventListener('click', function (e) {
    EVENT_EMITER.emit('removeFromBasket', product.id);
    e.preventDefault();
  });

  buttonIncrement.addEventListener('click', function (e) {
    EVENT_EMITER.emit('addToBasket', product.id);
    e.preventDefault();
  })

  wrapper.appendChild(buttonDecrement);
  wrapper.appendChild(input);
  wrapper.appendChild(buttonIncrement);

  return wrapper;
}

const createTrashButton = (product) => {
  const button = createElement('button', ['product-card-trash-button']);
  button.title = 'Удалить из корзины';

  const img = new Image(20, 20);
  img.src = 'icons/trash.svg';

  button.appendChild(img);

  button.addEventListener('click', function (e) {
    EVENT_EMITER.emit('removeAllFromBasket', product.id);
    e.preventDefault();
  });

  return button;
} 

const createProductCardBasket = (product, isForBasket = false) => {
  const basket = createElement('div', ['product-card-basket'], { 'data-product_id': product.id });

  const basketButton = createProductCardBasketButton(product);
  const counterButton = createProductCardBasketCounter(product, isForBasket);

  if (isForBasket) {
    basket.appendChild(createTrashButton(product));
  }
  
  basket.appendChild(basketButton);
  basket.appendChild(counterButton);

  return basket;
}

const createProductCardActions = (product, isForBasket = false) => {
  const actions = createElement('div', ['product-card-actions']);

  const price = createElement('div', ['product-card-price'], null, `${product.price} ₽`);
  const basket = createProductCardBasket(product, isForBasket);

  actions.appendChild(price);
  actions.appendChild(basket);

  return actions;
}

const wrapProductLink = (product, element) => {
  const link = createElement('a', ['product-link']);
  link.href = `product.html?product_id=${product.id}`;
  link.appendChild(element);

  return link;
}

const createProduct = (product, isForBasket = false) => {
  const productDiv = createElement('div', ['product-card']);

  const image = wrapProductLink(product, createProductImage(product.image));

  const info = createElement('div', ['product-card-info']);

  const title = createProductCardTitle(product.title);
  const description = createElement('div', ['product-card-description'], null, product.description);
  const params = createElement('div', ['product-card-params'], null, product.params[0]);
  const actions = createProductCardActions(product, isForBasket);

  info.appendChild(title);
  info.appendChild(description);
  info.appendChild(params);
  info.appendChild(actions);

  productDiv.appendChild(image)
  productDiv.appendChild(wrapProductLink(product, info));

  return productDiv
}

const createCategoryNavigation = (activeCategory = null) => {
  const navigationHTML = document.querySelector(".header-navigation-list");

  for (const categoryKey of Object.keys(CATEGORIES)) {
    const category = CATEGORIES[categoryKey];

    const liHTML = createElement('li');
    const textNode = document.createTextNode(category.title);

    if (activeCategory === category.name) {
      liHTML.appendChild(textNode);
    } else {
      const aHTML = createElement('a');
      aHTML.href = `category.html?category=${category.name}`;

      aHTML.appendChild(textNode);
      liHTML.appendChild(aHTML);
    }

    navigationHTML.appendChild(liHTML);
  };
}

const createCategoriesList = () => {
  const listHTML = document.querySelector(".catalog-items");

  for (const categoryKey of Object.keys(CATEGORIES)) {
    const category = CATEGORIES[categoryKey];

    const divHTML = createElement('div', ['catalog-card']);

    const img = new Image();
    img.src = category.image;

    const aHTML = createElement('a', ['catalog-button']);
    aHTML.href = `category.html?category=${category.name}`;
    const textNode = document.createTextNode(category.title);
    aHTML.appendChild(textNode);

    divHTML.appendChild(img);
    divHTML.appendChild(aHTML);

    listHTML.appendChild(divHTML);
  };
}