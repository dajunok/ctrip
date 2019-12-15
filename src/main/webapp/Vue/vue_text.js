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

//--------------------------------------------<!-- 将原生事件绑定到组件 -->
// 注册组件
// 因为base-input的外层是一个label元素，所以默认情况下使用v-on:focus是无效的，所以需要配合$listeners使用，该属性可以把事件的监听指向组件中某个特定的元素
// 注意：如果父级的事件添加了.native修饰符，在$listeners中不会体现出来的
/**名词解释
inheritAttrs：默认值true,继承所有的父组件属性（除props的特定绑定）作为普通的HTML特性应用在子组件的根元素上，如果你不希望组件的根元素继承特性设置inheritAttrs: false,但是class属性会继承（简单的说，inheritAttrs：true 继承除props之外的所有属性；inheritAttrs：false 只继承class属性）
$attrs--继承所有的父组件属性（除了prop传递的属性、class 和 style ），一般用在子组件的子元素上，如第一个例子的<input v-bind="$attrs"/>
$listeners--属性，它是一个对象，里面包含了作用在这个组件上的所有监听器，你就可以配合 v-on="$listeners" 将所有的事件监听器指向这个组件的某个特定的子元素。（相当于子组件继承父组件的事件）
**/
Vue.component('base-input',{
	inheritAttrs: false,
	props: ['label','value'],
	template: `
		<label id="base-label">\
			{{label}}\
			<input v-bind:value="value" v-bind="$attrs" v-on="inputListeners"/>
		</label>
	`,
	data: function() {
		return {
			
		}
	},
	computed: {
		inputListeners () {
			var vm = this
			return Object.assign({},
				this.$listeners,      //"$listeners" 将所有的事件监听器指向这个组件的某个特定的子元素。
				{
					input: function () {
						vm.$emit('input', event.target.value)
					},
					focus: function (event) {
						vm.$emit('focus', '哈哈哈，onfocus了')
					}
				}
			)
		}
	},
	mounted: function(){
		console.log(`$attrs:`)
		console.log(this.$attrs)
		console.log(`$listeners:`)
		console.log(this.$listeners) // 父级添加的所有属性都在这里
	},
	methods: {
		
	}
})
new Vue({
	el: '#app-23',
	data: {
		username: ''
	},
	created: function(){
	
	},
	beforeUpdate: function(){
	
	},
	computed: {
		
	},
	beforeUpdate: function () {
		console.log(this.username)
	},
	methods: {
		handleBaseInputFocus: function(ev){
			console.log(ev)
		},
		handleBaseInputClick: function(ev){
			console.log(ev.type)
		}
	}
})

//--------------------------<!-- 通过插槽分发内容 -->
//1、单个插槽slot
Vue.component("single-slot",{
           // 插槽允许有默认内容
           template:
               `<div>
                    <strong>Error!</strong>
                    <slot></slot>
                </div>
               `,
            data:function () {
                return {
                    name:"perry"
                }
            }
        });
//2、具名插槽slot
Vue.component("slot-name",{
           template:
               `<div>
                      <header>
                            <slot name="header"></slot>
                      </header>
                     <main>
                        <slot ></slot>
                     </main>
                     <footer>
                        <slot name="footer"></slot>
                     </footer>
 
                </div>
               `
});
//3、作用域slot，作用域插槽在解决需要动态生成字符串模板时非常有用，特别针对控件编写者
Vue.component("datagrid",{
            props:{
                data:null
            },
            template:`
               <table>
                    <thead>
                        <slot name="headslot"></slot>
                    </thead>
                    <tbody>
                        <tr  v-for="item in data">
                            <slot name="bodyslot" :item="item">{{item.text}</slot>
                        </tr>
                   </tbody>
               </table>
           `
});

new Vue({
        el:'#test-slot',
        data:{
			name:"500 error",
			todos:[
				{text:"A",id:1,isTrue:true},
				{text:"B",id:2,isTrue:true},
				{text:"C",id:3,isTrue:false},
				{text:"D",id:4,isTrue:true},
			]
		}
});

//--------------------------<!-- 动态切换组件 --> -------------------------------------------
Vue.component('tab-posts', {
	data: function () {
		return {
			posts: [
				{
					id: 1,
					title: '赶在618前夕，微信更新了两个支付与电商功能',
					content: '本周末，中国消费者即将迎来上半年最大的消费网购峰值，6月17日父亲节，6月18日端午节，也是京东、天猫等电商的618购物节。略微出人意料但又在情理之中的是，中国最大的社交平台微信，近日密集上线了两个与支付和电商相关的功能。'        
				},
				{
					id: 2, 
					title: '腾讯要花32亿收购《绝地求生》开发商10%股份',
					content: '目前腾讯和蓝洞已经接近达成协议，如果交易成功，腾讯将成为蓝洞的第二大股东。'
				},
				{
					id: 3,
					title: '这两个地球之眼是真的吗？形成原因至今仍是谜团',
					content: '一名俄罗斯男子乘坐直升机游览时，经过俄罗斯萨哈林岛（库页岛）时，看到一个巨大的坑洞。地球上坑坑洞洞很多，本该不用大惊小怪。但当飞机离得更近，换了个角度看这个坑时，他震惊了，这分明就是“地球的眼睛”。'
				}
			],
			selectedPost: null
		}
	},  
	template: `
		<div class="posts-tab">
			<ul class="posts-sidebar">
				<li
					v-for="post in posts"
					v-bind:key="post.id"
					v-bind:class="{selected:post === selectedPost}"
					v-on:click="selectedPost = post">
					{{ post.title }}
				</li>
			</ul>
			<div class="selected-post-container">
				<div
					v-if="selectedPost"
					class="selected-post">
					<h3>{{ selectedPost.title }}</h3>
					<div v-html="selectedPost.content"></div>
				</div>
				<strong v-else>
					请点击某个标签页
				</strong>
			</div>
		</div>  
	`
});

Vue.component('tab-archive', {
	template: '<div>archive 页面</div>'
});

let dynamic=new Vue({
	el: '#dynamic-component-demo',
	data: {    
				currentTab: 'Posts',
				tabs: ['Posts', 'Archive']
	},
	computed: {
		currentTabComponent: function () {
			return 'tab-' + this.currentTab.toLowerCase();
		}
	}
});

//--------------------<!------------------路由----------->--------------------------------
// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const myroutes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes:myroutes 
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const myapp = new Vue({
  router
}).$mount('#app-24')

//----------------<!------------------依赖注入provide 和 inject----------->
// 父级组件提供 'foo'
var Provider = {
  provide: {
    foo: 'bar'
  },
  // ...
}

























