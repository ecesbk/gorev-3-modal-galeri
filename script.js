document.addEventListener("DOMContentLoaded", () => {
    // Galerideki tüm resimleri seç
    const thumbs = document.querySelectorAll(".gallery-img");

    // Modal ve modal içindeki büyük resmi seç
    const modalEl = document.getElementById("exampleModal");
    const modalImg = document.getElementById("modalImage");

    // Bootstrap modal nesnesi
    const bsModal = new bootstrap.Modal(modalEl);

    // Her küçük resme týklama olayý ekle
    thumbs.forEach((img) => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;           // ayný resim büyüsün
            modalImg.alt = img.alt || "select";
            bsModal.show();
        });
    });

    // (Opsiyonel) modal kapanýnca src temizle
    modalEl.addEventListener("hidden.bs.modal", () => {
        modalImg.src = "";
    });
});