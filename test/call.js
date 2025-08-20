/**
 * 
 * @param {*} context  改变后this的指向
 * @param  {...any} args 
 * @returns 
 */
Function.prototype.myCall = function (context, ...args) {
    context = context || window;
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}