function showSignUp() {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('fallingNotes').innerHTML = ''; 
}

function toggleForms() {
    document.getElementById('signupForm').classList.toggle('hidden');
    document.getElementById('loginForm').classList.toggle('hidden');
}

function startFallingNotes() {
    const notes = ['\u266A', '\u266B', '\u2669', '\u266C', '\u266D'];
    const container = document.getElementById('fallingNotes');
    container.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
        const note = document.createElement('div');
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(note);
    }
}

function detectLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        }, () => {
            alert('Unable to retrieve your location');
        });
    } else {
        alert('Geolocation is not supported by your browser');
    }
}

startFallingNotes();
