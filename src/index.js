const PASSWORD = "TrustNo1";
const unlockBtn = document.getElementById("unlock-btn");
const passField = document.getElementById("password-field");
const controlPanel = document.getElementsByClassName("control-panel")[0]
let panelLocked = true;

function togglePanelLock() {
    controlPanel.querySelectorAll("input")
        .forEach(value => {
            if (value.getAttribute("id") === "password-field"
                || value.getAttribute("id") === "unlock-btn") {
                value.disabled = !panelLocked
            } else {
                value.disabled = panelLocked
            }
        });
    panelLocked = !panelLocked;
}

unlockBtn.onclick = () => {
    if (passField.value === PASSWORD) {
        togglePanelLock();
    }
};

togglePanelLock();
