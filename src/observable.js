/*
 * @Author: yuxue.yang
 * @Description: 响应式原理学习
 * @LastEditors: yuxue.yang
 * @Date: 2019-04-24 13:07:21
 * @LastEditTime: 2019-05-19 13:30:41
 */

// 简单的Vue
class Vue {
    constructor(options) {
        this._data = options.data;
        observe(this._data);
    }
}

// 将data对象上每个属性 进行响应式处理
function observe(value) {
    Object.keys(value).forEach((key) => defineReactive(value, key, value[key]))
}

// Object.defineProperty
function defineReactive (obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: () => {
            console.log('我被读了，我要不要做点什么好?');
            return val;
        },
        set: newVal => {
            val = newVal;
            console.log("有数据被改变了，我要渲染到页面上去!");
        }
    })
}

// // 渲染Dom方法
// function render() {
    
// }

let data = {
    text: 'hello world',
};

defineReactive(data, 'text', data.text);

console.log(data.text);
data.text = 'hello Vue';

// // Vue实例
// let app = new Vue({
//     data: {
//         text: 'hello world',
//     },
// })

// // 改变Vue
// app._data.text = 'hello vue';
