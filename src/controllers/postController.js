import Post from '../models/post';
import slugify from 'slugify';

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
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

const getPost = async (req, res) => {
    const { pid } = req.params;
    const response = await Post.findOne({ slug: pid })
    return res.status(200).json({
        success: response ? true : false,
        message: response ? "Tải thông tin thành công" : "Tải thông tin thất bại",
        data: response ? response : null
    })
}

const getPosts = async (req, res) => {
    const response = await Post.find()
    return res.status(200).json({
        success: response ? true : false,
        message: response ? "Tải bài viết thành công" : "Tải bài viết thất bại",
        data: response ? response : null
    })
}

const updatePost = async (req, res) => {
    const { pid } = req.params;
    const { title, content, thumbnail } = req.body;
    if (!title || !content || !thumbnail) {
        return res.status(400).json({
            success: false,
            message: "thiếu title hoặc content hoặc thumbnail"
        })
    }
    req.body.slug = slugify(title, { locale: 'vi' })
    const response = await Post.findByIdAndUpdate(pid, req.body, { new: true });
    return res.status(200).json({
        success: response ? true : false,
        message: response ? "Cập nhật bài viết thành công" : "Cập nhật bài viết thất bại",
        data: response ? response : null
    })
}

const deletePost = async (req, res) => {
    const { pid } = req.params;
    const response = await Post.findByIdAndDelete(pid)
    return res.status(200).json({
        success: response ? true : false,
        message: response ? "Xóa bài viết thành công" : "Xóa bài viết thất bại",
        data: response ? response : null
    })
}

module.exports = {
    addNewPost, getPost, getPosts, updatePost, deletePost
}