<template>
    <div>
        <br>

        <H1><font color="Blue"><b> Add new post </b></font></H1>
                <p>

                    
                    <br>

                    <label for="title"><b>Title</b></label> 
                     
                    <input type="text" id="title" v-model="title" placeholder="add title for the post" style=" margin: 15px;width:80%"> 
                    <br>
                    </p>
                    <p>
                    <label for="body"><b>Body</b></label> 
                 <input type="text" id="body" v-model="body" size= "50" placeholder ="add post body" style=" margin: 15px;width:80%">
                 </p> 
                 <br>  <br><br>
                <p>
                 <button v-on:click="Save()" style="margin:5px; width: 200px ; height: 30px">Save  </button>
                 &nbsp;&nbsp;
&nbsp;


                 <button v-on:click="Cancel()" style="margin:5px;width:200px; height :30px">Cancel  </button>
                    
                </p>

                <p> <button v-on:click="back()">Go back to homepage</button></p>
                

    </div>
</template>
<script>
import axios from "axios";

export default {
    data () {
            return {
                
                msg:"hello",
            
                title:null,
                body:null,
                
            }
            
        },
        created() {
            
        },
        
        methods: {
            Cancel() {
            this.$router.push({path:'./' });
            },

            back() {
            this.$router.push({path:'./' });
            },
            Save:function(){
                var _self = this;
            var headers={'Content-type': 'application/json; charset=UTF-8' };
            var obj = {id:101,userId:1,title:this.title,body:this.body};
            console.log("saving");
            axios.post("https://jsonplaceholder.typicode.com/posts/", obj, { headers })
            .then(response => {
                console.log("done save"+response.data);
            _self.$router.push({path:'./' });
            });
            
          }
        }

}
</script>