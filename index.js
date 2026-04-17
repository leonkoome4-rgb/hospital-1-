// Doctor data
const doctors = [
    {
        id: 1,
        name: "Dr. John Smith",
        specialty: "Cardiology",
        category: "cardiology",
        rating: 5,
        image: "https://via.placeholder.com/150",
        description: "Expert cardiologist with over 15 years of experience in heart disease treatment.",
        experience: "15 years",
        education: "MD from Harvard Medical School",
        county: "Nairobi",
        subcounty: "Westlands"
    },
    {
        id: 2,
        name: "Dr. Sarah Johnson",
        specialty: "Pediatrics",
        category: "pediatrics",
        rating: 4,
        image: "https://via.placeholder.com/150",
        description: "Dedicated pediatrician specializing in child healthcare and development.",
        experience: "12 years",
        education: "MD from Johns Hopkins University",
        county: "Mombasa",
        subcounty: "Likoni"
    },
    {
        id: 3,
        name: "Dr. Michael Brown",
        specialty: "Orthopedics",
        category: "orthopedics",
        rating: 5,
        image: "https://via.placeholder.com/150",
        description: "Skilled orthopedic surgeon focusing on joint replacements and sports injuries.",
        experience: "18 years",
        education: "MD from Mayo Clinic"
    },
    {
        id: 4,
        name: "Dr. Emily Davis",
        specialty: "Cardiology",
        category: "cardiology",
        rating: 4,
        image: "https://via.placeholder.com/150",
        description: "Cardiologist specializing in preventive cardiology and heart failure management.",
        experience: "10 years",
        education: "MD from Stanford University"
    },
    {
        id: 5,
        name: "Dr. Robert Wilson",
        specialty: "Pediatrics",
        category: "pediatrics",
        rating: 5,
        image: "https://via.placeholder.com/150",
        description: "Pediatric specialist with expertise in neonatal care and childhood diseases.",
        experience: "14 years",
        education: "MD from University of Pennsylvania"
    },
    {
        id: 6,
        name: "Dr. Lisa Chen",
        specialty: "Dermatology",
        category: "dermatology",
        rating: 4,
        image: "https://via.placeholder.com/150",
        description: "Dermatologist specializing in skin conditions, cosmetic procedures, and skin cancer screening.",
        experience: "11 years",
        education: "MD from UCLA Medical School"
    },
    {
        id: 7,
        name: "Dr. David Lee",
        specialty: "Neurology",
        category: "neurology",
        rating: 5,
        image: "https://via.placeholder.com/150",
        description: "Neurologist with expertise in brain disorders, epilepsy, and neurodegenerative diseases.",
        experience: "16 years",
        education: "MD from Columbia University"
    },
    {
        id: 8,
        name: "Dr. Maria Garcia",
        specialty: "Gynecology",
        category: "gynecology",
        rating: 4,
        image: "https://via.placeholder.com/150",
        description: "Gynecologist providing comprehensive women's health care and reproductive services.",
        experience: "13 years",
        education: "MD from University of Michigan"
    },
    {
        id: 9,
        name: "Dr. James Taylor",
        specialty: "Psychiatry",
        category: "psychiatry",
        rating: 5,
        image: "https://via.placeholder.com/150",
        description: "Psychiatrist specializing in mental health disorders and psychotherapy.",
        experience: "17 years",
        education: "MD from Yale University"
    },
    {
        id: 10,
        name: "Dr. Anna Patel",
        specialty: "Oncology",
        category: "oncology",
        rating: 5,
        image: "https://via.placeholder.com/150",
        description: "Oncologist focused on cancer diagnosis, treatment, and patient care.",
        experience: "19 years",
        education: "MD from Duke University"
    },
    {
        id: 11,
        name: "Dr. Kevin Wright",
        specialty: "Ophthalmology",
        category: "ophthalmology",
        rating: 4,
        image: "https://via.placeholder.com/150",
        description: "Ophthalmologist specializing in eye diseases, surgery, and vision correction.",
        experience: "12 years",
        education: "MD from Baylor College of Medicine"
    },
    {
        id: 12,
        name: "Dr. Rachel Adams",
        specialty: "ENT",
        category: "ent",
        rating: 4,
        image: "https://via.placeholder.com/150",
        description: "ENT specialist treating ear, nose, and throat disorders.",
        experience: "10 years",
        education: "MD from University of Texas"
    },
    {
        id: 13,
        name: "Dr. Thomas Moore",
        specialty: "Urology",
        category: "urology",
        rating: 5,
        image: "https://via.placeholder.com/150",
        description: "Urologist specializing in urinary tract and male reproductive system disorders.",
        experience: "15 years",
        education: "MD from Northwestern University"
    },
    {
        id: 14,
        name: "Dr. Jennifer White",
        specialty: "Gastroenterology",
        category: "gastroenterology",
        rating: 4,
        image: "https://via.placeholder.com/150",
        description: "Gastroenterologist treating digestive system disorders and liver diseases.",
        experience: "13 years",
        education: "MD from Vanderbilt University"
    },
    {
        id: 15,
        name: "Dr. Mark Johnson",
        specialty: "Endocrinology",
        category: "endocrinology",
        rating: 5,
        image: "https://via.placeholder.com/150",
        description: "Endocrinologist specializing in hormone disorders and diabetes management.",
        experience: "14 years",
        education: "MD from University of Pittsburgh"
    },
    {
        id: 16,
        name: "Dr. Susan Lee",
        specialty: "Radiology",
        category: "radiology",
        rating: 4,
        image: "https://via.placeholder.com/150",
        description: "Radiologist using imaging technologies for diagnosis and treatment planning.",
        experience: "16 years",
        education: "MD from University of Washington"
    },
    {
        id: 17,
        name: "Dr. Paul Martinez",
        specialty: "Anesthesiology",
        category: "anesthesiology",
        rating: 4,
        image: "https://via.placeholder.com/150",
        description: "Anesthesiologist providing pain management and surgical anesthesia services.",
        experience: "18 years",
        education: "MD from University of Florida"
    },
    {
        id: 18,
        name: "Dr. Linda Thompson",
        specialty: "General Practice",
        category: "general",
        rating: 5,
        image: "https://via.placeholder.com/150",
        description: "General practitioner offering comprehensive primary healthcare services.",
        experience: "20 years",
        education: "MD from University of California, San Francisco"
    }
];

let currentRating = 0;

function setRating(rating) {
    currentRating = rating;
    document.querySelectorAll('#stars span').forEach((star, index) => {
        star.textContent = index < rating ? '★' : '☆';
    });
    const starValue = document.getElementById('star-value');
    if (starValue) starValue.textContent = `${rating}/5`;
}

function getLocation() {
    const text = document.getElementById('locationText');
    if (!navigator.geolocation) {
        if (text) text.innerText = 'Location not supported in this browser.';
        return;
    }

    if (text) text.innerText = 'Finding your location...';

    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        if (text) text.innerText = `Lat: ${lat.toFixed(4)} | Lon: ${lon.toFixed(4)}`;

        // Optional: reverse geocode to county/subcounty
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`, {
                headers: { 'Accept-Language': 'en' }
            });
            const data = await response.json();
            const county = data.address.county || data.address.state_district || data.address.state || '';
            const subcounty = data.address.suburb || data.address.city_district || data.address.village || data.address.town || '';

            if (county) document.getElementById('search-county').value = county;
            if (subcounty) document.getElementById('search-subcounty').value = subcounty;

            if (text) text.innerText = `Location detected: ${county}${subcounty ? ', ' + subcounty : ''}`;
        } catch (err) {
            console.warn('reverse geocode failed', err);
        }
    }, (error) => {
        if (text) text.innerText = 'Could not get location permission. Enter location manually.';
    }, {
        timeout: 10000,
        maximumAge: 60000
    });
}

// Function to render doctors
function renderDoctors(category = 'all', list = null, limit = 6) {
    const doctorsGrid = document.getElementById('doctors-grid');
    doctorsGrid.innerHTML = '';

    let filteredDoctors;
    if (Array.isArray(list)) {
        filteredDoctors = list;
    } else {
        filteredDoctors = category === 'all' ? doctors : doctors.filter(doctor => doctor.category === category);
    }

    // Sort by rating (highest first)
    filteredDoctors.sort((a, b) => b.rating - a.rating);

    // Limit the number of doctors shown initially
    const doctorsToShow = filteredDoctors.slice(0, limit);
    const hasMore = filteredDoctors.length > limit;

    doctorsToShow.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card';
        doctorCard.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}">
            <h3>${doctor.name}</h3>
            <p>${doctor.specialty}</p>
            <div class="rating">${generateStars(doctor.rating)}</div>
        `;
        doctorCard.addEventListener('click', () => openDoctorModal(doctor));
        doctorsGrid.appendChild(doctorCard);
    });

    // Add Load More button if there are more doctors
    if (hasMore) {
        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.className = 'load-more-btn';
        loadMoreBtn.textContent = 'Load More Doctors';
        loadMoreBtn.onclick = () => renderDoctors(category, list, limit + 6);
        doctorsGrid.appendChild(loadMoreBtn);
    }
}

function renderDoctorList(list) {
    renderDoctors('all', list);
}

// Geolocation lookup (auto-fill county + subcounty)
async function detectAndFillLocation() {
    const feedback = document.getElementById('local-search-feedback');
    if (!navigator.geolocation || !feedback) {
        return;
    }

    feedback.textContent = 'Detecting your location for fast local doctor search...';

    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=12&addressdetails=1`, {
                headers: { 'Accept-Language': 'en' }
            });
            const data = await response.json();
            const county = data.address.county || data.address.state_district || data.address.state || '';
            const subcounty = data.address.suburb || data.address.city_district || data.address.village || data.address.town || '';

            if (county) document.getElementById('search-county').value = county;
            if (subcounty) document.getElementById('search-subcounty').value = subcounty;

            feedback.textContent = `Detected location: ${county}${subcounty ? `, ${subcounty}` : ''}.`; 
        } catch (error) {
            feedback.textContent = 'Location lookup failed. Please enter your county and sub-county manually.';
        }
    }, (error) => {
        feedback.textContent = 'Geolocation unavailable. Please type county and sub-county for local match.';
    }, { timeout: 9000 });
}

// Generate star rating HTML
function generateStars(rating) {
    return `<span class="rating-text">${rating}/5</span>`;
}

// Category button event listeners
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        // Render doctors for selected category
        renderDoctors(this.dataset.category);
    });
});

function findDoctorsByLocation(county, subcounty, specialty = 'all') {
    const localResults = doctors.filter(doctor => {
        const docCounty = (doctor.county || '').toLowerCase();
        const docSubcounty = (doctor.subcounty || '').toLowerCase();
        const matchesLocation = (!county || docCounty.includes(county)) && (!subcounty || docSubcounty.includes(subcounty));
        const matchesSpecialty = specialty === 'all' || doctor.category === specialty;
        return matchesLocation && matchesSpecialty;
    });

    const feedback = document.getElementById('local-search-feedback');
    if (localResults.length > 0) {
        if (feedback) {
            feedback.textContent = `Found ${localResults.length} doctor(s) near ${county || 'your area'}${subcounty ? ` (${subcounty})` : ''}.`;
        }
        renderDoctorList(localResults);
    } else {
        if (feedback) {
            feedback.textContent = `No exact local matches found. Showing top rated doctors.`;
        }
        renderDoctors();
    }
}

// Local search form (county/sub-county + specialty)
const localSearchForm = document.getElementById('local-search-form');
if (localSearchForm) {
    localSearchForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const county = document.getElementById('search-county').value.trim().toLowerCase();
        const subcounty = document.getElementById('search-subcounty').value.trim().toLowerCase();
        const specialty = document.getElementById('search-specialty').value;

        findDoctorsByLocation(county, subcounty, specialty);
    });
}

const ratingForm = document.getElementById('doctor-rating-form');
if (ratingForm) {
    ratingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const doctorName = document.getElementById('rate-doctor-name').value.trim();
        const comments = document.getElementById('rate-doctor-comments').value.trim();

        if (!doctorName || !currentRating || !comments) {
            alert('Please fill all rating fields and select 1 to 5 stars.');
            return;
        }

        alert(`Thank you! Your rating for ${doctorName} was submitted (${currentRating}/5). Comments are appreciated for quality improvement.`);

        ratingForm.reset();
        currentRating = 0;
        document.getElementById('star-value').textContent = '0/5';
        document.querySelectorAll('#stars span').forEach((star) => star.textContent = '☆');

        // This can be extended to save feedback in the database or local storage.
    });
}

// Modal functionality
const modal = document.getElementById('doctor-modal');
const closeBtn = document.querySelector('.close');

function openDoctorModal(doctor) {
    document.getElementById('doctor-image').src = doctor.image;
    document.getElementById('doctor-name').textContent = doctor.name;
    document.getElementById('doctor-specialty').textContent = doctor.specialty;
    document.getElementById('doctor-rating').innerHTML = generateStars(doctor.rating);
    document.getElementById('doctor-description').textContent = doctor.description;
    document.getElementById('doctor-experience').textContent = doctor.experience;
    document.getElementById('doctor-education').textContent = doctor.education;
    
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
// Initialize doctors on page load
document.addEventListener('DOMContentLoaded', () => {
    renderDoctors();

    // Add animation classes on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe home section elements
    document.querySelectorAll('.home-text, .home-visual, .stat, .feature').forEach(el => {
        observer.observe(el);
    });

    // Counter animation for stats
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        animateCounter(stat, 0, target, 2000);
    });

    // Try to auto-detect user location
    detectAndFillLocation();
});

// Animate counter function
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const current = Math.floor(start + (end - start) * progress);
        element.textContent = end > 100 ? current + (element.textContent.includes('+') ? '+' : '') : current + (element.textContent.includes('★') ? '★' : '');

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    };
    requestAnimationFrame(updateCounter);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation and submission for contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Form validation and submission for recommend doctor form
const recommendDoctorForm = document.getElementById('recommend-doctor-form');
if (recommendDoctorForm) {
    recommendDoctorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const recommenderName = document.getElementById('recommender-name').value.trim();
        const recommenderEmail = document.getElementById('recommender-email').value.trim();
        const doctorName = document.getElementById('doctor-name').value.trim();
        const doctorSpecialty = document.getElementById('doctor-specialty').value.trim();
        const doctorLocation = document.getElementById('doctor-location').value.trim();
        const doctorPhone = document.getElementById('doctor-phone').value.trim();
        const recommendationReason = document.getElementById('recommendation-reason').value.trim();
        
        if (!recommenderName || !recommenderEmail || !doctorName || !doctorSpecialty || !doctorLocation || !recommendationReason) {
            alert('Please fill in all required fields.');
            return;
        }
        
        if (!isValidEmail(recommenderEmail)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        alert(`Thank you ${recommenderName}! Your recommendation for Dr. ${doctorName} has been submitted. We will review it and consider adding them to our network.`);
        recommendDoctorForm.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
    } else {
        header.style.backgroundColor = '#2c3e50';
    }
});

// Animate service cards on scroll (if any exist)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .doctor-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Automatic location detection on page load
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit before attempting location detection to not interfere with initial page load
    setTimeout(() => {
        autoDetectLocation();
    }, 2000);
});

function autoDetectLocation() {
    if (!navigator.geolocation) {
        console.log('Geolocation not supported');
        return;
    }

    // Check if we already have location data
    const hasLocationData = document.getElementById('search-county').value || document.getElementById('search-subcounty').value;
    if (hasLocationData) {
        return; // Don't override existing data
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`, {
                    headers: { 'Accept-Language': 'en' }
                });
                const data = await response.json();
                const county = data.address.county || data.address.state_district || data.address.state || '';
                const subcounty = data.address.suburb || data.address.city_district || data.address.village || data.address.town || '';

                if (county) document.getElementById('search-county').value = county;
                if (subcounty) document.getElementById('search-subcounty').value = subcounty;

                console.log(`Location automatically detected: ${county}${subcounty ? ', ' + subcounty : ''}`);
            } catch (err) {
                console.warn('Auto reverse geocode failed', err);
            }
        },
        (error) => {
            // Silently fail - user can still manually enter location
            console.log('Auto location detection failed or denied');
        },
        {
            timeout: 5000,
            maximumAge: 300000 // 5 minutes
        }
    );
}
document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    
    const name = document.getElementById("patient-name").value
    const email = document.getElementById("patient-email").value
    const phone = document.getElementById("patient-phone").value
    const date = document.getElementById("appointment-date").value
    const time = document.getElementById("appointment-time").value
    const reason = document.getElementById("appointment-reason").value
 const data ={
        name : name,
        email : email,
        phone : phone,
        date : date,
        time : time,
        reason : reason
 }   

    fetch("http://localhost:3010/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      console.log("Saved:", result);
      alert("Appointment sent successfully!");
    })
    .catch(err => console.error("Error:", err));

  });

});app.use(cors());
app.use(express.json());