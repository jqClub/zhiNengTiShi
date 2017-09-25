// 显示在页面中（将匹配的数组结果，显示在页面中）
var xmui = function(src, result) {
    var res = []
    var len = result.length
    // log('len', len)
    // 如果数组为空，说明未匹配到；
    // 反之匹配到的话，就把对应的值push到数组中
    if(result.length == 0) {
        res = []
    } else {
        for (var i = 0; i < result.length; i++) {
            var a = result[i]
            var b = FriendNicknameList[a]
            res.push(b)
        }
    }
    // log('in xmui', src, res)
    // 优化匹配规则
    res = youhuw(src, res)
    // return res
    // 显示在页面中
    showPage(src, res)
    // 点击标签，将内容显示在输入框内
    clickxmui(res)
}
// 高亮显示代码
var light = function(src, res) {
    var result = []
    // 遍历数组,在将匹配的值,转成模板字符串
    for (var i = 0; i < res.length; i++) {
        var di = res[i]
        t = di.replace(src, `<span class='lightHeight'>${src}</span>`)
        result.push(t)
    }
    // 返回结果
    return result
}

// 显示在页面上
var showPage = function(src, res) {
    // 得到模板字符串
    res1 = light(src, res)
    var html = ''
    var father = e('.show')
    var todo = father.parentElement
    todo.classList.add('showPage1')
    var len = res1.length
    // 如果没有匹配到值,不显示下面的框;
    // 反正通过模板函数,去向页面添加数据
    if(len == 0) {
        todo.classList.remove('showPage1')
        // alert('没有匹配')
        return
    } else {
        // 遍历数组
        for (var i = 0; i < len; i++) {
            var t = res1[i]
            html += templateTodo(t, i, res)
        }
        // 添加
        father.insertAdjacentHTML('beforeend', html)
        // 显示在页面上
    }
}
// 生成模板字符串
var templateTodo = function(t, i, res) {
    var sousuo = `https://www.baidu.com/s?ie={inputEncoding}&wd=${res[i]}`
    var t = `<li class='liBtn' data-id = ${i}><a href="${sousuo}" target="_blank">${t}</a></li>`
    return t
}
// 点击li标签的时候，将内容显示在输入框内
var clickxmui = function(res) {
    // log('in clickxmui')
    var showBtn = e('.show')
    var inputValue = e('.inputValue')
    // log(showBtn, inputValue)
    // 给父元素绑定点击事件
    showBtn.addEventListener('click', function(event) {
        // log('in click')
        var self = event.target
        var liBtn = self.closest('.liBtn')
        var todo = liBtn.closest('.prompt')
        var index = liBtn.dataset.id
        // log(liBtn, index)
        inputValue.value = res[index]
        // 清空下面的选项内容，并且不显示列表页面
        showBtn.innerHTML = ""
        todo.classList.remove('showPage1')
    })
}
