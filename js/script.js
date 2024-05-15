const eventEmitter = () => {
  const events = {};

  return {
    on: (name, fn) => {
      const event = events[name];

      if (event) {
        event.push(name);
      } else {
        events[name] = [fn];
      }
    },
  
    emit: (name, ...params) => {
      const event = events[name];

      if (! event) return;

      for (const listener of event) {
        listener(...params);
      }
    },
  }
}

const EVENT_EMITER = eventEmitter();

const basketCount = () => {
  const basket = JSON.parse(localStorage.getItem('basket'));

  return Object.keys(basket).reduce((acc, key) => acc += basket[key], 0);
}

if (! localStorage.getItem('basket')) {
  localStorage.setItem('basket', JSON.stringify({}));
}

EVENT_EMITER.on('countBasket', () => {
  const basketDiv = document.querySelector('#shop-basket');

  const count = basketCount();

  if (count > 0) {
    basketDiv.setAttribute('data-count', count);
    document.querySelectorAll('.basket-empty')?.forEach(b => b.classList.add('hidden'));
    document.querySelectorAll('.basket-some')?.forEach(b => b.classList.remove('hidden'));
  } else {
    basketDiv.removeAttribute('data-count');
    document.querySelectorAll('.basket-empty')?.forEach(b => b.classList.remove('hidden'));
    document.querySelectorAll('.basket-some')?.forEach(b => b.classList.add('hidden'));
  }

  EVENT_EMITER.emit('countProductBaskets');
});

EVENT_EMITER.on('countProductBaskets', () => {
  const basket = JSON.parse(localStorage.getItem('basket'));

  const productBaskets = document.querySelectorAll('.product-card-basket');

  productBaskets?.forEach((basketDiv) => {
    const productId = basketDiv.getAttribute('data-product_id');
    const count = basket[productId] ?? 0;

    basketDiv.setAttribute('data-count', count);

    const input = basketDiv.querySelector('.product-card-basket-counter-input');
    input.value = count;

    const decrementButton = basketDiv.querySelector('.decrement.basket-button');
    
    if (decrementButton) {
      decrementButton.disabled = count <= 1 ? true : false;
    }

    if (count) {
      basketDiv.classList.add('has-some');
    } else {
      basketDiv.classList.remove('has-some');
    }
  });
});

EVENT_EMITER.on('updateBasket', (prodictId, count) => {
  const basket = JSON.parse(localStorage.getItem('basket'));

  basket[prodictId] = count;

  localStorage.setItem('basket', JSON.stringify(basket));
  
  EVENT_EMITER.emit('updateProductsInBasket');
  EVENT_EMITER.emit('countBasket');
});

EVENT_EMITER.on('addToBasket', (prodictId) => {
  const basket = JSON.parse(localStorage.getItem('basket'));
  
  if (! basket[prodictId]) {
    basket[prodictId] = 1;
  } else {
    basket[prodictId] += 1;
  }

  localStorage.setItem('basket', JSON.stringify(basket));

  EVENT_EMITER.emit('updateProductsInBasket');
  EVENT_EMITER.emit('countBasket');
});

EVENT_EMITER.on('removeFromBasket', (prodictId) => {
  const basket = JSON.parse(localStorage.getItem('basket'));
  
  if (basket[prodictId]) {
    basket[prodictId] -= 1;

    if (basket[prodictId] === 0) {
      delete(basket[prodictId]);
    }
  }

  localStorage.setItem('basket', JSON.stringify(basket));

  EVENT_EMITER.emit('updateProductsInBasket');
  EVENT_EMITER.emit('countBasket');
});

EVENT_EMITER.on('removeAllProductsFromBasket', () => {
  localStorage.setItem('basket', JSON.stringify({}));

  EVENT_EMITER.emit('updateProductsInBasket');
  EVENT_EMITER.emit('countBasket');
});

EVENT_EMITER.on('removeAllFromBasket', (prodictId) => {
  const basket = JSON.parse(localStorage.getItem('basket'));
  
  if (basket[prodictId]) {
    delete(basket[prodictId]);
  }

  localStorage.setItem('basket', JSON.stringify(basket));

  EVENT_EMITER.emit('updateProductsInBasket');
  EVENT_EMITER.emit('countBasket');
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header-navigation > li').addEventListener('click', function (e) {
    this.classList.toggle('active');
  })

  document.querySelector('.mobile-menu').addEventListener('click', function (e) {
    document.querySelector('.header').classList.toggle('menu-active');
  });

  EVENT_EMITER.emit('countBasket');
});