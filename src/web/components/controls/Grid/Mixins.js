/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-08 15:43:24
 * @Description  :
 */
import styleSheet from "../../stylesheet/grid.json";
import { utils } from "../../../utils/utils.js";
import rightMenu from '../../plugins/contextMenu/menu.json'

export default {
    name: "hope_grid",
    label: "栅格",
    className: "hopeui-row",
    icon: "icon-35zhage",
    isCustom: true,
    isSelected: false,
    children: [],
    styleSheet: {...styleSheet},
};
