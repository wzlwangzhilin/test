/**
 * 自定义实现的 bind 方法，用于创建一个新的函数，在调用时设置 this 关键字为提供的值，并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。
 * @param {Object} context - 调用函数时 this 所指向的对象
 * @param {...any} args - 预先传入的参数
 * @returns {Function} - 返回一个新的绑定函数
 */
Function.prototype.maBind = function (context, ...args) {
    // 检查调用 maBind 方法的对象是否为函数，如果不是则抛出类型错误
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    // 返回一个箭头函数，该函数会调用原始函数并将 this 指向 context，同时合并预先传入的参数和新传入的参数
    return (...args2) => {
        return this.apply(context, [...args, ...args2]);
    }
}