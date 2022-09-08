const fs = require('fs');

export default (req, res) => {
    const { motd } = req.body
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const date = new Date();
    const timestamp = date.getTime();
    fs.appendFileSync('logs.env', `IP: ${ip} | Timestamp: ${timestamp} | MOTD: ${motd}`);
    res.status(200).json({
        motd: motd,
        state: 'success'
    })
}