export default (req, res) => {
    if (req.method === 'POST') {
        const file = req.body.file;
        
    } else {
        res.status(200).json({
            message: 'Send a POST request to this endpoint with a file'
            example: 'curl -X POST -F file=@/path/to/file https://errhub.dev/api/assistant'
        });
    }
}