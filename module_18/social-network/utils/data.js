// Usernames Array
const usernames = [
    "BlueDragon99",
    "SparkleGurl23",
    "MidnightRider77",
    "TechMaster42",
    "SweetDreamer11",
    "GalaxyExplorer88",
    "FireflyChaser66",
    "NinjaWarrior21",
    "MoonlightDancer44",
    "ThunderBolt67",
    "AquaWave56",
    "SilverArrow99",
    "GoldenSphinx22",
    "CrimsonRose75",
    "SkyWalker32",
    "ElectricJolt83",
    "JungleSurvivor58",
    "FluffyPanda28",
    "VelvetViper47",
    "MagicWand71",
    "ShadowSeeker63",
    "DreamCatcher91",
    "AquaMarine77",
    "StarDust88",
    "NightOwl39",
    "CyberPirate49",
    "RosePetals12",
    "StellarVoyager55",
    "DragonFlyer16",
    "MistyMountain46",
    "CosmicJester76",
    "FrozenFire34",
    "StormySeas21",
    "EmeraldEyes98",
    "ThunderHeart61",
    "LunarWitch45",
    "FireFrost23",
    "EnchantedTales57",
    "AlphaWolf99",
    "ElectricEmber66",
    "CrystalWhisper43",
    "NeonSpectre87",
    "SereneSerenade22",
    "GalaxyGazer73",
    "RadiantDreamer54",
    "EchoPhoenix39",
    "DreamWeaver11",
    "FuzzyPixel28",
    "InfiniteHorizon19",
    "MysticJourney64",
    "SilverSeraph88",
    "StarlitKnight42",
    "OceanSiren66",
    "SolarFlare23",
    "SecretGarden44",
    "QuantumLeap77",
    "DuskTreader91",
    "BlazeFury47",
    "SeraphicSoul71",
    "CosmicEcho32",
];

// Email Addresses Array
const emails = [
    "bluedragon99@email.com",
    "sparkle.gurl23@email.com",
    "midnightrider77@email.com",
    "tech.master42@email.com",
    "sweetdreamer11@email.com",
    "galaxyexplorer88@email.com",
    "fireflychaser66@email.com",
    "ninjawarrior21@email.com",
    "moonlightdancer44@email.com",
    "thunderbolt67@email.com",
    "aquawave56@email.com",
    "silverarrow99@email.com",
    "goldensphinx22@email.com",
    "crimsonrose75@email.com",
    "skywalker32@email.com",
    "electricjolt83@email.com",
    "junglesurvivor58@email.com",
    "fluffypanda28@email.com",
    "velvetviper47@email.com",
    "magicwand71@email.com",
    "shadowseeker63@email.com",
    "dreamcatcher91@email.com",
    "aquamarine77@email.com",
    "stardust88@email.com",
    "nightowl39@email.com",
    "cyberpirate49@email.com",
    "rosepetals12@email.com",
    "stellarvoyager55@email.com",
    "dragonflyer16@email.com",
    "mistymountain46@email.com",
    "cosmicjester76@email.com",
    "frozenfire34@email.com",
    "stormyseas21@email.com",
    "emeraldeyes98@email.com",
    "thunderheart61@email.com",
    "lunarwitch45@email.com",
    "firefrost23@email.com",
    "enchantedtales57@email.com",
    "alphawolf99@email.com",
    "electricember66@email.com",
    "crystalwhisper43@email.com",
    "neonspectre87@email.com",
    "sereneserenade22@email.com",
    "galaxygazer73@email.com",
    "radiantdreamer54@email.com",
    "echophoenix39@email.com",
    "dreamweaver11@email.com",
    "fuzzypixel28@email.com",
    "infinitehorizon19@email.com",
    "mysticjourney64@email.com",
    "silverseraph88@email.com",
    "starlitknight42@email.com",
    "oceansiren66@email.com",
    "solarflare23@email.com",
    "secretgarden44@email.com",
    "quantumleap77@email.com",
    "dusktreader91@email.com",
    "blazefury47@email.com",
    "seraphicsoul71@email.com",
    "cosmicecho32@email.com",
];

const thoughts = [
    "Life is full of surprises.",
    "The sky looks so beautiful today.",
    "I wonder what tomorrow will bring.",
    "Happiness comes from within.",
    "Challenges make us stronger.",
    "Kindness can change someone's day.",
    "Today is a new opportunity.",
    "The world is vast and mysterious.",
    "Time flies by so quickly.",
    "Nature is awe-inspiring.",
    "Learning is a lifelong journey.",
    "Music has a way of touching the soul.",
    "Love makes everything worthwhile.",
    "Dreams are meant to be pursued.",
    "A good book can take you on an adventure.",
    "Laughter is contagious.",
    "The ocean is calming and humbling.",
    "Every person has a unique story.",
    "Gratitude can shift your perspective.",
    "Forgiveness brings inner peace.",
    "The sunsets are breathtaking.",
    "Memories are treasures to cherish.",
    "Change is a constant in life.",
    "Positive thoughts lead to positive outcomes.",
    "We are all connected in some way.",
    "Empathy can heal wounds.",
    "The stars hold countless mysteries.",
    "Creativity knows no bounds.",
    "The present moment is all we have.",
    "Life is an ever-evolving journey.",
    "A smile can brighten someone's day.",
    "Being true to yourself is liberating.",
    "There is beauty in simplicity.",
    "Random acts of kindness make the world better.",
    "Success is a result of persistence.",
    "Nature has a way of calming the mind.",
    "The best is yet to come.",
    "Every day is a chance to start anew.",
    "Time spent with loved ones is precious.",
    "Inner strength is a powerful asset.",
    "Silence can be comforting.",
    "No two snowflakes are alike.",
    "Small acts of love can have a big impact.",
    "Imagination has no boundaries.",
    "Opportunities are everywhere if we look.",
    "Patience is a virtue worth cultivating.",
    "There is joy in helping others.",
    "The world needs more compassion.",
    "Failure is a stepping stone to success.",
    "The universe is full of mysteries.",
    "Every ending is a new beginning.",
    "A positive mindset attracts positive experiences.",
    "The journey is as important as the destination.",
    "Hope keeps us going in tough times.",
    "We are capable of more than we realize.",
    "Adversity reveals our true strength.",
    "Gratitude can turn a bad day into a good one.",
    "Kindness costs nothing but means everything.",
    "Life's challenges shape who we become.",
    "A loving heart is a happy heart.",
    "We are all works in progress.",
    "The little things matter the most.",
];

// Get a random item given an array
const getRandomUniqueArrItem = (arr) => {
    if (arr.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];

    // Remove selected item from the array to protect against duplicate key error
    arr.splice(randomIndex, 1);

    return randomItem;
};

// Get a random email
const getRandomEmail = () => getRandomUniqueArrItem(emails);

// Get a random username
const getRandomUsername = () => getRandomUniqueArrItem(usernames);

// Get random thoughts by int
const getRandomThoughts = (int) => {
    thoughtsArray = [];

    for (let i = 0; i < int; i++) {
        if (thoughts.length === 0) {
            break;
        }

        const randomThought = getRandomUniqueArrItem(thoughts);
        thoughtsArray.push(randomThought);
    }

    return thoughtsArray;
};

module.exports = { getRandomEmail, getRandomUsername, getRandomThoughts };