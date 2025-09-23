const notFound = (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} không tìm thấy`);
    res.status(404);
    next(err);
}

const handleError = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    return res.status(statusCode).json({
        success: false,
        message: error?.message
    })
}
module.exports = {
    notFound, handleError
}