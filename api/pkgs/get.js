const fetch = require('node-fetch');
const fs = require('fs');

export default (req, res) => {
    const { name } = req.query;
    console.log(name)
    if (fs.existsSync(`./public/${name}.json.err`)) {
        res.status(200).json(JSON.parse(fs.readFileSync(`./public/${name}.json.err`)));
    } else {
        // Get files with a similar name
        res.status(404).json({
            error: 'Not found',
            
        });
    }
}
