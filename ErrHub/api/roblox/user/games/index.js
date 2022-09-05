export default (req, res) => {
    res.setHeader("Content-Type", 'application/json');
    res.send(JSON.stringify({
        types: [{
            "Get User's Games": "/roblox/user/games/get?id={id}",
        }]
    }, null, 4))
}