// Music player
function playSong(song) {
    const player = document.getElementById('audioPlayer');
    player.src = `music/${song}`;
    player.play();
}

// Falling music notes
document.addEventListener('DOMContentLoaded', () => {
    const notes = ['🎵', '🎶', '♫', '♬'];
    const musicNotes = document.querySelector('.music-notes');

    setInterval(() => {
        const note = document.createElement('div');
        note.classList.add('note');
        note.innerText = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDuration = Math.random() * 5 + 3 + 's';
        musicNotes.appendChild(note);

        setTimeout(() => {
            note.remove();
        }, 8000);
    }, 300);
});

// Authentication modals
function openModal(type) {
    document.getElementById(`${type}Modal`).style.display = 'flex';
}

function closeModal(type) {
    document.getElementById(`${type}Modal`).style.display = 'none';
}