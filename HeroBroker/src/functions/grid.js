function generateGrid(min = 20, max = 80)  {
        // This function generates a grid for a farming simulation game with fields, plants, traps, a tractor, and a barn.
        const GRID_MIN = min;
        const GRID_MAX = max;
        const FIELD = 'F';
        const PLANT = 'P';
        const TRAP = 'T';
        const TRACTOR = 'R';
        const BARN = 'B';

        // Generate random grid size within limits
        const rows = Math.floor(Math.random() * (GRID_MAX - GRID_MIN + 1)) + GRID_MIN;
        const cols = Math.floor(Math.random() * (GRID_MAX - GRID_MIN + 1)) + GRID_MIN;

        // Initialize grid with fields
        let grid = Array.from({ length: rows }, () => Array(cols).fill(FIELD));

        // Place plants (10% of grid)
        const plantCount = Math.floor(rows * cols * 0.1);
        let placedPlants = 0;
        while (placedPlants < plantCount) {
            const r = Math.floor(Math.random() * rows);
            const c = Math.floor(Math.random() * cols);
            if (grid[r][c] === FIELD) {
                grid[r][c] = PLANT;
                placedPlants++;
            }
        }

        // Helper to check if area is free
        function isAreaFree(r, c, h, w) {
            if (r + h > rows || c + w > cols) return false;
            for (let i = 0; i < h; i++) {
                for (let j = 0; j < w; j++) {
                    if (grid[r + i][c + j] !== FIELD) return false;
                }
            }
            return true;
        }

        // Place 4 traps (2x1)
        let trapsPlaced = 0;
        while (trapsPlaced < 4) {
            const r = Math.floor(Math.random() * rows);
            const c = Math.floor(Math.random() * (cols - 1));
            if (isAreaFree(r, c, 1, 2)) {
                grid[r][c] = TRAP;
                grid[r][c + 1] = TRAP;
                trapsPlaced++;
            }
        }

        // Place 1 tractor (2x2)
        let tractorPlaced = false;
        while (!tractorPlaced) {
            const r = Math.floor(Math.random() * (rows - 1));
            const c = Math.floor(Math.random() * (cols - 1));
            if (isAreaFree(r, c, 2, 2)) {
                for (let i = 0; i < 2; i++)
                    for (let j = 0; j < 2; j++)
                        grid[r + i][c + j] = TRACTOR;
                tractorPlaced = true;
            }
        }

        // Place 1 barn (4x4)
        let barnPlaced = false;
        while (!barnPlaced) {
            const r = Math.floor(Math.random() * (rows - 3));
            const c = Math.floor(Math.random() * (cols - 3));
            if (isAreaFree(r, c, 4, 4)) {
                for (let i = 0; i < 4; i++)
                    for (let j = 0; j < 4; j++)
                        grid[r + i][c + j] = BARN;
                barnPlaced = true;
            }
        }

        // Output grid as string
        const gridString = grid.map(row => row.join('')).join('\n');
        const gridInfo = [gridString, grid];
        console.log(gridInfo);
        return gridString;
    }
export { generateGrid };
