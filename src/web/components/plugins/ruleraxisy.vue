<!--
 * @Author       : Evan.G
 * @Date         : 2021-03-15 09:35:35
 * @LastEditTime : 2021-03-24 10:05:28
 * @Description  : 
-->

<template>
    <div>
        <div class="ruleraxisx">
            <ul class="scalex">
                <li>0</li>
                <li v-for="(item, i) in number">{{ item }}</li>
            </ul>
            <i class="mark" v-if="selectedControl.zoomParams" :style="{ left: selectedControl.zoomParams.x + 'px' }"></i>
        </div>
        <div class="ruleraxisy">
            <ul class="scaley">
                <li></li>
                <li v-for="(item, i) in number">{{ item }}</li>
            </ul>
            <i class="mark" v-if="selectedControl.zoomParams" :style="{ top: selectedControl.zoomParams.y + 'px' }"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "ruleraxisy",
    computed: {
        number() {
            let arr = [];
            for (let i = 50; i <= 2200; i = i + 50) {
                arr.push(i);
            }
            return arr;
        },
        selectedControl() {
            return this.$store.state.selected;
        },
    },
};
</script>

<style scoped>
.ruleraxisx {
    position: absolute;
    background-color: #464646;
    background-size: 50px 20px;
    background-image: linear-gradient(
            90deg,
            #696969 0,
            #696969 2%,
            transparent 2%
        ),
        linear-gradient(180deg, #464646 50%, transparent 50%),
        linear-gradient(
            90deg,
            transparent 50%,
            #696969 50%,
            #696969 52%,
            transparent 52%
        ),
        linear-gradient(180deg, #464646 70%, transparent 70%),
        linear-gradient(
            90deg,
            transparent 10%,
            #696969 10%,
            #696969 12%,
            transparent 12%,
            transparent 20%,
            #696969 20%,
            #696969 22%,
            transparent 22%,
            transparent 30%,
            #696969 30%,
            #696969 32%,
            transparent 32%,
            transparent 40%,
            #696969 40%,
            #696969 42%,
            transparent 42%,
            transparent 60%,
            #696969 60%,
            #696969 62%,
            transparent 62%,
            transparent 70%,
            #696969 70%,
            #696969 72%,
            transparent 72%,
            transparent 80%,
            #696969 80%,
            #696969 82%,
            transparent 82%,
            transparent 90%,
            #696969 90%,
            #696969 92%,
            transparent 92%
        );
    background-repeat: repeat-x;
    z-index: 100;
    width: 1800px;
    top: 5px;
    left: 24px;
    min-height: 20px;
}

.ruleraxisy {
    position: absolute;
    background-color: #464646;
    background-size: 20px 50px;
    background-image: linear-gradient(
            0deg,
            #696969 0,
            #696969 2%,
            transparent 2%
        ),
        linear-gradient(90deg, #464646 50%, transparent 50%),
        linear-gradient(
            0deg,
            transparent 50%,
            #696969 50%,
            #696969 52%,
            transparent 52%
        ),
        linear-gradient(90deg, #464646 70%, transparent 70%),
        linear-gradient(
            0deg,
            transparent 10%,
            #696969 10%,
            #696969 12%,
            transparent 12%,
            transparent 20%,
            #696969 20%,
            #696969 22%,
            transparent 22%,
            transparent 30%,
            #696969 30%,
            #696969 32%,
            transparent 32%,
            transparent 40%,
            #696969 40%,
            #696969 42%,
            transparent 42%,
            transparent 60%,
            #696969 60%,
            #696969 62%,
            transparent 62%,
            transparent 70%,
            #696969 70%,
            #696969 72%,
            transparent 72%,
            transparent 80%,
            #696969 80%,
            #696969 82%,
            transparent 82%,
            transparent 90%,
            #696969 90%,
            #696969 92%,
            transparent 92%
        );
    background-repeat: repeat-y;
    width: 20px;
    height: 5000px;
    left: 5px;
    top: 25px;
    min-height: 20px;
    border-right: 1px solid #d8d8d8;
}

.ruleraxisx .mark {
    background: #fff;
    display: inline-block;
    position: relative;
    z-index: 99;
    width: 1px;
    height: 15px;
}

.ruleraxisy .mark {
    background: #fff;
    display: block;
    position: relative;
    z-index: 99;
    width: 15px;
    height: 1px;
}

.scalex {
    list-style-type: none;
    position: absolute;
    left: -25px;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 20px;
    overflow: hidden;
    white-space: nowrap;
    color: #b1b4b4;
    font-size: 0;
    text-shadow: 0px 1px 1px #000;
    -moz-user-select: none;
    /*火狐*/
    -webkit-user-select: none;
    /*webkit浏览器*/
    -ms-user-select: none;
    /*IE10*/
    -khtml-user-select: none;
    /*早期浏览器*/
    user-select: none;
    z-index: 1;
}

.scalex li {
    display: inline-block;
    width: 50px;
    text-align: center;
    font-size: 11px;
}

.scaley {
    list-style-type: none;
    position: absolute;
    left: 0px;
    top: -25px;
    margin: 0;
    padding: 0;
    width: 50px;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    color: #b1b4b4;
    font-size: 0;
    text-shadow: 0px 1px 1px #000;
    -moz-user-select: none;
    /*火狐*/
    -webkit-user-select: none;
    /*webkit浏览器*/
    -ms-user-select: none;
    /*IE10*/
    -khtml-user-select: none;
    /*早期浏览器*/
    user-select: none;
    z-index: 1;
}

.scaley li {
    writing-mode: vertical-lr;
    height: 50px;
    text-align: center;
    font-size: 11px;
}
</style>
