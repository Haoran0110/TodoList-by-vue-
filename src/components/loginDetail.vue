<template>
<div>
    <div class="link">  
        <router-link to="/TodoItem">clickme</router-link>
    </div>
    <div class="content">
        <router-view :key="key"></router-view>
    </div>
</div>
</template>

<script>

export default {
    data(){
        return{
            routerAlive:true
        }
    },
    props:['content','index'],
    // computed:{
    //     fullcontent(){
    //         return '用户名'+this.content+'密码'+this.content
    //     }
    // }
        computed:{
	    key(){
	        return this.$route.path + Math.random();
	        }
	    },
}
</script>


<style scoped>
    .mt{
        color: rgb(85, 85, 192);
    }
</style>