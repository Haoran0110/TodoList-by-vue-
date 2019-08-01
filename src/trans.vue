<template>
    <div id="app">
        <button @click="handleTran" class="btn">点我渐变</button>
        <transition name="fade">
            <p v-if="show" class="text">我是一段可以渐变消失的文字哦😀</p>
        </transition>
    </div>
</template>


<script>
import transDet from './components/transDet.vue'
export default {
    data(){
        return{
            show:true,
            content:'hello'
        }
    },
    methods:{
        handleTran(){
            this.show = !this.show
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
.btn{
    border-radius: 5px;
    background-color:skyblue;
    color: white;
    font-size: 20px;
    height: 50px;
    width: 200px;
}
.text{
    color: royalblue
}
</style>



