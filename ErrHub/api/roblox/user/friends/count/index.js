export default (req, res) => {
    res.setHeader("Content-Type", 'application/json');
    res.send(JSON.stringify({
        types: [{
            "Get Amount of Friends a User Has": "/roblox/user/friends/count/get?id={id}"
        }]
    }, null, 4))
}