// Optimized Booking Logic
const checkInInput = document.getElementById('check-in');
const checkOutInput = document.getElementById('check-out');
const locationInput = document.getElementById('location');
const demandSection = document.getElementById('demand-capture');

// Today's date for minimum selection
const today = new Date().toISOString().split('T')[0];
checkInInput.min = today;

// Fix: Prevent Check-out before Check-in
checkInInput.addEventListener('change', () => {
    const checkInDate = new Date(checkInInput.value);
    
    // Set minimum checkout to 1 day after check-in
    const minCheckOut = new Date(checkInDate);
    minCheckOut.setDate(minCheckOut.getDate() + 1);
    
    checkOutInput.min = minCheckOut.toISOString().split('T')[0];
    
    // If user already picked an invalid checkout, reset it
    if (checkOutInput.value && checkOutInput.value <= checkInInput.value) {
        checkOutInput.value = checkOutInput.min;
    }
});

// Simulation of the "Demand Capture" for unlisted cities
locationInput.addEventListener('blur', () => {
    const knownCities = ['manali', 'rishikesh', 'goa', 'kasol'];
    const val = locationInput.value.toLowerCase().trim();
    
    if (val && !knownCities.includes(val)) {
        demandSection.classList.remove('hidden');
    } else {
        demandSection.classList.add('hidden');
    }
});
