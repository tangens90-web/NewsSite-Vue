<template>
<div>

    <heads></heads>

    <div class="container">
        <div class="one_post" v-for="item in post" :key="item.id">
            <h1>{{item.title}}</h1>
            <p>{{item.body}}</p>
        </div>
    </div>

    <sign-form></sign-form>

    <log></log>

    <div class="container">

        <div class="comments">
            <h3>Комментарии</h3>

            <input type="text" class="comment_input" placeholder="Оставьте комментарий" v-model="comment"> <br>

            <button class="add_comment" @click="addComment">Добавить комментарий</button>

        </div>

        <div class="comment_container">

            <div class="comment" v-for="item in comments" :key="item.id">

                {{ item }}
            </div>

        </div>

    </div>

</div>
</template>

<script>
import Heads from "./Head.vue"
import SignForm from "./SignForm.vue"

import Log from "./LogIn.vue"

export default {
    data() {
        return {
            comment: '',
            comments: []
        }
    },
    computed: {
        post() {
            return this.$store.getters.posts.filter(item => item.id == this.$route.params.id)
        }
    },
    methods: {
        addComment() {
            if (this.comment.length >= 5) {
                this.comments.push(this.comment)
                this.comment = ''
            }

        }
    },
    components: {
        Heads,
        SignForm,
        Log

    },

}
</script>

<style scoped>
.one_post {
    font-size: 25px;
    text-align: center;
    width: 90%;
    margin: 20px auto;
}

h1 {
    padding-top: 1px;
    margin-top: 1px;
}

p {
    padding-top: 1px;
}

.comments {
    font-size: 25px;
}

.comment_input {
    width: 500px;
    height: 100px;
    font-size: 25px;
}

.add_comment {
    font-size: 25px;
}
</style>
