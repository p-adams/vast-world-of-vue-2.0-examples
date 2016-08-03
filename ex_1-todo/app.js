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
        2.0: Use Array.prototype.splice, see
            removeTask() method for example

    4) v-el:
        0.12: <input v-el="newTask"...> -> this.$$.newTask.focus()
        1.0: <input v-el="newTask"...> -> this.$els.newTask.focus()
        2.0: <input ref="newTask"...> -> this.$refs.newTask.focus()

    5) Built-in filters:
        0.12: v-repeat="task: tasks | inProgress"
        1.0: v-for="task in tasks | inProgress" -> create inProgress filter
        2.0: use computed property, ex v-for="task in inProgress",
            see inProgress() computed property below.

-18:12

*/

new Vue({
    el: "#tasks",
    data: {
        newTask: '',
        tasks: []
    },
    methods: {
        addTask: function(e){
            e.preventDefault()
            if(!this.newTask)return
            this.tasks.push({
                body: this.newTask,
                completed: false
            })
            this.newTask=''
        },
        editTask: function(task){
            this.removeTask(task)
            this.newTask = task.body
            this.$refs.newTask.focus()
        },
        toggleTaskCompletion: function(task){
            task.completed = !task.completed
        },
        completeAll: function(){
            this.tasks.forEach(function(task){
                task.completed = true
            })
        },
        removeTask: function(task){
            var index = this.tasks.indexOf(task)
            this.tasks.splice(index, 1)
        },
        clearCompleted: function(){
            this.tasks = this.tasks.filter(function(task){
                return !task.completed
            })
        }
    },
    computed: {
        inProgress: function(){
            return this.tasks.filter(function(task){
                return ! task.completed
            })
        },
        completions: function(){
            return this.tasks.filter(function(task){
                return task.completed
            })
        }
    }
})