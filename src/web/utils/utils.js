/*
 * @Author       : Evan.G
 * @Date         : 2020-05-13 16:31:05
 * @LastEditTime : 2021-03-12 17:49:19
 * @Description  :
 */

export const utils = {
    cssFormat: function (s) {
        //格式化代码
        s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
        s = s.replace(/;\s*;/g, ";"); //清除连续分号
        s = s.replace(/\,[\s\.\#\d]*{/g, "{");
        s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
        s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
        s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
        return s;
    },
    cssPack: function (s) {
        //压缩代码
        s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
        s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
        s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
        s = s.replace(/;\s*;/g, ";"); //清除连续分号
        s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
        return s == null ? "" : s[1];
    },
    json2css(json) {
        if (!json) {
            return "";
        } else {
            return JSON.stringify(json, 4)
                .slice(1, JSON.stringify(json).length - 1)
                .replace(new RegExp(",", "gm"), ";")
                .replace(new RegExp("};", "gm"), "}")
                .replace(new RegExp('"', "gm"), "")
                .replace(/:{/gi, "{");
        }
    },
    getRandomColor() {
        let r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256);
        return "rgba(" + r + "," + g + "," + b + ",1)";
    },
    getRandomName(n) {
        let chars = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];
        let res = "";
        for (let i = 0; i < n; i++) {
            let id = Math.ceil(Math.random() * 35);
            res += chars[id];
        }
        return res;
    },
    getEndEffect(s, e) {
        let _this = this;
        let style = _this.json2css(s).split(";"),
            effect = _this.json2css(e).split(";");

        return effect
            .filter((items) => {
                if (!style.includes(items.trim())) {
                    return items;
                }
            })
            .join(";");
    }
};
