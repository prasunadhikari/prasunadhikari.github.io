function openCert(imageName) {
    let oldPopup = document.getElementById("certPopup");
    if (oldPopup) oldPopup.remove();

    let popup = document.createElement("div");
    popup.id = "certPopup";

    popup.innerHTML = `
        <div class="cert-box">
            <img src="${imageName}" class="cert-img">

            <button class="close-btn" onclick="closeCert()">✖</button>
        </div>
    `;

    document.body.appendChild(popup);
}

function closeCert() {
    let popup = document.getElementById("certPopup");
    if (popup) popup.remove();
}