const fetch = require('node-fetch');

export default (req, res) => {
    let type = req.query.type;
    if (!type) {
        res.setHeader("Content-Type", 'application/json');
        res.send(JSON.stringify({
            error: "Please provide a type. (id, username)"
        }, null, 4))
    }
    if (type == "id") {
        let id = req.query.id;
        if (!id) {
            res.setHeader("Content-Type", 'application/json');
            res.send(JSON.stringify({
                error: "Please provide an ID."
            }, null, 4))
        }
        fetch(`https://api.roblox.com/users/${id}/onlinestatus`)
            .then(res => res.json())
            .then(json => {
                res.setHeader("Content-Type", 'application/json');
                res.send(JSON.stringify(json, null, 4))
            })
    }
    if (type == "username") {
        let username = req.query.username;
        if (!username) {
            res.setHeader("Content-Type", 'application/json');
            res.send(JSON.stringify({
                error: "Please provide a username."
            }, null, 4))
        }
        fetch(`https://api.roblox.com/users/get-by-username?username=${username}`)
            .then(res => res.json())
            .then(json => {
                fetch(`https://api.roblox.com/users/${json.Id}/onlinestatus`)
                    .then(res => res.text())
                    .then(text => {
                        res.setHeader("Content-Type", 'application/json');
                        res.send(JSON.stringify(text, null, 4))
                    })
            })
    }
}