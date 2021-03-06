import axios from "axios";


export default class AxiosRequests {

     static getPosts(){
         return new Promise ((resolve,reject )=>{
          axios.get(`https://jsonplaceholder.typicode.com/posts`).then(
             res=> {
                 const data = res.data
                 resolve(data)
        }).catch(error=>{
            reject(error)
        })
    })
    }
    static addPost(text){
            return axios.post(`http://localhost:3000/posts`,{desc:text})
    }
    static addUser(params){
        return axios.post(`http://localhost:3000/users`,params)
    }

}


 