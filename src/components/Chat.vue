<template>
    <div class="chat container">
        <h2 class="center-align  teal-text text-accent-4">CHAT ROOM</h2>
        <hr class="style-2">
        <br>
        <div class="card blue-grey darken-4">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text">{{message.name}} :</span>
                        <span class="grey-text ">{{message.content}}</span>
                        <span class="grey-text time text-darken-1">{{message.timeStamp}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action  blue-grey darken-3">
                 <!-- <input type="text"> -->
                 <NewMessage :name="name"/>
            </div>
        </div>
    </div>
</template>
<script>
import NewMessage from './NewMessage'
import db from '@/firebase/init'
import moment from 'moment'
export default {
    name:'Chat',
    data(){
        return{
              messages:[]
        }
    },
    props:['name'],
    components:{
        NewMessage
    },
    created(){
        let ref= db.collection('messages').orderBy('timeStamp')
        ref.onSnapshot(snapshot=>{
          snapshot.docChanges().forEach(change=>{
              if(change.type=='added'){
                  let doc=change.doc
                  this.messages.push({
                      id:doc.id,
                      name:doc.data().name,
                      content:doc.data().content,
                      timeStamp: moment(doc.data().timeStamp).format('LT')
                  })
              }
          }) 
        })
    }
}
</script>

<style scoped>
.time{
    display: block;
    font-size: .8em;
}
hr.style-2 {
    margin-top: -2vh;
    border: 0;
    height: 1px;
    width: 40vw;
    background-image: linear-gradient(to right, rgba(100, 110, 110, 0), rgba(110, 110, 110, 0.75), rgba(110, 110, 110, 0));
}
input{
    color: #bdbdbd;
}
.messages{
    max-height: 40vh;
    overflow: auto;
    font-size: 1em;
}
.messages::-webkit-scrollbar{
    width: 3px;
}
.messages::-webkit-scrollbar-track{
    background: #ddd;
}
.messages::-webkit-scrollbar-thumb{
    background: #aaa;
}
.chat h2{
    font-size: 5vh;
}
</style>


