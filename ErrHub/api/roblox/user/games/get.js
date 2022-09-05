const fetch = require('node-fetch');

export default (req, res) => {
    const { id } = req.query;
    if (!id) {
        res.setHeader("Content-Type", 'application/json');
        res.send(JSON.stringify({
            error: "No ID was provided."
        }, null, 4))
    } else {
        fetch(`https://games.roblox.com/v2/users/${id}/games?sortOrder=Asc&limit=50`)
            .then((r) => r.json())
            .then((r) => {
            res.status(200).json(r);
        });
    }
}