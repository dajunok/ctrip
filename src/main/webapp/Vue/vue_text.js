var app = new Vue({
  el: '#app',
  data: {
	message: 'Hello Vue!'
  }
})

var app2 = new Vue({
	  el: '#app-2',
	  data: {
		message: '页面加载于 ' + new Date().toLocaleString()
	  }
})
var app3 = new Vue({
	  el: '#app-3',
	  data: {
		seen: true
	  }
}) 

var app4 = new Vue({
  el: '#app-4',
  data: {
	todos: [
	  { text: '学习 JavaScript' },
	  { text: '学习 Vue' },
	  { text: '整个牛项目' }
	]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})


/*Vue.js组件使用*/
Vue.component('todo-item',{
	props:['todo'],
	template:'<ol><li>{{todo.text}}</li></ol>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
});

var obj={
	foo:'bar'
}

Object.freeze(obj);   //冻结对象obj,对象被冻结后属性就不能被修改了。

new Vue({
	el:'#app-8',
	data:obj
});

new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})

var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    },
	now: function () {
		return Date.now()
	}
  },
  methods: {
	mNow:function () {
		return Date.now()
	}
  }
})


//<!--计算属性 vs 侦听属性-->
/* var vm_1 = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
}) */
var vm_2 =new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
    // getter
    get: function () {
		  return this.firstName + ' ' + this.lastName
	},
		// setter
	set: function (newValue) {
		  var names = newValue.split(' ')
		  this.firstName = names[0]
		  this.lastName = names[names.length - 1]
		}
	}
  }
})


//	----------------------------------<!--侦听器-->
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})


var app9 = new Vue({
  el: '#app-9',
  data: {
	  isActive: true,
	  hasError: true,
	  classObject: {
		active: true,
		'text-danger': false
	  }
  }
})
//----------------<!--绑定内联样式-->
var app10 = new Vue({
  el: '#app-10',
  data: {
	activeColor: 'red',
	fontSize: 30
  }
});

var app11 = new Vue({
  el: '#app-11',
  data: {
	styleObject:{
		color: 'green',
		fontSize:'30px'
	}
  }
});

var app12 = new Vue({
  el: '#app-12',
  data: {
	baseStyles:{
		color: 'white',
		fontSize:'30px'
	},
	overridingStyles:{
		width:'150px',
		height:'50px',
		background:'red'
	}
	
  }
});
//----------<!--条件渲染-->
new Vue({
	el:'h1',
	data:{
		awesome:true
	}
})

new Vue({
	el:'#app-14'
});

//<!--v-if使用的时候key值的用法-->
var vm_15=new Vue({
　　el:'#root',
　　data:{
　　　show:true
　　}
});

let vm_16=new Vue({			//与var关键字类似，用于声明变量，但它们之间有区别
	el:"#app-16"
});

var vm_17=new Vue({			//与var关键字类似，用于声明变量，但它们之间有区别
	el:"#v-17",
	data: {
		items: [
		  { message: 'Foo' },
		  { message: 'Bar' }
		]
  }
});


//<!-- 显示过滤/排序后的结果 -->
let vm_18=new Vue({
	el:"#app-18",
	data: {  numbers: [ 1, 2, 3, 4, 5 ]},
	computed: {
	  evenNumbers: function () {
		return this.numbers.filter(function (number) {
		  return number % 2 === 0
		})
	  }
	}	
});


Vue.component('todo-item2', {   //创建组件todo-item2
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
});
new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
});

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
});

let vue_19=new Vue({
	el:"#app-19",
	data:{
		meth:""
	
	},
	methods:{
		fun:function(){	this.meth="我是一个函数";}
	}
	
})
// <!-- 表单输入绑定(双向数据绑定) -->
new Vue({
	el:"#app-20",
	data:{
		message:"数据双向绑定",
		checked:false,
		disable:false,
		checkedNames:[],
		picked:'',
		selected: '',
		options: [
		  { text: 'One', value: 'A' },
		  { text: 'Two', value: 'B' },
		  { text: 'Three', value: 'C' }
		],
		selected2: 'A',
	}
})
//-------<!-- 表单修饰符 -->
new Vue({
	el: '#app-21',
	data: {
		message:'测试',
		num:123456,
		str:''
	}
});
//-----------组件基础
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {		//	对于组件data 必须是一个函数，这样的好处就是每个实例可以维护一份被返回对象的独立的拷贝，如果 data 是一个对象则会影响到其他实例
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({
	el:"#components-demo",
	methods:{
		handleClick:function(){
　　　　　　alert("OK");
　　　　}
	}
})
//通过 Prop 向子组件传递数据
Vue.component('blog-post',{     	//定义全局组件
	props:['title','content'],
	template:'<h3>{{ title }}   {{content}}</h3>'
})
new Vue({
	el:"#post"
})


//<!-- 监听子组件事件 ：子组件可以通过调用内建的 $emit 方法 并传入事件名称来触发一个事件-->
Vue.component('blog-event', {
  props: ['post'],
  template: `
    <div class="blog-event">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text',0.1,'第2个参数')">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      { id: 1, title: '纳粹元首',content:"内容1"},
      { id: 2, title: '我的奋斗',content:"内容2" },
      { id: 3, title: '希特勒',content:"内容3" }
    ],
	postFontSize:1
  },
  methods: {
  onEnlargeText: function (enlargeAmount,arg2) {
    this.postFontSize += enlargeAmount;
	console.log(arg2);
  }
}

})
//<!--在组件上使用 v-model  -->
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
new Vue({
	el:'#app-22',
	data:{
		searchText:'输入文本'
	}
})








































