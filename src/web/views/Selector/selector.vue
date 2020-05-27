<template>
    <div>
        <h3>标签管理</h3>
        <!-- 放置tag的容器，从网络获取的tags都要放在这个div里面 -->
        <div ref="tagsContext">
            <!-- <div v-if="!tags">标签加载中...</div>
            <div v-else-if="tags && tags.length === 0">没有标签</div> -->
        </div>
        <component :is="item.name" v-for="(item,i) in cps" :opt="item.id" @get="get(item)" style="pointer:cursor" :key="i"></component>
        <!-- <button @click="addTag">添加标签</button> -->
        <button @click="addcomponent">添加component</button>
    </div>
</template>
<script>
    import Util from './test.js';
    export default {
        name: 'app',
        components: {},
        // created() {
        //     // 从网络加载tag数据.
        //     Util.getTagsFromNet()
        //         .then(result => {
        //             if (result.code !== 200) {
        //                 return Promise.reject(new Error(result.message));
        //             }
        //             // 数据加载成功，将数据赋值给 tags 即可。
        //             this.tags = result.data;
        //             // 拿到了数据，进行渲染：
        //             for (let i = 0; i < this.tags.length; i++) {
        //                 this.initTagComponentAndShowTag(this.tags[i]);
        //             }
        //         })
        //         .catch(error => {
        //             window.alert(error.message);
        //         })
        // },
        methods: {
            // 添加tag
            addTag() {
                let tagText = "标签" + this.tags.length;
                // this.tags.push(tagText);
                this.initTagComponentAndShowTag(tagText);
            },
            // 有tag被删除
            onTagDelete(tag) {
                // 从数组中移除。
                this.tags.splice(this.tags.indexOf(tag), 1);
            },
            // 初始化一个tag组件并且显示到界面上。
            initTagComponentAndShowTag(tagText) {
                let tag = Util.newTag(tagText);
                // 添加删除监听
                tag.$on("delete", this.onTagDelete);
                // 挂载组件，即创建虚拟dom。
                tag.$mount();
                // 将组件添加到显示tag的div里面
                this.$refs.tagsContext.appendChild(tag.$el);
            },
            addcomponent() {
                this.cps.push({
                    name: 'test',
                    id: Math.random()
                })
            },
            get(e){
                console.log(e);
            }
        },
        data() {
            return {
                tags: [], // 初始化是没有 tag数据的，在页面打开后，通过网络请求获取标签。
                cps: []
            }
        }
    }
</script>
<style scoped></style>