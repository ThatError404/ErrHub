export default (req, res) => {
    let work = true
    res.status(200).json({
        work,
        math: {
            return: '69 * 420'
        }
    })
}