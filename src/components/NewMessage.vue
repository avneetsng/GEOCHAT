<template>
    <div class="newMessage">
        <form @submit.prevent="addMessage">
            <!-- <label for="newMessage">New Message:</label> -->
            <input type="text" name="newMessage" v-model="newMessage" autocomplete="off" placeholder="Type a message here">
            <br>
            <p v-if="feedback" class="red-text center-align">{{feedback}}</p>
        </form>
    </div>
</template>
<script>
import db from '@/firebase/init'
export default {
    name:'NewMessage',
    data(){
        return{
            newMessage:null,
            feedback:null
        }
    },
    props:['name'],
    methods:{
        addMessage(){
            // console.log(this.name,this.newMessage,Date.now());
            
            if(this.newMessage){
              db.collection('messages').add({
                  content:this.newMessage,
                  name:this.name,
                  timeStamp:Date.now()
              }).catch(err=>console.log(err))
               this.newMessage=null;
               this.feedback=null;
            }
            else{
                this.feedback='You dumbass , you have to write a text in order to send it '
            }
        }
    }


}
</script>

<style scoped>
input{
    color: #bdbdbd;
}
::placeholder{
    color: #546e7a
}

</style>


