
//Home page buttons to sub pages
const gameplayButton = document.getElementById('gameplay-button');
if (gameplayButton) {
    gameplayButton.addEventListener('click', function() {
        window.location.href = 'gameplay.html';
    });
}

const factionButton = document.getElementById('faction-button');
    if (factionButton) {
        factionButton.addEventListener('click', function() {
            window.location.href = 'army-factions.html';
        });
    }

const hobbyButton = document.getElementById('hobby-button');
if (hobbyButton) {
    hobbyButton.addEventListener('click', function() {
        window.location.href = 'hobby-of-warhammer.html';
    });
}


//gameplay page
const nextButton = document.getElementById('next-button');
if (nextButton) {
    nextButton.addEventListener('click', onNextButtonClick);
}

const previousButton = document.getElementById('previous-button');
if (previousButton) {
    previousButton.addEventListener('click', onPreviousButtonClick);
}


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
    const phase = battleRoundPhases[currentPhaseIndex];

    if (phase) {
        const phaseInfoSection = document.getElementById('phase-info');

        if (phaseInfoSection) {
            const phaseNameElement = document.createElement('h2');
            const phaseDescription = document.createElement('p');

            phaseNameElement.textContent = phase.name.toUpperCase();
            phaseDescription.textContent = phase.description;

            phaseInfoSection.innerHTML = ''; // Clear previous content
            phaseInfoSection.appendChild(phaseNameElement);
            phaseInfoSection.appendChild(phaseDescription);
        }
    }
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


//faction page
const spaceMarinesButton = document.getElementById('space-marines');
if (spaceMarinesButton) {
    spaceMarinesButton.addEventListener('click', () => populateFactionInfo("Space Marines"));
}

const aeldariButton = document.getElementById('aeldari');
if (aeldariButton) {
    aeldariButton.addEventListener('click', () => populateFactionInfo("Aeldari"));
}

const tauEmpireButton = document.getElementById('tau-empire');
if (tauEmpireButton) {
    tauEmpireButton.addEventListener('click', () => populateFactionInfo("T'au"));
}

const spaceWolvesButton = document.getElementById('space-wolves');
if (spaceWolvesButton) {
    spaceWolvesButton.addEventListener('click', () => populateFactionInfo("Space Wolves"));
}

const tyranidsButton = document.getElementById('tyranids');
if (tyranidsButton) {
    tyranidsButton.addEventListener('click', () => populateFactionInfo("Tyranids"));
}

const Factions = [
    {
        name: "Space Marines",
        description: "Space Marines are superhuman warriors serving as humanity's most elite fighting force, defending the Imperium of Man.",
        epicHeroes: [
            "Roboute Guilliman",
            "Marneus Calgar",
            "Dante"
        ],
        battlelineUnits: [
            "Tactical Squad",
            "Intercessor Squad"
        ],
        combatRange: "mid-range"
    },
    {
        name: "Aeldari",
        description: "Aeldari, also known as Eldar, are an ancient and advanced alien race with a rich history and mastery over psychic powers.",
        epicHeroes: [
            "Eldrad Ulthran",
            "Yvraine",
            "Prince Yriel"
        ],
        battlelineUnits: [
            "Guardian Defenders",
            "Rangers"
        ],
        combatRange: "long-range"
    },
    {
        name: "T'au",
        description: "The T'au are a technologically advanced and rapidly expanding alien race, driven by the philosophy of the Greater Good.",
        epicHeroes: [
            "Commander Farsight",
            "Aun'Va",
            "Shadowsun"
        ],
        battlelineUnits: [
            "Fire Warriors",
            "Pathfinders"
        ],
        combatRange: "long-range"
    },
    {
        name: "Space Wolves",
        description: "The Space Wolves are a fierce and independent Space Marine Chapter known for their ferocity in battle and strong sense of honor.",
        epicHeroes: [
            "Logan Grimnar",
            "Ragnar Blackmane",
            "Bjorn the Fell-Handed"
        ],
        battlelineUnits: [
            "Grey Hunters",
            "Blood Claws"
        ],
        combatRange: "close-range"
    },
    {
        name: "Tyranids",
        description: "The Tyranids are a terrifying alien hive fleet that consumes all in their path, driven by a collective hive mind.",
        epicHeroes: [
            "Hive Tyrant",
            "The Swarmlord",
            "Old One Eye"
        ],
        battlelineUnits: [
            "Termagants",
            "Hormagaunts"
        ],
        combatRange: "close-range"
    }
];

function populateFactionInfo(factionName) {
    const faction = Factions.find(f => f.name === factionName);

    if (faction) {
        const card = document.createElement('section');
        
        const factionNameElement = document.createElement('h2');
        const factionDescription = document.createElement('p');
        const factionEpicHeroes = document.createElement('h4');
        const factionBattleline = document.createElement('h4');
        const factionRange = document.createElement('p');

        factionNameElement.textContent = faction.name;
        factionDescription.textContent = faction.description;
        factionEpicHeroes.textContent = `Epic Heroes: ${faction.epicHeroes.join(', ')}`;
        factionBattleline.textContent = `Battleline Units: ${faction.battlelineUnits.join(', ')}`;
        factionRange.textContent = `Combat Range: ${faction.combatRange}`;

        card.appendChild(factionNameElement);
        card.appendChild(factionDescription);
        card.appendChild(factionEpicHeroes);
        card.appendChild(factionBattleline);
        card.appendChild(factionRange);

        document.querySelector('main').appendChild(card);
    }
}




// Responsive footer
const cYearElement = document.getElementById("currentyear");
const lastModElement = document.getElementById("lastModified");

if (cYearElement) {
    const currentYear = new Date().getFullYear();
    cYearElement.textContent = currentYear;
}

if (lastModElement) {
    const modified = new Date(document.lastModified);
    lastModElement.textContent = "last modified: " + modified;
}