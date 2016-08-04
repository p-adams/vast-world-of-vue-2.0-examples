/*
Changes:
    
    1) v-on syntax:
        0.12: v-on="keyup: onKeyUp"
        1.0 & 2.0 v-on:keyup="onKeyUp" or @keyup="onKeyUp"

    2) filter:
        0.12 & 1.0: onKeyUp | key enter
        1.0 & 2.0: use modifier. Ex, @keyup.enter="onKeyUp"
    
    3) Listening for multiple events:
        0.12: v-on="keyup: onKeyUp, blur: onBlur"
        1.0 & 2.0: use multiple 'v-on's. Ex, @keyup="onKeyUp" @blur="onBlur"

 */

new Vue({
    el: '#demo',
    methods:{
        onKeyUp: function(){
            console.log('key up!')
        },
        onBlur: function(){
            console.log('handle blur')
        }
    }
})