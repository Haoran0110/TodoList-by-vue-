<template>
  <li class="item" @click="handleDelete">{{content}}</li>
</template>

<script>
export default {
  props:['content','index'],
  methods:{
    handleDelete (){
      this.$emit('delete',this.index)   //把从父组件接收的下标带回给子组件
     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>   /* 局部的样式，scoped这样一个标签不会影响全局的样式，只会影响该组件的样式  */
  .item{
    color: pink
  }
</style>
