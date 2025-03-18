// Function to load and insert header and footer
async function loadHeaderAndFooter() {
  try {
    const response = await fetch('/components/header-footer.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    
    // Create a temporary container
    const temp = document.createElement('div');
    temp.innerHTML = html;
    
    // Extract and insert header
    const header = temp.querySelector('header');
    if (header) {
      document.body.insertBefore(header, document.body.firstChild);
    }
    
    // Extract and insert footer
    const footer = temp.querySelector('footer');
    if (footer) {
      document.body.appendChild(footer);
    }
    
    // Initialize mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
      });
    }
  } catch (error) {
    console.error('Error loading header/footer:', error);
  }
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeaderAndFooter);