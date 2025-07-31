fetch("https://api.jikan.moe/v4/top/anime?limit=5")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("anime-list");
    list.innerHTML = "";

    data.data.forEach(anime => {
      const card = document.createElement("div");
      card.className = "anime-card";
      card.innerHTML = `
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
        <h2>${anime.title}</h2>
        <p><strong>Skor:</strong> ${anime.score}</p>
        <p>${anime.synopsis || "Sinopsis tidak tersedia."}</p>
      `;
      list.appendChild(card);
    });
  })
  .catch(() => {
    document.getElementById("anime-list").textContent = "Gagal memuat data anime.";
  });