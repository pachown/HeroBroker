//generate one item based on difficulty
//TODO itemFind modifier

export function generateItem(difficulty, itemFind) {

  var itemTypes = [
    "twoHandWeapon",
    "oneHandWeapon",
    "shield",
    "weapon",
    "helmet",
    "body",
    "boot",
    "glove",
    "shoulder",
    "ring",
    "pants",
    "belt",
    "amulet",
    "backpack",
    "bracelet",
    "sock",
    "underwear",
    "undershirt",
    "cloak",
    "glasses",
  ];
  var difficultyToMods = {
    1: [0, 2],
    2: [0, 3],
    3: [1, 3],
    4: [1, 4],
    5: [2, 4],
    6: [2, 5],
    7: [3, 5],
    8: [3, 6],
    9: [4, 6],
    10: [6, 8],
  };

  let item = {
    itemType: itemTypes[findRandomWhole(itemTypes.length)],
    modifiers: findRandomWholeRange(difficultyToMods[difficulty]),
    mods: [],
  };
  for (let i = 0; i < item.modifiers; i++) {
    let newMod = addStat(item.itemType);
    item.mods.push(newMod);
  }
  item.mods = sumModValues(item.mods)

  return item;
}

function addStat(itemType) {
  var powerStatBase = [1, 2];
  var weakStatBase = [1, 5];
  var mods = {
    strength: weakStatBase,
    "strength%": powerStatBase,
    intelligence: weakStatBase,
    "intelligence%": powerStatBase,
    agility: weakStatBase,
    "agility%": powerStatBase,
    allStats: weakStatBase,
    "allStats%": powerStatBase,
    health: [10, 100],
    "health%": powerStatBase,
    armor: weakStatBase,
    "armor%": powerStatBase,
    damage: weakStatBase,
    "damage%": powerStatBase,
    critChance: powerStatBase,
    critDamage: powerStatBase,
    attackSpeed: powerStatBase,
    thorns: weakStatBase,
    damageResist: powerStatBase,
    allResist: powerStatBase,
    fireResist: weakStatBase,
    physicalResist: weakStatBase,
    coldResist: weakStatBase,
    lightningResist: weakStatBase,
    psychicResist: weakStatBase,
    poisonResist: weakStatBase,
    chanceToBleed: weakStatBase,
    chanceToPoison: weakStatBase,
    chanceToBurn: weakStatBase,
    chanceToElectrocute: weakStatBase,
    chanceToFreeze: weakStatBase,
    chanceToStun: weakStatBase,
    chanceToExecute: weakStatBase,
    lifeRegeneration: powerStatBase,
    lifeOnKill: weakStatBase,
    lifeOnHit: powerStatBase,
    // "itemDrop%": [1, 20],
    // "goldDrop%": [1, 20],
    // inventorySpace: [1, 1],
  };
  var itemMultipliers = {
    twoHandWeapon: 10,
    oneHandWeapon: 6,
    shield: 4,
    helmet: 5,
    body: 10,
    boot: 3,
    glove: 3,
    shoulder: 3,
    ring: 2,
    pants: 8,
    amulet: 8,
    backpack: 5,
    bracelet: 2,
    sock: 1,
    underwear: 2,
    undershirt: 2,
    cloak: 4,
    glasses: 3,
    belt: 4
  };

  let keys = Object.keys(mods);
  let modName = keys[findRandomWhole(keys.length)];
  let modValue = findRandomTwoDecimal(mods[modName]) * itemMultipliers[itemType];

  let newStat = {
    modName: modName,
    modValue: modValue.toFixed(2),
  };
  return newStat;
}

function findRandomTwoDecimal(array) {
  return (Math.random() * (array[1] - array[0]) + array[0]);
}

function findRandomWholeRange(array) {
  return Math.floor(Math.random() * (array[1] - array[0]) + array[0]);
}

function findRandomWhole(num) {
  return Math.floor(Math.random() * num);
}

function sumModValues(modArray){
    const modSums = {};

    modArray.forEach(mod => {
        const modName = mod.modName;
        const modValue = parseFloat(mod.modValue);

        if (modSums[modName]) {
            modSums[modName] += modValue;
        } else {
            modSums[modName] = modValue;
        }
    });
    return Object.entries(modSums).map(([modName, modValue]) => ({
        modName,
        modValue: modValue.toFixed(2) // Optional: rounding to two decimal places
    }));
}
