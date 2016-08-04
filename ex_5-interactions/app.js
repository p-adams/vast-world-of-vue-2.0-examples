/*
Changes: 

    1) v-on syntax:
        0.12: v-on="event: funcName"
        1.0 & 2.0: v-on:event="funcName" or @event="funcName"

    2) class and style bindings:
        0.12: v-class="active: liked"
        1.0 & 2.0: v-bind:class="{'active': liked}"
 */

new Vue({
    el: "#post",
    data: {
        isVisible: true,
        liked: false,
        likesCount: 10
    },
    methods: {
        toggleLike: function(){
            this.liked = !this.liked
            this.liked ? this.likesCount++ : this.likesCount--
        }
    }
})