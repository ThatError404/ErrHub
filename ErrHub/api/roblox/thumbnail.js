const fetch = require('node-fetch');

export default (req, res) => {
    const { url } = req.query;
    if (!url) return res.status(400);

    if (url) {
        // Get the thumbnail and respond with the base64
        fetch(url)
            .then(res => res.buffer())
            .then(buffer => {
                const base64 = buffer.toString('base64');
                res.status(200).send(base64);
            });
        }
    }