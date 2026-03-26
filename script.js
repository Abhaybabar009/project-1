const form = document.getElementById("moodForm");
const moodInput = document.getElementById("mood");
const songsDiv = document.getElementById("songs");
const error = document.getElementById("error");

// Data (songs)
const musicData = {
    happy: ["Happy - illahi", "Dil dhadakne do "],
    sad: ["Let Her Go - Passenger", "Fix You - Coldplay"],
    energetic: ["Believer - Imagine Dragons", "hanuman chalisa"]
};

// Form submit
form.addEventListener("submit", function(e) {
    e.preventDefault();

    songsDiv.innerHTML = "";
    error.textContent = "";

    const mood = moodInput.value;

    // Validation
    if (mood === "") {
        error.textContent = "Please select a mood!";
        return;
    }

    // Show songs using Promise
    getSongs(mood)
        .then(data => {
            data.forEach(song => {
                const p = document.createElement("p");
                p.textContent = song;
                songsDiv.appendChild(p);
            });
        });
});

// Promise function
function getSongs(mood) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(musicData[mood]);
        }, 1000);
    });
}
