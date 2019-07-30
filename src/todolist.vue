<template>
  <div>
    <div>
      <input v-model="inputValue"/>
      <button @click="handleSubmit">Submit</button>
    </div>
    <ul>
      <todo-item 
      v-for="(item,index) of list"
      :key="index"    
      :content="item"
      :index="index"
      @delete="handleDelete"   
      ></todo-item>    <!--   父组件在创建子组件的时候监听这个方法，把handleDelete定义在父组件的方法中   -->
    </ul>
  </div>
</template>

<script>
  import TodoItem from './components/TodoItem';   //在components里面定义新的组件
  export default{
    components :{
      'todo-item':TodoItem  //把局部组件注册到了我的组件之中
    },
    data (){     //在vue的脚手架里面data变成一个函数，它的返回值是一个个数据   ES6的语法中可以直接简写成括号，不需要写function
      return{
          inputValue:'',
          list:[]
      }
    },
    methods:{
      handleSubmit (){
        this.list.push(this.inputValue)
        this.inputValue = ''
      },
      handleDelete (index){
        this.list.splice(index,1)   //splice(len,x)函数：删除起始下标为len，长度为x的值
      }
    }
  }
</script>

<style>

</style>
