export default (req, res) => {
    res.setHeader("Content-Type", 'application/json');
    res.send(JSON.stringify({
        types: [{
            "Get User's Friends": "/roblox/user/friends/get?id={id}&sort={sort order}",
        }]
    }, null, 4))
}