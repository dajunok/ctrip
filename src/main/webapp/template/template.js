/**
 * 
 */
var data = [
    {
        name: 'xxx',
        age: 10
    },
    {
        name: 'zzz',
        age: 12
    },
    {
        name: 'yyy',
        age: 9
    }
];

var $container = $('#container');//容器
var source = $('#template-user').html();//获取到html结构
var template = Handlebars.compile(source);//编译成模板
var html = template(data);//生成完成的html结构
$container.html(html);//插入dom

