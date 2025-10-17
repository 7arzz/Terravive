window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 2500); // scroll ke atas 2.5 detik setelah halaman siap
});
const teams = [
  {
    role: "Anggota",
    nama: "Shiva Shavira",
    alamat: "Balongdowo",
    kelas: "X AK-3",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Widya Pramundita Putri",
    alamat: "Waru",
    kelas: "X AK-2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Wilujeng Naisilah Chusnul Pratama",
    alamat: "Magersari",
    kelas: "X AK-2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Abimanyu Yoga Perdana",
    alamat: "Magersari",
    kelas: "X BD-2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Rimarcha Dwi Fellysia",
    alamat: "Rangkah Kidul",
    kelas: "X BD-2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Wahyu Siva Ayuningtyas",
    alamat: "Buduran",
    kelas: "X BD-1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Dian Maulida",
    alamat: "Sidokare",
    kelas: "X BD-2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Alfina Amoerita Anggraini",
    alamat: "Gedangan",
    kelas: "X BD-1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Ardina Mozarella",
    alamat: "Candi",
    kelas: "X MP-2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Shafa Aliyah Re",
    alamat: "Sidodadi",
    kelas: "X BD-2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Keyla Nur Azizah Putriani",
    alamat: "Bluru Permai",
    kelas: "X AK-1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Della Savira Damayanti",
    alamat: "Buduran",
    kelas: "X BD-1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Khansa Aisya Zhafira",
    alamat: "Siwalanpanji",
    kelas: "X AK-1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Arika Rahmasari",
    alamat: "Rangkah Lor",
    kelas: "X BD-1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Rina Anggraini",
    alamat: "Balong Gabus",
    kelas: "X BD-2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Nayra Salsabilla",
    alamat: "Celep, Sidowayah",
    kelas: "X MP-1",
    foto: "assets/7arzz.jpg",
  },
];

const container = document.getElementById("teamContainer");

teams.forEach((person) => {
  const div = document.createElement("div");
  div.className = "col-md-4 col-sm-6 mb-4";

  div.innerHTML = `
    <div class="card team-card p-3 shadow-sm">
      <img src="${person.foto}" class="mx-auto mb-3" width="120" height="120" alt="${person.role}">
      <h5 class="fw-bold fs-3">${person.role}</h5>
      <div class="info">
        <p><b>Nama:</b> ${person.nama}</p>
        <p><b>Alamat:</b> ${person.alamat}</p>
        <p><b>Kelas:</b> ${person.kelas}</p>
      </div>
    </div>
  `;

  const card = div.querySelector(".card");
  const infoDiv = div.querySelector(".info");

  infoDiv.style.transition = "all 0.5s ease";
  infoDiv.style.maxHeight = "0";
  infoDiv.style.opacity = "0";
  infoDiv.style.overflow = "hidden";

  card.addEventListener("click", () => {
    const isOpen = infoDiv.classList.contains("open");

    if (isOpen) {
      infoDiv.classList.remove("open");
      infoDiv.style.maxHeight = "0";
      infoDiv.style.opacity = "0";
    } else {
      infoDiv.classList.add("open");
      infoDiv.style.maxHeight = infoDiv.scrollHeight + "px";
      infoDiv.style.opacity = "1";
    }
  });

  container.appendChild(div);
});

// Scroll animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

// Leaf animation generator
const leafContainer = document.getElementById("leafContainer");
function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");
  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.animationDuration = 6 + Math.random() * 4 + "s";
  leaf.style.opacity = Math.random();
  leafContainer.appendChild(leaf);

  setTimeout(() => leaf.remove(), 10000);
}
setInterval(createLeaf, 700);
