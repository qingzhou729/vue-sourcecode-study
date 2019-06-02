
new Vue({
    el: '#app',
    data() {
        return {
            a: 1,
            b: 2,
            // c: 0,
            // // d: 0,
            // test1: 1,
            // test1: 2,
            // e: 1,
            // list: [0, 1, {a:1}],
            // item: {
            //         tabName: '交易物流',
            //         active: true,
            //         index: 1,
            //         unReadMessage: 0,
            //         lll: {b:0, c: [1,2,3]}
            //     },
            // tabs: [
            //     {
            //         tabName: '交易物流',
            //         active: true,
            //         index: 1,
            //         unReadMessage: 0,
            //     },
            //     {
            //         tabName: '通知中心',
            //         active: false,
            //         index: 22,
            //         unReadMessage: 0,
            //     },
            // ],
        }
    },
    watch: {
        a: function (val, oldVal) {
            console.log('new: %s, old: %s', val, oldVal)
        },
        b: function (val, oldVal) {
            console.log('new: %s, old: %s', val, oldVal)
        },
    },
    computed: {
        // d: {
        //     set() {
        //         console.log('computed d set');
        //         return this.a - 1;
        //     },
        //     get() {
        //         console.log('computed d get');
        //         return this.a + 1;
        //     },
        // },
        e() {
            return this.a+1;
        },
        f() {
            return this.a+2;
        },
        // f() {
        //     return this.a + 1;
        // },
        // l() {
        //     return this.a + 1;
        // },
        // v() {
        //     return this.a + 1;
        // },
    },
    beforeCreate() {
        // console.log(this.$data)
        // console.log('beforeCreate')
    },
    created() {
        // console.log(this.$data)
        // this.d = 1;
        // console.log('created');
    },
    beforeMount() {
        // console.log('beforeMount');
    },
    mounted() {
        // console.log(88654322211)
        // this.$nextTick(() => {
        //     console.log(this._watchers)
        //     console.log(this._watcher)
        // })

        // 键路径
        // this.$watch('a', function (newVal, oldVal) {
        // // 做点什么
        //     console.log('do something')
        // })
        
        // console.log('this.list', this.list);
        // console.log('mounted');
        //  console.log(1111)
    },
    methods: {
        click() {
            // this.item.tabName1 = '111'
            this.item1 = {a:1}
            this.$set(this.item1, 'tabName1', 1);
            
        },
    },
});


// class A  {
//     get () {
//         return 'A2';
//     }
//     set () {
//         return 'A7';
//     }
// };
// let a = new A();

// console.log(a.get());