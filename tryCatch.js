
// 1. try catch 中的 return 语句不会影响finally 中的语句执行
// 2. finally 中的 return 语句会覆盖 try catch 中的 return 语句
function tryCatch() {
    try {
        throw new Error('这是一个普通错误');
    } catch (e) {
        console.log('报错了');
        return 'catch';
    } finally {
        console.log('finally');
        return 'finally'
    }
    console.log('执行了')
}
const a = tryCatch();
console.log(a);