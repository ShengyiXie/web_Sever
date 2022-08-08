//响应返回数据的模型
//基本模型
class baseModel {
    // 构造器
    constructor(data, message) {
        if (typeof data == 'string') {
            // data是对象，如果是字符串的话，应该传入message
            this.message = data;
            data = null;
            message = null
        }
        if (data) {
            this.data = data;

        }
        if (message) {
            this.message = message;

        }
    }
}
//成功的
class successModel extends baseModel {
    constructor(data, message) {
        super(data, message);
        this.errno = 0;
    }
}
//失败的
class failModel extends baseModel {
    constructor(data, message) {
        super(data, message);
        this.errno = -1;
    }
}
module.exports = {
    successModel,
    failModel
}