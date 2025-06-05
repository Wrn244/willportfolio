class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="nav">
        <div id="nav-container">
            <header class="container">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a href="/" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="/about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="/projects" class="nav-link">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="/resume" class="nav-link" style="color:none">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a href="/contact" class="nav-link">Contact</a>
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
