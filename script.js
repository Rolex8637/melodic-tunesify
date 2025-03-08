document.getElementById('getStarted').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
});

document.getElementById('toggleLogin').addEventListener('click', function() {
    document.getElementById('formContainer').innerHTML = `
        <h2>Login</h2>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required>
        </div>
        <button class="submit-btn">Login</button>
        <p class="toggle-form">Don't have an account? <span id="toggleSignup">Sign Up</span></p>
    `;

    document.getElementById('toggleSignup').addEventListener('click', function() {
        location.reload();
    });
});
