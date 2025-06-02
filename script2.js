document.addEventListener("DOMContentLoaded", () => {
  // ส่วนพิมพ์ข้อความแบบ typeWriter
  const text = "Here are some animal facts you might not know!";
  const questionContainer = document.querySelector(".question-container");

  if (questionContainer) {
    questionContainer.textContent = "";  // เคลียร์ข้อความเดิม

    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        questionContainer.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);  // ความเร็ว 70ms ต่อ 1 ตัวอักษร
      }
    }

    typeWriter();
  } else {
    console.warn("ไม่พบ element .question-container");
  }

  // ส่วนของ ResizeObserver
  const menuContainer = document.querySelector('.menu-container');
  if (menuContainer) {
    const menuScroll = menuContainer.querySelector('.menu-scroll');

    if (menuScroll) {
      
      const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    const width = entry.contentRect.width;
    // ไม่ตั้งความสูงเป็นค่าคงที่ ให้ auto ตามเนื้อหา
    menuScroll.style.width = width + 'px';
    menuScroll.style.height = 'auto'; // กำหนดสูงอัตโนมัติ

    const fontSize = Math.max(12, Math.min(30, width / 20));
    menuScroll.style.fontSize = fontSize + 'px';
  }
});

      observer.observe(menuContainer);
    } else {
      console.warn("ไม่พบ element .menu-scroll ภายใน .menu-container");
    }
  } else {
    console.warn("ไม่พบ element .menu-container");
  }
});

