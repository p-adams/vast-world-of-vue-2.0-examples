/* 
Changes:
    1) ready():
        0.12 & 1.0: ready: function(){}
        2.0: mounted: function(){}
    
    2) param arguments:
        0.12 & 1.0: <input v-model="msg" number>
        2.0: Use modifiers. Ex, v-model.number="msg"
*/
new Vue({
    el: "#demo",
    data: {
        name: 'Change this'
    },
    mounted: function(){
        var that = this
        setInterval(function(){
            that.name = 'Updated'
        }, 5000)
    }
})