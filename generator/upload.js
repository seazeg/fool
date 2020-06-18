const multer = require('@koa/multer');

exports.upload = function(router) {
    let storage = multer.diskStorage({
        //文件保存路径
        destination: function(req, file, cb) {
            cb(null, "./preview/upload");
        },
        //修改文件名称
        filename: function(req, file, cb) {
            var fileFormat = file.originalname.split("."); //以点分割成数组，数组的最后一项就是后缀名
            cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
        },
    });
    //加载配置
    let upload = multer({ storage: storage });

    router.post("/upload", upload.single("file"), async (ctx, next) => {
        ctx.body = {
            filename: `http://localhost:2599/upload/${ctx.file.filename}`, //返回文件名
        };
    });
};
