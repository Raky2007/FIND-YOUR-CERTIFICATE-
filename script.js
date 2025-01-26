// Live Clock Function
function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// JavaScript for Certificate Slider

document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slider = document.querySelector('.slider');
    const dotsContainer = document.querySelector('.dots');
    let currentIndex = 0;

    // Create dots for navigation based on the number of certificate items
    const certificateItems = document.querySelectorAll('.certificate-item');
    const totalItems = certificateItems.length;

    // Create dots dynamically
    certificateItems.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');
    dots[currentIndex].classList.add('active');

    // Function to update the slider and dots
    const updateSlider = () => {
        // Move the slider by updating the transform property
        const offset = -currentIndex * (certificateItems[0].offsetWidth + 20); // 20px is the gap between items
        slider.style.transform = `translateX(${offset}px)`;

        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    };

    // Event listener for the previous button
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; // Loop back to the last item
        }
        updateSlider();
    });

    // Event listener for the next button
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first item
        }
        updateSlider();
    });

    // Event listener for dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
    }, 5000); // Change slide every 5 seconds
});


// Search Functionality
function searchCourses() {
    let searchText = document.getElementById("search").value;
    alert("Searching for: " + searchText);
}

// Login Function
function loginUser() {
    let userName = prompt("Enter your name:");
    if (userName) {
        document.getElementById("user-name").textContent = userName;
    }
}
// Open Login Popup
function loginUser() {
    document.getElementById("login-popup").style.display = "block";
}

// Close Login Popup
function closeLogin() {
    document.getElementById("login-popup").style.display = "none";
}

// Handle Login Submission
function submitLogin() {
    let username = document.getElementById("username").value.trim();
    
    if (username) {
        // Save user to local storage
        localStorage.setItem("loggedInUser", username);
        document.getElementById("user-name").innerText = username;
        document.querySelector(".login-btn").innerHTML = `<img src="user-icon.png" alt="User"> ${username} <button onclick="logoutUser()" class="logout-btn">Logout</button>`;
        closeLogin();
    } else {
        alert("Please enter a valid name");
    }
}

// Check Login Status on Page Load
window.onload = function() {
    let savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
        document.getElementById("user-name").innerText = savedUser;
        document.querySelector(".login-btn").innerHTML = `<img src="user-icon.png" alt="User"> ${savedUser} <button onclick="logoutUser()" class="logout-btn">Logout</button>`;
    }
}

// Logout Function
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    document.getElementById("user-name").innerText = "Login";
    document.querySelector(".login-btn").innerHTML = `<img src="user-icon.png" alt="User"> Login`;
}


// ========================
// CERTIFICATE SLIDER CODE
// ========================
let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 320}px)`;
    updateDots();
}

// Next Slide
document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
});

// Previous Slide
document.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
});

 // Function to show the Home section and hide others
        function showHome() {
            document.getElementById('home').style.display = 'block';
            document.getElementById('about').style.display = 'none';
            document.getElementById('courses').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
        }

        // Function to show the About section and hide others
        function showAbout() {
            document.getElementById('home').style.display = 'none';
            document.getElementById('about').style.display = 'block';
            document.getElementById('courses').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
        }

        // Function to show the Courses section and hide others
        function showCourses() {
            document.getElementById('home').style.display = 'none';
            document.getElementById('about').style.display = 'none';
            document.getElementById('courses').style.display = 'block';
            document.getElementById('contact').style.display = 'none';
        }

        // Function to show the Contact section and hide others
        function showContact() {
            document.getElementById('home').style.display = 'none';
            document.getElementById('about').style.display = 'none';
            document.getElementById('courses').style.display = 'none';
            document.getElementById('contact').style.display = 'block';
        }
        
        // Initialize by showing the Home section
        showHome();



// Initialize first active dot
updateDots();
