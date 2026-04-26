// Doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Charles Kariuki",
    specialty: "Cardiologist",
    category: "Cardiologist",
    rating: 5,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Nairobi Hospital Drs Plaza Entrance",
    phone: ["0733-370057", "0720-826788"],
    email: "credit@silversteinkariuki.com",
    description: "Experienced cardiologist providing comprehensive heart care at Nairobi Hospital.",
    experience: "18 years",
    education: "MBChB, MMed Cardiology",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 2,
    name: "Dr. Wanyoike M.M.",
    specialty: "Cardiologist",
    category: "Cardiologist",
    facility: "Prime Care Heart Clinic",
    rating: 5,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Anderson Centre, Nairobi Hospital, 4th Floor",
    phone: ["2846322", "8068550", "0710828016", "0730666322"],
    email: "primecareheartclinic@gmail.com",
    description: "Cardiologist at Prime Care Heart Clinic offering personalized cardiac care and diagnostics.",
    experience: "20 years",
    education: "MBChB, MMed Cardiology",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 3,
    name: "Dr. Kariuki J N.K.",
    specialty: "Cardiothoracic Surgeon",
    category: "Cardiothoracic Surgeon",
    rating: 5,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg",
    location: "Nairobi Hospital Drs Plaza, 3rd Floor Room 301",
    phone: ["0202720726", "0202711585", "0722582548"],
    email: "kariuki.j50@gmail.com",
    description: "Cardiothoracic surgeon specializing in advanced heart and chest surgery.",
    experience: "22 years",
    education: "MBChB, MMed Cardiothoracic Surgery",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 4,
    name: "Dr. Chakaya J.M",
    specialty: "Chest Specialist",
    category: "Chest Specialist",
    rating: 4,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Fortis Suites, 4th Floor Room 404, Hospital Road",
    phone: ["0203597094", "0725522915", "0721977304"],
    email: "chakayajm@gmail.com",
    description: "Chest specialist delivering expert respiratory and pulmonary care.",
    experience: "16 years",
    education: "MBChB, Pulmonology Certification",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 5,
    name: "Dr. Imalingat Wairimu",
    specialty: "Dermatologist",
    category: "Dermatologist",
    rating: 4,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Prof Nelson Awori Centre, 2nd Floor Room A1",
    phone: ["0713168580", "0721653514"],
    email: "wimalingaoffice@yahoo.com",
    description: "Dermatologist treating skin conditions and cosmetic skin concerns.",
    experience: "12 years",
    education: "MBChB, Dermatology Fellowship",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 6,
    name: "Amani Counselling Centre",
    specialty: "Psychologist",
    category: "Psychologist",
    rating: 4,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Mbagathi Way, Nairobi",
    phone: ["+254722626590", "+254733263870"],
    email: "info@amanicentre.org",
    description: "Counselling centre offering psychological support and wellness services.",
    experience: "10 years",
    education: "Certified Psychologists",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 10,
    name: "Enclaire Counselling Centre",
    specialty: "Psychologist",
    category: "Psychologist",
    rating: 4,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Nyanja House, Ngong Road",
    phone: ["+254729903001", "0202332512"],
    email: "ennyanja@hotmail.com",
    description: "Professional counselling services for mental health and wellness.",
    experience: "8 years",
    education: "Certified Counsellors",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 11,
    name: "KAPC",
    specialty: "Psychologist",
    category: "Psychologist",
    facility: "Kenya Association of Professional Counsellors",
    rating: 4,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Parklands, Nairobi",
    phone: ["+254721296912", "+254733761242"],
    email: "kapcmsa@gmail.com",
    description: "Association providing professional counselling and psychological support services.",
    experience: "15 years",
    education: "Licensed Counsellors",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 13,
    name: "Dr. Doreen A. Asimba",
    specialty: "Endocrinologist",
    category: "Endocrinologist",
    rating: 5,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Nairobi Hospital Doctors Plaza, Ground Floor",
    phone: ["0208073284", "+254733757754", "+254720839106"],
    email: "dr.asimba_clinic@yahoo.com",
    description: "Endocrinologist specializing in diabetes and hormone care.",
    experience: "15 years",
    education: "MBChB, Endocrinology Fellowship",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 14,
    name: "Dr. Eva Njenga",
    specialty: "Endocrinologist",
    category: "Endocrinologist",
    rating: 5,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg",
    location: "5th Avenue Office Suites",
    phone: ["2722826", "+254726119729"],
    email: "Dr.evanjenga@gmail.com",
    description: "Endocrinologist with expertise in diabetes management and metabolic disorders.",
    experience: "14 years",
    education: "MBChB, Endocrinology Fellowship",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 15,
    name: "Dr. Sangeeta Chauhan",
    specialty: "Endocrinologist",
    category: "Endocrinologist",
    rating: 5,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg",
    location: "Aga Khan Doctors Plaza",
    phone: ["+254711092720", "0203747417"],
    email: "sangeeta.chauhan@aku.edu",
    description: "Endocrinologist specializing in hormone disorders and metabolic conditions.",
    experience: "17 years",
    education: "MBChB, Endocrinology Fellowship",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 16,
    name: "Dr. Sonigra R.J.",
    specialty: "ENT Specialist",
    category: "ENT Specialist",
    rating: 4,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Prof Nelson Awori Centre",
    phone: ["+254739262455", "+254710922569"],
    email: "ybsonigra@gmail.com",
    description: "ENT specialist focused on ear, nose, and throat health.",
    experience: "14 years",
    education: "MBChB, ENT Fellowship",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 17,
    name: "Dr. Gacani Mberia",
    specialty: "ENT Specialist",
    category: "ENT Specialist",
    rating: 4,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Mater Hospital Doctors Plaza",
    phone: ["0202064313", "+254722703238"],
    email: "gmberia@yahoo.com",
    description: "Experienced ENT specialist treating ear, nose, throat, and hearing disorders.",
    experience: "15 years",
    education: "MBChB, ENT Fellowship",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 18,
    name: "Valley ENT Clinic",
    specialty: "ENT Specialist",
    category: "ENT Specialist",
    facility: "Valley ENT",
    rating: 4,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Afya Centre / Mayfair Centre",
    phone: ["0716050329"],
    email: "valleyent@yahoo.com",
    description: "Specialized ENT clinic providing comprehensive ear, nose, and throat care.",
    experience: "12 years",
    education: "ENT Specialists",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 19,
    name: "Dr. Toroitich Kibowen",
    specialty: "General Practitioner",
    category: "General Practitioner",
    rating: 4,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Bruce House, Nairobi CBD",
    phone: ["0202224426"],
    email: "jktoroich@gmail.com",
    description: "General practitioner offering trusted primary care services in the CBD.",
    experience: "18 years",
    education: "MBChB, General Practice Training",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 20,
    name: "Dr. Richard Njoroge Kuria",
    specialty: "General Practitioner",
    category: "General Practitioner",
    facility: "Ivory Health Solutions",
    rating: 4,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Corner House, Nairobi CBD",
    phone: ["+254791009817", "+254791009818"],
    email: "info@ivoryhealth.co.ke",
    description: "General practitioner providing comprehensive primary healthcare and diagnostics.",
    experience: "12 years",
    education: "MBChB, General Practice Training",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 21,
    name: "Dr. Wangata Theophilus",
    specialty: "General Practitioner",
    category: "General Practitioner",
    rating: 4,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Lonrho House, Nairobi",
    phone: ["0202027314", "+254713749001", "+254722680117"],
    email: "dr_wangata@yahoo.com",
    description: "General practitioner delivering quality primary care and health consultations.",
    experience: "13 years",
    education: "MBChB, General Practice Training",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 10,
    name: "Dr. Betty Musau",
    specialty: "Gastroenterologist",
    category: "Gastroenterologist",
    rating: 5,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Nairobi Hospital Drs Plaza, 2nd Floor Room 206",
    phone: ["0202722302", "0721552582"],
    email: "bmmm24@gmail.com",
    description: "Gastroenterologist treating digestive health and liver conditions.",
    experience: "17 years",
    education: "MBChB, Gastroenterology Fellowship",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 11,
    name: "Dr. Ndege Kinoti Anthony",
    specialty: "Neurologist",
    category: "Neurologist",
    rating: 5,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Fortis Suites, 5th Floor Room 507",
    phone: ["0705700000", "0721596464"],
    email: "upperhillclinics@gmail.com",
    description: "Neurologist specializing in brain and nervous system care.",
    experience: "16 years",
    education: "MBChB, Neurology Fellowship",
    county: "Nairobi",
    subcounty: ""
  },
  {
    id: 12,
    name: "Dr. Matu Joshua",
    specialty: "Urologist",
    category: "Urologist",
    rating: 4,
    image: "https://i.pinimg.com/736x/5a/cd/8f/5acd8fd8b3e225e883acd1cae417abb9.jpg ",
    location: "Prof Nelson Awori Centre, 2nd Floor Suite B6",
    phone: ["0722518048", "0202424159"],
    email: "matumaliti@yahoo.com",
    description: "Urologist treating urinary tract and kidney conditions.",
    experience: "15 years",
    education: "MBChB, Urology Fellowship",
    county: "Nairobi",
    subcounty: ""
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
doctorCard.className = 'bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-primary';
doctorCard.innerHTML = `
    <div class="relative bg-gradient-to-r from-blue-50 to-indigo-50 p-6 pb-8">
        <img src="${doctor.image}" alt="${doctor.name}" class="w-28 h-28 rounded-full mx-auto object-cover border-4 border-white shadow-md">
        <div class="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-bold">
            ⭐ ${doctor.rating}/5
        </div>
    </div>
    <div class="p-6">
        <h3 class="text-lg font-bold text-gray-900 text-center mb-1">${doctor.name}</h3>
        <p class="text-primary font-semibold text-center mb-3 text-sm">${doctor.specialty}</p>
        <div class="space-y-2 mb-4 text-sm">
            <p class="text-gray-600 flex items-start"><span class="text-primary mr-2">📍</span><span>${doctor.location}</span></p>
            ${doctor.facility ? `<p class="text-gray-600 flex items-start"><span class="text-accent mr-2">🏥</span><span>${doctor.facility}</span></p>` : ''}
            <p class="text-gray-600 flex items-start"><span class="text-accent mr-2">📞</span><span>${doctor.phone[0]}</span></p>
        </div>
        <p class="text-gray-600 text-sm text-center mb-4 line-clamp-2">${doctor.description}</p>
        <button class="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-sm">
            <i class="fas fa-arrow-right mr-2"></i>View Profile
        </button>
    </div>
`;
doctorCard.addEventListener('click', () => openDoctorModal(doctor));
doctorsGrid.appendChild(doctorCard);
});

// Add Load More button if there are more doctors
if (hasMore) {
const loadMoreBtn = document.getElementById('load-more-btn');
loadMoreBtn.style.display = 'block';
loadMoreBtn.onclick = () => renderDoctors(category, list, limit + 6);
} else {
document.getElementById('load-more-btn').style.display = 'none';
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
let stars = '';
for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
        stars += '<i class="fas fa-star text-yellow-400"></i>';
    } else if (i - 0.5 <= rating) {
        stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
    } else {
        stars += '<i class="far fa-star text-gray-300"></i>';
    }
}
return stars + `<span class="ml-2 text-sm text-gray-600">(${rating}/5)</span>`;
}

// Category button event listeners
document.querySelectorAll('.category-btn').forEach(btn => {
btn.addEventListener('click', function() {
// Remove active class from all buttons
document.querySelectorAll('.category-btn').forEach(b => {
    b.classList.remove('active');
    b.classList.remove('bg-primary', 'text-white');
    b.classList.add('bg-gray-200', 'text-gray-700');
});
// Add active class to clicked button
this.classList.add('active');
this.classList.remove('bg-gray-200', 'text-gray-700');
this.classList.add('bg-primary', 'text-white');
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

// New filter search by name and location
const filterSearchBtn = document.getElementById('filter-search-btn');
if (filterSearchBtn) {
filterSearchBtn.addEventListener('click', function() {
const searchName = document.getElementById('search-name').value.trim().toLowerCase();
const searchLocation = document.getElementById('search-location').value.trim().toLowerCase();
const searchSpecialty = document.getElementById('search-specialty').value;

const filteredResults = doctors.filter(doctor => {
const matchesName = !searchName || doctor.name.toLowerCase().includes(searchName);
const matchesLocation = !searchLocation || (doctor.location && doctor.location.toLowerCase().includes(searchLocation)) || (doctor.facility && doctor.facility.toLowerCase().includes(searchLocation));
const matchesSpecialty = !searchSpecialty || doctor.category === searchSpecialty;
return matchesName && matchesLocation && matchesSpecialty;
});

const feedback = document.getElementById('local-search-feedback');
if (filteredResults.length > 0) {
if (feedback) {
const filters = [];
if (searchName) filters.push(`name: "${searchName}"`);
if (searchLocation) filters.push(`location: "${searchLocation}"`);
if (searchSpecialty) filters.push(`specialty: ${searchSpecialty}`);
feedback.textContent = `Found ${filteredResults.length} doctor(s) matching ${filters.join(', ')}`;
feedback.className = 'text-center text-sm text-accent font-medium py-2';
}
renderDoctorList(filteredResults);
} else {
if (feedback) {
feedback.textContent = 'No doctors found matching your criteria. Try adjusting your search.';
feedback.className = 'text-center text-sm text-red-500 font-medium py-2';
}
renderDoctors();
}
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
function openDoctorModal(doctor) {
const modal = document.getElementById('doctor-modal');
const modalContent = document.getElementById('modal-content');

modalContent.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="text-center">
            <img src="${doctor.image}" alt="${doctor.name}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">${doctor.name}</h3>
            <p class="text-lg text-primary font-medium mb-2">${doctor.specialty}</p>
            <div class="flex justify-center mb-4">
                ${generateStars(doctor.rating)}
            </div>
            <p class="text-gray-600 mb-4">${doctor.description}</p>
            <div class="text-left space-y-2 mb-4">
                <p><strong class="text-gray-900">Location:</strong> <span class="text-gray-600">${doctor.location}</span></p>
                <p><strong class="text-gray-900">Phone:</strong> <div class="flex flex-wrap gap-2 mt-1">${doctor.phone.map(phone => `<a href="tel:${phone}" class="bg-primary text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-medium"><i class="fas fa-phone mr-1"></i>${phone}</a>`).join('')}</div></p>
                <p><strong class="text-gray-900">Email:</strong> <a href="mailto:${doctor.email}" class="text-primary hover:underline">${doctor.email}</a></p>
                ${doctor.facility ? `<p><strong class="text-gray-900">Facility:</strong> <span class="text-gray-600">${doctor.facility}</span></p>` : ''}
            </div>
        </div>
        <div>
            <h4 class="text-xl font-bold text-gray-900 mb-4">Book Appointment</h4>
            <form id="booking-form" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" id="patient-name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input type="email" id="patient-email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Your Phone</label>
                    <input type="tel" id="patient-phone" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Appointment Date</label>
                    <input type="date" id="appointment-date" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                    <select id="appointment-time" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option value="">Select Time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
                    <textarea id="appointment-reason" rows="3" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                </div>
                <button type="submit" class="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
                    Book Appointment
                </button>
            </form>
        </div>
    </div>
`;

modal.classList.remove('hidden');

// Handle booking form submission
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Appointment booked successfully! You will receive a confirmation email shortly.');
    closeModal();
});
}

function closeModal() {
const modal = document.getElementById('doctor-modal');
modal.classList.add('hidden');
}

// Close modal when clicking outside or on close button
document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('doctor-modal').addEventListener('click', function(e) {
if (e.target === this) {
    closeModal();
}
});
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
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT);