   Vue.prototype.EventBus = new Vue();
   
   Vue.component('create-task',{
        data: function(){
            return{
                task: ''
            }
        }, 
        
         template: 
        `
        <input type="text" v-model="task"/>
        `
        ,
            mounted(){
                Vue.prototype.EventBus.$on("aMsg",() => {
                    console.log(this.task);
                    Vue.prototype.EventBus.$emit("add", this.task);
                })
            } 
        })
    

    Vue.component('input-task',{
        template:
        `
        <button @click="sendMsg">Submit</button>
        `,
        methods:{
            sendMsg() {
                Vue.prototype.EventBus.$emit("aMsg");
              }
        }
    })



    new Vue({
            el: "#app", 
            data:{
                tasks: ["Example"]
            },
            mounted(){
                Vue.prototype.EventBus.$on("add",task => {
                    if(task == undefined || task == null || task == ""){
                        alert("empty task");
                    }else{
                        this.tasks.push(task);
                    }
                    
                  })
            },
            methods:{
                deletetask(index){
                    console.log(index);
                    setTimeout(()=>{
                        this.tasks.splice(index,1);
                    }, 3000)
                },
            }
        })
 