class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="nav">
        <div id="nav-container">
            <header class="container">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a href="./index.html" class="nav-link" aria-current="page"
                        >Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="./about.html" class="nav-link">About</a>
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
