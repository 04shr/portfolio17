<<<<<<< HEAD
// Function to Open Modal
function openModal(title, description, imageSrc, websiteLink) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("projectModal").style.display = "flex";
    document.getElementById("modalDescription").style.textAlign = "left";

    let websiteBtn = document.getElementById("websiteBtn");
    websiteBtn.onclick = function() {
        window.open(websiteLink, "_blank"); // Opens in a new tab
    };
}

// Function to Close Modal
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}
=======
// Function to Open Modal
function openModal(title, description, imageSrc, websiteLink) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("projectModal").style.display = "flex";
    document.getElementById("modalDescription").style.textAlign = "left";

    let websiteBtn = document.getElementById("websiteBtn");
    websiteBtn.onclick = function() {
        window.open(websiteLink, "_blank"); // Opens in a new tab
    };
}

// Function to Close Modal
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}
>>>>>>> ac111bf22a8d5cbb929bc224cb97a2fe8c3ea745
