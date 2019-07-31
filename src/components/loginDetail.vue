<template>
<div>
    <div>
        <li class="mt" @click="handleClear">{{content}}</li>
    </div>
    <button @click="handleJump">点我跳转</button>
</div>

</template>

<script>


export default {
    props:['content','index'],
    // computed:{
    //     fullcontent(){
    //         return '用户名'+this.content+'密码'+this.content
    //     }
    // }
    methods:{
        handleClear(){
            this.content=''
        },
        handleJump(){
            this.$router.push('./TodoItem')
        }
    }
    }
</script>

<style scoped>
    .mt{
        color: rgb(85, 85, 192);
    }
</style>

