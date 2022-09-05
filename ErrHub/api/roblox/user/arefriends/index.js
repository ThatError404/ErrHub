export default (req, res) => {
    res.setHeader("Content-Type", 'application/json');
    res.send(JSON.stringify({
        types: [{
            "Get Amount of Friends a User Has Online": "/roblox/user/friends/online/get?id={id}&fid={friend(s) id}",
        }]
    }, null, 4))
}