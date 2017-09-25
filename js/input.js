// 把 被匹配的名单 中的转换成 拼音字节字符串
var change = function() {
    // 用来存转换后的结果
    var result = []
    var len = FriendNicknameList.length
    // log(len)
    // 遍历数组，将转换的结果添加到新的数组中
    for (var i = 0; i < len; i++) {
        var spell = FriendNicknameList[i]
        var py = PY.convertPYs(spell)
        // log('转换后的结果', spell, py)
        result.push(py)
    }
    // log(result)
    return result
}
// 监听input事件
var shuru = function() {
    // 定时器的个数
    var index = 0
    var inputValue = e('.inputValue')
    inputValue.addEventListener('input', function(event) {
        // log(index)
        var src = inputValue.value
        // log('in input', `(${src})`)
        if(src !== ' ') {
            // 定时器的数量
            index++
            // log('index', index)
            qingchu(src, index)
            // // 匹配数组
            // match(src)
        }
    })
}

// 清除上一个定时器，并开启一个新的函数去查询
var qingchu = function(src, index) {
    // log(index)
    // 清除上一个定时器，并设置新的定时器
    if(index !== 1) {
        // log('进入了index')
        // 清除上一个定时器，并设置新的定时器
        clearInterval(index -1)
    }
    // 设置延时函数
    yanshi(src)
}
//延时执行匹配函数
var yanshi = function(src) {
    setTimeout(function() {
        // 匹配数组
        match(src)
    }, 1000)
}

//匹配函数（将输入的值和匹配名单进行 对比，并返回数组结果）
var match = function(src) {
    log('进入match了')
    var changeuuju = change()
    // 用来存结果
    var result = []
    //将数组转成全小写，可以匹配大小写
    src = src.toLowerCase()
    var len = FriendNicknameList.length
    // 遍历数组，将输入的值和给定的值进行对比匹配，并push到新数组中
    for (var i = 0; i < len; i++) {
        var r = FriendNicknameList[i].toLowerCase()
        var cpy = changeuuju[i][0].toLowerCase()
        var cpy1 = changeuuju[i][1].toLowerCase()
        // log('src, r, cpy, cpy1', src, r, cpy, cpy1)
        // log('in cpy.indexOf', cpy.indexOf(src), cpy1.indexOf(src), r.indexOf(src))
        if(cpy.indexOf(src) > -1 || cpy1.indexOf(src) > -1 || r.indexOf(src) > -1) {
            if(src == '') {
                log('进来了[]')
                result = []
            } else {
                log('进来了')
                result.push(i)
                // log(result, i)
            }
        }
    }
    // 匹配的时候，清空页面上的显示.然后添加新的数据进入
    var elem = e('.show')
    elem.innerHTML = ""
    // log(src, result)
    xmui(src, result)
}
// 搜索内容
var sbso = function() {
    var submit = e('.submit')
    submit.addEventListener('click', function(event) {
        var inputValue = e('.inputValue')
        var value = inputValue.value
        window.open(`https://www.baidu.com/s?ie={inputEncoding}&wd=${value}`)
    })
}
var __main = function() {
    shuru()
    sbso()
}
__main()
