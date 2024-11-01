window.onload = () => {
    const splash = document.getElementById('splash');
    const mainContent = document.getElementById('main-content');

    // Set timeout for splash screen duration
    setTimeout(() => {
        splash.style.opacity = '0'; // Fade out the splash
        splash.style.transition = 'opacity 0.5s ease'; // Add transition for fade out

        // After the fade out, hide splash and show main content
        setTimeout(() => {
            splash.style.display = 'none'; // Hide the splash screen
            mainContent.style.display = 'block'; // Show main content
        }, 500); // Match the duration of the fade out
    }, 1000); // Show splash screen for 3 seconds
};