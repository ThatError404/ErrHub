const fetch = require('node-fetch');

export default (req, res) => {
    const { id } = req.query;
    if (!id) {
        res.setHeader("Content-Type", 'application/json');
        res.send(JSON.stringify({
            error: "No ID was provided."
        }, null, 4))
    } else {
        fetch(`https://friends.roblox.com/v1/users/${id}/friends/online`)
            .then((r) => r.json())
            .then((r) => {
            res.status(200).json(r);
        });
    }
}