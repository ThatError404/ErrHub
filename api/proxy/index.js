const fetch = require('node-fetch');

export default (req, res) => {
    const { query: { url } } = req
    fetch(url)
        .then(response => response.json())
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json({ error }))
    }