let currentPage = 0;

// 15 PAGES
const pages = [
    { title: "How we started", text: "Our story began here ❤️", img: "https://source.unsplash.com/600x400/?couple,love" },
    { title: "First laughs", text: "We couldn't stop smiling.", img: "https://source.unsplash.com/600x400/?laugh" },
    { title: "Late nights", text: "Talking for hours and hours.", img: "https://source.unsplash.com/600x400/?night,stars" },
    { title: "Our first memory", text: "Something I'll never forget.", img: "https://source.unsplash.com/600x400/?memory" },
    { title: "Small moments", text: "They meant everything.", img: "https://source.unsplash.com/600x400/?cozy" },
    { title: "Road trips", text: "Music + us = perfect.", img: "https://source.unsplash.com/600x400/?roadtrip" },
    { title: "Comfort days", text: "Just peace with you.", img: "https://source.unsplash.com/600x400/?calm" },
    { title: "Your smile", text: "My favourite place.", img: "https://source.unsplash.com/600x400/?smile" },
    { title: "Growing together", text: "We became stronger.", img: "https://source.unsplash.com/600x400/?growth" },
    { title: "Hard days", text: "But we stayed.", img: "https://source.unsplash.com/600x400/?rain" },
    { title: "Healing", text: "We learned love better.", img: "https://source.unsplash.com/600x400/?sunlight" },
    { title: "Deep love", text: "It only got stronger.", img: "https://source.unsplash.com/600x400/?heart" },
    { title: "Dreams", text: "Everything ahead of us.", img: "https://source.unsplash.com/600x400/?dream" },
    { title: "Forever", text: "I choose you always.", img: "https://source.unsplash.com/600x400/?romantic" },
    { title: "Right now", text: "Just us, here.", img: "https://source.unsplash.com/600x400/?together" }
];

// OPEN BOOK
function openBook() {
    document.getElementById("book").classList.add("open");

    setTimeout(() => {
        document.getElementById("lock").classList.add("show");
    }, 1400);
}

// PASSWORD
function checkPassword() {
    const pass = document.getElementById("password").value;

    if (pass === "JoashManicum") {
        document.getElementById("scrapbook").classList.add("active");
        document.getElementById("lock").style.display = "none";
        renderPage();
    } else {
        alert("Wrong password");
    }
}

// RENDER PAGE
function renderPage() {
    const page = pages[currentPage];

    document.getElementById("pageTitle").innerText =
        `Page ${currentPage + 1} - ${page.title}`;

    document.getElementById("pageText").innerText = page.text;
    document.getElementById("pageImg").src = page.img;
}

// NEXT PAGE
function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        renderPage();
    } else {
        closeBook();
    }
}

// PREV PAGE
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
}

// CLOSE BOOK (BACK COVER EFFECT)
function closeBook() {
    alert("End of scrapbook 💚");

    document.getElementById("book").classList.remove("open");
    document.getElementById("scrapbook").classList.remove("active");

    // reset for next open
    document.getElementById("lock").style.display = "flex";
    document.getElementById("lock").classList.remove("show");
}
