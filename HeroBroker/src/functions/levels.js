// HeroBroker takes information about levels, such as their grid layout, difficulty, rewards, enemies, and lore. It then creates a level object with this information.
import { generateGrid } from "./grid.js";

let test = [
  {
    name: "Test Level",
    grid: generateGrid(),
    difficulty: 1,
    description: "This is a test level.",
    rewards: {
      gold: 100,
      items: ["test_item"],
    },
    enemies: ["test_enemy"],
    boss: "test_boss",
    music: "test_music",
    background: "test_background",
    timeLimit: null,
    maxAttempts: null,
    specialConditions: null,
    unlocks: ["test_unlock"],
    achievements: ["test_achievement"],
    events: [],
    traps: [],
    secrets: [],
    lore: "This is a test level lore.",
  },
];

export function createLevel(levelsData = test) {
  const level = [];
  for (let i = 0; i < levelsData.length; i++) {
    const levelData = levelsData[i];
    const grid = generateGrid(levelData.grid);
    const level = createLevel(grid, levelData);
    level.push(level);
  }
  return level;
}  
