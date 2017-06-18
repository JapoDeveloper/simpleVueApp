<template>
    <div class="container">
        <h1>{{title}}</h1>
        <div class="row">
            <div class="col-md-12">
               <img v-bind:src="author.photo" width="200"></img>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-md-2 col-md-offset-5">
                <label>First name: </label>
                <input type=text class="form-control" v-model="author.firstName"/>
            </div>
            <div class="col-md-2 col-md-offset-5">
                <label>Last name: </label>
                <input type=text class="form-control" v-model="author.lastName"/>
            </div>
        </div>
        <div class=row>
            <div class="col-md-12"><h3>My name is {{authorFullName}}</h3></div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'home',
        data(){
            return {
                title:'My First Vue.js App',
                author:{
                    firstName:'Julio',
                    lastName:'Peña',
                    photo:require('../assets/img/yo.png')
                }
                
            }
        },
        computed:{
            authorFullName:function(){
                return this.author.firstName+" "+this.author.lastName;
            }
        }
    }
</script>

<style scoped>
.C40L{
    width:40%;
    float:left;
    /*border:1px solid #ccc;*/
}

.C40R{
    width:40%;
    float:right;
    border:1px solid #ccc;
}
</style>