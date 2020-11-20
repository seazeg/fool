<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-11-17 14:53:34
 * @Description  : 
-->

<template>
    <form class="hopeui-form" name="form" action="" id="form">
        <div class="hopeui-form-item">
            <label class="hopeui-form-label">下拉框</label>
            <div class="hopeui-input-block">
                <select name="city" hope-verify="required">
                    <option value="">请选择</option>
                    <option value="qd" selected>青岛</option>
                    <option value="wh">武汉</option>
                    <option value="wlmq">乌鲁木齐</option>
                    <option value="南京">南京</option>
                    <option value="天津">天津</option>
                    <option value="123123" selected>郑州</option>
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
                    <optgroup label="北京"">
                                <option value=" 北京大学">北京大学</option>
                        <option value="清华大学" selected>清华大学</option>
                    </optgroup>
                    <optgroup label="浙江"">
                                <option value=" 浙江大学">浙江大学</option>
                    </optgroup>
                </select>
            </div>
        </div>
        <div class="hopeui-form-item">
            <label class="hopeui-form-label">文本框</label>
            <div class="hopeui-input-block">
                <input name="text" type="text" placeholder="请输入" value="" class="hopeui-input" hope-verify="required" />
            </div>
        </div>
        <div class="hopeui-form-item">
            <label class="hopeui-form-label">密码框</label>
            <div class="hopeui-input-block">
                <input name="password" type="password" placeholder="请输入" value="" class="hopeui-input"
                    hope-verify="required" />
            </div>
        </div>
        <div class="hopeui-form-item">
            <label class="hopeui-form-label">多选框</label>
            <div class="hopeui-input-block">
                <input type="checkbox" name="subject" value="音乐" hope-verify="required" />
                <input type="checkbox" name="subject" value="历史" hope-verify="required" />
                <input type="checkbox" name="subject" value="生物" hope-verify="required" disabled />
            </div>
        </div>
        <div class="hopeui-form-item">
            <label class="hopeui-form-label">多选框</label>
            <div class="hopeui-input-block">
                <input type="checkbox" name="task" value="打桩" hope-verify="required" />
                <input type="checkbox" name="task" value="钓鱼" hope-verify="required" />
                <input type="checkbox" name="task" value="看电视" hope-verify="required" />
            </div>
        </div>
        <div class="hopeui-form-item">
            <label class="hopeui-form-label">单选框</label>
            <div class="hopeui-input-block">
                <input type="radio" name="radio" value="男" title="男" hope-verify="required" checked />
                <input type="radio" name="radio" value="女" title="女" hope-verify="required" />
                <input type="radio" name="radio" value="什么玩意" title="什么玩意" hope-verify="required" disabled />
            </div>
        </div>
        <div class="hopeui-form-item">
            <label class="hopeui-form-label">多文本域</label>
            <div class="hopeui-input-block">
                <textarea name="textarea" class="hopeui-textarea" placeholder="请输入内容" hope-verify="required"></textarea>
            </div>
        </div>
        <div class="hopeui-form-item">
            <div class="hopeui-input-block">
                <button type="button" class="hopeui-btn hopeui-btn-primary" id="set">
                    赋值
                </button>
                <button type="button" class="hopeui-btn hopeui-btn-primary" id="clear">
                    重置
                </button>
                <button type="submit" class="hopeui-btn">
                    提交表单
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    import {
        utils
    } from "../../../utils/utils.js";
    import Mixins from "./Mixins.js";

    export default {
        name: Mixins.name,
        data() {
            return {
                isHover: false,
            };
        },
        props: {
            ele: [Array, Object],
        },
        computed: {
            ignoreEle: function () {
                return "ignoreEle";
            },
        },
        methods: {
            choose() {
                this.$emit("choose", this.ele);
            },
        },
        mounted() {
           this.$nextTick(() => {
                var fm = hope.form({
                    ele: "#form",
                    on: {
                        submit: function (e) {
                            console.log(e);
                        },
                    },
                    controls: {
                        selector: {
                            on: {
                                change: function (e) {
                                    console.log(e);
                                },
                                toggle: function (e) {
                                    console.log(e);
                                },
                            },
                        },
                        checkbox: {
                            on: {
                                change: function (e) {
                                    console.log(e);
                                },
                            },
                        },
                        radio: {
                            on: {
                                change: function (e) {
                                    console.log(e);
                                },
                            },
                        },
                        input: {
                            on: {
                                blur: function (e) {
                                    console.log(e);
                                },
                                focus: function (e) {
                                    console.log(e);
                                },
                                input: function (e) {
                                    console.log(e);
                                },
                            },
                        },
                        textarea: {
                            on: {
                                blur: function (e) {
                                    console.log(e);
                                },
                                focus: function (e) {
                                    console.log(e);
                                },
                                input: function (e) {
                                    console.log(e);
                                },
                            },
                        },
                    },
                    verify: {
                        //[name]:fn
                        city: function (value) {
                            if (value.length <= 0) {
                                return "请选择一个选项";
                            }
                        },
                        text: function (value) {
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
                        school: function (value) {
                            if (value.length <= 0) {
                                return "请选择一个选项";
                            }
                        },
                        password: function (value) {
                            if (value.length <= 0) {
                                return "文本不能为空";
                            }
                            if (value.length < 6) {
                                return "密码至少输入6个字符";
                            }
                        },
                        task: function (value) {
                            if (value.length <= 0) {
                                return "需要选择至少一个选项";
                            }
                        },
                        subject: function (value) {
                            if (value.length <= 0) {
                                return "需要选择至少一个选项";
                            }
                        },
                        radio: function (value) {
                            if (value.length <= 0) {
                                return "需要选择至少一个选项";
                            }
                        },
                        textarea: function (value) {
                            if (value.length <= 0) {
                                return "需要选择至少一个选项";
                            }
                        },
                    },
                });

                document.querySelector("#set").onclick = function () {
                    fm.val({
                        city: {
                            type: "selector",
                            value: "南京",
                        },
                        school: {
                            type: "selector",
                            value: "清华大学",
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


                document.querySelector("#clear").onclick = function () {
                    fm.clear();
                };
           })
               
        
        },
    };
</script>