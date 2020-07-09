export const utils = {
    cssFormat: function(s) {
        //格式化代码
        s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
        s = s.replace(/;\s*;/g, ";"); //清除连续分号
        s = s.replace(/\,[\s\.\#\d]*{/g, "{");
        s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
        s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
        s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
        return s;
    },
    cssPack: function(s) {
        //压缩代码
        s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
        s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
        s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
        s = s.replace(/;\s*;/g, ";"); //清除连续分号
        s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
        return s == null ? "" : s[1];
    },
    hump2Hyphen: function(s) {
        return s.replace(/([A-Z])/g, "-$1").toLowerCase();
    },
    json2css(json) {
        let _this = this;
        let css = "";

        Object.keys(json).forEach(function(key) {
            css += `${_this.hump2Hyphen(key)}:${json[key]};`;
        });
        return css;
    },
    filterParamsZero(css) {
        let res = "";
        let filterList = [
            "padding-left:0px;",
            "padding-right:0px;",
            "padding-top:0px;",
            "padding-bottom:0px;",
            "margin-left:0px;",
            "margin-right:0px;",
            "margin-top:0px;",
            "margin-bottom:0px;",
            "animation-name:;",
        ];
        for (let ft of filterList) {
            if (res) {
                res = res.replace(ft, "");
            } else {
                res = css.replace(ft, "");
            }
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
    },
};
