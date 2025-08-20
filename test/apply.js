/**
 * 改变this 指向 并执行函数 并返回结果
 * @param {*} context  改变后this的指向
 * @param {*} arr     数组
 * @returns 
 */
const zs = {
    name: '张三',
    // 此处使用箭头函数 函数内部的this 会指向全局对象
    getName: function (age) {
        return this.name + "," + age;
    }
}
const ls = {
    name: '李四',
    // 此处使用箭头函数 函数内部的this 会指向全局对象
    getName: function (age) {
        return this.name + "," + age;
    }
}

Function.prototype.maApply = function (context, arr) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    /**
     * Math.max.maApply(null, [1, 2, 3]) 说明 Math.max 方法里没有使用 this 关键字 所以 context 无论传入什么都不会影响方法的执行结果
     * zs.get 方法里使用了 this 关键字 所以 context 会影响方法的执行结果
     */
    context = context || globalThis;
    context.fn = this;
    let result;
    if (!arr) {
        result = context.fn();
    } else {
        result = context.fn(...arr);
    }
    delete context.fn;
    return result;
};
console.log(zs.getName.maApply(ls, [18]));
console.log(Math.max.maApply(null, [1, 2, 3]));