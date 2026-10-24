// Toggle hide for featured item of the week
document.addEventListener('DOMContentLoaded', () => {
    const featuredTitle = document.getElementById('featured-item');
    const featuredImage = document.getElementById('featured-item-image');

    if (featuredTitle) {
        featuredTitle.addEventListener('click', () => {
            featuredImage.classList.toggle('collapsed');

            if (featuredImage.classList.contains('collapsed')) {
                featuredTitle.textContent = 'Reveal today\'s featured item of the week!';
            } else {
                featuredTitle.textContent = 'Cookies!';
            }
        });
    }
});


// Toggle dark mode
const modeSettings = document.querySelectorAll('.light-mode', '.dark-mode');
const heading = document.querySelector('h1');
const modeButton = document.getElementById('mode-settings');
const isHome = heading.textContent.trim() === 'Home';
const imagePath = isHome ? './images/' : '../images/';

// check localStorage
const saveTheme = localStorage.getItem('theme');
if (saveTheme === 'dark') {
    document.body.classList.add('dark-mode');

    modeSettings.forEach(el => {
        el.classList.replace('light-mode','dark-mode');
        modeButton.src = imagePath + 'dark-mode.jpeg';
        modeButton.alt = 'dark mode off';
    })
}

// Loop through each element
modeSettings.forEach(modeSetting => {
    modeSetting.addEventListener('click', () => {

        // Toggle the dark theme class on the body
        document.body.classList.toggle('dark-mode');
        
        // Check if dark mode is active
        const isDarkActive = document.body.classList.contains('dark-mode');

        // Toggle all elements on page
        modeSettings.forEach(el => {
            if (isDarkActive) {
                el.classList.replace('light-mode', 'dark-mode');
                modeButton.src = imagePath + 'dark-mode.jpeg';
                modeButton.alt = 'dark mode on';
                localStorage.setItem('theme','dark'); //save to browser
            } else {
                el.classList.replace('dark-mode', 'light-mode');
                modeButton.src = imagePath + 'light-mode.jpeg';
                modeButton.alt = 'dark mode off';
                localStorage.setItem('theme','light'); //save to browser
            };
        });
    });
});