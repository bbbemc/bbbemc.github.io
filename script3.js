document.addEventListener("DOMContentLoaded", () => {
  // typewriter effect
  const text = "Here are some animal facts you might not know!";
  const questionContainer = document.querySelector(".question-container");

  if (questionContainer) {
    questionContainer.textContent = "";
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        questionContainer.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
      }
    }
    typeWriter();
  }

  // ResizeObserver
  const menuContainer = document.querySelector('.menu-container');
  if (menuContainer) {
    const menuScroll = menuContainer.querySelector('.menu-scroll');
    if (menuScroll) {
      const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
          const width = entry.contentRect.width;
          menuScroll.style.width = width + 'px';
          menuScroll.style.height = 'auto';
          const fontSize = Math.max(12, Math.min(30, width / 20));
          menuScroll.style.fontSize = fontSize + 'px';
        }
      });
      observer.observe(menuContainer);
    }
  }

  // ✅ รับค่า type จาก URL และแสดงข้อมูล
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');

  const products = {
    raccon: [{ name: "Raccon", image: "picture/raccon.jpg", desc: "..." }],
    Sloth: [{ name: "Sloth", image: "picture/Sloth.jpg", desc: "..." }],
    // ... ใส่ข้อมูลทั้งหมดเหมือนใน html
  };

  const productList = document.getElementById('product-list');
  const list = products[type];

  if (!list) {
    document.getElementById('category-title').innerText = 'List';
  } else {
    list.forEach(item => {
      const box = document.createElement('div');
      box.className = 'product-card';
      box.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.desc}</p>
      `;
      productList.appendChild(box);
    });
  }

});
