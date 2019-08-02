<template>
    <div>
        <button-counter :count="count"> </button-counter>   <!-- 加了:count="count"可以正常运行，不过每次点击都有警告-->
    </div>
</template>

<script>
    import ButtonCount from './components/ButtonCount'
    export default({
        components:{
            'button-counter':ButtonCount
        }, 
        data (){
            return {
                count:0
            }
        }
        })
</script>