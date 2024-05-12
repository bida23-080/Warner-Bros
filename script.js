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

    // Interactive Movie Posters
    const moviePosters = document.querySelectorAll('.movie-poster');

    moviePosters.forEach(poster => {
        poster.addEventListener('click', function() {
            const title = poster.dataset.title;
            const description = poster.dataset.description;

            // Display movie information (you can customize this)
            alert(`${title}: ${description}`);
        });
    });

    // Search Form Submission
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value.trim();

        if (searchTerm) {
            // Perform search action (you can customize this)
            alert(`Searching for: ${searchTerm}`);

            // Optionally, you can redirect to a search results page or perform an AJAX search
            // Example: window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`;

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
            // Send form data to server (you can customize this)
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
            // Send form data to server (you can customize this)
            alert(`Message Sent Successfully!\nMessage: ${message}`);

            // Reset form field after successful submission
            messageInput.value = '';
        } else {
            alert('Please enter a message.');
        }
    });
});
