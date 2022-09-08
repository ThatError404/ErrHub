const fs = require('fs');

export default (req, res) => {
    const { motd } = fs.readFileSync('/motd.txt', 'utf8');
    // Get a random line from the file
    const randomMotd = motd[Math.floor(Math.random() * motd.length)];
    const motdLine = motd.indexOf(randomMotd) + 1;
    res.status(200).json({
        motd: randomMotd,
        report: '/api/discord/motd/report?motd=' + motdLine
    })
}