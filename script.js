const projects = [
  {
    id: "x-long-white",
    client: "X by Long White",
    title: "The Sugar Liquidation Sale!",
    line: "We turned the sugar Long White left out of its new RTD, X, into a full-blown mid-90s-style sugar sale, starring our deranged salesman Gary.",
    role: "Launch platform / film / social",
    result: "Gary lived. Sugar moved.",
    color: "#d92d21",
    image: "assets/xlong-1.jpg",
    thumb: "assets/xlong-2.jpg",
    intro: "assets/intro-x-long-white.gif",
    note: "Sugar sale",
    awards: ["Bestads Best Interactive Winner"],
    media: [
      { type: "embed", title: "The Sugar Liquidation Sale!", src: "https://player.vimeo.com/video/1132862636", orientation: "landscape", autoplay: false, manual: true, poster: "assets/xlong-1.jpg" },
      { type: "image", title: "PR mockup", src: "assets/xlong-seq-01.jpg" },
      { type: "image", title: "PR mockup", src: "assets/xlong-seq-02.jpg" },
      { type: "image", title: "OOH", src: "assets/xlong-seq-03.jpg" },
      { type: "embed", title: "Sugar Liquidation Sale! Dancing", src: "https://player.vimeo.com/video/1132863466", orientation: "landscape", autoplay: true },
      { type: "image", title: "Old notebook", src: "assets/xlong-seq-04.gif" },
      { type: "image", title: "PR mockup", src: "assets/xlong-seq-05.jpg" },
      { type: "video", title: "Sugar pour", src: "assets/xlong-seq-06.mp4", orientation: "landscape" }
    ],
    watch: "https://vimeo.com/1132862636"
  },
  {
    id: "wwf",
    client: "WWF",
    title: "Give Shane Jones the Finger",
    line: "We corralled 40,000+ New Zealander's to give a corrupt Ocean and Fisheries Minister the fish finger.",
    role: "Activation / protest / earned",
    result: "40,000+ public fingers.",
    color: "#2f7655",
    image: "assets/wwf-1.jpg",
    thumb: "assets/wwf-2.jpg",
    intro: "assets/intro-wwf.gif",
    note: "Public pressure",
    awards: ["AWARD Bronze", "Cairns Crocodiles Bronze", "4x AXIS Bronze", "Bestads Best Interactive Winner"],
    media: [
      { type: "embed", title: "WWF The Finger", src: "https://player.vimeo.com/video/1110653590", orientation: "landscape", autoplay: true },
      { type: "image", title: "Campaign image", src: "assets/wwf-seq-01.jpg" },
      { type: "image", title: "Campaign screenshot", src: "assets/wwf-seq-02.png" },
      { type: "image", title: "Campaign screenshot", src: "assets/wwf-seq-03.png" },
      { type: "image", title: "Campaign image", src: "assets/wwf-seq-04.jpg" },
      { type: "image", title: "Campaign image", src: "assets/wwf-seq-05.jpg" },
      { type: "image", title: "Campaign image", src: "assets/wwf-seq-06.jpg" }
    ],
    watch: "https://vimeo.com/1110653590"
  },
  {
    id: "realestate",
    client: "Realestate.co.nz",
    title: "Your Next Rental Starts Here",
    line: "We highlighted all the reasons renters move to show that finding your next rental starts at Realestate.co.nz.",
    role: "OOH / print / platform",
    result: "Renting made painfully legible.",
    color: "#2f6f9f",
    image: "assets/realestate-1.jpg",
    thumb: "assets/realestate-2.jpg",
    note: "Rental reasons",
    awards: ["Bestads Best Outdoor Winner"],
    media: [
      { type: "image", title: "Outdoor", src: "assets/realestate-seq-01.jpg" },
      { type: "image", title: "Outdoor", src: "assets/realestate-seq-02.jpg" },
      { type: "image", title: "Outdoor", src: "assets/realestate-seq-03.jpg" },
      { type: "image", title: "Outdoor", src: "assets/realestate-seq-04.jpg" },
      { type: "image", title: "Outdoor", src: "assets/realestate-seq-05.jpg" }
    ],
    watch: "https://zacandcasey.com/realestate-co-nz"
  },
  {
    id: "no-ugly",
    client: "No Ugly Gut",
    title: "Beauty is Gut Deep",
    line: "We turned probiotic bacteria into works of art for a wellness drink brand called No Ugly Gut.",
    role: "Design / OOH / film",
    result: "Bacteria, but gallery-lit.",
    color: "#94352f",
    image: "assets/nougly-1.jpg",
    thumb: "assets/nougly-2.jpg",
    intro: "assets/intro-no-ugly.gif",
    note: "Bacteria art",
    awards: ["AXIS Silver", "2x AXIS Bronze", "Bestads Best Outdoor Winner"],
    media: [
      { type: "embed", title: "No Ugly Gut", src: "https://player.vimeo.com/video/1110651390", orientation: "landscape", autoplay: true },
      { type: "image", title: "Campaign cover", src: "assets/nougly-seq-01.jpg" },
      { type: "image", title: "OOH blue", src: "assets/nougly-seq-02.jpg" },
      { type: "image", title: "Mockup", src: "assets/nougly-seq-03.jpg" },
      { type: "image", title: "Press", src: "assets/nougly-seq-04.jpg" },
      { type: "image", title: "OOH red", src: "assets/nougly-seq-05.jpg" }
    ],
    watch: "https://vimeo.com/1110651390"
  },
  {
    id: "post-it",
    client: "Post-it",
    title: "A Little Space to Think",
    line: "We made the humble note relevant when the world was glued to screens in COVID lockdown.",
    role: "Film / digital / participation",
    result: "A tiny square got roomy again.",
    color: "#9b7800",
    image: "assets/postit-1.jpg",
    thumb: "assets/postit-2.jpg",
    note: "Screen relief",
    awards: ["AWARD Bronze", "Bestads Best Interactive Winner"],
    media: [
      { type: "embed", title: "Post-it Case Study", src: "https://www.youtube-nocookie.com/embed/fLFetCZcl6I", orientation: "landscape", autoplay: true },
      { type: "image", title: "Idea board", src: "assets/postit-seq-01.jpg" },
      { type: "image", title: "Idea board", src: "assets/postit-seq-02.jpg" },
      { type: "image", title: "Idea board", src: "assets/postit-seq-03.jpg" }
    ],
    watch: "https://youtu.be/fLFetCZcl6I"
  },
  {
    id: "bulla",
    client: "Bulla Family Dairy",
    title: "Chief Cottage Cheese Officer",
    line: "We created a lovable, cringeworthy cottage cheese influencer for Australia's most beloved dairy company. She blew up on the TikToks, as my grandpa would say. People loved her so much that she made it on The Gruen Transfer, B&T awarded it Best Digital Campaign and she even picked up some real earned media for selling too much cottage cheese.",
    role: "Character / social / earned",
    result: "TikTok heat and Gruen airtime.",
    color: "#4f86a6",
    image: "assets/bulla-1.jpg",
    thumb: "assets/bulla-2.png",
    note: "Cottage chief",
    awards: ["B&T Best Digital Campaign Winner"],
    media: [
      { type: "image", title: "Meet Margaret board", src: "assets/bulla-seq-01.png" },
      { type: "embed", title: "Bulla on Gruen", src: "https://player.vimeo.com/video/951795401", orientation: "landscape", autoplay: true },
      { type: "embed", title: "Intro", src: "https://player.vimeo.com/video/1059403358", orientation: "portrait", autoplay: true },
      { type: "embed", title: "POV", src: "https://player.vimeo.com/video/1059403352", orientation: "portrait", autoplay: true },
      { type: "embed", title: "Eat in a Day", src: "https://player.vimeo.com/video/1059403329", orientation: "portrait", autoplay: true }
    ],
    watch: "https://vimeo.com/951795401"
  },
  {
    id: "two-truths",
    client: "TwoTruths",
    title: "No Lies",
    line: "We launched an indie wine maker by preaching universal truths to the public.",
    role: "Brand / OOH / copy",
    result: "Wine with a backbone.",
    color: "#70425f",
    image: "assets/twotruths-1.jpg",
    thumb: "assets/twotruths-2.jpg",
    note: "Plain truths",
    media: [
      { type: "image", title: "Billboard", src: "assets/twotruths-seq-01.jpg" },
      { type: "image", title: "Poster", src: "assets/twotruths-seq-02.jpg" },
      { type: "image", title: "Poster", src: "assets/twotruths-seq-03.jpg" },
      { type: "image", title: "Poster", src: "assets/twotruths-seq-04.jpg" }
    ],
    watch: "https://zacandcasey.com/two-truths"
  },
  {
    id: "young-lions",
    hidden: true,
    client: "Young Lions",
    title: "Digital Brief",
    line: "We won the Global Young Lions Digital Competition in 2023. Good luck reading through all of it.",
    role: "Digital / pitch / competition",
    result: "Global Gold.",
    color: "#b65a2d",
    image: "assets/young-1.jpg",
    thumb: "assets/young-2.jpg",
    note: "Global gold",
    awards: ["Cannes Young Lions Global Gold", "Cannes Young Lions Australia Gold"],
    media: [
      { type: "image", title: "Round 1", src: "assets/young-seq-01.jpg" },
      { type: "image", title: "Round 1", src: "assets/young-seq-02.jpg" },
      { type: "image", title: "Round 1", src: "assets/young-seq-03.jpg" },
      { type: "image", title: "Round 1", src: "assets/young-seq-04.jpg" },
      { type: "image", title: "Round 1", src: "assets/young-seq-05.jpg" },
      { type: "image", title: "Round 1", src: "assets/young-seq-06.jpg" },
      { type: "image", title: "Round 1", src: "assets/young-seq-07.jpg" },
      { type: "image", title: "Round 1", src: "assets/young-seq-08.jpg" },
      { type: "image", title: "Round 1", src: "assets/young-seq-09.jpg" },
      { type: "image", title: "Round 1", src: "assets/young-seq-10.jpg" },
      { type: "image", title: "Round 1", src: "assets/young-seq-11.jpg" },
      { type: "image", title: "Verify Me", src: "assets/young-seq-12.jpg" },
      { type: "image", title: "Verify Me", src: "assets/young-seq-13.jpg" },
      { type: "image", title: "Verify Me", src: "assets/young-seq-14.jpg" },
      { type: "image", title: "Verify Me", src: "assets/young-seq-15.jpg" },
      { type: "image", title: "Verify Me", src: "assets/young-seq-16.jpg" },
      { type: "image", title: "Verify Me", src: "assets/young-seq-17.jpg" },
      { type: "image", title: "Verify Me", src: "assets/young-seq-18.jpg" },
      { type: "image", title: "Verify Me", src: "assets/young-seq-19.jpg" },
      { type: "image", title: "Verify Me", src: "assets/young-seq-20.jpg" },
      { type: "image", title: "Verify Me", src: "assets/young-seq-21.jpg" },
      { type: "image", title: "Verify Me", src: "assets/young-seq-22.jpg" },
      { type: "image", title: "Little Learners League", src: "assets/young-seq-23.jpg" }
    ],
    watch: "https://zacandcasey.com/young-lions"
  }
];

const cases = document.querySelector("#case-studies");
const nav = document.querySelector("#site-nav");
let hashRestoreTimers = [];
let hashRestoreActive = false;

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const imageSizes = {
  "assets/bulla-seq-01.png": [1800, 1267],
  "assets/nougly-seq-01.jpg": [1800, 1013],
  "assets/nougly-seq-02.jpg": [1800, 1273],
  "assets/nougly-seq-03.jpg": [1800, 1273],
  "assets/nougly-seq-04.jpg": [1800, 2622],
  "assets/nougly-seq-05.jpg": [1800, 1273],
  "assets/postit-seq-01.jpg": [1800, 1273],
  "assets/postit-seq-02.jpg": [1800, 1273],
  "assets/postit-seq-03.jpg": [1800, 1273],
  "assets/realestate-seq-01.jpg": [1800, 1273],
  "assets/realestate-seq-02.jpg": [1800, 1273],
  "assets/realestate-seq-03.jpg": [1800, 1273],
  "assets/realestate-seq-04.jpg": [1800, 1273],
  "assets/realestate-seq-05.jpg": [1800, 1273],
  "assets/twotruths-seq-01.jpg": [1800, 1162],
  "assets/twotruths-seq-02.jpg": [1800, 1200],
  "assets/twotruths-seq-03.jpg": [1800, 1200],
  "assets/twotruths-seq-04.jpg": [1800, 1202],
  "assets/wwf-seq-01.jpg": [1800, 1200],
  "assets/wwf-seq-02.png": [1800, 1015],
  "assets/wwf-seq-03.png": [1800, 1008],
  "assets/wwf-seq-04.jpg": [1800, 1200],
  "assets/wwf-seq-05.jpg": [1800, 1200],
  "assets/wwf-seq-06.jpg": [1800, 1286],
  "assets/xlong-seq-01.jpg": [1800, 1172],
  "assets/xlong-seq-02.jpg": [1800, 1172],
  "assets/xlong-seq-03.jpg": [1800, 1200],
  "assets/xlong-seq-04.gif": [1920, 1250],
  "assets/xlong-seq-05.jpg": [1800, 1172],
  "assets/young-seq-01.jpg": [1800, 1013],
  "assets/young-seq-02.jpg": [1800, 1013],
  "assets/young-seq-03.jpg": [1800, 1013],
  "assets/young-seq-04.jpg": [1800, 1013],
  "assets/young-seq-05.jpg": [1800, 1013],
  "assets/young-seq-06.jpg": [1800, 1013],
  "assets/young-seq-07.jpg": [1800, 1013],
  "assets/young-seq-08.jpg": [1800, 1013],
  "assets/young-seq-09.jpg": [1800, 1013],
  "assets/young-seq-10.jpg": [1800, 1013],
  "assets/young-seq-11.jpg": [1800, 1013],
  "assets/young-seq-12.jpg": [1800, 1013],
  "assets/young-seq-13.jpg": [1800, 1013],
  "assets/young-seq-14.jpg": [1800, 1013],
  "assets/young-seq-15.jpg": [1800, 1013],
  "assets/young-seq-16.jpg": [1800, 1013],
  "assets/young-seq-17.jpg": [1800, 1013],
  "assets/young-seq-18.jpg": [1800, 1013],
  "assets/young-seq-19.jpg": [1800, 1013],
  "assets/young-seq-20.jpg": [1800, 1013],
  "assets/young-seq-21.jpg": [1800, 1013],
  "assets/young-seq-22.jpg": [1800, 1013],
  "assets/young-seq-23.jpg": [1800, 1276]
};

function withAutoplay(src, autoplay) {
  const separator = src.includes("?") ? "&" : "?";
  if (!autoplay) {
    if (src.includes("youtube")) {
      return `${src}${separator}autoplay=0&mute=1&playsinline=1&rel=0&modestbranding=1&controls=1&enablejsapi=1`;
    }
    return `${src}${separator}autoplay=0&muted=1&autopause=0&playsinline=1&title=0&byline=0&portrait=0&controls=0&dnt=1`;
  }
  if (src.includes("youtube")) {
    const id = src.split("/").pop();
    return `${src}${separator}autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1&controls=1&enablejsapi=1`;
  }
  return `${src}${separator}autoplay=1&muted=1&loop=1&autopause=0&playsinline=1&title=0&byline=0&portrait=0&controls=0&background=1&dnt=1`;
}

function soundToggleLabel(item) {
  return `Toggle sound for ${item.title}`;
}

function shouldRenderSoundToggle(item) {
  return !(item.type === "embed" && item.src.includes("youtube"));
}

function renderSoundToggle(item) {
  if (!shouldRenderSoundToggle(item)) return "";
  return `<button class="sound-toggle" type="button" aria-label="${soundToggleLabel(item)}" aria-pressed="false">Unmute</button>`;
}

function renderTimeline(item) {
  const label = item.manual ? "Waiting to play" : "Timeline";
  return `<span class="video-timeline" aria-label="${label}"><i></i></span>`;
}

function renderPlayButton(item) {
  if (!item.manual) return "";
  return `<button class="video-play" type="button" aria-label="Play ${item.title}"><span>Play</span></button>`;
}

function renderMediaItem(item, project) {
  if (item.type === "image") {
    const size = imageSizes[item.src];
    const dimensions = size ? ` width="${size[0]}" height="${size[1]}"` : "";
    return `
      <figure class="image-frame media-unit">
        <img src="${item.src}" alt="${project.client} - ${item.title}" loading="lazy" decoding="async"${dimensions}>
      </figure>
    `;
  }

  if (item.type === "video") {
    return `
      <figure class="video-frame video-frame--landscape media-unit">
        <video src="${item.src}" autoplay muted loop playsinline></video>
        ${renderSoundToggle(item)}
        ${renderTimeline(item)}
      </figure>
    `;
  }

  return `
    <figure class="video-frame video-frame--${item.orientation || "landscape"}${item.manual ? " video-frame--manual" : ""} media-unit"${item.poster ? ` style='--poster: url("${item.poster}")'` : ""}>
      <iframe src="${withAutoplay(item.src, item.autoplay)}" title="${item.title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      ${renderPlayButton(item)}
      ${renderSoundToggle(item)}
      ${renderTimeline(item)}
    </figure>
  `;
}

function renderMediaSequence(project) {
  const output = [];
  for (let index = 0; index < project.media.length; index += 1) {
    const item = project.media[index];

    if (item.orientation === "portrait") {
      const portraitItems = [];
      while (project.media[index]?.orientation === "portrait") {
        portraitItems.push(project.media[index]);
        index += 1;
      }
      index -= 1;
      output.push(`
        <div class="reel-grid media-unit" aria-label="${project.client} vertical social videos">
          ${portraitItems.map((portrait) => renderMediaItem(portrait, project)).join("")}
        </div>
      `);
      continue;
    }

    output.push(renderMediaItem(item, project));
  }
  return output.join("");
}

function renderAwards(project) {
  if (!project.awards?.length) return "";
  return `
    <section class="case-awards" aria-label="${project.client} awards">
      <span>Wins</span>
      <ul>
        ${project.awards.map((award) => `<li>${award}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderProjectGrid() {
  const grid = document.querySelector("#project-grid");
  if (!grid) return;
  const tilts = [-1.4, 0.8, -0.6, 1.2, -1, 0.5, -0.9, 1.1];
  grid.innerHTML = visibleProjects.map((project, index) => {
    const num = String(index + 1).padStart(2, "0");
    const src = project.thumb || project.image;
    return `
      <a class="project-card" href="#${project.id}" style='--image: url("${src}"); --tilt: ${tilts[index]}deg'>
        <span class="project-chip">${num} / ${project.role}</span>
        <div>
          <h3>${project.client}</h3>
          <p>${project.title}</p>
        </div>
      </a>
    `;
  }).join("");
}

function renderCases() {
  const tilts = [-0.4, 0.3, -0.3, 0, -0.3, 0.3, -0.3, 0.4];
  cases.innerHTML = visibleProjects.map((project, index) => {
    const num = String(index + 1).padStart(2, "0");
    return `
      <article class="case" id="${project.id}" data-project="${project.id}" style="--red: ${project.color}; --tilt: ${tilts[index]}deg">
        <header class="case-opener">
          <div class="case-kicker">
            <span>${num} / 08</span>
            <span>${project.role}</span>
          </div>
          <div class="case-head">
            <h2><span class="case-eyebrow">${project.client}</span>${project.title}</h2>
            <aside class="case-note">
              <span>${project.note || "Overview"}</span>
              <p>${project.line}</p>
            </aside>
          </div>
          ${renderAwards(project)}
        </header>
        <div class="case-media">
          <div class="media-sequence">
            ${renderMediaSequence(project)}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function wireSoundToggles() {
  document.querySelectorAll(".sound-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const frame = button.closest(".video-frame");
      const enableSound = button.getAttribute("aria-pressed") !== "true";
      button.setAttribute("aria-pressed", String(enableSound));
      button.textContent = enableSound ? "Mute" : "Unmute";

      const video = frame?.querySelector("video");
      if (video) {
        video.muted = !enableSound;
        video.volume = enableSound ? 1 : 0;
        if (enableSound) video.play().catch(() => {});
        return;
      }

      const iframe = frame?.querySelector("iframe");
      if (!iframe?.contentWindow) return;
      const source = iframe.getAttribute("src") || "";
      if (source.includes("youtube")) {
        const command = enableSound ? "unMute" : "mute";
        iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func: command, args: [] }), "*");
        return;
      }
      iframe.contentWindow.postMessage(JSON.stringify({ method: "setMuted", value: !enableSound }), "*");
      iframe.contentWindow.postMessage(JSON.stringify({ method: "setVolume", value: enableSound ? 1 : 0 }), "*");
    });
  });
}

function wireVideoControls() {
  document.querySelectorAll(".video-frame").forEach((frame) => {
    const video = frame.querySelector("video");
    if (!video) return;
    const setProgress = () => {
      if (!video.duration) return;
      const progress = Math.max(0, Math.min(100, (video.currentTime / video.duration) * 100));
      frame.style.setProperty("--video-progress", `${progress}%`);
    };
    video.addEventListener("timeupdate", setProgress);
    video.addEventListener("loadedmetadata", setProgress);
  });

  document.querySelectorAll(".video-play").forEach((button) => {
    button.addEventListener("click", () => {
      const frame = button.closest(".video-frame");
      const iframe = frame?.querySelector("iframe");
      if (!iframe?.contentWindow) return;
      frame.classList.add("is-playing");
      iframe.contentWindow.postMessage(JSON.stringify({ method: "play" }), "*");
      iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: [] }), "*");
    });
  });
}

function wireInteractions() {
  const defaultProject = projects[0];
  const defaultRed = getComputedStyle(document.documentElement).getPropertyValue("--red").trim() || defaultProject.color;

  document.querySelectorAll("[data-project-link]").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const project = projects.find((item) => item.id === link.dataset.projectLink);
      if (project) document.documentElement.style.setProperty("--red", project.color);
    });
    link.addEventListener("mouseleave", () => {
      document.documentElement.style.setProperty("--red", defaultRed);
    });
  });

  const setActiveSection = (id) => {
    const project = projects.find((item) => item.id === id);
    document.querySelectorAll("[data-project-link]").forEach((link) => {
      link.classList.toggle("is-current", link.dataset.projectLink === id);
    });
    document.querySelectorAll("[data-section-link]").forEach((link) => {
      link.classList.toggle("is-current", link.dataset.sectionLink === id);
    });
    if (project) {
      document.documentElement.style.setProperty("--red", project.color);
    } else if (id === "awards") {
      document.documentElement.style.setProperty("--red", defaultRed);
    } else {
      document.documentElement.style.setProperty("--red", defaultRed);
    }
  };

  const trackedSections = Array.from(document.querySelectorAll(".case, #awards"));
  let activeTicking = false;
  const updateActiveFromScroll = () => {
    const marker = window.innerHeight * 0.68;
    let activeId = null;
    let closestTop = Number.NEGATIVE_INFINITY;

    trackedSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= marker && rect.bottom > 80 && rect.top > closestTop) {
        closestTop = rect.top;
        activeId = section.id;
      }
    });

    if (!activeId) {
      const firstVisible = trackedSections.find((section) => section.getBoundingClientRect().bottom > 80);
      activeId = firstVisible ? firstVisible.id : null;
    }

    setActiveSection(activeId);
    activeTicking = false;
  };

  const queueActiveUpdate = () => {
    if (activeTicking) return;
    activeTicking = true;
    window.requestAnimationFrame(updateActiveFromScroll);
  };

  window.addEventListener("scroll", queueActiveUpdate, { passive: true });
  window.addEventListener("resize", queueActiveUpdate);
  updateActiveFromScroll();

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  const railToggle = document.querySelector(".rail-toggle");
  railToggle?.addEventListener("click", () => {
    const collapsed = document.body.classList.toggle("rail-collapsed");
    railToggle.setAttribute("aria-expanded", String(!collapsed));
  });
}

const visibleProjects = projects.filter((p) => !p.hidden);
renderProjectGrid();
renderCases();
document.querySelectorAll(".case-opener, .case-media").forEach((el) => el.classList.add("reveal"));
wireSoundToggles();
wireVideoControls();
wireInteractions();

function scrollToHash(hash = window.location.hash) {
  if (!hash || hash.length < 2) return;
  const el = document.getElementById(hash.slice(1));
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top, left: 0, behavior: "auto" });
}

function scheduleHashRestore(hash = window.location.hash) {
  hashRestoreTimers.forEach((timer) => window.clearTimeout(timer));
  hashRestoreTimers = [];
  if (!hash || hash.length < 2) return;
  hashRestoreActive = true;

  [0, 120, 360, 900, 1800].forEach((delay) => {
    hashRestoreTimers.push(window.setTimeout(() => scrollToHash(hash), delay));
  });
  hashRestoreTimers.push(window.setTimeout(() => {
    hashRestoreActive = false;
  }, 2100));
}

function cancelHashRestore() {
  if (!hashRestoreActive) return;
  hashRestoreTimers.forEach((timer) => window.clearTimeout(timer));
  hashRestoreTimers = [];
  hashRestoreActive = false;
}

if (window.location.hash) {
  requestAnimationFrame(() => scheduleHashRestore());
}

window.addEventListener("hashchange", () => scheduleHashRestore());
window.addEventListener("load", () => {
  if (window.location.hash) scheduleHashRestore();
});
window.addEventListener("wheel", cancelHashRestore, { passive: true });
window.addEventListener("touchstart", cancelHashRestore, { passive: true });
window.addEventListener("keydown", (event) => {
  if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
    cancelHashRestore();
  }
});
