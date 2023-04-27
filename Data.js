export const races = [
  {
    index: "dragonbord",
    name: "Dragonborn",
    speed: "6",
  },
  {
    index: "dwarf",
    name: "Dwarf",
    speed: "5",
  },
  {
    index: "elf",
    name: "Elf",
    speed: "7",
  },
  {
    index: "gnome",
    name: "Gnome",
    speed: "5",
  },
  {
    index: "half-elf",
    name: "Half-Elf",
    speed: "6",
  },
  {
    index: "half-orc",
    name: "Half-Orc",
    speed: "6",
  },
  {
    index: "halfling",
    name: "Halfling",
    speed: "6",
  },
  {
    index: "human",
    name: "Human",
    speed: "6",
  },
  {
    index: "tiefling",
    name: "Tiefling",
    speed: "6",
  },
];

export const classes = [
  {
    index: "barbarian",
    name: "Barbarian",
    hitDice: "12",
    subclass: [
      { subname: "Path of the Berserker" },
      { subname: "Path of the Totem Warrior" }
    ],
    savingThrow: [
      { save: "str" },
      { save: "con" }
    ]
  },
  {
    index: "bard",
    name: "Bard",
    hitDice: "8",
    subclass: [
      { subname: "College of Lore" }, 
      { subname: "College of Valor" }
    ],
    savingThrow: [
      { save: "dex" },
      { save: "cha" }
    ]
  },
  {
    index: "cleric",
    name: "Cleric",
    hitDice: "8",
    subclass: [
      { subname: "Knowledge Domain" },
      { subname: "Life Domain" },
      { subname: "Light Domain" },
      { subname: "Nature Domain" },
      { subname: "Tempest Domain" },
      { subname: "Trickery Domain" },
      { subname: "War Domain" },
    ],
    savingThrow: [
      { save: "wis" },
      { save: "cha" }
    ]
  },
  {
    index: "druid",
    name: "Druid",
    hitDice: "8",
    subclass: [
      { subname: "Circle of the Land" }, 
      { subname: "Circle of the Moon" }
    ],
    savingThrow: [
      { save: "int" },
      { save: "wis" }
    ]
  },
  {
    index: "fighter",
    name: "Fighter",
    hitDice: "10",
    subclass: [
      { subname: "Champion" },
      { subname: "Battle Master" },
      { subname: "Eldrich Knight" },
    ],
    savingThrow: [
      { save: "str" },
      { save: "con" }
    ]
  },
  {
    index: "monk",
    name: "Monk",
    hitDice: "8",
    subclass: [
      { subname: "Way of the Shadow" }, 
      { subname: "Way of the Four Elements" }
    ],
    savingThrow: [
      { save: "str" },
      { save: "dex" }
    ]
  },
  {
    index: "paladin",
    name: "Paladin",
    hitDice: "10",
    subclass: [
      { subname: "Oath of Devotion" },
      { subname: "Oath of Ancients" },
      { subname: "Oath of Vengance" },
    ],
    savingThrow: [
      { save: "wis" },
      { save: "cha" }
    ]
  },
  {
    index: "ranger",
    name: "Ranger",
    hitDice: "10",
    subclass: [
      { subname: "Hunter" },
      { subname: "Beast Master" }
    ],
    savingThrow: [
      { save: "str" },
      { save: "dex" }
    ]
  },
  {
    index: "rogue",
    name: "Rogue",
    hitDice: "8",
    subclass: [
      { subname: "Thief" },
      { subname: "Assasin" },
      { subname: "Arcane Trickster" },
    ],
    savingThrow: [
      { save: "dex" },
      { save: "int" }
    ]
  },
  {
    index: "sorcerer",
    name: "Sorcerer",
    hitDice: "6",
    subclass: [
      { subname: "Draconic Bloodline" },
      { subname: "Wild Magic" }
    ],
    savingThrow: [
      { save: "con" },
      { save: "cha" }
    ]
  },
  {
    index: "warlock",
    name: "Warlock",
    hitDice: "8",
    subclass: [
      { subname: "The Archfey" },
      { subname: "The Fiend" },
      { subname: "The Great Old One" },
    ],
    savingThrow: [
      { save: "wis" },
      { save: "cha" }
    ]
  },
  {
    index: "wizard",
    name: "Wizard",
    hitDice: "6",
    subclass: [
      { subname: "School of Abjuration" },
      { subname: "School of Conjuration" },
      { subname: "School of Divination" },
      { subname: "School of Enchantment" },
      { subname: "School of Evocation" },
      { subname: "School of Illusion" },
      { subname: "School of Necromancy" },
      { subname: "School of Transmutation" },
    ],
    savingThrow: [
      { save: "int" },
      { save: "wis" }
    ]
  },
];

export const backgrounds = [
  {
    index: "acolyte",
    name: "Acolyte",
  },
  {
    index: "charlatan",
    name: "Charlatan",
  },
  {
    index: "criminal",
    name: "Criminal",
  },
  {
    index: "entertainer",
    name: "Entertainer",
  },
  {
    index: "folk hero",
    name: "Folk Hero",
  },
  {
    index: "guild artisan",
    name: "Guild Artisan",
  },
  {
    index: "hermit",
    name: "Hermit",
  },
  {
    index: "noble",
    name: "Noble",
  },
  {
    index: "outlander",
    name: "Outlander",
  },
  {
    index: "sage",
    name: "Sage",
  },
  {
    index: "sailor",
    name: "Sailor",
  },
  {
    index: "soldier",
    name: "Soldier",
  },
  {
    index: "urchin",
    name: "Urchin",
  },
];
