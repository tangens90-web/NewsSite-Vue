<template>
<div>
    <section class="authorization" v-if="sign">

        <div class="sign_up_block">
            <div class="sign_form">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                        <span v-if="!emailBool">Введён неправильный Email адрес</span> <br>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                        <span v-if="!passwordLength ">Пароль должен быть больше 5 символов</span>
                        <span v-if="!passwordBool">Пароли не совпадают</span> <br>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword2" v-model="confirmed_password">

                        <span v-if="!passwordBool">Пароли не совпадают</span> <br>
                    </div>
                    <p @click="sendToLogIn" class="send">If you already have account, pls log in</p>
                    <!-- <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
                    <div class="buttons_cont">
                        <button class="auth_button buttons--sign_up" @click.prevent="submit({email,password,confirmed_password})">Sign In</button>
                        <button class="auth_button buttons--log_in" @click.prevent="cancel">Cancel</button>
                    </div>
                </form>

            </div>
        </div>

    </section>
</div>
</template>

<script>
export default {

    data() {
        return {
            email: "",
            password: "",
            confirmed_password: "",
            emailBool: true,
            passwordBool: true,
            passwordLength: true
        }
    },
    methods: {
        sendToLogIn() {
            this.$store.state.sign = null
            this.$store.state.log = true
            this.email = this.password = this.confirmed_password = ''
        },
        validateEmail(emailAdress) {
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return emailAdress.match(regexEmail) ? true : false

        },
        submit({
            email,
            password,
            confirmed_password
        }) {
            this.emailBool = true
            this.passwordBool = true
            this.passwordLength = true
            console.log(password, confirmed_password)
            if (this.validateEmail(email) && password.length >= 5 && (password === confirmed_password)) {

                this.$store.dispatch('addUser', {
                    email,
                    password,
                    confirmed_password
                })
                this.email = this.password = this.confirmed_password = ''
            } else {
                if (!this.validateEmail(email)) {
                    this.emailBool = false
                    console.log(password == confirmed_password)

                }
                if (!(password.length >= 5)) {
                    this.passwordLength = false
                }

                if (!(password == confirmed_password) && password.length >= 5) {
                    this.passwordBool = false
                }
            }
        },

        cancel() {
            this.$store.state.sign = null
            this.email = this.password = this.confirmed_password = ''
        }
    },
    computed: {
        sign() {
            return this.$store.getters.sign
        }
    },
}
</script>

<style scoped>

</style>
