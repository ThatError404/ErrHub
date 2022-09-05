export default (req, res) => {
    res.setHeader("Content-Type", 'application/json');
    res.send(JSON.stringify({
        types: [{
            "Get User's Followers": "/roblox/user/followers/get?id={id}",
        }]
    }, null, 4))
}