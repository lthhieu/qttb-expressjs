import RuleCategory from '../models/ruleCategory';

const addNewRuleCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            message: "thiếu name"
        })
    }
    const response = await RuleCategory.create({ name })
    return res.status(201).json({
        success: response ? true : false,
        message: response ? "Tạo danh mục văn bản thành công" : "Tạo danh mục văn bản thất bại",
        data: response ? response : null
    })
}

const getRuleCategories = async (req, res) => {
    const response = await RuleCategory.find()
    return res.status(200).json({
        success: response ? true : false,
        message: response ? "Tải danh mục văn bản thành công" : "Tải danh mục văn bản thất bại",
        data: response ? response : null
    })
}

module.exports = {
    addNewRuleCategory, getRuleCategories
}