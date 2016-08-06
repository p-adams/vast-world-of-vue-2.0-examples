/* 
Changes: 

    1) Passing arguments into filters:
        0.12 & 1.0: {{message | reverse wordsOnly}}
        2.0: {{message | reverse('wordsOnly')}}

    2) Rendering lists:
        0.12: v-repeat="people" -> {{name}} {{gender}}
        1.0 & 2.0: v-for="person in people" -> {{person.name}} - {{person.gender}}

    3) Filtering rendered lists:
        0.12 & 1.0: people | gender
        2.0: use computed property -> v-for="person in genderFilter" ->
            implement gender computed property (see ex. below)


*/

Vue.filter('reverse', function(value, wordsOnly){
    if(wordsOnly){
        return value.split(' ').reverse().join(' ')
    }
        return value.split('').reverse().join('')
})

new Vue({
    el: "#app",
    data: {
       people: [
           {name: 'Mike', gender: 'male'},
           {name: 'Susan', gender: 'female'},
           {name: 'Barb', gender: 'female'},
           {name: 'Dave', gender: 'male'},
       ],
       gender: 'all'
    },
    computed: {
        genderFilter: function() {       
            var self = this 
            if(this.gender == 'all'){
                return this.people
            }
            return this.people.filter(function(person){
                return person.gender == self.gender
            })
        }
    }
})