<template>
<div>
    <div class="simplecheck">
        <h3>1.单选框</h3>
        <input type="checkbox" id="checkbox" v-model="check" />
        <label for="checkbox">{{check}}</label>   <!--  checkbox如果没有value值，自动将数据定义成布尔类型-->
    </div>
    <br>

    <div class="checkednames">
        <h3>2.复选框</h3>
        <input type="checkbox" id="wendy" value="Wendy" v-model="checkedNames"/>
        <label for="checkbox">Wendy</label>
        <input type="checkbox" id="claire" value="Claire" v-model="checkedNames"/>
        <label for="checkbox">Claire</label>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"/>
        <label for="checkbox">Jack</label>
        <br>
        <span>参加的同学有:{{checkedNames}}</span>
    </div>
    <br>

    <div>
        <h3>3.单选按钮</h3>
        <input type="radio" id="big" value="Big" v-model="picked"/>
        <label for="big">Big</label>
        <input type="radio" id="small" value="Small" v-model="picked"/>   <!-- radio：单选按钮-->
        <label for="small">Small</label>
        <br>
        <span>选择的是：{{picked}}</span>
    </div>
    <br>

    <div>
        <h3>4.选择器</h3>
        <select v-model="selected" multiple style="width:50px">    <!--  没加multiple style的时候就是下拉的形式选择-->
            <option disabled value=""></option>
            <option>apple</option>
            <option>banana</option>
            <option>pineapple</option>
        </select>
        <span>选择的是：{{selected}}</span>
    </div>
</div>
</template>

<script>
export default {
    
    data (){
        return{
            check:'false',
            checkedNames:[''],
            picked:'',
            selected:''

        }
    },
}
</script>

