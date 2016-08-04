/* 
Changes: 

    1) Rendering lists:
        0.12: v-repeat="name: names" -> {{name}}
        1.0 & 2.0: v-for="name in names" -> {{name}}

    2) v-on syntax:
        0.12: v-on="event: funcName"
        1.0 & 2.0: v-on:event="funcName" or @event="funcName"

*/

new Vue({
    el: '#demo',
    data: {
        names:[
            'Sanjay', 'Dan', 'Susan', 'Malik'
        ]
    },
    methods:{
        addName: function(){
            this.names.push(this.newName)
            this.newName=''
        }
    }
})