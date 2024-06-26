const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];

const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};


// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {

    const container = document.getElementById('playlists');
    container.innerHTML = '';

    Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];
        const guardianSongs = songs.filter(song => song.genre === preferredGenre);

        const guardianDiv = document.createElement('div');
        guardianDiv.classList.add('playlist');

        const guardianHeader = document.createElement('h2');
        guardianHeader.classList.add('guardian');
        guardianHeader.textContent = `${guardian}'s Playlist`;
        guardianDiv.appendChild(guardianHeader);

        const songList = document.createElement('ul');
        guardianSongs.map(song => {
            const songItem = document.createElement('li');
            songItem.textContent = `${song.title} by ${song.artist}`;
            songItem.classList.add('song-title'); // Apply song title class
            songList.appendChild(songItem);
        });

        guardianDiv.appendChild(songList);
        container.appendChild(guardianDiv);
    });
}
generatePlaylist(guardians, songs);

