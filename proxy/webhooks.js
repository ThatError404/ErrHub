const fetch = require('node-fetch');

export default (req, res) => {
    const { content } = req.body;
    fetch('https://discord.com/api/webhooks/...', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            res.status(200).json({ data });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
}