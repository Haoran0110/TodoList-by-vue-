<template>
    <button @click="CountAdd">you click me{{count}}times</button>
</template>


<script>
export default {
    props:['count'],
    methods:{
         countAdd(){
             this.count++
         }
    }
}

</script>
