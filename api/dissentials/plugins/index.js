export default (req, res) => {
    const fs = require('fs');
    const { type } = req.query;
    if (type === 'amount') {
        const fs = require('fs');
        const plugins = fs.readdirSync('.');
        const folders = plugins.filter((plugin) => {
            return fs.statSync(`./${plugin}`).isDirectory();
        });
        res.send(JSON.stringify({
            amount: folders.length
        }, null, 4));
    } else {
        res.send(JSON.stringify({
            error: 'Invalid type'
        }, null, 4));
    }
}
