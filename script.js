window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 3000); // scroll ke atas 3 detik setelah halaman siap
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
  {
    role: "Anggota | Developer",
    nama: "Andaru Ilham Amerta",
    alamat: "Bangsri, Sukodono",
    kelas: "X-RPL",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Geisya Odelia Bagus",
    alamat: "jl  krembangan, kemiri",
    kelas: "X DKV 2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "Anggota",
    nama: "Audrey Zahra Amaura",
    alamat: "Desa bluru kidul, Pondok Buana",
    kelas: "X DKV 3",
    foto: "assets/7arzz.jpg",
  },
];

const container = document.getElementById("teamContainer");

teams.forEach((person) => {
  const div = document.createElement("div");
  div.className = "col-md-4 col-sm-6 mb-4";

  div.innerHTML = `
    <div class="card team-card p-3 shadow-sm data-aos="zoom-out-down"">
      <img src="${person.foto}" class="mx-auto mb-3 img-fluid rounded-circle" width="120" height="120" alt="${person.role}">
      <h5 class="fw-bold fs-3">${person.role}</h5>
      <div class="info">
        <p><strong>Nama:</strong> ${person.nama}</p>
        <p><strong>Alamat:</strong> ${person.alamat}</p>
        <p><strong>Kelas:</strong> ${person.kelas}</p>
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

const texts = [
  "Initializing system...",
  "Connecting AI...",
  "Optimizing data...",
  "Welcome to Artheva!",
];

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const loadingText = document.querySelector("#loading p");
  let index = 0;
  let charIndex = 0;

  function typeText() {
    if (charIndex < texts[index].length) {
      loadingText.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 40); // kecepatan ketik halus
    } else {
      // jeda antar kalimat biar lebih natural
      setTimeout(() => {
        loadingText.style.transition = "opacity 0.6s ease";
        loadingText.style.opacity = "0";

        setTimeout(() => {
          charIndex = 0;
          index++;

          if (index < texts.length) {
            // lanjut ke kalimat berikut
            loadingText.textContent = "";
            loadingText.style.opacity = "1";
            setTimeout(typeText, 350); // delay dikit biar smooth
          } else {
            // animasi keluar dari loading
            loading.style.transition = "opacity 1s ease, transform 1s ease";
            loading.style.opacity = "0";
            loading.style.transform = "scale(1.05)";
            setTimeout(() => {
              loading.style.display = "none";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 1000);
          }
        }, 600);
      }, 900);
    }
  }

  typeText();
});

AOS.init();
