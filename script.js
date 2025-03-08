
    const fileInput = document.getElementById('fileInput');
const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audioPlayer');

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    playlist.innerHTML = '';

    Array.from(files).forEach(file => {
        const listItem = document.createElement('li');
        listItem.textContent = file.name;

        listItem.addEventListener('click', () => {
            const fileURL = URL.createObjectURL(file);
            audioPlayer.src = fileURL;
            audioPlayer.play();
        });

        playlist.appendChild(listItem);
    });
});