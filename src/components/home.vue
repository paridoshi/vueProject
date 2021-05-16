
<template>
    <div>
    <br/><br/>
       <H1><font color="Blue"><b>Home Page</b></font></H1>

    
      <br/>
      <p align = "right">
              <router-link to='/AddNew'>
                <button>Add Post </button> </router-link>
                </p>
      <br/>

    <table border="1" style="margin:15px;">
      <thead>
        <tr style="color:blue; background-color:lightgray; height: 30 px">
          <th>ID</th>
          <th>UserId</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>

      <tbody>
           <tr v-for="dt in todos" :key="dt.id">
                    <td><button v-on:click="opnLink(dt)">{{dt.id}}</button></td>
                    <td>{{dt.userId}}</td>
                    <td>{{dt.title}}</td>
                    <td style="text-align:left; ">{{dt.body}}</td>
                </tr>
            </tbody>
    </table>
    
    </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    todos: null,
  }),
    created() {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      console.log("result:"+result.data[0].title);
      this.todos = result.data;

            })
          },
  methods:{
    opnLink:function(dt){
    console.log("you are here"+dt.id);
    this.$router.push({name:'EditDetails',params:{id : dt.id,userId:dt.userId,title:dt.title,body:dt.body}, query: { debug: true } });
    }
  }
}
</script>
