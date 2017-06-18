<template>
    <div class="jumbotron">
        <div class="container">
           <h1>Team users</h1>
           <ul class="list-group">
            
                <li class="list-group-item"
                    v-for="user in users">
                    <div class="row">
                        <div class="col-md-1 col-xs-2">
                            <input type="checkbox" v-model="user.contacted"/>
                        </div>
                        <div :class="{'col-md-10 col-xs-8':true,'list-group-item-success':!user.contacted,'list-group-item-danger contacted':user.contacted}">
                            {{user.name}} ({{user.email}})
                        </div>
                        <div class="col-md-1 col-xs-2">
                            <button class="btn btn-danger" v-on:click="deleteUser(user)">
                                <span class="glyphicon glyphicon-trash"/>
                            </button>
                        </div>
                     </div>
                </li>
           </ul>
           
        </div>
    </div>
</template>

<script>
    export default{
        name:'users',
        data(){
            return {
                newUser:{},
                users:[]
            }
        },
        methods:{
            addUser: function(e){
                this.users.push({
                    name:this.newUser.name,
                    email:this.newUser.email,
                    contacted:false
                });
                e.preventDefault();
            },
            deleteUser: function(user){
                this.users.splice(this.users.indexOf(user),1);
            }
        }
        ,
        created: function(){

            this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(function(response){
                this.users = response.data;
            });
        }
    }
</script>

<style scoped>
    p{
        font-size: 14px;
    }
   .contacted{
       text-decoration: line-through;
   }
</style>