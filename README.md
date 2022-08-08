# web_Sever

用nodejs结合mysql搭建的简易博客服务器

## 目录

1. [前提](#jump1)
2. [安装](#jump2)
3. [使用](#jump3)

### <span id="jump1">1. 前提</span>

本地主机安装了mysql软件，通过mysql workbench新建了一个schema:myblog->tables:blogs包含字段：id,title,content,author,createdAt字段，并与服务器连接，文件src/config/MY_SQLCONFIG.js中存储连接的参数
---

### <span id="jump2">2. 安装</span>

`$ npm run dev`
---

### <span id="jump3">3. 使用</span>

在浏览器输入

- 获取列表数据http://localhost:5000/api/blog/list?author=xxx&keyword=xxx 方法：get
- 获取详情数据http://localhost:5000/api/blog/detail?id=xxx  方法：get      
- 创建新的博客http://localhost:5000/api/blog/new 方法：post  传入请求体数据：JSON格式，包括title,content,author(代码里默认写了一个),createdAt(Date.now())，测试的时候传入JSON格式数据如下即可

```
{
   title:"标题",
   content:"内容"
}
```

- 更新博客http://localhost:5000/api/blog/list?id=xxx 方法：post 传入请求体数据：JSON格式,包括title,content
- 删除博客http://localhost:5000/api/blog/delete?id=xxx 方法：post 
