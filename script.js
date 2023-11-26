const portfolioData = [
  {
    title: "LARE Jatim",
    job: "Development",
    description:
      "A child protection problem reporting app, with features such chat, forum, and emergency contacts.",
    image: "./assets/images/img_lare.png",
  },
  {
    title: "Invigo",
    job: "Development",
    description:
      "With an easy to use pitching system, this website connects start up founders, investors, and law firms.",
    image: "./assets/images/img_invigo.png",
  },
  {
    title: "DuitKiddo",
    job: "Development",
    description:
      "A banking app built to help parents teach their children about financial literacy and responsibility.",
    image: "./assets/images/img_duitkiddo.png",
  },
  {
    title: "Kultura",
    job: "Design & Development",
    description:
      "A website of an Indonesian cultural exhibition, it promotes traditional cultures for young generations.",
    image: "./assets/images/img_kultura.png",
  },
  {
    title: "Siberpedia",
    job: "Design & Development",
    description:
      "An educational website that targets young netizens, which teaches all about cyber security and threats.",
    image: "./assets/images/img_siberpedia.png",
  },
];

createPortfolioItem = (data, index) => {
  const container = document.createElement("div");
  container.className = "basis-auto md:w-1/2 lg:w-1/3 md:p-3 h-52 md:h-56";

  const portfolioItem = document.createElement("div");
  portfolioItem.className =
    "h-full w-full bg-[url('" +
    data.image +
    "')] bg-cover cursor-default rounded-3xl relative project-item reveal";
  portfolioItem.style.transitionDelay = `${index * 200}ms`;

  const overlay = document.createElement("div");
  overlay.className =
    "absolute top-0 left-0 w-full h-full bg-gray-700 opacity-0 transition-opacity duration-300 rounded-3xl";
  portfolioItem.appendChild(overlay);

  const content = document.createElement("div");
  content.className =
    "absolute top-0 opacity-0 left-0 px-8 h-full w-full flex flex-col transition-opacity duration-300 justify-center";
  portfolioItem.appendChild(content);

  const job = document.createElement("div");
  job.className = "text-xs text-white opacity-90 font-light";
  job.textContent = data.job;
  content.appendChild(job);

  const title = document.createElement("div");
  title.className = "text-xl mt-2 mb-2.5 font-semibold text-white";
  title.textContent = data.title;
  content.appendChild(title);

  const description = document.createElement("div");
  description.className = "text-white";
  description.textContent = data.description;
  content.appendChild(description);

  portfolioItem.addEventListener("mouseenter", () => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-65");
    content.classList.remove("opacity-0");
    content.classList.add("opacity-100");
  });

  portfolioItem.addEventListener("mouseleave", () => {
    overlay.classList.add("opacity-0");
    overlay.classList.remove("opacity-65");
    content.classList.add("opacity-0");
    content.classList.remove("opacity-100");
  });

  container.appendChild(portfolioItem);
  return container;
};

const portfolioContainer = document.querySelector(".portfolio-container");
for (var i = 0; i < portfolioData.length; i++) {
  const portfolioItem = createPortfolioItem(portfolioData[i], i);
  portfolioContainer.appendChild(portfolioItem);
}

const revealElements = document.querySelectorAll(".reveal");

const reveal = () => {
  for (let i = 0; i < revealElements.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = revealElements[i].getBoundingClientRect().top;
    let revealpoint = 0;

    if (revealtop < windowheight - revealpoint) {
      revealElements[i].classList.add("active");
    }
  }
};
window.addEventListener("scroll", reveal);
reveal();
