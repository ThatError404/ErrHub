const fetch = require('node-fetch');
const fs = require('fs');

export default (req, res) => {
    let raw = req.query.pkg;
    let pkg = raw.toLowerCase();
    if (fs.existsSync("./current/" + pkg + ".json")) {
        let data = fs.readFileSync("./current/" + pkg + ".json");
        res.json(JSON.parse(data));
    } else {
        // Get files with a similar name
        res.status(404).json({
            error: 'Not found',
            pkg_sent: pkg
        });
    }
}