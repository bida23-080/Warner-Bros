document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target section smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Interactive Content for Movies, TV Shows, and News Articles
    const interactivePosters = document.querySelectorAll('.movie-poster');

    interactivePosters.forEach(poster => {
        poster.addEventListener('click', function() {
            const title = poster.getAttribute('data-title');
            const description = poster.getAttribute('data-description');

            // Display item information 
            if (title && description) {
                alert(`${title}: ${description}`);
            } else {
                alert('Error: Missing title or description for this item.');
            }
        });
    });

    // Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get all the interactive items (TV show titles)
    const interactiveItems = document.querySelectorAll('.interactive-item');

    // Add a click event listener to each interactive item
    interactiveItems.forEach(item => {
        item.addEventListener('click', () => {
            // Retrieve the title and description data attributes
            const title = item.dataset.title;
            const description = item.dataset.description;

            // Display the details (you can customize how this is shown)
            alert(`${title}: ${description}`);
        });
    });
});

    // Search Form Submission
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value.trim();

        if (searchTerm) {
            // Perform search action 
            alert(`Searching for: ${searchTerm}`);

            // Clear the search input field after submission
            searchInput.value = '';
        } else {
            // Show an error message if search term is empty
            alert('Please enter a search term.');
        }
    });

    // Form Validation for Sign Up
    const signUpForm = document.querySelector('.signup-form');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullNameInput = signUpForm.querySelector('input[name="fullname"]');
        const emailInput = signUpForm.querySelector('input[name="email"]');

        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();

        if (fullName && email) {
            // Send form data to server 
            alert(`Sign Up Successful!\nFull Name: ${fullName}\nEmail: ${email}`);

            // Reset form fields after successful submission
            fullNameInput.value = '';
            emailInput.value = '';
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Form Validation for Contact Us
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const messageInput = contactForm.querySelector('textarea[name="message"]');
        const message = messageInput.value.trim();

        if (message) {
            // Send form data to server 
            alert(`Message Sent Successfully!\nMessage: ${message}`);

            // Reset form field after successful submission
            messageInput.value = '';
        } else {
            alert('Please enter a message.');
        }
    });
});
