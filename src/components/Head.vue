<template>
<div>
    <section class="header_lol">
        <header class="header">
            <div class="container">
                <div class="navigation">
                    <div class="nav_blocks">
                        <div class="left_header">
                            <div class="name">
                                <h2 @click="goToStartPage">CyberValorant</h2>
                            </div>
                            <div class="nav_block_right">

                                <div class="navigation_bar">
                                    <ul class="nav_list_no_burger">
                                        <li class="nav_item">
                                            <a href=""> Новости</a>
                                        </li>
                                        <li class="nav_item">
                                            <a href=""> Расписание</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                        <div class="right_header">

                            <div class="auth_block">
                                <button type="button" class="button sign_up" @click="changesome(sign=true,log=false)">Sign up</button>
                                <button type="button" class="button log_in" @click="changesome(sign=false,log=true)">Log in</button>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="nav_block">
                    <div class="burger_menu" ref="burger">

                        <ul class="nav_list_burger">
                            <li class="nav_item">
                                <div class="auth_block_burger">
                                    <button type="button" class="btn btn-outline-primary" @click="changesome(sign=true,log=false)">Sign up</button>
                                    <button type="button" class="btn btn-outline-secondary" @click="changesome(sign=false,log=true)">Log in</button>
                                </div>
                            </li>
                            <li class="nav_item">
                                <a href=""> Новости</a>
                            </li>
                            <li class="nav_item">
                                <a href=""> Расписание</a>
                            </li>

                        </ul>
                    </div>

                    <button class="burger_btn" @click="toggle"><span></span></button>
                </div>

            </div>
        </header>
    </section>

</div>
</template>

<script>
// import { mapActions } from "../store/store";

export default {

    data() {
        return {}
    },
    methods: {
        // ...mapActions,
        goToStartPage() {
            this.$router.push({
                path: '/'
            })
        },
        toggle() {
            this.$refs.burger.classList.toggle("opened")
        },

        changesome(sign, log) {

            console.log("qeqeqe", sign, log)
            this.$store.commit("openAnyForm", {
                sign,
                log
            })
        }

    },

}
</script>

<style scoped>

</style>
