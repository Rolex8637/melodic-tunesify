
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