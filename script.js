document.addEventListener('DOMContentLoaded', () => {
    const aimbotButton = document.getElementById('aimbot-toggle');
    const wallhackButton = document.getElementById('wallhack-toggle');
    const accuracySlider = document.getElementById('accuracy-slider');
    const accuracyValue = document.getElementById('accuracy-value');
    const themeToggle = document.getElementById('theme-toggle');
    const modeText = document.getElementById('mode-text');

    // Aimbot toggle
    aimbotButton.addEventListener('click', () => {
        if (aimbotButton.textContent === 'Toggle Aimbot On') {
            aimbotButton.textContent = 'Toggle Aimbot Off';
        } else {
            aimbotButton.textContent = 'Toggle Aimbot On';
        }
    });

    // Wallhack toggle
    wallhackButton.addEventListener('click', () => {
        if (wallhackButton.textContent === 'Toggle Wallhacks On') {
            wallhackButton.textContent = 'Toggle Wallhacks Off';
        } else {
            wallhackButton.textContent = 'Toggle Wallhacks On';
        }
    });

    // Accuracy slider
    accuracySlider.addEventListener('input', () => {
        accuracyValue.textContent = `${accuracySlider.value}%`;
        accuracyValue.classList.add('updated');
        setTimeout(() => accuracyValue.classList.remove('updated'), 300);
    });

    // Theme toggle
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            modeText.textContent = 'Light Mode';
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            modeText.textContent = 'Dark Mode';
        }
    });
});
