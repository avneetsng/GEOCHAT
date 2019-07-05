<template>
    <div class="welcome container">
        <div class="card  blue-grey darken-4 z-depth-5">
            <div class="card-content center-align">
                <h2 >WELCOME</h2>
                <hr class="style-2">
                <br>
                <form @submit.prevent="enterChat">
                    <label for="name">Enter Credentials:</label>
                    <input type="text" name="name" v-model="name" autocomplete="off" placeholder="Name"/>
                    <!-- <label for="password">Password:</label> -->
                    <input type="text" placeholder="Password" v-model="password" name="password" autocomplete="off">
                     <p v-if="feedback" class="red-text">{{feedback}}</p>
                    <br><br>
                    <button class="btn black">Enter Chat</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Welcome',
    data(){
        return{
           name:null,
           feedback:null,
           password:null
        //    password=8520
        }
    },
    methods:{
        enterChat(){
           if(this.name && this.password=='8520')
           {
              this.$router.push({name:'Chat', params:{name:this.name}});
            //this is the component ^ ; and this ^ is props          
              this.name=null;
           }
          else{
              this.feedback='Enter correct name and passcode you moron'
          }
           
        }
    }

}
</script>
<style scoped>
.welcome h2{
    color:#00bfa5 ;
    font-size: 5vh;
}
.welcome input{
    color: white;
    margin-top: 3vh;
}
label{
    position: absolute;
    font-size: 2.2vh;
     

}

.welcome{
    position: relative;
    margin-top: 20vh;
    max-width: 50vw;
}
hr.style-2 {
    margin-top: -2vh;
    border: 0;
    height: 1px;
    width: 28vw;
    background-image: linear-gradient(to right, rgba(100, 110, 110, 0), rgba(110, 110, 110, 0.75), rgba(110, 110, 110, 0));
}
::placeholder{
    color: #546e7a
}

</style>


