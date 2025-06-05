let currentPath = window.location.pathname;
let currentFile =
  currentPath === "/" ? "index.html" : currentPath.split("/")[1];

document.querySelectorAll(".nav-link").forEach((link) => {
  const href = link.getAttribute("href").replace("/", "");

  if (href === currentFile || (href === "" && currentFile === "index.html")) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
    link.classList.add("sub");
  }
});
