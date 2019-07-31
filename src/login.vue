<template>
    <div>
        <div class="userName">
            <input v-model="inputValue_one" placeholder="请输入用户名"/>    
        </div>
        <div class="password">
            <input v-model="inputValue_two" placeholder="请输入密码"/>
        </div>
            <button class="btn" @click="handleSubmit">Submit</button>
        <ul>
            <login-detail 
            v-for="(item,index) of list"
            :key="index"
            :content="item"
            ></login-detail>
        </ul>
    </div>
</template>

<script>
import loginDetail from './components/loginDetail.vue';
export default {
    components:{
        'login-detail':loginDetail
    },
    data (){
        return {
            inputValue_one:'',
            inputValue_two:'',
            list:[]
        } 
    },
    methods:{
        handleSubmit(){
            this.list.push(this.inputValue_one)
            this.inputValue_one=''
            this.list.push(this.inputValue_two)
            this.inputValue_two=''
        }
    }
}
</script>
