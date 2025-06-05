class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="nav">
        <div id="nav-container">
            <header class="container">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a href="/" class="nav-link" aria-current="page"
                        >Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="./projects.html" class="nav-link">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="./resume.html" class="nav-link">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a href="./contact.html" class="nav-link">Contact</a>
                    </li>
                </ul>
            </header>
        </div>
    </section>
    `;
  }
}

// Define the custom element
customElements.define("my-navbar", MyNavbar);

window.onload = function(){
    const currentFile = window.location.pathname.split("/")[1] || "index.html";
    console.log(window.location.pathname.split("/"));
  // Loop through all nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href").replace("/", "");
    //console.log(href, currentFile);
    if (href === currentFile) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
      link.classList.add("sub");
    }
  });
}