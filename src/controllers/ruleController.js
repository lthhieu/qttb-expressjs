import Rule from '../models/rule';
import aqp from 'api-query-params';

const ObjectId = require('mongoose').Types.ObjectId

const getRules = async (req, res) => {
    const { filter, skip, sort, projection, population } = aqp(req.query);
    const { page: currentPage, limit } = req.query
    delete filter.page
    delete filter.limit
    let offset = (+currentPage - 1) * (+limit)
    let defaultLimit = +limit ? +limit : 10

    const totalItems = (await Rule.find(filter)).length
    const totalPages = Math.ceil(totalItems / defaultLimit)

    const response = await Rule.find(filter)
        .skip(offset)
        .limit(defaultLimit)
        .sort(sort)
        .select(projection)
        .populate({
            path: 'categoryRuleId',
            select: 'name'
        })
        .exec()

    return res.status(200).json({
        success: response ? true : false,
        message: response ? "Tải văn bản thành công" : "Tải văn bản thất bại",
        meta: {
            current: +currentPage,
            pageSize: +limit,
            pages: totalPages,
            total: totalItems
        },
        data: response ? response : null
    })
}

const addNewRule = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Chưa có file" });
    }
    const { bio, issueDate, signNumber, categoryRuleId } = req.body;
    console.log(req.body)
    if (!bio || !issueDate || !signNumber || !categoryRuleId) {
        return res.status(400).json({
            success: false,
            message: "thiếu bio,issueDate,signNumber,categoryRuleId"
        })
    }
    if (!ObjectId.isValid(categoryRuleId)) {
        return res.status(400).json({
            success: false,
            message: "id danh mục không đúng dịnh dạng"
        })
    }
    const base64File = req.file.buffer.toString("base64");

    const response = await Rule.create({ bio, issueDate, signNumber, categoryRuleId, file: base64File, mimetype: req.file.mimetype })
    return res.status(201).json({
        success: response ? true : false,
        message: response ? "Tạo văn bản quy định thành công" : "Tạo văn bản quy định thất bại",
        data: response ? response : null
    })
}

module.exports = {
    addNewRule, getRules
}