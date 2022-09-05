const fetch = require('node-fetch');
const fs = require('fs');

export default (req, res) => {
    const { pkg } = req.query.pkg;
    console.log(pkg)
    if (fs.existsSync(`./public/${pkg}.json.err`)) {
        res.status(200).json(JSON.parse(fs.readFileSync(`./public/${pkg}.json.err`)));
    } else {
        // Get files with a similar name
        res.status(404).json({
            error: 'Not found',
            
        });
    }
}
