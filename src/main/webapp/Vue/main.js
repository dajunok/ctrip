import Vue from 'vue'     //引入之后就可以直接new Vue({ })使用了
import App from './App.vue'　　//引入主组件
    
new Vue({
　　el:'body',
　　components:{
　　　　app:App //App是上面import引入的App；app是自定义的名字，返给html中运用的组件标签
　　}
});