const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const linkedinProfileLink = document.getElementById("linkedinProfileLink");
if (linkedinProfileLink) {
  const profileUrl = (linkedinProfileLink.dataset.profileUrl || "").trim();

  try {
    const parsedUrl = new URL(profileUrl);
    const isLinkedInProfile =
      parsedUrl.protocol === "https:" &&
      /(^|\.)linkedin\.com$/i.test(parsedUrl.hostname) &&
      parsedUrl.pathname.startsWith("/in/");

    if (isLinkedInProfile) {
      linkedinProfileLink.href = parsedUrl.href;
      linkedinProfileLink.target = "_blank";
      linkedinProfileLink.rel = "noopener noreferrer";
      linkedinProfileLink.removeAttribute("aria-disabled");
      linkedinProfileLink.removeAttribute("tabindex");
      linkedinProfileLink.classList.remove("is-unconfigured");

      const urlNote = document.getElementById("linkedinUrlNote");
      if (urlNote) urlNote.hidden = true;
    }
  } catch {
    // Keep the profile entry inactive until a valid LinkedIn URL is added.
  }
}
