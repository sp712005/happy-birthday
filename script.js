function enterSite() {
    // Hide the profile selection screen
    document.getElementById('profile-screen').classList.add('hidden');
    
    // Show the main Netflix-style screen
    document.getElementById('main-screen').classList.remove('hidden');
    
    // Scroll to the top just in case
    window.scrollTo(0, 0);

    // --- START BACKGROUND MUSIC ---
    const music = document.getElementById('bg-music');
    music.volume = 0.2; // This sets the volume to 20% so it's soft and not overwhelming
    music.play();

    // Start playing the background videos
    playBackgroundVideos();
}

// --- BACKGROUND VIDEO LOOP LOGIC ---
// IMPORTANT: Type the exact names of your videos inside these quotes!
const bgVideos = ["vid1.mp4", "vid3.mp4", "vid4.mp4", "vid5.mp4"]; 
let currentVideoIndex = 0;

function playBackgroundVideos() {
    const bgVideoElement = document.getElementById('bg-video');
    
    // Set the first video
    bgVideoElement.src = bgVideos[currentVideoIndex];
    bgVideoElement.play();

    // When the current video ends, move to the next one
    bgVideoElement.onended = function() {
        currentVideoIndex++;
        
        // If we reach the end of the list, loop back to the beginning
        if (currentVideoIndex >= bgVideos.length) {
            currentVideoIndex = 0;
        }
        
        bgVideoElement.src = bgVideos[currentVideoIndex];
        bgVideoElement.play();
    };
}

// --- FLYING BALLOONS LOGIC ---
function releaseBalloons() {
    const balloonCount = 100; // You wanted 5-6 balloons
    
    for (let i = 0; i < balloonCount; i++) {
        // Create a new balloon element
        const balloon = document.createElement('div');
        balloon.innerHTML = '🎈';
        balloon.classList.add('balloon');
        
        // Pick a random spot across the width of the screen
        const randomLeft = Math.floor(Math.random() * 90);
        balloon.style.left = randomLeft + 'vw';
        
        // Add a tiny random delay so they don't all fly at the exact same millisecond
        const randomDelay = Math.random() * 0.5;
        balloon.style.animationDelay = randomDelay + 's';
        
        // Add the balloon to the webpage
        document.body.appendChild(balloon);
        
        // Clean up: Remove the balloon from the code after 4.5 seconds (when the animation is done)
        setTimeout(() => {
            balloon.remove();
        }, 4500);
    }
}
// --- THEATER MODE TRANSITION ---
// --- THEATER MODE TRANSITION ---
function playOurStory() {
    releaseBalloons();

    const header = document.querySelector('header');
    const heroContent = document.querySelector('.hero-content');
    const heroOverlay = document.querySelector('.hero-overlay');
    const rows = document.querySelectorAll('.row');
    const heroSection = document.querySelector('.hero');
    const closeBtn = document.getElementById('close-story-btn');

    // Fade everything out
    header.classList.add('fade-out');
    heroContent.classList.add('fade-out');
    heroOverlay.classList.add('fade-out');
    rows.forEach(row => {
        row.classList.add('fade-out');
    });

    // Expand video and SHOW the close button
    heroSection.classList.add('fullscreen');
    closeBtn.classList.remove('hidden');
}
// --- EXIT THEATER MODE ---
function closeStory() {
    const header = document.querySelector('header');
    const heroContent = document.querySelector('.hero-content');
    const heroOverlay = document.querySelector('.hero-overlay');
    const rows = document.querySelectorAll('.row');
    const heroSection = document.querySelector('.hero');
    const closeBtn = document.getElementById('close-story-btn');

    // Bring everything back (Remove the fade-out class)
    header.classList.remove('fade-out');
    heroContent.classList.remove('fade-out');
    heroOverlay.classList.remove('fade-out');
    rows.forEach(row => {
        row.classList.remove('fade-out');
    });

    // Shrink the video back to normal size and HIDE the close button
    heroSection.classList.remove('fullscreen');
    closeBtn.classList.add('hidden');
}
// --- "ARE YOU STILL WATCHING?" INACTIVITY LOGIC ---
let inactivityTimer;

// Set the time limit here! 
// 3000 = 3 seconds (good for testing)
// 60000 = 1 minute
// 180000 = 3 minutes (recommended for the actual birthday)
const timeLimit = 10000; // Currently set to 5 seconds so you can test it quickly!

function resetTimer() {
    // Clear the previous timer
    clearTimeout(inactivityTimer);
    
    // Only start the countdown if she has entered the main site!
    if (!document.getElementById('main-screen').classList.contains('hidden')) {
        inactivityTimer = setTimeout(showPopup, timeLimit);
    }
}

function showPopup() {
    document.getElementById('still-watching-popup').classList.remove('hidden');
}

function resumeWatching() {
    // Hide the pop-up and start the clock again
    document.getElementById('still-watching-popup').classList.add('hidden');
    resetTimer(); 
}

// These lines "listen" for her doing anything on the page. 
// If she moves her mouse, clicks, or scrolls, the timer resets so she isn't interrupted while actively looking.
window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;
document.onclick = resetTimer;
document.onscroll = resetTimer;
let v = "";
const c = "1307";

function op() {
    document.getElementById('profile-screen').classList.add('hidden');
    document.getElementById('pin-scr').classList.remove('hidden');
}

function kp(n) {
    if (v.length < 4) {
        v += n;
        document.getElementById('pin-disp').innerText = v;
    }
}

function clr() {
    v = "";
    document.getElementById('pin-disp').innerText = v;
}

function chk() {
    if (v === c) {
        document.getElementById('pin-scr').classList.add('hidden');
        document.getElementById('let-scr').classList.remove('hidden');
    } else {
        clr();
    }
}

function bk() {
    document.getElementById('let-scr').classList.add('hidden');
    document.getElementById('profile-screen').classList.remove('hidden');
    clr();
}