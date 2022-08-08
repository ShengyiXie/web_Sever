//获取博客接口
const { successModel, failModel } = require('../model/responseModel')
const { getList, getDetail, createBlog, updateBlog, deleteBlog } = require('../controllers/blog')

const blog = (req, res) => {
    const method = req.method;
    const blogData = req.body;
    const id = req.query.id || '';
    if (method === 'GET' && req.path === '/api/blog/list') {

        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listPromise = getList(author, keyword);
        //返回的http响应体的数据,promise,then方法返回的是一个新的Promise实例，也就是promise能链式书写的原因
        return listPromise.then(data => {
            return new successModel(data);
        })

    }
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const detailPromise = getDetail(id);
        //返回的http响应体的数据,promise,then方法返回的是一个新的Promise实例，也就是promise能链式书写的原因
        return detailPromise.then(data => {
            return new successModel(data);
        })

    }
    if (method === 'POST' && req.path === '/api/blog/new') {

        const createBlogPromise = createBlog(blogData);
        return createBlogPromise.then(data => {
            return new successModel(data);
        })

    }
    if (method === 'POST' && req.path === '/api/blog/update') {
        const updatedBlogPromise = updateBlog(id, blogData);
        return updatedBlogPromise.then((updatedBlogData) => {
            if (updatedBlogData) {
                return new successModel('更新成功');
            } else {
                return new failModel('更新失败');

            }
        })



    }
    if (method === 'POST' && req.path === '/api/blog/delete') {
        const deleteBlogPromise = deleteBlog(id);
        return deleteBlogPromise.then((deleteBlogData) => {
            if (deleteBlogData) {
                return new successModel('删除成功');
            } else {
                return new failModel('删除失败');

            }
        })

    }

}
module.exports = blog