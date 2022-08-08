# web_Sever

用nodejs结合mysql搭建的简易博客服务器，本地主机作为服务器，数据存储在mysql中，理解nodejs的使用
- 技术栈：nodejs,mysql,js
- Project-Tree
```
webSever
├─ app.js                  //搭建服务器，返回http响应体，响应头配置的参数
├─ bin
│  └─ www.js              //创建服务器，监听客户端，域名和端口 
├─ package-lock.json
├─ package.json
├─ README.md
└─ src
   ├─ config
   │  └─ MY_SQL_CONFIG.js   //连接mysql的配置
   ├─ controllers
   │  └─ blog.js            //获得博客列表和详情数据，创建，更新，删除操作对数据库的详细数据进行操作，重要
   ├─ db
   │  └─ index.js           //连接mysql，执行对数据库的操作
   ├─ model
   │  └─ responseModel.js   //返回响应体数据，成功和失败的模型，data,message
   └─ routes
      └─ blog.js            //客户端访问服务端时的url的判断，根据不同的方法和访问的路径返回不同的参数，重要

```

## 目录

1. [前提](#jump1)
2. [安装](#jump2)
3. [使用](#jump3)

### <span id="jump1">1. 前提</span>

本地主机安装了`mysql`软件，通过`mysql workbench`新建了一个`schema:myblog->tables:blogs`包含字段：`id,title,content,author,createdAt`字段，并与服务器连接.

![image](https://user-images.githubusercontent.com/49463200/183405304-4b62977e-4211-4833-9dd0-33e6307ac965.png)

文件`src/config/MY_SQLCONFIG.js`中存储连接的参数

---

### <span id="jump2">2. 安装</span>

`$ npm run dev`

---

### <span id="jump3">3. 使用</span>

在浏览器输入

- 获取列表数据http://localhost:5000/api/blog/list?author=xxx&keyword=xxx 方法：get
- 获取详情数据http://localhost:5000/api/blog/detail?id=xxx  方法：get 

在postwoman工具输入

- 创建新的博客http://localhost:5000/api/blog/new 方法：post  传入请求体数据：JSON格式，包括title,content,author(代码里默认写了一个),createdAt(Date.now())，测试的时候传入JSON格式数据如下即可

```
{
   title:"标题",
   content:"内容"
}
```

- 更新博客http://localhost:5000/api/blog/update?id=xxx 方法：post 传入请求体数据：JSON格式,包括title,content
- 删除博客http://localhost:5000/api/blog/delete?id=xxx 方法：post 
