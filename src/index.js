const PASSWORD = "TrustNo1";
const unlockBtn = document.getElementById("unlock-btn");
const passField = document.getElementById("password-field");
const lunchBtn = document.getElementById("launch-btn");
const checkBtns = document.getElementsByClassName("check-buttons")[0];
const levers = document.getElementsByClassName("levers")[0];

function setDisabled(inputs, desabled = false) {
    const f = input => input.disabled = desabled

    if (inputs.tagName.toUpperCase() === "INPUT") {
        f(inputs)
    } else {
        inputs.querySelectorAll("input")
            .forEach(f)
    }
}

function isReadyToLunch() {
    for (const e of checkBtns.getElementsByTagName("input")) {
        if (!e.checked) return false;
    }

    for (const e of levers.getElementsByTagName("input")) {
        if (e.value < 100) return false;
    }

    return true;
}

function initCheckBtns() {
    for (const e of checkBtns.getElementsByTagName("input")) {
        e.onchange = () => {
            lunchBtn.disabled = !isReadyToLunch();
        }
    }
}

function initLevers() {
    for (const e of levers.getElementsByTagName("input")) {
        e.onchange = () => {
            lunchBtn.disabled = !isReadyToLunch();
        }
    }
}

function initUnlockBtn() {
    unlockBtn.onclick = () => {
        if (passField.value === PASSWORD) {
            setDisabled(unlockBtn, true)
            setDisabled(passField, true)
            setDisabled(checkBtns)
            setDisabled(levers)
        }
    };
}

function disableControls() {
    setDisabled(checkBtns, true)
    setDisabled(levers, true)
    setDisabled(lunchBtn, true)
}


initUnlockBtn();
initCheckBtns();
initLevers();
disableControls();