let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}


document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.querySelector('h3').addEventListener('click', () => {
            const content = item.querySelector('.accordion-content');
            const toggleBtn = item.querySelector('.toggle-btn');
            if (content.style.display === 'block') {
                content.style.display = 'none';
                toggleBtn.textContent = '+';
            } else {
                content.style.display = 'block';
                toggleBtn.textContent = '-';
            }
        });
    });

    // Contact Us button functionality
    document.querySelector('.contact-us').addEventListener('click', function() {
        alert('Redirecting to the Contact Us page...');
    });

    // View All button click event
    document.querySelector('.view-all').addEventListener('click', function() {
        alert('Redirecting to all resources...');
    });
});

   // Sign_Up form

   function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    return true;
}

function updateInfo() {
    alert("Update functionality coming soon!");
}


        function redirectToContactUs() {
            // Redirect to the Contact Us section using the ID of that section
            window.location.href = "#contact-us"; // If on the same page
        }
    
        const cardWrapper = document.querySelector('.card-wrapper');
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
        
        let currentIndex = 0;
        const cardsToShow = 1; // Change this based on how many cards to show at a time
        const totalCards = document.querySelectorAll('.card').length;
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalCards - cardsToShow) {
                currentIndex++;
                updateSlider();
            }
        });
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
        
        function updateSlider() {
            const offset = -(currentIndex * (350 + 20)); // 350 is card width + 20 is the margin
            cardWrapper.style.transform = `translateX(${offset}px)`;
        }
        
        const menuBtn = document.getElementById('menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        menuBtn.addEventListener('click', () => {
            // Toggle the 'active' class to show/hide the menu
            navLinks.classList.toggle('active');
        });
        
        