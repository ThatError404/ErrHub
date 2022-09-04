export default (req, res) => {
    res.setHeader("Content-Type", 'application/json');
    res.send(JSON.stringify({
        types: [{
            "Get User Status (By ID)": "/roblox/user/status?type=id&id={id}",
            "Get User Status (By Username)": "/roblox/user/status?type=username&username={username}"
        }]
    }, null, 4))
}