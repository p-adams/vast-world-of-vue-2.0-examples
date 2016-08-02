/* 
Changes: 

    1) List rendering syntax:
        0.12: v-repeat="task: tasks" -> {{task.body}}
        1.0 & 2.0: v-for="task in tasks" -> {{task.body}}

    2) v-on directive:
        0.12: v-on="click: funcName"
        1.0 & 2.0: v-on:click="funcName" or @click="funcName"
    
    3) Remove item from array:
        0.12 & 1.0: this.tasks.$remove(task)
        2.0: Use Array.prototype.splice, see removeTask() method for example
-18:12

*/

new Vue({
    el: "#tasks",
    data: {
        newTask: '',
        tasks: [

        ]
    },
    methods: {
        addTask: function(e){
            e.preventDefault()
            this.tasks.push({
                body: this.newTask,
                completed: false
            })
            this.newTask=''
        },
        removeTask: function(task){
            var index = this.tasks.indexOf(task)
            this.tasks.splice(index, 1)
        }
    }
})