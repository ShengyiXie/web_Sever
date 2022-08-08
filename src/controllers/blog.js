//博客列表和详情数据 数据库的详细数据
const { execSQL } = require('../db/index')
const getDetail = (id) => {
    //执行sq1语句
    let sql = `select * from blogs where id=${id}`;
    return execSQL(sql).then(array => {
        return array[0];
    });
    // return [{
    //     id: 3,
    //     title: '详情3',
    //     content: '内容3',
    //     author: 'wangwu',
    // }]
}
const getList = (author, keyword) => {
    //执行sq1语句
    let sql = `select * from blogs where 1=1 `;
    //console.log(1, sql);
    if (author) {


        sql = sql + `and author='${author}' `;
    }
    if (keyword) {
        sql += `and title like '%${keyword}%'`;
    }

    //返回的是promise
    return execSQL(sql);
    // return [{
    //     id: 1,
    //     title: '标题1',
    //     content: '内容1',
    //     author: 'zhangsan',
    // },
    // {
    //     id: 2,
    //     title: '标题2',
    //     content: '内容2',
    //     author: 'lisi',
    // }]
}
//创建新的博客
const createBlog = (blogData = {}) => {
    // console.log("博客数据", blogData);
    // return {
    //     id: 1
    // }
    let title = blogData.title;
    let content = blogData.content;
    let author = 'xsy';
    let createdAt = Date.now();
    //执行sq1语句
    let sql = `insert into blogs (title,content,author,createdAt) values ('${title}','${content}','${author}',${createdAt});`;
    //execSQL(sql)返回的是promise,携带的数据是执行了sql语句后的result
    return execSQL(sql).then(data => {
        return {
            id: data.insertId
        };
    });
}
//更新
const updateBlog = (id, blogData = {}) => {
    // console.log('更新', id, blogData);
    // return false;
    const title = blogData.title;
    const content = blogData.content;
    const sql = `update blogs set title='${title}',content='${content}'where id=${id}`;
    console.log(sql)
    return execSQL(sql).then(updateResult => {
        console.log('updateResult', updateResult);
        if (updateResult.affectedRows > 0) {
            return true;
        }
        return false;
    })
}
//删除
const deleteBlog = (id) => {
    // console.log('删除', id);
    // return true;
    const sql = `delete from blogs where id=${id}`;
    console.log(sql);
    return execSQL(sql).then(deleteResult => {
        console.log(deleteResult.affectedRows);
        if (deleteResult.affectedRows > 0) {
            return true;
        }
        return false;
    })
}


module.exports = {
    getList,
    getDetail,
    createBlog,
    updateBlog,
    deleteBlog
}