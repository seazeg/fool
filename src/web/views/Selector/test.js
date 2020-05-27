// import Vue from 'vue';
// export default {
//     newTag (tagText) {
//         // 创建组件逻辑
//         let TagClass = Vue.extend({
//             // 向界面渲染的dom方法。
//             render (h) {
//                 return (
//                     <div> {this.text}
//                     <input value={this.text} onInput={this.input} onClick={this.onCloseClick}></input>
//                     </div>
//                   )
//             },
//             methods: {
//                 onCloseClick () {
//                     // 移除dom
//                     // this.$el.remove();
//                     console.log(this.text)
//                     // 然后将删除标签事件暴露除去
//                     this.$emit("delete", this.text);
//                 }, 
//                 input(e){
//                     this.text=e.target.value
//                   }
//             },
//             data () {
//                 return {
//                     text: tagText, // 为这个tag标签使用的文字是传入的标签文字内容
//                 }
//             }
//         });
//         return new TagClass();
//     },
//     // 模拟从网络获取tag数据。
//     getTagsFromNet () {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 let tags = [];
//                 for (let i = 0; i < 6; i++) {
//                     tags.push("标签" + i);
//                 }
//                 resolve({
//                     code: 200,
//                     data: tags,
//                     msg: 'success'
//                 });
//             }, 2000);
//         });
//     }
// }