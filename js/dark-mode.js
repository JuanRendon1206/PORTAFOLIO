document.addEventListener('DOMContentLoaded', function() {
    checkDarkModePreference();
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    darkModeSwitch.addEventListener('change', toggleDarkMode);
});

function toggleDarkMode() {
    const isChecked = document.getElementById('darkModeSwitch').checked;
    document.body.classList.toggle('dark-mode', isChecked);

    localStorage.setItem('darkMode', isChecked ? 'enabled' : 'disabled');
}

function checkDarkModePreference() {
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
    document.body.classList.toggle('dark-mode', isDarkModeEnabled);
    document.getElementById('darkModeSwitch').checked = isDarkModeEnabled;
}
