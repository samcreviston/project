document.getElementById("next-button").addEventListener("click", onNextButtonClick);
document.getElementById("previous-button").addEventListener("click", onPreviousButtonClick);

const battleRoundPhases = [
    {
        name: "Command Phase",
        description: "During the Command Phase, players issue orders to their units, strategize their next moves, and prepare for the upcoming battle round."
    },
    {
        name: "Movement Phase",
        description: "During the Movement Phase, players move their units across the battlefield to secure objectives and gain advantageous positions."
    },
    {
        name: "Shooting Phase",
        description: "The Shooting Phase is where ranged units unleash varying weapons upon their foes, eliminating the brute of the enemy forces from relative safety"
    },
    {
        name: "Charge Phase",
        description: "In the Charge Phase, units that are within range and line of sight of enemy units can attempt to charge into close combat to engage them in melee."
    },
    {
        name: "Fight Phase",
        description: "During the Fight Phase, units that successfully charged or were charged get to fight in close combat, resolving attacks against nearby enemy units."
    }
];

let currentPhaseIndex = 0;

function populatePhaseInfo() {
    const phaseInfoSection = document.getElementById("phase-info");
    phaseInfoSection.innerHTML = `<h2>${battleRoundPhases[currentPhaseIndex].name.toUpperCase()}</h2><p>${battleRoundPhases[currentPhaseIndex].description}</p>`;
}

function onNextButtonClick() {
    currentPhaseIndex = (currentPhaseIndex + 1) % battleRoundPhases.length;
    populatePhaseInfo();
}

function onPreviousButtonClick() {
    currentPhaseIndex = (currentPhaseIndex - 1 + battleRoundPhases.length) % battleRoundPhases.length;
    populatePhaseInfo();
}

populatePhaseInfo();