Vue.component('block',{
    props: ['props'],
    template:'<div class="component"><div class="grey-circle"></div><h2>{{props.h}}</h2><p>{{props.p}}</p><ul><li><span>{{props.li1}}</span></li><li><span>{{props.li2}}</span></li><li><span>{{props.li3}}</span></li></ul></div>'
})


var vueComponent = new Vue({
    el:'#vue',
    data () {
        return {
            template: {
                h: 'Lorem Ipsum is simply dummy text',
                p: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                li1:"Lorem Ipsum has been the industry's",
                li2: "Standard dummy text ever since",
                li3: "But also the leap into electronic typesetting"
            },
        }
    },

    computed: {
        info: function () {
            var info = []
            for (let i = 0; i < 5; i++) {
                info.push(this.template)
            }
            return info
        }
    }
})