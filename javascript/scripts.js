// Ambil elemen tombol dan popup
const watchVideoButton = document.getElementById('cta-button');
const videoPopup = document.getElementById('video-popup');
const closePopupButton = document.getElementById('close-popup');

// Ketika tombol "Tonton Video" diklik
watchVideoButton.addEventListener('click', () => {
    videoPopup.style.display = 'flex'; // Tampilkan popup
});

// Ketika tombol close diklik
closePopupButton.addEventListener('click', () => {
    videoPopup.style.display = 'none'; // Sembunyikan popup
});

// Menutup popup jika pengguna mengklik di luar area konten video
videoPopup.addEventListener('click', (e) => {
    if (e.target === videoPopup) {
        videoPopup.style.display = 'none';
    }
});

// Fungsi untuk membuka popup
function openPopup(imageSrc) {
    document.getElementById('popup').style.display = 'flex'; // Tampilkan popup
    document.getElementById('popup-img').src = imageSrc; // Ganti gambar di popup dengan gambar yang dipilih
}

// Fungsi untuk menutup popup
function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Sembunyikan popup
}


// Fungsi untuk toggle video (play/pause)
function toggleVideo() {
    const video = document.getElementById('video-player');
    const overlay = document.querySelector('.video-overlay');

    if (video.paused) {
        video.play();
        overlay.style.opacity = '0';  // Sembunyikan overlay setelah video dimulai
    } else {
        video.pause();
        overlay.style.opacity = '1';  // Tampilkan overlay jika video dijeda
    }
}

let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    if (index >= totalItems) {
        currentIndex = 0; // Reset to the first slide
    } else if (index < 0) {
        currentIndex = totalItems - 1; // Go to the last slide
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100; // Calculate the transform offset
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

/* budaya indonesia */
// Anda dapat menambahkan logika dinamis untuk mengambil data dari API atau database
// Contoh untuk update angka secara otomatis:
document.addEventListener("DOMContentLoaded", () => {
    const totalBudayaElement = document.getElementById('total-budaya');
    const totalProvinsiElement = document.getElementById('total-provinsi');

    // Simulasi data
    const totalBudaya = 1345; // Contoh jumlah budaya
    const totalProvinsi = 38; // Contoh jumlah provinsi

    // Update DOM
    totalBudayaElement.textContent = totalBudaya;
    totalProvinsiElement.textContent = totalProvinsi;
});

/* provinsi- section */
function showModal(province, culture) {
    const modal = document.getElementById("culture-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    modalTitle.textContent = province;
    modalDescription.textContent = `Budaya di ${province}: ${culture}`;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("culture-modal");
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById("culture-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


