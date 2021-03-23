/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-23 16:22:13
 * @Description  :
 */
import styleSheet from "../../stylesheet/form.json";
import { methods, computed } from "../public.js";
import rightMenu from "./menu.json";

export default {
    name: "hope_form",
    label: "表单",
    icon: "icon-icon_wangye",
    isSelected: false,
    zoomParams: {
        width: 800,
        height: "auto",
        x: 10,
        y: 10,
        resizable: false,
        draggable: true,
        lockAspectRatio: false,
    },
    includes: { base: true, effect: true },
    styleSheet: { ...styleSheet },
    scriptParams: {},
    script(ele) {
        return `
        window.fm = hope.form({
            ele: "#${ele.id}",
            on: {
                submit: function(e) {
                    console.log(e);
                },
                init:function (e) {
                    
                }
            },
            controls: {
                selector: {
                    on: {
                        change: function(e) {
                            console.log(e);
                        },
                        toggle: function(e) {
                            console.log(e);
                        },
                    },
                },
                checkbox: {
                    on: {
                        change: function(e) {
                            console.log(e);
                        },
                    },
                },
                radio: {
                    on: {
                        change: function(e) {
                            console.log(e);
                        },
                    },
                },
                input: {
                    on: {
                        blur: function(e) {
                            console.log(e);
                        },
                        focus: function(e) {
                            console.log(e);
                        },
                        input: function(e) {
                            console.log(e);
                        },
                    },
                },
                textarea: {
                    on: {
                        blur: function(e) {
                            console.log(e);
                        },
                        focus: function(e) {
                            console.log(e);
                        },
                        input: function(e) {
                            console.log(e);
                        },
                    },
                },
            },
            verify: {
                //[name]:fn
                city: function(value) {
                    if (value.length <= 0) {
                        return "请选择一个选项";
                    }
                },
                text: function(value) {
                    if (value.length <= 0) {
                        return "文本不能为空";
                    }
                    if (value.length < 5) {
                        return "文本至少得5个字符";
                    }
                    if (!/^[A-Za-z]+$/.test(value)) {
                        return "文本必须是英文";
                    }
                },
                school: function(value) {
                    if (value.length <= 0) {
                        return "请选择一个选项";
                    }
                },
                LD: function(value) {
                    if (value.length <= 0) {
                        return "请选择一个选项";
                    }
                },
                password: function(value) {
                    if (value.length <= 0) {
                        return "文本不能为空";
                    }
                    if (value.length < 6) {
                        return "密码至少输入6个字符";
                    }
                },
                task: function(value) {
                    if (value.length <= 0) {
                        return "需要选择至少一个选项";
                    }
                },
                subject: function(value) {
                    if (value.length <= 0) {
                        return "需要选择至少一个选项";
                    }
                },
                radio: function(value) {
                    if (value.length <= 0) {
                        return "需要选择至少一个选项";
                    }
                },
                textarea: function(value) {
                    if (value.length <= 0) {
                        return "需要选择至少一个选项";
                    }
                },
            },
        });

        document.querySelector("#${ele.id}_set").onclick = function() {
            fm.val({
                city: {
                    type: "selector",
                    value: "南京",
                },
                school: {
                    type: "selector",
                    value: "清华大学",
                },
                LD: {
                    type: "selector",
                    value: "天津,乌鲁木齐,青岛",
                },
                text: {
                    type: "input",
                    value: "我爱HopeUI",
                },
                task: {
                    type: "checkbox",
                    value: "打桩",
                },
                textarea: {
                    type: "textarea",
                    value: "我爱北京天安门",
                },
                password: {
                    type: "input",
                    value: "999888999",
                },
                subject: {
                    type: "checkbox",
                    value: "历史",
                },
                radio: {
                    type: "radio",
                    value: "女",
                },
            });
        };
        
        document.querySelector("#${ele.id}_clear").onclick = function () {
            fm.clear();
        };
    `;
    },
    props: {
        ele: [Object, Array],
        htmlVisible: Boolean,
        cssVisible: Boolean,
        jsVisible: Boolean,
    },
    render() {
        return (
            <div>
                <form
                    class="hopeui-form"
                    name="form"
                    action=""
                    id={this.ele.id}
                >
                    <div class="hopeui-form-item">
                        <label class="hopeui-form-label">下拉框</label>
                        <div class="hopeui-input-block">
                            <select name="city" hope-verify="required">
                                <option value="">请选择</option>
                                <option value="青岛">青岛</option>
                                <option value="武汉">武汉</option>
                                <option value="乌鲁木齐">乌鲁木齐</option>
                                <option value="南京">南京</option>
                                <option value="天津">天津</option>
                                <option value="郑州">郑州</option>
                                <option value="重庆">重庆</option>
                                <option value="成都">成都</option>
                                <option value="云南">云南</option>
                            </select>
                        </div>
                    </div>
                    <div class="hopeui-form-item">
                        <label class="hopeui-form-label">分组下拉框</label>
                        <div class="hopeui-input-block">
                            <select name="school" hope-verify="required">
                                <option value="">请选择</option>
                                <optgroup label="北京">
                                    <option value=" 北京大学">北京大学</option>
                                    <option value="清华大学">清华大学</option>
                                </optgroup>
                                <optgroup label="浙江">
                                    <option value=" 浙江大学">浙江大学</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="hopeui-form-item">
                        <label class="hopeui-form-label">文本框</label>
                        <div class="hopeui-input-block">
                            <input
                                name="text"
                                type="text"
                                placeholder="请输入"
                                value=""
                                class="hopeui-input"
                                hope-verify="required"
                            />
                        </div>
                    </div>
                    <div class="hopeui-form-item">
                        <label class="hopeui-form-label">密码框</label>
                        <div class="hopeui-input-block">
                            <input
                                name="password"
                                type="password"
                                placeholder="请输入"
                                value=""
                                class="hopeui-input"
                                hope-verify="required"
                            />
                        </div>
                    </div>
                    <div class="hopeui-form-item">
                        <label class="hopeui-form-label">多选框</label>
                        <div class="hopeui-input-block">
                            <input
                                type="checkbox"
                                name="subject"
                                value="音乐"
                                hope-verify="required"
                            />
                            <input
                                type="checkbox"
                                name="subject"
                                value="历史"
                                hope-verify="required"
                            />
                            <input
                                type="checkbox"
                                name="subject"
                                value="生物"
                                hope-verify="required"
                            />
                        </div>
                    </div>
                    <div class="hopeui-form-item">
                        <label class="hopeui-form-label">多选框</label>
                        <div class="hopeui-input-block">
                            <input
                                type="checkbox"
                                name="task"
                                value="打桩"
                                hope-verify="required"
                            />
                            <input
                                type="checkbox"
                                name="task"
                                value="钓鱼"
                                hope-verify="required"
                            />
                            <input
                                type="checkbox"
                                name="task"
                                value="看电视"
                                hope-verify="required"
                            />
                        </div>
                    </div>
                    <div class="hopeui-form-item">
                        <label class="hopeui-form-label">单选框</label>
                        <div class="hopeui-input-block">
                            <input
                                type="radio"
                                name="radio"
                                value="男"
                                title="男"
                                hope-verify="required"
                                checked
                            />
                            <input
                                type="radio"
                                name="radio"
                                value="女"
                                title="女"
                                hope-verify="required"
                            />
                            <input
                                type="radio"
                                name="radio"
                                value="什么玩意"
                                title="什么玩意"
                                hope-verify="required"
                            />
                        </div>
                    </div>
                    <div class="hopeui-form-item">
                        <label class="hopeui-form-label">多文本域</label>
                        <div class="hopeui-input-block">
                            <textarea
                                name="textarea"
                                class="hopeui-textarea"
                                placeholder="请输入内容"
                                hope-verify="required"
                            />
                        </div>
                    </div>
                    <div class="hopeui-form-item">
                        <div class="hopeui-input-block">
                            <button
                                type="button"
                                class="hopeui-btn hopeui-btn-primary"
                                id={this.ele.id + '_set'}
                            >
                                赋值
                            </button>
                            <button
                                type="button"
                                class="hopeui-btn hopeui-btn-primary"
                                id={this.ele.id + '_clear'}
                            >
                                重置
                            </button>
                            <button type="submit" class="hopeui-btn">
                                提交表单
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    },
    computed: {
        ...computed,
    },
    contextMenuData: rightMenu,
    methods: {
        ...methods,
    },
};
