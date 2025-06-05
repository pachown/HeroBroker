import React from 'react';

// Define a color map for each letter possibility
const letterColors = {
    A: '#FFB6C1',
    B: '#8B4513',
    C: '#90EE90',
    D: '#FFD700',
    E: '#FFA07A',
    F: '#90EE90',
    G: '#20B2AA',
    H: '#FF6347',
    I: '#4682B4',
    J: '#F08080',
    K: '#B0C4DE',
    L: '#32CD32',
    M: '#FF69B4',
    N: '#8A2BE2',
    O: '#00CED1',
    P: '#FFA500',
    Q: '#E9967A',
    R: '#CE2029',
    S: '#00FA9A',
    T: '#000000',
    U: '#ADFF2F',
    V: '#40E0D0',
    W: '#FFDEAD',
    X: '#BA55D3',
    Y: '#00BFFF',
    Z: '#FF4500',
    // fallback color
    default: '#CCCCCC'
};

const cellStyle = {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    fontWeight: 'bold',
    fontSize: 24,
    borderRadius: 6,
    color: '#222',
    boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
};

const Map = (props) => {
    let grid = props.grid;
    // Helper to get border color for a cell
    // No helper needed, remove getBorderColor

    // Instead, add a negative margin to cellStyle to collapse the gap between cells
    // Update cellStyle above:
    const cellStyle = {
        width: 80,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: -2, // negative margin to collapse borders
        fontWeight: 'bold',
        fontSize: 24,
        borderRadius: 0,
        color: '#222',
        boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
    };

    return (
        <div
            style={{
                display: 'inline-block',
                padding: 10,
                backgroundColor: letterColors.F
            }}
        >
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((cell, colIndex) => {
                        // Check neighbors for border color
                        const left = colIndex > 0 ? row[colIndex - 1] : null;
                        const right = colIndex < row.length - 1 ? row[colIndex + 1] : null;
                        const up = rowIndex > 0 ? grid[rowIndex - 1][colIndex] : null;
                        const down = rowIndex < grid.length - 1 ? grid[rowIndex + 1][colIndex] : null;

                        let borderLeft = undefined, borderRight = undefined, borderTop = undefined, borderBottom = undefined;

                        if (cell === 'B' || cell === 'T' || cell === 'R') {
                            if (left === cell) borderLeft = `2px solid ${letterColors[cell]}`;
                            if (right === cell) borderRight = `2px solid ${letterColors[cell]}`;
                            if (up === cell) borderTop = `2px solid ${letterColors[cell]}`;
                            if (down === cell) borderBottom = `2px solid ${letterColors[cell]}`;
                        }

                        return (
                            <div
                                key={colIndex}
                                style={{
                                    ...cellStyle,
                                    backgroundColor: letterColors[cell] || letterColors.default,
                                    color:
                                        cell === 'T' || cell === 'B' || cell === 'R'
                                            ? '#fff'
                                            : cellStyle.color,
                                    borderLeft,
                                    borderRight,
                                    borderTop,
                                    borderBottom
                                }}
                            >
                                {cell}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Map;