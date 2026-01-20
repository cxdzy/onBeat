
function createFloatingNotes(amount = 10) {

const notes = ['\u266A', '\u266B', '\u266C', '\u2669', '\u266A'];

function spawnNote() {
    const note = document.createElement('div');
    note.className = 'note';
    note.textContent = notes[Math.floor(Math.random() * notes.length)];
    note.style.left = Math.random() * 100 + 'vw';
    note.style.fontSize = (Math.random() * 20 + 15) + 'px';
    note.style.animationDuration = (Math.random() * 3 + 4) + 's';

    note.addEventListener('animationend', () => note.remove());
    document.body.appendChild(note);
}

// Spawn note every 500ms
setInterval(spawnNote, 2000);


}

// panggil bila page load
window.addEventListener('DOMContentLoaded', () => {
    createFloatingNotes(10); // boleh adjust banyak mana note nak keluar
});


// Generate File (Syarat No 4)
function generateReport() {
    let content = "VibeFlow Listening History\n\n";
    history.forEach(item => content += item + "\n");

    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "history_muzik.txt";
    link.click();
}

function changeTheme(mode) {
    const themeClass = mode + "-theme";
    document.body.className = themeClass;
    document.documentElement.className = themeClass;
    localStorage.setItem("selectedTheme", mode);
}

let isRepeat = false;

























// Senarai lagu (Playlist)
const tracks = [
    {
        title: "KUALA LUMFLOW",
        artist: "Dannqrack ft. Eemrun",
        src: "assets/KUALA LUMFLOW.mp3",
        cover: "assets/kualalumflow.jpg",
        lyrics: [
            { time: 0, text: "Yeah yeah yeah yeah yeah yeah yeah yeah" },
            { time: 10, text: "Yeah ha" },
            { time: 13, text: "Yeah at the end of the day" },
            { time: 15, text: "Kita end up 6 feet deep" },
            { time: 16, text: "I just wanna live my lyfe terpulang lah nak hidup macam mana" },
            { time: 20, text: "Keluar rumah waktu senja" },
            { time: 22, text: "Aku balik rumah langit masih gelap gelita" },
            { time: 24, text: "Brudda drop the pin location aku terus sampai kat situ" },
            { time: 27, text: "Whole squad at the function tell me what we gonna do" },
            { time: 30, text: "Ask me what you came for" },
            { time: 31, text: "Baddies dekat dancefloor" },
            { time: 33, text: "I just wanna spend sometime" },
            { time: 35, text: "Honestly" },
            { time: 36, text: "I just wanna live my life today" },
            { time: 37, text: "Spend my money macam baru lepas dapat pay" },
            { time: 40, text: "Need that Tuscan Leather atau Ombre" },
            { time: 43, text: "Sip my money sebab banyak lagi on the way" },
            { time: 45, text: "Tak perlu risau" },
            { time: 47, text: "Aku dengan Eem we got big moves" },
            { time: 48, text: "Kita beli penthouse beranda nampak sea view" },
            { time: 51, text: "VVS kat necklace" },
            { time: 52, text: "Silau takleh see you" },
            { time: 54, text: "Blueprint Kuala Lumpur dorang takleh tiru" },
            { time: 58, text: "Takleh tiru" },
            { time: 60, text: "They will never know what I've been thru" },
            { time: 62, text: "Kat KL ku jerit dorang bisu" },
            { time: 65, text: "Kalau kita keluar town KL rindu" },
            { time: 67, text: "KL is my city sampai mati aku rep that" },
            { time: 70, text: "Bila aku spit dorang tak perlu nak fact check" },
            { time: 72, text: "Aku dengan Eem getting bags itu fat cheques" },
            { time: 75, text: "4 pocket penuh awek awek cuba grab that" },
            { time: 78, text: "Menara kembar KL itu aku dengan twin" },
            { time: 80, text: "Wonder where that I would be now if it wasn't for Eem" },
            { time: 83, text: "Big ups to Riri das my big bro dia tau dia him" },
            { time: 85, text: "Bless up LB dengan Midlyfe and the whole fucking team" },
            { time: 88, text: "At the end of the day" },
            { time: 90, text: "Kita end up 6ft deep" },
            { time: 92, text: "I just wanna live my lyfe" },
            { time: 93, text: "Terpulang lah nak hidup macam mana" },
            { time: 94, text: "Keluar rumah waktu senja" },
            { time: 96, text: "Aku balik rumah langit masih gelap gelita" },
            { time: 99, text: "Brudda drop the pin location aku terus sampai kat situ" },
            { time: 102, text: "Whole squad at the function tell me what we gonna do" },
            { time: 104, text: "Ask me what you came for" },
            { time: 106, text: "Baddies dekat dancefloor" },
            { time: 107, text: "I just wanna spend sometime" },
            { time: 109, text: "Yeah at the end of the day" },
            { time: 111, text: "Kita end up 6 feet deep" },
            { time: 112, text: "I just wanna live my lyfe terpulang lah nak hidup macam mana" },
            { time: 116, text: "Keluar rumah waktu senja" },
            { time: 118, text: "Aku balik rumah langit masih gelap gelita" },
            { time: 120, text: "Brudda drop the pin location aku terus sampai kat situ" },
            { time: 123, text: "Whole squad at the function tell me what we gonna do" },
            { time: 126, text: "Ask me what you came for" },
            { time: 127, text: "Baddies dekat dancefloor" },
            { time: 128, text: "I just wanna spend sometime" },
            { time: 131, text: "Brand new" },
            { time: 132, text: "White tee" },
            { time: 132, text: "Dah ada corak" },
            { time: 134, text: "Takleh nampak" },
            { time: 135, text: "Guna mata kasar" },
            { time: 136, text: "Friend list ketat cam awek lu pakai tube top" },
            { time: 139, text: "Takleh ada masalah dengan you now" },
            { time: 142, text: "Aku dengan bro kat KL buat hal sendiri" },
            { time: 145, text: "Kalau boleh aku just nak hidup macam ni" },
            { time: 148, text: "Sampai aku 6 feet underground nah" },
            { time: 150, text: "Semua hal in the scene tak dengar dah" },
            { time: 153, text: "Banyak masalah aku jadikan rahsia" },
            { time: 155, text: "Tak perlu tahu benda berat macam ni" },
            { time: 158, text: "Aku still boleh gerak laju" },
            { time: 161, text: "And it's M O B" },
            { time: 163, text: "Motherfucker that's the motto" },
            { time: 164, text: "Aku tak pernah surf even tho dah bawak wave" },
            { time: 167, text: "Capai banyak benda aku still stuck in my ways" },
            { time: 169, text: "Gonna end up 6 feet deep" },
            { time: 171, text: "Never wanna end my life I'm addicted dopamine addict" },
            { time: 175, text: "Budak try nak jadi me daddy" },
            { time: 177, text: "Banyak gila anak aku tak kenal" },
            { time: 180, text: "Apologise kalau aku jadi deadbeat dad" },
            { time: 183, text: "Apologise been a bad parent (apologise been a bad)" },
            { time: 188, text: "Apologise rockstar status" },
            { time: 190, text: "Dah telan banyak benda" },
            { time: 192, text: "Sumpah aku tak rasa benda yang perlu rasa" },
            { time: 195, text: "Kadang kala aku need help like forreal" },
            { time: 198, text: "Boleh gerak dari dunia bila-bila masa aku tak expect forreal" },
            { time: 204, text: "Semua orang tak kenal aku" },
            { time: 206, text: "Banyak benda yang aku tengah hadap" },
            { time: 209, text: "Just nak rasa sedap" },
            { time: 211, text: "Memang ramai yang boleh relate dengan hal ni" },
            { time: 214, text: "Tapi malu nak cakap" }
        ]

    },
    {
        title: "Infiniti Cinta (feat. Kaka)",
        artist: "Zizan Razak ft. Kaka",
        src: "assets/Infiniti Cinta (feat. Kaka).mp3",
        cover: "assets/infiniticinta.jpg",
        lyrics: [
            { time: 0, text: "Bermula kutemu gadis berkaca mata" },
            { time: 14, text: "Comel anggun ayu cantik paras rupa jelita" },
            { time: 17, text: "Tinggi 5 3 laksana primadona" },
            { time: 19, text: "Terigau mimpi sini juga khayalnya ke sana" },
            { time: 22, text: "Pernahkah terdengar tiada dara ku yang renggang" },
            { time: 25, text: "Itu kisah ku dulu reputasi lamaku" },
            { time: 28, text: "Seribu memurai usah satu pun kau percaya" },
            { time: 30, text: "Seribu menggadai kau satu sumpah setia" },
            { time: 33, text: "Cliche dihatiku kau bermaharajalela" },
            { time: 36, text: "Manifesto luput bila nafas henti hela" },
            { time: 39, text: "Tiada medan yang takkan kubanting yang kujuang" },
            { time: 42, text: "Demi seru kau sayang demi kau seorang" },
            { time: 44, text: "Demi seru kau sayang demi kau seorang" },

            { time: 47, text: "Ucapkanlah kata-katamu dengan gurau sendamu" },
            { time: 56, text: "(Ku cuba menahan ketawa ku)" },
            { time: 58, text: "Jelaskanlah apa kau mahu" },
            { time: 64, text: "kan ku sedia menunggu" },
            { time: 67, text: "(apa yang ku rasa kau dah tahu)" },

            { time: 70, text: "Takkan ada lagi cinta yang setara" },
            { time: 74, text: "Kau dan aku, Kau dan aku" },

            { time: 80, text: "Kan baru saja aku bilang Ku mahu seru kau sayang" },
            { time: 83, text: "Hikayat kau aku Tanpa dia dan bayang-bayang" },
            { time: 86, text: "Diteraju kau dan aku Sutradara yang maha esa" },
            { time: 88, text: "Tetap kau aku lintas bandar rentas desa" },
            { time: 91, text: "Dan apa pula kau mahu jelas satu-satu" },
            { time: 94, text: "Leraikan yang terbuku dan segala didadamu" },
            { time: 97, text: "Salam perkenalan yang diselami dua hasrat" },
            { time: 99, text: "Moga-moga kita kekal hingga ke akhirat" },
            { time: 102, text: "Seharusnya kita kekal hingga ke akhirat" },

            { time: 105, text: "Ucapkanlah kata-katamu dengan gurau sendamu" },
            { time: 114, text: "(Ku cuba menahan ketawa ku)" },
            { time: 116, text: "Jelaskanlah apa kau mahu" },
            { time: 122, text: "kan ku sedia menunggu" },
            { time: 124, text: "(apa yang ku rasa kau dah tahu)" },

            { time: 128, text: "Takkan ada lagi cinta yang setara" },
            { time: 132, text: "Kau dan aku, Kau dan aku" },

            { time: 137, text: "Apakah guna seorang raja tanpa permaisuri jelita di sisinya" },
            { time: 145, text: "Ibarat jantung tiada degupannya" },
            { time: 148, text: "Dan diri aku bisa jadi ratu kamu" },
            { time: 152, text: "(dan memang aku ratu aku)" },
            { time: 155, text: "Andainya kamu mampu buktikan padaku" },

            { time: 159, text: "Cinta bukan saja bukti Ku uftikan cinta infiniti" },
            { time: 163, text: "Janji tak ditinggalkan tetapi ditepati" },
            { time: 166, text: "Kau istimewa tiada metafora setara Jadi tiada metafora kerna kau tidak ketara" },
            { time: 171, text: "Tiada metafora kerna kau tidak ketara" },

            { time: 174, text: "Ucapkanlah kata-katamu dengan gurau sendamu" },
            { time: 183, text: "(Ku cuba menahan ketawa ku)" },
            { time: 187, text: "Jelaskanlah apa kau mahu" },
            { time: 191, text: "kan ku sedia menunggu" },
            { time: 193, text: "(apa yang ku rasa kau dah tahu)" },

            { time: 197, text: "Takkan ada lagi cinta yang setara" },
            { time: 200, text: "Kau dan aku, Kau dan aku" },

            { time: 207, text: "Satu satu aku mahu kamu Dua dua hanya kita berdua" },
            { time: 212, text: "Tiga tiga bersama sama selamanya" },
            { time: 216, text: "(One more time!)" },
            { time: 218, text: "Satu satu aku mahu kamu Dua dua hanya kita berdua" },
            { time: 223, text: "Tiga tiga bersama sama selamanya" },

            { time: 230, text: "Takkan ada lagi cinta yang setara" },
            { time: 234, text: "Kau dan aku, Kau dan aku" },

            { time: 243, text: "Ucapkanlah kata-katamu dengan gurau sendamu" },
            { time: 254, text: "Jelaskanlah apa kau mahu" },
            { time: 259, text: "kan ku sedia menunggu" },
            { time: 264, text: "KAKA~" },
            { time: 266, text: "Takkan ada lagi cinta yang setara" },
            { time: 270, text: "Kau dan aku, Kau dan aku" }
        ]

    },
    {
        title: "Sesuatu (Stripped Version - Official Audio)",
        artist: "Nadhif Basalamah",
        src: "assets/Nadhif Basalamah - sesuatu (Stripped Version - Official Audio).mp3",
        cover: "assets/sesuatu.jpg",
        lyrics: [
            { time: 0, text: "Perasaan ini" },
            { time: 15, text: "Sesuatu lagi" },
            { time: 23, text: "Dering telfonku" },
            { time: 27, text: "Tak berbunyi senyap sunyi" },
            { time: 38, text: "Perasaan ini" },
            { time: 46, text: "Sesuatu lagi" },
            { time: 54, text: "Lepaskan mu" },
            { time: 57, text: "Takut aku" },

            { time: 69, text: "Sekarat tapi tak mati" },
            { time: 72, text: "Hanya lelah dibohongi" },
            { time: 76, text: "Kepala dikuasai amarah dan benci" },
            { time: 84, text: "Sendu, rindu dan cemasku" },
            { time: 87, text: "Tak berarti sesuatu" },
            { time: 91, text: "Adakah aku sedikit di hatimu?" },

            { time: 108, text: "Curiga ku ini" },
            { time: 115, text: "Harap tak sesali" },
            { time: 123, text: "Yang ku takut" },
            { time: 127, text: "Hanya diriku sendiri" },

            { time: 138, text: "Sekarat tapi tak mati (tak mati)" },
            { time: 142, text: "Hanya lelah dibohongi (dibohongi)" },
            { time: 145, text: "Kepala dikuasai amarah dan benci" },
            { time: 153, text: "Sendu, rindu dan cemasku" },
            { time: 157, text: "Tak berarti sesuatu" },
            { time: 160, text: "Adakah aku sedikit di hatimu?" },

            { time: 184, text: "Sekarat tapi tak mati (tak mati)" },
            { time: 188, text: "Hanya lelah dibohongi" },
            { time: 191, text: "Kepala dikuasai amarah dan benci" },
            { time: 199, text: "Sendu, rindu dan cemasku (rindu dan cemasku)" },
            { time: 203, text: "Tak berarti sesuatu" },
            { time: 207, text: "Adakah aku sedikit di hatimu?" }
        ]


    },
    {
        title: "Taylor Swift - The Fate of Ophelia",
        artist: "Taylor Swift",
        src: "assets/Taylor Swift - The Fate of Ophelia.mp3",
        cover: "assets/ophelia.jpg",
        lyrics: [
            { time: 0, text: "I heard you calling on the megaphone" },
            { time: 15, text: "You wanna see me all alone" },
            { time: 21, text: "As legend has it, you are quite the pyro" },
            { time: 25, text: "You light the match to watch it blow" },

            { time: 29, text: "And if you'd never come for me" },
            { time: 32, text: "I might've drowned in the melancholy" },
            { time: 36, text: "I swore my loyalty to me, myself, and I" },
            { time: 41, text: "Right before you lit my sky up" },

            { time: 46, text: "All that time" },
            { time: 48, text: "I sat alone in my tower" },
            { time: 50, text: "You were just honing your powers" },
            { time: 51, text: "Now I can see it all" },
            { time: 56, text: "Late one night" },
            { time: 57.8, text: "You dug me out of my grave and" },
            { time: 60, text: "Saved my heart from the fate of" },
            { time: 62, text: "Ophelia" },

            { time: 65, text: "Keep it one hundred on the land, the sea, the sky" },
            { time: 70, text: "Pledge allegiance to your hands, your team, your vibes" },
            { time: 74, text: "Don't care where the hell you've been 'cause now you're mine" },
            { time: 77, text: "It's 'bout to be the sleepless night you've been dreaming of" },
            { time: 82, text: "The fate of Ophelia" },

            { time: 86, text: "The eldest daughter of a nobleman" },
            { time: 90, text: "Ophelia lived in fantasy" },
            { time: 96, text: "But love was a cold bed full of scorpions" },
            { time: 100, text: "The venom stole her sanity" },

            { time: 106, text: "And if you'd never come for me" },
            { time: 108, text: "I might've lingered in purgatory" },
            { time: 112, text: "You wrap around me like a chain, a crown, a vine" },
            { time: 116, text: "Pulling me into the fire" },

            { time: 122, text: "All that time" },
            { time: 123.4, text: "I sat alone in my tower" },
            { time: 125, text: "You were just honing your powers" },
            { time: 127.2, text: "Now I can see it all" },
            { time: 132, text: "Late one night" },
            { time: 133, text: "You dug me out of my grave and" },
            { time: 135, text: "Saved my heart from the fate of" },
            { time: 137, text: "Ophelia" },

            { time: 141, text: "Keep it one hundred on the land, the sea, the sky" },
            { time: 145, text: "Pledge allegiance to your hands, your team, your vibes" },
            { time: 149, text: "Don't care where the hell you've been 'cause now you're mine" },
            { time: 152.8, text: "It's 'bout to be the sleepless night you've been dreaming of" },
            { time: 158, text: "The fate of Ophelia" },

            { time: 160, text: "'Tis locked inside my memory" },
            { time: 161.8, text: "And only you possess the key" },
            { time: 163.5, text: "No longer drowning and deceived" },
            { time: 165.8, text: "All because you came for me" },

            { time: 167, text: "'Locked inside my memory" },
            { time: 168.8, text: "And only you possess the key" },
            { time: 171.5, text: "No longer drowning and deceived" },
            { time: 172.8, text: "All because you came for me" },

            { time: 178, text: "All that time" },
            { time: 179.4, text: "I sat alone in my tower" },
            { time: 181, text: "You were just honing your powers" },
            { time: 183.2, text: "Now I can see it all" },
            { time: 185.2, text: "I CAN SEE IT ALL" },
            { time: 188, text: "Late one night" },
            { time: 189, text: "You dug me out of my grave and" },
            { time: 191, text: "Saved my heart from the fate of" },
            { time: 193, text: "Ophelia" },

            { time: 197, text: "Keep it one hundred on the land, the sea, the sky" },
            { time: 201, text: "Pledge allegiance to your hands, your team, your vibes" },
            { time: 205, text: "Don't care where the hell you've been 'cause now you're mine" },
            { time: 208.8, text: "It's 'bout to be the sleepless night you've been dreaming of" },
            { time: 214, text: "The fate of Ophelia" },

            { time: 217, text: "You saved my heart from the fate of Ophelia" }
        ]
    }
];


let currentTrackIndex = 0;
let currentLyricIndex = -1;

const audio = document.getElementById('mainAudio');
const albumArt = document.getElementById('albumArt');
const songTitle = document.getElementById('songTitle');
const artist = document.getElementById('artist');
const lyricsDiv = document.getElementById('lyricsContent');
const songListDiv = document.getElementById('songList');
const playBtn = document.getElementById('playBtn');
let draggedIndex = null;

songListDiv.innerHTML = "";

function renderSongList() {
    songListDiv.innerHTML = "";

    tracks.forEach((track, index) => {
        const btn = document.createElement("button");
        btn.draggable = true;
        btn.dataset.index = index;

        btn.innerHTML = `<i class="fas fa-music"></i> ${track.title}`;

        // CLICK → PLAY
        btn.onclick = () => playDirect(index);

        // DRAG START
        btn.addEventListener("dragstart", () => {
            draggedIndex = index;
            btn.classList.add("dragging");
        });

        // DRAG END
        btn.addEventListener("dragend", () => {
            btn.classList.remove("dragging");
        });

        // ALLOW DROP
        btn.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        // DROP
        btn.addEventListener("drop", () => {
            if (draggedIndex === null || draggedIndex === index) return;

            const draggedSong = tracks.splice(draggedIndex, 1)[0];
            tracks.splice(index, 0, draggedSong);

            // Adjust currentTrackIndex
            if (currentTrackIndex === draggedIndex) {
                currentTrackIndex = index;
            }

            draggedIndex = null;
            renderSongList();
        });

        songListDiv.appendChild(btn);
    });
}
renderSongList();

function toggleRepeat() {
    isRepeat = !isRepeat;

    const repeatBtn = document.getElementById('repeatBtn');
    repeatBtn.classList.toggle("active", isRepeat);

    if (isRepeat) {
        repeatBtn.classList.add("active");
        showNotification("Repeat ON");
    } else {
        repeatBtn.classList.remove("active");
        showNotification("Repeat OFF");
    }
}

/* =========================
   FUNCTION PLAY DIRECT
========================= */
function playDirect(index) {
    currentTrackIndex = index;
    loadTrack(index);
    audio.play();

    totalSongsPlayed++;
    updateStats();

    history.push(`[PLAY] ${tracks[index].title} at ${new Date().toLocaleTimeString()}`);
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}



/* =========================
   RENDER LYRICS
========================= */

function renderLyrics(song) {
    const lyricsBox = document.getElementById('lyricsContent');
    lyricsBox.innerHTML = '';
    currentLyricIndex = -1;

    const lyrics = song.lyrics && song.lyrics.length
        ? song.lyrics
        : [{ time: 0, text: "Lyrics not available." }];

    lyrics.forEach(line => {
        const p = document.createElement('p');
        p.textContent = line.text;
        p.dataset.time = line.time;
        lyricsBox.appendChild(p);
    });
}



/* =========================
   LOAD TRACK
========================= */
function loadTrack(index) {
    const track = tracks[index];

    audio.src = track.src;
    albumArt.src = track.cover;
    songTitle.innerText = track.title;
    artist.innerText = track.artist;

    renderLyrics(track);
    audio.currentTime = 0;
}




/* =========================
   SYNC LYRICS
========================= */
audio.addEventListener("timeupdate", () => {
    const time = audio.currentTime;
    const lines = document.querySelectorAll("#lyricsContent p");

    for (let i = 0; i < lines.length; i++) {
        const current = parseFloat(lines[i].dataset.time);
        const next = lines[i + 1]
            ? parseFloat(lines[i + 1].dataset.time)
            : Infinity;

        if (time >= current && time < next && currentLyricIndex !== i) {
            currentLyricIndex = i;

            lines.forEach((line, index) => {
                line.classList.remove("active", "past", "future");

                if (index < i) {
                    line.classList.add("past");
                } else if (index > i) {
                    line.classList.add("future");
                }
            });
            lines[i].classList.add("active");

            lines[i].scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            break;
        }
    }
});


/* =========================
   CONTROLS
========================= */
// function nextSong() {
//     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
//     loadTrack(currentTrackIndex);
//     audio.play();
//     playBtn.innerHTML = '<i class="fas fa-pause"></i>';
// }

function nextSong() {
    currentTrackIndex++;

    if (currentTrackIndex >= tracks.length) {
        currentTrackIndex = 0;
    }

    loadTrack(currentTrackIndex);
    audio.play();
}


function prevSong() {
    currentTrackIndex =
        (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function togglePlay() {
    const btn = document.getElementById('playBtn');

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
const btn = document.getElementById('playBtn');

audio.addEventListener('play', () => {
    btn.innerHTML = '<i class="fas fa-pause"></i>';

    totalSongsPlayed++;
    updateStats();

    history.push(`[PLAY] ${tracks[currentTrackIndex].title} at ${new Date().toLocaleTimeString()}`);
});

audio.addEventListener('pause', () => {
    btn.innerHTML = '<i class="fas fa-play"></i>';
});
audio.addEventListener("ended", () => {
    if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
    } else {
        nextSong();
    }
});

























document.addEventListener('DOMContentLoaded', () => {
    const playlistBody = document.getElementById('playlistBody');
    const saveBtn = document.getElementById('savePlaylistBtn');
    const playlistNameInput = document.getElementById('playlistName');
    const playlistImageInput = document.getElementById('playlistImage');
    const popup = document.getElementById('playlistPopup');

    // Array untuk simpan playlist
    let playlists = [];

    // Fungsi display playlist
    function displayPlaylist() {
        playlistBody.innerHTML = ''; // Kosongkan table
        playlists.forEach((playlist, index) => {
            const row = document.createElement('tr');

            // Nomor
            const noCell = document.createElement('td');
            noCell.textContent = index + 1;
            row.appendChild(noCell);

            // Cover Image
            const coverCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = playlist.image || 'assets/default-cover.png'; // default kalau tak ada gambar
            img.style.width = '50px';
            img.style.height = '50px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '5px';
            coverCell.appendChild(img);
            row.appendChild(coverCell);

            // Playlist Name
            const nameCell = document.createElement('td');
            nameCell.textContent = playlist.name;
            row.appendChild(nameCell);

            // Artist (kosongkan dulu)
            const artistCell = document.createElement('td');
            artistCell.textContent = '-';
            row.appendChild(artistCell);

            // Action
            const actionCell = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.style.background = '#e74c3c';
            deleteBtn.style.color = '#fff';
            deleteBtn.style.border = 'none';
            deleteBtn.style.padding = '5px 10px';
            deleteBtn.style.borderRadius = '5px';
            deleteBtn.style.cursor = 'pointer';
            deleteBtn.onclick = () => {
                playlists.splice(index, 1);
                displayPlaylist();
            };
            actionCell.appendChild(deleteBtn);
            row.appendChild(actionCell);

            playlistBody.appendChild(row);
        });
    }

    const notification = document.getElementById('notification');

    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('show');

        // hilang selepas 2.5 saat
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2500);
    }





    const searchInput = document.getElementById('userName');
    const suggestionsBox = document.getElementById('searchSuggestions');
    const mainAudio = document.getElementById('mainAudio');
    const albumArt = document.getElementById('albumArt');
    const songTitle = document.getElementById('songTitle');
    const artist = document.getElementById('artist');
    const lyricsDiv = document.getElementById('lyricsContent');


    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        suggestionsBox.innerHTML = ''; // kosongkan dulu

        if (query === '') return;

        // Cari lagu yang match
        const results = tracks.filter(track => track.title.toLowerCase().includes(query));

        results.forEach(track => {
            const div = document.createElement('div');
            div.textContent = track.title + " - " + track.artist;

            // Bila klik, auto play lagu
            div.addEventListener('click', () => {
                const index = tracks.findIndex(t => t.src === track.src);
                if (index !== -1) {
                    playDirect(index); // <-- loadTrack + play + renderLyrics + stats
                }
                suggestionsBox.innerHTML = '';
                searchInput.value = '';
            });



            suggestionsBox.appendChild(div);
        });
    });

    // Tutup suggestions kalau klik luar
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.innerHTML = '';
        }
    });


    // Fungsi print
    function printPlaylist() {
        const printContent = document.getElementById('playlistTable').outerHTML;
        const newWin = window.open('', '', 'width=800,height=600');
        newWin.document.write('<html><head><title>Print Playlist</title></head><body>');
        newWin.document.write(printContent);
        newWin.document.write('</body></html>');
        newWin.document.close();
        newWin.print();
    }
});























/* =========================
   VOLUME
========================= */
function adjustVolume() {
    const slider = document.getElementById('volumeSlider');
    const label = document.getElementById('volumeLabel');

    let vol = parseFloat(slider.value);
    audio.volume = vol;
    label.innerText = Math.round(vol * 100) + "%";
    localStorage.setItem("userVolume", vol);
}

window.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById('volumeSlider');
    const label = document.getElementById('volumeLabel');

    let saved = localStorage.getItem("userVolume");
    let vol = saved !== null ? parseFloat(saved) : 0.3;

    audio.volume = vol;
    slider.value = vol;
    label.innerText = Math.round(vol * 100) + "%";
});


function goToPage(pageId) {
    ['homePage', 'playlistPage', 'aboutPage'].forEach(id => {
        document.getElementById(id).className =
            (id === pageId) ? 'page visible' : 'page hidden';
    });
}

/* =========================
   INIT
========================= */
loadTrack(currentTrackIndex);



const bars = document.querySelectorAll('#visualizer .bar');
let visualizerInterval = null;

function startVisualizer() {
    stopVisualizer(); // safety

    visualizerInterval = setInterval(() => {
        bars.forEach(bar => {
            const height = Math.random() * 40 + 5; // random naik turun
            bar.style.height = height + "px";
        });
    }, 150);
}

function stopVisualizer() {
    clearInterval(visualizerInterval);
    visualizerInterval = null;

    bars.forEach(bar => {
        bar.style.height = "5px"; // turun semua
    });
}
audio.addEventListener('play', startVisualizer);
audio.addEventListener('pause', stopVisualizer);
audio.addEventListener('ended', stopVisualizer);




























// // 1. Tambah pembolehubah statistik
// let totalSongsPlayed = 0;
// let sleepTimeout = null;

// // 2. Kemaskini fungsi TogglePlay untuk Visualizer & Stat
// function togglePlay() {
//     const audio = document.getElementById('mainAudio');
//     const btn = document.getElementById('playBtn');
//     const visualizer = document.getElementById('visualizer');

//     if (audio.paused) {
//         audio.play();
//         btn.innerHTML = '<i class="fas fa-pause"></i>';
//         visualizer.classList.add('playing-visual');

//         // Update Stats
//         totalSongsPlayed++;
//         updateStats();

//         history.push(`[PLAY] ${tracks[currentTrackIndex].title} at ${new Date().toLocaleTimeString()}`);
//     } else {
//         audio.pause();
//         btn.innerHTML = '<i class="fas fa-play"></i>';
//         visualizer.classList.remove('playing-visual');
//     }
// }
function goToPage(pageId) {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('playlistPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';

    const page = document.getElementById(pageId);
    page.style.display = 'block';

    // Reset animation
    page.classList.remove('page');
    void page.offsetWidth;
    page.classList.add('page');
}












// 3. Data Visualization (Syarat 3)
function updateStats() {
    document.getElementById('statTotal').innerText = totalSongsPlayed;
    // Simulasi progress bar (max 20 lagu untuk nampak penuh)
    let progress = (totalSongsPlayed / 20) * 100;
    document.getElementById('playProgress').style.width = Math.min(progress, 100) + "%";
}

// 4. Sleep Timer (Syarat 5)
// function setSleepTimer(minutes) {
//     stopSleepTimer(); // Clear timer lama jika ada
//     const ms = minutes * 60 * 1000;
//     document.getElementById('timerStatus').innerText = `Timer set: ${minutes} minutes`;

//     sleepTimeout = setTimeout(() => {
//         const audio = document.getElementById('mainAudio');
//         audio.pause();
//         document.getElementById('playBtn').innerHTML = '<i class="fas fa-play"></i>';
//         document.getElementById('visualizer').classList.remove('playing-visual');
//         document.getElementById('timerStatus').innerText = "Sleep timer finished.";
//     }, ms);
// }

// function stopSleepTimer() {
//     clearTimeout(sleepTimeout);
//     document.getElementById('timerStatus').innerText = "Timer off.";
// }

// 5. Interactive History Report (Syarat 4)
function generateReport() {
    // Kami buat report yang lebih interaktif
    let reportTitle = "=== onBeat LISTENING INSIGHTS ===\n";
    let user = localStorage.getItem('username') || "Valued Listener";
    let summary = `User: ${user}\nTotal Songs Session: ${totalSongsPlayed}\n\n`;
    let detail = "Detailed Logs:\n" + history.join("\n");

    const blob = new Blob([reportTitle + summary + detail], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `onBeat_Report_${user}.txt`;
    link.click();
}














// Ambil elemen
const progressSlider = document.getElementById('progressSlider');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

// 1. Update timeline semasa lagu dimainkan
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        // Kira peratus lagu
        const progressPercent = (audio.currentTime / audio.duration) * 100;

        // Update slider value
        progressSlider.value = progressPercent;

        // 👉 INI PENTING: hantar peratus ke CSS
        progressSlider.style.setProperty(
            '--progress',
            `${progressPercent}%`
        );

        // Papar masa
        currentTimeEl.innerText = formatTime(audio.currentTime);
        durationEl.innerText = formatTime(audio.duration);
    }
});


// 2. Fungsi untuk lompat ke minit tertentu (Seek)
function seekAudio() {
    const seekTo = (progressSlider.value / 100) * audio.duration;
    audio.currentTime = seekTo;
}

// 3. Helper function untuk tukar saat ke format M:SS
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = `0${sec}`;
    return `${min}:${sec}`;
}









function goToPage(pageId) {
    const pages = ['homePage', 'playlistPage', 'aboutPage'];
    pages.forEach(id => {
        document.getElementById(id).style.display = (id === pageId) ? 'block' : 'none';
    });
}

audio.addEventListener('play', () => {
    document.getElementById('visualizer').classList.add('active');
});

audio.addEventListener('pause', () => {
    document.getElementById('visualizer').classList.remove('active');
});
audio.addEventListener("play", () => {
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    document.getElementById("floatingPlayBtn").innerHTML = '<i class="fas fa-pause"></i>';
});

audio.addEventListener("pause", () => {
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    document.getElementById("floatingPlayBtn").innerHTML = '<i class="fas fa-play"></i>';
});
















