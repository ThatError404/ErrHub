const fetch = require('node-fetch');

export default (req, res) => {
    const { name } = req.query;
    if (fs.existsSync(`./public/${name}.json.err`)) {
        res.status(200).json(JSON.parse(fs.readFileSync(`./public/${name}.json`)));
    } else {
        // Get files with a similar name
        res.status(404).json({
            error: 'Not found',
            
        });
    }