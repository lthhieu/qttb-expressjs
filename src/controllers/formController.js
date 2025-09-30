import Form from '../models/form';
import aqp from 'api-query-params';

const ObjectId = require('mongoose').Types.ObjectId

const getForms = async (req, res) => {
    const { filter, skip, sort, projection, population } = aqp(req.query);
    const { page: currentPage, limit } = req.query
    delete filter.page
    delete filter.limit
    let offset = (+currentPage - 1) * (+limit)
    let defaultLimit = +limit ? +limit : 10

    const totalItems = (await Form.find(filter)).length
    const totalPages = Math.ceil(totalItems / defaultLimit)

    const response = await Form.find(filter)
        .skip(offset)
        .limit(defaultLimit)
        .sort(sort)
        .select(projection)
        .populate({
            path: 'categoryFormId',
            select: 'name'
        })
        .exec()

    return res.status(200).json({
        success: response ? true : false,
        message: response ? "Tải biểu mẫu thành công" : "Tải biểu mẫu thất bại",
        meta: {
            current: +currentPage,
            pageSize: +limit,
            pages: totalPages,
            total: totalItems
        },
        data: response ? response : null
    })
}

const addNewForm = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Chưa có file" });
    }
    const { name, issueDate, categoryFormId } = req.body;
    if (!name || !issueDate || !categoryFormId) {
        return res.status(400).json({
            success: false,
            message: "thiếu name,issueDate,categoryFormId"
        })
    }
    if (!ObjectId.isValid(categoryFormId)) {
        return res.status(400).json({
            success: false,
            message: "id danh mục không đúng dịnh dạng"
        })
    }
    const base64File = req.file.buffer.toString("base64");

    const response = await Form.create({ name, issueDate, categoryFormId, file: base64File, mimetype: req.file.mimetype })
    return res.status(201).json({
        success: response ? true : false,
        message: response ? "Tạo biểu mẫu thành công" : "Tạo biểu mẫu thất bại",
        data: response ? response : null
    })
}

const addNewPost = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Chưa có thumbnail" });
    }
    const base64Image = req.file.buffer.toString("base64");
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({
            success: false,
            message: "thiếu title hoặc content"
        })
    }
    const slug = slugify(title, { locale: 'vi' })
    const response = await Post.create({ title, content, thumbnail: base64Image, slug, mimetype: req.file.mimetype })
    return res.status(201).json({
        success: response ? true : false,
        message: response ? "Tạo bài viết thành công" : "Tạo bài viết thất bại",
        data: response ? response : null
    })
}

module.exports = {
    // addNewPost, getPost, getPosts, updatePost, deletePost
    getForms, addNewForm
}