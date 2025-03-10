document.getElementById('getStartedBtn').addEventListener('click', () => {
    document.getElementById('formContainer').classList.remove('hidden');
});

document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted!');
});
