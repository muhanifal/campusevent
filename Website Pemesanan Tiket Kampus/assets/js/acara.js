// ===============================
// ACARA PAGE SCRIPT (acara.js)
// ===============================

// Ambil elemen
const searchInput = document.getElementById("searchEvent");
const filterButtons = document.querySelectorAll(".filter-btn");
const eventCards = document.querySelectorAll(".event-card");

// Fungsi untuk filter dan search
function filterEvents() {
    const searchText = searchInput.value.toLowerCase();

    let activeCategory = document.querySelector(".filter-btn.active");
    activeCategory = activeCategory ? activeCategory.innerText : "Semua";

    eventCards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();

        // Tentukan kategori tiap card (berdasarkan judul)
        let category = "Semua";
        if (title.includes("seminar")) category = "Seminar";
        if (title.includes("workshop")) category = "Workshop";
        if (title.includes("konser")) category = "Konser";
        if (title.includes("festival") || title.includes("kompetisi") || title.includes("tournament"))
            category = "Kompetisi";

        // Filter by category
        const matchCategory = activeCategory === "Semua" || category === activeCategory;

        // Search by keyword
        const matchSearch = title.includes(searchText);

        // Tampilkan / sembunyikan card
        if (matchCategory && matchSearch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Event: Search Realtime
searchInput.addEventListener("input", filterEvents);

// Event: Button filter
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Hilangkan active dari semua
        filterButtons.forEach(b => b.classList.remove("active"));

        // Tambahkan ke yang diklik
        btn.classList.add("active");

        // Jalankan filter
        filterEvents();
    });
});

// Set default filter = Semua
document.querySelector(".filter-btn").classList.add("active");
