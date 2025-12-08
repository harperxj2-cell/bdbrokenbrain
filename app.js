// Navigation from splash to dashboard
function goToDashboard() {
    window.location.href = 'index.html';
}

// Fullscreen toggle (used by ✕ button)
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen();
    }
}

// Dashboard hotspots → entry pages
function openGratitude() {
    window.location.href = 'gratitude.html';
}

function openGoals() {
    window.location.href = 'goals.html';
}

function openEvent() {
    window.location.href = 'event.html';
}

// Optional: auto-fullscreen shortly after load
window.addEventListener('load', () => {
    setTimeout(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        }
    }, 1000);
});

// Ensure entries array exists in localStorage for all sections
if (!localStorage.getItem('entries')) {
    localStorage.setItem('entries', JSON.stringify([]));
}
