export default (req, res) => {
    res.json({
        error: 'ERR 69 No package argument provided',
        message: 'Please provide a package argument in the URL using the format /api/pkgs/get?pkg=package-name',
        status: 400
    })
}