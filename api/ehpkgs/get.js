const fetch = require('node-fetch');
const fs = require('fs');

export default (req, res) => {
    let raw = req.query.pkg;
    let pkg = raw.toLowerCase();
    // if https://raw.githubusercontent.com/ThatError404/ErrHub/main/api/ehpkgs/current/test.json is not "404: Not Found"
    fetch(`https://raw.githubusercontent.com/ThatError404/ErrHub/main/api/ehpkgs/current/${pkg}.json`)
        .then(res => res.json())
        .then(json => {
            res.status(200).json(json);
        })
        .catch(err => {
            res.status(404).json({ error: "404: Not Found" });
        });
}