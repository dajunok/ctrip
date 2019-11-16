/**
 * 页面通用函数
 */

/*---------------------------------------------------------visibilitychange事件应用函数
浏览器标签页被隐藏或显示的时候会触发visibilitychange事件。
这个事件可以满足一些用户需求，比如标签页隐藏的时候停止播放音乐视频、停止一些不必要的轮询，还有停止一些诸如轮播等循环动画效果等等。这些可以节省服务器和本地的开销。
这个事件已经得到现代浏览器广泛的支持，不过一些老版本的浏览器需要加相应的前缀。

其中document.hidden是一个布尔值，简单的表示标签页显示或者隐藏。而document.visibilityState属性更为详细，目前有四个可能的值：
visible : 页面内容至少部分可见。这意味着在实际情况中，该网页是一个非最小化窗口的可见标签页。
hidden : 页面内容是对用户不可见。实际上，这意味着该文档是后台标签页或最小化窗口的一部分，或者系统锁屏是时的状态。
prerender : 网页内容被预渲染并且用户不可见。
unloaded : 如果文档被卸载，那么这个值将被返回。
一般情况下我们使用document.hidden就能满足通常的需求。


//下面的案例代码会在页面可见性发生变化时修改document.title的值。
// use the property name to generate the prefixed event name
var visProp = getHiddenProp();
if (visProp) {
    var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
    document.addEventListener(evtname, function () {
        document.title = document[getVisibilityState()]+"状态";
    },false);
}
*/

//获取document.hidden属性：
function getHiddenProp(){
    var prefixes = ['webkit','moz','ms','o'];
    
    // if 'hidden' is natively supported just return it
    if ('hidden' in document) return 'hidden';
    
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++){
        if ((prefixes[i] + 'Hidden') in document) 
            return prefixes[i] + 'Hidden';
    }
 
    // otherwise it's not supported
    return null;
}


//获取document.visibilityState属性：
function getVisibilityState() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];
    if ('visibilityState' in document) return 'visibilityState';
    for (var i = 0; i < prefixes.length; i++) {
        if ((prefixes[i] + 'VisibilityState') in document)
            return prefixes[i] + 'VisibilityState';
    }
    // otherwise it's not supported
    return null;
}

//跨浏览器函数，检查文档是否可见。
function isHidden(){
    var prop = getHiddenProp();
    if (!prop) return false;    
    return document[prop];
}

















