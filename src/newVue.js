function init(Vue) {
    console.log(Vue.prototype);
    Vue.prototype._init = function (options) {
        console.log(options);
    }
}

function Vue (options) {
    this._init(options);
};

init(Vue);

new Vue({});
