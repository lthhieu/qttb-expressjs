import FormCategory from '../models/formCategory';

const addNewFormCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            message: "thiếu name"
        })
    }
    const response = await FormCategory.create({ name })
    return res.status(201).json({
        success: response ? true : false,
        message: response ? "Tạo danh mục biểu mẫu thành công" : "Tạo danh mục biểu mẫu thất bại",
        data: response ? response : null
    })
}

const getFormCategories = async (req, res) => {


    const response = await FormCategory.find()
    return res.status(200).json({
        success: response ? true : false,
        message: response ? "Tải danh mục biểu mẫu thành công" : "Tải danh mục biểu mẫu thất bại",
        data: response ? response : null
    })
}

module.exports = {
    // addNewPost, getPost, getPosts, updatePost, deletePost
    addNewFormCategory, getFormCategories
}