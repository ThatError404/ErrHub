export default (req, res) => {
    const fs = require('fs');
    const { type } = req.query;
    if (type === 'amount') {
        const fs = require('fs');
        const plugins = fs.readdirSync('../plugins');
        const folders = plugins.filter((plugin) => {
            return fs.statSync(`../plugins/${plugin}`).isDirectory();
        });
        res.status(200).json({ amount: folders.length });
    }
}