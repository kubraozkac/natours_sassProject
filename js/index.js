document.querySelectorAll(".navigation__link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Varsayılan sayfa sıçramasını engelle

    const targetId = this.getAttribute("href"); // Hedef bölümün ID'sini al
    const targetElement = document.querySelector(targetId); // Hedef bölümü bul

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma

      // Menü kapat
      document.getElementById("navi-toggle").checked = false;
    } else {
      console.error(`Bölüm bulunamadı: ${targetId}`);
    }
  });
});
