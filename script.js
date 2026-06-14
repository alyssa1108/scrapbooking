let currentPage = 0;

// 15 REAL PAGES
const pagesData = [
    { title:"How we started", text:"Our story began ❤️", img:"https://source.unsplash.com/600x400/?couple,love" },
    { title:"First laughs", text:"We laughed so much.", img:"https://source.unsplash.com/600x400/?laugh" },
    { title:"Late nights", text:"Talking for hours.", img:"https://source.unsplash.com/600x400/?night" },
    { title:"First memory", text:"I still remember this.", img:"https://source.unsplash.com/600x400/?memory" },
    { title:"Small moments", text:"They mattered most.", img:"https://source.unsplash.com/600x400/?cozy" },
    { title:"Road trips", text:"Music + us.", img:"https://source.unsplash.com/600x400/?roadtrip" },
    { title:"Peace", text:"Just us being calm.", img:"https://source.unsplash.com/600x400/?calm" },
    { title:"Your smile", text:"My favourite thing.", img:"https://source.unsplash.com/600x400/?smile" },
    { title:"Growth", text:"We got stronger.", img:"https://source.unsplash.com/600x400/?growth" },
    { title:"Hard days", text:"But we stayed.", img:"https://source.unsplash.com/600x400/?rain" },
    { title:"Healing", text:"We understood love.", img:"https://source.unsplash.com/600x400/?sunlight" },
    { title:"Deeper love", text:"It kept growing.", img:"https://source.unsplash.com/600x400/?heart" },
    { title:"Dreams", text:"Everything ahead.", img:"https://source.unsplash.com/600x400/?dream" },
    { title:"Forever", text:"Always you.", img:"https://source.unsplash.com/600x400/?romantic" },
    { title:"Right now", text:"This moment is ours.", img:"https://source.unsplash.com/600x400/?together" }
];

// BUILD PAGES
function buildPages() {
    const container = document.getElementById("pages");

    pagesData.forEach((p, index) => {
        const page = document.createElement("div");
        page.className = "page";
        page.style.zIndex = pagesData.length - index;

        page.innerHTML = `
            <h2>${p.title}</h2>
            <img src="${p.img}">
            <p>${p.text}</p>
        `;

        container.appendChild(page);
    });
}

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

    if(pass === "JoashManicum") {
        document.getElementById("scrapbook").classList.add("active");
        document.getElementById("lock").style.display = "none";
        buildPages();
    } else {
        alert("Wrong password");
    }
}

// FLIP FORWARD
function nextPage() {
    const pages = document.querySelectorAll(".page");

    if (currentPage < pages.length) {
        pages[currentPage].classList.add("flipped");
        currentPage++;

        // END OF BOOK → CLOSE BACK COVER
        if (currentPage === pages.length) {
            setTimeout(closeBook, 800);
        }
    }
}

// FLIP BACKWARD
function prevPage() {
    const pages = document.querySelectorAll(".page");

    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove("flipped");
    }
}

// BACK COVER CLOSE (REAL END FEEL)
function closeBook() {
    alert("Closing book... 💚");

    document.getElementById("book").classList.remove("open");
    document.getElementById("scrapbook").classList.remove("active");

    currentPage = 0;
}
