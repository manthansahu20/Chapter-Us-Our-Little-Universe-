/**
 * CHAPTER US — OUR LITTLE UNIVERSE
 * Interactive Controller & Feature Management
 */

document.addEventListener("DOMContentLoaded", () => {
  initBackgroundCanvas();
  initFriendshipCounter();
  renderTimeline();
  renderSoundtrack();
  renderGallery();
  renderEnvelopes();
  renderConversations();
  renderLittleThings();
  initNavigation();
  initAudioPlayer();
});

/* -------------------------------------------------------------
 * 1. Ambient Background Particle Canvas
 * ------------------------------------------------------------- */
function initBackgroundCanvas() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.6 + 0.4,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2,
    alpha: Math.random() * 0.5 + 0.2
  }));

  function loop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(155, 135, 255, ${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

/* -------------------------------------------------------------
 * 2. Accurate Friendship Counter Since April 2, 2025
 * ------------------------------------------------------------- */
function initFriendshipCounter() {
  const yearsEl = document.getElementById("counter-years");
  const monthsEl = document.getElementById("counter-months");
  const daysEl = document.getElementById("counter-days");
  const totalDaysEl = document.getElementById("counter-total-days");

  if (!yearsEl || !monthsEl || !daysEl) return;

  function update() {
    const start = new Date(UniverseData.friendshipStartDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDiffTime = Math.max(0, now - start);
    const totalDays = Math.floor(totalDiffTime / (1000 * 60 * 60 * 24));

    yearsEl.textContent = Math.max(0, years);
    monthsEl.textContent = Math.max(0, months);
    daysEl.textContent = Math.max(0, days);
    if (totalDaysEl) {
      totalDaysEl.textContent = `${totalDays} Days of Memories Together`;
    }
  }

  update();
  setInterval(update, 60000);
}

/* -------------------------------------------------------------
 * 3. Timeline Rendering
 * ------------------------------------------------------------- */
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = UniverseData.timeline
    .map(
      (item) => `
      <div class="timeline-item" id="${item.id}">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-date">${item.date} · ${item.tag}</div>
          <h3 class="timeline-title serif">${item.title}</h3>
          <p class="timeline-desc">${item.narrative}</p>
        </div>
      </div>
    `
    )
    .join("");
}

/* -------------------------------------------------------------
 * 4. Music Player & Individual Song Covers
 * ------------------------------------------------------------- */
let currentTrackIndex = 0;
const audioPlayer = new Audio();
let isPlaying = false;

function renderSoundtrack() {
  const listContainer = document.getElementById("tracklist-container");
  if (!listContainer) return;

  listContainer.innerHTML = UniverseData.soundtrack
    .map(
      (track, index) => `
      <div class="track-item ${index === 0 ? "active" : ""}" data-index="${index}">
        <div class="track-item-thumb">
          <img src="${track.cover}" alt="${track.title} Cover" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'48\\' height=\\'48\\' fill=\\'%2310152B\\'><rect width=\\'100%\\' height=\\'100%\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%239B87FF\\' font-size=\\'18\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'>♫</text></svg>'">
        </div>
        <div class="track-item-details">
          <div class="track-item-title">${track.title}</div>
          <div class="track-item-artist">${track.artist}</div>
        </div>
        <a href="${track.externalUrl}" target="_blank" rel="noopener" class="text-muted" title="Open on platform" style="font-size:0.8rem; margin-right: 0.5rem;" onclick="event.stopPropagation();">↗</a>
      </div>
    `
    )
    .join("");

  document.querySelectorAll(".track-item").forEach((el) => {
    el.addEventListener("click", () => {
      const idx = parseInt(el.getAttribute("data-index"), 10);
      loadTrack(idx, true);
    });
  });

  loadTrack(0, false);
}

function loadTrack(index, autoPlay = false) {
  currentTrackIndex = index;
  const track = UniverseData.soundtrack[index];
  if (!track) return;

  const titleEl = document.getElementById("player-title");
  const artistEl = document.getElementById("player-artist");
  const artworkEl = document.getElementById("player-artwork");
  const noteEl = document.getElementById("player-note");

  if (titleEl) titleEl.textContent = track.title;
  if (artistEl) artistEl.textContent = track.artist;
  if (artworkEl) {
    artworkEl.src = track.cover;
    artworkEl.onerror = () => {
      artworkEl.src =
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' fill='%2310152B'><rect width='100%' height='100%'/><text x='50%' y='50%' fill='%239B87FF' font-size='48' dominant-baseline='middle' text-anchor='middle'>♫</text></svg>";
    };
  }
  if (noteEl) noteEl.textContent = track.note || "";

  document.querySelectorAll(".track-item").forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });

  audioPlayer.src = track.src;
  audioPlayer.load();

  if (autoPlay) {
    playAudio();
  } else {
    pauseAudio();
  }
}

function playAudio() {
  audioPlayer
    .play()
    .then(() => {
      isPlaying = true;
      updatePlayBtnUI();
    })
    .catch(() => {
      isPlaying = false;
      updatePlayBtnUI();
    });
}

function pauseAudio() {
  audioPlayer.pause();
  isPlaying = false;
  updatePlayBtnUI();
}

function updatePlayBtnUI() {
  const playBtn = document.getElementById("play-main-toggle");
  if (!playBtn) return;
  playBtn.innerHTML = isPlaying ? "⏸" : "▶";
}

function initAudioPlayer() {
  const playBtn = document.getElementById("play-main-toggle");
  const prevBtn = document.getElementById("player-prev");
  const nextBtn = document.getElementById("player-next");
  const progressFill = document.getElementById("progress-fill");
  const progressBar = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("player-current-time");
  const totalDurationEl = document.getElementById("player-total-duration");

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      let idx = currentTrackIndex - 1;
      if (idx < 0) idx = UniverseData.soundtrack.length - 1;
      loadTrack(idx, true);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      let idx = (currentTrackIndex + 1) % UniverseData.soundtrack.length;
      loadTrack(idx, true);
    });
  }

  audioPlayer.addEventListener("timeupdate", () => {
    if (!audioPlayer.duration) return;
    const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    if (progressFill) progressFill.style.width = `${pct}%`;
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
  });

  audioPlayer.addEventListener("loadedmetadata", () => {
    if (totalDurationEl) totalDurationEl.textContent = formatTime(audioPlayer.duration);
  });

  audioPlayer.addEventListener("ended", () => {
    let idx = (currentTrackIndex + 1) % UniverseData.soundtrack.length;
    loadTrack(idx, true);
  });

  if (progressBar) {
    progressBar.addEventListener("click", (e) => {
      if (!audioPlayer.duration) return;
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * audioPlayer.duration;
      audioPlayer.currentTime = newTime;
    });
  }
}

function formatTime(secs) {
  if (isNaN(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

/* -------------------------------------------------------------
 * 5. Memories Photo Gallery & Lightbox
 * ------------------------------------------------------------- */
function renderGallery() {
  const container = document.getElementById("gallery-container");
  if (!container) return;

  container.innerHTML = UniverseData.gallery
    .map(
      (item) => `
      <div class="gallery-card" onclick="openPhotoModal('${item.src}', '${item.title}', '${item.caption}')">
        <img src="${item.src}" alt="${item.title}" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'500\\' fill=\\'%2310152B\\'><rect width=\\'100%\\' height=\\'100%\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%237057D9\\' font-size=\\'22\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'>Photo: ${item.category}</text></svg>'">
        <div class="gallery-overlay">
          <div class="gallery-category">${item.category}</div>
          <div class="gallery-title serif">${item.title}</div>
          <div class="gallery-caption">${item.caption}</div>
        </div>
      </div>
    `
    )
    .join("");
}

window.openPhotoModal = function (src, title, caption) {
  const modal = document.getElementById("custom-modal");
  const modalBody = document.getElementById("modal-body");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="text-align: center;">
      <img src="${src}" alt="${title}" style="max-height: 60vh; margin: 0 auto 1.5rem; border-radius: 12px; box-shadow: var(--shadow-subtle);" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'500\\' height=\\'500\\' fill=\\'%2310152B\\'><rect width=\\'100%\\' height=\\'100%\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%239B87FF\\' font-size=\\'24\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'>${title}</text></svg>'">
      <h3 class="serif" style="font-size: 1.5rem; margin-bottom: 0.5rem;">${title}</h3>
      <p class="text-muted" style="font-size: 0.95rem;">${caption}</p>
    </div>
  `;
  modal.classList.add("open");
};

/* -------------------------------------------------------------
 * 6. Letters & Envelopes Experience
 * ------------------------------------------------------------- */
function renderEnvelopes() {
  const container = document.getElementById("envelopes-container");
  if (!container) return;

  container.innerHTML = UniverseData.letters
    .map(
      (letter) => `
      <div class="envelope-card" onclick="openLetterModal('${letter.id}')">
        <div class="envelope-icon">✉</div>
        <div class="envelope-tag">${letter.tag}</div>
        <h4 class="envelope-title serif">${letter.title}</h4>
        <p class="envelope-preview">${letter.preview}</p>
      </div>
    `
    )
    .join("");
}

window.openLetterModal = function (letterId) {
  const letter = UniverseData.letters.find((l) => l.id === letterId);
  if (!letter) return;

  const modal = document.getElementById("custom-modal");
  const modalBody = document.getElementById("modal-body");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="envelope-tag" style="text-align:center;">${letter.tag}</div>
    <h3 class="serif" style="font-size: 1.8rem; text-align: center; margin-bottom: 1.5rem;">${letter.title}</h3>
    <div class="letter-body">${letter.content}</div>
  `;
  modal.classList.add("open");
};

/* -------------------------------------------------------------
 * 7. Conversations Rendering
 * ------------------------------------------------------------- */
function renderConversations() {
  const container = document.getElementById("conversations-container");
  if (!container) return;

  container.innerHTML = UniverseData.conversations
    .map(
      (chat) => `
      <div class="convo-card">
        <div class="convo-header">
          <span>${chat.category}</span>
          <span>${chat.date}</span>
        </div>
        <h4 class="convo-title serif">${chat.title}</h4>
        <div class="convo-body">${chat.description}</div>
        <div class="convo-note">Note: ${chat.note}</div>
      </div>
    `
    )
    .join("");
}

/* -------------------------------------------------------------
 * 8. Little Things Rendering
 * ------------------------------------------------------------- */
function renderLittleThings() {
  const container = document.getElementById("little-things-container");
  if (!container) return;

  container.innerHTML = UniverseData.littleThings
    .map(
      (item) => `
      <div class="little-thing-card">
        <div class="little-thing-badge">${item.badge}</div>
        <h4 class="little-thing-title serif">${item.title}</h4>
        <p class="little-thing-desc">${item.description}</p>
      </div>
    `
    )
    .join("");
}

/* -------------------------------------------------------------
 * 9. Navigation & Modal Handlers
 * ------------------------------------------------------------- */
function initNavigation() {
  const menuBtn = document.getElementById("mobile-menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  const modal = document.getElementById("custom-modal");
  const closeBtn = document.getElementById("modal-close");

  if (modal && closeBtn) {
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) {
        modal.classList.remove("open");
      }
    });
  }

  const secretBtn = document.getElementById("secret-star");
  if (secretBtn) {
    secretBtn.addEventListener("click", () => {
      const modal = document.getElementById("custom-modal");
      const modalBody = document.getElementById("modal-body");
      if (!modal || !modalBody) return;

      modalBody.innerHTML = `
        <div style="text-align: center;">
          <div style="font-size: 2.5rem; color: var(--gold-warm); margin-bottom: 0.5rem;">✦</div>
          <h3 class="serif" style="font-size: 1.8rem; margin-bottom: 1rem;">A Little Corner Just for You</h3>
          <p class="letter-body" style="text-align: center; margin-top: 0;">
            "Some people don't just become a part of your life.<br>
            They slowly become a place where your heart feels at home."
          </p>
          <div style="margin-top: 1.5rem; font-size: 0.85rem; color: var(--violet-electric);">
            To many more conversations, more shared tracks, and every ordinary day made extraordinary.
          </div>
        </div>
      `;
      modal.classList.add("open");
    });
  }
}
