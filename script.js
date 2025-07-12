const features = [
    {
      img: "Images/developer.png",
      alt: "Dev Comfort",
      title: "Developer-First Comfort",
      desc: "Like the perfect insole, LacePHP adapts to your workflow with intuitive APIs, clear conventions and a CLI command named lace. There is no hidden magic, just explicit, predictable behavior."
    },
    {
      img: "Images/modular-design.png",
      alt: "Modular Design",
      title: "Modular, Layered Design",
      desc: "The framework is organized into layers: Sole handles core features like routing and middleware. Footbed stores runtime files. Laces contains your main application code. Insole allows adding plugins or helpers separately from core logic."
    },
    {
      img: "Images/offline-friendly.png",
      alt: "Offline Support",
      title: "Offline Friendly & Self Contained",
      desc: "LacePHP works out of the box, even without internet or heavy dependencies. To share a local API simply run php lace dev:share. To use the PHP built-in web server use php lace tread."
    },
    {
      img: "Images/api.png",
      alt: "API First",
      title: "API-First & CLI-Driven",
      desc: "Every part of the system, from HTTP routes to background jobs to AI scaffolding is accessible via a consistent CLI. If your shoe has an API, LacePHP makes it easy to define, document and test it."
    },
    {
      img: "Images/lightweight.png",
      alt: "Lightweight",
      title: "Lightweight and Performant",
      desc: "Minimize overhead by avoiding large service containers or hidden global state. We keep things fast."
    },
    {
      img: "Images/story-driven.png",
      alt: "Learning",
      title: "Story-Driven Learning",
      desc: "Documentation is woven in as a relatable, multi-chapter guide. Think of it as a fit test before you lace up: step by step, use case driven with real-world code samples."
    },
    {
      img: "Images/securedefualt.png",
      alt: "Security",
      title: "Secure by Default",
      desc: "All inputs are sanitized at the boundary including input values, headers and files. Built-in CSRF protection and optional encryption or signing helpers help keep your app on solid footing."
    },
    {
      img: "Images/ethical-accessiblity.png",
      alt: "Accessible",
      title: "Ethical and Accessible",
      desc: "Inspired by social impact initiatives, LacePHP is designed for everyone with clean code, screen reader friendly output, simple licensing (MIT), and a community that values teaching over transaction."
    },
    {
      img: "Images/extendble-future.png",
      alt: "Future Proof",
      title: "Extendable and Future Proof",
      desc: "Whether you add AI powered scaffolding, real-time WebSocket support, or advanced caching, LacePHP’s clear folder structure and plugin points let you upgrade or swap parts without replacing the whole shoe."
    }
  ];

  const featuresGrid = document.getElementById("featuresGrid");

  features.map(feature => {
    const card = document.createElement("div");
    card.className = "feature-card-container";
    card.innerHTML = `
      <span class="plus-icon top-left">+</span>
      <span class="plus-icon top-right">+</span>
      <span class="plus-icon bottom-left">+</span>
      <span class="plus-icon bottom-right">+</span>
      <div class="feature-card">
        <img src="${feature.img}" alt="${feature.alt}" class="feature-icon" />
        <h5>${feature.title}</h5>
        <p>${feature.desc}</p>
      </div>
    `;
    featuresGrid.appendChild(card);
  });

