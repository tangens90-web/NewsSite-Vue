import Vue from 'vue'
import Vuex from 'vuex'
import AxiosRequests from "../axios.js"

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        posts:[],
        sign:null,
        log:null,
        
    },
    mutations: {
        openAnyForm(state,{sign,log}){
           state.sign = sign
           state.log = log
           console.log(state.sign,state.log)
        },
        submitSign(state,sign){
            
        },
        'GET_POSTS'(state, post) {
            
            state.posts = post.map((item)=>({
                ...item,
                count:0
            }));
            
        },
        'ADD_POST'(state,post){
            this.GET_POSTS
            // state.posts = post;
        },
        'ADD_USER'(state,{params}){

            state.sign = null
        },
        'ADD_LIKE'(state,id){
           
            state.posts.forEach(post => {
                if(post.id==id){
                    post.count++
                    
                }
            })
        }
    },
    actions: {
        async getPosts({commit}) {
            let data =  await AxiosRequests.getPosts()
            console.log(data)
            commit('GET_POSTS', data);
        },
        async addPost({commit},text) {
            await AxiosRequests.addPost(text)
            let data =  await AxiosRequests.getPosts()
            console.log(data)
            commit('ADD_POST', data);
        },
        async addUser({commit},params){
            console.log(params)
            await AxiosRequests.addUser(params)
            commit('ADD_USER',{params})

        }
    },
    getters: {
        posts: state => state.posts,
        sign: state=>state.sign,
        log: state=>state.log
    }

})
