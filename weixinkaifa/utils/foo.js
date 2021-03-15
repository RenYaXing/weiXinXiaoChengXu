function say(msg){
    console.log("hello" + msg)
}
// 导出say方法
module.exports = {
    say:say
}
// 不支持export.say方法的导出