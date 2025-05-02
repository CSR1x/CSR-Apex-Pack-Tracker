// Store pack counters
let crBaseCount = 0;
let crSpecialCount = 0;
let zuzaBaseCount = 0;
let zuzaSpecialCount = 0;
let davidBaseCount = 0;
let davidSpecialCount = 0;

// Function to update the pack counter display
function updatePackCounters() {
    document.getElementById('cr-base-count').textContent = crBaseCount;
    document.getElementById('cr-special-count').textContent = crSpecialCount;
    document.getElementById('cr-total-count').textContent = crBaseCount + crSpecialCount;

    document.getElementById('zuza-base-count').textContent = zuzaBaseCount;
    document.getElementById('zuza-special-count').textContent = zuzaSpecialCount;
    document.getElementById('zuza-total-count').textContent = zuzaBaseCount + zuzaSpecialCount;

    document.getElementById('david-base-count').textContent = davidBaseCount;
    document.getElementById('david-special-count').textContent = davidSpecialCount;
    document.getElementById('david-total-count').textContent = davidBaseCount + davidSpecialCount;
}

// Event listeners for pack inputs
document.getElementById("cr-base-input").addEventListener("input", () => {
    crBaseCount = parseInt(document.getElementById("cr-base-input").value) || 0;
    updatePackCounters();
});

document.getElementById("cr-special-input").addEventListener("input", () => {
    crSpecialCount = parseInt(document.getElementById("cr-special-input").value) || 0;
    updatePackCounters();
});

// Similar for Zuza and David...
document.getElementById("zuza-base-input").addEventListener("input", () => {
    zuzaBaseCount = parseInt(document.getElementById("zuza-base-input").value) || 0;
    updatePackCounters();
});

document.getElementById("zuza-special-input").addEventListener("input", () => {
    zuzaSpecialCount = parseInt(document.getElementById("zuza-special-input").value) || 0;
    updatePackCounters();
});

// Similar for David...
document.getElementById("david-base-input").addEventListener("input", () => {
    davidBaseCount = parseInt(document.getElementById("david-base-input").value) || 0;
    updatePackCounters();
});

document.getElementById("david-special-input").addEventListener("input", () => {
    davidSpecialCount = parseInt(document.getElementById("david-special-input").value) || 0;
    updatePackCounters();
});

// Save data to localStorage
function saveData() {
    const data = {
        crBaseCount,
        crSpecialCount,
        zuzaBaseCount,
        zuzaSpecialCount,
        davidBaseCount,
        davidSpecialCount
    };
    localStorage.setItem('apexPackTracker', JSON.stringify(data));
}

// Load data from localStorage
function loadData() {
    const data = JSON.parse(localStorage.getItem('apexPackTracker'));
    if (data) {
        crBaseCount = data.crBaseCount;
        crSpecialCount = data.crSpecialCount;
        zuzaBaseCount = data.zuzaBaseCount;
        zuzaSpecialCount = data.zuzaSpecialCount;
        davidBaseCount = data.davidBaseCount;
        davidSpecialCount = data.davidSpecialCount;
        updatePackCounters();
    }
}

// Load heirlooms and recolors
function loadHeirlooms() {
    const baseHeirlooms = [
        { name: "Biwon Blade", character: "Crypto", img: "images/crypto.png" },
        { name: "Boxing Gloves", character: "Pathfinder", img: "images/pathfinder.png" },
        { name: "Butterfly Knife", character: "Octane", img: "images/octane.png" },
        { name: "Cold Steel", character: "Bangalore", img: "images/bangalore.png" },
        { name: "Dead Man's Curve", character: "Revenant", img: "images/revenant.png" },
        { name: "Death Hammer", character: "Caustic", img: "images/caustic.png" },
        { name: "Energy Reader", character: "Wattson", img: "images/wattson.png" },
        { name: "Garra de Alanza", character: "Loba", img: "images/loba.png" },
        { name: "Gravity Maw", character: "Horizon", img: "images/horizon.png" },
        { name: "Kunai", character: "Wraith", img: "images/wraith.png" },
        { name: "Problem Solver", character: "Rampart", img: "images/rampart.png" },
        { name: "Raven Bite", character: "Bloodhound", img: "images/bloodhound.png" },
        { name: "Razors Edge", character: "Fuse", img: "images/fuse.png" },
        { name: "Shock Sticks", character: "Lifeline", img: "images/lifeline.png" },
        { name: "Showstoppers", character: "Seer", img: "images/seer.png" },
        { name: "Strongest Link", character: "Ash", img: "images/ash.png" },
        { name: "Suzaku", character: "Valkyrie", img: "images/valkyrie.png" },
        { name: "Trophy", character: "Mirage", img: "images/mirage.png" },
        { name: "War Club", character: "Gibraltar", img: "images/gibraltar.png" }
    ];

    const recolorHeirlooms = [
        { name: "Hopes Dawn", character: "Wraith", img: "images/wraith_recolor.png" },
        { name: "Death Grip", character: "Revenant", img: "images/revenant_recolor.png" },
        { name: "Durumi Blade", character: "Crypto", img: "images/crypto_recolor.png" },
        { name: "Emerald Edge", character: "Bangalore", img: "images/bangalore_recolor.png" },
        { name: "Octane's Prototype", character: "Octane", img: "images/octane_recolor.png" },
        { name: "Winters Bane", character: "Bloodhound", img: "images/bloodhound_recolor.png" }
    ];

    const baseHeirloomsContainer = document.getElementById("base-heirlooms");
    baseHeirlooms.forEach(heirloom => {
        const item = document.createElement("div");
        item.className = "heirloom-item";
        item.innerHTML = `
            <div class="heirloom-img-container">
                <img src="${heirloom.img}" alt="${heirloom.name}" class="heirloom-img" onclick="openModal('${heirloom.img}')">
            </div>
            <div class="heirloom-name">${heirloom.character}</div>
        `;
        baseHeirloomsContainer.appendChild(item);
    });

    const recolorHeirloomsContainer = document.getElementById("recolor-heirlooms");
    recolorHeirlooms.forEach(heirloom => {
        const item = document.createElement("div");
        item.className = "heirloom-item";
        item.innerHTML = `
            <div class="heirloom-img-container">
                <img src="${heirloom.img}" alt="${heirloom.name}" class="heirloom-img" onclick="openModal('${heirloom.img}')">
            </div>
            <div class="heirloom-name">${heirloom.character}</div>
        `;
        recolorHeirloomsContainer.appendChild(item);
    });
}

// Open the modal
function openModal(imgSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = imgSrc;
}

// Close the modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Switch between tabs
function showPackTracker() {
    document.getElementById("packTracker").style.display = "block";
    document.getElementById("heirlooms").style.display = "none";
    document.getElementById("packTab").classList.add("active");
    document.getElementById("heirloomTab").classList.remove("active");
}

function showHeirlooms() {
    document.getElementById("heirlooms").style.display = "block";
    document.getElementById("packTracker").style.display = "none";
    document.getElementById("heirloomTab").classList.add("active");
    document.getElementById("packTab").classList.remove("active");
}

// Load data and heirlooms
loadData();
loadHeirlooms();
// Add event listeners for tabs
document.getElementById('packTrackerTab').addEventListener('click', () => {
    showPackTrackerTab();
});
document.getElementById('heirloomTab').addEventListener('click', () => {
    showHeirloomTab();
});

// Show Pack Tracker Tab
function showPackTrackerTab() {
    document.getElementById('packTrackerSection').classList.add('show');
    document.getElementById('heirloomSection').classList.remove('show');
    document.getElementById('packTrackerTab').classList.add('active');
    document.getElementById('heirloomTab').classList.remove('active');
}

// Show Heirloom Tab
function showHeirloomTab() {
    document.getElementById('packTrackerSection').classList.remove('show');
    document.getElementById('heirloomSection').classList.add('show');
    document.getElementById('heirloomTab').classList.add('active');
    document.getElementById('packTrackerTab').classList.remove('active');
}

// Ensure Pack Tracker Tab is displayed initially
showPackTrackerTab();