<template>
    <div>
        <label>
            ID:
            <input class="id" type="text" v-model="id"/>
        </label>
        <label>
            Name:
            <input class="name" type="text" v-model="name"/>
        </label>
        <input class="add" type="button" value="添加" @click="handleAdd">
        <transition-group name="my" appear>
            <li v-for="(item,i) of list" 
                :key="item.id"
                @click="handleDel(i)">
                {{item.id}} --- {{item.name}}
            </li>
        </transition-group>
    </div>
</template>

<script>

export default {
    data(){
        return{
            id:'',
            name:'',
            list:[
                {id:1,name:'Jack'},
                {id:2,name:'Tom'},
                {id:3,name:'Mike'},
                ]
        }
    },
    methods:{
        handleAdd(){
            this.list.push({id:this.id,name:this.name})
            this.id = this.name =''
        },
        handleDel(i){
            this.list.splice(i,1)
        }
    }
}
</script>

<style>
        li {
            border: 1px dashed #999;
            margin: 5px;
            line-height: 35px;
            padding-left: 5px;
            font-size: 12px;
            width: 100%;
        }
        li:hover {
            background-color: rgba(184, 25, 25, 0.788);
            transition: all 0.8s ease;  /*鼠标悬停时，出现背景色。让这个背景色的出现，也加一个淡入的动画*/
        }
 
        .my-enter,     /*      当有多个transition标签存在时候，用name属性来替换样式中的v-     */
        .my-leave-to {
            opacity: 0;
            transform: translateY(80px);
        }
 
        .my-enter-active,
        .my-leave-active {
            transition: all 0.6s ease;
            position: absolute;    /* 删除时拥有淡出的样式 */
        }

        .my-move {   /* 删除时拥有淡出的样式 */
            position: absolute;
            transition: all 0.6s ease;
        }
        .add {
            background-color:rgba(184, 25, 25, 0.788);
            border-radius: 2px;
            color: white;
            height: 20px;
            width: 50px
        }
        .id {
            border-radius: 5px
        }
        .name {
            border-radius: 5px
        }
 
</style>
