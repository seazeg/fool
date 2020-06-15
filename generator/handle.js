const fs = require("fs");
exports.generator = function(html) {
    fs.writeFile("./preview/preview.html", html, function(err) {
        if (err) {
            throw err;
        }
        console.log("写入成功");
    });
};
