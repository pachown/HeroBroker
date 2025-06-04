import React from 'react';

// Define a color map for each letter possibility
const letterColors = {
    A: '#FFB6C1',
    B: '#87CEFA',
    C: '#90EE90',
    D: '#FFD700',
    E: '#FFA07A',
    F: '#DDA0DD',
    G: '#20B2AA',
    H: '#FF6347',
    I: '#4682B4',
    J: '#F08080',
    K: '#B0C4DE',
    L: '#32CD32',
    M: '#FF69B4',
    N: '#8A2BE2',
    O: '#00CED1',
    P: '#FFDAB9',
    Q: '#E9967A',
    R: '#7B68EE',
    S: '#00FA9A',
    T: '#F4A460',
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
    return (
        <div style={{ display: 'inline-block', padding: 10 }}>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((cell, colIndex) => (
                        <div
                            key={colIndex}
                            style={{
                                ...cellStyle,
                                backgroundColor: letterColors[cell] || letterColors.default
                            }}
                        >
                            {cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Map;