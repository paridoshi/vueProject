
<template>
    <div>
    <br/><br/>
      <b> <font color="blue">  Edit Comments of PostID {{id}}</font> </b>
      <br/><BR/>
        
    <table border ="1" style="mrgin:15px;">
    <colgroup>
       <col span="1" style="width: 5%;">
       <col span="1" style="width: 3%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 13%;">
    </colgroup>
    

      <thead>
        <tr style="color:blue; background-color:lightgray">
          <th> Remove</th>
          <th>Id</th>
          <th>Name</th>
        
          <th>Email</th>
          <th>Body</th>
          <th>Edit</th>
        </tr>
      </thead>

      <tbody>
     
                <tr v-for=" (dt,index) in comments " :key=dt.id >
                    <td><button v-on:click ="remove(dt,index)" style="color:red">X</button></td>
                    <td>{{dt.id}}</td>
                    <td> <input type="text" id="Name" v-model="dt.name" size="40"> </td>
                    <td><input type="text" id="Email" v-model="dt.email" size="30"></td>
                    <td style="text-align:left"><input type="text" id="Body" v-model="dt.body" size="108"></td>
                    <td> <button v-on:click="update(dt)" style="color:blue">Update</button></td>
                </tr>
        </tbody>
    </table>

            <p> <button v-on:click="back()">Go back to homepage</button></p>
    
            
              
     </div>

</template>


<script>
import axios from "axios";


export default {
    data () {
            return {
                id: 0,
                msg:"hello",
                userId:null,
                title:null,
                body:null,
                comments:null
            }
            
        },
        created() {
            this.id=this.$route.params.id;
            this.userId=this.$route.params.userId;
            this.title=this.$route.params.title;
            this.body=this.$route.params.body;
            axios.get("https://jsonplaceholder.typicode.com/posts/"+this.$route.params.id+"/comments").then((result) => {
            console.log("result:"+result.data[0].name);
            this.comments = result.data; 

            })
        },

        methods: {
            navigate() {
            this.$router.push({path:'./' });
            },
            back() {
            this.$router.push({path:'./' });
            },
  
        update:function(dt){
            var _itself = this
            var headers={'Content-type': 'application/json; charset=UTF-8' };
            console.log("posting"+dt.id);
            axios.post("https://jsonplaceholder.typicode.com/posts/"+dt.postId+"/comments/?="+dt.id, dt, { headers })
            .then(function (response){ console.log("done update"+response.data);
            _itself.$alert("Updated successfully"); });
          },

        remove:function(dt,ind){
            var _self=this;
            var headers={'Content-type': 'application/json; charset=UTF-8' };
            console.log("deleting"+dt.id);
            axios.delete("https://jsonplaceholder.typicode.com/comments/"+dt.id, dt, { headers })
             .then(function (response) {console.log("deleting function "+response);
             _self.comments.splice(ind,1);
             _self.$alert("Deleted successfully.");

              });
             
          },
          
        }
            
        }

</script>