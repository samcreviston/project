
//Home page buttons to sub pages
document.getElementById('gameplay-button').addEventListener('click', function() {
    window.location.href = 'gameplay.html';
});

document.getElementById('faction-button').addEventListener('click', function() {
    window.location.href = 'army-factions.html';
});

document.getElementById('hobby-button').addEventListener('click', function() {
    window.location.href = 'hobby-of-warhammer.html';
});


//gameplay page
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

function populatePhaseInfo(phaseArray) {
    phaseArray.array.forEach(element => {
        const card = document.createElement('section');

        // Create elements
        const phaseName = document.createElement('h2');
        const phaseDescription = document.createElement('p');

        //populate elements
        phaseName.textContent = phase.name;
        phaseDescription.textContent = phase.description;

        //append elements
        card.append(phaseName);
        card.append(phaseDescription);

        //append card to section
        document.querySelector('main').appendChild(card);
    
    });
    }

populatePhaseInfo(battleRoundPhases);


//faction page
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