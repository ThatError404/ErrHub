const fetch = require('node-fetch');

export default (req, res) => {
    const { url } = req.query;
    if (!url) {
        return res.status(400).send('Missing URL parameter');
    } else {
        fetch(url)
            .then(response => response.text())
            if (response.text().match(/src="http/)) {
                const httpValue = response.text().match(/src="http/);
                const httpsValue = httpValue.replace('http', 'https://errhub.dev/proxy?url=http');
                response.text().replace(httpValue, httpsValue);
            }
            res.send(response.text());
        }
    }