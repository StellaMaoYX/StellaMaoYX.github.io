// 1. Define Sidebar HTML
const sidebarHTML = `
<aside class="sidebar">
    <img src="Asset/avatar.jpeg" alt="Stella personal portrait" class="avatar">
    
    <div class="sidebar-section">
        <p><a href="mailto:stellamaoyaxuan@gmail.com">stellamaoyaxuan@gmail.com</a></p>
    </div>

    <div class="sidebar-section">
        <h3>Education:</h3>
        <p>
            <a href="https://www.scm.cityu.edu.hk/en/programmes/undergraduate/bsccm" target="_blank">B.Sc. in Creative Media - City University of Hong Kong</a>
        </p>
        <p>
            <a href="https://www.hcde.washington.edu/" target="_blank">M.S. in Human-Centered Design & Engineering - University of Washington</a>
        </p>
    </div>
    
    <div class="sidebar-section">
        <h3><a href="Asset/Resume.pdf" target="_blank">[Resume]</a></h3>
    </div>

    <div class="sidebar-section">
        <h3><a href="Asset/CV.pdf" target="_blank">[CV]</a></h3>
    </div>
</aside>
`;

// 2. Define Header HTML
// Note: Logic updated to automatically highlight the active link based on URL
const headerHTML = `
<header>
    <div class="site-title">
        <img src="Asset/B&WLogo.png" alt="Stella Personal Website Logo" class="site-logo">
        YAXUAN (STELLA) MAO
    </div>
    <nav>
        <a href="index.html" id="link-index">About</a>
        <a href="publications.html" id="link-publications">Publications</a>
        <a href="portfolio.html" id="link-portfolio">Portfolio</a>
        <a href="misc.html" id="link-misc">Misc.</a>
    </nav>
</header>
`;

// 3. Function to inject layout elements
function loadLayout() {
    // Inject Header
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    // Inject Sidebar
    const sidebarPlaceholder = document.getElementById("sidebar-placeholder");
    if (sidebarPlaceholder) {
        sidebarPlaceholder.innerHTML = sidebarHTML;
    }

    // 4. Automatically highlight current page in navigation
    highlightCurrentPage();
}

// Logic for highlighting the active link
function highlightCurrentPage() {
    // Get current filename from URL
    const currentPage = window.location.pathname.split("/").pop() || "index.html"; 
    
    // Remove 'active' class from all links first
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.classList.remove('active'));

    // Add 'active' class based on filename
    if (currentPage.includes("index")) document.getElementById("link-index").classList.add("active");
    if (currentPage.includes("publications")) document.getElementById("link-publications").classList.add("active");
    if (currentPage.includes("portfolio")) document.getElementById("link-portfolio").classList.add("active");
    if (currentPage.includes("misc")) document.getElementById("link-misc").classList.add("active");
}

// Execute immediately after page load
window.onload = loadLayout;