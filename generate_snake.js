const fs = require('fs');

const width = 52;
const height = 7;

function generateSnakeSvg(commits) {
    const colors = ['#40c463', '#30a14e', '#216e39', '#0e4429'];
    let svgContent = `<svg width="${width * 10}" height="${height * 10}" viewBox="0 0 ${width * 10} ${height * 10}" xmlns="http://www.w3.org/2000/svg">`;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            svgContent += `<rect x="${x * 10}" y="${y * 10}" width="10" height="10" fill="${color}" />`;
        }
    }

    svgContent += '</svg>';
    return svgContent;
}

// Simulate fetching commit data (replace with actual data fetching logic)
const commits = []; // Fetch your commit data here
const svg = generateSnakeSvg(commits);

fs.writeFileSync('github-contribution-grid-snake.svg', svg);
