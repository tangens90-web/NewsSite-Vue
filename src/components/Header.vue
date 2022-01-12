<template>
<div>
    <heads></heads>

    <!-- <iframe width="853" height="480" src="https://www.youtube.com/embed/fmMFcCruttM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
    <!-- </div> -->

    <sign-form></sign-form>
    <log></log>
    <posts></posts>

</div>
</template>

<script>
import Heads from "./Head.vue"
import SignForm from "./SignForm.vue"
import Posts from "./Posts.vue";
import Log from "./LogIn.vue"
export default {
    name: 'Header',
    data() {
        return {

        }
    },
    components: {
        Heads,
        SignForm,
        Posts,
        Log
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
