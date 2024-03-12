const konsultasiCategory = document.querySelector(".konsultasi");
const hasilSection = document.querySelector(".hasil");

function toggleHoverEffect() {
  konsultasiCategory.classList.toggle("konsultasi-hover");
  hasilSection.style.display = "block";
  // Menambahkan scroll otomatis
  hasilSection.scrollTop = 0; // Mengatur posisi scroll ke bagian atas
  hasilSection.scrollIntoView({ behavior: "smooth" }); // Scroll ke elemen hasilSection dengan efek smooth
}

konsultasiCategory.addEventListener("click", function () {
  if (konsultasiCategory.classList.contains("konsultasi-hover")) {
    konsultasiCategory.classList.remove("konsultasi-hover");
    hasilSection.style.display = "none";
    // Mengembalikan gaya aslinya
    konsultasiCategory.style.backgroundColor = ""; // Menghapus background color
    konsultasiCategory.style.color = ""; // Menghapus color
    konsultasiCategory.style.boxShadow = ""; // Menghapus box shadow
  } else {
    toggleHoverEffect();
    // Menetapkan gaya saat tombol ditekan
    konsultasiCategory.style.backgroundColor = "rgb(27, 56, 103)";
    konsultasiCategory.style.color = "#fcf6f5ff";
    konsultasiCategory.style.boxShadow =
      "0px 0px 3.2px 3.2px rgba(27, 56, 103, 0.7)";
  }
});
