function showImage(drink) {
  const img = document.getElementById('displayedImage');
  const caption = document.getElementById('caption');

  const drinks = {
    espresso: {
      src: 'images/espresso.jpg'
    },
    nescafe: {
      src: 'images/nescafe.jpg'
    },
    hot: {
      src: 'images/hot-drink.jpg'
    },
    cold: {
      src: 'images/cold-drink.jpg'
    },
    frappe: {
      src: 'images/frappe.jpg'
    },
    smoothie: {
      src: 'images/smoothie.jpg'
    },
    milkshake: {
      src: 'images/milkshake.jpg'
    },
    sweets: {
      src: 'images/sweets.jpg'
    }
  };

  img.style.opacity = 0;

  setTimeout(() => {
    img.src = drinks[drink].src;
    caption.textContent = drinks[drink].text;
    img.style.opacity = 1;
  }, 200);
}
