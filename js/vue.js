   var EventBus = new Vue;
   
   
   Vue.component('create-task',{
        data: function(){
            return{
                message: ""
            }
        }, 
        props:{
            // task:{
            //     type: String, required: true
            // },
            add:{
                type: Function, required: true
                }
            },
         template: 
            `
                <div>
                    <inputTask v-model="text"> </inputTask>
                    <button @addtext=escucha  v-on:click="$emit('message', add(message)) ">Submit</button>
                </div>
                `
        , methods:{
            escucha: function(text){
                console.log(text);
                text = message
            }

        }
    })
    
    // Vue.component('clearButton',{
    //     template:
    //         `
    //         <div>
    //             <button v-on:click="$emit('text', clear(text))">Clear</button>
    //         </div>
    //         `
    // })

    Vue.component('inputTask',{
        data: function(){
            return{
                text: ""
            }
        },
        template:
        `
        <input type="text" v-model="text"/>
        `,
        methods:{
            addtext: function(){
            console.log(this.text)
            this.$emit("addtext", this.text)
            }
        }
    })



    new Vue({
            el: "#app", 
            data:{
                tasks: ["Example"]
            },
            methods:{
                addtask(task) {
                    console.log(this.task);
                    if(task == undefined || task == null || task == ""){
                        alert("empty task");
                    }else{
                        this.tasks.push(task);
                    }
                },
                deletetask(index){
                    console.log(index);
                    setTimeout(()=>{
                        this.tasks.splice(index,1);
                    }, 3000)
                }
            }
    })
 