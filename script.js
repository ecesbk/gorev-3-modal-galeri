document.addEventListener("DOMContentLoaded", () => {
    // Galerideki tüm resimleri seç
    const thumbs = document.querySelectorAll(".gallery-img");

    // Modal ve modal içindeki büyük resmi seç
    const modalEl = document.getElementById("exampleModal");
    const modalImg = document.getElementById("modalImage");

    // Modal başlığını seç (h1 id="exampleModalLabel")
    const modalTitle = document.getElementById("exampleModalLabel");

    // Bootstrap modal nesnesi
    const bsModal = new bootstrap.Modal(modalEl);

    // Her küçük resme tıklama olayı ekle
    thumbs.forEach((img) => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;                 // aynı resim büyüsün
            modalImg.alt = img.alt || "select";

            // Başlığa tablo adını yaz
            modalTitle.textContent = img.alt || "select";

            bsModal.show();
        });
    });

    // Modal kapanınca src temizle
    modalEl.addEventListener("hidden.bs.modal", () => {
        modalImg.src = "";
    });
});

//document.addEventListener("DOMContentLoaded", () => {
//    // Galerideki tüm resimleri seç
//    const thumbs = document.querySelectorAll(".gallery-img");

//    // Modal ve modal içindeki büyük resmi seç
//    const modalEl = document.getElementById("exampleModal");
//    const modalImg = document.getElementById("modalImage");

//    // Bootstrap modal nesnesi
//    const bsModal = new bootstrap.Modal(modalEl);

//    // Her küçük resme tıklama olayı ekle
//    thumbs.forEach((img) => {
//        img.addEventListener("click", () => {
//            modalImg.src = img.src;           // aynı resim büyüsün
//            modalImg.alt = img.alt || "select";
//            bsModal.show();
//        });
//    });

//    // Modal kapanınca src temizle
//    modalEl.addEventListener("hidden.bs.modal", () => {
//        modalImg.src = "";
//    });
//});