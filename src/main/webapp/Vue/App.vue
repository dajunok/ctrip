<template>
    <h1>welcome Vue</h1>
    <h2 @click="change">{{msg}}</h2>
    <my-menu></my-menu>　　<!-- 引用的其他组件，然后在html中运用 -->
</template>
<script>
    import Menu from './components/Menu.vue'　　//在此引入其他子组件

    export default{　　// 这个导出的模块和vue中的component的方式一模一样，这里面可以直接给数据data，定义方法methods等等
        data(){
            return {
                msg:'welcome Vue ^_^'
            }
        },
        methods:{
            change(){
                this.msg='wahaha'
            }
        },
        components:{
            'my-menu':Menu　　//引入其他子组件，在此定义赋值
        }    
    }
</script>
<style>
    body{
        background: #ccc
    }
</style>