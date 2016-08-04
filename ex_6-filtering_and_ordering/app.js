/* 
Changes:

    1) Rendering list:
        0.12: v-repeat="person: people" -> {{person.name}}
        1.0 & 2.0 v-for="person in people" -> {{person.name}}

    2) orderBy filter:
        0.12 & 1.0: ...people | orderBy sortKey
        2.0: Use computed property, see examples below.
            lodash methods such as _.orderBy and _.sortBy 
            can make it easier to sort and order arrays of objects
            in place of built-in vue filters.

    3) filterBy search:
        0.12 & 1.0: ...people | filterBy search |
        2.0: Use computed property. See filterPeopleByName, 
            filterPeopleByAge, and filterIt.
    
    4) class binding and styling:
        0.12: v-class="active: sortKey=='name'"
        1.0 & 2.0: v-bind:class="{'active': sortKey==='name'}"

    5) capitalize filter:
        0.12 & 1.0: {{column | capitalize}}
        2.0: create own filter or computed property. See example below.

*/

const PEOPLE = [
  {name:'Ping', age: 20},
  {name:'Amir', age: 24},
  {name:'Shabnum', age: 30 },
  {name: 'Mark', age: 40}
]

new Vue({
  el:"#app",
  data: {
    searchDetails: '',
    sortKey:'',
    reverse: false,
    columns: ['name', 'age'],
    people: PEOPLE
  },
  methods: {
    sortBy: function (key) {
    this.sortKey = key
     this.reverse = ! this.reverse
     if(key==='name' && this.reverse){
       this.people = _.orderBy(this.people, ['name'], ['asc'])
     }else if(key==='name' && !this.reverse){
       this.people = _.orderBy(this.people, ['name'], ['desc'])
     }else if(key==='age' && this.reverse){
       this.people = _.orderBy(this.people, ['age'], ['asc'])
     }else{
       this.people = _.orderBy(this.people, ['age'], ['desc'])
     }
    }
  },
  filters: {
      capitalize: function(col){
         return _.capitalize(col)
      }
  },
  computed: {
    
    
    filterIt: function(){
      
       if(_.isString(this.searchDetails)){
        return this.filterPeopleByName;
       }else{
         return this.filterPeopleByAge;
       }
    },
    
    filterPeopleByName: function(){
      var self = this
          return this.people.filter(function(p){
            return p.name.indexOf(self.searchDetails) > - 1
          })  
      
     },
    filterPeopleByAge: function(){
      var self = this
          return this.people.filter(function(p){
            var age = p.age.toString()
            return age.indexOf(self.searchDetails) > - 1
          })  
    }
    
  }
})