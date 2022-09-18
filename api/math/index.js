export default (req, res) => {
    const data = req.body;
    if (data.idle == "true" || data.idle == true) {
        let work = true
        res.status(200).json({
            work,
            math: {
                return: 1 + 1
            }
        })
    }
}
