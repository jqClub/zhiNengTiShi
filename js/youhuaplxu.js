// 优化排序
var reg = /[a-zA-Z]/;
// 按长度排序
var paixu = function(a, b){
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
  return a.length - b.length;
}

// 匹配英文
var pipE = function(result) {
    log('in pipE', result)
    var r = []
    // 遍历数组，如果原来的result数组中，包含有英文，就push到新的数组中去
    for (var i = 0; i < result.length; i++) {
        // log(a)
        var a = result[i]
        // log('in a', a)
        if(a.match(reg)) {
            log('in match')
            r.push(a)
        }
    }
    // 排序,将符合条件的按,长度排序
    r.sort(paixu)
    // log(r)
    // 拼接旧的数组和剩下的一部分数组
    r = pinjie(result, r)
    // 返回拼接后的结果
    log(r)
    return r
}
// 获取去除英文的数组
var shengxia = function(result, arr2) {
    var r = []
    // 遍历原来的数组，将不包含英文的字符串（）都push到新数组中去
    for (var i = 0; i < result.length; i++) {
        var a = result[i]
        if(arr2.indexOf(a) == -1) {
            r.push(a)
        }
    }
    // 排序,将符合条件的按,长度排序
    r.sort(paixu)
    return r
}
// 将带英文的字符串数组 和 带中文数组拼接起来
var pinjie = function(result, arr2) {
    // log('in shengxia1', result, arr2)
    var sheng = shengxia(result, arr2)
    // 遍历数组，将剩下的不包含英文的字符串，都push到arr2数组中去
    for (var i = 0; i < sheng.length; i++) {
        var b = sheng[i]
        arr2.push(b)
    }
    // log('in arr2', arr2)
    return arr2
}

// 优化排序
var youhuw = function(src, result) {
    // log(src, result)
    var r = result
    // 正则匹配，是否含有英文
    if(src.match(reg)) {
        // 发生英文词匹配的结果更靠前, 如果匹配到的pos相同,则短的词语靠前
        r = pipE(result)
    } else {
        // 排序,将符合条件的按,长度排序
        r.sort(paixu)
    }
    return r
}
