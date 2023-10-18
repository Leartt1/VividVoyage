const accessKey = "6nfzhp-lfHa5O9g-OwoYrD-Uqt6wamuuOsiVDFyiUPY"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
  
      if (data.results) {
        const results = data.results;
  
        if (page === 1) {
          searchResults.innerHTML = "";
        }
  
        results.map((result) => {
          const imageWrapper = document.createElement('div');
          imageWrapper.classList.add('search-result');
          const image = document.createElement('img');
          image.src = result.urls.small;
          image.alt = result.alt_description;
          const imageLink = document.createElement('a');
          imageLink.href = result.links.html;
          imageLink.target = "_blank";
          imageLink.textContent = result.alt_description;
  
          imageWrapper.appendChild(image);
          imageWrapper.appendChild(imageLink);
          searchResults.appendChild(imageWrapper);
        });
  
        page++;
        if (page > 1) {
          showMore.style.display = "block";
        }
      } else {
        console.error('No results found in the API response.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


formEl.addEventListener("submit", (event) =>{
    event.preventDefault();
    page = 1;
    searchImages();
})
showMore.addEventListener("click", (event) =>{

    searchImages();
})

const navLinks = document.querySelectorAll('nav a');

    // Add click event listeners to the navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior

            // Get the target section's ID from the href attribute of the clicked link
            const targetId = link.getAttribute('href').substring(1);

            // Find the target section by its ID
            const targetSection = document.getElementById(targetId);

            // Scroll smoothly to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    const contactButton = document.querySelector('.contact-us');

    // Add click event listener to the button
    contactButton.addEventListener('click', () => {
        // Get the target section's ID (e.g., "contact") that you want to scroll to
        const targetId = "contact";

        // Find the target section by its ID
        const targetSection = document.getElementById(targetId);

        // Scroll smoothly to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });


    
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
    
    menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});
