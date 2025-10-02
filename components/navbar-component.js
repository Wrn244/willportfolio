class MyNavbar extends HTMLElement {
  connectedCallback() {

    const repoName = 'willportfolio'; // change if repo name changes
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const isProjectSite = window.location.hostname.endsWith('github.io') || pathSegments.includes(repoName);
    const base = isProjectSite ? `/${repoName}/` : '/';

    const href = (p) => (base + p).replace(/\/{2,}/g, '/'); // avoids double-slashes    

    this.innerHTML = `
    <section class="nav">
        <div id="nav-container">
            <header class="container">
                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="${href('index.html')}" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="${href('about/index.html')}" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="${href('projects/index.html')}" class="nav-link">Projects</a></li>
                    <li class="nav-item"><a href="${href('resume/index.html')}" class="nav-link">Resume</a></li>
                    <li class="nav-item"><a href="${href('contact/index.html')}" class="nav-link">Contact</a></li>
            </ul>
            </header>
        </div>
    </section>
    `;
  }
}

// Define the custom element
customElements.define("my-navbar", MyNavbar);
